// 정적 import 방식 안전장치 역할
import { getRequestConfig } from "next-intl/server";
import ko from "./messages/ko.json";
import en from "./messages/en.json";

type SupportedLocale = "ko" | "en";
const fallbackLocale: SupportedLocale = "ko";

const tranMap: Record<SupportedLocale, any> = {
  ko,
  en,
};

export default getRequestConfig(async ({ locale }) => {
  const selectedLocale =
    locale === "en" || locale === "ko" ? locale : fallbackLocale;

  return {
    locale: selectedLocale,
    timeZone: "Asia/Seoul",
    messages: tranMap[selectedLocale],
  };
});
