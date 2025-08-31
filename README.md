# BiteSpeed FlowBuilder 🚀

A **visual canvas** for building chatbot flows using **React**, **Next.js**, and **React Flow**. This project lets you create, edit, and manage chatbot logic visually with an intuitive drag-and-drop interface.

---

[Live Preview 🚀](https://bite-speed-assignment-d96i.vercel.app/)

## ✨ Features

- 🖱️ **Drag-and-drop node creation** with React Flow
- 💬 **Custom node components** (e.g., message/text node)
- 📝 **Node settings panel** to edit message text
- 💾 **Persistable flow data** (nodes & edges) in a lightweight in-memory store
- 🎨 **Tailwind CSS** + utility UI components for a modern look
- ⚡ **Fast, responsive, and easy to extend**

---

## 🛠️ Tech Stack

- [Next.js (App Router)](https://nextjs.org/) — App framework
- [React 19](https://react.dev/) — UI library
- [React Flow](https://reactflow.dev/) — Canvas and node management
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [Zustand](https://zustand-demo.pmnd.rs/) — State management
- [TypeScript](https://www.typescriptlang.org/) — Type safety

---

## 📋 Requirements

- **Node.js** >= 18
- **npm**, **yarn**, or **pnpm**

---

## 🚦 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. **Open the app in your browser**

   [http://localhost:3000](http://localhost:3000)

---

## 🧰 Available Scripts

- `npm run dev` — Start Next.js in development mode
- `npm run build` — Build the app for production
- `npm start` — Run the production server
- `npm run lint` — Run the linter

---

## 🗂️ Project Structure (important files)

- `src/components/Builder.tsx` — Main flow builder and React Flow integration
- `src/components/nodes/TextNodes.tsx` — Custom text/message node
- `src/components/panels/NodesPanel.tsx` — Draggable node palette
- `src/components/panels/SettingsPanel.tsx` — Node settings editor
- `src/store/flowstore.ts` — Zustand store for nodes/edges and actions
- `src/components/ui/` — Small UI primitives (button, card, textarea, tooltip, toast)
- `src/app/page.tsx` — App entry page that mounts the builder
- `tailwind.config.ts` & `src/app/globals.css` — Styling and design tokens

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests with small, focused changes. Let's make chatbot building easier together. 🌟

---

## ⚖️ License

This project is provided **without an explicit license**. Add a LICENSE file if you plan to open-source it.

---
