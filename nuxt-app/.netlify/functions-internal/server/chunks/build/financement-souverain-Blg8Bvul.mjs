import { _ as __nuxt_component_0 } from './Hero-DauCVy2f.mjs';
import { _ as __nuxt_component_0$1 } from './NuxtImg-KUY06GHK.mjs';
import { _ as __nuxt_component_2 } from './index-BlmFujrj.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-kHvL4Whw.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, u as useHead } from './server.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "financement-souverain",
  __ssrInlineRender: true,
  setup(__props) {
    const secteurs = [
      { name: "Éducation", icon: "mdi:school" },
      { name: "Agriculture", icon: "mdi:sprout" },
      { name: "Santé", icon: "mdi:hospital-building" },
      { name: "Logement", icon: "mdi:home-city" },
      { name: "Énergie", icon: "mdi:lightning-bolt" }
    ];
    const projets = [
      {
        intitule: "Travaux de réhabilitation de la route de la Côtière - Section Fresco-Sassandra-San Pedro-Grand Bereby",
        client: "Ministère de l'Équipement & l'Entretien Routier - Côte d'Ivoire",
        montant: "€250.000.000 (Phase 1: €150.000.000, Phase 2: €100.000.000)",
        statut: "Décaissement 2e semestre 2023"
      },
      {
        intitule: "Construction de 56 collèges de base 4",
        client: "Ministère de l'Éducation Nationale - Côte d'Ivoire",
        montant: "€137.000.000",
        statut: "Closé en 2025"
      },
      {
        intitule: "Adduction en eau potable du Grand-Abidjan",
        client: "Office National de l'Eau Potable - Côte d'Ivoire",
        montant: "€278.000.000",
        statut: "Closing en 2026"
      }
    ];
    useHead({
      title: "Financement Souverain - IMAAD Financial Group",
      meta: [
        {
          name: "description",
          content: "IMAAD Financial Group accompagne les États dans la mobilisation de financements pour des projets d'infrastructure à fort impact."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_2;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-financement-souverain" }, _attrs))} data-v-9ef4a4ca>`);
      _push(ssrRenderComponent(_component_Hero, {
        title: "Financement Souverain",
        subtitle: "Project & Trade Finance"
      }, null, _parent));
      _push(`<section class="section intro-section" data-v-9ef4a4ca><div class="container" data-v-9ef4a4ca><div class="grid grid-2 intro-grid" data-v-9ef4a4ca><div class="intro-image" data-v-9ef4a4ca>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/images/financement-souverain.jpg",
        alt: "Financement souverain",
        class: "rounded-image"
      }, null, _parent));
      _push(`</div><div class="intro-content" data-v-9ef4a4ca><h2 data-v-9ef4a4ca>Financement souverain</h2><h3 class="subtitle" data-v-9ef4a4ca>(Project &amp; Trade Finance)</h3><p data-v-9ef4a4ca><strong data-v-9ef4a4ca>Imaad Capital Partners (ICP)</strong> a pour mission d&#39;accompagner, dans leurs besoins de structuration et de financement, toute entité publique ou privée porteuse de projets d&#39;envergure nationale ou internationale, notamment des projets à fort impact social, environnemental et économique. </p><p data-v-9ef4a4ca> À ce jour notre portefeuille de projets s&#39;élève à plus de <strong data-v-9ef4a4ca>£1,5 Milliards</strong> dans des secteurs tels que l&#39;éducation, l&#39;adduction en eau potable, logements, routes, hôpitaux en Côte d&#39;Ivoire et en République de Guinée (Conakry). </p></div></div></div></section><section class="section description-section" data-v-9ef4a4ca><div class="container" data-v-9ef4a4ca><h2 class="section-title" data-v-9ef4a4ca>Description</h2><h3 class="section-subtitle" data-v-9ef4a4ca> Conseil et intermédiation pour la levée de ressources financières requises pour le financement des projets prioritaires des États </h3><div class="grid grid-3 features-grid" data-v-9ef4a4ca><div class="feature-card card" data-v-9ef4a4ca><div class="feature-icon" data-v-9ef4a4ca>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:account-group",
        size: "48"
      }, null, _parent));
      _push(`</div><h4 data-v-9ef4a4ca>Typologie de clients</h4><p data-v-9ef4a4ca>État via ministère des finances, Entreprises adjudicatrices de travaux publics</p></div><div class="feature-card card" data-v-9ef4a4ca><div class="feature-icon" data-v-9ef4a4ca>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:calendar-clock",
        size: "48"
      }, null, _parent));
      _push(`</div><h4 data-v-9ef4a4ca>Maturité moyenne des financements</h4><p data-v-9ef4a4ca>Entre 5 et 20 ans, incluant 2 à 4 ans de période de grâce</p></div><div class="feature-card card" data-v-9ef4a4ca><div class="feature-icon" data-v-9ef4a4ca>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:percent",
        size: "48"
      }, null, _parent));
      _push(`</div><h4 data-v-9ef4a4ca>Taux d&#39;intérêt</h4><p data-v-9ef4a4ca>Entre 0,65% et 6,25% par an</p></div></div></div></section><section class="section secteurs-section" data-v-9ef4a4ca><div class="container" data-v-9ef4a4ca><h2 class="section-title" data-v-9ef4a4ca>Secteurs Clé</h2><div class="secteurs-grid" data-v-9ef4a4ca><!--[-->`);
      ssrRenderList(secteurs, (secteur) => {
        _push(`<div class="secteur-card card" data-v-9ef4a4ca>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: secteur.icon,
          size: "48",
          class: "secteur-icon"
        }, null, _parent));
        _push(`<h4 data-v-9ef4a4ca>${ssrInterpolate(secteur.name)}</h4></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section projets-section" data-v-9ef4a4ca><div class="container" data-v-9ef4a4ca><h2 class="section-title" data-v-9ef4a4ca>Projets en cours</h2><div class="projets-table" data-v-9ef4a4ca><div class="table-header" data-v-9ef4a4ca><div class="col-intitule" data-v-9ef4a4ca>Intitulé</div><div class="col-client" data-v-9ef4a4ca>Client</div><div class="col-montant" data-v-9ef4a4ca>Montant</div><div class="col-statut" data-v-9ef4a4ca>Statut</div></div><!--[-->`);
      ssrRenderList(projets, (projet) => {
        _push(`<div class="table-row" data-v-9ef4a4ca><div class="col-intitule" data-v-9ef4a4ca>${ssrInterpolate(projet.intitule)}</div><div class="col-client" data-v-9ef4a4ca>${ssrInterpolate(projet.client)}</div><div class="col-montant" data-v-9ef4a4ca>${ssrInterpolate(projet.montant)}</div><div class="col-statut" data-v-9ef4a4ca>${ssrInterpolate(projet.statut)}</div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section cta-section" data-v-9ef4a4ca><div class="container" data-v-9ef4a4ca><div class="cta-content" data-v-9ef4a4ca><h2 data-v-9ef4a4ca>Vous avez un projet d&#39;infrastructure ?</h2><p data-v-9ef4a4ca>Contactez-nous pour discuter de vos besoins en financement souverain</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Nous contacter `);
          } else {
            return [
              createTextVNode(" Nous contacter ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/financement-souverain.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const financementSouverain = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ef4a4ca"]]);

export { financementSouverain as default };
//# sourceMappingURL=financement-souverain-Blg8Bvul.mjs.map
