# 🔄 Repurpose AI

**Turn one piece of content into posts for every platform. In seconds.**

[**Try it free →**](https://journalists-conversation-sell-spider.trycloudflare.com)

---

## What is this?

Paste any blog post, article, or long-form content. Get back:

- 🐦 **Twitter/X threads** with hooks and engagement
- 💼 **LinkedIn posts** in storytelling format
- 📸 **Instagram captions** with hashtags
- 📧 **Email newsletters** with subject lines
- 🎵 **TikTok scripts** with timestamps
- 📝 **Blog summaries** optimized for SEO
- 🎥 **YouTube descriptions** with chapters
- 🎙️ **Podcast show notes**

Each output is **platform-native** — not just rewritten text, but content structured for how each platform actually works.

## Quick Start

### Web App (easiest)
1. Go to [Repurpose AI](https://journalists-conversation-sell-spider.trycloudflare.com)
2. Paste your content
3. Select formats → Click "Repurpose"
4. Copy results to each platform

### API
```bash
curl -X POST https://journalists-conversation-sell-spider.trycloudflare.com/api/repurpose \
  -H "Content-Type: application/json" \
  -d '{"content": "Your blog post...", "formats": ["twitter_thread", "linkedin_post", "instagram_caption"]}'
```

### Embed Widget (one line)
```html
<script src="https://journalists-conversation-sell-spider.trycloudflare.com/embed/widget.js" defer></script>
```
Adds a "Repurpose This" button to any page. [Demo →](https://journalists-conversation-sell-spider.trycloudflare.com/embed/demo.html)

## Free AI Tools

Standalone tools — no signup, no limits, 100% free:

| Tool | Description | Link |
|------|-------------|------|
| 🐦 Twitter Thread Generator | AI-powered thread creation | [Use →](https://journalists-conversation-sell-spider.trycloudflare.com/tools/twitter-thread-generator.html) |
| 💼 LinkedIn Post Generator | Professional storytelling format | [Use →](https://journalists-conversation-sell-spider.trycloudflare.com/tools/linkedin-post-generator.html) |
| 📸 Instagram Caption Generator | With hashtags | [Use →](https://journalists-conversation-sell-spider.trycloudflare.com/tools/instagram-caption-generator.html) |
| 🎵 TikTok Script Generator | Timestamps + hooks | [Use →](https://journalists-conversation-sell-spider.trycloudflare.com/tools/tiktok-script-generator.html) |
| 📧 Email Newsletter Generator | Subject lines + body | [Use →](https://journalists-conversation-sell-spider.trycloudflare.com/tools/email-newsletter-generator.html) |
| 🔢 Character Counter | Tweet counter + thread splitter | [Use →](https://journalists-conversation-sell-spider.trycloudflare.com/free/character-counter.html) |
| 📊 Headline Analyzer | Score 0-100 with suggestions | [Use →](https://journalists-conversation-sell-spider.trycloudflare.com/free/headline-analyzer.html) |
| 📖 Readability Checker | Flesch-Kincaid + grade level | [Use →](https://journalists-conversation-sell-spider.trycloudflare.com/free/readability-scorer.html) |
| #️⃣ Hashtag Generator | 30+ suggestions per topic | [Use →](https://journalists-conversation-sell-spider.trycloudflare.com/free/hashtag-generator.html) |

## Pricing

| Plan | Price | What you get |
|------|-------|-------------|
| **Free** | $0 | 3 AI repurposes + unlimited free tools |
| **Pro** | $19/mo | Unlimited repurposes, all formats, API |
| **All-Access** | $79/mo | 40+ AI tools in the Impacter AI suite |

## Tech Stack

- **Backend:** Node.js / Express
- **AI:** AWS Bedrock (Claude 3.5 Sonnet)
- **Payments:** Stripe
- **Hosting:** Cloudflare Tunnel

## The Story

Built by **Billions** — an autonomous AI agent. It researched the market, designed the product, wrote the code, set up Stripe payments, and deployed. All autonomously. It's one of 40 AI micro-tools built in a single session.

⭐ **Star this repo** if you find it useful!

## License

MIT
