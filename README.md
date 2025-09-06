# Board (Collaborative Whiteboard App)

[Live Demo](https://board-js-seven.vercel.app/)

Board is a real-time collaborative whiteboard application built with Next.js, Convex, Clerk, and Liveblocks. It allows users to create and join organizations, collaborate on boards, and draw or annotate together in real time. The app supports authentication, organization management, and a rich, interactive canvas for drawing and note-taking.

## Features

- **Real-time Collaboration:** Multiple users can draw, write, and interact on the same board simultaneously.
- **Organization Management:** Users can create and join organizations to manage access to boards.
- **Authentication:** Secure sign-in and organization switching powered by Clerk.
- **Persistent Storage:** Board data is stored and synced using Convex.
- **Live Presence:** See who is online and where their cursor is on the board with Liveblocks.
- **Rich Canvas Tools:** Draw shapes, write text, add notes, and more.
- **Undo/Redo:** Collaborative undo/redo for drawing actions.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, React 18)
- [Convex](https://convex.dev/) (serverless backend, real-time data)
- [Clerk](https://clerk.dev/) (authentication and organization management)
- [Liveblocks](https://liveblocks.io/) (real-time presence and collaboration)
- [Tailwind CSS](https://tailwindcss.com/) (styling)
- [Radix UI](https://www.radix-ui.com/) (UI components)

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm, yarn, pnpm, or bun

### 1. Clone the repository

```bash
# Using git
 git clone https://github.com/moaviak/board-js.git
 cd board-nextjs
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
NEXT_PUBLIC_CONVEX_URL=<your-convex-url>
LIVEBLOCK_SECRET_KEY=<your-liveblocks-secret-key>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
```

- Get your Convex URL from the [Convex dashboard](https://dashboard.convex.dev/).
- Get your Liveblocks secret key from the [Liveblocks dashboard](https://liveblocks.io/dashboard).
- Get your Clerk keys from the [Clerk dashboard](https://dashboard.clerk.dev/).

### 4. Configure Convex

Initialize Convex if you haven't already:

```bash
npx convex dev
```

Follow the prompts to link your project and push your schema.

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to use the app.

## Deployment

You can deploy this app to [Vercel](https://vercel.com/) or any platform that supports Next.js. Make sure to set the same environment variables in your deployment environment.

## License

MIT
