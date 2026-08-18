# AvanzaMath 🪅

> **Bilingual elementary mathematics learning platform rooted in Hispanic culture and community life.**

AvanzaMath is an equity-centered, gamified Progressive Web App (PWA) designed for elementary school students (Grades K–5) from low-income, predominantly Hispanic neighborhoods. 

---

## 🌟 Interactive Cultural Math Quests

| Level | Grade | Module | Real-World Cultural Theme |
| :--- | :--- | :--- | :--- |
| **Nivel 1** | K – 1st | **🍎 El Puesto de Frutas** | Single-digit Addition & Subtraction using Ten-Frames and draggable beans (*frijolitos*). |
| **Nivel 2** | 2nd – 3rd | **🥖 La Panadería** | Multiplication arrays arranged on baking trays (*conchas rosas, de chocolate y vainilla*). |
| **Nivel 2** | 2nd – 3rd | **🛒 El Mercado & Tiendita** | Counting dollar bills ($1, $5, $10, $20) and making exact change for groceries. |
| **Nivel 3** | 4th – 5th | **🪅 La Piñata de Fiesta** | Division and fair sharing: splitting treats equally into party favor bags (*bolsitas*). |
| **Bonus** | All Grades | **🃏 Lotería Matemática** | Fast mental math bingo game: listen to the caller, stamp frijolitos, and yell **¡BUENAS!** |
| **Portal** | Caregivers | **🏡 El Portal Familiar** | Spanish progress summaries, weekly dinner-table *Retos en Familia*, and WhatsApp sharing. |

---

## 🚀 Key Technical Features

1. **Dual-Language Fluency (English / Español)**:
   - Universal 1-click toggle on every screen.
   - Native Web Speech API read-aloud in Latin American Spanish (`es-MX`, `es-419`, `es-US`) and English (`en-US`).
2. **100% Offline Progressive Web App (PWA)**:
   - Ultra-lightweight payload (< 2.5 MB) with Service Worker caching (`sw.js`).
   - Works completely offline on shared family phones, budget Androids, and school Chromebooks.
3. **Web Audio API Sound Synthesis**:
   - Zero external audio file downloads; generates pleasant musical chimes, coin sounds, pops, and celebrations client-side.
4. **Zero Exploitative Friction**:
   - 100% free, no ads, no paywalls, non-punitive gamification (*Tito el Colibrí* mascot & *Puntos Ganas*).

---

## 💻 Running Locally

To test the application locally on your computer:

```bash
# Option A: Using Python built-in server
python3 -m http.server 8000

# Option B: Using Node
npx serve .
```

Open `http://localhost:8000` in your web browser.

---

## 🌐 Deploying to GitHub Pages (100% Free Hosting)

1. Initialize git and push to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AvanzaMath PWA"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/avanzamath.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select `main` branch and `/ (root)` folder.
   - Click **Save**.
3. Your PWA will be live instantly at: `https://YOUR_USERNAME.github.io/avanzamath`

---

## 📁 Project Structure

```
.
├── index.html                   # Main single-page PWA application
├── manifest.json                # Web App Manifest for mobile installation
├── sw.js                        # Service Worker for offline caching
├── PRD_Math_Tutor_Elementary.md # Product Requirement Document (Markdown)
├── PRD_Math_Tutor_Elementary.pdf# Product Requirement Document (4-page PDF)
├── architecture_deployment.dot  # Graphviz Architecture diagram source
├── architecture_deployment.pdf  # Graphviz Architecture PDF
├── architecture_deployment.png  # Graphviz Architecture PNG
├── css/
│   └── styles.css               # Design system & responsive styles
├── icons/
│   └── icon.svg                 # Application folk-art vector icon
└── js/
    ├── i18n.js                  # Bilingual translation dictionary
    ├── audio.js                 # Web Speech API & Web Audio synth engine
    ├── state.js                 # Progress tracking & LocalStorage persistence
    ├── app.js                   # Main router and controller
    └── modules/
        ├── fruitStand.js        # Nivel 1: Ten-frame addition/subtraction
        ├── panaderia.js         # Nivel 2: Multiplication arrays
        ├── mercado.js           # Nivel 2: Currency & change making
        ├── pinata.js            # Nivel 3: Division & fair sharing
        ├── loteria.js           # Bonus: Interactive Math Bingo
        └── familyPortal.js      # Bilingual caregiver dashboard & printable sheets
```
