// Constants
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT // vite SSR defaults to 13714;
const base = process.env.BASE || "/";

if (!isProduction) {
  process.env.VITE_BASE = base;
}

let startServer;
if (!isProduction) {
  const { createServer } = await import('vite')
  const vite = await createServer({
    appType: 'custom',
    base,
  })
  startServer = (await vite.ssrLoadModule("./src/entry-server.ts")).startServer;
} else {
  startServer = (await import("./dist/server/entry-server.js")).startServer;
}

startServer();
