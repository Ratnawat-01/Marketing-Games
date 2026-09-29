# 🚀 Marketing Games — Mobile-First Scrollable Gaming Platform

**Tagline:** *Scroll. Guess. Learn. Repeat.*  
**Product Type:** Reels/Shorts Style Vertical Game Feed (PWA & Android Ready)

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

Open [http://localhost:5173/](http://localhost:5173/) in your mobile browser or desktop browser with mobile device simulation.

---

## 🎮 MVP Game Types

1. 🎯 **Logo Guess:** Identify global brands from clean vector SVG marks.
2. 🎨 **Brand Color:** Decode brands from signature hex color swatches & palettes.
3. 🔤 **Brand A–Z:** Alphabet challenge with quick tap options or live text input lookup against the 26-letter database.
4. 📚 **Marketing Terms:** Tactical business scenarios & definitions (Pricing, STP, 4Ps, Digital, Growth) with educational "Why?" takeaways.
5. 🏷️ **Tagline Guess:** Famous advertising slogans and campaign backstories.

---

## 🧠 Controlled Randomization System (PRD Sections 12-15)

- **Rule 1:** No consecutive identical game type (`Logo -> Logo` prohibited).
- **Rule 2:** Maximum 2 occurrences within any rolling window of 5 challenges.
- **Rule 3:** Question-level deduplication (recently answered questions are deprioritized).
- **Custom Weights:** Logo 25%, Color 15%, A-Z 20%, Terms 20%, Tagline 20% (configurable via Admin).
- **Preloading Queue:** Batches of 5 questions loaded ahead of time for 0ms transition latency.

---

## 📱 Android App Packaging

This app is configured as a standalone **Progressive Web App (PWA)** with `manifest.json`. You can install it straight to your Android home screen via Chrome: **"Add to Home Screen"**.

To wrap as an Android APK using Capacitor:
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init "Marketing Games" "com.marketinggames.app" --web-dir dist
npm run build
npx cap add android
npx cap open android
```
