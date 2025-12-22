export default defineNuxtRouteMiddleware(async (to) => {
  // Only protect /admin routes (except /admin/login)
  if (!to.path.startsWith('/admin') || to.path === '/admin/login') {
    return
  }

  // Check if we're on client side
  if (import.meta.client) {
    try {
      const { data } = await useFetch('/api/admin/verify')
      
      if (!data.value?.authenticated) {
        return navigateTo('/admin/login')
      }
    } catch {
      return navigateTo('/admin/login')
    }
  }
})
