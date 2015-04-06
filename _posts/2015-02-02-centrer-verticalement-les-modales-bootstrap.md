---
title: Centrer verticalement les modales Bootstrap
author: Cyril Krylatov
layout: post
permalink: /2015/02/02/centrer-verticalement-les-modales-bootstrap/
dsq_thread_id:
  - 
categories:
  - Intégration web
---
<p class="is-intro">
  Pour ceux qui arrivent, j&rsquo;ai récemment (il y a 5 mois maintenant) rejoins l&rsquo;équipe de <a href="http://www.ouichelorraine.com/">Ouiche Lorraine</a> en tant qu&rsquo;intégrateur. J&rsquo;ai été principalement recruté non pas pour ma joie de vivre mais pour travailler sur un nouveau projet qui devrait sortir d&rsquo;ici peu.
</p>

<!--more-->

Et étant le seul intégrateur, je peux me livrer à deux trois expérimentations sur ce projet. Lorsqu&rsquo;il sortira, j&rsquo;en ferai probablement un article plus complet sur comment j&rsquo;ai géré l&rsquo;intégration dessus. En attendant, ce que je peux dire c&rsquo;est que Bootstrap était déjà en place et qu&rsquo;il aura vocation à dégager dans une potentielle V2.

Bref, arrivons à notre sujet : centrer cette modale !

## Ne pas sortir de sa zone de confort

Lorsque mon DA m&rsquo;a demandé de centrer verticalement les modales, je me suis mis en quête de l&rsquo;aligneur vertical parfait. J&rsquo;avais le hack du \`transform: translateX(-50%);\` en tête, dont acte.

À savoir que par défaut, elles sont centrées horizontalement et à 30 pixels du haut.

À savoir également que je ne prefix rien : <a href="http://putaindecode.fr/posts/css/mise-en-place-autoprefixer/" target="_blank">Autoprefixer s&rsquo;en occupe pour moi</a>.

Bref, c&rsquo;est porti :

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
</pre>
      </td>
      
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #6666ff;">.modal-dialog</span> <span style="color: #00AA00;">&#123;</span>
    <span style="color: #000000; font-weight: bold;">margin-top</span><span style="color: #00AA00;">:</span> <span style="color: #cc66cc;"></span> !important<span style="color: #00AA00;">;</span>
    <span style="color: #000000; font-weight: bold;">margin-bottom</span><span style="color: #00AA00;">:</span> <span style="color: #cc66cc;"></span> !important<span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
&nbsp;
<span style="color: #6666ff;">.modal</span><span style="color: #6666ff;">.in</span> <span style="color: #6666ff;">.modal-dialog</span> <span style="color: #00AA00;">&#123;</span>
    <span style="color: #000000; font-weight: bold;">position</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">absolute</span><span style="color: #00AA00;">;</span>
    <span style="color: #000000; font-weight: bold;">top</span><span style="color: #00AA00;">:</span> <span style="color: #933;">50%</span><span style="color: #00AA00;">;</span>
    <span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">:</span> <span style="color: #933;">50%</span><span style="color: #00AA00;">;</span>
    <span style="color: #000000; font-weight: bold;">margin-left</span><span style="color: #00AA00;">:</span> <span style="color: #933;">-300px</span><span style="color: #00AA00;">;</span>
    opacity<span style="color: #00AA00;">:</span> <span style="color: #cc66cc;">1</span><span style="color: #00AA00;">;</span>
    transform<span style="color: #00AA00;">:</span> translateY<span style="color: #00AA00;">&#40;</span><span style="color: #933;">-50%</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Et voilà, ni plus ni moins.

## Sortir de sa zone de confort

<p style="text-align: center;">
  <img src="http://cdn.meme.am/instances/56735260.jpg" alt="Bro do you even flex" />
</p>

BAH VOILÀ C&rsquo;EST ÇA QU&rsquo;ON VEUT ! Allez, c&rsquo;est reparti :

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
</pre>
      </td>
      
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #6666ff;">.modal-dialog</span> <span style="color: #00AA00;">&#123;</span>
    <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span> flex<span style="color: #00AA00;">;</span>
    <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">auto</span> !important<span style="color: #00AA00;">;</span>
    <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span> <span style="color: #933;">100%</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
&nbsp;
<span style="color: #6666ff;">.modal-content</span> <span style="color: #00AA00;">&#123;</span>
    <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
&nbsp;
<span style="color: #6666ff;">.lt_ie10</span> <span style="color: #6666ff;">.modal-dialog</span> <span style="color: #00AA00;">&#123;</span>
  <span style="color: #000000; font-weight: bold;">margin-top</span><span style="color: #00AA00;">:</span> <span style="color: #933;">30px</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Et voilà ! rien de plus. C&rsquo;est merveilleux. Flexbox est fantastique.

Concernant IE, bon, un simple margin-top fera l&rsquo;affaire, t&rsquo;facons, ils méritent pas mieux.

J&rsquo;ai également utilisé flexbox pour centrer verticalement et horizontalement deux blocks (au lieu d&rsquo;y aller avec les colonnes Bootstrap + le centrage vertical avec line-height), c&rsquo;était merveilleux.

## Mini animation

Et allez, pourquoi pas, à l&rsquo;ouverture, une mini-animation ?

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
</pre>
      </td>
      
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #6666ff;">.modal</span> <span style="color: #6666ff;">.modal-dialog</span> <span style="color: #00AA00;">&#123;</span>
    opacity<span style="color: #00AA00;">:</span> <span style="color: #cc66cc;"></span><span style="color: #00AA00;">;</span>
    transition<span style="color: #00AA00;">:</span> opacity .3s ease<span style="color: #00AA00;">,</span>transform .3s ease<span style="color: #00AA00;">;</span>
    transform<span style="color: #00AA00;">:</span> translateY<span style="color: #00AA00;">&#40;</span><span style="color: #933;">-30px</span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span>
&nbsp;
<span style="color: #6666ff;">.modal</span><span style="color: #6666ff;">.in</span> <span style="color: #6666ff;">.modal-dialog</span> <span style="color: #00AA00;">&#123;</span>
    opacity<span style="color: #00AA00;">:</span> <span style="color: #cc66cc;">1</span><span style="color: #00AA00;">;</span>
    transform<span style="color: #00AA00;">:</span> translateY<span style="color: #00AA00;">&#40;</span><span style="color: #cc66cc;"></span><span style="color: #00AA00;">&#41;</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

## Les liens qui vont bien

  * CSS Tricks : [A Complete Guide to Flexbox][1]
  * La gallerie de snippets /démos [Jack In The Flexbox][2]
  * &laquo;&nbsp;[Flexbox Revolution][3]&nbsp;&raquo; de Raphaël Goetter

Et voilà !

Un grand merci au collègue [@tentacode][4] pour cette merveilleuse image qui illustre l&rsquo;article. Également, sincères pensées aux devs (et au DA !) qui n&rsquo;arrivent (et n&rsquo;arriveront) pas à passer un seul jour sans qu&rsquo;ils entendent parler de Flexbox.

 [1]: http://css-tricks.com/snippets/css/a-guide-to-flexbox/
 [2]: http://jackintheflexbox.tumblr.com/
 [3]: https://speakerdeck.com/goetter/flexbox-revolution
 [4]: http://twitter.com/tentacode