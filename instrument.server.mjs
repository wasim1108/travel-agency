import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://983fe4bed7e80f2923185758271e045f@o4509428846690304.ingest.de.sentry.io/4509428852129872",
  
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
