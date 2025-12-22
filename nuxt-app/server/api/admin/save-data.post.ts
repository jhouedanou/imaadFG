export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  try {
    // Validate JSON structure
    if (!body || typeof body !== 'object') {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid data format'
      })
    }

    // Use Nitro's storage to save data
    const storage = useStorage('data')
    await storage.setItem('site-data.json', JSON.stringify(body, null, 2))
    
    // Also try to write to file system using H3's native fs
    const fs = await import('fs').then(m => m.promises)
    const path = await import('path')
    const dataPath = path.join(process.cwd(), 'app', 'data', 'site-data.json')
    await fs.writeFile(dataPath, JSON.stringify(body, null, 2), 'utf-8')
    
    return {
      success: true,
      message: 'Data saved successfully'
    }
  } catch (error: any) {
    console.error('Save error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to save data'
    })
  }
})
