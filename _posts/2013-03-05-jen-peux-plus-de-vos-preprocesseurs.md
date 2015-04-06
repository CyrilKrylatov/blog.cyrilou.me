---
title: 'J&rsquo;en peux plus de vos préprocesseurs.'
author: Cyril Krylatov
layout: post
permalink: /2013/03/05/jen-peux-plus-de-vos-preprocesseurs/
dsq_thread_id:
  - 1397252631
categories:
  - Intégration web
tags:
  - haine
  - préprocesseur
---
Hier soir, le collègue Rémy (qui, pour la petite histoire, ne travaille pas dans la même pièce que moi (d&rsquo;un point de vue purement architectural) mais à 10 mètres à ma droite, nous ne pouvons nous voir mais la magie d&rsquo;Internet fait que nous ne communiquons QUE par Twitter, n&rsquo;est-ce pas magnifique ? Intro assez nulle je l&rsquo;accorde, mais il faut bien meubler quelque chose pour amener ma vraie intro que voici :) tweetait la chose suivante :

<blockquote class="twitter-tweet">
  <p>
    Codepen, c&rsquo;est super mais quand on tombe là-dessus <a href="http://t.co/p8QgY6sqyh" title="http://codepen.io/chriscoyier/pen/gfdDu">codepen.io/chriscoyier/pe…</a> (HAML + SCSS) c&rsquo;est impossible à réutiliser.<a href="https://twitter.com/search/%23backtobasics">#backtobasics</a>
  </p>
  
  <p>
    &mdash; Rémy Barthez (@remybarthez) <a href="https://twitter.com/remybarthez/status/308628549408018432">March 4, 2013</a>
  </p>
</blockquote>



C&rsquo;est assez extraordinaire d&rsquo;un point de vue général de voir le nombre de tutoriels qui ne sont pas rédigés en CSS pur mais utilisant un préprocesseur. À chaque fois que je lis des &laquo;&nbsp;*how to do that thing with SASS & HAML*&nbsp;&raquo; où &laquo;&nbsp;*thing*&nbsp;&raquo; est un sujet qui m&rsquo;intéresse hé bien, je ne peux pas réutiliser/comprendre le code qui est présenté dans la démonstration (dans les rares cas où j&rsquo;en ai besoin, hein, parce que bon, hein, on va pas se mentir, dans 90% des cas je n&rsquo;en ai que cure).

C&rsquo;est parfait.

J&rsquo;ai associé ça à 2 choses différentes.

La première, c&rsquo;est un excès égocentrique (&laquo;&nbsp;HOW FUCK YOU, LOOK AT ME, I&rsquo;M USING A FUCKING PREPROCESSOR, LOOK AT MY BALLS, LOOK, I&rsquo;M SO AWESOME, YOU CAN&rsquo;T USE MY CODE, WHOSMAD?&nbsp;&raquo;) des gens qui proposent une démo avec ces préprocesseur font un sacré bon en arrière. Pour moi, le CSS est un langage côté client : je vais sur n&rsquo;importe quel site pour voir comment est fait une inté, clique droit, expecter l&rsquo;élément, j&rsquo;ai le code, parfait. Alors que là, sur la démo présentée par le jeune Rémy sur codepen.io ou sur un quelconque tuto, hé bien, I&rsquo;m screwed (next post will be in english, I think). Je ne peux pas accéder à une technique basé sur un langage qui est de base lisible, j&rsquo;adore, bravo les gars.

La deuxième, qui découle de la première, c&rsquo;est qu&rsquo;en 2000/2005 nous avions exactement la même chose, et ça s&rsquo;appelait flash. Sauf que les applis Flash, elles, avaient le mérite d&rsquo;être des applications compilées du coup, impossible d&rsquo;accéder à leur code source. AH.

Bref, voilà, bravo les gars pour ce merveilleux bon en arrière dans le Web, continuez comme ça, j&rsquo;adore.

PS: ça me fait penser que ça fait 6 mois dans ma tête que j&rsquo;ai un article qui parle de faire un comparatif intégration / Starcraft II, voilà.

PS2 & inb4 je ne parle ici que du code que vous décidez de montrer au monde hein, non qu&rsquo;on soit clair, j&rsquo;ai rien contre les préprocesseurs du moment que je ne les utilise pas & que j&rsquo;en vois pas !

EDIT: merci à [Hugo Giraudel][1] dans les commentaires pour m&rsquo;avoir fait édité le côté &laquo;&nbsp;Open Source&nbsp;&raquo; de l&rsquo;article qui n&rsquo;était pas du tout approprié

EDIT2: y&rsquo;a plein de personnes &#8211; des freelances, donc habitués à travailler ~ seul en préprod &#8211; qui me rient au nez parce qu&rsquo;apparemment, je ne veux pas utiliser les préprocesseurs. D&rsquo;une part, je m&rsquo;en sors très bien sans préprocesseurs & avec simplement Sublime Text et SURTOUT TextExpander.app. Les deux combinés lorsqu&rsquo;on sait les utiliser sont à l&rsquo;origine d&rsquo;un gain de temps non négligeable.  
Ensuite, utiliser un préprocesseur sur un Magento où je ne serai de toute façons pas seul, comme ça se passe pour le dev qui voudra modifier mon CSS généré avec un préprocesseur et qu&rsquo;ensuite je dois repasser derrière ? J&rsquo;édite le CSS sans repasser par le préprocesseur ? Je recompile le CSS &laquo;&nbsp;en préprocesseur&nbsp;&raquo; ?  
Et puis mon article ne dit pas &laquo;&nbsp;n&rsquo;utilisez pas les préprocesseurs c&rsquo;est de la merde&nbsp;&raquo; PUTAIN DE-

 [1]: http://twitter.com/HugoGiraudel