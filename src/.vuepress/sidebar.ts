import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/guides/": [
    "/",
    {
      text: "指南",
      icon: "laptop-code",
      link: "/guides/",
      prefix: "/guides/",
      collapsible: true,
      children: [
        "windows-install",
        "unlock-bitlocker",
        "c-drive-cleanup",
        "vmware-usage",
        "spyder-usage",
      ],
    },
  ],
});
