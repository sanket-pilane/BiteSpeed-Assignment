# BiteSpeed FlowBuilder

A visual canvas for building chatbot flows using React, Next.js, and React Flow. This project provides draggable nodes, a settings panel to edit node content, and a lightweight state store for flows.

## Features

- Drag-and-drop node creation using React Flow
- Custom node components (message/text node)
- Node settings panel to edit message text
- Persistable flow data (nodes & edges) in memory store
- Tailwind CSS + utility UI components

## Tech Stack

- Next.js (App Router)
- React 19
- React Flow for canvas and nodes
- Tailwind CSS for styling
- Zustand for state management
- TypeScript

## Requirements

- Node.js >= 18
- npm, yarn, or pnpm

## Getting Started

1. Install dependencies

   npm install

2. Run the development server

   npm run dev

3. Open the app in your browser

   http://localhost:3000

## Available Scripts

- `npm run dev` — start Next.js in development mode
- `npm run build` — build the app for production
- `npm start` — run production server
- `npm run lint` — run the linter

## Project Structure (important files)

- `src/components/Builder.tsx` — main flow builder and React Flow integration
- `src/components/nodes/TextNodes.tsx` — custom text/message node
- `src/components/panels/NodesPanel.tsx` — draggable node palette
- `src/components/panels/SettingsPanel.tsx` — node settings editor
- `src/store/flowstore.ts` — Zustand store for nodes/edges and actions
- `src/components/ui/` — small UI primitives (button, card, textarea, tooltip, toast)
- `src/app/page.tsx` — app entry page that mounts the builder
- `tailwind.config.ts` & `src/app/globals.css` — styling and design tokens

## Contributing

Contributions are welcome. Please open issues or pull requests with small, focused changes.

## License

This project is provided without an explicit license. Add a LICENSE file if you plan to open-source it.
