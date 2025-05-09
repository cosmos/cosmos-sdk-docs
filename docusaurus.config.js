// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const lastVersion = "0.53";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Explore the SDK",
  tagline:
    "Cosmos SDK is the world's most popular framework for building application-specific blockchains.",
  url: "https://docs.cosmos.network",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "cosmos",
  projectName: "cosmos-sdk",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          lastVersion: lastVersion,
          versions: {
            current: {
              path: "main",
              banner: "unreleased",
            },
            0.53: {
              path: "v0.53",
              label: "v0.53",
              banner: "none",
            },
            0.50: {
              path: "v0.50",
              label: "v0.50",
              banner: "none",
            },
            0.47: {
              path: "v0.47",
              label: "v0.47",
              banner: "none"
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: "openapi/swagger.yaml",
            route: "/api/",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#1890ff",
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/banner.jpg",
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Cosmos SDK",
        hideOnScroll: false,
        logo: {
          alt: "Cosmos SDK Logo",
          src: "img/logo-sdk.svg",
          href: "/",
          target: "_self",
        },
        items: [
          {
            type: "doc",
            label: "Learn",
            docId: "learn/learn",
            position: "left",
          },
          {
            type: "doc",
            label: "Build",
            docId: "build/building-modules/intro",
          },
          {
            type: "doc",
            label: "User Guides",
            docId: "user/user",
            position: "left",
          },
          {
            type: "doc",
            label: "Tutorials",
            collapsed: false,
            docId:
              "tutorials/vote-extensions/auction-frontrunning/getting-started",
            position: "left",
          },
          {
            label: "REST API",
            to: "api",
          },
          {
            href: "https://github.com/cosmos/cosmos-sdk",
            html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="github-icon">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.300049C5.4 0.300049 0 5.70005 0 12.3001C0 17.6001 3.4 22.1001 8.2 23.7001C8.8 23.8001 9 23.4001 9 23.1001C9 22.8001 9 22.1001 9 21.1001C5.7 21.8001 5 19.5001 5 19.5001C4.5 18.1001 3.7 17.7001 3.7 17.7001C2.5 17.0001 3.7 17.0001 3.7 17.0001C4.9 17.1001 5.5 18.2001 5.5 18.2001C6.6 20.0001 8.3 19.5001 9 19.2001C9.1 18.4001 9.4 17.9001 9.8 17.6001C7.1 17.3001 4.3 16.3001 4.3 11.7001C4.3 10.4001 4.8 9.30005 5.5 8.50005C5.5 8.10005 5 6.90005 5.7 5.30005C5.7 5.30005 6.7 5.00005 9 6.50005C10 6.20005 11 6.10005 12 6.10005C13 6.10005 14 6.20005 15 6.50005C17.3 4.90005 18.3 5.30005 18.3 5.30005C19 7.00005 18.5 8.20005 18.4 8.50005C19.2 9.30005 19.6 10.4001 19.6 11.7001C19.6 16.3001 16.8 17.3001 14.1 17.6001C14.5 18.0001 14.9 18.7001 14.9 19.8001C14.9 21.4001 14.9 22.7001 14.9 23.1001C14.9 23.4001 15.1 23.8001 15.7 23.7001C20.5 22.1001 23.9 17.6001 23.9 12.3001C24 5.70005 18.6 0.300049 12 0.300049Z" fill="currentColor"/>
            </svg>
            `,
            position: "right",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              {
                href: "https://docs.cosmos.network/v0.46/",
                label: "v0.46",
                target: "_self",
              },
              {
                href: "https://docs.cosmos.network/v0.45/",
                label: "v0.45",
                target: "_self",
              },
            ],
          },
        ],
      },
      footer: {
        links: [
          {
            items: [
              {
                html: `<a href="https://cosmos.network"><img src="/img/logo-bw.svg" alt="Cosmos Logo"></a>`,
              },
            ],
          },
          {
            title: "Documentation",
            items: [
              {
                label: "Cosmos Hub",
                href: "https://hub.cosmos.network",
              },
              {
                label: "CometBFT",
                href: "https://docs.cometbft.com",
              },
              {
                label: "IBC Go",
                href: "https://ibc.cosmos.network",
              },
              {
                label: "REST API",
                to: "api",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Blog",
                href: "https://blog.cosmos.network",
              },
              {
                label: "Forum",
                href: "https://forum.cosmos.network",
              },
              {
                label: "Discord",
                href: "https://discord.gg/interchain",
              },
              {
                label: "Reddit",
                href: "https://reddit.com/r/cosmosnetwork",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/interchain",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/cosmos_sdk",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/c/CosmosProject",
              },
              {
                label: "Telegram",
                href: "https://t.me/cosmosproject",
              },
            ],
          },
        ],
        copyright: `<p>The development of the Cosmos SDK is led primarily by <a href="https://interchain.io/ecosystem">Interchain Core Teams</a>. Funding for this development comes primarily from the Interchain Foundation, a Swiss non-profit.</p>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["protobuf", "go-module"], // https://prismjs.com/#supported-languages
      },
      algolia: {
        appId: "QLS2QSP47E",
        apiKey: "4d9feeb481e3cfef8f91bbc63e090042",
        indexName: "sdk_docs",
        contextualSearch: false,
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ["@you54f/theme-github-codeblock", "@docusaurus/theme-mermaid"],
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("postcss-import"));
          postcssOptions.plugins.push(require("tailwindcss/nesting"));
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@docusaurus/plugin-google-analytics",
      {
        trackingID: "UA-51029217-2",
        anonymizeIP: true,
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        fromExtensions: ["html"],
        toExtensions: ["html"],
        redirects: [
          {
            from: ["/main", "/master", "/v0.43", "/v0.44"],
            to: "/",
          },
          {
            from: [
              "/main/modules/auth/01_concepts",
              "/main/modules/auth/02_state",
              "/main/modules/auth/03_antehandlers",
              "/main/modules/auth/04_keepers",
              "/main/modules/auth/06_params",
              "/main/modules/auth/07_client",
            ],
            to: "/main/build/modules/auth",
          },
          {
            from: "/main/modules/auth/05_vesting",
            to: "/main/build/modules/auth/vesting",
          },
          {
            from: [
              "/main/modules/authz/01_concepts",
              "/main/modules/authz/02_state",
              "/main/modules/authz/03_messages",
              "/main/modules/authz/04_events",
              "/main/modules/authz/05_client",
            ],
            to: "/main/build/modules/authz",
          },
          {
            from: [
              "/main/modules/bank/01_state",
              "/main/modules/bank/02_keepers",
              "/main/modules/bank/04_events",
              "/main/modules/bank/05_params",
              "/main/modules/bank/06_client",
            ],
            to: "/main/build/modules/bank",
          },
          {
            from: [
              "/main/modules/crisis/01_state",
              "/main/modules/crisis/02_messages",
              "/main/modules/crisis/03_events",
              "/main/modules/crisis/04_params",
              "/main/modules/crisis/05_client",
            ],
            to: "/main/build/modules/crisis",
          },
          {
            from: [
              "/main/modules/distribution/01_concepts",
              "/main/modules/distribution/02_state",
              "/main/modules/distribution/03_begin_block",
              "/main/modules/distribution/04_messages",
              "/main/modules/distribution/05_hooks",
              "/main/modules/distribution/06_events",
              "/main/modules/distribution/07_params",
              "/main/modules/distribution/08_client",
            ],
            to: "/main/build/modules/distribution",
          },
          {
            from: [
              "/main/modules/evidence/01_concepts",
              "/main/modules/evidence/02_state",
              "/main/modules/evidence/03_messages",
              "/main/modules/evidence/04_events",
              "/main/modules/evidence/05_params",
              "/main/modules/evidence/06_begin_block",
              "/main/modules/evidence/07_client",
            ],
            to: "/main/build/modules/evidence",
          },
          {
            from: [
              "/main/modules/feegrant/01_concepts",
              "/main/modules/feegrant/02_state",
              "/main/modules/feegrant/03_messages",
              "/main/modules/feegrant/04_events",
              "/main/modules/feegrant/05_client",
            ],
            to: "/main/build/modules/feegrant",
          },
          {
            from: [
              "/main/modules/gov/01_concepts",
              "/main/modules/gov/02_state",
              "/main/modules/gov/03_messages",
              "/main/modules/gov/04_events",
              "/main/modules/gov/05_future_improvements",
              "/main/modules/gov/06_params",
              "/main/modules/gov/07_client",
              "/main/modules/gov/08_metadata",
            ],
            to: "/main/build/modules/gov",
          },
          {
            from: [
              "/main/modules/group/01_concepts",
              "/main/modules/group/02_state",
              "/main/modules/group/03_messages",
              "/main/modules/group/04_events",
              "/main/modules/group/05_client",
              "/main/modules/group/06_metadata",
            ],
            to: "/main/build/modules/auth",
          },
          {
            from: [
              "/main/modules/mint/01_concepts",
              "/main/modules/mint/02_state",
              "/main/modules/mint/03_begin_block",
              "/main/modules/mint/04_params",
              "/main/modules/mint/05_events",
              "/main/modules/mint/06_client",
            ],
            to: "/main/build/modules/mint/",
          },
          {
            from: [
              "/main/modules/nft/01_concepts",
              "/main/modules/nft/02_state",
              "/main/modules/nft/03_messages",
              "/main/modules/nft/04_events",
            ],
            to: "/main/build/modules/nft/",
          },
          {
            from: [
              "/main/modules/params/01_keeper",
              "/main/modules/params/02_subspace",
            ],
            to: "/main/build/modules/params/",
          },
          {
            from: [
              "/main/modules/slashing/01_concepts",
              "/main/modules/slashing/02_state",
              "/main/modules/slashing/03_messages",
              "/main/modules/slashing/04_begin_block",
              "/main/modules/slashing/05_hooks",
              "/main/modules/slashing/06_events",
              "/main/modules/slashing/07_tombstone",
              "/main/modules/slashing/08_params",
              "/main/modules/slashing/09_client",
            ],
            to: "/main/build/modules/slashing/",
          },
          {
            from: [
              "/main/modules/staking/01_state",
              "/main/modules/staking/02_state_transitions",
              "/main/modules/staking/03_messages",
              "/main/modules/staking/04_begin_block",
              "/main/modules/staking/05_end_block",
              "/main/modules/staking/06_hooks",
              "/main/modules/staking/07_events",
              "/main/modules/staking/08_params",
              "/main/modules/staking/09_client",
            ],
            to: "/main/build/modules/staking/",
          },
          {
            from: [
              "/main/modules/upgrade/01_concepts",
              "/main/modules/upgrade/02_state",
              "/main/modules/upgrade/03_events",
              "/main/modules/upgrade/04_client",
            ],
            to: "/main/build/modules/upgrade/",
          },
          {
            from: ["/main/modules/capability", "/main/ecosystem"],
            to: "/main/build/modules/",
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes("/learn/advanced")) {
            return [existingPath.replace("/learn/advanced", "/core")];
          }
          if (existingPath.includes("/learn/beginner")) {
            return [existingPath.replace("/learn/beginner", "/basics")];
          }
          if (existingPath.includes("/learn/intro")) {
            return [existingPath.replace("/learn/intro", "/intro")];
          }
          if (existingPath.includes("build/architecture")) {
            return [
              existingPath.replace("/build/architecture", "/architecture/"),
            ];
          }
          if (existingPath.includes("/build/building-apps")) {
            return [existingPath.replace("/building-apps", "/building-apps")];
          }
          if (existingPath.includes("/build/building-modules")) {
            return [
              existingPath.replace(
                "/build/building-modules",
                "/building-modules"
              ),
            ];
          }
          if (existingPath.includes("/build/tooling")) {
            return [existingPath.replace("/build/tooling", "/tooling")];
          }
          if (existingPath.includes("/build/migrations")) {
            return [existingPath.replace("/build/migrations", "/migrations")];
          }
          if (existingPath.includes("/build/modules")) {
            return [existingPath.replace("/build/modules", "/modules")];
          }
          if (existingPath.includes("/build/rfc")) {
            return [existingPath.replace("/build/rfc", "/rfc")];
          }
          if (existingPath.includes("/build/spec")) {
            return [existingPath.replace("/build/spec", "/spec")];
          }
          if (existingPath.includes("/build/tooling")) {
            return [existingPath.replace("/build/tooling", "/tooling")];
          }
          if (existingPath.includes("/user/run-node")) {
            return [existingPath.replace("/user/run-node", "/run-node")];
          }
          return undefined;
        },
      },
    ],
  ],
  scripts: [
    {
      src: "https://widget.kapa.ai/kapa-widget.bundle.js",
      "data-website-id": "c64ef56e-ad38-4e7a-9c67-4089a1a69ac4",
      "data-project-name": "Interchain Stack",
      "data-project-color": "#5064FB",
      "data-modal-disclaimer":
        "This is a custom LLM for the Interchain Stack with access to developer documentation and resources across the core Cosmos components. Please note that answers are generated by an AI so please use your best judgement before implementing.",
      "data-modal-image": "img/logo-sdk.svg",
      "data-project-logo": "img/spirograph-white.svg",
      "data-user-analytics-fingerprint-enabled": "true",
      async: true,
    },
  ],
};

module.exports = config;
