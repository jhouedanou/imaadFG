<template>
  <div class="admin-list-editor">
    <label v-if="label" class="block text-gray-300 text-sm font-medium mb-2">
      {{ label }}
    </label>
    
    <div class="space-y-2 mb-3">
      <div 
        v-for="(item, index) in modelValue" 
        :key="index"
        class="flex items-center gap-2 group"
      >
        <div class="flex-1 flex items-center gap-2 bg-[#0A192F] border border-gray-700 rounded-lg px-4 py-2">
          <svg class="w-4 h-4 text-gray-600 cursor-move" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>
          </svg>
          <input 
            :value="item"
            @input="updateItem(index, ($event.target as HTMLInputElement).value)"
            class="flex-1 bg-transparent text-white focus:outline-none"
          />
        </div>
        <button 
          @click="removeItem(index)"
          class="p-2 text-gray-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <div class="flex gap-2">
      <input 
        v-model="newItem"
        @keydown.enter.prevent="addItem"
        type="text"
        placeholder="Ajouter un élément..."
        class="flex-1 bg-[#0A192F] border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
      />
      <button 
        @click="addItem"
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

const newItem = ref('')

function addItem() {
  if (newItem.value.trim()) {
    emit('update:modelValue', [...props.modelValue, newItem.value.trim()])
    emit('change')
    newItem.value = ''
  }
}

function updateItem(index: number, value: string) {
  const newItems = [...props.modelValue]
  newItems[index] = value
  emit('update:modelValue', newItems)
  emit('change')
}

function removeItem(index: number) {
  const newItems = [...props.modelValue]
  newItems.splice(index, 1)
  emit('update:modelValue', newItems)
  emit('change')
}
</script>
