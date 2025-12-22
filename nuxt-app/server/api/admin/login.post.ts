import { createHmac, randomBytes } from 'crypto'

// Configuration - À modifier avec vos propres valeurs !
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'imaad2024!'
const JWT_SECRET = process.env.JWT_SECRET || 'imaad-secret-key-change-in-production-2024'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  const { username, password } = body

  // Validate credentials
  if (!username || !password) {
    throw createError({
      statusCode: 400,
      message: 'Identifiant et mot de passe requis'
    })
  }

  // Check credentials
  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    throw createError({
      statusCode: 401,
      message: 'Identifiants incorrects'
    })
  }

  // Generate a simple token
  const timestamp = Date.now()
  const randomPart = randomBytes(16).toString('hex')
  const payload = `${username}:${timestamp}:${randomPart}`
  
  // Create signature
  const signature = createHmac('sha256', JWT_SECRET)
    .update(payload)
    .digest('hex')
  
  const token = Buffer.from(`${payload}:${signature}`).toString('base64')

  return {
    success: true,
    token,
    user: {
      username
    }
  }
})
