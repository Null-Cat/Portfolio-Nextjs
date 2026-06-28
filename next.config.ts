import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Use Permissions-Policy (modern); avoid deprecated Feature-Policy / invalid feature names
          {
            key: "Permissions-Policy",
            value: [
              "autoplay=(self)",
              "camera=()",
              "microphone=()",
              "geolocation=()",
            ].join(", "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
