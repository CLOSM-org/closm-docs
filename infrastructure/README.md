# Infrastructure

AWS infrastructure configurations managed in this repository.

## Directory Structure

```
infrastructure/
├── cloudfront/
│   └── url-rewrite.js    # CloudFront Function for URL rewriting
├── s3/
│   └── bucket-policy.json # S3 bucket policy (reference)
└── iam/
    └── deploy-policy.json # IAM policy for GitHub Actions (reference)
```

## CloudFront Function

### url-rewrite.js

Rewrites directory-style URLs to include `index.html`.

| Input | Output |
|-------|--------|
| `/about` | `/about/index.html` |
| `/about/` | `/about/index.html` |
| `/style.css` | `/style.css` (unchanged) |

### Deployment

CloudFront Function is managed manually (rarely needs updates).

**Update procedure** (when url-rewrite.js changes):
```bash
# Create function (first time only)
aws cloudfront create-function \
  --name closm-docs-url-rewrite \
  --function-config Comment="URL rewrite for static site",Runtime=cloudfront-js-2.0 \
  --function-code fileb://infrastructure/cloudfront/url-rewrite.js

# Update function
aws cloudfront update-function \
  --name closm-docs-url-rewrite \
  --function-config Comment="URL rewrite for static site",Runtime=cloudfront-js-2.0 \
  --function-code fileb://infrastructure/cloudfront/url-rewrite.js \
  --if-match <ETAG>

# Publish function
aws cloudfront publish-function \
  --name closm-docs-url-rewrite \
  --if-match <ETAG>
```

## AWS Resources

| Resource | ID/Name |
|----------|---------|
| S3 Bucket | `closm-docs-prod` |
| CloudFront Distribution | `EADR14ROCZOLB` |
| CloudFront Function | `closm-docs-url-rewrite` |
| OAC | `E3Q93NYUT5E9J7` |
