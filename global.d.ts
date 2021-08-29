declare namespace Express {
  export interface Response {
    boom: any;
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      SERVER_PORT?: string;
      DB_NAME?: string;
      DB_USER?: string;
      DB_PASS?: string;
      DB_HOST?: string;
      DB_PORT?: number;
      SECRET?: string;
      EXPIRE_IN?: string;
      GOOGLE_APPLICATION_CREDENTIALS?: string;
      PRODUCTS_BUCKET?: string;
      PROFILES_BUCKET?: string;
      GENERAL_BUCKET: ?string;
    }
  }
}

export {};
