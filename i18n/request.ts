import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "id", "es", "fr"] as const;
const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const validLocale: string =
    locale && locales.includes(locale as any) ? locale : defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`../locales/${validLocale}.json`)).default,
  };
});
