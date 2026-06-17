# Ben Teigland — Portfolio

Personal portfolio site for [benteigland11.github.io](https://benteigland11.github.io).

## Deploy to GitHub Pages

1. Create a new repository named **`benteigland11.github.io`** on GitHub (must match your username exactly).

2. Push this folder to the repo:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/benteigland11/benteigland11.github.io.git
   git push -u origin main
   ```

3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from branch → Branch: `main` / `/ (root)`**.

4. After a minute or two, your site will be live at **https://benteigland11.github.io**.

## Local preview

Open `index.html` in a browser, or use a simple static server:

```bash
python -m http.server 8080
```

Then visit http://localhost:8080.

## Customize

- **Projects**: edit the `PROJECTS` array in `js/main.js`
- **Bio / skills**: edit `index.html`
- **Colors & fonts**: edit CSS variables at the top of `css/style.css`
