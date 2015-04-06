---
title: 'Contrôle d&rsquo;un formulaire avec jQuery.'
author: Cyril Krylatov
layout: post
permalink: /2011/10/04/controle-dun-formulaire-avec-jquery/
dsq_thread_id:
  - 1397252598
categories:
  - Intégration web
tags:
  - Intégration Web
  - jQuery
---
Pour une fois, je vais faire un tout petit article intéressant (au moins pour moi, c&rsquo;est le plus important). Cette explication n&rsquo;engage que moi et est naturellement ouverte au débat (à part &laquo;&nbsp;jQuery c&rsquo;est naze&nbsp;&raquo;, hein), je débute, je ne demande qu&rsquo;à apprendre.

Je me suis mis récemment à utiliser la bibliothèque jQuery. Du coup, je vais pouvoir mettre dans mon CV &laquo;&nbsp;intégrateur et développeur en jQuery&nbsp;&raquo;, nickel, comme tout ces petits trous du culs qui le font si bien et en sont si fier. Mais ce n&rsquo;est pas le débat ici. Le débat, c&rsquo;est que je me suis confronté ce matin à un petit problème. J&rsquo;ai codé, en JavaScript, à l&rsquo;aide de la bibliothèque jQuery, un vérificateur de formulaire. Qui va, comme son nom l&rsquo;indique, vérifier les données saisies d&rsquo;un formulaire, à savoir : vérifier que les inputs obligatoires ne sont pas vide, qu&rsquo;un <option> d&rsquo;un <select> est bien sélectionné, qu&rsquo;une checkbox est bien check, etc.  
Dans un soucis de facilité, pour rendre ces éléments obligatoires à la saisie / modification, il n&rsquo;y a qu&rsquo;a leur ajouter une class prédéfinie.

Le soucis ici a été au niveau des <select> dont voici le code, pour se remettre dans le contexte :

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
</pre>
      </td>
      
      <td class="code">
        <pre class="html4strict" style="font-family:monospace;"><span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">select</span> <span style="color: #000066;">class</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"obligatoire"</span>&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">option</span>&gt;</span>Veuillez choisir votre civilité<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">option</span>&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">option</span>&gt;</span>Monsieur<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">option</span>&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">option</span>&gt;</span>Madame<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">option</span>&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">option</span>&gt;</span>Mademoiselle<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">option</span>&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">option</span>&gt;</span>Transgenre<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">option</span>&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">option</span>&gt;</span>Ne se prononce pas<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">option</span>&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">select</span>&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

Le soucis qui n&rsquo;en est finalement pas un : si vous me [suivez sur Twitter][1], vous avez surement vu que la solution la plus simple, à savoir *:selected* ne s&rsquo;est pas présentée à moi.  
J&rsquo;ai écrit 6 paragraphes de bullshits pour retourner le problème dans tous les sens et au final, non, l&rsquo;algo est simple : pré-remplissage ou non, il faut juste checker si le premier enfant (*:first-child*) de notre *select.obligatoire* est sélectionné (*:selected*) ou non. Si c&rsquo;est le cas : problème. Sinon, non. Voici le code :

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
</pre>
      </td>
      
      <td class="code">
        <pre class="javascript" style="font-family:monospace;"><span style="color: #006600; font-style: italic;">/*
	Pour chacun des &lt;select&gt; :
		- on sélectionne le premier élément des select; uniquement s'ils sont sélectionnés (:selected)
		- on passe en argument dans le function() une variable qui s'incrémente ainsi que l'élément matché (elem) (ça peut servir, on sait jamais)
*/</span>
jQuery<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">"select option:first-child:selected"</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">each</span><span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">function</span><span style="color: #009900;">&#40;</span>i<span style="color: #339933;">,</span> elem<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
	<span style="color: #006600; font-style: italic;">// OPTIMISATIOOOOOOOOOOOON</span>
	<span style="color: #000066; font-weight: bold;">var</span> elem <span style="color: #339933;">=</span> $<span style="color: #009900;">&#40;</span>elem<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
	<span style="color: #006600; font-style: italic;">// On affiche dans la console les éléments matchés</span>
	console.<span style="color: #660066;">log</span><span style="color: #009900;">&#40;</span>elem<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #006600; font-style: italic;">// --- EOF; ---</span></pre>
      </td>
    </tr>
  </table>
</div>

Alors oui, cet article ne sert strictement à rien, tout ceux qui commencent jQuery arrivent à faire ça, mais c&rsquo;est pour la fierté d&rsquo;avoir fini cet article, tavu.

 [1]: http://twitter.com/IAmNotCyril/