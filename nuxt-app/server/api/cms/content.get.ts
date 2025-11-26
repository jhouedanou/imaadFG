import { readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const configPath = join(process.cwd(), 'public/config/site-content.json')
    const configContent = await readFile(configPath, 'utf-8')
    const config = JSON.parse(configContent)

    return {
      success: true,
      data: config
    }
  } catch (error) {
    console.error('Error reading site content:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to read site content'
    })
  }
})
