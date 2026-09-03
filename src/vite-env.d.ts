/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_CLINIC_PHONE?: string;
  readonly VITE_CLINIC_EMAIL?: string;
  readonly VITE_CLINIC_WHATSAPP?: string;
  readonly VITE_GOOGLE_ANALYTICS_ID?: string;
  readonly VITE_GOOGLE_MAPS_API_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
