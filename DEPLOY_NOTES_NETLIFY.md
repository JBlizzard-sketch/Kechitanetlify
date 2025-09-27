# Netlify Deployment Notes

This repository has been prepared for Netlify deployment. Changes added:
- `netlify.toml` with build command and plugin configured.
- `.nvmrc` set to Node 18.
- `@netlify/plugin-nextjs` added to devDependencies (if it was missing).

## How to deploy
1. Push this repo to GitHub (or another Git provider).
2. In Netlify dashboard, create a new site from Git and connect your repository.
3. In Build settings, ensure the build command is `npm run build` and publish directory is `.next`.
4. Set the environment variable `NODE_VERSION` to `18` in Netlify Site settings > Build & deploy > Environment.
5. Trigger a deploy. Netlify will run `npm install` and `npm run build`.

## Common fixes if build fails
- Clear cache and retry deploy from Netlify UI.
- Ensure Node version matches (set `NODE_VERSION` to 18).
- If you see plugin errors, try removing and re-adding the Netlify Next.js plugin via the Netlify UI plugin panel.
- Check build logs for missing native modules; some packages may require extra build steps or environment variables.
