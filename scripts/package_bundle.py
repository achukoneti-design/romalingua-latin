#!/usr/bin/env python3
import os
import zipfile

def create_bundle():
    os.makedirs('public', exist_ok=True)
    zip_path = 'public/romalingua_bundle.zip'
    
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as z:
        if os.path.exists('index.html'):
            z.write('index.html', arcname='index.html')
        if os.path.exists('manifest.json'):
            z.write('manifest.json', arcname='manifest.json')
        if os.path.exists('.nojekyll'):
            z.write('.nojekyll', arcname='.nojekyll')
        
        # Netlify SPA redirect rule
        z.writestr('_redirects', '/*  /index.html  200\n')
        
        # Cloudflare SPA headers / rule
        z.writestr('_headers', '/*\n  X-Frame-Options: SAMEORIGIN\n')
        
        # Instructions file
        z.writestr('DEPLOY_INSTRUCTIONS.txt', '''=== ROMALINGUA FREE BROWSER DEPLOYMENT (ZERO 'AI' IN DOMAIN) ===

METHOD 1: NETLIFY DROP (Recommended - 10 Seconds, No GitHub, 100% Free)
1. In your browser, open https://app.netlify.com/drop
2. Drag and drop this folder into the browser window.
3. Your site is instantly live at:
   https://<custom-name>.netlify.app
   (Zero 'ai' in the URL! Completely bypasses workplace web filters)

METHOD 2: CLOUDFLARE PAGES DIRECT UPLOAD (No GitHub, 100% Free)
1. Open https://dash.cloudflare.com/pages
2. Click 'Create application' -> 'Pages' -> 'Upload assets'.
3. Name your project and upload this folder.
4. Your site is live at:
   https://<project-name>.pages.dev
   (Zero 'ai' in the URL!)

METHOD 3: OFFLINE DESKTOP PLAY (Zero Setup)
Double-click 'index.html' to open and play directly in Chrome, Edge, Safari, or Firefox without any internet connection!
''')
    
    print(f'Successfully generated {zip_path} ({os.path.getsize(zip_path)} bytes)')

if __name__ == '__main__':
    create_bundle()
