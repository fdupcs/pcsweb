import type { Slot } from "@vuepress/helper/client";
import { RenderDefault, hasGlobalComponent } from "@vuepress/helper/client";
import type { ComponentOptions, SlotsType, VNode } from "vue";
import { defineComponent, h, onMounted, ref, resolveComponent } from "vue";
import { withBase } from "vuepress/client";

import BreadCrumb from "@theme-hope/components/base/BreadCrumb";
import MarkdownContent from "@theme-hope/components/base/MarkdownContent";
import PageNav from "@theme-hope/components/base/PageNav";
import PageTitle from "@theme-hope/components/base/PageTitle";
import TOC from "@theme-hope/components/base/TOC";
import PageMeta from "@theme-hope/components/info/PageMeta";
import { useDarkMode } from "@theme-hope/composables/useDarkMode";
import { useData } from "@theme-hope/composables/useData";
import type { TocSlotData } from "@theme-hope/typings/slots";

import "../../../node_modules/vuepress-theme-hope/lib/client/styles/base/page-content.scss";

export default defineComponent({
  name: "PageContent",

  slots: Object as SlotsType<{
    pageTop?: Slot;
    pageBottom?: Slot;

    // content
    content?: Slot;
    contentBefore?: Slot;
    contentAfter?: Slot;

    // toc
    toc?: Slot<TocSlotData>;
    tocBefore?: Slot;
    tocAfter?: Slot;
  }>,

  setup(_props, { slots }) {
    const { frontmatter } = useData();
    const { isDarkMode } = useDarkMode();

    const canLoadComment = ref(false);

    async function checkCanLoadComment() {
      if (hasGlobalComponent("CommentService")) {
        try {
          const res = await fetch("https://waline.fdupcs.top/api/comment?type=count");
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
            slots.pageTop?.(),
            frontmatter.value.cover
              ? h(
                  "div",
                  { class: "page-cover" },
                  h("img", {
                    src: withBase(frontmatter.value.cover),
                    alt: "",
                    "no-view": "",
                  })
                )
              : null,
            h(BreadCrumb),
            h(PageTitle),
            h(TOC, null, slots),
            slots.content?.() ?? h(MarkdownContent, null, slots),
            h(PageMeta),
            h(PageNav),
            canLoadComment.value
              ? h(resolveComponent("CommentService"), {
                  darkmode: isDarkMode.value,
                })
              : null,
            slots.pageBottom?.(),
          ]
        )
      );
  },
});
