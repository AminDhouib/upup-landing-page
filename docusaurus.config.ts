import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import * as dotenv from "dotenv";
dotenv.config();

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Modern File Uploads for React",
  tagline:
    "Open-source React component library with cloud storage integrations, drag & drop, and enterprise-grade features.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://useupup.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // // If you aren't using GitHub pages, you don't need these.
  // organizationName: "facebook", // Usually your GitHub org/user name.
  // projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en"],
  // },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/DevinoSolutions/upup",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  headTags: [
    ...(process.env.NODE_ENV === "production"
      ? [
          {
            tagName: "script",
            attributes: {
              defer: "true",
            },
            innerHTML: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:6368230,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          },
        ]
      : []),
  ],
  plugins: [
    // Flatten the conditional array using spread operator
    ...(process.env.NODE_ENV === "production"
      ? [
          [
            "@docusaurus/plugin-google-gtag",
            {
              trackingID: "G-F52BVDX05M",
              anonymizeIP: true,
            },
          ],
        ]
      : []),
    [
      "@docusaurus/plugin-pwa",
      {
        debug: false,
        offlineModeActivationStrategies: ["appInstalled", "queryString"],
        pwaHead: [
          { tagName: "link", rel: "icon", href: "/img/logo.png" },
          { tagName: "meta", name: "theme-color", content: "#ffffff" },
        ],
      },
    ],
    ["@docusaurus/plugin-ideal-image", {}],
  ],
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: "dark",
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    image: "img/social-card.png",
    navbar: {
      title: "",
      logo: {
        alt: "Upup",
        src: "img/logo.png",
        srcDark: "img/logo-dark.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },

        {
          label: "Feedback",
          to: "/#feedback",
          position: "left",
          activeBaseRegex: "^$", // This prevents it from being highlighted in blue
        },
        {
          to: "https://github.com/DevinoSolutions/upup",
          position: "left",
          label: "GitHub",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              to: "/privacy",
            },
          ],
        },
      ],
      copyright: `Built with 💙 by <a target="_blank" href="https://devino.ca">Devino Solutions Inc</a>.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
    metadata: [
      // 🔍 General SEO
      {
        name: "title",
        content: "Upup – The True Best React File Upload Component",
      },
      {
        name: "description",
        content:
          "Upup is the true best modern, open-source React file uploader with drag & drop, instant previews, and seamless cloud storage integration including Google Drive, OneDrive, and S3.",
      },
      {
        name: "keywords",
        content:
          "React file uploader, file upload component, Google Drive uploader, S3 upload, OneDrive integration, drag and drop uploader, cloud storage React component",
      },
      // 📘 Open Graph (for social sharing)
      {
        name: "og:title",
        content: "Upup – The True Best React File Upload Component",
      },
      {
        name: "og:description",
        content:
          "React file uploader with drag & drop, instant previews, and cloud storage integrations including Google Drive, OneDrive, and S3. Fully customizable and developer-friendly.",
      },
      {
        name: "og:image",
        content: "https://useupup.com/img/social-card.png",
      },
      { name: "og:url", content: "https://useupup.com/" },
      { name: "og:type", content: "website" },
      // 🐦 Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Upup – The True Best React File Upload Component",
      },
      {
        name: "twitter:description",
        content:
          "Open-source React uploader with drag-and-drop, previews, and cloud storage integrations.",
      },
      {
        name: "twitter:image",
        content: "https://useupup.com/img/social-card.png",
      },
    ],
  } satisfies Preset.ThemeConfig,
  customFields: {
    packageUrl: "https://github.com/DevinoSolutions/upup",
    driveConfigs: {
      googleDrive: {
        google_client_id: process.env.GOOGLE_CLIENT_ID,
        google_api_key: process.env.GOOGLE_API_KEY,
        google_app_id: process.env.GOOGLE_APP_ID,
      },
      oneDrive: {
        onedrive_client_id: process.env.ONEDRIVE_CLIENT_ID,
      },
    },
    tokenEndpoint: "http://localhost:5000/api/generate-presigned-url",
  },
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
