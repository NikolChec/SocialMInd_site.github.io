# SocialMind Main Site

## Project scope

This repository contains the public SocialMind information website. The authoritative product language is the SocialMind OS document; public claims must remain accurate, non-clinical, and explicit about hypotheses or work in progress.

## Verified paths

- Project: `/Users/fridmanvlad/Documents/My Projects/Codex Workspace/projects/socialmind-main-site`
- Production releases: `/opt/socialmind-main-site/releases`
- Production symlink: `/opt/socialmind-main-site/current`
- Production host: `51.4.96.215`
- Public URL: `https://social-mind.org/`

## Working rules

- Use `/Users/fridmanvlad/Desktop/SocialMind-Logo.png` as the only logo source and remove its background before web use.
- Build with `npm run build`; deploy only the generated `dist/` directory.
- Deploy into a new release directory and switch the `current` symlink atomically.
- Preserve prior releases for rollback.
- Never commit credentials, `.env` files, generated caches, or deployment archives.
- Verify internal links, JavaScript syntax, the production HTTP response, and production content after deployment.
