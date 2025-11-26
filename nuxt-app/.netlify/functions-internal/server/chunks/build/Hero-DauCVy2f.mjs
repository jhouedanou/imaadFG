import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {},
    backgroundImage: {}
  },
  setup(__props) {
    const props = __props;
    const backgroundStyle = computed(() => {
      if (props.backgroundImage) {
        return {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        };
      }
      return {
        background: "linear-gradient(135deg, #2c5282 0%, #1a365d 100%)"
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "hero-section",
        style: unref(backgroundStyle)
      }, _attrs))} data-v-6e9b7ec5><div class="hero-overlay" data-v-6e9b7ec5></div><div class="hero-content" data-v-6e9b7ec5><h1 class="hero-title" data-v-6e9b7ec5>${ssrInterpolate(__props.title)}</h1>`);
      if (__props.subtitle) {
        _push(`<p class="hero-subtitle" data-v-6e9b7ec5>${ssrInterpolate(__props.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "cta", {}, null, _push, _parent);
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-6e9b7ec5"]]), { __name: "Hero" });

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Hero-DauCVy2f.mjs.map
