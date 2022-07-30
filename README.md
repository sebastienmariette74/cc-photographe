Etapes :
- je n'ai pas vu de fichier package.json dans ton github donc je tape la commande npm init -y dans le terminal
- puis npm install @11ty/eleventy
- le dossier node_modules et les fichiers package.json et package-lock.json vont se créer.
- dans le fichier gitignore tu mets node_modules et public. J'ai enlevé netlify pour être sûr.
- A partir de là, tu peux déployer ton site.
- Sur netlify, à la création du site, tu vas chercher ton repository et avant de cliquer sur deploy site tu remplaces, dans Publish directory, _site par public.
- normalement là tu vois ton site mais le js ne marche pas
- certains chemins sont à changer
- ton fichier script.js, tel qu'il est là, il ne peut pas être copié dans public. 
- donc mets script.js dans un dossier js dans src.
- puis dans .eleventy.js rajoute les lignes
  - eleventyConfig.addPassthroughCopy("./src/js")
  - eleventyConfig.addPassthroughCopy("./src/lien") (même problème avec le dossier lien)
- enfin dans ta balise script de tes pages njk, modifies le chemin comme ceci : /js/script.js
- là ton js devrait fonctionner en local
- push tout ça et ton site devrait fonctionner aussi



