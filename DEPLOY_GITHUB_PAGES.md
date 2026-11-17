# Free GitHub Pages Hosting Guide for RomaLingua 🏛️

This guide explains how to host **RomaLingua** on **GitHub Pages** for **100% free** under a domain that contains **zero "ai"** (e.g. `https://<username>.github.io/romalingua/`), completely bypassing workplace domain blocks.

---

## Why GitHub Pages?
- **100% Free Forever**: Hosted directly by GitHub without credit cards or subscriptions.
- **Zero "ai" in the URL**: The domain format is `https://<your-username>.github.io/<repo-name>/`. If your workplace blocks domains with "ai", this domain is completely clean.
- **Offline & Standalone Ready**: RomaLingua contains the full OCR GCSE Latin syllabus (Henry Cullen Book 1 progression, all 446 DVL flashcards, 20-level Latina Flap arcade game, and comprehensive grammar codex) directly inside the client bundle, so it runs at lightning speed with zero external backend required.

---

## Quick Setup (Under 2 Minutes)

### Method 1: Web Interface (No Git installation needed)

1. **Sign in to GitHub**:
   - Go to [github.com](https://github.com) (or create a free account if you don't have one).

2. **Create a New Repository**:
   - Click the **+** icon in the top right corner and select **New repository**.
   - Name your repository (e.g., `romalingua` or `latin-gcse`).
   - Choose **Public** (required for free GitHub Pages).
   - Check **Add a README file** (optional) and click **Create repository**.

3. **Upload the RomaLingua Files**:
   - In your new repository, click **Add file** > **Upload files**.
   - Drag and drop:
     - `index.html`
     - `manifest.json`
     - `.nojekyll`
   - Click **Commit changes**.

4. **Enable GitHub Pages**:
   - Go to your repository's **Settings** tab (the gear icon).
   - In the left sidebar, click **Pages** (under the "Code and automation" section).
   - Under **Build and deployment**:
     - Source: Select **Deploy from a branch**.
     - Branch: Select **main** (or `master`) and folder **/ (root)**.
     - Click **Save**.

5. **Access Your Live Game**:
   - GitHub will generate your live URL within 30-60 seconds:
     ```
     https://<your-github-username>.github.io/<repository-name>/
     ```
   - Bookmark this URL on your work computer or mobile phone!

---

### Method 2: Command Line (Git CLI)

If you have Git installed:

```bash
# 1. Initialize git and commit files
git init
git add index.html manifest.json .nojekyll README.md
git commit -m "Deploy RomaLingua to GitHub Pages"

# 2. Add your GitHub remote repository
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main

# 3. Enable Pages in repository settings:
# Settings -> Pages -> Source: 'Deploy from a branch' -> Branch: 'main' /root -> Save
```

---

## Alternative: Instant Offline Desktop Play (0 Setup)

If your workplace blocks GitHub as well, you can run RomaLingua directly as a standalone local file:

1. Click **Export / Non-AI Domain** in the top navigation bar of RomaLingua.
2. Click **Download Standalone HTML**.
3. Save the file `romalingua.html` to your desktop or USB drive.
4. Double-click the file to open it in Chrome, Edge, Safari, or Firefox (`file:///.../romalingua.html`).
5. It runs 100% locally with all sound effects, game levels, vocabulary, and stats saved in your browser!
