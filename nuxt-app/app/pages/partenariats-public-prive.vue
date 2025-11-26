<template>
  <div class="page-ppp">
    <!-- Hero Section -->
    <Hero 
      title="Partenariats Public-Privé"
      subtitle="Développement et conseil en PPP"
    />

    <!-- Introduction Section -->
    <section class="section intro-section">
      <div class="container">
        <div class="grid grid-2 intro-grid">
          <div class="intro-content">
            <h2>Partenariats Public-Privé (PPP)</h2>
            <p>
              <strong>Imaad Financial Group</strong> intervient comme développeur 
              et conseiller dans le cadre de partenariats public-privé pour des projets 
              d'infrastructures stratégiques en Afrique.
            </p>
            <p>
              Notre expertise couvre l'ensemble du cycle de vie d'un projet PPP : 
              de l'identification des opportunités à la structuration financière, 
              en passant par la négociation des contrats et le closing financier.
            </p>
          </div>
          <div class="intro-image">
            <NuxtImg 
              src="/images/ppp.jpg" 
              alt="Partenariats Public-Privé"
              class="rounded-image"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section services-section">
      <div class="container">
        <h2 class="section-title">Nos Services PPP</h2>
        
        <div class="grid grid-3">
          <div v-for="service in services" :key="service.title" class="service-card card">
            <Icon :name="service.icon" size="48" class="service-icon" />
            <h4>{{ service.title }}</h4>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Avantages Section -->
    <section class="section avantages-section">
      <div class="container">
        <h2 class="section-title">Pourquoi les PPP ?</h2>
        
        <div class="grid grid-2">
          <div class="avantages-list">
            <div v-for="avantage in avantages" :key="avantage" class="avantage-item">
              <Icon name="mdi:check-circle" class="check-icon" />
              <span>{{ avantage }}</span>
            </div>
          </div>
          <div class="avantages-stats">
            <div class="stat-card">
              <div class="stat-value">+20</div>
              <div class="stat-label">Projets PPP accompagnés</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">3 Mrd €</div>
              <div class="stat-label">Volume total des projets</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projets Section -->
    <section class="section projets-section">
      <div class="container">
        <h2 class="section-title">Projets PPP en cours</h2>
        
        <div class="grid grid-3 projets-grid">
          <div v-for="projet in projets" :key="projet.nom" class="projet-card card">
            <div class="projet-header">
              <Icon name="mdi:city" size="32" class="projet-icon" />
              <span class="projet-pays">{{ projet.pays }}</span>
            </div>
            <h4>{{ projet.nom }}</h4>
            <div class="projet-details">
              <p class="montant">
                <Icon name="mdi:currency-eur" />
                {{ projet.montant }}
              </p>
              <p class="statut">{{ projet.statut }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section process-section">
      <div class="container">
        <h2 class="section-title">Notre Processus</h2>
        
        <div class="process-timeline">
          <div v-for="(step, index) in processSteps" :key="step.title" class="process-step">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h4>{{ step.title }}</h4>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Un projet d'infrastructure en PPP ?</h2>
          <p>Discutons de votre projet et explorons ensemble les solutions de financement</p>
          <NuxtLink to="/contact" class="btn btn-primary">
            Nous contacter
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Identification & Analyse',
    description: "Identification des opportunités PPP et analyse de faisabilité technique, économique et financière",
    icon: 'mdi:magnify'
  },
  {
    title: 'Structuration Financière',
    description: "Montage financier optimal, recherche de partenaires et négociation des termes",
    icon: 'mdi:chart-line'
  },
  {
    title: 'Accompagnement Juridique',
    description: "Rédaction et négociation des contrats, gestion des aspects réglementaires",
    icon: 'mdi:scale-balance'
  },
  {
    title: 'Mobilisation de Capitaux',
    description: "Levée de fonds auprès d'investisseurs institutionnels et DFIs",
    icon: 'mdi:cash-multiple'
  },
  {
    title: 'Gestion de Projet',
    description: "Coordination des parties prenantes jusqu'au closing financier",
    icon: 'mdi:clipboard-check'
  },
  {
    title: 'Suivi Post-Closing',
    description: "Accompagnement dans la phase d'exécution et monitoring",
    icon: 'mdi:eye-check'
  }
]

const avantages = [
  "Transfert de risques vers le secteur privé",
  "Accès à l'expertise technique du privé",
  "Optimisation des coûts sur le cycle de vie",
  "Accélération de la réalisation des infrastructures",
  "Innovation et efficience opérationnelle",
  "Préservation de la capacité budgétaire de l'État"
]

const projets = [
  {
    nom: "Gare Routière Inter-Urbaine d'Abidjan",
    pays: "Côte d'Ivoire",
    montant: "112 M€",
    statut: "Closing en 2026"
  },
  {
    nom: "Programme de Logements Sociaux",
    pays: "Cameroun",
    montant: "100 M€",
    statut: "Closing en 2026"
  },
  {
    nom: "Construction de bacs de stockage de produits pétroliers",
    pays: "Côte d'Ivoire",
    montant: "+600 M€",
    statut: "Closing en 2026"
  }
]

const processSteps = [
  {
    title: "Due Diligence",
    description: "Analyse approfondie du projet et de son environnement"
  },
  {
    title: "Structuration",
    description: "Montage juridique et financier du partenariat"
  },
  {
    title: "Négociation",
    description: "Discussion des termes avec toutes les parties prenantes"
  },
  {
    title: "Closing",
    description: "Finalisation des accords et mobilisation des fonds"
  }
]

useHead({
  title: 'Partenariats Public-Privé - IMAAD Financial Group',
  meta: [
    { 
      name: 'description', 
      content: 'IMAAD Financial Group développe et conseille des projets PPP pour des infrastructures stratégiques en Afrique.' 
    }
  ]
})
</script>

<style scoped>
.intro-section {
  background: var(--bg-light);
}

.intro-grid {
  align-items: center;
}

.intro-content h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.intro-content p {
  line-height: 1.8;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.rounded-image {
  border-radius: 12px;
  width: 100%;
  height: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.services-section {
  background: white;
}

.service-card {
  text-align: center;
  padding: 2rem;
}

.service-icon {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.service-card h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.service-card p {
  color: var(--text-light);
  font-size: 0.95rem;
}

.avantages-section {
  background: var(--bg-light);
}

.avantages-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.avantage-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  font-size: 1.05rem;
}

.check-icon {
  color: var(--accent-color);
  flex-shrink: 0;
}

.avantages-stats {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: 12px;
  color: white;
}

.stat-value {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
}

.projets-section {
  background: white;
}

.projet-card {
  padding: 1.5rem;
}

.projet-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.projet-icon {
  color: var(--primary-color);
}

.projet-pays {
  background: var(--accent-color);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
}

.projet-card h4 {
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.4;
}

.projet-details {
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
}

.projet-details p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-light);
}

.projet-details .montant {
  font-weight: 600;
  color: var(--primary-color);
}

.projet-details .statut {
  font-style: italic;
}

.process-section {
  background: var(--bg-light);
}

.process-timeline {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 3rem;
}

.process-timeline::before {
  content: '';
  position: absolute;
  top: 25px;
  left: 50px;
  right: 50px;
  height: 4px;
  background: var(--border-color);
  z-index: 0;
}

.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  position: relative;
  z-index: 1;
}

.step-number {
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.step-content h4 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.step-content p {
  color: var(--text-light);
  font-size: 0.9rem;
  max-width: 200px;
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
  .process-timeline {
    flex-direction: column;
    gap: 2rem;
  }
  
  .process-timeline::before {
    display: none;
  }
  
  .process-step {
    flex-direction: row;
    text-align: left;
    gap: 1rem;
  }
  
  .step-content {
    text-align: left;
  }
  
  .step-content p {
    max-width: none;
  }
}
</style>
