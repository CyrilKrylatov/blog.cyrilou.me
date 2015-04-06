---
title: Doit-on continuer de supporter LT IE10 ?
author: Cyril Krylatov
layout: post
permalink: /2013/07/26/doit-on-continuer-de-supporter-lt-ie10/
dsq_thread_id:
  - 1537329297
categories:
  - Intégration web
---
<p class="is-intro">
  En voilà une belle question soulevée par le jeune <a href="https://twitter.com/zoontek/status/360822509655953408">Zoony</a> sur Twitter que je vais m&rsquo;empresser d&rsquo;y apporter mon point de vue.
</p>

<!--more-->

On ne va pas se le cacher, LT IE9 est une vraie plaie à maintenir. Les stats prouvent qu&rsquo;IE6 est en net recule voir inexistant (Dieu existe) sauf en Chine où, apparemment, le mauvais goût ne semble pas qu&rsquo;être situé dans leur culture musicale.

Cette question revient très souvent. La seule question à se poser pour y répondre est, selon moi, la suivante : **à quoi va servir le site ?** et ses multiples déclinaisons telles que &laquo;&nbsp;que dit le cahier des charges&nbsp;&raquo;, &laquo;&nbsp;que veut le client&nbsp;&raquo;, &laquo;&nbsp;quelles technologies nous sont imposées&nbsp;&raquo;, etc.

## Tout est dans le cahier des charges. Même ta mè-

De ce fait, nous allons préférer adopter la philosophie suivante : &laquo;&nbsp;fuck IE6, IE7 vaguement navigable, IE8 navigable, IE9+ propre.&nbsp;&raquo; ([sauce][1]). Philosophie qui, je pense, sera celle qui nous fera prendre le moins de risques.

Malgré cela, nous devons y apporter des nuances. En effet, ces nuances sont apportées avec la ligne directrice du site dégagée au fil des discussions avec les commerciaux / chefs de projets. Au fil des projets qui se succèdent, j&rsquo;ai pu dégager des cibles récurrentes selon les types de sites :

  * Les femmes enceintes (qui n&rsquo;hésiteront pas à commander sur leur lieu de travail, comprendre potentiellement LT IE10)
  * Des séniors (comprendre LT IE9)
  * Des jeunes parisiens &laquo;&nbsp;branchés&nbsp;&raquo; CSP++ (façon de parler, hein) (donc comprendre Safari / Chrome, Firefox MàJ + RWD, bien évidemment)
  * Des presqu-intra/extranet qui ne seront utilisés que pour des personnes bien définies où nous connaitront leur liberté à utiliser ou non les navigateurs
  * Les sites qui n&rsquo;auront d&rsquo;utilité que d&rsquo;être beaux (présentation de technologies, donc uniquement orienté R&D dite publique) où là, effectivement, nous ne soucieront pas d&rsquo;IE. </ul> 
    Tout cela sera donc à prendre en compte pour répondre à la question &laquo;&nbsp;jusqu&rsquo;à quel navigateur le site sera supporté&nbsp;&raquo; et si cette question ne trouve pas sa réponse, ne pas oublier de continuer à supporter IE7 à 9 inclus en suivant le principe de [gracefull degradation][2] et voilà, on en parle plus.
    
    N&rsquo;hésitez pas à partager vos retours d&rsquo;expériences sur le sujet, plus on est de fous, moins y&rsquo;a de riz !

 [1]: https://twitter.com/darklg/status/360831711250104320
 [2]: https://www.google.fr/search?q=gracefull+degradation+css&oq=gracefull+degradation+css&aqs=chrome.0.69i57j0l3.3418j0&sourceid=chrome&ie=UTF-8