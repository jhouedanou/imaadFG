#!/usr/bin/env python3
import re
import os

vue_pages_path = '/Users/houedanou/Documents/imaadFG/nuxt-app/app/pages'
vue_files = [
    'index.vue',
    'actualites.vue',
    'contact.vue',
    'nos-activites.vue',
    'notre-equipe.vue',
    'partenariats-public-prive.vue',
    'capital-risque.vue',
    'financement-souverain.vue'
]

def remove_inline_styles(file_path):
    """Remove inline <style> tags from Vue template section"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove all inline <style> tags and their content
    # Pattern: <style class="...">...</style>
    content = re.sub(r'<style[^>]*>.*?</style>', '', content, flags=re.DOTALL)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return True

print("Removing inline <style> tags from Vue templates...")
print("=" * 60)

fixed_count = 0
for vue_file in vue_files:
    file_path = os.path.join(vue_pages_path, vue_file)
    if os.path.exists(file_path):
        if remove_inline_styles(file_path):
            print(f"✓ Fixed {vue_file}")
            fixed_count += 1
    else:
        print(f"✗ {vue_file} not found")

print("=" * 60)
print(f"Fixed {fixed_count}/{len(vue_files)} files")
