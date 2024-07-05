// next.config.mjs
/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
const nextConfig = {};

// export withPWA({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
// })(nextConfig);
export default withNextIntl(nextConfig);
