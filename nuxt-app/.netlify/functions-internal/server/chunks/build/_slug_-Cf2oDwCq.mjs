import { _ as __nuxt_component_0 } from './nuxt-link-kHvL4Whw.mjs';
import { u as useAsyncData, _ as __nuxt_component_2 } from './index-BlmFujrj.mjs';
import { _ as __nuxt_component_0$1 } from './NuxtImg-KUY06GHK.mjs';
import { _ as __nuxt_component_3 } from './ContentRenderer-B4en9ZfA.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as useRoute, u as useHead } from './server.mjs';
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
    const slug = route.params.slug;
    const { data: article } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `blog-${slug}`,
      () => queryContent("blog", slug).findOne()
    )), __temp = await __temp, __restore(), __temp);
    const { data: relatedPosts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `blog-related-${slug}`,
      () => queryContent("blog").where({
        _path: { $ne: `/blog/${slug}` },
        category: article.value?.category
      }).limit(3).find()
    )), __temp = await __temp, __restore(), __temp);
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    const getShareUrl = (platform) => {
      const url = encodeURIComponent(`https://www.imaadcapitalpartners.com${route.path}`);
      const title = encodeURIComponent(article.value?.title || "");
      const urls = {
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
      };
      return urls[platform] || "#";
    };
    useHead({
      title: `${article.value?.title} - IMAAD Financial Group Blog`,
      meta: [
        { name: "description", content: article.value?.description },
        { property: "og:title", content: article.value?.title },
        { property: "og:description", content: article.value?.description },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: article.value?.date },
        { property: "article:author", content: article.value?.author },
        { name: "twitter:card", content: "summary_large_image" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtImg = __nuxt_component_0$1;
      const _component_ContentRenderer = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-blog-post" }, _attrs))} data-v-a1123b0c><section class="article-hero" data-v-a1123b0c><div class="container" data-v-a1123b0c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "back-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "mdi:arrow-left" }, null, _parent2, _scopeId));
            _push2(` Retour au blog `);
          } else {
            return [
              createVNode(_component_Icon, { name: "mdi:arrow-left" }),
              createTextVNode(" Retour au blog ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="article-header" data-v-a1123b0c><div class="article-meta" data-v-a1123b0c><span class="article-category" data-v-a1123b0c>${ssrInterpolate(unref(article)?.category)}</span><span class="article-date" data-v-a1123b0c>${ssrInterpolate(formatDate(unref(article)?.date))}</span></div><h1 class="article-title" data-v-a1123b0c>${ssrInterpolate(unref(article)?.title)}</h1>`);
      if (unref(article)?.author) {
        _push(`<p class="article-author" data-v-a1123b0c>`);
        _push(ssrRenderComponent(_component_Icon, { name: "mdi:account-edit" }, null, _parent));
        _push(` Par ${ssrInterpolate(unref(article).author)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(article)?.tags && unref(article).tags.length) {
        _push(`<div class="article-tags" data-v-a1123b0c><!--[-->`);
        ssrRenderList(unref(article).tags, (tag) => {
          _push(`<span class="article-tag" data-v-a1123b0c>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(article)?.image) {
        _push(`<div class="article-image" data-v-a1123b0c>`);
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
      _push(`</div></section><section class="article-content" data-v-a1123b0c><div class="container" data-v-a1123b0c><div class="article-body" data-v-a1123b0c>`);
      if (unref(article)) {
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(article) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="article-share" data-v-a1123b0c><h4 data-v-a1123b0c>Partager cet article</h4><div class="share-buttons" data-v-a1123b0c><a${ssrRenderAttr("href", getShareUrl("twitter"))} target="_blank" rel="noopener noreferrer" class="share-btn twitter" aria-label="Partager sur Twitter" data-v-a1123b0c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:twitter",
        size: "24"
      }, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", getShareUrl("linkedin"))} target="_blank" rel="noopener noreferrer" class="share-btn linkedin" aria-label="Partager sur LinkedIn" data-v-a1123b0c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:linkedin",
        size: "24"
      }, null, _parent));
      _push(`</a><a${ssrRenderAttr("href", getShareUrl("facebook"))} target="_blank" rel="noopener noreferrer" class="share-btn facebook" aria-label="Partager sur Facebook" data-v-a1123b0c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:facebook",
        size: "24"
      }, null, _parent));
      _push(`</a></div></div>`);
      if (unref(relatedPosts) && unref(relatedPosts).length) {
        _push(`<div class="related-posts" data-v-a1123b0c><h3 data-v-a1123b0c>Articles similaires</h3><div class="grid grid-3" data-v-a1123b0c><!--[-->`);
        ssrRenderList(unref(relatedPosts), (post) => {
          _push(`<article class="related-card" data-v-a1123b0c>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: post._path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h4 data-v-a1123b0c${_scopeId}>${ssrInterpolate(post.title)}</h4><p class="post-meta" data-v-a1123b0c${_scopeId}><span data-v-a1123b0c${_scopeId}>${ssrInterpolate(formatDate(post.date))}</span><span data-v-a1123b0c${_scopeId}>${ssrInterpolate(post.category)}</span></p>`);
              } else {
                return [
                  createVNode("h4", null, toDisplayString(post.title), 1),
                  createVNode("p", { class: "post-meta" }, [
                    createVNode("span", null, toDisplayString(formatDate(post.date)), 1),
                    createVNode("span", null, toDisplayString(post.category), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</article>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1123b0c"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-Cf2oDwCq.mjs.map
