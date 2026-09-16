# Jack Meow website

The public, static website for Jack Meow v0.2.1: streaming AI chat and OpenSearch workflows in a native terminal. This repository contains only website files. Jack Meow is proprietary software; application source is not distributed here.

## Local preview

From the repository root:

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. Check `/`, `/privacy.html`, and `/404.html`. Stop the server with Ctrl-C. Python's preview server does not automatically serve the custom 404 page for missing paths; Cloudflare Pages does.

No build, package manager, dependencies, or application server is required.

## Files

- `index.html`: product information, illustrative terminal demo, platform status, and installation.
- `privacy.html`: conservative website privacy information.
- `404.html`: custom not-found page, with root-relative links for nested missing URLs.
- `css/style.css`: shared design system and responsive layouts.
- `js/main.js`: progressive mobile navigation and install-command copy button.
- `assets/logo/`: reserved for an approved Jack Meow logo.
- `assets/screenshots/`: reserved for sanitized, approved product screenshots.
- `_headers`: static security response headers for Cloudflare Pages.

The name is rendered as text; no placeholder product logo is fabricated. Terminal and theme previews are illustrative HTML/CSS, not screenshots, live data, or interactive product functionality. All site navigation remains available with JavaScript disabled, and the install command can be selected manually.

## Cloudflare Pages deployment

Connect this public website repository in Cloudflare Pages using Git integration:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | Leave empty (no build step) |
| Build output directory | `/` (repository root) |
| Root directory | Leave empty (repository root) |

Add `csachin.dev` as a custom domain when ready. Publication and domain setup are manual actions; this change does not deploy anything. Do not configure R2 or a downloads subdomain for v1.

Canonical URLs and Open Graph URLs use the intended production origin `https://csachin.dev` as a pre-launch placeholder. Before publication, confirm that origin and update these URLs together if it changes. The 404 page uses `noindex` and intentionally has no canonical URL. Social metadata uses text summaries; image metadata is omitted until a genuine approved asset is supplied. Protect preview deployments with Cloudflare's access controls or indexing settings as appropriate before sharing them.

## Product claims and assets

The supplied v0.2.1 product facts are the copy baseline: macOS Apple Silicon / arm64 is Developer ID signed and Apple notarized, with public Homebrew distribution coming soon. Linux ARM64 is available as a stable Snap Store release with `sudo snap install jackmeow`. No unsupported platform or future download URL is advertised. Confirm release status before publishing future updates.

Still needed: an approved Jack Meow logo, sanitized real product screenshots, and the finalized macOS Homebrew distribution URL/instructions. The current site works without those assets.

## Privacy and security rules

Never add application source, private reports, internal endpoints, customer data, credentials, tokens, signing material, or private filesystem paths. Only publish sanitized assets. No analytics, tracking, accounts, forms, cookies, external fonts, remote JavaScript, or backend services are included.

Credentials are configured locally in the application. AI-assisted OpenSearch operations are read-only and require explicit approval. Do not expand these statements into unsupported security guarantees. Hosting/CDN providers may process standard request metadata under their own policies.

`_headers` limits scripts, styles, and connections to the site's actual needs, prevents framing, disables unnecessary browser permissions, and avoids sending referrers. Inline style attributes are permitted only for the decorative CSS chart bar heights; inline scripts remain blocked. Cloudflare response headers take effect on deployment, not in Python's basic preview server.

## Review checklist

- Review all three pages at 320px, tablet, and desktop widths; check for page overflow.
- Test keyboard focus, mobile menu toggle/Escape, in-page navigation, and copy success/failure announcements.
- Disable JavaScript and confirm navigation and install instructions remain useful.
- Check internal links, metadata, platform claims, and external destinations.
- Inspect public files for secrets, private paths, application source, and generated dependencies.
- Run `git diff --check` before committing. No automatic pushes or deployments.

## License

This website repository is proprietary. All rights reserved. See [LICENSE](LICENSE) for terms.
