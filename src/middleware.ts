import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, getLocaleFromPathname } from "@/i18n/locale";
import { localeHeader } from "@/i18n/headers";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isStaticFile =
    /\.(png|jpg|jpeg|svg|ico|webp|js|css|json|txt|map)$/.test(pathname);

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    isStaticFile
  ) {
    return NextResponse.next();
  }

  const locale = getLocaleFromPathname(pathname);
  const response = NextResponse.next();
  response.headers.set(localeHeader, locale ?? defaultLocale);

  if (!locale) {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.rewrite(newUrl, {
      request: { headers: request.headers },
    });
  }

  return response;
}
