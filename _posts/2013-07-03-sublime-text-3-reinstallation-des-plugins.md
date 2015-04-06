---
title: 'Sublime Text 3 : réinstallation des plugins'
author: Cyril Krylatov
layout: post
permalink: /2013/07/03/sublime-text-3-reinstallation-des-plugins/
dsq_thread_id:
  - 1462352599
categories:
  - Intégration web
tags:
  - Sublime Text 3
  - workflow
---
<p class="is-intro">
  Vous le savez peut-être, et si vous ne le saviez pas je vais vous le dire, ça vous évitera de l&rsquo;ignorer : <a href="http://www.sublimetext.com/">Sublime Text</a> s&rsquo;est vu sortir sa <a href="http://www.sublimetext.com/blog/articles/sublime-text-3-public-beta">version 3</a> (version <em>public beta</em>).
</p>

<!--more-->

TL;DR: $ cd ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/ && git clone https://github.com/wbond/sublime\_package\_control.git &laquo;&nbsp;Package Control&nbsp;&raquo; && cd &laquo;&nbsp;Package Control&nbsp;&raquo; && git checkout python 3

Et si comme moi vous avez fait la mise à jour à l&rsquo;arrache (je prends le .app et je le remplace), vous verrez que vous n&rsquo;aurez plus de plugins. Et oui, tout simplement. La raison à ça, c&rsquo;est que le dossier où sont contenus les plugins n&rsquo;est pas le même entre la version 2 et la 3. Enfin c&rsquo;est ce que j&rsquo;ai constaté. Si ça ne vous ai pas arrivé, tant mieux.

De ce fait, pour réinstaller les plugins, il vous faudra mettre la main dans le cambouis. Avant, pour installer ça, il fallait simplement glisser le .package dans le dossier &laquo;&nbsp;*Installed Packages*&nbsp;&raquo; et voilà MAIS PLUS MAINTENANT !

En effet, Sublime Text 3, pour le moment (espérons), n&rsquo;extrait plus par défaut un .package téléchargé, il faudra donc passer par ch&rsquo;git pour faire ça (assuming the fact that vous connaissez Git, cela va s&rsquo;en dire). Voici la méthode pour **réinstaller [Sublime Package Control][1]** sur Sublime Text 3.

Il vous faudra ouvrir dans le terminal le dossier Preferences -> Browse Packages et taper les commandes suivantes :

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
        <pre class="bash" style="font-family:monospace;"><span style="color: #c20cb9; font-weight: bold;">git clone</span> https:<span style="color: #000000; font-weight: bold;">//</span>github.com<span style="color: #000000; font-weight: bold;">/</span>wbond<span style="color: #000000; font-weight: bold;">/</span>sublime_package_control.git <span style="color: #ff0000;">"Package Control"</span>
<span style="color: #7a0874; font-weight: bold;">cd</span> <span style="color: #ff0000;">"Package Control"</span>
<span style="color: #c20cb9; font-weight: bold;">git checkout</span> python3</pre>
      </td>
    </tr>
  </table>
</div>

La première commande va cloner le projet dans un dossier &laquo;&nbsp;Package Control&nbsp;&raquo;, la 2ème vous mettre dans ce dossier et la 3ème changer la branch du repo git fraichement clonée pour avoir celle &laquo;&nbsp;compatible&nbsp;&raquo; Sublime Text 3.

Il semble que pour le moment, il n&rsquo;y ai que cette méthode pour installer des plugins, il ne faudra pas hésiter à aller sur les différentes sites / repo github (exemple avec [SideBar Enhancements][2]) pour voir si le plugin est directement compatible et si non, voir s&rsquo;il y a une branche de créée avec tout ce qu&rsquo;il faut dedans.

 [1]: http://wbond.net/sublime_packages/package_control/installation
 [2]: https://github.com/titoBouzout/SideBarEnhancements/tree/st3