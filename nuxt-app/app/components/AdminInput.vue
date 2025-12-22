<template>
  <div class="admin-input">
    <label v-if="label" class="block text-gray-300 text-sm font-medium mb-2">
      {{ label }}
      <span v-if="required" class="text-red-400">*</span>
    </label>
    <input 
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @change="$emit('change')"
      :placeholder="placeholder"
      :disabled="disabled"
      class="w-full bg-[#0A192F] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    />
    <p v-if="hint" class="mt-1 text-xs text-gray-500">{{ hint }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  label?: string
  type?: string
  placeholder?: string
  hint?: string
  required?: boolean
  disabled?: boolean
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change'): void
}>()
</script>
