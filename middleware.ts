// Same as https://tanstack.com/router/latest/docs/framework/react/start/middleware#defining-middleware

import { createMiddleware } from "@tanstack/start";

export const loggingMiddleware = createMiddleware().server(
  async ({ next, data }) => {
    console.log("Request received:", data);
    const result = await next();
    console.log("Response processed:", result);
    return result;
  }
);
