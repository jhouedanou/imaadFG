<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-section">
        <NuxtImg 
          :src="site.logo" 
          :alt="site.name" 
          width="120" 
          height="48"
          class="footer-logo"
        />
        <p class="tagline">{{ site.tagline }}</p>
      </div>

      <div class="footer-section">
        <h3>Navigation</h3>
        <ul>
          <li v-for="item in navigation" :key="item.id">
            <NuxtLink :to="localePath(item.path)">
              {{ $t(`nav.${item.id}`) }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Contact</h3>
        <p>
          <Icon name="mdi:email" /> 
          <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a>
        </p>
        <p>
          <Icon name="mdi:phone" /> 
          <a :href="`tel:${site.contact.phone}`">{{ site.contact.phone }}</a>
        </p>
      </div>

      <div class="footer-section">
        <h3>Suivez-nous</h3>
        <div class="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Icon name="mdi:linkedin" size="24" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Icon name="mdi:twitter" size="24" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Icon name="mdi:facebook" size="24" />
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} {{ site.name }}. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { site, navigation } = useSiteData()
const localePath = useLocalePath()
</script>

<style scoped>
.site-footer {
  background: #1a202c;
  color: white;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
  color: #63b3ed;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #e2e8f0;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #63b3ed;
}

.footer-logo {
  margin-bottom: 1rem;
}

.tagline {
  color: #a0aec0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2d3748;
  transition: all 0.3s;
}

.social-links a:hover {
  background: #63b3ed;
  transform: translateY(-2px);
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #2d3748;
  color: #a0aec0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
  }
}
</style>
