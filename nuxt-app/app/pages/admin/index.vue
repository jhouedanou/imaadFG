<template>
  <div class="min-h-screen bg-[#050b16]">
    <!-- Loading State -->
    <div v-if="isCheckingAuth" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <svg class="w-10 h-10 text-[#C9A227] animate-spin mx-auto mb-4" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="text-gray-400">Vérification de l'authentification...</p>
      </div>
    </div>

    <template v-else>
    <!-- Admin Header -->
    <header class="bg-[#0A192F] border-b border-gray-800 px-6 py-4 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-4">
          <NuxtLink to="/" class="text-gray-400 hover:text-white transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </NuxtLink>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-[#C9A227] rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-[#0A192F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <h1 class="text-white font-michroma text-lg">Administration</h1>
              <p class="text-gray-500 text-xs">IMAAD Financial Group</p>
            </div>
          </div>
        </div>
        
        <div class="flex items-center gap-4">
          <button 
            @click="saveAllChanges"
            :disabled="!hasChanges"
            class="px-4 py-2 bg-[#C9A227] text-[#0A192F] font-semibold rounded-lg hover:bg-[#d4af37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
            </svg>
            Enregistrer
          </button>
          
          <!-- Logout Button -->
          <button 
            @click="handleLogout"
            class="px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/20 transition-colors flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
            Déconnexion
          </button>
        </div>
      </div>
    </header>

    <div class="max-w-7xl mx-auto px-6 py-8">
      <!-- Navigation Tabs -->
      <div class="flex gap-2 mb-8 overflow-x-auto pb-2">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            'px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all',
            activeTab === tab.id 
              ? 'bg-[#C9A227] text-[#0A192F]' 
              : 'bg-[#0A192F] text-gray-400 hover:text-white border border-gray-800'
          ]"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Tab Content -->
      <div class="bg-[#0A192F] border border-gray-800 rounded-xl p-6">
        <!-- Site Settings -->
        <div v-if="activeTab === 'site'" class="space-y-6">
          <h2 class="text-2xl font-michroma text-white mb-6">Paramètres du Site</h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <AdminInput 
              v-model="siteData.site.name" 
              label="Nom du site" 
              @change="markChanged"
            />
            <AdminInput 
              v-model="siteData.site.tagline" 
              label="Slogan" 
              @change="markChanged"
            />
            <AdminInput 
              v-model="siteData.site.website" 
              label="Site web" 
              @change="markChanged"
            />
            <AdminInput 
              v-model="siteData.site.contact.email" 
              label="Email" 
              type="email"
              @change="markChanged"
            />
            <AdminInput 
              v-model="siteData.site.contact.phone" 
              label="Téléphone" 
              @change="markChanged"
            />
          </div>

          <div class="mt-8">
            <label class="block text-gray-300 text-sm font-medium mb-2">Logo du site</label>
            <AdminImageUpload 
              v-model="siteData.site.logo"
              :current-image="siteData.site.logo"
              @change="markChanged"
            />
          </div>
        </div>

        <!-- Homepage -->
        <div v-if="activeTab === 'accueil'" class="space-y-8">
          <h2 class="text-2xl font-michroma text-white mb-6">Page d'Accueil</h2>
          
          <!-- Hero Section -->
          <div class="bg-[#050b16] border border-gray-800 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-[#C9A227] mb-4">Section Hero</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <AdminInput 
                v-model="siteData.pages.accueil.hero.title" 
                label="Titre" 
                @change="markChanged"
              />
              <AdminInput 
                v-model="siteData.pages.accueil.hero.subtitle" 
                label="Sous-titre" 
                @change="markChanged"
              />
            </div>
            <div class="mt-4">
              <label class="block text-gray-300 text-sm font-medium mb-2">Image de fond</label>
              <AdminImageUpload 
                v-model="siteData.pages.accueil.hero.backgroundImage"
                :current-image="siteData.pages.accueil.hero.backgroundImage"
                @change="markChanged"
              />
            </div>
          </div>

          <!-- Presentation Section -->
          <div class="bg-[#050b16] border border-gray-800 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-[#C9A227] mb-4">Section Présentation</h3>
            <div class="space-y-4">
              <AdminInput 
                v-model="siteData.pages.accueil.presentation.title" 
                label="Titre" 
              @change="markChanged"
              />
              <AdminTextarea 
                v-model="siteData.pages.accueil.presentation.description" 
                label="Description" 
                :rows="4"
                @change="markChanged"
              />
              <AdminTextarea 
                v-model="siteData.pages.accueil.presentation.objectif" 
                label="Objectif" 
                :rows="3"
                @change="markChanged"
              />
              <AdminTagsInput 
                v-model="siteData.pages.accueil.presentation.keywords" 
                label="Mots-clés"
                @change="markChanged"
              />
            </div>
          </div>

          <!-- Impact Section -->
          <div class="bg-[#050b16] border border-gray-800 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-[#C9A227] mb-4">Section Impact</h3>
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <AdminInput 
                v-model="siteData.pages.accueil.impact.title" 
                label="Titre" 
                @change="markChanged"
              />
              <AdminInput 
                v-model="siteData.pages.accueil.impact.subtitle" 
                label="Sous-titre" 
                @change="markChanged"
              />
            </div>
            
            <h4 class="text-white font-medium mb-3">Statistiques</h4>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div v-for="(stat, index) in siteData.pages.accueil.impact.stats" :key="index" class="bg-[#0A192F] border border-gray-700 rounded-lg p-4">
                <AdminInput 
                  v-model="stat.value" 
                  label="Valeur" 
                  class="mb-2"
                  @change="markChanged"
                />
                <AdminInput 
                  v-model="stat.label" 
                  label="Label" 
                  @change="markChanged"
                />
              </div>
            </div>

            <AdminTagsInput 
              v-model="siteData.pages.accueil.impact.secteurs" 
              label="Secteurs"
              @change="markChanged"
            />
          </div>

          <!-- Values Section -->
          <div class="bg-[#050b16] border border-gray-800 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-[#C9A227] mb-4">Section Valeurs</h3>
            <AdminInput 
              v-model="siteData.pages.accueil.valeurs.title" 
              label="Titre" 
              class="mb-4"
              @change="markChanged"
            />
            <AdminTextarea 
              v-model="siteData.pages.accueil.valeurs.intro" 
              label="Introduction" 
              :rows="2"
              class="mb-4"
              @change="markChanged"
            />
            <AdminListEditor 
              v-model="siteData.pages.accueil.valeurs.items" 
              label="Valeurs"
              @change="markChanged"
            />
          </div>
        </div>

        <!-- Nos Activités -->
        <div v-if="activeTab === 'activites'" class="space-y-8">
          <h2 class="text-2xl font-michroma text-white mb-6">Page Nos Activités</h2>
          
          <div class="bg-[#050b16] border border-gray-800 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-[#C9A227] mb-4">Section Hero</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <AdminInput 
                v-model="siteData.pages['nos-activites'].hero.title" 
                label="Titre" 
                @change="markChanged"
              />
              <AdminInput 
                v-model="siteData.pages['nos-activites'].hero.subtitle" 
                label="Sous-titre" 
                @change="markChanged"
              />
            </div>
          </div>

          <div class="bg-[#050b16] border border-gray-800 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-[#C9A227] mb-4">Section Modèle</h3>
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <AdminInput 
                v-model="siteData.pages['nos-activites'].modele.title" 
                label="Titre" 
                @change="markChanged"
              />
              <AdminInput 
                v-model="siteData.pages['nos-activites'].modele.subtitle" 
                label="Sous-titre" 
                @change="markChanged"
              />
            </div>
            <AdminTextarea 
              v-model="siteData.pages['nos-activites'].modele.description" 
              label="Description" 
              :rows="3"
              @change="markChanged"
            />

            <h4 class="text-white font-medium mt-6 mb-4">Leviers</h4>
            <div class="space-y-4">
              <div 
                v-for="(levier, index) in siteData.pages['nos-activites'].modele.leviers" 
                :key="index" 
                class="bg-[#0A192F] border border-gray-700 rounded-lg p-4"
              >
                <div class="grid md:grid-cols-2 gap-4 mb-4">
                  <AdminInput 
                    v-model="levier.title" 
                    label="Titre" 
                    @change="markChanged"
                  />
                  <AdminInput 
                    v-model="levier.icon" 
                    label="URL Icône" 
                    @change="markChanged"
                  />
                </div>
                <AdminTextarea 
                  v-model="levier.description" 
                  label="Description" 
                  :rows="2"
                  @change="markChanged"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div v-if="activeTab === 'navigation'" class="space-y-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-michroma text-white">Navigation</h2>
            <button 
              @click="addNavItem"
              class="px-4 py-2 bg-[#C9A227]/20 text-[#C9A227] border border-[#C9A227]/30 rounded-lg hover:bg-[#C9A227]/30 transition-colors flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
              Ajouter
            </button>
          </div>

          <div class="space-y-4">
            <div 
              v-for="(item, index) in siteData.navigation" 
              :key="item.id"
              class="bg-[#050b16] border border-gray-800 rounded-lg p-4"
            >
              <div class="flex items-start gap-4">
                <div class="flex-1 grid md:grid-cols-3 gap-4">
                  <AdminInput 
                    v-model="item.label" 
                    label="Label" 
                    @change="markChanged"
                  />
                  <AdminInput 
                    v-model="item.path" 
                    label="Chemin" 
                    @change="markChanged"
                  />
                  <div class="flex items-center gap-4 pt-6">
                    <label class="flex items-center gap-2 text-gray-300 text-sm cursor-pointer">
                      <input 
                        type="checkbox" 
                        v-model="item.external"
                        @change="markChanged"
                        class="w-4 h-4 rounded border-gray-600 bg-[#0A192F] text-[#C9A227] focus:ring-[#C9A227]"
                      />
                      Lien externe
                    </label>
                  </div>
                </div>
                <button 
                  @click="removeNavItem(Number(index))"
                  class="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Images -->
        <div v-if="activeTab === 'images'" class="space-y-6">
          <h2 class="text-2xl font-michroma text-white mb-6">Galerie d'Images</h2>
          
          <div class="bg-[#050b16] border border-gray-800 rounded-lg p-6 mb-6">
            <h3 class="text-lg font-semibold text-[#C9A227] mb-4">Uploader une nouvelle image</h3>
            <AdminImageUpload 
              @uploaded="handleImageUploaded"
              show-url-output
            />
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div 
              v-for="image in availableImages" 
              :key="image"
              class="relative group aspect-square bg-[#0A192F] border border-gray-800 rounded-lg overflow-hidden"
            >
              <img 
                :src="image" 
                :alt="image"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button 
                  @click="copyImagePath(image)"
                  class="p-2 bg-[#C9A227] text-[#0A192F] rounded-lg hover:bg-[#d4af37] transition-colors"
                  title="Copier le chemin"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                  </svg>
                </button>
              </div>
              <div class="absolute bottom-0 left-0 right-0 bg-black/80 px-2 py-1 text-xs text-gray-300 truncate">
                {{ image.split('/').pop() }}
              </div>
            </div>
          </div>
        </div>

        <!-- JSON Editor -->
        <div v-if="activeTab === 'json'" class="space-y-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-michroma text-white">Éditeur JSON</h2>
            <div class="flex gap-2">
              <button 
                @click="formatJson"
                class="px-4 py-2 bg-[#0A192F] text-gray-300 border border-gray-700 rounded-lg hover:border-[#C9A227] transition-colors"
              >
                Formater
              </button>
              <button 
                @click="validateJson"
                class="px-4 py-2 bg-[#0A192F] text-gray-300 border border-gray-700 rounded-lg hover:border-[#C9A227] transition-colors"
              >
                Valider
              </button>
            </div>
          </div>
          
          <div class="relative">
            <textarea 
              v-model="jsonText"
              @input="markChanged"
              class="w-full h-[600px] bg-[#050b16] border border-gray-800 rounded-lg p-4 text-gray-300 font-mono text-sm resize-none focus:outline-none focus:border-[#C9A227]"
              spellcheck="false"
            ></textarea>
            <div v-if="jsonError" class="absolute bottom-4 left-4 right-4 bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg text-sm">
              {{ jsonError }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <Transition name="toast">
      <div 
        v-if="toast.show"
        :class="[
          'fixed bottom-6 right-6 px-6 py-4 rounded-lg shadow-xl z-50 flex items-center gap-3',
          toast.type === 'success' ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'
        ]"
      >
        <svg v-if="toast.type === 'success'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        {{ toast.message }}
      </div>
    </Transition>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import siteDataJson from '~/data/site-data.json'

// Auth check
const isCheckingAuth = ref(true)

onMounted(async () => {
  try {
    const { data } = await useFetch('/api/admin/verify')
    if (!data.value?.authenticated) {
      navigateTo('/admin/login')
      return
    }
  } catch {
    navigateTo('/admin/login')
    return
  }
  isCheckingAuth.value = false
})

async function handleLogout() {
  try {
    await $fetch('/api/admin/logout', { method: 'POST' })
    const token = useCookie('admin_token')
    token.value = null
    navigateTo('/admin/login')
  } catch (error) {
    console.error('Logout error:', error)
  }
}

definePageMeta({
  layout: 'admin'
})

useHead({
  title: 'Administration - IMAAD Financial Group'
})

const tabs = [
  { id: 'site', label: 'Site' },
  { id: 'accueil', label: 'Accueil' },
  { id: 'activites', label: 'Nos Activités' },
  { id: 'navigation', label: 'Navigation' },
  { id: 'images', label: 'Images' },
  { id: 'json', label: 'Éditeur JSON' }
]

const activeTab = ref('site')
const siteData = ref(JSON.parse(JSON.stringify(siteDataJson)))
const hasChanges = ref(false)
const jsonText = ref('')
const jsonError = ref('')
const availableImages = ref<string[]>([])

const toast = ref({
  show: false,
  message: '',
  type: 'success' as 'success' | 'error'
})

// Initialize JSON text
onMounted(() => {
  jsonText.value = JSON.stringify(siteData.value, null, 2)
  loadAvailableImages()
})

// Sync JSON text with siteData when switching to JSON tab
watch(activeTab, (newTab) => {
  if (newTab === 'json') {
    jsonText.value = JSON.stringify(siteData.value, null, 2)
  }
})

// Watch JSON text changes
watch(jsonText, (newText) => {
  if (activeTab.value === 'json') {
    try {
      const parsed = JSON.parse(newText)
      siteData.value = parsed
      jsonError.value = ''
    } catch (e: any) {
      jsonError.value = `Erreur JSON: ${e.message}`
    }
  }
})

function markChanged() {
  hasChanges.value = true
}

function showToast(message: string, type: 'success' | 'error' = 'success') {
  toast.value = { show: true, message, type }
  setTimeout(() => {
    toast.value.show = false
  }, 3000)
}

async function saveAllChanges() {
  try {
    // Call API to save data
    const response = await $fetch('/api/admin/save-data', {
      method: 'POST',
      body: siteData.value
    })
    
    hasChanges.value = false
    showToast('Modifications enregistrées avec succès!')
  } catch (error: any) {
    showToast(error.message || 'Erreur lors de la sauvegarde', 'error')
  }
}

async function loadAvailableImages() {
  try {
    const response = await $fetch<string[]>('/api/admin/images')
    availableImages.value = response
  } catch (error) {
    console.error('Error loading images:', error)
  }
}

function handleImageUploaded(url: string) {
  availableImages.value.unshift(url)
  showToast('Image uploadée avec succès!')
}

function copyImagePath(path: string) {
  navigator.clipboard.writeText(path)
  showToast('Chemin copié!')
}

function formatJson() {
  try {
    const parsed = JSON.parse(jsonText.value)
    jsonText.value = JSON.stringify(parsed, null, 2)
    jsonError.value = ''
  } catch (e: any) {
    jsonError.value = `Erreur de formatage: ${e.message}`
  }
}

function validateJson() {
  try {
    JSON.parse(jsonText.value)
    jsonError.value = ''
    showToast('JSON valide!')
  } catch (e: any) {
    jsonError.value = `JSON invalide: ${e.message}`
    showToast('JSON invalide', 'error')
  }
}

function addNavItem() {
  siteData.value.navigation.push({
    id: `nav-${Date.now()}`,
    label: 'Nouveau lien',
    path: '/',
    external: false
  })
  markChanged()
}

function removeNavItem(index: number) {
  siteData.value.navigation.splice(index, 1)
  markChanged()
}
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
