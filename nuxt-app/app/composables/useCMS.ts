import { ref, computed } from 'vue'

export interface CMSPage {
  id: string
  title: string
  description: string
  content: Record<string, any>
  lastModified?: string
}

const pages = ref<CMSPage[]>([
  {
    id: 'accueil',
    title: 'Accueil (Home)',
    description: 'Page d\'accueil principale',
    content: {}
  },
  {
    id: 'nos-activites',
    title: 'Nos Activités',
    description: 'Page des services et activités',
    content: {}
  },
  {
    id: 'notre-equipe',
    title: 'Notre Équipe',
    description: 'Page de présentation de l\'équipe',
    content: {}
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Page de contact',
    content: {}
  }
])

const currentPage = ref<CMSPage | null>(null)
const isSaving = ref(false)
const saveMessage = ref<string | null>(null)

export const useCMS = () => {
  const loadPages = async () => {
    try {
      const response = await fetch('/api/cms/content')
      if (response.ok) {
        const { data } = await response.json()

        // Load page data from config
        pages.value = pages.value.map(page => ({
          ...page,
          content: data.pages[page.id] || {},
          lastModified: new Date().toISOString()
        }))
      }
    } catch (error) {
      console.error('Error loading CMS pages:', error)
    }
  }

  const selectPage = (pageId: string) => {
    currentPage.value = pages.value.find(p => p.id === pageId) || null
  }

  const savePage = async () => {
    if (!currentPage.value) return false

    isSaving.value = true
    saveMessage.value = null

    try {
      const response = await fetch('/api/cms/pages', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          pageName: currentPage.value.id,
          data: currentPage.value.content
        })
      })

      if (response.ok) {
        currentPage.value.lastModified = new Date().toISOString()
        saveMessage.value = 'Page sauvegardée avec succès!'
        return true
      } else {
        saveMessage.value = 'Erreur lors de la sauvegarde'
        return false
      }
    } catch (error) {
      console.error('Error saving page:', error)
      saveMessage.value = 'Erreur: ' + (error instanceof Error ? error.message : 'Unknown error')
      return false
    } finally {
      isSaving.value = false
    }
  }

  const updateField = (path: string, value: any) => {
    if (!currentPage.value) return

    const keys = path.split('.')
    let obj = currentPage.value.content

    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i]
      if (!(key in obj)) {
        obj[key] = {}
      }
      obj = obj[key]
    }

    obj[keys[keys.length - 1]] = value
  }

  const getField = (path: string): any => {
    if (!currentPage.value) return null

    const keys = path.split('.')
    let obj = currentPage.value.content

    for (const key of keys) {
      if (key in obj) {
        obj = obj[key]
      } else {
        return null
      }
    }

    return obj
  }

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
  }
}
