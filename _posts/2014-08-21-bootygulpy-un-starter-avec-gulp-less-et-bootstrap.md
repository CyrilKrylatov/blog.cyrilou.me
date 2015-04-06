---
title: 'BootyGulpy &#8211; un starter avec Gulp, Less et Bootstrap.'
author: Cyril Krylatov
layout: post
permalink: /2014/08/21/bootygulpy-un-starter-avec-gulp-less-et-bootstrap/
dsq_thread_id:
  - 2946636682
categories:
  - Intégration web
tags:
  - bootstrap
  - grunt
  - Gulp
  - Less
---
<p class="is-first">
  Les enfants, assoyez, il faut qu&rsquo;on parle.<br /> Je me suis mis à Less.<br /> Et Bootstrap.<br /> Et Gulp.<br /> Du fait, j&rsquo;ai fait un petit truc pour avoir une sorte de starter, et pouvoir me faire les pieds avec Gulp.
</p>

<!--more-->

Le constat était simple : nous nous sommes gentiment mis à Grunt, Less & Bootstrap à l&rsquo;agence. Sauf que mes collègues mettent parfois 4 secondes à compiler les 8765 fichiers de Bootstrap. À chaque refresh fois que le watch de Grunt est appelé.   
Oui.

Du fait, merveilleuse idée que j&rsquo;ai eu d&rsquo;une part, <a href="https://twitter.com/putaindecode/status/502367365569708032" target="_blank">virer Grunt pour Gulp</a> et d&rsquo;autre part, bien différencier dans mon *gulpfile.js* la partie Bootstrap et la partie &laquo;&nbsp;Thème&nbsp;&raquo; du site.

Ainsi, nous avons non pas un mais deux, je dis bien deux watch pour ne pas avoir à re-compiler Bootstrap à chaque changement dans le dossier Less.

<p style="text-align:center;">
  <img src="http://i.imgur.com/j74SykU.gif" alt="Mindblown" title="mindBlown" />
</p>

Ce qui devrait, je pense, faire gagner quelque précieuses secondes à tout le monde.

Je ne sais pas si c&rsquo;est le plus optimisé à faire (je me doute que non) mais j&rsquo;en suis clairement au début de l&rsquo;utilisation de Gulp.

Prochaines étapes : m&rsquo;occuper du JS puis générer une font-icon avec des SVG présents dans un dossier.

Ce petit projet a son <a href="https://github.com/DaPo/BootyGulpy" target="_blank">repo GitHub</a>, n&rsquo;hésitez pas à participer.

## Update version 1.1.1 {#version1.1.1}

Merci à [Mathieu A.][1] de m&rsquo;avoir fait une pull request du plus bel effet : installation de Bootstrap & jQuery via [bower][2] et SURTOUT, plus besoin de lancer deux commandes distinctes : une seule commande suffit qui lancera deux watchs sur mes deux dossiers et qui compilera soit le thème soit bootstrap selon ce qui est modifié. Parfait !

Dans la version 2, nous pourrons trouver trois branches sur le repo : une commune, master, une booty-gulp et une booty-grunt, pour ne pas faire de jaloux.

Eh oui.

 [1]: http://twitter.com/zoontek
 [2]: http://bower.io/