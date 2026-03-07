# CookVault

A smart cooking companion that helps you save, organize, and discover recipes in one place. Store everything in your own personal recipe library instead of losing recipes in screenshots, notes, or random websites.

## Features

- **Recipe library** – Add recipes with title, category, ingredients, step-by-step instructions, prep/cook times, servings, difficulty, tags (e.g. spicy, vegan, quick meal), and image URL. Edit, duplicate, or delete anytime. Recipe version history (last 10 edits) is saved automatically.
- **Recipe folders & categories** – Breakfast, Dinner, Desserts, Snacks, Sides plus custom categories. Filter by category, tags, difficulty, cook time, and search by ingredients or notes.
- **Favorites & ratings** – Bookmark recipes and rate them 1–5 stars.
- **Serving size** – Adjust servings on the recipe page; ingredients scale automatically (numeric amounts).
- **Grocery list** – Multiple named lists; add items from recipes or manually; optional price per item and estimated total; check off while shopping; share list (copy to clipboard).
- **Pantry** – Track inventory with optional quantity, unit, and expiration date. Expiring-soon and expired sections for reminders.
- **Meal planning** – Assign a recipe to each day of the week.
- **Cooking timers** – Multiple named timers with start/pause/reset and optional sound when done.
- **Step-by-step cooking mode** – “Start cooking” on a recipe for a guided, one-step-at-a-time view.
- **Converters** – Temperature (°F ↔ °C), cooking temperature guide, and volume ↔ weight (cups ↔ grams) for common ingredients.
- **What can I cook?** – Discover recipes by ingredients you have (or match against your pantry) and optional max cook time.
- **Tips & substitutions** – Store cooking tips and ingredient substitution ideas.
- **Sharing** – Copy recipe or grocery list to clipboard; Web Share API when available.

## Tech

- **React 18** + **Vite**
- **React Router** for navigation
- **localStorage** for persistence (no backend required)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Build for production with `npm run build`; preview with `npm run preview`.

## Deploy to GitHub Pages

**Important:** Do **not** upload your source files (the `src` folder, `index.html`, etc.) as the site. That will show a white screen because the browser looks for built files that don’t exist. Use the steps below so GitHub **builds** the app and deploys the result.

1. Push the **whole project** (all source files) to a GitHub repo.
2. In the repo: **Settings** → **Pages** → under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
3. Push to the `main` branch. The workflow will run, build the app into `dist`, and deploy that. Wait for the **Actions** tab to show a green check.
4. Open your site at: `https://<your-username>.github.io/<repo-name>/`

If you see a white screen, check: **Actions** tab → latest “Deploy to GitHub Pages” run succeeded, and **Settings** → **Pages** → Source is **GitHub Actions**.

## Project structure

- `src/context/CookVaultContext.jsx` – Global state (recipes, categories, multiple grocery lists, pantry, meal plan, tips, substitutions) with localStorage sync.
- `src/components/Layout.jsx` – App shell and navigation.
- `src/pages/` – Home, Recipes, RecipeDetail, AddRecipe, EditRecipe, CookMode (step-by-step), Discover (what can I cook), Categories, GroceryList, Pantry, MealPlan, Timers, Converters, Tips, Substitutions.

All data stays in your browser; nothing is sent to a server.
