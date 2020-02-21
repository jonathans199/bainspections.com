rm -rf dist/
npm run build -p
rsync -azP -e 'ssh -p 2222' dist/* root@185.39.11.13:/usr/share/nginx/asoftio/clients/bainspections/prod/ 
