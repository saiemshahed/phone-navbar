# TailwindCSS Starter Pack With Vite

## **How To start**

### **Clone From:**

```
git clone https://github.com/ibnshayed/Tailwindcss-Starter-Pack-With-Vite.git
```

### **TailwindCss Build For Development:**

```
npm run dev
```

### **Start: On VS Code any live server**

## **How to Create this**

```
npm init -y
npm install -D tailwindcss@latest postcss-cli@latest autoprefixer@latest vite
```

### Tailwind Full Config

```
npx tailwind init --full ( change name to tailwind-default.config.css )
```

### Tailwind & Postcss Config

```
npx tailwind init -p
```

# tailwind.config.js

```javascript
module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  plugins: [require("daisyui")],
}
```

# package.json

```javascript
 "scripts": {
    "dev": "vite", // start dev server
    "build": "vite build", // build for production
    "serve": "vite preview" // locally preview production build
  }
```

# vite.config.js

```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Tailwindcss-Starter-Pack-With-Vite/' // '/<REPO_NAME>/'
})
```

# Deploy to GitHub Pages

```javascript

$npm run build

$git add dist -f // remove dist folder from .gitignore file

$git commit -m 'dist folder added'

$git subtree push --prefix dist origin gh-pages // adding a branch gh-pages and deploy

```
