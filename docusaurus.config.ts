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
