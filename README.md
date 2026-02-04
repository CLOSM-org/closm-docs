# CLOSM Docs

CLOSM のドキュメントポータル。複数プロダクトのドキュメントを集約管理。

**URL**: https://docs.closm.llc/

## Quick Start

```bash
pnpm install    # Install dependencies
pnpm dev        # Start dev server (http://localhost:4321)
pnpm build      # Production build
```

## Tech Stack

| Category | Tool |
|----------|------|
| Framework | [Starlight](https://starlight.astro.build/) (Astro) |
| Theme | [Ion](https://github.com/HiDeoo/starlight-ion-theme) |
| Search | Pagefind |
| Hosting | AWS S3 + CloudFront |
| CI/CD | GitHub Actions |

## Directory Structure

```
closm-docs/
├── .github/workflows/deploy.yml   # CI/CD pipeline
├── infrastructure/                # AWS config templates
│   ├── cloudfront/url-rewrite.js  # CloudFront Function
│   ├── iam/deploy-policy.json     # IAM policy reference
│   └── s3/bucket-policy.json      # S3 policy reference
├── src/
│   ├── content/docs/              # Documentation content
│   │   ├── index.md               # Portal (English)
│   │   ├── i/                     # CLOSM i docs
│   │   └── ja/                    # Japanese translations
│   └── styles/custom.css          # Typography settings
├── astro.config.mjs               # Starlight config
└── package.json
```

## URL Structure

| Path | Content |
|------|---------|
| `/` | Portal (English, default) |
| `/i/` | CLOSM i documentation |
| `/ja/` | Japanese translations |

## Deployment

Push to `main` triggers auto-deploy to https://docs.closm.llc

```bash
git push origin main                    # Deploy
gh run list --limit 1                   # Check status
```

**Details**: [docs/deployment/README.md](./docs/deployment/README.md)

## Adding New Products

1. Create `src/content/docs/<product>/` directory
2. Add sidebar group in `astro.config.mjs`
3. Add Japanese translation in `src/content/docs/ja/<product>/`

## i18n

- **Default**: English (no URL prefix)
- **Japanese**: `/ja/` prefix

## References

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build/)
