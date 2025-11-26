<template>
  <div class="cms-container">
    <header class="cms-header">
      <div class="cms-header-content">
        <h1>IMAAD CMS - Administration</h1>
        <p>Gérez le contenu de votre site web</p>
      </div>
      <NuxtLink to="/" class="btn-back">← Retour au site</NuxtLink>
    </header>

    <div class="cms-layout">
      <!-- Sidebar -->
      <aside class="cms-sidebar">
        <nav class="cms-nav">
          <h3>Pages</h3>
          <ul>
            <li v-for="page in cmsPages" :key="page.id">
              <button
                :class="{ active: currentPage?.id === page.id }"
                @click="selectPage(page.id)"
                class="nav-link"
              >
                {{ page.title }}
                <span v-if="page.lastModified" class="last-modified">
                  {{ formatDate(page.lastModified) }}
                </span>
              </button>
            </li>
          </ul>
        </nav>

        <section class="cms-settings">
          <h3>Paramètres du site</h3>
          <button @click="showSiteSettings = !showSiteSettings" class="btn-settings">
            Informations du site
          </button>
        </section>
      </aside>

      <!-- Main Content -->
      <main class="cms-main">
        <!-- Save Message -->
        <transition name="fade">
          <div v-if="saveMessage" :class="['save-message', saveMessage.includes('succès') ? 'success' : 'error']">
            {{ saveMessage }}
          </div>
        </transition>

        <!-- Page Editor -->
        <div v-if="currentPage && !showSiteSettings" class="page-editor">
          <h2>{{ currentPage.title }}</h2>
          <p class="page-description">{{ currentPage.description }}</p>

          <!-- Hero Section -->
          <section class="editor-section" v-if="currentPage.content?.hero">
            <h3>Section Héro</h3>
            <div class="form-group">
              <label>Titre:</label>
              <input
                v-model="currentPage.content.hero.title"
                type="text"
                class="form-input"
                placeholder="Titre principal"
              />
            </div>
            <div class="form-group">
              <label>Sous-titre:</label>
              <input
                v-model="currentPage.content.hero.subtitle"
                type="text"
                class="form-input"
                placeholder="Sous-titre"
              />
            </div>
            <div class="form-group">
              <label>Image de fond:</label>
              <input
                v-model="currentPage.content.hero.backgroundImage"
                type="text"
                class="form-input"
                placeholder="/assets/images/..."
              />
            </div>
          </section>

          <!-- Presentation Section -->
          <section class="editor-section" v-if="currentPage.content?.presentation">
            <h3>Présentation</h3>
            <div class="form-group">
              <label>Titre:</label>
              <input
                v-model="currentPage.content.presentation.title"
                type="text"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Description:</label>
              <textarea
                v-model="currentPage.content.presentation.description"
                class="form-textarea"
                rows="4"
              ></textarea>
            </div>
            <div class="form-group">
              <label>Objectif:</label>
              <textarea
                v-model="currentPage.content.presentation.objectif"
                class="form-textarea"
                rows="4"
              ></textarea>
            </div>
          </section>

          <!-- Valeurs Section -->
          <section class="editor-section" v-if="currentPage.content?.valeurs">
            <h3>Nos valeurs</h3>
            <div class="form-group">
              <label>Titre:</label>
              <input
                v-model="currentPage.content.valeurs.title"
                type="text"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Introduction:</label>
              <textarea
                v-model="currentPage.content.valeurs.intro"
                class="form-textarea"
                rows="3"
              ></textarea>
            </div>
            <div class="form-group">
              <label>Valeurs (une par ligne):</label>
              <textarea
                :value="currentPage.content.valeurs.items?.join('\n')"
                @input="updateValeurs"
                class="form-textarea"
                rows="6"
              ></textarea>
            </div>
          </section>

          <!-- Impact Section -->
          <section class="editor-section" v-if="currentPage.content?.impact">
            <h3>Impact</h3>
            <div class="form-group">
              <label>Titre:</label>
              <input
                v-model="currentPage.content.impact.title"
                type="text"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Sous-titre:</label>
              <input
                v-model="currentPage.content.impact.subtitle"
                type="text"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Secteurs (une par ligne):</label>
              <textarea
                :value="currentPage.content.impact.secteurs?.join('\n')"
                @input="updateSecteurs"
                class="form-textarea"
                rows="6"
              ></textarea>
            </div>
          </section>

          <!-- Save Button -->
          <div class="editor-actions">
            <button
              @click="savePage"
              :disabled="isSaving"
              class="btn-save"
            >
              <span v-if="isSaving">Sauvegarde en cours...</span>
              <span v-else>Sauvegarder les modifications</span>
            </button>
          </div>
        </div>

        <!-- Site Settings -->
        <div v-if="showSiteSettings" class="site-settings-editor">
          <h2>Paramètres du site</h2>

          <section class="editor-section">
            <h3>Informations générales</h3>
            <div class="form-group">
              <label>Nom du site:</label>
              <input
                v-model="siteInfo.name"
                type="text"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Logo (chemin):</label>
              <input
                v-model="siteInfo.logo"
                type="text"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Slogan/Tagline:</label>
              <input
                v-model="siteInfo.tagline"
                type="text"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Site web:</label>
              <input
                v-model="siteInfo.website"
                type="text"
                class="form-input"
              />
            </div>
          </section>

          <section class="editor-section">
            <h3>Contact</h3>
            <div class="form-group">
              <label>Email:</label>
              <input
                v-model="siteInfo.contact.email"
                type="email"
                class="form-input"
              />
            </div>
            <div class="form-group">
              <label>Téléphone:</label>
              <input
                v-model="siteInfo.contact.phone"
                type="tel"
                class="form-input"
              />
            </div>
          </section>

          <div class="editor-actions">
            <button
              @click="saveSiteInfo"
              :disabled="isSavingSite"
              class="btn-save"
            >
              <span v-if="isSavingSite">Sauvegarde en cours...</span>
              <span v-else>Sauvegarder les paramètres</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCMS } from '~/composables/useCMS'
import { useSiteContent } from '~/composables/useSiteContent'

const { pages: cmsPages, currentPage, saveMessage, isSaving, loadPages, selectPage, savePage, updateField } = useCMS()
const { siteContent, loadContent, updateSiteInfo } = useSiteContent()

const showSiteSettings = ref(false)
const isSavingSite = ref(false)
const siteInfo = ref<any>({
  name: '',
  logo: '',
  tagline: '',
  website: '',
  contact: {
    email: '',
    phone: ''
  }
})

onMounted(async () => {
  await loadPages()
  const content = await loadContent()
  if (content?.site) {
    siteInfo.value = content.site
  }
  // Select first page by default
  if (cmsPages.value.length > 0) {
    selectPage(cmsPages.value[0].id)
  }
})

const saveSiteInfo = async () => {
  isSavingSite.value = true
  const success = await updateSiteInfo(siteInfo.value)
  if (success) {
    saveMessage.value = 'Paramètres sauvegardés avec succès!'
  } else {
    saveMessage.value = 'Erreur lors de la sauvegarde'
  }
  isSavingSite.value = false
}

const updateValeurs = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement
  if (currentPage.value?.content?.valeurs) {
    currentPage.value.content.valeurs.items = textarea.value.split('\n').filter(v => v.trim())
  }
}

const updateSecteurs = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement
  if (currentPage.value?.content?.impact) {
    currentPage.value.content.impact.secteurs = textarea.value.split('\n').filter(s => s.trim())
  }
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
.cms-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.cms-header {
  background: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.cms-header-content h1 {
  margin: 0;
  font-size: 1.8rem;
}

.cms-header-content p {
  margin: 0.5rem 0 0 0;
  opacity: 0.9;
}

.btn-back {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-back:hover {
  background: rgba(255, 255, 255, 0.3);
}

.cms-layout {
  display: flex;
  height: calc(100vh - 100px);
}

.cms-sidebar {
  width: 250px;
  background: white;
  padding: 1.5rem;
  overflow-y: auto;
  border-right: 1px solid #e0e0e0;
}

.cms-nav h3,
.cms-settings h3 {
  margin-top: 0;
  color: #333;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cms-nav ul {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.nav-link {
  display: block;
  width: 100%;
  padding: 0.75rem;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 0.5rem;
  text-align: left;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.nav-link:hover {
  background: #f5f5f5;
  border-color: #667eea;
}

.nav-link.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.last-modified {
  display: block;
  font-size: 0.75rem;
  opacity: 0.7;
  margin-top: 0.25rem;
}

.nav-link.active .last-modified {
  opacity: 0.9;
}

.btn-settings {
  width: 100%;
  padding: 0.75rem;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.btn-settings:hover {
  background: #efefef;
  border-color: #667eea;
}

.cms-main {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  background: #f9f9f9;
}

.page-editor,
.site-settings-editor {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.page-editor h2,
.site-settings-editor h2 {
  margin-top: 0;
  color: #333;
  border-bottom: 2px solid #667eea;
  padding-bottom: 1rem;
}

.page-description {
  color: #666;
  margin-bottom: 2rem;
}

.editor-section {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
}

.editor-section:last-of-type {
  border-bottom: none;
}

.editor-section h3 {
  margin-top: 0;
  color: #667eea;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.95rem;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
}

.editor-actions {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.btn-save {
  flex: 1;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-save:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn-save:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.save-message {
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-weight: 500;
}

.save-message.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.save-message.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .cms-layout {
    flex-direction: column;
    height: auto;
  }

  .cms-sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
  }

  .cms-main {
    padding: 1rem;
  }

  .page-editor,
  .site-settings-editor {
    padding: 1rem;
  }
}
</style>
