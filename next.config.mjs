/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/bhupendra",
  trailingSlash: true, // ensures directories have their own index.html
  images: { unoptimized: true }, // needed when exporting
  experimental: {
    appDir: true,
  },
};

export default nextConfig;