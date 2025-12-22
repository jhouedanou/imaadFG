export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event)
  
  if (!formData || formData.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No file uploaded'
    })
  }

  const file = formData.find(f => f.name === 'file')
  
  if (!file || !file.data) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No file data'
    })
  }

  // Validate file type
  const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
  if (!validTypes.includes(file.type || '')) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid file type. Allowed: JPG, PNG, GIF, WebP, SVG'
    })
  }

  // Validate file size (5MB max)
  if (file.data.length > 5 * 1024 * 1024) {
    throw createError({
      statusCode: 400,
      statusMessage: 'File too large. Maximum size: 5MB'
    })
  }

  try {
    const fs = await import('fs')
    const path = await import('path')
    
    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public', 'images', 'uploads')
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true })
    }

    // Generate unique filename
    const ext = file.filename?.split('.').pop() || 'png'
    const timestamp = Date.now()
    const randomStr = Math.random().toString(36).substring(2, 8)
    const filename = `${timestamp}-${randomStr}.${ext}`
    
    // Save file
    const filePath = path.join(uploadsDir, filename)
    fs.writeFileSync(filePath, file.data)
    
    const url = `/images/uploads/${filename}`
    
    return {
      success: true,
      url,
      filename
    }
  } catch (error: any) {
    console.error('Upload error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to upload file'
    })
  }
})
