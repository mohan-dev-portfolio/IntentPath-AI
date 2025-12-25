# IntentPath AI

<div align="center">
  <img src="public/assets/intentpath-logo.png" alt="IntentPath AI Logo" width="120" />
  
  **Global Mobility Reimagined: From Life Intent to Actionable Pathways.**
  
  *Built for the VisaVerse AI Hackathon 2025*
  
  [![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
  <br>
  <b>Live Demo:</b> <a href="https://intent-path-ai.vercel.app/" target="_blank">https://intent-path-ai.vercel.app/</a>
</div>


## 📖 Overview

Traditional global mobility tools are rigid, form-based, and intimidating. They ask "Which visa do you want?" before understanding "What do you want to achieve?".

**IntentPath AI** flips this model. It starts with **human intent**—your life goals, career aspirations, and timeline—and uses advanced AI reasoning to reverse-engineer the most viable immigration pathways. It transforms complex legal frameworks into a clear, strategic roadmap for your future.

<div align="center">
  <img src="public/assets/intentpath-hero-1.png" alt="IntentPath AI Hero Preview" width="600" />
  <br>
  <em>IntentPath AI – Human Intent to Pathway Visualization</em>
</div>

## ✨ What Makes IntentPath AI Different

| Traditional Tools (Rule-Based) | IntentPath AI (Intent-Based) |
|-------------------------------|------------------------------|
| *Input:* "I have a degree." | *Input:* "I want to launch a tech startup in Europe and raise a family there." |
| *Output:* "You might qualify." | *Output:* A multi-step strategy with risks, timelines, and explanations. |
| Rigid, binary, lacks context | Context-aware, strategic, human-centric |

## 🔄 How It Works

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Intent Input   │───▶│  AI Reasoning   │───▶│  Visualization  │
│  (Natural Lang) │    │  (Gemini API)   │    │  (Timeline UI)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

1. **Intent Input** — Users describe goals in natural language
2. **Intent Parsing** — AI extracts entities: Goal, Field, Location, Constraints
3. **Pathway Reasoning** — Evaluates policies for Germany, Canada, UK, Australia
4. **Explainability** — Generates step-by-step plan with risk factors
5. **Visualization** — Interactive timeline and comparison view

## 🚀 Key Features

- 🗣️ **Natural Language Interface** — No complex forms. Just tell us your story.
- 🌍 **Multi-Country Analysis** — Compare pathways across top global destinations.
- ⚠️ **AI-Powered Risk Assessment** — Understand roadblocks before you start.
- 💡 **Explainable AI** — Every recommendation includes "Why this works".
- 🔒 **Privacy-First** — No PII stored; analysis happens in real-time.

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 19, TypeScript, Tailwind CSS |
| **Build Tool** | Vite |
| **AI Model** | Google Gemini 2.0 Flash |
| **API SDK** | @google/genai |
| **Architecture** | Client-side SPA |

## 📁 Project Structure

```
IntentPath-AI/
├── public/
│   └── assets/              # Images and static assets
│       ├── intentpath-logo.png
│       ├── intentpath-hero-1.png
│       ├── intentpath-hero-2.png
│       └── intentpath-ui-preview.png
├── src/
│   ├── components/          # React UI components
│   │   ├── Footer.tsx
│   │   ├── FrameworkSection.tsx
│   │   ├── Header.tsx
│   │   ├── IntentInput.tsx
│   │   ├── PathwayTimeline.tsx
│   │   ├── PrivacySection.tsx
│   │   └── ReasoningLoader.tsx
│   ├── services/            # API and business logic
│   │   └── aiService.ts
│   ├── App.tsx              # Main application component
│   ├── constants.ts         # App constants and prompts
│   ├── index.tsx            # Entry point
│   └── types.ts             # TypeScript interfaces
├── index.html               # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts
└── .env.local               # Environment variables (API keys)
```

## 🏃 Getting Started

### Prerequisites



### Installation (Local Development)

```bash
# Clone the repository
git clone https://github.com/mohan-dev-portfolio/intentpath-ai.git
cd intentpath-ai

# Install dependencies
npm install

# Configure environment
echo "API_KEY=your_google_gemini_api_key_here" > .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Access the Live App

You can use the deployed version directly at:

**[https://intent-path-ai.vercel.app/](https://intent-path-ai.vercel.app/)**

No installation required—just open the link in your browser.

## 🎮 Demo

Try this sample prompt to see the AI in action:

> *"I am a software engineer from India with 5 years of experience. I want to move to a country with a good work-life balance, bring my spouse, and eventually get citizenship. My budget is moderate."*

The AI will map out:


## ⚖️ Ethics & Disclaimer

> **⚠️ This project is an exploratory prototype.**

- **Not Legal Advice:** Pathways are for educational purposes only. Immigration laws change frequently.
- **AI Limitations:** Generative AI can hallucinate. Always verify with official sources or a licensed attorney.
- **No Guarantees:** Success depends on individual circumstances not captured by this tool.

## 👨‍💻 Developer

<div align="center">
  
| | |
|---|---|
| **Name** | Mohan Prasath |
| **Email** | [mohanprasath210607@gmail.com](mailto:mohanprasath210607@gmail.com) |
| **Portfolio** | [mohan-dev-portfolio.github.io](https://mohan-dev-portfolio.github.io/Portfolio/) |
| **LinkedIn** | [linkedin.com/in/mohanprasath21](https://www.linkedin.com/in/mohanprasath21) |
| **GitHub** | [github.com/mohan-dev-portfolio](https://github.com/mohan-dev-portfolio) |

</div>

## 🏆 Hackathon Note

This project was conceptualized, designed, and built during the **VisaVerse AI Hackathon 2025**. It demonstrates the potential of Large Language Models (LLMs) in legal tech and global mobility planning.

---

<div align="center">
  <p>Built with ❤️ by Mohan Prasath</p>
  <p>© 2025 IntentPath AI</p>
</div>
