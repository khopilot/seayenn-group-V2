/// <reference types="node" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Add your environment variables here
      NODE_ENV: "development" | "production" | "test";
      NEXT_PUBLIC_API_URL?: string;
      API_SECRET_KEY?: string;
      DATABASE_URL?: string;
    }
  }
}

export {};
