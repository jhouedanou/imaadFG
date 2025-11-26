#!/usr/bin/env python3
import re
import os

# Mapping of HTML files to Vue files
html_to_vue_mapping = {
    'Actualites.html': 'actualites.vue',
    'Contact.html': 'contact.vue',
    'Nos-activites.html': 'nos-activites.vue',
    'Notre-equipe.html': 'notre-equipe.vue',
    'partenariats-public-privée.html': 'partenariats-public-prive.vue',
    'Capital-Rique-.html': 'capital-risque.vue',
    'Financement-souverain-.html': 'financement-souverain.vue'
}

base_path = '/Users/houedanou/Documents/imaadFG'
vue_pages_path = '/Users/houedanou/Documents/imaadFG/nuxt-app/app/pages'

def extract_meta_info(html_content):
    """Extract meta information from HTML head"""
    title_match = re.search(r'<title>(.*?)</title>', html_content)
    title = title_match.group(1) if title_match else 'Page'
    
    keywords_match = re.search(r'<meta name="keywords" content="(.*?)"', html_content)
    keywords = keywords_match.group(1) if keywords_match else ''
    
    description_match = re.search(r'<meta name="description" content="(.*?)"', html_content)
    description = description_match.group(1) if description_match else ''
    
    return title, keywords, description

def convert_html_to_vue(html_file, vue_file):
    """Convert a single HTML file to Vue component"""
    html_path = os.path.join(base_path, html_file)
    vue_path = os.path.join(vue_pages_path, vue_file)
    
    if not os.path.exists(html_path):
        print(f"✗ {html_file} not found, skipping...")
        return False
    
    # Read the HTML file
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # Extract meta information
    title, keywords, description = extract_meta_info(html_content)
    
    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*)</body>', html_content, re.DOTALL)
    if not body_match:
        print(f"✗ Could not extract body from {html_file}")
        return False
    
    body_content = body_match.group(1).strip()
    
    # Create the Vue component
    vue_template = f'''<script setup lang="ts">
useHead({{
  title: '{title}',
  meta: [
    {{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' }},
    {{ charset: 'utf-8' }},
    {{ name: 'keywords', content: '{keywords}' }},
    {{ name: 'description', content: '{description}' }},
    {{ name: 'theme-color', content: '#1d6df0' }},
    {{ property: 'og:title', content: '{title}' }},
    {{ property: 'og:description', content: '{description}' }},
    {{ property: 'og:type', content: 'website' }}
  ],
  link: [
    {{ rel: 'icon', href: 'https://assets.nicepagecdn.com/23954ad7/5333801/images/Fichier3banque.png' }},
    {{ rel: 'stylesheet', href: 'https://capp.nicepage.com/cf7c9c13fc8a2049173f22a983fde2065a619052/nicepage.css', media: 'screen' }}
  ],
  script: [
    {{ src: 'https://capp.nicepage.com/assets/jquery-3.5.1.min.js', defer: true }},
    {{ src: 'https://capp.nicepage.com/cf7c9c13fc8a2049173f22a983fde2065a619052/nicepage.js', defer: true }}
  ],
  bodyAttrs: {{
    class: 'u-body u-overlap u-xl-mode',
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
    
    with open(vue_path, 'w', encoding='utf-8') as f:
        f.write(vue_template)
    
    print(f"✓ Successfully converted {html_file} to {vue_file}")
    return True

# Convert all files
print("Converting HTML files to Vue components...")
print("=" * 60)

converted_count = 0
for html_file, vue_file in html_to_vue_mapping.items():
    if convert_html_to_vue(html_file, vue_file):
        converted_count += 1

print("=" * 60)
print(f"Conversion complete: {converted_count}/{len(html_to_vue_mapping)} files converted")
