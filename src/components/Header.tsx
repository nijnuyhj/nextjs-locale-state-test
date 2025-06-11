"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <header className="p-4 border-b flex gap-4">
      <button onClick={() => changeLanguage("ko")}>한국어</button>
      <button onClick={() => changeLanguage("en")}>English</button>
    </header>
  );
}
