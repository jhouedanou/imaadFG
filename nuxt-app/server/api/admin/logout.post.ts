export default defineEventHandler(async (event) => {
  // Clear the admin token cookie
  setCookie(event, 'admin_token', '', {
    maxAge: 0,
    path: '/'
  })
  
  return {
    success: true,
    message: 'Déconnexion réussie'
  }
})
