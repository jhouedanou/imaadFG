export default defineEventHandler(async () => {
  try {
    const fs = await import('fs')
    const path = await import('path')
    
    const publicPath = path.join(process.cwd(), 'public', 'images')
    const images: string[] = []
    
    function scanDirectory(dir: string, basePath: string = '/images') {
      if (!fs.existsSync(dir)) return
      
      const files = fs.readdirSync(dir)
      
      for (const file of files) {
        const fullPath = path.join(dir, file)
        const relativePath = `${basePath}/${file}`
        const stat = fs.statSync(fullPath)
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath, relativePath)
        } else if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)) {
          images.push(relativePath)
        }
      }
    }
    
    scanDirectory(publicPath)
    
    return images.sort()
  } catch (error: any) {
    console.error('Images list error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to list images'
    })
  }
})
