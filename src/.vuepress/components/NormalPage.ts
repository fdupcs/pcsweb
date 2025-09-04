import type { HeaderLevels } from "@vuepress/helper/client";
import { hasGlobalComponent } from "@vuepress/helper/client";
import type { ComponentOptions, SlotsType, VNode } from "vue";
import {
  computed,
  defineComponent,
  h,
  ref,
  resolveComponent,
  onMounted,
} from "vue";
import { usePageFrontmatter, withBase } from "vuepress/client";
import { RenderDefault } from "vuepress-shared/client";

import BreadCrumb from "vuepress-theme-hope/components/BreadCrumb.js";
import MarkdownContent from "vuepress-theme-hope/components/MarkdownContent.js";
import PageNav from "vuepress-theme-hope/components/PageNav.js";
import PageTitle from "vuepress-theme-hope/components/PageTitle.js";
import { useThemeLocaleData } from "vuepress-theme-hope/composables/index.js";
import PageMeta from "vuepress-theme-hope/modules/info/components/PageMeta.js";
import TOC from "vuepress-theme-hope/modules/info/components/TOC.js";
import { useDarkMode } from "vuepress-theme-hope/modules/outlook/composables/index.js";

import type { ThemeNormalPageFrontmatter } from "../../../node_modules/vuepress-theme-hope/lib/shared/index.js";

import "../../../node_modules/vuepress-theme-hope/lib/client/styles/normal-page.scss";

export default defineComponent({
  name: "NormalPage",

  slots: Object as SlotsType<{
    top?: () => VNode[] | VNode | null;
    bottom?: () => VNode[] | VNode | null;

    contentBefore?: () => VNode[] | VNode | null;
    contentAfter?: () => VNode[] | VNode | null;

    tocBefore?: () => VNode[] | VNode | null;
    tocAfter?: () => VNode[] | VNode | null;
  }>,

  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter<ThemeNormalPageFrontmatter>();
    const { isDarkMode } = useDarkMode();
    const themeLocale = useThemeLocaleData();

    const tocEnable = computed(
      () => frontmatter.value.toc ?? themeLocale.value.toc ?? true,
    );

    const headerLevels = computed<HeaderLevels>(() => [
      2,
      (frontmatter.value.headerDepth ?? themeLocale.value.headerDepth ?? 2) + 1,
    ]);

    const canLoadComment = ref(false);

    async function checkCanLoadComment() {
      if (hasGlobalComponent("CommentService")) {
        try {
          const res = await fetch(
            "https://waline.fdupcs.top/api/comment?type=count",
          );
          if (res.ok) canLoadComment.value = true;
        } catch (e) {
          // console.log(e);
        }
      }
    }
    onMounted(() => {
      checkCanLoadComment();
    });

    return (): VNode =>
      h(
        "main",
        { id: "main-content", class: "vp-page" },
        h(
          hasGlobalComponent("LocalEncrypt")
            ? (resolveComponent("LocalEncrypt") as ComponentOptions)
            : RenderDefault,
          () => [
            slots.top?.(),
            frontmatter.value.cover
              ? h(
                  "div",
                  { class: "page-cover" },
                  h("img", {
                    src: withBase(frontmatter.value.cover),
                    alt: "",
                    "no-view": "",
                  }),
                )
              : null,
            h(BreadCrumb),
            h(PageTitle),
            tocEnable.value
              ? h(
                  TOC,
                  {
                    options: {
                      levels: headerLevels.value,
                      ignore: [".vp-badge"],
                    },
                  },
                  {
                    before: slots.tocBefore,
                    after: slots.tocAfter,
                  },
                )
              : null,
            h(
              MarkdownContent,
              {},
              {
                before: slots.contentBefore,
                after: slots.contentAfter,
              },
            ),
            h(PageMeta),
            h(PageNav),
            canLoadComment.value
              ? h(resolveComponent("CommentService"), {
                  darkmode: isDarkMode.value,
                })
              : null,
            slots.bottom?.(),
          ],
        ),
      );
  },
});
