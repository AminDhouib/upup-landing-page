import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Modern File Uploads for React",
  tagline:
    "Open-source React component library with cloud storage integrations, drag & drop, and enterprise-grade features.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://upup-landing-page.vercel.app",
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/AminDhouib/upup-landing-page",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
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
    // Replace with your project's social card
    image: "img/social-card.jpg",
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
          type: "html",
          position: "left",
          value: `<a href="/#feedback" class="feedback-link">Feedback</a>`,
        },
        {
          type: "html",
          position: "right",
          value: `<a class="github-link" href="https://github.com/DevinoSolutions/upup"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a>`,
        },
      ],
    },
    footer: {
      copyright: `Built with 💙 by <a target="_blank" href="https://devino.ca">Devino Solutions Inc</a>.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,

  customFields: {
    packageUrl: "https://github.com/DevinoSolutions/upup",
    driveConfigs: {
      googleDrive: {
        google_client_id:
          "831388449884-gac28dqof51il9tc7eitqjt1ql2vcjeb.apps.googleusercontent.com",
        google_api_key: "AIzaSyCxm3S2g011GaJBqSxdbpJueTN8y213WYM",
        google_app_id: "unotes-381911",
      },
      oneDrive: {
        onedrive_client_id: "6a5dfe6b-7b41-4f43-a4f3-5c6e434056e1",
      },
    },
    tokenEndpoint: "",
  },
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
