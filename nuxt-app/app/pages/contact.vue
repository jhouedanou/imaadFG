<script setup lang="ts">
import { ref, reactive } from 'vue'

useHead({
  title: 'Contact - IMAAD Financial Group',
  meta: [
    { name: 'description', content: 'Contactez IMAAD Financial Group pour discuter de vos projets de financement souverain, corporate finance ou partenariats public-privé.' },
    { property: 'og:title', content: 'Contact - IMAAD Financial Group' },
    { property: 'og:type', content: 'website' }
  ]
})

// Contact info
const offices = [
  {
    city: 'Paris',
    address: '45 Avenue George V',
    zipcode: '75008 Paris, France',
    phone: '+33 1 XX XX XX XX',
    email: 'paris@imaadfinancial.com'
  },
  {
    city: 'Abidjan',
    address: 'Cocody Riviera Golf',
    zipcode: 'Abidjan, Côte d\'Ivoire',
    phone: '+225 XX XX XX XX',
    email: 'abidjan@imaadfinancial.com'
  },
  {
    city: 'Dakar',
    address: 'Almadies Zone 4',
    zipcode: 'Dakar, Sénégal',
    phone: '+221 XX XX XX XX',
    email: 'dakar@imaadfinancial.com'
  }
]

// Form state
const form = reactive({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: ''
})

const subjects = [
  'Financement Souverain',
  'Corporate & Trade Finance',
  'Partenariats Public-Privé',
  'Partenariat / Collaboration',
  'Autre demande'
]

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSubmitted.value = true
  
  // Reset form
  form.name = ''
  form.email = ''
  form.company = ''
  form.subject = ''
  form.message = ''
}
</script>

<template>
  <div class="page-contact">
    <!-- Hero Section -->
    <section class="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <div 
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')"
      />
      <div class="absolute inset-0 bg-bleu-nuit/75" />
      
      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span class="font-montserrat text-or text-sm uppercase tracking-widest mb-4 block">
          Parlons de votre projet
        </span>
        <h1 class="font-playfair text-hero text-white mb-6">
          Contactez-nous
        </h1>
        <p class="font-montserrat text-lg text-gray-300 max-w-2xl mx-auto">
          Notre équipe est à votre écoute pour répondre à vos questions 
          et vous accompagner dans vos projets.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 lg:py-32 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <!-- Contact Info -->
          <div class="lg:col-span-2">
            <h2 class="font-playfair text-display text-bleu-nuit mb-8">
              Nos Bureaux
            </h2>
            
            <div class="space-y-8">
              <div 
                v-for="office in offices" 
                :key="office.city"
                class="border-l-2 border-or pl-6"
              >
                <h3 class="font-playfair text-xl text-bleu-nuit mb-2">{{ office.city }}</h3>
                <p class="font-montserrat text-gray-600 text-sm mb-1">{{ office.address }}</p>
                <p class="font-montserrat text-gray-600 text-sm mb-3">{{ office.zipcode }}</p>
                <div class="space-y-1">
                  <a 
                    :href="`tel:${office.phone}`"
                    class="flex items-center gap-2 font-montserrat text-sm text-gray-600 hover:text-or transition-colors"
                  >
                    <Icon name="mdi:phone" class="w-4 h-4" />
                    {{ office.phone }}
                  </a>
                  <a 
                    :href="`mailto:${office.email}`"
                    class="flex items-center gap-2 font-montserrat text-sm text-gray-600 hover:text-or transition-colors"
                  >
                    <Icon name="mdi:email" class="w-4 h-4" />
                    {{ office.email }}
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Social Links -->
            <div class="mt-12">
              <h3 class="font-montserrat text-sm uppercase tracking-wider text-bleu-nuit mb-4">
                Suivez-nous
              </h3>
              <div class="flex gap-4">
                <a 
                  href="#" 
                  target="_blank"
                  class="w-10 h-10 bg-bleu-nuit rounded-full flex items-center justify-center text-white hover:bg-or transition-colors duration-300"
                >
                  <Icon name="mdi:linkedin" class="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  target="_blank"
                  class="w-10 h-10 bg-bleu-nuit rounded-full flex items-center justify-center text-white hover:bg-or transition-colors duration-300"
                >
                  <Icon name="mdi:twitter" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="lg:col-span-3">
            <div class="bg-ivory rounded-2xl p-8 lg:p-12">
              <h2 class="font-playfair text-2xl text-bleu-nuit mb-2">
                Envoyez-nous un message
              </h2>
              <p class="font-montserrat text-gray-600 text-sm mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>
              
              <!-- Success Message -->
              <div 
                v-if="isSubmitted"
                class="bg-green-50 border border-green-200 rounded-xl p-6 mb-8"
              >
                <div class="flex items-center gap-3">
                  <Icon name="mdi:check-circle" class="w-6 h-6 text-green-600" />
                  <div>
                    <h3 class="font-montserrat text-green-800 font-medium">Message envoyé !</h3>
                    <p class="font-montserrat text-green-600 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                </div>
              </div>
              
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="font-montserrat text-sm text-bleu-nuit mb-2 block">
                      Nom complet *
                    </label>
                    <input 
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-or focus:ring-2 focus:ring-or/20 transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label class="font-montserrat text-sm text-bleu-nuit mb-2 block">
                      Email *
                    </label>
                    <input 
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-or focus:ring-2 focus:ring-or/20 transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="font-montserrat text-sm text-bleu-nuit mb-2 block">
                      Entreprise / Organisation
                    </label>
                    <input 
                      v-model="form.company"
                      type="text"
                      class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-or focus:ring-2 focus:ring-or/20 transition-all"
                      placeholder="Votre entreprise"
                    />
                  </div>
                  <div>
                    <label class="font-montserrat text-sm text-bleu-nuit mb-2 block">
                      Sujet *
                    </label>
                    <select 
                      v-model="form.subject"
                      required
                      class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-or focus:ring-2 focus:ring-or/20 transition-all"
                    >
                      <option value="" disabled>Sélectionnez un sujet</option>
                      <option v-for="subject in subjects" :key="subject" :value="subject">
                        {{ subject }}
                      </option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label class="font-montserrat text-sm text-bleu-nuit mb-2 block">
                    Message *
                  </label>
                  <textarea 
                    v-model="form.message"
                    required
                    rows="5"
                    class="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-or focus:ring-2 focus:ring-or/20 transition-all resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  ></textarea>
                </div>
                
                <div class="flex items-center justify-between">
                  <p class="font-montserrat text-xs text-gray-500">
                    * Champs obligatoires
                  </p>
                  <button 
                    type="submit"
                    :disabled="isSubmitting"
                    class="inline-flex items-center gap-3 font-montserrat text-sm uppercase tracking-widest px-8 py-4 bg-or text-bleu-nuit hover:bg-or-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span v-if="isSubmitting">Envoi en cours...</span>
                    <span v-else>Envoyer</span>
                    <Icon v-if="!isSubmitting" name="mdi:send" class="w-4 h-4" />
                    <Icon v-else name="mdi:loading" class="w-4 h-4 animate-spin" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section (placeholder) -->
    <section class="h-[400px] bg-gray-200 relative">
      <div class="absolute inset-0 flex items-center justify-center bg-bleu-nuit/10">
        <div class="text-center">
          <Icon name="mdi:map-marker" class="w-16 h-16 text-or mx-auto mb-4" />
          <p class="font-montserrat text-gray-600">Carte interactive</p>
          <p class="font-montserrat text-sm text-gray-500">Paris • Abidjan • Dakar</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-contact {
  overflow-x: hidden;
}
</style>
