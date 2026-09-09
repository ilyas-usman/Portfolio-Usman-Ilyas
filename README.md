# 🚀 Muhammad Usman Ilyas — Software Engineer Portfolio

An interactive, high-performance developer portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, **GSAP**, and custom 3D animated UI engines. Designed with rich aesthetics, sleek dark/light mode transitions, and full mobile responsiveness across iOS and Android devices.

---

## ✨ Key Features & Interactive UI Components

- **⚡ React Bits Hero Section**: High-impact personal header with dual language script, animated status badges, social connectivity links, and profile image frame.
- **🎯 Limelight Floating Navbar**: Adaptive-width navigation bar with an active section spotlight effect that syncs automatically with page scroll and collapses gracefully on mobile screens.
- **🌊 React Bits 3D DriftWall Skills Matrix**: Interactive 3D drifting wall showcasing all **36 core skills** across languages, frameworks, AI/ML tools, databases, and core concepts with 3D perspective depth, pointer parallax, touch interaction, and dynamic responsive scaling.
- **🪄 MagicBento Career Journey**: Custom bento grid featuring particle star physics, 3D tilt, spotlight tracking, and border glow for professional experience and AI engineering background.
- **⚡ Electric Border & CursorGrid Showcase**: Custom neon electric borders paired with interactive canvas grid ripple effects on hover and touch for featured projects.
- **🖼️ GSAP Accordion Gallery**: Smooth parallax accordion gallery showcasing certifications, honors, DET scores, and merit awards.
- **📱 100% Mobile & Touch Compatibility**: Mobile-first touch handlers, touch-action configuration, zero auto-zoom glitches, and full iOS Safari and Android Chrome optimization.
- **🌗 Dark / Light Mode**: Persistent theme toggle powered by `next-themes` with custom smooth icons.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: GSAP, React Bits Pro Components (`DriftWall`, `Hero1`, `LimelightNav`), HTML5 Canvas
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Engine**: [Next Themes](https://github.com/pacocoursey/next-themes)

---

## 📁 Featured Projects (9 Real Projects)

1. **RealEstate Hub — Voice & Chat AI Agent** (Conversational & Voice AI)
   - 10-Node LangGraph state machine & Hybrid RAG (SQL + ChromaDB)
   - Real-time speech streaming with Deepgram STT & Fish Audio TTS
   - [Live Demo](https://www.loom.com/share/b4d6c097a1ce46b187ae26189de03707) • [Source Code](https://github.com/ilyas-usman/netixsol-internee-projects/tree/main/Capstone)

2. **Point of Sale (POS) & Inventory System** (Desktop Application)
   - Production-ready desktop POS & inventory software deployed using C#
   - Real-time inventory management, billing, sales, & secure user authentication
   - [Live Demo](https://lnkd.in/p/d6_QZeT6) • [Source Code](https://github.com/Usman-Ilyas-11/POS-Inventory-System)

3. **AFL Chat & Match Prediction Assistant** (Domain-Scoped AI Agent)
   - LangGraph agent with 7 retrieval tools, Elo prediction model & Streamlit UI
   - Grounding verification layer, 32-case evaluation suite & domain guardrails
   - [Source Code](https://github.com/ilyas-usman/netixsol-internee-projects/tree/main/Week-6/day5)

4. **VFS Explorer — Virtual File System** (C++ Systems & Data Structures)
   - Virtual File System CLI with N-ary tree directory hierarchy & workspace persistence
   - Trie-based autocomplete, DFS/BFS search, command history & bookmarks
   - [Source Code](https://github.com/Usman-Ilyas-11/VFS-EXPLORER)

5. **Lost & Found Management System** (Desktop Application)
   - Desktop application in C# WinForms & Guna UI for institutional item tracking
   - Role-based access control (Admin & Student) with SQLite local database
   - [Source Code](https://github.com/Usman-Ilyas-11/LOST-AND-FOUND)

6. **NAVI-CORE AI — Pathfinding & ML** (AI Pathfinding & Navigation)
   - Pathfinding engine supporting BFS, DFS, A* Search & Maze Solver algorithms
   - Decision tree prediction with Scikit-learn & Python Tkinter/NetworkX visualization
   - [Source Code](https://github.com/Usman-Ilyas-11/NAVI-CORE-AI)

7. **Premium Todo & Task Dashboard** (Mobile Application)
   - Cross-platform Flutter app with Material Design 3 & Provider state management
   - SharedPreferences auth, persistent login & interactive statistics dashboard
   - [Live Demo](https://lnkd.in/p/dkFDvrH6) • [Source Code](https://github.com/Usman-Ilyas-11/premium-todo-app-flutter)

8. **Quiz System — Desktop Platform** (Desktop Application)
   - C# WinForms desktop app for role-based quiz management (Admin & Student)
   - Admin question bank suite & MySQL backend with MaterialSkin & Guna UI
   - [Source Code](https://github.com/ilyas-usman/Quiz-System)

9. **Smart Home Automation System** (IoT & Embedded Systems)
   - Arduino-based multi-sensor smart home system with automated actuators
   - Keypad gate access, ultrasonic garage door, IR fan & rain awning control
   - [Source Code](https://github.com/ilyas-usman/Smart-Home)

---

## 📁 Repository Structure

```text
usman_portfolio/
├── app/
│   ├── layout.tsx             # Root layout with Viewport & ThemeProvider
│   ├── page.tsx               # Main portfolio page (Hero, About, Skills, Projects, Contact)
│   └── globals.css            # Global CSS styles & Tailwind imports
├── components/
│   ├── theme-provider.tsx     # Light/Dark mode provider
│   └── ui/                    # Production UI components
│       ├── accordion-gallery.css
│       ├── accordion-gallery.tsx
│       ├── cursor-grid.css
│       ├── cursor-grid.tsx
│       ├── decay-card.css
│       ├── decay-card.tsx
│       ├── dome-gallery.css
│       ├── dome-gallery.tsx
│       ├── drift-wall.css     # 3D DriftWall CSS styles
│       ├── drift-wall.tsx     # 3D DriftWall skills component
│       ├── electric-border.css
│       ├── electric-border.tsx
│       ├── glass-icons.css
│       ├── glass-icons.tsx
│       ├── hero-1.tsx
│       ├── limelight-nav.tsx
│       ├── magic-bento.css
│       ├── magic-bento.tsx
│       ├── prism.css
│       ├── prism.tsx
│       ├── skill-icons.tsx
│       ├── specular-button.css
│       ├── specular-button.tsx
│       ├── spotlight-card.css
│       ├── spotlight-card.tsx
│       └── theme-toggle.tsx
├── public/                    # Static assets & profile photos
├── package.json               # Dependencies & scripts
├── next.config.ts             # Next.js configuration
└── README.md                  # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js (v18+)** and **npm** installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Usman-Ilyas-11/usman_portfolio.git
   cd usman_portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

   Open `http://localhost:3000` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Start production server**:
   ```bash
   npm start
   ```

---

## 👨‍💻 Author

**Muhammad Usman Ilyas**  
- **Role**: Software Engineer (CGPA: 3.98/4.00)
- **LinkedIn**: [linkedin.com/in/muhammad-usman-ilyas-24b20b354](https://www.linkedin.com/in/muhammad-usman-ilyas-24b20b354)
- **GitHub**: [github.com/Usman-Ilyas-11](https://github.com/Usman-Ilyas-11)
- **WhatsApp**: [+92 334 8829555](https://wa.me/+923348829555)
- **Email**: [musmanilyas.002@gmail.com](mailto:musmanilyas.002@gmail.com)

---

## 📄 License

This repository is available for personal and educational presentation purposes.
