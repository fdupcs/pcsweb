import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "PCS 服务队",
  description: "PCS 服务队官方网站",

  theme,

  alias: {
    "@theme-hope/components/NormalPage": path.resolve(
      __dirname,
      "./components/NormalPage.ts",
    ),
  },
});
