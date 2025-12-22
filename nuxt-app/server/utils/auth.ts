import { createHmac } from 'crypto'

const JWT_SECRET = process.env.JWT_SECRET || 'imaad-secret-key-change-in-production-2024'
const TOKEN_MAX_AGE = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

export function verifyAdminToken(token: string): { valid: boolean; username?: string } {
  try {
    if (!token) {
      return { valid: false }
    }

    // Decode token
    const decoded = Buffer.from(token, 'base64').toString('utf-8')
    const parts = decoded.split(':')
    
    if (parts.length !== 4) {
      return { valid: false }
    }

    const [username, timestamp, randomPart, signature] = parts

    // Verify signature
    const payload = `${username}:${timestamp}:${randomPart}`
    const expectedSignature = createHmac('sha256', JWT_SECRET)
      .update(payload)
      .digest('hex')

    if (signature !== expectedSignature) {
      return { valid: false }
    }

    // Check token age
    const tokenTime = parseInt(timestamp, 10)
    if (Date.now() - tokenTime > TOKEN_MAX_AGE) {
      return { valid: false }
    }

    return { valid: true, username }
  } catch {
    return { valid: false }
  }
}
