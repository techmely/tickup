import { withHydrationOverlay } from "@builder.io/react-hydration-overlay/next";
import million from "million/compiler";
import WpAutoImport from "unplugin-auto-import/webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
  webpack(config) {
    config.plugins.push(
      WpAutoImport({
        imports: [
          "react",
          {
            "next/navigation": [
              "useRouter",
              "useSearchParams",
              "useParams",
              "usePathname",
              "redirect",
              "permanentRedirect",
            ],
            "next/link": [["default", "Link"]],
            "next/image": [["default", "NImage"]],
            "next/script": [["default", "NScript"]],
            "react-use": ["useToggle"],
          },
        ],
        dirs: ["./src/shared/**"],
      }),
    );

    return config;
  },
};

const plugins = [];
const pluginOptions = [
  {
    id: "million",
    options: {
      auto: true,
    },
  },
  {
    id: "mismatch-hydration",
    options: {
      appRootSelector: "main",
    },
  },
];

if (process.env.ANALYZE === "true") {
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: true,
  });
  plugins.push({ id: "analyzer", plugin: withBundleAnalyzer });
}

plugins.push({ id: "million", plugin: million.next });
plugins.push({ id: "mismatch-hydration", plugin: withHydrationOverlay });

export default () => {
  return plugins.reduce((acc, curr) => {
    const options = pluginOptions.find((id) => curr.id === id);
    if (options && Object.keys(options).length > 0) return curr.plugin(acc, options);
    return curr.plugin(acc);
  }, nextConfig);
};
