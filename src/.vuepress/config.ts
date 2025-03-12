import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "PCS 服务队",
  description: "PCS 服务队官方网站",

  theme,
});
