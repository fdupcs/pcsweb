import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme(
  {
    hostname: "https://fdupcs.top",

    author: {
      name: "PCS",
      url: "https://github.com/fdupcs",
    },

    logo: "/assets/icon.png",

    repo: "fdupcs/pcsweb",

    docsDir: "src",

    navbar,

    sidebar,

    sidebarSorter: ["order", "title", "filename"],

    license: "CC BY-NC 4.0",

    favicon: "/assets/icon.png",

    footer: "PCS 服务队官方网站",
    displayFooter: true,

    blog: {
      description: "PCS 志愿者服务队",
      avatar: "/assets/logo.png",
      intro: "/intro.html",
      medias: {
        "PCS 服务队公众号": {
          icon: "https://fdupcs.top/assets/medias/PCS.svg",
          link: "/contact#pcs-服务队公众号",
        },
        "CPS 婚介所公众号": {
          icon: "https://fdupcs.top/assets/medias/CPS.svg",
          link: "/contact#cps-婚介所公众号",
        },
        "PCService 日常答疑群": {
          icon: "https://fdupcs.top/assets/medias/QQ.svg",
          link: "https://qm.qq.com/q/BqsEh9fGi6",
        },
        "PCService 频道": {
          icon: "https://fdupcs.top/assets/medias/QQChannel.svg",
          link: "https://pd.qq.com/s/ealld0rtu?businessType=5",
        },
      },
    },

    metaLocales: {
      editLink: "在 GitHub 上编辑此页",
    },

    blogLocales: {
      intro: "服务队简介",
    },

    contributors: false,

    changelog: false,

    markdown: {
      hint: true,
      tabs: true,
      spoiler: true,
      figure: true,
      imgMark: true,
      imgSize: true,
      imgLazyload: true,
      align: true,
    },

    plugins: {
      blog: true,

      icon: {
        assets: "fontawesome-with-brands",
      },

      comment: {
        provider: "Waline",
        serverURL: "https://waline.fdupcs.top",
        requiredMeta: ["nick"],
        reaction: [],
      },
    },
  },

  { custom: true },
);
