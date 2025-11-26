<template>
  <div class="page-financement-souverain">
    <!-- Hero Section -->
    <Hero 
      title="Financement Souverain"
      subtitle="Project & Trade Finance"
    />

    <!-- Introduction Section -->
    <section class="section intro-section">
      <div class="container">
        <div class="grid grid-2 intro-grid">
          <div class="intro-image">
            <NuxtImg 
              src="/images/financement-souverain.jpg" 
              alt="Financement souverain"
              class="rounded-image"
            />
          </div>
          <div class="intro-content">
            <h2>Financement souverain</h2>
            <h3 class="subtitle">(Project & Trade Finance)</h3>
            <p>
              <strong>Imaad Capital Partners (ICP)</strong> a pour mission d'accompagner, 
              dans leurs besoins de structuration et de financement, toute entité publique 
              ou privée porteuse de projets d'envergure nationale ou internationale, 
              notamment des projets à fort impact social, environnemental et économique.
            </p>
            <p>
              À ce jour notre portefeuille de projets s'élève à plus de 
              <strong>£1,5 Milliards</strong> dans des secteurs tels que l'éducation, 
              l'adduction en eau potable, logements, routes, hôpitaux en Côte d'Ivoire 
              et en République de Guinée (Conakry).
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Description Section -->
    <section class="section description-section">
      <div class="container">
        <h2 class="section-title">Description</h2>
        <h3 class="section-subtitle">
          Conseil et intermédiation pour la levée de ressources financières 
          requises pour le financement des projets prioritaires des États
        </h3>

        <div class="grid grid-3 features-grid">
          <div class="feature-card card">
            <div class="feature-icon">
              <Icon name="mdi:account-group" size="48" />
            </div>
            <h4>Typologie de clients</h4>
            <p>État via ministère des finances, Entreprises adjudicatrices de travaux publics</p>
          </div>

          <div class="feature-card card">
            <div class="feature-icon">
              <Icon name="mdi:calendar-clock" size="48" />
            </div>
            <h4>Maturité moyenne des financements</h4>
            <p>Entre 5 et 20 ans, incluant 2 à 4 ans de période de grâce</p>
          </div>

          <div class="feature-card card">
            <div class="feature-icon">
              <Icon name="mdi:percent" size="48" />
            </div>
            <h4>Taux d'intérêt</h4>
            <p>Entre 0,65% et 6,25% par an</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Secteurs Section -->
    <section class="section secteurs-section">
      <div class="container">
        <h2 class="section-title">Secteurs Clé</h2>
        
        <div class="secteurs-grid">
          <div v-for="secteur in secteurs" :key="secteur.name" class="secteur-card card">
            <Icon :name="secteur.icon" size="48" class="secteur-icon" />
            <h4>{{ secteur.name }}</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- Projets Section -->
    <section class="section projets-section">
      <div class="container">
        <h2 class="section-title">Projets en cours</h2>
        
        <div class="projets-table">
          <div class="table-header">
            <div class="col-intitule">Intitulé</div>
            <div class="col-client">Client</div>
            <div class="col-montant">Montant</div>
            <div class="col-statut">Statut</div>
          </div>
          
          <div v-for="projet in projets" :key="projet.intitule" class="table-row">
            <div class="col-intitule">{{ projet.intitule }}</div>
            <div class="col-client">{{ projet.client }}</div>
            <div class="col-montant">{{ projet.montant }}</div>
            <div class="col-statut">{{ projet.statut }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Vous avez un projet d'infrastructure ?</h2>
          <p>Contactez-nous pour discuter de vos besoins en financement souverain</p>
          <NuxtLink to="/contact" class="btn btn-primary">
            Nous contacter
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const secteurs = [
  { name: 'Éducation', icon: 'mdi:school' },
  { name: 'Agriculture', icon: 'mdi:sprout' },
  { name: 'Santé', icon: 'mdi:hospital-building' },
  { name: 'Logement', icon: 'mdi:home-city' },
  { name: 'Énergie', icon: 'mdi:lightning-bolt' }
]

const projets = [
  {
    intitule: 'Travaux de réhabilitation de la route de la Côtière - Section Fresco-Sassandra-San Pedro-Grand Bereby',
    client: "Ministère de l'Équipement & l'Entretien Routier - Côte d'Ivoire",
    montant: '€250.000.000 (Phase 1: €150.000.000, Phase 2: €100.000.000)',
    statut: 'Décaissement 2e semestre 2023'
  },
  {
    intitule: 'Construction de 56 collèges de base 4',
    client: "Ministère de l'Éducation Nationale - Côte d'Ivoire",
    montant: '€137.000.000',
    statut: 'Closé en 2025'
  },
  {
    intitule: "Adduction en eau potable du Grand-Abidjan",
    client: "Office National de l'Eau Potable - Côte d'Ivoire",
    montant: '€278.000.000',
    statut: 'Closing en 2026'
  }
]

useHead({
  title: 'Financement Souverain - IMAAD Financial Group',
  meta: [
    { 
      name: 'description', 
      content: 'IMAAD Financial Group accompagne les États dans la mobilisation de financements pour des projets d\'infrastructure à fort impact.' 
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

.intro-image {
  position: relative;
}

.rounded-image {
  border-radius: 12px;
  width: 100%;
  height: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.intro-content h2 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.intro-content .subtitle {
  color: var(--text-light);
  font-weight: 400;
  margin-bottom: 1.5rem;
}

.intro-content p {
  line-height: 1.8;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.description-section {
  background: white;
}

.section-subtitle {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  color: var(--text-light);
  font-weight: 400;
}

.features-grid {
  margin-top: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
}

.feature-icon {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.feature-card h4 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.feature-card p {
  color: var(--text-light);
}

.secteurs-section {
  background: var(--bg-light);
}

.secteurs-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.secteur-card {
  text-align: center;
  padding: 2rem 1rem;
}

.secteur-icon {
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.secteur-card h4 {
  color: var(--primary-color);
  font-size: 1rem;
}

.projets-section {
  background: white;
}

.projets-table {
  margin-top: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.table-header {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr;
  background: var(--primary-color);
  color: white;
  padding: 1rem;
  font-weight: 600;
}

.table-row {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid var(--border-color);
  background: white;
}

.table-row:nth-child(odd) {
  background: var(--bg-light);
}

.table-row:hover {
  background: rgba(0, 61, 130, 0.05);
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

@media (max-width: 992px) {
  .secteurs-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .table-header,
  .table-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  
  .table-header > div,
  .table-row > div {
    padding: 0.5rem 0;
  }
  
  .table-header > div:not(:first-child) {
    display: none;
  }
  
  .table-row > div::before {
    content: attr(data-label);
    font-weight: 600;
    display: block;
    color: var(--primary-color);
    margin-bottom: 0.25rem;
  }
}

@media (max-width: 576px) {
  .secteurs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
