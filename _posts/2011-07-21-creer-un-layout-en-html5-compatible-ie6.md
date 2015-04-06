---
title: Créer un layout en HTML5, compatible IE6 ?
author: Cyril Krylatov
layout: post
permalink: /2011/07/21/creer-un-layout-en-html5-compatible-ie6/
dsq_thread_id:
  - 1397252151
categories:
  - Intégration web
tags:
  - HTML5
  - IE6
  - intégration
---
*En introduction, j&rsquo;aimerai calmer les foudres de certain qui n&rsquo;hésiteront pas à dire que cet article est du vu et du revu. Mais bon, d&rsquo;une part j&rsquo;m&rsquo;en cogne pas mal de ça et ensuite, je vais essayer de faire un bref récapitulatif des informations que j&rsquo;ai glané durant l&rsquo;élaboration du &laquo;&nbsp;projet&nbsp;&raquo; qu&rsquo;il m&rsquo;a été demandé de mener à mon travail. Une bête histoire de partage et d&rsquo;astuces, au final.*

<!--more-->

J&rsquo;ai été récemment embauché en tant qu&rsquo;intégrateur web dans une des nombreuse agences de Paris. Pour vous remettre dans le contexte, ils ne font pas que des sites webs, c&rsquo;est plus une part dans un gros package proposé aux clients. De ce fait, le site web a besoin d&rsquo;être créé le plus rapidement possible, mais surtout qu&rsquo;il fonctionne. Ainsi, la mise en page est bonne, mais elle est faite en tableau. HTML 4 stylin&rsquo;.  
J&rsquo;ai donc été embauché pour apporter une sorte de vent frais à tout ça, à base d&rsquo;xHTML 1.0, de CSS 2.1 et de jQuery.  
Les clients étant ce qu&rsquo;ils sont, nous sommes obligés de garder la compatibilité avec IE6 qui représente tout de même une part de marché non négligeable. Ainsi, si nous (= l&rsquo;agence) ne nous engageons pas à rendre compatible nos sites avec IE6, nous perdons les contrats. C&rsquo;est triste, mais c&rsquo;est ainsi.

Bref, je me suis posé la question suivante : l'(x)HTML c&rsquo;est cool, mais pourquoi ne pas faire de l&rsquo;HTML5 ? (par HTML5, nous entendrons d&rsquo;utiliser les balises de &laquo;&nbsp;mise en forme&nbsp;&raquo; telles que header, nav, section, article, footer et non pas video et audio, voici pourquoi :) L&rsquo;équipe dans laquelle je suis intégré était un peu frileuse. L&rsquo;HTML5 n&rsquo;est pas encore une technologie finie, etc. Cette remarque est très pertinente pour les éléments &laquo;&nbsp;multimedia&nbsp;&raquo; de ce langage, beaucoup moins pour les balises sus-citées. Les choses étant dites, j&rsquo;ai essayé de faire un bête layout en HTML5 et qui soit compatible IE6. Par bête layout, nous entendrons un header, une sidebar de navigation et un contenu.

<p style="text-align:center;">
  <a href="http://dl.dropbox.com/u/6058285/HTML5IE6/index.html"><img src="/uploads/2011/07/HTML5IE6_1.jpg" alt="" title="HTML5IE6_1" width="640" height="480" class="alignnone size-full wp-image-132" /></a><br /><em>Si tu cliques, t&rsquo;arrives sur le .html</em>
</p>

Bon, concernant le code en lui même, il est peut-être pas optimal (après tout, j&rsquo;apprends. Si vous voyez des modifications, n&rsquo;hésitez pas à me le faire savoir dans la partie commentaires) (tiens, y&rsquo;a un h1 dans le header et un autre dans article. ihihihi) mais c&rsquo;est vraiment la base. Mais intéressons-nous à la compatibilité avec IE6.

HTML5 n&rsquo;est pas reconnu par IE6 car logiquement, IE6 ne peut pas reconnaître les balises vu qu&rsquo;il ne les connait pas, vu qu&rsquo;à la création d&rsquo;IE6 et bien HTML5 n&rsquo;existait pas. Ainsi, avec un bout de JavaScript il suffit simplement de créer les éléments HTML5 :

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
        <pre class="javascript" style="font-family:monospace;">document.<span style="color: #660066;">createElement</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">"header"</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
document.<span style="color: #660066;">createElement</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">"footer"</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
document.<span style="color: #660066;">createElement</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">"section"</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
document.<span style="color: #660066;">createElement</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">"aside"</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
document.<span style="color: #660066;">createElement</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">"nav"</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
document.<span style="color: #660066;">createElement</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">"article"</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
document.<span style="color: #660066;">createElement</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">"figure"</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
document.<span style="color: #660066;">createElement</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">"figcaption"</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
document.<span style="color: #660066;">createElement</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">"hgroup"</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
document.<span style="color: #660066;">createElement</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">"time"</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Ainsi fait, il faudra joindre dans la balise HEAD de notre page ce code (que l&rsquo;on aura mis dans un beau .js) via l&rsquo;appel suivant (qui parle de lui-même) :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
</pre>
      </td>
      
      <td class="code">
        <pre class="html" style="font-family:monospace;">&lt;!--[if IE]&gt;&lt;script src="html5-ie.js"&gt;&lt;/script&gt;&lt;![endif]--&gt;</pre>
      </td>
    </tr>
  </table>
</div>

Lorsque nous faisons un *document.createElement*, c&rsquo;est naturellement que le navigateur ne va pas se dire &laquo;&nbsp;oh tiens, ces éléments sont créés, je vais donc les transformer en éléments de type block lalala&nbsp;&raquo; (quel connard) alors qu&rsquo;IE6 en a apparemment besoin. Donc, un coup de CSS :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
</pre>
      </td>
      
      <td class="code">
        <pre class="css" style="font-family:monospace;">header<span style="color: #00AA00;">,</span> nav<span style="color: #00AA00;">,</span> article<span style="color: #00AA00;">,</span> footer<span style="color: #00AA00;">,</span> address<span style="color: #00AA00;">,</span> section <span style="color: #00AA00;">&#123;</span> <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span><span style="color: #993333;">block</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Il ne vous restera plus qu&rsquo;à faire votre mise en page et tadam.

Pour info, j&rsquo;ai essayé de refaire la mise en page en HTML5 d&rsquo;un site actuellement en prod qui est faite en tableaux, et le résultat est finalement le même sur IE6 entre la version HTML5 et la version tableaux.

Fabuleux.

J&rsquo;espère que cet article vous aidera un peu d&rsquo;une quelconque manière. N&rsquo;hésitez pas à me faire des retours d&rsquo;expérience dans les commentaires !