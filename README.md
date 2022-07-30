Etapes :
- je n'ai pas vu de fichier package.json dans ton github donc je tape la commande npm init -y dans le terminal
- puis npm install @11ty/eleventy
- le dossier node_modules et les fichiers package.json et package-lock.json vont se créer.
- dans le fichier gitignore tu mets node_modules et public. J'ai enlevé netlify pour être sûr.
- A partir de là, tu peux déployer ton site.
- Sur netlify, à la création du site, tu vas chercher ton repository et avant de cliquer sur deploy site tu remplaces, dans Publish directory, _site par public.
- normalement là tu vois ton site mais le js ne marche pas
- certains chemins sont à changer
- 