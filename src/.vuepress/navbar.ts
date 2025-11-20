import { navbar } from "vuepress-theme-hope";

export default navbar([
  "intro",
  "/",
  {
    text: "指南",
    icon: "laptop-code",
    link: "/guides/",
    children: ["/guides/", "/guides/tutorials/"],
  },
  "contact",
]);
