// Type declaration file for environment variables, so it can be used to enhance the autocompletion in the IDE
// e.g. process.env.PORT

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string;
    }
  }
}

export {}; // this is required to allow the file to be treated
