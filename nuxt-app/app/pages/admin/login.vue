<template>
  <div class="min-h-screen bg-[#050b16] flex items-center justify-center px-4">
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-8">
        <img 
          src="/images/logo-removebg-preview.png" 
          alt="IMAAD Financial Group" 
          class="h-16 mx-auto mb-4 invert"
        />
        <h1 class="text-2xl font-michroma text-white">Administration</h1>
        <p class="text-gray-500 text-sm mt-2">Connectez-vous pour accéder au panneau d'administration</p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="bg-[#0A192F] border border-gray-800 rounded-xl p-8">
        <div class="space-y-6">
          <!-- Username -->
          <div>
            <label class="block text-gray-300 text-sm font-medium mb-2">
              Identifiant
            </label>
            <input 
              v-model="credentials.username"
              type="text"
              required
              autocomplete="username"
              class="w-full bg-[#050b16] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
              placeholder="admin"
            />
          </div>

          <!-- Password -->
          <div>
            <label class="block text-gray-300 text-sm font-medium mb-2">
              Mot de passe
            </label>
            <div class="relative">
              <input 
                v-model="credentials.password"
                :type="showPassword ? 'text' : 'password'"
                required
                autocomplete="current-password"
                class="w-full bg-[#050b16] border border-gray-700 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A227] transition-colors"
                placeholder="••••••••"
              />
              <button 
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
              >
                <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Error Message -->
          <div v-if="error" class="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
            <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {{ error }}
          </div>

          <!-- Submit Button -->
          <button 
            type="submit"
            :disabled="isLoading"
            class="w-full bg-[#C9A227] text-[#0A192F] font-semibold py-3 rounded-lg hover:bg-[#d4af37] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <svg v-if="isLoading" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ isLoading ? 'Connexion...' : 'Se connecter' }}
          </button>
        </div>
      </form>

      <!-- Back to site -->
      <div class="text-center mt-6">
        <NuxtLink to="/" class="text-gray-500 hover:text-[#C9A227] transition-colors text-sm">
          ← Retour au site
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'admin'
})

useHead({
  title: 'Connexion - Administration IMAAD'
})

const credentials = ref({
  username: '',
  password: ''
})

const showPassword = ref(false)
const isLoading = ref(false)
const error = ref('')

async function handleLogin() {
  isLoading.value = true
  error.value = ''

  try {
    const response = await $fetch('/api/admin/login', {
      method: 'POST',
      body: credentials.value
    })

    if (response.success) {
      // Store token in cookie
      const token = useCookie('admin_token', {
        maxAge: 60 * 60 * 24, // 24 hours
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      })
      token.value = response.token

      // Redirect to admin dashboard
      navigateTo('/admin')
    }
  } catch (err: any) {
    error.value = err.data?.message || 'Identifiants incorrects'
  } finally {
    isLoading.value = false
  }
}
</script>
