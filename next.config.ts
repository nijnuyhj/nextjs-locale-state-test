import type { NextConfig } from "next";
import createIntlPlugin from "next-intl/plugin";

const withNextIntl = createIntlPlugin("./src/i18n/request.tsx");

const nextConfig: NextConfig = {
  reactStrictMode: false,
};

export default withNextIntl(nextConfig);
