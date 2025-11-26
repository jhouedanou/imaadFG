import { _ as __nuxt_component_0 } from './nuxt-link-kHvL4Whw.mjs';
import { u as useAsyncData, _ as __nuxt_component_2 } from './index-BlmFujrj.mjs';
import { _ as __nuxt_component_0$1 } from './NuxtImg-KUY06GHK.mjs';
import { _ as __nuxt_component_3 } from './ContentRenderer-B4en9ZfA.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as useRoute, c as useRuntimeConfig, u as useHead } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import '@iconify/utils';
import 'consola';
import 'better-sqlite3';
import 'node:url';
import 'ipx';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'property-information';
import 'minimark/hast';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const config = useRuntimeConfig();
    const { data: article } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "article",
      () => queryContent("actualites", route.params.slug).findOne()
    )), __temp = await __temp, __restore(), __temp);
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const shareLinks = computed(() => {
      const url = encodeURIComponent(`${config.public.siteUrl}${route.path}`);
      const title = encodeURIComponent(article.value?.title || "");
      return {
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
      };
    });
    useHead({
      title: article.value?.title || "Article",
      meta: [
        {
          name: "description",
          content: article.value?.description || ""
        },
        {
          property: "og:title",
          content: article.value?.title || ""
        },
        {
          property: "og:description",
          content: article.value?.description || ""
        },
        {
          property: "og:image",
          content: article.value?.image || ""
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtImg = __nuxt_component_0$1;
      const _component_ContentRenderer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-actualite-detail" }, _attrs))} data-v-57dc8135>`);
      if (unref(article)) {
        _push(`<article class="article-detail" data-v-57dc8135><header class="article-header" data-v-57dc8135><div class="container" data-v-57dc8135>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/actualites",
          class: "back-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "mdi:arrow-left" }, null, _parent2, _scopeId));
              _push2(` Retour aux actualités `);
            } else {
              return [
                createVNode(_component_Icon, { name: "mdi:arrow-left" }),
                createTextVNode(" Retour aux actualités ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h1 class="article-title" data-v-57dc8135>${ssrInterpolate(unref(article).title)}</h1><div class="article-meta" data-v-57dc8135><span class="article-date" data-v-57dc8135>`);
        _push(ssrRenderComponent(_component_Icon, { name: "mdi:calendar" }, null, _parent));
        _push(` ${ssrInterpolate(formatDate(unref(article).date))}</span>`);
        if (unref(article).category) {
          _push(`<span class="article-category-badge" data-v-57dc8135>${ssrInterpolate(unref(article).category)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(article).author) {
          _push(`<span class="article-author" data-v-57dc8135>`);
          _push(ssrRenderComponent(_component_Icon, { name: "mdi:account" }, null, _parent));
          _push(` ${ssrInterpolate(unref(article).author)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></header>`);
        if (unref(article).image) {
          _push(`<div class="article-featured-image" data-v-57dc8135>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: unref(article).image,
            alt: unref(article).title,
            width: "1200",
            height: "600"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="article-content-wrapper" data-v-57dc8135><div class="container" data-v-57dc8135><div class="article-body" data-v-57dc8135>`);
        _push(ssrRenderComponent(_component_ContentRenderer, {
          value: unref(article),
          class: "prose"
        }, null, _parent));
        _push(`</div><div class="article-share" data-v-57dc8135><h4 data-v-57dc8135>Partager cet article</h4><div class="share-buttons" data-v-57dc8135><a${ssrRenderAttr("href", unref(shareLinks).twitter)} target="_blank" class="share-btn twitter" data-v-57dc8135>`);
        _push(ssrRenderComponent(_component_Icon, { name: "mdi:twitter" }, null, _parent));
        _push(`</a><a${ssrRenderAttr("href", unref(shareLinks).facebook)} target="_blank" class="share-btn facebook" data-v-57dc8135>`);
        _push(ssrRenderComponent(_component_Icon, { name: "mdi:facebook" }, null, _parent));
        _push(`</a><a${ssrRenderAttr("href", unref(shareLinks).linkedin)} target="_blank" class="share-btn linkedin" data-v-57dc8135>`);
        _push(ssrRenderComponent(_component_Icon, { name: "mdi:linkedin" }, null, _parent));
        _push(`</a></div></div></div></div></article>`);
      } else {
        _push(`<div class="article-not-found" data-v-57dc8135>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:alert-circle",
          size: "64"
        }, null, _parent));
        _push(`<h2 data-v-57dc8135>Article non trouvé</h2>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/actualites",
          class: "btn btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Retour aux actualités `);
            } else {
              return [
                createTextVNode(" Retour aux actualités ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/actualites/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-57dc8135"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-B6go-ji0.mjs.map
