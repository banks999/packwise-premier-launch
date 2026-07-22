// Ambient module for the Cloudflare Workers runtime's built-in bindings
// accessor (workerd provides this natively; no @cloudflare/workers-types
// dependency is installed). Declares only what this project actually reads.
declare module "cloudflare:workers" {
  export const env: {
    WEB3FORMS_ACCESS_KEY?: string;
    TURNSTILE_SECRET_KEY?: string;
  };
}

// Cloudflare Turnstile's widget script (loaded via a plain <script> tag, no
// npm package) attaches itself to `window.turnstile`.
interface Window {
  turnstile?: {
    render: (
      container: string | HTMLElement,
      options: {
        sitekey: string;
        callback?: (token: string) => void;
        "expired-callback"?: () => void;
        "error-callback"?: () => void;
      },
    ) => string;
    reset: (widgetId?: string) => void;
    remove: (widgetId?: string) => void;
  };
}
