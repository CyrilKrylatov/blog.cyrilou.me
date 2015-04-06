---
title: Créer une page Custom / CMS dans Prestashop
author: Cyril Krylatov
layout: post
permalink: /2012/07/05/creer-une-page-custom-cms-dans-prestashop/
dsq_thread_id:
  - 1401490587
categories:
  - Geekage intenseif
  - Intégration web
tags:
  - créer page CMS
  - créer page custom
  - prestashop
---
**TL;DR**: le fu-

J&rsquo;ai commencé il y a ~ un mois un prestashop. Pour se faire, je me suis basé sur le thème de base &laquo;&nbsp;prestashop&nbsp;&raquo; que je clean au fur et à mesure, dans un doux mélange de larmes et de sang tellement la personne qui a intégré ça a fait des choses assez bizarres. Bref, arrive un moment, comme sur un magento classique, où je veux avoir un fichier de template (.tpl), mettre le code HTML que je veux et pouvoir appeler cette page facilement. Sur Magento, ça va, la méthode n&rsquo;est pas trop sale et respecte les conventions attendues d&rsquo;un MVC.

Je ne jugerai pas Prestashop. Mais voici la méthode que l&rsquo;on m&rsquo;a donné (on = les dev++ de prestashop sur le forum officiel (merci à eux, en passant)).

Vous aurez besoin de deux fichiers : le .php que vous appellerez pour afficher le template, et le fichier TPL qui contiendra votre code HTML.

Le premier bout de code sera à créer dans un fichier.php à la racine de votre Prestashop, avec le code suivant :

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
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">&lt;?php</span>
	<span style="color: #b1b100;">require</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">dirname</span><span style="color: #009900;">&#40;</span><span style="color: #009900; font-weight: bold;">__FILE__</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">.</span><span style="color: #0000ff;">'/config/config.inc.php'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
	<span style="color: #b1b100;">include</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">dirname</span><span style="color: #009900;">&#40;</span><span style="color: #009900; font-weight: bold;">__FILE__</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">.</span><span style="color: #0000ff;">'/header.php'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
	<span style="color: #000000; font-weight: bold;">global</span> <span style="color: #000088;">$smarty</span><span style="color: #339933;">;</span>
	<span style="color: #000088;">$smarty</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">display</span><span style="color: #009900;">&#40;</span>_PS_THEME_DIR_<span style="color: #339933;">.</span><span style="color: #0000ff;">'fichier_template.tpl'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
	<span style="color: #b1b100;">include</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">dirname</span><span style="color: #009900;">&#40;</span><span style="color: #009900; font-weight: bold;">__FILE__</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">.</span><span style="color: #0000ff;">'/footer.php'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">?&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

Le deuxième fichier de template où vous mettrez votre code HTML à la racine du *\_PS\_THEME\_DIR\_*, le dossier de votre thème prestashop (/theme/votretheme/) :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
3
</pre>
      </td>
      
      <td class="code">
        <pre class="html" style="font-family:monospace;">&lt;p&gt;
Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.
&lt;/p&gt;</pre>
      </td>
    </tr>
  </table>
</div>

Il ne vous restera plus qu&rsquo;à appeler votre .php (http://domaine.tld/fichier.php) et paf, le lorem s&rsquo;affichera.

Mon directeur technique n&rsquo;est pas d&rsquo;accord avec cette methode, les dev++ du forum de prestashop m&rsquo;ont dit que cette methode ne respectait aucun controleur du MVC et qu&rsquo;il fallait qu&rsquo;ils fassent quelque chose à propos de ça. Mais apparemment, c&rsquo;est la seule méthode pour créer une page custom / CMS dans Prestashop. Yep.

inb4: you troll into comments you win. Go.

## Update : une méthode qui, je pense, est un peu plus propre.

Cette fois-ci, on passe par les Controllers et on évite de faire des include de header & footer php à la racine comme des gros sales.

La première étape sera de créer un fichier que vous appellerez dans votre URL (derrière, un coup de .htaccess, hein, on est pas des chiens) que l&rsquo;on nommera, mettons, mymodule.php avec, dedans :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
3
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">&lt;?php</span>
	<span style="color: #b1b100;">require</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">dirname</span><span style="color: #009900;">&#40;</span><span style="color: #009900; font-weight: bold;">__FILE__</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">.</span><span style="color: #0000ff;">'/config/config.inc.php'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
	ControllerFactory<span style="color: #339933;">::</span><span style="color: #004000;">getController</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'MyModuleController'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">run</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Nous appelons donc un controller qui appelera, lui, un certain TPL. Deuxième étape, donc, création du controller (code à placer dans /controllers/MyModuleController.php) :

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
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">&lt;?php</span>
	<span style="color: #000000; font-weight: bold;">class</span> NewfaqControllerCore <span style="color: #000000; font-weight: bold;">extends</span> FrontController
	<span style="color: #009900;">&#123;</span>
		<span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> displayContent<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>
		<span style="color: #009900;">&#123;</span>
			parent<span style="color: #339933;">::</span><span style="color: #004000;">displayContent</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
			<span style="color: #000000; font-weight: bold;">self</span><span style="color: #339933;">::</span><span style="color: #000088;">$smarty</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">display</span><span style="color: #009900;">&#40;</span>_PS_THEME_DIR_<span style="color: #339933;">.</span><span style="color: #0000ff;">'mymodule.tpl'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span>
	<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Voilà le controller qui appel notre fichier de TPL &laquo;&nbsp;mymodule.tpl&nbsp;&raquo; que l&rsquo;on créera dans le dossier de TPL. Plus qu&rsquo;à aller sur /mymodule.php

et paf, pistache.

inb4 je suis pas dev, j&rsquo;espère que le raisonnement avec ces histoires de controllers est bon, sinon, n&rsquo;hésitez pas à me le dire, j&rsquo;adore apprendre.