<template>
  <div class="page-notre-equipe">
    <!-- Hero Section -->
    <Hero 
      :title="pageData.hero.title"
      :subtitle="pageData.hero.subtitle"
    />

    <!-- Direction Section -->
    <section class="section direction-section">
      <div class="container">
        <h2 class="section-title">Direction Générale</h2>
        
        <div class="grid grid-2 team-grid">
          <div 
            v-for="membre in pageData.direction" 
            :key="membre.nom"
            class="team-card card"
          >
            <div class="team-photo">
              <Icon name="mdi:account-circle" size="120" />
            </div>
            <h3>{{ membre.nom }}</h3>
            <p class="poste">{{ membre.poste }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Équipe Section -->
    <section class="section equipe-section">
      <div class="container">
        <h2 class="section-title">Notre Équipe</h2>
        
        <div class="grid grid-3 team-grid">
          <div 
            v-for="membre in pageData.equipe" 
            :key="membre.nom"
            class="team-card card"
          >
            <div class="team-photo small">
              <Icon name="mdi:account-circle" size="80" />
            </div>
            <h4>{{ membre.nom }}</h4>
            <p class="poste">{{ membre.poste }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Rejoignez notre équipe</h2>
          <p>Nous recherchons des talents passionnés pour accompagner notre croissance</p>
          <NuxtLink to="/contact" class="btn btn-primary">
            Postuler
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { pages } = useSiteData()
const pageData = pages['notre-equipe']

useHead({
  title: `Notre Équipe - IMAAD Financial Group`,
  meta: [
    { 
      name: 'description', 
      content: pageData.hero.subtitle 
    }
  ]
})
</script>

<style scoped>
.direction-section {
  background: var(--bg-light);
}

.equipe-section {
  background: white;
}

.team-grid {
  margin-top: 3rem;
}

.team-card {
  text-align: center;
  transition: all 0.3s;
}

.team-photo {
  width: 150px;
  height: 150px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  overflow: hidden;
}

.team-photo.small {
  width: 100px;
  height: 100px;
}

.team-card h3, .team-card h4 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.team-card h3 {
  font-size: 1.5rem;
}

.team-card h4 {
  font-size: 1.2rem;
}

.poste {
  color: var(--text-light);
  font-size: 1rem;
  line-height: 1.4;
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
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
