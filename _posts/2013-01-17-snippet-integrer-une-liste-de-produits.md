---
title: 'Snippet : intégrer une liste de produits'
author: Cyril Krylatov
layout: post
permalink: /2013/01/17/snippet-integrer-une-liste-de-produits/
dsq_thread_id:
  - 1405369276
categories:
  - Intégration web
  - Snippets
tags:
  - intégration
  - product list
  - snippet
---
Ce que j&rsquo;aime bien lorsque je visite des sites, en dehors de l&rsquo;aspect visuel, c&rsquo;est l&rsquo;aspect technique. Ainsi, il m&rsquo;arrive, après avoir visité un site, de voir comment est intégré quelque chose. Du coup, un coup d&rsquo;inspecteur d&rsquo;éléments et parfois, lol omg en particulier sur une **liste de produits** avec un block container & des childs en display:inline-block, float:left & on gère les margin à base de :nth-child();. Bon, c&rsquo;est marrant à voir, selectivzr.js fera le travail pour émuler ça sur IE, mais pourquoi faire compliqué & appeler un JS lorsque l&rsquo;on peut faire du premier coup du cross-browser ?

La solution, la voici :



Ce qui est pas mal avec cette méthode, c&rsquo;est que si je veux soit augmenter la largeur de la colonne &#8211; ou la réduire de +/-320 pixels, soit augmenter/réduire la taille de mes &laquo;&nbsp;vignettes&nbsp;&raquo;, aucun soucis MAGIE.

Voilà, tout simplement. Bon, je parle d&rsquo;une liste de produits parce que je fais essentiellement du Magento, mais cela s&rsquo;applique naturellement à une liste d&rsquo;articles de blogs et j&rsquo;en passe.

Article simple, code simple, mais pas forcément connu de tous.

Oh and I probably should have written this article in English but I&rsquo;m afraid that I haven&rsquo;t enough skill to do it. We&rsquo;ll see later, so.

PS: astuce visible sur [CSSNormalize][1], allez voir, ça vous changera de vos conneries de &laquo;&nbsp;framework&nbsp;&raquo; CSS à la con, tiens.

 [1]: http://lab.darklg.me/CSSNormalize/#normalize-gallery