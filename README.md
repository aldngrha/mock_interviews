# 🧠 Prepwise

Prepwise is a modern AI-powered application built with Next.js and Vapi AI, enabling intelligent voice interaction for enhanced user experiences. It leverages the latest frontend technologies and best development practices to deliver speed, flexibility, and scalability.

---

## 🚀 Tech Stack

- **Framework:** Next.js 15 (with Turbopack)
- **Language:** TypeScript, JavaScript (React 19)
- **Styling:** Tailwind CSS v4
- **Forms:** React Hook Form, Zod
- **UI Components:** Shadcn/UI
- **Date Utilities:** dayjs
- **AI / Voice:** Vapi AI SDK, Google Gemini
- **BaaS:** Firebase
- **Linting:** Eslint

---

## 📦 **Installation**

Make sure you have **pnpm** installed, then run:
## 📦 Installation

```bash
pnpm install
```

---

## 🧑‍💻 Development

To start the development server with Turbopack:

```bash
pnpm dev
```

---

## 🏗️ Production Build

Build the application for production:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

---

## 🧪 Linting

Run ESLint:

```bash
pnpm lint
```

---

## 🗣️ Voice AI Integration (Vapi.ai)

This project uses the Vapi SDK to integrate real-time voice AI features.  
Documentation: https://docs.vapi.ai

### Example usage

```ts
import { Vapi } from '@vapi-ai/web';

const vapi = new Vapi({
  apiKey: 'YOUR_API_KEY',
});

vapi.start({
  conversationId: 'your-convo-id',
});
```

You can customize voice agents, conversations, and event handling based on the Vapi documentation.

---

## 📜 License

MIT License
