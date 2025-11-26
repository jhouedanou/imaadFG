import { _ as __nuxt_component_0 } from './Hero-DauCVy2f.mjs';
import { u as useAsyncData, _ as __nuxt_component_2 } from './index-BlmFujrj.mjs';
import { _ as __nuxt_component_0$1 } from './NuxtImg-KUY06GHK.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-kHvL4Whw.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useSiteData } from './useSiteData-f77pvdcf.mjs';
import { _ as _export_sfc, u as useHead } from './server.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blog",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { pages } = useSiteData();
    const pageData = pages.blog;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "blog-posts",
      () => queryContent("blog").sort({ date: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    };
    useHead({
      title: `Blog - IMAAD Financial Group`,
      meta: [
        {
          name: "description",
          content: pageData.hero.subtitle
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = __nuxt_component_0;
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtImg = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-blog" }, _attrs))} data-v-e78fec0f>`);
      _push(ssrRenderComponent(_component_Hero, {
        title: unref(pageData).hero.title,
        subtitle: unref(pageData).hero.subtitle
      }, null, _parent));
      _push(`<section class="section blog-section" data-v-e78fec0f><div class="container" data-v-e78fec0f>`);
      if (!unref(posts) || unref(posts).length === 0) {
        _push(`<div class="empty-state" data-v-e78fec0f>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:post-outline",
          size: "64"
        }, null, _parent));
        _push(`<h3 data-v-e78fec0f>Aucun article pour le moment</h3><p data-v-e78fec0f>Revenez bientôt pour lire nos analyses et perspectives</p></div>`);
      } else {
        _push(`<div class="grid grid-2" data-v-e78fec0f><!--[-->`);
        ssrRenderList(unref(posts), (post) => {
          _push(`<article class="blog-card card" data-v-e78fec0f><div class="blog-image" data-v-e78fec0f>`);
          if (post.image) {
            _push(ssrRenderComponent(_component_NuxtImg, {
              src: post.image,
              alt: post.title,
              width: "600",
              height: "400"
            }, null, _parent));
          } else {
            _push(`<div class="blog-placeholder" data-v-e78fec0f>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "mdi:book-open-page-variant",
              size: "48"
            }, null, _parent));
            _push(`</div>`);
          }
          _push(`</div><div class="blog-content" data-v-e78fec0f><div class="blog-meta" data-v-e78fec0f><span class="blog-date" data-v-e78fec0f>${ssrInterpolate(formatDate(post.date))}</span><span class="blog-category" data-v-e78fec0f>${ssrInterpolate(post.category)}</span></div><h3 data-v-e78fec0f>${ssrInterpolate(post.title)}</h3>`);
          if (post.author) {
            _push(`<p class="blog-author" data-v-e78fec0f>`);
            _push(ssrRenderComponent(_component_Icon, { name: "mdi:account-edit" }, null, _parent));
            _push(` Par ${ssrInterpolate(post.author)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<p class="blog-excerpt" data-v-e78fec0f>${ssrInterpolate(post.description)}</p>`);
          if (post.tags && post.tags.length) {
            _push(`<div class="blog-tags" data-v-e78fec0f><!--[-->`);
            ssrRenderList(post.tags, (tag) => {
              _push(`<span class="blog-tag" data-v-e78fec0f>${ssrInterpolate(tag)}</span>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: post._path,
            class: "read-more"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("common.read_more"))} `);
                _push2(ssrRenderComponent(_component_Icon, { name: "mdi:arrow-right" }, null, _parent2, _scopeId));
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("common.read_more")) + " ", 1),
                  createVNode(_component_Icon, { name: "mdi:arrow-right" })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></article>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e78fec0f"]]);

export { blog as default };
//# sourceMappingURL=blog-CBXn4dhS.mjs.map
