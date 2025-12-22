<template>
  <div class="admin-tags-input">
    <label v-if="label" class="block text-gray-300 text-sm font-medium mb-2">
      {{ label }}
    </label>
    
    <div class="flex flex-wrap gap-2 mb-3">
      <span 
        v-for="(tag, index) in modelValue" 
        :key="index"
        class="inline-flex items-center gap-1 bg-[#C9A227]/20 text-[#C9A227] px-3 py-1 rounded-full text-sm"
      >
        {{ tag }}
        <button 
          @click="removeTag(index)"
          class="hover:text-white transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </span>
    </div>
    
    <div class="flex gap-2">
      <input 
        v-model="newTag"
        @keydown.enter.prevent="addTag"
        type="text"
        placeholder="Ajouter un tag..."
        class="flex-1 bg-[#0A192F] border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
      />
      <button 
        @click="addTag"
        class="px-4 py-2 bg-[#C9A227]/20 text-[#C9A227] border border-[#C9A227]/30 rounded-lg hover:bg-[#C9A227]/30 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modelValue: string[]
  label?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
  (e: 'change'): void
}>()

const newTag = ref('')

function addTag() {
  if (newTag.value.trim() && !props.modelValue.includes(newTag.value.trim())) {
    emit('update:modelValue', [...props.modelValue, newTag.value.trim()])
    emit('change')
    newTag.value = ''
  }
}

function removeTag(index: number) {
  const newTags = [...props.modelValue]
  newTags.splice(index, 1)
  emit('update:modelValue', newTags)
  emit('change')
}
</script>
