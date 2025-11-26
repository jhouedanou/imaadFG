<template>
  <div class="page-nos-activites">
    <!-- Hero Section -->
    <Hero 
      :title="pageData.hero.title"
      :subtitle="pageData.hero.subtitle"
    />

    <!-- Modèle Section -->
    <section class="section modele-section">
      <div class="container">
        <h2 class="section-title">{{ pageData.modele.title }}</h2>
        <h3 class="section-subtitle">{{ pageData.modele.subtitle }}</h3>
        <p class="modele-description">{{ pageData.modele.description }}</p>

        <div class="grid grid-3 leviers-grid">
          <div 
            v-for="levier in pageData.modele.leviers" 
            :key="levier.id"
            class="levier-card card"
          >
            <Icon :name="`mdi:${levier.icon}`" size="48" class="levier-icon" />
            <h4>{{ levier.title }}</h4>
            <p>{{ levier.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Approche Section -->
    <section class="section approche-section">
      <div class="container">
        <h2 class="section-title">{{ pageData.approche.title }}</h2>
        
        <div class="grid grid-3">
          <div 
            v-for="(item, index) in pageData.approche.items" 
            :key="index"
            class="approche-card"
          >
            <div class="approche-image">
              <Icon name="mdi:chart-line" size="64" />
            </div>
            <h4>{{ item.title }}</h4>
            <p class="subtitle">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section services-section">
      <div class="container">
        <div 
          v-for="(service, index) in pageData.services" 
          :key="service.id"
          class="service-block"
          :class="{ 'reverse': index % 2 !== 0 }"
        >
          <div class="service-content">
            <h2>{{ service.title }}</h2>
            <p class="service-description">{{ service.description }}</p>
            
            <ul v-if="service.prestations" class="prestations-list">
              <li v-for="prestation in service.prestations" :key="prestation">
                <Icon name="mdi:check-circle" class="check-icon" />
                {{ prestation }}
              </li>
            </ul>

            <div class="projets-section">
              <h3>Projets Réalisés et En Cours</h3>
              <div class="projets-grid">
                <div 
                  v-for="projet in service.projets" 
                  :key="projet.nom"
                  class="projet-card card"
                >
                  <h4>{{ projet.nom }}</h4>
                  <div class="projet-details">
                    <p><Icon name="mdi:map-marker" /> {{ projet.pays }}</p>
                    <p><Icon name="mdi:currency-eur" /> {{ projet.montant }}</p>
                    <p class="statut">{{ projet.statut }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Besoin d'un accompagnement financier ?</h2>
          <p>Notre équipe d'experts est à votre disposition pour étudier votre projet</p>
          <NuxtLink to="/contact" class="btn btn-primary">
            {{ $t('common.contact_us') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { pages } = useSiteData()
const pageData = pages['nos-activites']

useHead({
  title: `Nos Activités - IMAAD Financial Group`,
  meta: [
    { 
      name: 'description', 
      content: pageData.modele.description 
    }
  ]
})
</script>

<style scoped>
.modele-section {
  background: var(--bg-light);
}

.modele-description {
  max-width: 900px;
  margin: 0 auto 3rem;
  text-align: center;
  font-size: 1.1rem;
  color: var(--text-light);
}

.leviers-grid {
  margin-top: 3rem;
}

.levier-card {
  text-align: center;
}

.levier-icon {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.levier-card h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.approche-section {
  background: white;
}

.approche-card {
  text-align: center;
  padding: 2rem;
}

.approche-image {
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.approche-card h4 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
}

.approche-card .subtitle {
  color: var(--text-light);
  font-size: 1.1rem;
}

.services-section {
  background: var(--bg-light);
}

.service-block {
  margin-bottom: 4rem;
  padding: 3rem 0;
}

.service-block:not(:last-child) {
  border-bottom: 2px solid var(--border-color);
}

.service-content h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.service-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: var(--text-light);
}

.prestations-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.prestations-list li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

.check-icon {
  color: var(--accent-color);
  flex-shrink: 0;
  margin-top: 2px;
}

.projets-section {
  margin-top: 3rem;
}

.projets-section h3 {
  color: var(--primary-color);
  margin-bottom: 2rem;
}

.projets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.projet-card {
  background: white;
}

.projet-card h4 {
  color: var(--text-dark);
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.projet-details p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-light);
  font-size: 0.95rem;
}

.projet-details .statut {
  color: var(--primary-color);
  font-weight: 600;
  margin-top: 0.5rem;
}

.cta-section {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  color: white;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .projets-grid {
    grid-template-columns: 1fr;
  }
}
</style>
