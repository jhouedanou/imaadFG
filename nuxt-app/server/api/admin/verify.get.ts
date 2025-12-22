import { verifyAdminToken } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'admin_token')
  
  const result = verifyAdminToken(token || '')
  
  return {
    authenticated: result.valid,
    user: result.valid ? { username: result.username } : null
  }
})
