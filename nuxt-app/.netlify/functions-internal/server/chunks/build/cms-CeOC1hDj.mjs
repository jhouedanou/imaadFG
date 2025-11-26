import { _ as __nuxt_component_0 } from './nuxt-link-kHvL4Whw.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const pages = ref([
  {
    id: "accueil",
    title: "Accueil (Home)",
    description: "Page d'accueil principale",
    content: {}
  },
  {
    id: "nos-activites",
    title: "Nos Activités",
    description: "Page des services et activités",
    content: {}
  },
  {
    id: "notre-equipe",
    title: "Notre Équipe",
    description: "Page de présentation de l'équipe",
    content: {}
  },
  {
    id: "contact",
    title: "Contact",
    description: "Page de contact",
    content: {}
  }
]);
const currentPage = ref(null);
const isSaving = ref(false);
const saveMessage = ref(null);
const useCMS = () => {
  const loadPages = async () => {
    try {
      const response = await fetch("/api/cms/content");
      if (response.ok) {
        const { data } = await response.json();
        pages.value = pages.value.map((page) => ({
          ...page,
          content: data.pages[page.id] || {},
          lastModified: (/* @__PURE__ */ new Date()).toISOString()
        }));
      }
    } catch (error2) {
      console.error("Error loading CMS pages:", error2);
    }
  };
  const selectPage = (pageId) => {
    currentPage.value = pages.value.find((p) => p.id === pageId) || null;
  };
  const savePage = async () => {
    if (!currentPage.value) return false;
    isSaving.value = true;
    saveMessage.value = null;
    try {
      const response = await fetch("/api/cms/pages", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          pageName: currentPage.value.id,
          data: currentPage.value.content
        })
      });
      if (response.ok) {
        currentPage.value.lastModified = (/* @__PURE__ */ new Date()).toISOString();
        saveMessage.value = "Page sauvegardée avec succès!";
        return true;
      } else {
        saveMessage.value = "Erreur lors de la sauvegarde";
        return false;
      }
    } catch (error2) {
      console.error("Error saving page:", error2);
      saveMessage.value = "Erreur: " + (error2 instanceof Error ? error2.message : "Unknown error");
      return false;
    } finally {
      isSaving.value = false;
    }
  };
  const updateField = (path, value) => {
    if (!currentPage.value) return;
    const keys = path.split(".");
    let obj = currentPage.value.content;
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      if (!(key in obj)) {
        obj[key] = {};
      }
      obj = obj[key];
    }
    obj[keys[keys.length - 1]] = value;
  };
  const getField = (path) => {
    if (!currentPage.value) return null;
    const keys = path.split(".");
    let obj = currentPage.value.content;
    for (const key of keys) {
      if (key in obj) {
        obj = obj[key];
      } else {
        return null;
      }
    }
    return obj;
  };
  return {
    pages,
    currentPage,
    isSaving,
    saveMessage,
    loadPages,
    selectPage,
    savePage,
    updateField,
    getField
  };
};
const siteContent = ref(null);
const isLoading = ref(false);
const error = ref(null);
const useSiteContent = () => {
  const loadContent = async () => {
    if (siteContent.value) {
      return siteContent.value;
    }
    isLoading.value = true;
    error.value = null;
    try {
      const response = await fetch("/config/site-content.json");
      if (!response.ok) {
        throw new Error("Failed to load site content");
      }
      siteContent.value = await response.json();
      return siteContent.value;
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Unknown error";
      console.error("Error loading site content:", error.value);
      return null;
    } finally {
      isLoading.value = false;
    }
  };
  const getPageContent = computed(() => {
    return (pageName) => {
      if (!siteContent.value) return null;
      return siteContent.value.pages[pageName] || null;
    };
  });
  const getSiteInfo = computed(() => {
    return siteContent.value?.site || null;
  });
  const getNavigation = computed(() => {
    return siteContent.value?.navigation || [];
  });
  const updatePageContent = async (pageName, pageData) => {
    if (!siteContent.value) return false;
    try {
      siteContent.value.pages[pageName] = {
        ...siteContent.value.pages[pageName],
        ...pageData
      };
      const response = await fetch("/api/cms/pages", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          pageName,
          data: siteContent.value.pages[pageName]
        })
      });
      return response.ok;
    } catch (err) {
      console.error("Error updating page content:", err);
      return false;
    }
  };
  const updateSiteInfo = async (siteInfo) => {
    if (!siteContent.value) return false;
    try {
      siteContent.value.site = {
        ...siteContent.value.site,
        ...siteInfo
      };
      const response = await fetch("/api/cms/site-info", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(siteContent.value.site)
      });
      return response.ok;
    } catch (err) {
      console.error("Error updating site info:", err);
      return false;
    }
  };
  return {
    siteContent,
    isLoading,
    error,
    loadContent,
    getPageContent,
    getSiteInfo,
    getNavigation,
    updatePageContent,
    updateSiteInfo
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cms",
  __ssrInlineRender: true,
  setup(__props) {
    const { pages: cmsPages, currentPage: currentPage2, saveMessage: saveMessage2, isSaving: isSaving2 } = useCMS();
    useSiteContent();
    const showSiteSettings = ref(false);
    const isSavingSite = ref(false);
    const siteInfo = ref({
      name: "",
      logo: "",
      tagline: "",
      website: "",
      contact: {
        email: "",
        phone: ""
      }
    });
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cms-container" }, _attrs))} data-v-43881afb><header class="cms-header" data-v-43881afb><div class="cms-header-content" data-v-43881afb><h1 data-v-43881afb>IMAAD CMS - Administration</h1><p data-v-43881afb>Gérez le contenu de votre site web</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn-back"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`← Retour au site`);
          } else {
            return [
              createTextVNode("← Retour au site")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header><div class="cms-layout" data-v-43881afb><aside class="cms-sidebar" data-v-43881afb><nav class="cms-nav" data-v-43881afb><h3 data-v-43881afb>Pages</h3><ul data-v-43881afb><!--[-->`);
      ssrRenderList(unref(cmsPages), (page) => {
        _push(`<li data-v-43881afb><button class="${ssrRenderClass([{ active: unref(currentPage2)?.id === page.id }, "nav-link"])}" data-v-43881afb>${ssrInterpolate(page.title)} `);
        if (page.lastModified) {
          _push(`<span class="last-modified" data-v-43881afb>${ssrInterpolate(formatDate(page.lastModified))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button></li>`);
      });
      _push(`<!--]--></ul></nav><section class="cms-settings" data-v-43881afb><h3 data-v-43881afb>Paramètres du site</h3><button class="btn-settings" data-v-43881afb> Informations du site </button></section></aside><main class="cms-main" data-v-43881afb>`);
      if (unref(saveMessage2)) {
        _push(`<div class="${ssrRenderClass(["save-message", unref(saveMessage2).includes("succès") ? "success" : "error"])}" data-v-43881afb>${ssrInterpolate(unref(saveMessage2))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(currentPage2) && !showSiteSettings.value) {
        _push(`<div class="page-editor" data-v-43881afb><h2 data-v-43881afb>${ssrInterpolate(unref(currentPage2).title)}</h2><p class="page-description" data-v-43881afb>${ssrInterpolate(unref(currentPage2).description)}</p>`);
        if (unref(currentPage2).content?.hero) {
          _push(`<section class="editor-section" data-v-43881afb><h3 data-v-43881afb>Section Héro</h3><div class="form-group" data-v-43881afb><label data-v-43881afb>Titre:</label><input${ssrRenderAttr("value", unref(currentPage2).content.hero.title)} type="text" class="form-input" placeholder="Titre principal" data-v-43881afb></div><div class="form-group" data-v-43881afb><label data-v-43881afb>Sous-titre:</label><input${ssrRenderAttr("value", unref(currentPage2).content.hero.subtitle)} type="text" class="form-input" placeholder="Sous-titre" data-v-43881afb></div><div class="form-group" data-v-43881afb><label data-v-43881afb>Image de fond:</label><input${ssrRenderAttr("value", unref(currentPage2).content.hero.backgroundImage)} type="text" class="form-input" placeholder="/assets/images/..." data-v-43881afb></div></section>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(currentPage2).content?.presentation) {
          _push(`<section class="editor-section" data-v-43881afb><h3 data-v-43881afb>Présentation</h3><div class="form-group" data-v-43881afb><label data-v-43881afb>Titre:</label><input${ssrRenderAttr("value", unref(currentPage2).content.presentation.title)} type="text" class="form-input" data-v-43881afb></div><div class="form-group" data-v-43881afb><label data-v-43881afb>Description:</label><textarea class="form-textarea" rows="4" data-v-43881afb>${ssrInterpolate(unref(currentPage2).content.presentation.description)}</textarea></div><div class="form-group" data-v-43881afb><label data-v-43881afb>Objectif:</label><textarea class="form-textarea" rows="4" data-v-43881afb>${ssrInterpolate(unref(currentPage2).content.presentation.objectif)}</textarea></div></section>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(currentPage2).content?.valeurs) {
          _push(`<section class="editor-section" data-v-43881afb><h3 data-v-43881afb>Nos valeurs</h3><div class="form-group" data-v-43881afb><label data-v-43881afb>Titre:</label><input${ssrRenderAttr("value", unref(currentPage2).content.valeurs.title)} type="text" class="form-input" data-v-43881afb></div><div class="form-group" data-v-43881afb><label data-v-43881afb>Introduction:</label><textarea class="form-textarea" rows="3" data-v-43881afb>${ssrInterpolate(unref(currentPage2).content.valeurs.intro)}</textarea></div><div class="form-group" data-v-43881afb><label data-v-43881afb>Valeurs (une par ligne):</label><textarea class="form-textarea" rows="6" data-v-43881afb>${ssrInterpolate(unref(currentPage2).content.valeurs.items?.join("\n"))}</textarea></div></section>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(currentPage2).content?.impact) {
          _push(`<section class="editor-section" data-v-43881afb><h3 data-v-43881afb>Impact</h3><div class="form-group" data-v-43881afb><label data-v-43881afb>Titre:</label><input${ssrRenderAttr("value", unref(currentPage2).content.impact.title)} type="text" class="form-input" data-v-43881afb></div><div class="form-group" data-v-43881afb><label data-v-43881afb>Sous-titre:</label><input${ssrRenderAttr("value", unref(currentPage2).content.impact.subtitle)} type="text" class="form-input" data-v-43881afb></div><div class="form-group" data-v-43881afb><label data-v-43881afb>Secteurs (une par ligne):</label><textarea class="form-textarea" rows="6" data-v-43881afb>${ssrInterpolate(unref(currentPage2).content.impact.secteurs?.join("\n"))}</textarea></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="editor-actions" data-v-43881afb><button${ssrIncludeBooleanAttr(unref(isSaving2)) ? " disabled" : ""} class="btn-save" data-v-43881afb>`);
        if (unref(isSaving2)) {
          _push(`<span data-v-43881afb>Sauvegarde en cours...</span>`);
        } else {
          _push(`<span data-v-43881afb>Sauvegarder les modifications</span>`);
        }
        _push(`</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showSiteSettings.value) {
        _push(`<div class="site-settings-editor" data-v-43881afb><h2 data-v-43881afb>Paramètres du site</h2><section class="editor-section" data-v-43881afb><h3 data-v-43881afb>Informations générales</h3><div class="form-group" data-v-43881afb><label data-v-43881afb>Nom du site:</label><input${ssrRenderAttr("value", siteInfo.value.name)} type="text" class="form-input" data-v-43881afb></div><div class="form-group" data-v-43881afb><label data-v-43881afb>Logo (chemin):</label><input${ssrRenderAttr("value", siteInfo.value.logo)} type="text" class="form-input" data-v-43881afb></div><div class="form-group" data-v-43881afb><label data-v-43881afb>Slogan/Tagline:</label><input${ssrRenderAttr("value", siteInfo.value.tagline)} type="text" class="form-input" data-v-43881afb></div><div class="form-group" data-v-43881afb><label data-v-43881afb>Site web:</label><input${ssrRenderAttr("value", siteInfo.value.website)} type="text" class="form-input" data-v-43881afb></div></section><section class="editor-section" data-v-43881afb><h3 data-v-43881afb>Contact</h3><div class="form-group" data-v-43881afb><label data-v-43881afb>Email:</label><input${ssrRenderAttr("value", siteInfo.value.contact.email)} type="email" class="form-input" data-v-43881afb></div><div class="form-group" data-v-43881afb><label data-v-43881afb>Téléphone:</label><input${ssrRenderAttr("value", siteInfo.value.contact.phone)} type="tel" class="form-input" data-v-43881afb></div></section><div class="editor-actions" data-v-43881afb><button${ssrIncludeBooleanAttr(isSavingSite.value) ? " disabled" : ""} class="btn-save" data-v-43881afb>`);
        if (isSavingSite.value) {
          _push(`<span data-v-43881afb>Sauvegarde en cours...</span>`);
        } else {
          _push(`<span data-v-43881afb>Sauvegarder les paramètres</span>`);
        }
        _push(`</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/cms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cms = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43881afb"]]);

export { cms as default };
//# sourceMappingURL=cms-CeOC1hDj.mjs.map
