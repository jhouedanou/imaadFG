import { writeFile, readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { pageName, data } = body

    if (!pageName || !data) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }

    const configPath = join(process.cwd(), 'public/config/site-content.json')

    // Read current config
    const configContent = await readFile(configPath, 'utf-8')
    const config = JSON.parse(configContent)

    // Update page data
    if (!config.pages) {
      config.pages = {}
    }
    config.pages[pageName] = {
      ...config.pages[pageName],
      ...data
    }

    // Write back to file
    await writeFile(configPath, JSON.stringify(config, null, 2), 'utf-8')

    return {
      success: true,
      message: `Page "${pageName}" updated successfully`
    }
  } catch (error) {
    console.error('Error updating page:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update page content'
    })
  }
})
