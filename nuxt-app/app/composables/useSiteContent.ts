import { ref, computed } from 'vue'

export interface SiteConfig {
  site: {
    name: string
    logo: string
    tagline: string
    website: string
    contact: {
      email: string
      phone: string
    }
  }
  navigation: Array<{
    id: string
    label: string
    path: string
    isActive?: boolean
  }>
  languages: string[]
  pages: Record<string, any>
}

const siteContent = ref<SiteConfig | null>(null)
const isLoading = ref(false)
const error = ref<string | null>(null)

export const useSiteContent = () => {
  const loadContent = async () => {
    if (siteContent.value) {
      return siteContent.value
    }

    isLoading.value = true
    error.value = null

    try {
      const response = await fetch('/config/site-content.json')
      if (!response.ok) {
        throw new Error('Failed to load site content')
      }
      siteContent.value = await response.json()
      return siteContent.value
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
      console.error('Error loading site content:', error.value)
      return null
    } finally {
      isLoading.value = false
    }
  }

  const getPageContent = computed(() => {
    return (pageName: string) => {
      if (!siteContent.value) return null
      return siteContent.value.pages[pageName] || null
    }
  })

  const getSiteInfo = computed(() => {
    return siteContent.value?.site || null
  })

  const getNavigation = computed(() => {
    return siteContent.value?.navigation || []
  })

  const updatePageContent = async (pageName: string, pageData: any) => {
    if (!siteContent.value) return false

    try {
      siteContent.value.pages[pageName] = {
        ...siteContent.value.pages[pageName],
        ...pageData
      }

      // Save to API
      const response = await fetch('/api/cms/pages', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          pageName,
          data: siteContent.value.pages[pageName]
        })
      })

      return response.ok
    } catch (err) {
      console.error('Error updating page content:', err)
      return false
    }
  }

  const updateSiteInfo = async (siteInfo: any) => {
    if (!siteContent.value) return false

    try {
      siteContent.value.site = {
        ...siteContent.value.site,
        ...siteInfo
      }

      const response = await fetch('/api/cms/site-info', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(siteContent.value.site)
      })

      return response.ok
    } catch (err) {
      console.error('Error updating site info:', err)
      return false
    }
  }

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
  }
}
