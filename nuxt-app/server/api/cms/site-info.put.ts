import { writeFile, readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const siteInfo = await readBody(event)

    const configPath = join(process.cwd(), 'public/config/site-content.json')

    // Read current config
    const configContent = await readFile(configPath, 'utf-8')
    const config = JSON.parse(configContent)

    // Update site info
    config.site = {
      ...config.site,
      ...siteInfo
    }

    // Write back to file
    await writeFile(configPath, JSON.stringify(config, null, 2), 'utf-8')

    return {
      success: true,
      message: 'Site information updated successfully'
    }
  } catch (error) {
    console.error('Error updating site info:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update site information'
    })
  }
})
