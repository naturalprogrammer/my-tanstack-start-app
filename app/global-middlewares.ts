import { registerGlobalMiddleware } from '@tanstack/start';
import { loggingMiddleware } from './middleware';

registerGlobalMiddleware({
  middleware: [loggingMiddleware],
});

console.log("Middleware registered");

