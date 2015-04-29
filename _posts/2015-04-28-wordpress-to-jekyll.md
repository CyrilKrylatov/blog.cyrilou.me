---
title: De WordPress à Jekyll
author: Cyril Krylatov
layout: post
permalink: /2015/28/04/wordpress-to-jekyll
dsq_thread_id:
  - 
---

Salut, c'est Cyril. Voici un article technique (pour changer) créé à la demande de [@LegZ](https://twitter.com/LegZ/status/589863615597039616) concernant ma transition de WordPress à Jekyll.

<!--more-->

## Pourquoi ?

On m'a demandé si c'était un souci d'hébergement ou être un dev un peu plus hype : *pas du tout*. Moi, globalement, le back, j'm'en balance pas mal.
C'est juste que WordPress, je n'utilisais vraiment plus grand chose du CMS, les seuls plugins que j'avais : Disqus et un plugin de cache pour palier à la lenteur de WordPress.

Du coup, pourquoi ne pas prendre une techno plus légère et rapide d'exécution ?

## Comment l'installer ?

Alors, déjà, il faut savoir que la migration WordPress à Jekyll a été pliée en moins de 30 minutes grâce à [ce lien](http://www.girliemac.com/blog/2013/12/27/wordpress-to-jekyll/). Tout est automatique grâce à quelques plugins, c'est du clic-clic-upload-clic-wala-fini.

Le plus long a été de finalement réintégrer le thème et de se faire au layout de Jekyll. Dieu merci, étant peu performant en design, mon blog n'a pas été trop long à réintégrer.

J'en ai profité pour passer tout ça sous Grunt (je n'ai jamais pris le temps de le faire sous WordPress) et retaper un peu le CSS, que ça ressemble un peu plus à quelque chose.

Du fait que mon blog soit hébergé sur GitHub, le code source est accessible sur [Mon compte GitHub](https://github.com/DaPo/blog.cyrilou.me) !

Tout ceci se rapproche évidemment plus que jamais du workflow qu'on a à [le travail](http://www.ouichelorraine.com/).

## Le plus relou

Le plus relou dans l'histoire, cependant, a été de mettre les bonnes zones DNS là où il fallait, mais rien d'insurmontable quand on a un CTBro qui fait ça en "j'ai 5 minutes avant de partir à mon rendez-vous on voit ça tout de suite", magnifique.

Bref, voilà, parfait.

## À venir

Finir d'intégrer le thème (remettre les photos en header d'image), trouver un colorateur syntaxique, remettre les [OpenGraph](http://ogp.me/),  pourquoi pas passer sur [cssnext](https://cssnext.github.io/) (et ensuite l'imposer aux collègues, hhhehe).

Cet article est également le premier que je rédige entièrement en markdown ! \o\
... et corrigé via une pull request ! /o/
