---
title: 'Snippet : débuter un projet HTML / CSS / jQuery rapidement'
author: Cyril Krylatov
layout: post
permalink: /2011/10/10/snippet-debuter-un-projet-html-css-jquery-rapidement/
dsq_thread_id:
  - 1397252618
categories:
  - Intégration web
  - Snippets
tags:
  - CSS
  - HTML
  - intégration
  - jQuery
  - Snipper
---
Je ne sais pas si ça va servir à quelqu&rsquo;un un jour mais à moi, oui : un snippet tout fait lorsque je veux créer un script en utilisant jQuery ou faire des tests d&rsquo;intégration HTML / CSS. Juste histoire de ne pas perdre de temps à écrire comme un con les différentes balises de déclaration HTML, CSS et jQuery, sans avoir à aller chercher / lier des fichiers : tout se fait dans le html directement. C&rsquo;est ce qu&rsquo;on appel un **Template de démarrage** ([merci Darklg dans les commentaires][1]).

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
</pre>
      </td>
      
      <td class="code">
        <pre class="html4strict" style="font-family:monospace;"><span style="color: #00bbdd;">&lt;!DOCTYPE html&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">html</span>&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">head</span>&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">meta</span> <span style="color: #000066;">charset</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"utf-8"</span> <span style="color: #66cc66;">/</span>&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">title</span>&gt;</span>Projet<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">title</span>&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">link</span> <span style="color: #000066;">href</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"style.css"</span> <span style="color: #000066;">rel</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"stylesheet"</span> <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"text/css"</span> <span style="color: #66cc66;">/</span>&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">script</span> <span style="color: #000066;">src</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"http://code.jquery.com/jquery-latest.js"</span>&gt;&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">script</span>&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">style</span> <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"text/css"</span>&gt;</span>
			body { margin:0;padding:0; }
		<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">style</span>&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">head</span>&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">body</span>&gt;</span>
		<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">script</span> <span style="color: #000066;">type</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"text/javascript"</span>&gt;</span>
			jQuery(document).ready(function() {
				$("body").append("<span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">h1</span>&gt;</span>Et hop !<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">h1</span>&gt;</span>");
			});
		<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">script</span>&gt;</span>
	<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">body</span>&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">html</span>&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

Au menu : un doctype HTML5, un miniminiminiminireset CSS pour vérifier que le CSS est bien déclaré, un h1 directement inscrit dans le DOM avec jQuery pour être sûr que ce dernier soit chargé, et voilà.

Simple, net et efficace.

Des choses à ajouter / modifier ? :)

 [1]: http://blog.c-krylatov.com/2011/10/10/snippet-debuter-un-projet-html-css-jquery-rapidement/#comment-244