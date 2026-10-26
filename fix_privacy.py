with open('src/components/PrivacyPolicy.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace <all_urls> with &lt;all_urls&gt;
content = content.replace('<all_urls>', '&lt;all_urls&gt;')

with open('src/components/PrivacyPolicy.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done')
