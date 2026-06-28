import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // worker-mailer imports `cloudflare:sockets`, which is only available in the
  // Workers runtime. Keep it external so Next's bundler doesn't try to resolve it.
  serverExternalPackages: ["worker-mailer"],
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

// Enables Cloudflare bindings (env vars, secrets, etc.) during `next dev`.
initOpenNextCloudflareForDev();
