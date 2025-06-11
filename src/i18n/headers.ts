import "server-only";
import { headers } from "next/headers";
import { getLocaleFromString, type Locale } from "./locale";

export const localeHeader = "x-locale";

export const getLocaleHeader = async (): Promise<Locale> => {
  const headerValue = (await headers()).get(localeHeader);

  if (!headerValue) {
    throw new Error(
      `[i18n] Missing "${localeHeader}" header. Make sure middleware.ts sets it.`
    );
  }

  const locale = getLocaleFromString(headerValue);
  if (!locale) {
    throw new Error(`[i18n] Invalid locale in header: ${headerValue}`);
  }

  return locale;
};
