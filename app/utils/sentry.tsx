import * as Sentry from "@sentry/react";
import type { ReactNode } from "react";

Sentry.init({
  dsn: "https://77d352d508cbb00315aa13d8e78d1126@o4509481423863808.ingest.us.sentry.io/4509481442541568",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react/configuration/options/#sendDefaultPii
  sendDefaultPii: true,

  integrations: [],
});

export function SentryErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
      {children}
    </Sentry.ErrorBoundary>
  );
}
