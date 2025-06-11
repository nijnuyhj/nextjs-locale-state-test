"use client";

import { useTranslations } from "next-intl";

export default function Post() {
  const t = useTranslations("Post");

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <p className="mt-4">{t("content")}</p>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">
        {t("post")}
      </button>
    </main>
  );
}
