<template>
  <div class="page-contact">
    <!-- Hero Section -->
    <Hero 
      :title="pageData.hero.title"
      :subtitle="pageData.hero.subtitle"
    />

    <!-- Contact Info Section -->
    <section class="section contact-info-section">
      <div class="container">
        <div class="grid grid-2">
          <div class="contact-details">
            <h2>Contactez-nous</h2>
            
            <div class="contact-item">
              <Icon name="mdi:email" size="32" class="contact-icon" />
              <div>
                <h4>Email</h4>
                <a :href="`mailto:${pageData.informations.email}`">
                  {{ pageData.informations.email }}
                </a>
              </div>
            </div>

            <div class="contact-item">
              <Icon name="mdi:phone" size="32" class="contact-icon" />
              <div>
                <h4>Téléphone</h4>
                <a :href="`tel:${pageData.informations.phone}`">
                  {{ pageData.informations.phone }}
                </a>
              </div>
            </div>

            <div class="bureaux-principaux">
              <h3>Bureaux Principaux</h3>
              <div class="bureaux-grid">
                <span 
                  v-for="bureau in pageData.bureaux.principaux" 
                  :key="bureau"
                  class="bureau-badge"
                >
                  <Icon name="mdi:office-building" />
                  {{ bureau }}
                </span>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <form @submit.prevent="handleSubmit" class="contact-form card">
              <h3>Envoyez-nous un message</h3>
              
              <div class="form-group">
                <label for="name">Nom complet *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label for="phone">Téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone"
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required
                  rows="5"
                  class="form-input"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Présence Mondiale Section -->
    <section class="section presence-section">
      <div class="container">
        <h2 class="section-title">{{ pageData.presence.title }}</h2>
        
        <div class="pays-grid">
          <span 
            v-for="pays in pageData.presence.pays" 
            :key="pays"
            class="pays-badge"
          >
            {{ pays }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { pages } = useSiteData()
const pageData = pages.contact

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  // Logique d'envoi du formulaire
  alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.')
  form.value = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
}

useHead({
  title: `Contact - IMAAD Financial Group`,
  meta: [
    { 
      name: 'description', 
      content: 'Contactez IMAAD Financial Group pour vos projets de financement' 
    }
  ]
})
</script>

<style scoped>
.contact-info-section {
  background: var(--bg-light);
}

.contact-details h2 {
  color: var(--primary-color);
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
}

.contact-icon {
  color: var(--primary-color);
  flex-shrink: 0;
}

.contact-item h4 {
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.contact-item a {
  color: var(--primary-color);
  font-size: 1.1rem;
  text-decoration: none;
}

.contact-item a:hover {
  color: var(--accent-color);
}

.bureaux-principaux {
  margin-top: 3rem;
}

.bureaux-principaux h3 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.bureaux-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}

.bureau-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: white;
  border-radius: 8px;
  color: var(--text-dark);
  font-weight: 500;
}

.contact-form {
  background: white;
}

.contact-form h3 {
  margin-bottom: 2rem;
  color: var(--primary-color);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
}

textarea.form-input {
  resize: vertical;
  min-height: 120px;
}

.presence-section {
  background: white;
}

.pays-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.pays-badge {
  padding: 0.5rem 1.25rem;
  background: var(--bg-light);
  border: 2px solid var(--border-color);
  border-radius: 50px;
  color: var(--text-dark);
  font-size: 0.95rem;
  transition: all 0.3s;
}

.pays-badge:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  background: white;
}

@media (max-width: 768px) {
  .bureaux-grid {
    grid-template-columns: 1fr;
  }
}
</style>
