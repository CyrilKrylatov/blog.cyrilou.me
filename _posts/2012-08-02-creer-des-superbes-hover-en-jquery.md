---
title: Créer des superbes hover en Jquery
author: Cyril Krylatov
layout: post
permalink: /2012/08/02/creer-des-superbes-hover-en-jquery/
dsq_thread_id:
  - 1397252111
categories:
  - Geekage intenseif
  - Intégration web
tags:
  - CSS
  - front-end
  - hover
  - intégration
  - Javascript
---
Nan, j&rsquo;déconne Aha, qu&rsquo;est-ce qu&rsquo;on peut se marrer putain, &laquo;&nbsp;en Jquery&nbsp;&raquo;, oh le con, oh le con !

Enfin, on déconne on déconne, mais c&rsquo;est ce que propose [cet article][1] : un plugin jQuery pour faire des hover. Alors, oui, c&rsquo;est cool, ça fait des jolis hover un peu différents de ce qu&rsquo;on peut voir. C&rsquo;est configurable à fond, on peut choisir exactement quel temps d&rsquo;animation on veut wootiloliwoot !1

Dans cette phrase se cache, en mon sens & d&rsquo;un point de vue technique, deux erreurs. La première, c&rsquo;est qu&rsquo;on va pas se le cacher, jQuery est une usine à gaz. Alors, l&rsquo;utiliser uniquement pour des animates qu&rsquo;on peut faire en CSS, c&rsquo;est on ne peut plus lourd. Deuxième : les temps d&rsquo;animation, à la ms, l&rsquo;utilisateur n&rsquo;en a strictement rien à branler. Tout simplement.  
Après, on peut me reprocher que mes animations ne se feront pas sur IE9-. Ce sur quoi il faut relativiser : est-ce qu&rsquo;il y a encore beaucoup d&rsquo;utilisateurs d&rsquo;IE7 et 8 ? Méritent-t&rsquo;ils qu&rsquo;on ajoute, avec la lenteur de leur navigateur, la lenteur de jQuery ? Est-ce qu&rsquo;à défaut de gagner une jolie animation (rien que pour eux), on ne les priverait pas de cette animation pour garder une page légère (inb4: [Graceful degradation][2]) ? Voici les questions à se poser. Auxquelles j&rsquo;ai répondu. Hé.

Du coup, j&rsquo;avais une petite heure à rien faire, et j&rsquo;ai fait ça :

<p style="text-align:center;">
  <a href="https://github.com/DaPo/CSSHover"><img src="http://blog.c-krylatov.com/wp-content/uploads/2012/08/hover.jpg" alt="hover plz" title="hover plz" width="640" height="340" /></a>
</p>

Un petit .html, un petit .css, et hop, j&rsquo;ai refait les animations de l&rsquo;article sus-cité. En pur CSS. Rien de bien méchant, je ne me proclame pas roi du CSS ici.  
Je veux juste mettre le doigt sur la chose suivante : avant de vous lancer dans des outils infernaux qui pèsent lourd et qui émulent un autre outil qui n&rsquo;a pas besoin de sur-couche pour fonctionner, apprenez à utiliser l&rsquo;outil &laquo;&nbsp;natif&nbsp;&raquo; qui ne vous fera pas forcément perdre + de temps que son collègue qui lui, prendra bien plus de ressources.

Ah oui, j&rsquo;ai [créé un repo Git][3] pour ça, histoire de faire genre je sais créer des repo Git. Bitches love Git.

PS : un callback en JS pour les animations / transitions ? [C&rsquo;est par ici][4].

PS2 : pour les sales pauvres qui n&rsquo;ont jamais utilisé Git de leur vie, j&rsquo;ai créé un sous-domaine pour y mettre mes démos. Du coup, pour celui là, ça se passe [sur ce lien][5].

 [1]: http://buildinternet.com/project/mosaic/
 [2]: http://accessites.org/site/2007/02/graceful-degradation-progressive-enhancement/
 [3]: https://github.com/DaPo/CSSHover
 [4]: https://github.com/mlbli/onComplete
 [5]: http://demo.c-krylatov.com/csshover/