---
title: 'L&rsquo;outil de la flemme ultime : convertir des pixels en pourcentage'
author: Cyril Krylatov
layout: post
permalink: /2012/04/07/loutil-de-la-flemme-ultime-convertir-des-pixels-en-pourcentage/
dsq_thread_id:
  - 1397252037
categories:
  - Geekage intenseif
  - Javascript
tags:
  - convertir pixels pourcentage
  - Javascript
  - jQuery
---
Historiquement, ça s&rsquo;est passé comme ça : sur un projet où nous travaillons / avons travaillé en étroite collaboration avecKévin</a>, a été décidé de passer des tableaux avec des width non plus en pixels mais en pourcentage. Ainsi, dès que le container de ce tableau change de taille, le tableau changera lui, ne changera pas de taille à proprement parler mais garder ses proportions qui découlent de l&rsquo;utilisation du pourcentage. Ainsi, 47% d&rsquo;un container de 600 pixels sera toujours 47% d&rsquo;un container de 400 pixels.

Partant de là, je me suis pris 10 petites minutes pour faire [cet outil là][1] : une simple règle de trois pour les flemmards de mon genre. On met la valeur du container dans le premier input, la largeur du child (issue de la largeur en pixels du .psd que l&rsquo;on intègre) et hop, valeur en %.

Mais j&rsquo;ai voulu aller plus loin et me suis demandé les choses suivantes : Et s&rsquo;il y a plusieurs childs, pourquoi ne pas faire un aperçu du container et desdits childs ? Pourquoi ne pas en profiter pour prendre un peu de niveau en JavaScript et particulièrement apprendre à utiliser la librairie jQuery ? Pourquoi ne pas me lancer dans un petit projet ? Pourquoi ne pas en profiter pour mettre un peu de cohérence dans mes projets avec notamment, l&rsquo;utilisation de [GitHub.com][2] ? Pourquoi ne pas en profiter pour faire partager ce début d&rsquo;apprentissage à n&rsquo;importe qui avec du code sur-commenté ?

Est donc né ce fabuleux convertisseur de pixels en pourcentage avec un aperçu du container et de ses childs.

<p style="text-align:center;">
  <img src="/uploads/2012/04/convertisseur_preview.jpg" alt="Convertir des pixels en pourcentage" title="Convertir des pixels en pourcentage" width="640" height="678" class="size-full wp-image-323" /> 
</p>

Pour clone le projet sur GuitHub, c&rsquo;est [par ici que ça se passe][3]. Si vous n&rsquo;avez pas GitHub, et bien, tant pis.

Un outil qui vient de débuter, encore beaucoup de choses à venir, dont un vrai design, une vraie ergonomie, quelques autres features (notamment la place qui reste sur le container), de l&rsquo;optimisation (beaucoup), des gifs animés, de la musique impossible à arrêté, du gros Rick Roll des familles et j&rsquo;en passe !

Edit: &laquo;&nbsp;pourquoi jQuery&nbsp;&raquo;, ai-je oublié de répondre dans cet article : parce que jQuery est facile d&rsquo;utilisation, pour un premier pas dans ce domaine, j&rsquo;ai trouvé que c&rsquo;était le plus cohérent à utiliser. Egalement, c&rsquo;est ce qu&rsquo;on (Colorz) utilise comme librairie par défaut pour le dev front-end sur nos Magento, alors pourquoi pas ? J&rsquo;ai trouvé que c&rsquo;était deux bonnes raisons pour commencer par jQuery, puis m&rsquo;orienter vers du javascript pur / Mootools une fois que j&rsquo;aurai de solides connaissances avec jQuery. Voilà.

 [1]: http://dl.dropbox.com/u/6058285/flemmeinte/regledetrois.html
 [2]: http://github.com/
 [3]: https://github.com/DaPo/Convertisseur-pixels----pourcentage