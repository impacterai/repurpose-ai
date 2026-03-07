# repurpose-ai-cli

AI content repurposer — turn any blog post into Twitter threads, LinkedIn posts, Instagram captions, email newsletters & more.

## Install

```bash
npm install -g repurpose-ai-cli
```

## Usage

```bash
# From a file
repurpose blog-post.md

# Inline text
repurpose --text "Your blog post content here..."

# Pipe from stdin
cat article.txt | repurpose --stdin

# Select specific formats
repurpose post.md --formats twitter_thread,linkedin_post

# JSON output
repurpose post.md --json
```

## Formats

- `twitter_thread` — Hooks, numbered tweets, engagement-optimized
- `linkedin_post` — Professional storytelling format
- `instagram_caption` — With hashtags and emoji
- `email_newsletter` — Subject line + formatted body
- `tiktok_script` — Timestamps, hooks, CTAs
- `blog_summary` — SEO-optimized condensed version

## Free

3 free repurposes. Get unlimited for $29 lifetime at [repurpose-ai](https://journalists-conversation-sell-spider.trycloudflare.com).

## License

MIT
