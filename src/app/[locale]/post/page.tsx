"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import axios from "../../../lib/axios";

export default function Post() {
  const t = useTranslations("Post");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [response, setResponse] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/posts", { title, content });
      setResponse(res.data);
      setTitle("");
      setContent("");
    } catch {
      setResponse({ error: "Failed to create post" });
    }
  };

  return (
    <main className="p-10 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="flex items-center gap-4">
          <label className="w-16 font-medium">{t("title")}</label>
          <input
            className="flex-1 px-4 py-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex items-start gap-4">
          <label className="w-16 font-medium mt-2">{t("content")}</label>
          <textarea
            className="flex-1 px-4 py-2 border rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {t("submit")}
        </button>
      </form>

      {response && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          {response.error ? (
            <p className="text-red-600">{response.error}</p>
          ) : (
            <p className="text-green-600">
              {t("success")} #{response.id} – {response.title}
            </p>
          )}
        </div>
      )}
    </main>
  );
}
