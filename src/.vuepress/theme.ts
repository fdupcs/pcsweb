import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://pcservice.top",

  author: {
    name: "PCS",
    url: "https://github.com/fdupcs",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/assets/logo.png",

  repo: "fdupcs/pcsweb",

  docsDir: "src",

  navbar,

  sidebar,

  license: "CC BY-NC 4.0",

  favicon: "/assets/logo.png",

  footer: "PCS 服务队官方网站",
  displayFooter: true,

  blog: {
    description: "PCS 志愿服务队",
    intro: "/intro.html",
    medias: {
      "PCS 服务队公众号": {
        icon: "https://pcservices.top/assets/medias/PCS.svg",
        link: "",
      },
      "CPS 婚介所公众号": {
        icon: "https://pcservices.top/assets/medias/CPS.svg",
        link: "",
      },
      "PC Service 日常答疑群": {
        icon: "https://pcservices.top/assets/medias/QQ.svg",
        link: "https://qm.qq.com/q/BqsEh9fGi6",
      },
    },
  },

  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: true,

    comment: {
      provider: "Giscus",
      repo: "fdupcs/pcsweb",
      repoId: "MDEwOlJlcG9zaXRvcnkxMTQ5OTY5NDE=",
      category: "Q&A",
      categoryId: "DIC_kwDOBtq2zc4CiKkJ",
    },

    mdEnhance: {
    },
  },
});
