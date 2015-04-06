---
title: Navigation avec le clavier pour bonjourdubstep.fr
author: Cyril Krylatov
layout: post
permalink: /2012/01/07/navigation-avec-le-clavier-pour-bonjourdubstep-fr/
dsq_thread_id:
  - 1397252914
categories:
  - Geekage intenseif
  - Intégration web
tags:
  - bonjourdubstep
  - feature
  - Javascript
  - jQuery
---
Une petite feature qui me tenait à coeur pour [bonjourdubstep][1] : la navigation par clavier. Ainsi, nous pouvons utiliser la touche &laquo;&nbsp;r&nbsp;&raquo; pour aller sur une page choisie aléatoirement; &laquo;&nbsp;j&nbsp;&raquo; pour la page suivante; &laquo;&nbsp;k&nbsp;&raquo; pour la page suivante et &laquo;&nbsp;h&nbsp;&raquo; pour revenir sur la home.

La contrainte ici, c&rsquo;est que cela ne fonctionnera qu&rsquo;uniquement sur une url type **/page/N**, vu que les URL avec le titre du morceau à l&rsquo;intérieur ne fonctionnent pas étant donné qu&rsquo;elles ne récupèrent pas l&rsquo;ID de la page comme le fait /page/N. Merci tumblr.

Bref, pour ceux que ça pourrait intéresser et faire genre j&rsquo;sais utiliser la librairie jQuery, voici le code :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
</pre>
      </td>
      
      <td class="code">
        <pre class="javascript" style="font-family:monospace;">jQuery<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">"body"</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">keydown</span><span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">function</span><span style="color: #009900;">&#40;</span>event<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
	<span style="color: #006600; font-style: italic;">// Si le keycode de l'event (= touche pressée (keydown)) est 82 (correspond à la touche "r")</span>
	<span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>event.<span style="color: #660066;">keyCode</span> <span style="color: #339933;">==</span> <span style="color: #3366CC;">'82'</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
		<span style="color: #006600; font-style: italic;">// On récupère les pages total avec le tag qui va bien de Tumblr</span>
		<span style="color: #000066; font-weight: bold;">var</span> totalpages <span style="color: #339933;">=</span> <span style="color: #009900;">&#123;</span>TotalPages<span style="color: #009900;">&#125;</span><span style="color: #339933;">;</span>
		<span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>totalpages <span style="color: #339933;">&gt;</span> <span style="color: #CC0000;">1</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
			<span style="color: #006600; font-style: italic;">// Ensuite, le calcul qui va bien pour sortir un numéro entre {1;totalpages}</span>
			<span style="color: #000066; font-weight: bold;">var</span> randPage <span style="color: #339933;">=</span> <span style="">Math</span>.<span style="color: #660066;">ceil</span><span style="color: #009900;">&#40;</span><span style="">Math</span>.<span style="color: #660066;">random</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">*</span> totalpages<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
			<span style="color: #006600; font-style: italic;">// On redirige la fenêtre vers /page/randPage</span>
			window.<span style="color: #660066;">location</span>.<span style="color: #660066;">href</span><span style="color: #339933;">=</span><span style="color: #3366CC;">'/page/'</span><span style="color: #339933;">+</span>randPage
		<span style="color: #009900;">&#125;</span>
	<span style="color: #009900;">&#125;</span>
&nbsp;
	<span style="color: #006600; font-style: italic;">// Si le keycode est celui de la touche "h"</span>
	<span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>event.<span style="color: #660066;">keyCode</span> <span style="color: #339933;">==</span> <span style="color: #3366CC;">'72'</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
		<span style="color: #006600; font-style: italic;">// On redirige à la racine</span>
		window.<span style="color: #660066;">location</span>.<span style="color: #660066;">href</span><span style="color: #339933;">=</span><span style="color: #3366CC;">'/'</span>
	<span style="color: #009900;">&#125;</span>
	<span style="color: #006600; font-style: italic;">// Si le keycode est celui de la touche "j"</span>
	<span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>event.<span style="color: #660066;">keyCode</span> <span style="color: #339933;">==</span> <span style="color: #3366CC;">'74'</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
		<span style="color: #006600; font-style: italic;">// On var l'id de la page courante</span>
		<span style="color: #000066; font-weight: bold;">var</span> currentpage <span style="color: #339933;">=</span> <span style="color: #009900;">&#123;</span>CurrentPage<span style="color: #009900;">&#125;</span><span style="color: #339933;">;</span>
		<span style="color: #006600; font-style: italic;">// Si elle est suppérieur à 1 (pour ne pas aller à /page/0/ et inférieur)</span>
		<span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>currentpage <span style="color: #339933;">&gt;</span> <span style="color: #CC0000;">1</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
			<span style="color: #006600; font-style: italic;">// On va à currentpage-1</span>
			<span style="color: #000066; font-weight: bold;">var</span> prevpage <span style="color: #339933;">=</span> currentpage <span style="color: #339933;">-</span><span style="color: #CC0000;">1</span><span style="color: #339933;">;</span>
			window.<span style="color: #660066;">location</span>.<span style="color: #660066;">href</span><span style="color: #339933;">=</span><span style="color: #3366CC;">'/page/'</span><span style="color: #339933;">+</span>prevpage
		<span style="color: #009900;">&#125;</span>
	<span style="color: #009900;">&#125;</span>
&nbsp;
	<span style="color: #006600; font-style: italic;">// Même principe que pour la touche "j", sauf que là, c'est "k"</span>
	<span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>event.<span style="color: #660066;">keyCode</span> <span style="color: #339933;">==</span> <span style="color: #3366CC;">'75'</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
		<span style="color: #000066; font-weight: bold;">var</span> currentpage <span style="color: #339933;">=</span> <span style="color: #009900;">&#123;</span>CurrentPage<span style="color: #009900;">&#125;</span><span style="color: #339933;">;</span>
		<span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>currentpage <span style="color: #339933;">&gt;</span> <span style="color: #009900;">&#123;</span>TotalPages<span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
			<span style="color: #000066; font-weight: bold;">var</span> nextpage <span style="color: #339933;">=</span> currentpage <span style="color: #339933;">+</span><span style="color: #CC0000;">1</span><span style="color: #339933;">;</span>
			window.<span style="color: #660066;">location</span>.<span style="color: #660066;">href</span><span style="color: #339933;">=</span><span style="color: #3366CC;">'/page/'</span><span style="color: #339933;">+</span>nextpage
		<span style="color: #009900;">&#125;</span>
	<span style="color: #009900;">&#125;</span>
<span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Ensuite, un coup de [JavaScript Compressor][2] pour gagner en performance sur la page et zou.

Egalement l&rsquo;occasion pour moi de tester [Sublime Text v2][3], chaudement recommandé par [@_kud][4], qui n&rsquo;a pas l&rsquo;air trop vilain.

<p style="text-align:center;">
  <img src="http://blog.c-krylatov.com/wp-content/uploads/2012/01/Capture-d’écran-2012-01-07-à-15.25.24.png" alt="" title="Capture d’écran 2012-01-07 à 15.25.24" width="638" height="804" class="alignnone size-full wp-image-280" />
</p>

Allez, kiss !

 [1]: http://bonjourdubstep.fr
 [2]: http://www.minifyjs.com/javascript-compressor/
 [3]: http://www.sublimetext.com/2
 [4]: http://Twitter.com/_kud