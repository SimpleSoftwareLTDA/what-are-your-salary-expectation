# Qual A Sua Pretensão Salarial? (Salary Expectation Insights)

An analytical tool designed for objective salary negotiation based on empirical Glassdoor data. It leverages a high-performance Backend-for-Frontend (BFF) architecture to provide real-time, high-confidence fiscal metrics.

## 🚀 Overview

Negotiating salary without data is guessing. This project provides the empirical evidence needed to answer the dreaded *"What are your salary expectations?"* question with confidence and objectivity.

## ✨ Key Features

- **Empirical Data**: Replaces subjective negotiation with verified Glassdoor salary data.
- **BFF Architecture**: Uses a Cloudflare Worker as a Backend-for-Frontend to securely handle API interactions and provide edge caching.
- **CORS & Security**: Strict CORS policies and server-side API key management ensure zero exposure of credentials to the client.
- **Intelligent Caching**: Optimized caching strategies delivering ~74% speed improvements on recurring queries.
- **Multilingual Support**: Fully localized in English (EN) and Portuguese (PT).
- **Responsive UI**: Modern, glassmorphism-inspired design built with Angular and Tailwind CSS.

## 🛠️ Technical Stack

- **Frontend**: [Angular](https://angular.dev/) (Signals & RxJS)
- **Middleware/BFF**: [Cloudflare Workers](https://workers.cloudflare.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Data Source**: OpenWebNinja API (Glassdoor Integration)
- **Deployment**: Vercel (Frontend) & Cloudflare (Backend)

## 🏗️ Architecture

The project follows a **BFF (Backend-for-Frontend)** pattern:

- **Frontend (Angular)**: Handles user interaction and state management.
- **BFF (Worker)**: Managed in the `/worker` directory, this layer handles:
    - API Key shielding (Server-side secrets).
    - Request transformation.
    - Intelligent caching (1h for success, 1s for 404s).
    - CORS orchestration.

## 🚥 Local Development

### Prerequisites
- [Bun](https://bun.sh/) or Node.js
- Cloudflare Wrangler CLI (for worker development)

### Running the Frontend
```bash
bun install
bun run dev --port 3100
```

### Running the Worker (BFF)
```bash
cd worker
npx wrangler dev
```

## 🌐 Production

- **Frontend**: [salary.robsoncassiano.software](https://salary.robsoncassiano.software/)
- **Repository**: [SimpleSoftwareLTDA/what-are-your-salary-expectation](https://github.com/SimpleSoftwareLTDA/what-are-your-salary-expectation)

---
*Built with expertise by [Robson Cassiano](https://eu.robsoncassiano.software/)*
