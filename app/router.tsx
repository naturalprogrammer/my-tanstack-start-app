// app/router.tsx
import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { registerGlobalMiddleware } from "@tanstack/start";
import { loggingMiddleware } from '../middleware';

registerGlobalMiddleware({
  middleware: [loggingMiddleware],
});

console.log("Middleware registered");

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}