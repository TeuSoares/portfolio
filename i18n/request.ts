import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "pt"] as const;
export const defaultLocale = "pt";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as (typeof locales)[number])) {
    locale = defaultLocale;
  }

  let messages;
  if (locale === "en") {
    messages = (await import("../messages/en.json")).default;
  } else {
    messages = (await import("../messages/pt.json")).default;
  }

  return {
    locale,
    messages,
  };
});
