---
title: 'Bien préparer son portfolio pour un entretien d&rsquo;embauche'
author: Cyril Krylatov
layout: post
permalink: /2012/10/27/bien-preparer-son-portfolio-pour-un-entretien-dembauche/
dsq_thread_id:
  - 1400886870
categories:
  - Intégration web
  - Ma putain de vie.
tags:
  - "entretien d'embauche"
  - Intégration Web
  - portfolio
---
Tu es intégrateur ? Tu cherches une place dans une quelconque entreprise qui fait déjà du site web à la chaine ? Tu veux faire un portfolio pour montrer un peu ce que tu as dans le bide ? Voici un article qui va te montrer deux ou trois trucs à appliquer sur ton portfolio pour marquer des points lors de l&rsquo;entretien d&rsquo;embauche, histoire de ne pas montrer au monde que t&rsquo;es une plus grosse tanche que tu n&rsquo;en as physiquement déjà l&rsquo;air.

<p style="text-align:center;">
  <a href="http://www.flickr.com/photos/dondapo/7767898130/" title="DSCF3858 de Cyril Krylatov, sur Flickr"><img src="http://farm9.staticflickr.com/8289/7767898130_116378a53d_z.jpg" width="640" height="425" alt="DSCF3858" /></a>
</p>

*Alors non, [cette photo][1] n&rsquo;a aucun foutu rapport avec le sujet, j&rsquo;avais juste envie de la mettre, voilà, c&rsquo;est comme ça.*

J&rsquo;aime bien regarder les portfolios des étudiants qui cherchent un stage / emploi en tant qu&rsquo;intégrateur. J&rsquo;ai constaté les choses suivantes, au fil des années :

  * Aucun d&rsquo;entre eux ne s&rsquo;est aventuré en dehors des galons de la formation proposée par le diplome
  * &#8230; de ce fait le code est dégueulasse (physiquement parlant, pas forcément techniquement)
  * Les designs sont catastrophiques
  * Ils ont tous un logo pas forcément beau
  * Ils essayent de rendre ça &laquo;&nbsp;cool&nbsp;&raquo; en utilisant les plugins jQuery à foison
  * Il n&rsquo;y a pas de plugins &laquo;&nbsp;de base&nbsp;&raquo;
  * Facilité déconcertante à mettre un commentaire conditionnel pour kicker IE8 (inclus) et moins

Et j&rsquo;en passe. Partant de là, voici, à mon avis, quelque points à suivre pour marquer des points lors de l&rsquo;entretien d&rsquo;embauche (PS: ces points dégagés proviennent d&rsquo;observations que j&rsquo;ai fait lorsque je visitais ces fameux portfolios ou encore mon propre entretien d&rsquo;embauche à Colorz (ou même mon entreprise d&rsquo;avant, pourquoi pas)).

## Le rendez-vous en lui même

J&rsquo;ai la chance d&rsquo;être dans une entreprise composée de trois patrons qui ont des profils complémentaires : un directeur technique, un directeur de création et un directeur commercial. Avoir les trois en face de soit m&rsquo;a tout de suite avertis de quelque chose : mon portfolio va être passé en revu tant sur le code (directeur technique avec l&rsquo;inspecteur de code, regardant mon code avec moi, commentant sur le code en lui même) que le design / ergonomie (directeur créatif te dit &laquo;&nbsp;tiens, c&rsquo;est marrant, je ne peux pas cliquer là et si jfais ça et ça comment ça se fait que ça fasse ça). Du coup, et bien non, n&rsquo;essaye pas de mentir sur ce que tu es vraiment : de toutes façons, ça se verra assez vite.

Ainsi, sur votre portfolio, kickez moi ces putains de notes que vous vous attribuez en PHP, HTML5, CSS3 ou jQuery : il vaut mieux travailler avec des personnes qui savent ce que tu vaux **VRAIMENT** et qui te pousseront vers le haut que des personnes qui tomberont des nues quand ils verront que ce qu&rsquo;il y avait sur ton portfolio c&rsquo;était du flan. Et puis même, un peu d&rsquo;estime de soit-même : les mecs qui mettent du 5/5 en CSS avec un code CSS purement dégueulasse, ça me fait vomir. Et puis bon, que diable, grand Dieu, nom d&rsquo;une pipe en bois de la putain de ta&#8230; bref, un peu de self-estime.

## Le design

Personnellement, étant intégrateur, je n&rsquo;ai aucun talent sur Photoshop (CF ce blog, héhé), ça ne m&rsquo;empêche pas d&rsquo;essayer de faire un design extrêmement simple mais très fonctionnel (à part le formulaire pour écrire un commentaire, il faut que je m&rsquo;en occupe, je sais).  
**Les portfolio, c&rsquo;est pareil** : n&rsquo;essaye pas de faire un \*vrai\* design qui ne ressemblera à rien car tu n&rsquo;as pas les compétences pour en faire un. Privilégie un design très épuré (pourquoi pas uniquement de la typo ?) et surtout, il faut **absolument** suivre un système de grilles ([960 Grid System][2], [CSS Grid][3], [CSSNormalize][4] en propose un, [The 1kb Grid][5] et j&rsquo;en passe).

A défaut d&rsquo;avoir un design, ayez un semblant de design, n&rsquo;agresse pas un oeil [habitué à l&rsquo;alignement][6] et utilise ces grids. Si il y a un webdesigner à l&rsquo;entretien il sera content que tu prennes pas la chose à la légère, s&rsquo;il y a un développeur il verra que tu es capable d&rsquo;utiliser des Frameworks / utiliser un code qui n&rsquo;est pas le tien. Des points en plus.

## Le code

Tu es étudiant, le code que tu sors n&rsquo;est peut être pas optimisé. De toute façons, c&rsquo;est pas à l&rsquo;école qu&rsquo;on vous apprendra le vrai code CSS à utiliser lorsque vous travaillez sur de gros projets ou encore en groupe. De ce fait, essaye de te faire au [DRY CSS][7], [SMACSS][8] & [OOCSS][9].

Ca montrera que 1) tu te soucies de ton code 2) tu te soucies du mec qui va reprendre votre code 3) tu tu soucies des perfs de votre page 4) tu montres au dev présent à l&rsquo;entretien que tu connais des termes savants donc que tu n&rsquo;es pas le dernier des abrutis.

## Les librairies à utiliser ou non

Alors, jQuery, c&rsquo;est mignon, ne va pas m&rsquo;en mettre 20 plugins jQuery ta page pour faire des tops effets bien dégueulasses. Alors oui, ça fait un slider en 3D, ça fait du rotate sur du texte sur un hover, ça fait des hover de dingue sur les images mais ce n&rsquo;est pas en cachant ta non-connaissance de jQuery derrière des plugins tout faits que vous tu vas gagner quelque chose. Peut être une petite moquerie du développeur présent qui lui est un pro-mootools, mais sans plus.

En revanche, quitte à utiliser jQuery, pourquoi ne pas générer un layout ou une pagination avec ? Ou un autre code du genre ? C&rsquo;est ni trop simple ni trop compliqué, c&rsquo;est discret, le développeur le verra (si ce n&rsquo;est le cas, parles-en, vends ton truc, c&rsquo;est peut être rien mais c&rsquo;est TOI qui l&rsquo;a fait. Alors qu&rsquo;un plugin, tu ne sauras jamais comment ça fonctionne et pire ! tu ne montreras pas un vif intérêt pour le développement en général.

Bon, le mieux restera de faire du code en Vanilla JS, hein, on va pas se le cacher.

## Ce qu&rsquo;il faut absolument utiliser / savoir en parler

Parlez d&rsquo;un gestionnaire de versions. Par exemple, Git, avec le très célèbre [GitHub][10]. Perso, je suis arrivé en entretien, &laquo;&nbsp;est-ce que tu sais utiliser un gestionnaire de versions genre git ?&nbsp;&raquo; je n&rsquo;ai pas su dire grand chose à part la sainte trinité : &laquo;&nbsp;oui, j&rsquo;ai des repo git sur github, j&rsquo;ai déjà clone des projets et les miens aussi petits soient-ils sont sur github&nbsp;&raquo;. Cela prouve que tu sais créer un repo, commit, pull, push. Des points en plus. D&rsquo;ailleurs, pourquoi ne pas mettre ton portfolio sur Github ?

Pour le portfolio en lui même : [HTML5Shiv][11], [Selectivizr][12], et on en discute pas. Tout ça dans un commentaire conditionnel, hein, on est pas des chiens. OH et avant de les mettre, si le dev présent te demande à quoi ça sert, il faudra savoir répondre.

Pour IE & co : avec tout ça, tu vas me kicker ton commentaire conditionnel de mes genoux pour que ton site s&rsquo;affiche même sur IE7 et n&rsquo;affiche pas, grâce à ce commentaire, un message genre &laquo;&nbsp;votre navigateur é tro vieu ^^^^&nbsp;&raquo;. Ton portfolio n&rsquo;est pas un énorme site, c&rsquo;est limite pas normal qu&rsquo;il ne passe pas sur IE7. Enfin, passer sur IE7 avec de la [Graceful degradation][13], s&rsquo;entend.

## La conclusion

Je pense que ces points marqués feront plaisir tant à toi qu&rsquo;aux personnes en face de toi. Avoir un portfolio 100% homemade et non pas tout fait est toujours plus glorifiant que d&rsquo;avoir un portfolio avec un thème téléchargé, des plugins dans tous les sens que tu n&rsquo;as pas fait : au moins, les personnes présentes sauront exactement où tu en es et verront que tu t&rsquo;es bougé les doigts du fion pour leur offrire un produit pas forcément beau visuellement, mais qui techniquement tiendra la route. Vu que tu seras recruté sur ta technique, pas ton utilisation sur Photoshop. Héhé.

Bon, naturellement, tout commentaires est le bienvenue, le débat est ouvert. Expériences ? Recruteurs ? Faites vous plaisir.

 [1]: http://blog.c-krylatov.com/2012/08/12/des-photos-de-venise-et-porec/
 [2]: http://960.gs/
 [3]: http://cssgrid.net/
 [4]: http://lab.darklg.me/CSSNormalize/
 [5]: http://1kbgrid.com/
 [6]: http://blog.c-krylatov.com/2012/04/23/que-faire-avant-de-se-lancer-en-webdesign-ou-en-integration/
 [7]: http://www.vanseodesign.com/css/dry-principles/
 [8]: http://smacss.com/
 [9]: http://coding.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/
 [10]: https://github.com/DaPo
 [11]: http://code.google.com/p/html5shiv/
 [12]: http://selectivizr.com/
 [13]: http://en.wikipedia.org/wiki/Fault-tolerant_system