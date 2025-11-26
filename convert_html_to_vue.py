#!/usr/bin/env python3
import re

# Read the HTML file
with open('/Users/houedanou/Documents/imaadFG/index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Extract body content (everything between <body> and </body>)
body_match = re.search(r'<body[^>]*>(.*)</body>', html_content, re.DOTALL)
if body_match:
    body_content = body_match.group(1).strip()
    
    # Write the Vue component
    vue_template = f'''<script setup lang="ts">
useHead({{
  title: 'Accueil',
  meta: [
    {{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' }},
    {{ charset: 'utf-8' }},
    {{ name: 'keywords', content: 'corporate, ​​We have the knowledge and experience, 01, 02, ​​We run all kinds of IT services that vow your success, ​We believe that people can be truly happy on the outside only after reaching happiness within., ​Looking For Visa Applications Just Call Us!, Meet The Team, ​Large payments volume or unique business model?, ​Small Pricing Plan For Your Creative Business' }},
    {{ name: 'description', content: '' }},
    {{ name: 'theme-color', content: '#1d6df0' }},
    {{ property: 'og:title', content: 'Accueil' }},
    {{ property: 'og:description', content: '' }},
    {{ property: 'og:type', content: 'website' }}
  ],
  link: [
    {{ rel: 'canonical', href: 'https://.nicepage.io/' }},
    {{ rel: 'icon', href: 'https://assets.nicepagecdn.com/23954ad7/5333801/images/Fichier3banque.png' }},
    {{ rel: 'stylesheet', href: 'https://capp.nicepage.com/cf7c9c13fc8a2049173f22a983fde2065a619052/nicepage.css', media: 'screen' }}
  ],
  script: [
    {{ src: 'https://capp.nicepage.com/assets/jquery-3.5.1.min.js', defer: true, class: 'u-script' }},
    {{ src: 'https://capp.nicepage.com/cf7c9c13fc8a2049173f22a983fde2065a619052/nicepage.js', defer: true, class: 'u-script' }},
    {{
      type: 'application/ld+json',
      children: JSON.stringify({{
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Imaad capital Partners ",
        "logo": "https://assets.nicepagecdn.com/23954ad7/5333801/images/Fichier1AMAAD.png",
        "sameAs": []
      }})
    }}
  ],
  bodyAttrs: {{
    class: 'u-body u-overlap u-xl-mode',
    'data-home-page': 'Accueil.html',
    'data-home-page-title': 'Accueil',
    'data-path-to-root': '/',
    'data-include-products': 'false',
    'data-lang': 'fr'
  }}
}})
</script>

<template>
{body_content}
</template>

<style scoped>

</style>
'''
    
    with open('/Users/houedanou/Documents/imaadFG/nuxt-app/app/pages/index.vue', 'w', encoding='utf-8') as f:
        f.write(vue_template)
    
    print("✓ Successfully converted index.html to index.vue")
else:
    print("✗ Could not find body content")
