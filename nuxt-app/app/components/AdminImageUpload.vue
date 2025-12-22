<template>
  <div class="admin-image-upload">
    <!-- Preview -->
    <div v-if="currentImage && !showUrlOutput" class="mb-4">
      <div class="relative inline-block">
        <img 
          :src="currentImage" 
          alt="Preview"
          class="max-h-40 rounded-lg border border-gray-700"
        />
        <button 
          @click="clearImage"
          class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Upload Area -->
    <div 
      @click="triggerFileInput"
      @dragover.prevent="isDragging = true"
      @dragleave="isDragging = false"
      @drop.prevent="handleDrop"
      :class="[
        'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all',
        isDragging 
          ? 'border-[#C9A227] bg-[#C9A227]/10' 
          : 'border-gray-700 hover:border-[#C9A227]/50 hover:bg-[#0A192F]/50'
      ]"
    >
      <input 
        ref="fileInput"
        type="file"
        accept="image/*"
        @change="handleFileSelect"
        class="hidden"
      />
      
      <div v-if="isUploading" class="flex flex-col items-center">
        <svg class="w-10 h-10 text-[#C9A227] animate-spin" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="mt-3 text-gray-400">Upload en cours...</p>
      </div>
      
      <div v-else class="flex flex-col items-center">
        <svg class="w-10 h-10 text-gray-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        <p class="text-gray-400 mb-1">Glissez une image ici ou cliquez pour sélectionner</p>
        <p class="text-xs text-gray-600">PNG, JPG, WebP jusqu'à 5MB</p>
      </div>
    </div>

    <!-- URL Input -->
    <div class="mt-4">
      <div class="flex items-center gap-2 mb-2">
        <div class="flex-1 h-px bg-gray-700"></div>
        <span class="text-gray-500 text-xs uppercase">ou</span>
        <div class="flex-1 h-px bg-gray-700"></div>
      </div>
      <div class="flex gap-2">
        <input 
          v-model="urlInput"
          type="text"
          placeholder="Coller une URL d'image..."
          class="flex-1 bg-[#0A192F] border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors text-sm"
        />
        <button 
          @click="useUrl"
          :disabled="!urlInput"
          class="px-4 py-2 bg-[#C9A227]/20 text-[#C9A227] border border-[#C9A227]/30 rounded-lg hover:bg-[#C9A227]/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Utiliser
        </button>
      </div>
    </div>

    <!-- URL Output (for image gallery) -->
    <div v-if="showUrlOutput && uploadedUrl" class="mt-4 bg-[#0A192F] border border-gray-700 rounded-lg p-3">
      <label class="block text-xs text-gray-500 mb-1">URL de l'image</label>
      <div class="flex items-center gap-2">
        <code class="flex-1 text-[#C9A227] text-sm truncate">{{ uploadedUrl }}</code>
        <button 
          @click="copyUrl"
          class="p-2 text-gray-400 hover:text-[#C9A227] transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modelValue?: string
  currentImage?: string
  showUrlOutput?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change'): void
  (e: 'uploaded', url: string): void
}>()

const fileInput = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)
const isUploading = ref(false)
const urlInput = ref('')
const uploadedUrl = ref('')

function triggerFileInput() {
  fileInput.value?.click()
}

function handleFileSelect(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files?.[0]) {
    uploadFile(input.files[0])
  }
}

function handleDrop(event: DragEvent) {
  isDragging.value = false
  const file = event.dataTransfer?.files[0]
  if (file && file.type.startsWith('image/')) {
    uploadFile(file)
  }
}

async function uploadFile(file: File) {
  if (file.size > 5 * 1024 * 1024) {
    alert('Le fichier est trop volumineux (max 5MB)')
    return
  }

  isUploading.value = true
  
  try {
    const formData = new FormData()
    formData.append('file', file)
    
    const response = await $fetch<{ url: string }>('/api/admin/upload-image', {
      method: 'POST',
      body: formData
    })
    
    uploadedUrl.value = response.url
    emit('update:modelValue', response.url)
    emit('change')
    emit('uploaded', response.url)
  } catch (error) {
    console.error('Upload error:', error)
    alert('Erreur lors de l\'upload')
  } finally {
    isUploading.value = false
  }
}

function useUrl() {
  if (urlInput.value) {
    uploadedUrl.value = urlInput.value
    emit('update:modelValue', urlInput.value)
    emit('change')
    emit('uploaded', urlInput.value)
    urlInput.value = ''
  }
}

function clearImage() {
  emit('update:modelValue', '')
  emit('change')
  uploadedUrl.value = ''
}

function copyUrl() {
  navigator.clipboard.writeText(uploadedUrl.value)
}
</script>
