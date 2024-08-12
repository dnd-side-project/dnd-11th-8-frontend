/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_KAKAO_REST_API_KEY: string;
  readonly VITE_KAKAO_REDIRECT_URI: string;
  readonly VITE_REDIRECT_URI: string;
  readonly VITE_NODE_ENV: 'development' | 'production' | 'test';
}
