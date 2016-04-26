---
title: 'Pas peu fier de mon lazy-load'
author: Cyril Krylatov
layout: post
permalink: /2016/04/25/pas-peu-fier-de-mon-lazy-load/
dsq_thread_id:
  - 
---

Histoire de ne pas tuer le rythme de croisière de publication d'articles de ce blog (pour cette année, on est à un tous les quatre mois, enfin sans compter l'année dernière sinon ça nous fait un tous les… 11 mois 😱), je vais vous parler d'un truc que j'ai fait pour [5euros](https://5euros.com) dont je suis assez content.

<!--more-->

On avait un énorme problème sur 5euros, c'était le temps de chargement des pages.
En effet, comme vous pouvez le constater sur la page d'accueil, il y a énormément d'images. Et encore plus sur une [page de catégorie](https://5euros.com/categorie/graphisme).

Sur la homepage, nous avions 68 requêtes HTTP, 1.4 MB à télécharger, presque 5 secondes pour télécharger tout ça. Bref, pas foufou.
Avec autant d'images à charger, nous avions un effet de glitch avec des carrés blanc en lieu et place des images (le temps qu'elles n'arrivent) qui était visuellement désagréable.

L'effet peut être reproduit sur [http2demo](http://www.http2demo.io/) où l'on voit clairement les images qui arrivent les unes après les autres. Bon, nous étions déjà en HTTP/2, c'est évidemment pas le sujet ici. Je mets cet exemple uniquement pour l'effet visuel.

Avec l'arrivée du lazy loading, nous avons allégé tout ça.

Toujours 68 requêtes HTTP, 1.3 MB à télécharger et c'est là que ça devient intéressant : 1.65 seconde pour télécharger toute la page. Nous avons donc gagné un peu plus de 4 secondes pour que le DOM soit complètement chargé. Et ça, ça change tout. Tant pour l'utilisateur que pour les robots d'indéxation que pour nous.

Voici ce qu'on a fait conjointement entre le [dev back](https://twitter.com/yOye_) et le [DA](https://twitter.com/joffrey).

## Fonctionnement

Techniquement, voilà comment ça se passe :

* Quand un vendeur upload des images pour illustrer son service, nous prenons la première (qui va s'afficher dans la miniature sur la home et la page de catégorie) et la dégradons (on prend les 10 premiers pixels en hauteur et largeur et on l'étend à 270x170 pixels)
* On l'encode en base64 (la chaîne prend moins de place qu'un fichier JPG)
* L'image dégradée est affichée telle quelle avec un blur de 15 pixels généré en CSS3.
* L'URL de l'image non dégradée, on la stock dans un `data-attribute` quelque part
* On lance le téléchargement de l'image finale en JavaScript. Elle a un style qui fait qu'elle soit transparente pour avoir un effet visuel d'apparition
* Une fois que l'image finale est chargée (`onload`), on lui enlève sa transparence.

## J'aime pas le JavaScript

Et pourtant j'en ai fait. ᕕ( ᐛ )ᕗ

<script src="https://gist.github.com/DaPo/6019eb4188bb8c90bb1367d805479f0c.js"></script>

Niveau CSS, au final, pas grand chose : 

* Le wrapper des deux images, on le position relative
* L'image en base64 dégradée, pour éviter de trop afficher le fait qu'elle soit dégradée, on la blur à 15px.
* L'image finale, position absolute, top 0, left 0.

Deux choses.

1. L'image dégradée, on lui rajoute un `transform: rotate(0);`. Sinon, sur Safari, malgré un `overflow: hidden` sur le parent, le flou va prendre les pixels à côté de l'image et les flouter également.
2. L'histoire de la position relative sur le parent et de l'absolue sur l'image finale, c'est pour qu'elle recouvre l'image dégradée. Le wrapper ayant la taille de l'image dégradée (qui est la même que l'image finale), pas besoin de lui spécifier de taille. #astuce

Je me rends compte en relisant mon code qu'on a pas forcément besoin d'autant de class et que je pourrais tout faire avec le `data-attribute` du parent… Nous verrons ça à un autre moment.

That's all folks!

Hésitez pas à me dire en commentaire du [Gist](https://gist.github.com/DaPo/6019eb4188bb8c90bb1367d805479f0c) ou ici à quel point ce code est pourrav'.