export const locales = ["ko", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ko";

const localeSet = new Set(locales);

export const getLocaleFromString = (
  input: string | null | undefined
): Locale | undefined => {
  if (!input) return undefined;

  const segments = input.split("-"); // 지역코드 확장성 고려 ex) en-US
  const normalized =
    segments.length === 2
      ? `${segments[0].toLowerCase()}-${segments[1].toUpperCase()}`
      : segments[0].toLowerCase();

  return localeSet.has(normalized as Locale)
    ? (normalized as Locale)
    : undefined;
};

export const getLocaleFromPathname = (
  // locale 추출
  pathname: string | null | undefined
): Locale | undefined => {
  return getLocaleFromString(pathname?.split("/")[1]);
};

export const removeLocaleFromPathname = (pathname: string): string => {
  // 순수경로
  const locale = getLocaleFromPathname(pathname);
  if (!locale) return pathname;

  const rest = pathname.split("/").slice(2).join("/");
  return rest ? `/${rest}` : "/";
};
