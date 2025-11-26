import { _ as __nuxt_component_0$1 } from './nuxt-link-kHvL4Whw.mjs';
import { _ as __nuxt_component_0$2 } from './NuxtImg-KUY06GHK.mjs';
import { defineComponent, mergeProps, computed, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { u as useSiteData } from './useSiteData-f77pvdcf.mjs';
import { _ as _export_sfc, b as useI18n, k as useLocalePath } from './server.mjs';
import { _ as __nuxt_component_2 } from './index-BlmFujrj.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, navigation } = useSiteData();
    const { locale, locales, setLocale } = useI18n();
    const localePath = useLocalePath();
    const availableLocales = computed(() => locales.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = __nuxt_component_0$2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "site-header" }, _attrs))} data-v-c45141d3><div class="header-container" data-v-c45141d3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: unref(site).logo,
              alt: unref(site).name,
              width: "150",
              height: "60"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: unref(site).logo,
                alt: unref(site).name,
                width: "150",
                height: "60"
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="main-nav" data-v-c45141d3><ul data-v-c45141d3><!--[-->`);
      ssrRenderList(unref(navigation), (item) => {
        _push(`<li data-v-c45141d3>`);
        if (item.external) {
          _push(`<a${ssrRenderAttr("href", item.path)} target="_blank" rel="noopener noreferrer" data-v-c45141d3>${ssrInterpolate(_ctx.$t(`nav.${item.id}`))}</a>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(localePath)(item.path),
            class: { active: item.isActive }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t(`nav.${item.id}`))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t(`nav.${item.id}`)), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav><div class="header-actions" data-v-c45141d3><div class="language-switcher" data-v-c45141d3><!--[-->`);
      ssrRenderList(unref(availableLocales), (locale2) => {
        _push(`<button class="${ssrRenderClass([{ active: locale2.code === _ctx.$i18n.locale }, "lang-btn"])}" data-v-c45141d3>`);
        if (locale2.code === "fr") {
          _push(`<span class="flag-icon" data-v-c45141d3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" width="20" height="15" data-v-c45141d3><rect y="16" fill="#EDEDED" width="112" height="80" data-v-c45141d3></rect><rect y="16" fill="#323E95" width="37.3" height="80" data-v-c45141d3></rect><rect x="74.7" y="16" fill="#D80031" width="37.3" height="80" data-v-c45141d3></rect></svg></span>`);
        } else if (locale2.code === "en") {
          _push(`<span class="flag-icon" data-v-c45141d3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" width="20" height="15" data-v-c45141d3><path fill="#EDEDED" d="M51.3,63.9V96h-3.5V70.7L11,96H7.1l39.8-27.3h-7.8L0,95.5v-7.8l27.5-19H0v-4.8C0,63.9,51.3,63.9,51.3,63.9z M61.7,96h3.4V70.7l37,25.3h9.9v-0.8L73.2,68.7H81l31,21.2v-3.1L85.4,68.7H112v-4.8H61.7V96z M51.3,16h-3.5v26.9L8.8,16H0v0.8 l40.9,28.1h-7.7L0,22.1v3.8l27.5,19H0v4.8h51.3V16z M67.3,44.9L109.4,16h-5.1L65.1,42.9V16h-3.4v33.7H112v-4.8H85.4L112,26.6v-7 L75,44.9H67.3z" data-v-c45141d3></path><path fill="#1A237B" d="M65.1,42.9V16h39.2L65.1,42.9z M47.8,16h-39l39,26.9V16z M112,44.9V26.6L85.4,44.9H112z M112,86.8V68.7H85.4 L112,86.8z M11,96h36.8V70.7L11,96z M65.1,96h37l-37-25.3V96z M0,68.7v19l27.5-19H0z M0,25.9v19h27.5L0,25.9z" data-v-c45141d3></path><path fill="#BD0034" d="M112,16v3.6L75,44.9h-7.7L109.4,16H112z M73.2,68.7L112,95.2v-5.3L81,68.7H73.2z M40.9,44.9L0,16.8v5.3 l33.2,22.8C33.2,44.9,40.9,44.9,40.9,44.9z M39.1,68.7L0,95.5V96h7.1l39.8-27.3H39.1z M61.7,16H51.3v33.7H0v14.2h51.3V96h10.4V63.9 H112V49.7H61.7V16z" data-v-c45141d3></path></svg></span>`);
        } else if (locale2.code === "pt") {
          _push(`<span class="flag-icon" data-v-c45141d3><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112" width="20" height="15" data-v-c45141d3><rect x="39.2" y="16" fill="#EA0020" width="72.8" height="80" data-v-c45141d3></rect><rect y="16" fill="#2A680B" width="39.2" height="80" data-v-c45141d3></rect><path fill="#FFD652" d="M39,36c-9.9,0-18,8.3-18,18.5C21,64.7,29.1,73,39,73c9.9,0,18-8.3,18-18.5C57,44.3,48.9,36,39,36z" data-v-c45141d3></path><path fill="#FFFFFF" d="M31.6,57.3c0,2.1,0.8,4,2.2,5.4C35.1,64.1,37,65,39,65c2,0,3.9-0.9,5.2-2.3c1.3-1.4,2.2-3.3,2.2-5.5l0,0V47 l-14.8,0V57.3L31.6,57.3z" data-v-c45141d3></path><path fill="#EA0020" d="M28.2,58L28.2,58c0,3.1,1.2,5.9,3.2,7.9c2,2,4.7,3.3,7.6,3.3c3,0,5.6-1.3,7.6-3.3c2-2,3.2-4.8,3.2-7.9l0,0 V42.8H28.2L28.2,58L28.2,58z M45.4,47.3V57l0,1l0,0c0,0.3,0,0.6,0,0.8c-0.2,1.5-0.8,2.9-1.8,3.9c-1.2,1.2-2.8,2-4.5,2 c-1.8,0-3.3-0.8-4.5-2c-1.2-1.2-1.9-3-1.9-4.7V47.3L45.4,47.3L45.4,47.3z" data-v-c45141d3></path><path fill="#1A0095" d="M37.6,55.4l0-2.1l2.8,0v2.1c0,0.4-0.2,0.8-0.4,1.1c-0.3,0.3-0.6,0.5-1,0.5c-0.4,0-0.7-0.2-1-0.5 C37.7,56.3,37.6,55.9,37.6,55.4L37.6,55.4L37.6,55.4z M37.6,60.6L37.6,60.6c0,0.4,0.2,0.8,0.4,1.1c0.2,0.3,0.6,0.5,1,0.5 c0.4,0,0.7-0.2,1-0.5c0.3-0.3,0.4-0.7,0.4-1.1v-2.1l-2.8,0V60.6L37.6,60.6z M33.7,55.4L33.7,55.4c0,0.4,0.2,0.8,0.4,1.1 c0.3,0.3,0.6,0.5,1,0.5c0.4,0,0.7-0.2,1-0.5c0.3-0.3,0.4-0.7,0.4-1.1v-2.1l-2.8,0L33.7,55.4L33.7,55.4z M41.5,55.4L41.5,55.4 c0,0.4,0.2,0.8,0.4,1.1c0.3,0.3,0.6,0.5,1,0.5c0.4,0,0.7-0.2,1-0.5c0.3-0.3,0.4-0.7,0.4-1.1v-2.1h-2.8L41.5,55.4L41.5,55.4z M37.6,50.3L37.6,50.3c0,0.4,0.2,0.8,0.4,1.1c0.3,0.3,0.6,0.5,1,0.5c0.4,0,0.7-0.2,1-0.5c0.3-0.3,0.4-0.7,0.4-1.1v-2.1h-2.8V50.3 L37.6,50.3z" data-v-c45141d3></path></svg></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(locale2.code.toUpperCase())}</button>`);
      });
      _push(`<!--]--></div></div></div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-c45141d3"]]), { __name: "Header" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, navigation } = useSiteData();
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_2;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "site-footer" }, _attrs))} data-v-c46158b8><div class="footer-container" data-v-c46158b8><div class="footer-section" data-v-c46158b8>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: unref(site).logo,
        alt: unref(site).name,
        width: "120",
        height: "48",
        class: "footer-logo"
      }, null, _parent));
      _push(`<p class="tagline" data-v-c46158b8>${ssrInterpolate(unref(site).tagline)}</p></div><div class="footer-section" data-v-c46158b8><h3 data-v-c46158b8>Navigation</h3><ul data-v-c46158b8><!--[-->`);
      ssrRenderList(unref(navigation), (item) => {
        _push(`<li data-v-c46158b8>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(localePath)(item.path)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(`nav.${item.id}`))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(`nav.${item.id}`)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="footer-section" data-v-c46158b8><h3 data-v-c46158b8>Contact</h3><p data-v-c46158b8>`);
      _push(ssrRenderComponent(_component_Icon, { name: "mdi:email" }, null, _parent));
      _push(`<a${ssrRenderAttr("href", `mailto:${unref(site).contact.email}`)} data-v-c46158b8>${ssrInterpolate(unref(site).contact.email)}</a></p><p data-v-c46158b8>`);
      _push(ssrRenderComponent(_component_Icon, { name: "mdi:phone" }, null, _parent));
      _push(`<a${ssrRenderAttr("href", `tel:${unref(site).contact.phone}`)} data-v-c46158b8>${ssrInterpolate(unref(site).contact.phone)}</a></p></div><div class="footer-section" data-v-c46158b8><h3 data-v-c46158b8>Suivez-nous</h3><div class="social-links" data-v-c46158b8><a href="#" target="_blank" rel="noopener noreferrer" data-v-c46158b8>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:linkedin",
        size: "24"
      }, null, _parent));
      _push(`</a><a href="#" target="_blank" rel="noopener noreferrer" data-v-c46158b8>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:twitter",
        size: "24"
      }, null, _parent));
      _push(`</a><a href="#" target="_blank" rel="noopener noreferrer" data-v-c46158b8>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:facebook",
        size: "24"
      }, null, _parent));
      _push(`</a></div></div></div><div class="footer-bottom" data-v-c46158b8><p data-v-c46158b8>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ${ssrInterpolate(unref(site).name)}. Tous droits réservés.</p></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-c46158b8"]]), { __name: "Footer" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-layout" }, _attrs))} data-v-c64953e8>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main class="main-content" data-v-c64953e8>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c64953e8"]]);

export { _default as default };
//# sourceMappingURL=default-xtR8zMYr.mjs.map
