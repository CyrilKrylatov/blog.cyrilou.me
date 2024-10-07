---
title: Intégration de Diwi
---

Histoire de ne pas tuer le rythme de croisière de publication d'articles de ce blog (pour cette année, on est à un tous les deux mois), je vais vous parler du côté technique de ces neuf mois passés.

<!--more-->

En effet, lundi, nous avons mis en production [Diwi](https://diwi.com), site qui permet de **donner des rendez-vous** à des inconnus via un sujet original. Le concept est sympa, vous pouvez même envoyer de [jolies choses](https://diwi.com/invitation) à une de vos connaissance célibataire pour lui faire découvrir le site.

Le petit côté pub étant passé, voici l'histoire de ce beau site, avant que je n'arrive jusqu'au moment où j'écris ces lignes.

## Au commencement, l'intégration en dure

Diwi n'est pas si nouveau que ça. En effet, il existait déjà une ancienne version du site qui n'avait pas particulièrement de design vu qu'il n'y avait ni webdesigner ni intégrateur.

Est arrivé, bien, bien bien après ce premier lancement [Joffrey](https://twitter.com/joffrey), qui a eu pour mission de faire un tout nouveau design et, dans la foulée, l'intégration d'une nouvelle version.

Cette nouvelle version a été mise en pause (d'autre projets plus importants devaient sortir) jusqu'à mon arrivée il y a bientôt neuf mois. En effet, [Ouiche](http://ouichelorraine.com) cherchait un intégrateur (moi, du coup) pour relancer le projet.
Joffrey a donc terminé le design et pendant ce temps-là, j'ai retapé la quasi totalité de l'intégration déjà faite par Joffrey pour repartir sur une base propre.

## La réintégration

En effet, nous étions sur un Bootstrap v2, du nested à tout va, du sélecteur avec beaucoup d'IDs.

J'ai, dans un premier temps, mis à jour Bootstrap pour sa version 3 puis optimisé autant que possible l'[import de ses modules](https://gist.github.com/DaPo/930c9172d11323ac8fd7).

Dans un deuxième temps, j'ai réintégré chacune des pages en modules indépendants ([DRY](http://www.vanseodesign.com/css/dry-principles/), [SMACSS](https://smacss.com/), [OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)).

Ensuite, j'ai instauré les SVGs (passées dans [SVGo](https://github.com/svg/svgo) dans un premier temps puis génération d'une icon-font avec [grunt-webfont](https://github.com/sapegin/grunt-webfont) (qui nous a causé [bien du soucis](https://github.com/sapegin/grunt-webfont/issues/189) à la sortie d'OS X Yosemite)) à la place des icones bitmaps).

Pour finir, j'ai revu l'organisation des fichiers less :

- `variables.less` avec différentes variables utiles au projet ainsi que certaines qui réécrivent certaine de Bootstrap;
- `bootstrap.less` dont j'ai parlé plus haut;
- `layout.less` qui comprend le header et le footer;
- `modules.less` pour le CSS de plugins externes (tels que [typehead.js](https://twitter.github.io/typeahead.js/) ou [Fake Select](http://darklg.github.io/JavaScriptUtilities/jquery.html#jq-fake-select));
- Plein d'autre `.less` où un fichier = un module;
- Un `diwi.less` final qui `@import` tout ce beau monde, c'est ce fichier uniquement que [grunt](http://gruntjs.com/) va compiler.

Cette architecture n'est pas optimale, j'ai déjà une idée de comment je vais réorganiser ça, on voit ça un peu plus bas.

## Modifications majeures

Il y a quelque temps, voyant les stats de [caniuse](http://caniuse.com/#feat=flexbox) j'ai décidé de passer énormément de blocks sur **Flexbox**. Je me suis aidé (et encore maintenant !) de ce beau tuto de [CSS-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) et de différentes démos de [Raphaël](http://jackintheflexbox.tumblr.com/) pour me lancer dans l'aventure.

Merci également à mon CTBro [Maxime](https://twitter.com/Maxime) de m'avoir dit qu'on aurait pas besoin de supporter IE9 \o/

Vous aurez donc, par exemple, tout le header du site qui est fait avec Flexbox, les filtres de la [page d'accueil](https://diwi.com) également le header d'une [page de rendez-vous](https://diwi.com/diwi/34).

Il y a encore moins de temps, je suis passé intégralement à `rem` qu'on ne présente plus. Pour m'aider, j'ai lu attentivement [cet article](http://gregrickaby.com/using-the-golden-ratio-and-rems/) de Greg Rickaby et j'utilise le plugin Sublime Text "[REM PX](https://packagecontrol.io/packages/REM%20PX)" pour convertir une valeur en PX en REM (hé oui).
Du fait, non seulement j'ai pu très facilement réduire très légèrement le `font-size` du site sur mobile mais également, je me soucis de plus en plus de l'accessibilité du site. Si un mal-voyant a besoin d'avoir sa typo à 150%, à priori, le site ne bougera pas de trop.

Bref, il reste encore énormément de choses à faire (que ce soit côté accessibilité ou même niveau code).

## La suite

C'est pas que le combo Bootstrap x Less m'ait été imposé, mais je ne pouvais naturellement pas décider de le virer en arrivant.

Du coup, j'ai décidé de le garder, il m'a fait gagner beaucoup de temps jusqu'à maintenant (principalement sur la [grille responsive](http://getbootstrap.com/css/#grid) et le [menu mobile](http://getbootstrap.com/components/#navbar)), je ne m'en plains pas.

Je compte bien à terme le virer pour notamment remplacer la grille par [une grille Flexbox](http://www.meetsally.com/).

Une fois fais, je passe tout ça sur [cssnext](http://cssnext.io) qui me semble bien prometteur.

Également, nous pensons virer jQuery (dans un plus long terme, par contre) pour du beau et fort Vanilla et autres technologies bien plus sympatiques et actuelles.

Pour finir, je compte (dans un plus court terme, du coup) réorganiser mes fichiers pour adopter l'[architecture](http://dev.ghost.org/css-at-ghost/) de la plateforme de blog Ghost.

## La conclusion qui va bien

Beau projet qu'est [diwi](https://diwi.com), je pense qu'on est tous fiers de ce qu'il est et le seront d'autant plus quand il fonctionnera bien. Plein de challenges et de problèmes nous attendent, c'est motivant, c'est chouette.

Vive la vie.

Si vous avez des questions n'hésitez pas à me les poser, je me ferai une joie d'y répondre.
