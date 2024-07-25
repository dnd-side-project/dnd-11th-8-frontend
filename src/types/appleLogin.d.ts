export interface ClientConfig {
  clientId: string;
  redirectURI: string;
  scope?: string;
  state?: string;
  nonce?: string;
  usePopup?: boolean;
}

export interface Authorization {
  code: string;
  id_token: string;
  state?: string;
}

export interface User {
  email: string;
  name: string;
}

export interface SigninResponse {
  authorization: Authorization;
  user?: User;
}

export interface SigninError {
  error: string;
}

declare global {
  interface Window {
    AppleID: {
      auth: {
        init: (config: ClientConfig) => void;
        signIn: (config?: ClientConfig) => Promise<SigninResponse>;
      };
    };
  }
}
