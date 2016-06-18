---
title: 'Quelque nouveautés dans mon workflow'
author: Cyril Krylatov
layout: post
permalink: /2016/06/18/nouveautes-dans-lintegration/
dsq_thread_id:
  - 
---

Il y a… un an maintenant 😨 soit deux articles en arrière 😱 je vous présentais [la façon dont j'ai géré l'intégration de Diwi]({% post_url 2015-06-03-lintegration-de-diwi %}). Les choses ont évoluées, le workflow également. Ça méritait son article.

<!--more-->

Petit historique : jusqu'à il y a environ deux mois, Diwi était uniquement sur le web. Nous avons entre-temps décidé de changer de stratégie.

En effet, nous avons maintenant fermé le site pour partir sur un service uniquement basé sur iOS dans un premier temps, Android dans un second temps, peut-être un site pour compléter tout ça dans un lointain troisième temps.

Et donc, cet article sera sur la [nouvelle page du site](https://diwi.com/). Une landing tout simple pour présenter le concept, présenter l'application et un formulaire pour y mettre son mail pour mes (anciens) frères d'Android.

C'est une page relativement simple et rapide à intégrer, avec l'habituelle version mobile et bien entendu, retina.

Et moi, j'aime bien ces petits projets, ça me permet de tester de nouvelles choses marrantes.

## Images avec srcset

Il y a quelque chose qui m'a toujours plutôt impressionné, c'est une nouveauté HTML qu'est l'attribut `srcset` qui permet d'afficher nativement une image avec des medias queries.

Ainsi, si nous revenons sur notre site et particulièrement la partie "[comment ça marche](https://diwi.com/#commentcamarche)" nous avons un slider (j'y reviendrai plus tard) de trois images. Mais véritablement, il y en a douze.

<img
    srcset="
        /images/articles/nouveautes-dans-lintegration_illu-1.jpg 1x,
        /images/articles/nouveautes-dans-lintegration_illu-1@2x.jpg 2x
    "
    src="/images/articles/nouveautes-dans-lintegration_illu-1.jpg"
/>

Nous avons, pour chacune des images, quatre déclinaisons :

* une image pour la version mobile en 1x,
* une image pour la version mobile en 2x,
* une image pour la version desktop en 1x,
* une image pour la version desktop en 2x.

Du coup, `<picture>`, `<source>` et `srcset` à la rescousse !

<script src="https://gist.github.com/DaPo/43a32f3f8e63ef22cfce0c2e199afe26.js"></script>

Le support de l'attribut `srcset` est [plutôt bon selon caniuse](http://caniuse.com/#feat=srcset) à part pour… IE 11 ! Tant pis pour lui, il se verra attribué l'image appelée dans l'attribut `src`.

Si besoin, un polyfill existe appelé [Picturefill](http://scottjehl.github.io/picturefill/), mais a priori personne n'en aura besoin.

Oh, concernant les autres images non bitmap, j'ai mis du SVG inline autant que possible. Mais c'est pas très intéressant.

## On a enlevé Grunt

Historiquement, j'aime bien utiliser [Grunt](http://gruntjs.com/) parce que c'est simple et que ça fait exactement ce que je veux. Sauf que là, je me suis dis, "tiens, si j'essayais quelque chose de radicalement différent" ? 

En effet, plus besoin de compiler du Less (je n'ai pas eu besoin de Boostrap ici), juste de copier mes fichiers CSS et images vers le dossier de build. Nous sommes dont passés par npm qui fait tout aussi bien le travail !

Pour se faire, je me suis aidé de cet article de [Keith Cirkel](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/) qui explique très bien comment faire les choses.

Tout y est très bien expliqué, pas besoin que je copie le contenu de mon npm script ici vu que je n'ai rien de bien différent de ce que Keith Cirkel a écrit dans son article.

Mais en tout cas, prochaine onepage que vous faites, un petit projet du genre, n'hésitez pas à vous passer de votre task runner préféré et allez voir ce qu'il se passe du côté des [scripts npm](https://docs.npmjs.com/misc/scripts) !

Oh, également, n'hésitez pas comme moi à virer l'Autoprefixer, vous n'en avez probablement plus besoin.

## Nouvelle grille

Du coup, sans Boostrap, j'ai dû utiliser un système de grille. Quitte à m'avoir mis à mettre du flexbox partout, autant y aller à fond.

[Gridlex](http://gridlex.devlint.fr/) est donc un système de grille relativement simple à prendre en main, écrit avec les propriétés flexbox, bref, tout ce qu'il me fallait.

La syntaxe est un peu déroutante, style `.grid-noGutter>.col-9_xs-12` mais on s'y fait vite.

Seul bémol, c'est de ne pas pouvoir utiliser les différentes propriétes de flexbox selon le breakpoint, par exemple appliquer un `justify-content: space-around;` uniquement sur mobile. J'en ai parlé sur Slack à son auteur, il semblait intéressé, je lui ai [ouvert une issue](https://github.com/devlint/gridlex/issues/14) concernant ce que j'avais derrière la tête.
Au prochain train que je prends j'essaierai de lui proposer une PR !

Ceci dit, aucune idée si c'est faisable en passant par les data-attributes. On verra bien.

## Un dernier mot, sur le slider

Pour faire le slider (sur mobile uniquement) de la partie "comment ça marche" décrite au dessus, j'ai utilisé le très bon [Swiper](http://idangero.us/swiper/) qui est très très complet et dispose d'une [énorme API](http://idangero.us/swiper/api/).

Testez-le, il est vraiment pas mal ! 👌

## Conclusion

Que de bonnes choses, je n'ai pas la vérité absolue, n'hésitez pas à m'écrire un commentaire ci-dessous avec les différentes choses que vous avez mis en place récemment. On peut également en discuter [sur Twitter](https://twitter.com/IAmNotCyril/) !