---
title: 'Quelque bonnes raisons d&rsquo;utiliser Sketch'
author: Cyril Krylatov
layout: post
permalink: /2013/10/08/quelque-bonnes-raisons-dutiliser-sketch/
dsq_thread_id:
  - 1837551875
categories:
  - Intégration web
---
<p class="is-intro">
  Ne voulant pas laisser mon audience dans un état de frustration complète (en particulier <a href="https://twitter.com/hteumeuleu/status/379232081668497409">Rèmy</a>, en fait), je vais vous livrer un vrai retour de mon utilisation de Sketch.
</p>

<!--more-->

Parce que oui, en vrai, je voulais en faire un vrai retour mais [celui-là][1] me faisait plus rire qu&rsquo;autre chose, alors, screens à l&rsquo;appui, je suis pas là pour te faire un sketch, allons-y.

Tout d&rsquo;abord, notez que cette utilisation de Sketch a été, vous vous en doutez, faite du côté de l&rsquo;intégration; je n&rsquo;ai pas fait de design avec.

Également, je l&rsquo;ai utilisé sur un projet récent : un seul template déclinable selon certaines options de l&rsquo;utilisateur, donc 4 sous-templates. Puis un autre site pour ce même projet avec 8 designs version desktop et les 8 déclinaisons responsives qui vont bien).

Ensuite, je vais diviser ce retour d&rsquo;expérience en deux parties. La première, ce que j&rsquo;ai vraiment aimé de ce logiciel (par extension, ce qu&rsquo;il manque à Photoshop) et ce que j&rsquo;ai foncièrement détesté / ce avec quoi je n&rsquo;étais pas à l&rsquo;aise (comprendre : ce que j&rsquo;aime dans Photoshop que je n&rsquo;ai pas retrouvé dans Sketch).

## Ce qui change de Photoshop

**Le premier point** qui m&rsquo;a charmé dans Sketch, dès que je l&rsquo;ai ouvert, c&rsquo;est le côté vectoriel de la chose. C&rsquo;est peut être con, mais si tu zoomes à 3200% tu n&rsquo;auras pas les horribles pixels dégueux à la Photoshop qui vont s&rsquo;afficher, et c&rsquo;est pas plus mal.

<div class="image-align to-right">
  <img src="http://blog.c-krylatov.com/wp-content/uploads/2013/10/ss-7.png" alt="Sketch.app : CSS directement dans le pannel" width="207" height="664" class="size-full wp-image-552" /></p> 
  
  <p>
    Le deuxième, c&rsquo;est de pouvoir clic-droit sur un élément et &laquo;&nbsp;Copy CSS Attributes&nbsp;&raquo; qui va, en un mot comme en cent, copier les propriétés CSS qui vont bien de l&rsquo;élément ciblé.<br /> <br />C&rsquo;est-à-dire que le logiciel va traduire en CSS ce qu&rsquo;on met dans le pannel. Enfin, tout ce qui est possible de faire en CSS : color / font-family / font-size / line-height / text-shadow (pour de la typo, par ex) etc, les gradients sur un bouton, et j&rsquo;en passe. Et ça, c&rsquo;est un gain de temps énorme, vous vous en doutez.
  </p>
</div>

C&rsquo;est à ce moment-là que vous me dites &laquo;&nbsp;Il existe le plugin CSSHat !&nbsp;&raquo; ce à quoi je réponds : CSSHat ne transmet pas toujours les bonnes couleurs. Par exemple, il arrive très souvent d&rsquo;avoir 10% de luminosité en plus sur une couleur générée par CSSHat comparée à la vraie couleur.  
Je vous parle pas de la sortie des gradients qui est parfois complètement pourrav&rsquo;. Donc, un bon point pour Sketch.

**Le deuxième point** est la très bonne compréhension de la typo par Sketch. Ainsi, la bordure qui apparait sur un élément lorsqu&rsquo;il est sélectionné correspond bien à la taille réelle de la typo comme nous pouvons le voir sur le screen suivant :

<p style="text-align: center;">
  <img src="http://blog.c-krylatov.com/wp-content/uploads/2013/10/ss-9.png" alt="Sketch : bonne utilisation des typos" width="596" height="230" class="size-full wp-image-554" />
</p>

Bon, je ne suis pas sûr de bien pouvoir arriver à expliquer ce phénomène, vous savez, cet espèce d&rsquo;espace mort qui entoure une typo.

Ce Qui nous amène directement au troisième point.

**Le troisième point** qui est celui celui de l&rsquo;outil de mesure entre deux objets. On en choisit un, on met la souris sur un autre élément en maintenant la touche command et hop, en rouge avec des flèches, le nombre de pixels entre les deux (malgré le côté &laquo;&nbsp;vectoriel&nbsp;&raquo; cité plus haut).  
Je n&rsquo;ai, bien entendu, pas réussi à le prendre en screenshot pour des raisons évidentes.

Cette méthode de mesure combinée à la très bonne utilisation de la sorte d&rsquo;espace mort de la typo décrit au point précédent nous fait gagner un temps fou comparé à Photoshop où il faut prendre l&rsquo;outil de mesure, mesurer d&rsquo;un block à l&rsquo;autre, prier que cet espace mort soit respecté, pour s&rsquo;en assurer screenshot du rendu web et hop, méthode de pixel perfect.

Processus plutôt long que ne connaît pas Sketch et qui n&rsquo;est vraiment pas négligeable tant d&rsquo;un point de vue pratique que gain de temps.

<div class="image-align to-right">
  <img src="http://blog.c-krylatov.com/wp-content/uploads/2013/10/ss-10.png" alt="Sketch permet d&#039;émuler un dossier de DA." width="181" height="368" class="alignnone size-full wp-image-555" /></p> 
  
  <p>
    <strong>Quatrième point</strong>, assez sympa, c&rsquo;est qu&rsquo;un .sketch peut contenir plusieurs créas, au même titre qu&rsquo;un dossier peut contenir plusieurs fichiers.
  </p>
</div>

La première partie du projet, le DA avait tout mis dans le Sketch, j&rsquo;étais complètement perdu, et lui également lorsqu&rsquo;il était arrivé le temps pour lui de m&rsquo;expliquer comment il voulait que les templates fonctionnent.  
La première partie s&rsquo;est mieux passée : nous avons convenus que les prochains .sketch ne contiendront qu&rsquo;un seul template (et ses déclinaisons) ainsi que sa version responsive et ça ira bien.

Voilà pour les points positifs.

## Ce qui me manque de Photoshop

Premièrement, l&rsquo;outil de mesure de Sketch est vite limité en fonction de comment sont construits les calques. Ainsi ai-je perdu Dieu seul sait combien de temps à mesurer la distance entre deux éléments qui n&rsquo;étaient pas dans le même dossier. Ça s&rsquo;est fini en screenshot et ouverture de Photoshop (ou outil de screenshot sélectif de Mac OS, allez bim dans ta face) pour prendre la mesure avec l&rsquo;outil de sélection.

Secondement, j&rsquo;ai l&rsquo;impression que si les calques Sketch sont mal foutus, cela devient vite infernal de les exploiter. Photoshop aussi, certes; probablement dans une moindre autre mesure. Également, se déplacer d&rsquo;un élément à l&rsquo;autre dans les calques de Sketch est infernal, il faut toujours avoir un doigt sur la touche escape pour sortir d&rsquo;un dossier de calque et pouvoir cliquer sur un nouveau.  
Une habitude à prendre mais assez déstabilisante au début d&rsquo;utilisation.

Troisièmement, un historique des actions faites sur le fichier à la Photoshop n&rsquo;aurait pas été de trop sur Sketch.

## La conclusion qui va bien

Malgré mes à priori, Sketch est un très bon outil pour faire de la DA Web / utilisation pour de l&rsquo;intégration nonobstant les points décriés plus haut. Cet outil a été fait pour une utilisation uniquement Web et non pas fourre-tout / design comme l&rsquo;est Photoshop, de ce fait, l&rsquo;utilisation y est bien mieux adaptée et ça se sent (no shit, Sherlock ?)

N&rsquo;hésitez pas à me faire un retour sur Sketch ou des outils autres que Photoshop que vous utilisez au quotidien.

 [1]: http://blog.c-krylatov.com/2013/09/15/retour-dexperience-utilisation-de-sketch/