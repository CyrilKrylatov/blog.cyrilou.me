---
title: 'Les conseils à donner aux débutants en intégration'
author: Cyril Krylatov
layout: post
permalink: /2016/12/2/conseils-debutants-integration/

---

Nouvel intégrateur dans une équipe, pas à l'aise, pas trop de méthodo, uniquement le 4/5 en WordPress sur son portfolio, 5/5 en HTML et CSS, 3/5 en JavaScript pour se réconforter…
À toutes fins utiles, voici une liste exhaustive de choses à mettre en place avant même de mettre les mains sur un clavier pour éviter bien des soucis.
Volontairement, je laisse de côté toute la vision purement technique du sujet, concentrons-nous plutôt sur la méthodologie.

<!--more-->

Comment appréhender une nouvelle intégration ?
À mon avis, étant débutant, il ne faut pas se lancer directement dedans. Prendre quelques dizaines de minutes et réflechir à comment appréhender les 40 maquettes qui viennent de nous arriver dans les mains et les découper en amont.

## Découper les maquettes

Il y a très longtemps, quand j'ai commencé l'intégration, je suis tombé sur cet article de [@br1o](https://twitter.com/br1o) "[Conception dans le navigateur avec HTML5 & CSS3 (amélioration progressive)](https://4design.xyz/conception-dans-le-navigateur-avec-html5-css3)" et surtout la photo de la feuille du point numéro 2 de son explication :

[![Ébauche d'une page web](https://i1.wp.com/4design.xyz/wp-content/uploads/2010/08/04-esquisse.png?resize=600%2C716)](https://4design.xyz/conception-dans-le-navigateur-avec-html5-css3)

Et cette image ne m'a jamais quitté. J'ai toujours commencé par faire une re-découpe des maquettes sur mon petit cahier pour savoir comment j'allais découper les différents blocs.

Ça permet d'avoir une vision globale des blocs, quoi intégrer exactement et où le placer.

## Identifier les éléments qui se répètent

Sauf si le designer est vraiment méchant (si c'est le cas, barrez-vous) il introduira des éléments récurrents dans son design. 

Ça passe par les titres, les paragraphes, un vilain slider, les boutons, les styles de blocs, les listes, les formulaires, les messages d'erreurs et j'en passe.

N'hésitons pas non plus à y mettre le layout (pour vérifier la largeur du site) avec les différents breakpoints à valider avec le designer.

Il est primordial de commencer par intégrer dans une page tout à fait à part ces éléments. Comme ça, maintenant qu'ils sont intégrés, il n'y aura plus qu'à copier le markup là où il faut et hop c'est fait et ce qui a été fait n'a plus besoin d'être fait. 80% du travail a été fait durant cette étape.

Il ne faut pas hésiter à faire valider au designer cette étape. S'il valide 80% de l'intégration c'est banco.

## Header, footer

Cette étape peut également être faite avant le styleguide, hein, j'suis pas ta mère tu fais bien ce que tu veux bref, le header et le footer ensuite pour avancer de 10% l'intégration globale.

Le footer version mobile ça va, généralement on s'en fout la grille Bootstrap le fait tout seul par contre le header est hyper important pour l'ergo. Généralement les designers ont une idée précise de l'animation etc.

Ça va prendre un peu de temps mais encore une fois, ce qui a été fait n'est plus à faire.

## Le reste

Bon, on a 90% du site, le reste c'est de l'assemblage comme à l'usine. Il y a besoin de tel bouton, tel formulaire ? Pas de souci c'est déjà intégré et validé par le designer, y'a plus qu'à copier le markup du styleguide et hop on y va.

## Une page après l'autre

Si le styleguide n'est pas validé par le designer (ou le client), c'est pas la peine de continuer.

Si le header et le footer ne sont pas validés par le designer (ou le client), c'est pas la peine de continuer.

Si la liste des articles, si un single article, si une page de contenu, si une liste de produits, si le tunnel d'achat n'est pas validé par le designer, ce n'est pas la peine de continuer.

En effet, il n'y a rien de pire que de faire toute les pages d'un coup et ensuite avoir des retours sur telle page, telle autre page, telle autre page etc.

Il n'y a rien de pire que de trop s'éparpiller lors d'une intégration. Ça fait perdre du temps et de la patience à tout le monde, c'est pénible la mort, c'est le pire qui puisse arriver.

Non, vraiment, une page ou un groupe de page qui se ressemblent les unes à la suite des autres. Vaut mieux avoir 5 retours sur une page que 100 retours sur 20 pages.

## Pixel perfect

Si le designer a mis tel gris, c'est pas pour en mettre un autre.

Si le designer a mis telle hauteur de ligne, c'est qu'il y a une raison.

Si le designer a décidé qu'il y aurait 4 blocs sur une ligne, c'est pas pour qu'il y en ait 3 et le dernier en dessous.

Si l'inté a été démarrée avec un JPG (donc sans le fichier PSD ou Sketch), arrêtez tout, c'est mal. C'est impossible de s'en sortir en commençant comme ça.

Pour s'assurer du bon respect de la DA, le merveilleux [PerfectPixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi) (et équivalents) est là pour aider.

Si des pixels dépassent, ça se verra très vite et c'est pas la peine de demander un recettage si c'est le cas.

Si une couleur de texte ou de bordure n'est pas la bonne, il ne faudra pas demander au designer comment faire pour récupérer la bonne couleur d'une part et d'autre part, il n'hésitera pas à dire que quelque chose ne va pas.

## Le JavaScript

Toujours à la fin sauf si vraiment nécessaire. Ça évitera de s'éparpiller de trop, chaques choses en son temps.

## Pour finir, demandez de l'aide

Il ne faut surtout pas rester enfermé dans son coin. Il n'y a rien de pire que de passer de longues dizaines de minutes bloqué et qu'au final ça n'aille pas. 

Vous ne savez pas intégrer quelque chose dans WordPress ? Demandez au développeur WordPress ou au directeur technique de vous le faire.

Vous ne savez pas gérer les layouts sur Magento ? Demandez au développeur Magento ou au directeur technique de vous le faire.

Vous ne savez pas comment gérer un formulaire responsive ? Demandez au collègue intégrateur comment le faire.

Il n'y a aucune honte à demander quelque chose qu'on ne sait pas faire. Il m'arrive très souvent de demander aux designers ou aux développeurs comment faire quelque chose.

Je sais que les nouveaux hésitent beaucoup à souvrir aux autres. Or, c'est vraiment la pire des choses à faire : ne pas demander.

N'hésitez vraiment pas à demander. Demandez, demandez, demandez.

Appelez à l'aide, pas de souci, quelqu'un vous répondra, normalemment.
