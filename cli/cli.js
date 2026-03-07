#!/usr/bin/env node
const https = require('https');
const http = require('http');
const fs = require('fs');

const API = 'https://journalists-conversation-sell-spider.trycloudflare.com/api/repurpose';
const ALL_FORMATS = ['twitter_thread','linkedin_post','instagram_caption','email_newsletter','tiktok_script','blog_summary'];
const args = process.argv.slice(2);

if (!args.length || args.includes('--help') || args.includes('-h')) {
  console.log(`\n🔄 Repurpose AI CLI\n\nUsage:\n  repurpose <file>              Repurpose from file\n  repurpose --text "content"    Repurpose inline text\n  cat file | repurpose --stdin  Pipe content\n\nOptions:\n  --formats twitter_thread,linkedin_post   Select formats\n  --json                                   JSON output\n\nFormats: ${ALL_FORMATS.join(', ')}\n\nFree: 3 uses | Lifetime: $29 at https://journalists-conversation-sell-spider.trycloudflare.com\n`);
  process.exit(0);
}

let content = '', formats = ALL_FORMATS, jsonOut = false;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--text') content = args[++i];
  else if (args[i] === '--formats') formats = args[++i].split(',');
  else if (args[i] === '--json') jsonOut = true;
  else if (args[i] === '--stdin') {}
  else if (!args[i].startsWith('-')) {
    try { content = fs.readFileSync(args[i], 'utf8'); }
    catch(e) { console.error('Error:', e.message); process.exit(1); }
  }
}

function run(text) {
  const data = JSON.stringify({ content: text, formats });
  const url = new URL(API);
  const mod = url.protocol === 'https:' ? https : http;
  const req = mod.request(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }}, res => {
    let body = '';
    res.on('data', c => body += c);
    res.on('end', () => {
      const r = JSON.parse(body);
      if (jsonOut) { console.log(JSON.stringify(r, null, 2)); return; }
      if (r.success) {
        for (const [f, t] of Object.entries(r.results)) {
          console.log('\n' + '='.repeat(50));
          console.log('📋 ' + f.replace(/_/g,' ').toUpperCase());
          console.log('='.repeat(50));
          console.log(t);
        }
        console.log('\n✨ ' + Object.keys(r.results).length + ' formats | Get unlimited: https://journalists-conversation-sell-spider.trycloudflare.com');
      } else console.error('Error:', r.error);
    });
  });
  req.on('error', e => console.error('Failed:', e.message));
  req.write(data);
  req.end();
}

if (args.includes('--stdin')) {
  let s = ''; process.stdin.on('data', c => s += c); process.stdin.on('end', () => run(s));
} else if (content) run(content);
else { console.error('No content. Use --help'); process.exit(1); }
