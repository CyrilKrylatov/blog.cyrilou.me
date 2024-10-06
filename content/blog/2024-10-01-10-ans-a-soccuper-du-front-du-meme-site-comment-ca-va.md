---
title: "Après 10 ans à s’occuper du front du même site, comment ça va ?"
---

Si je devais en faire un résumé de ces 10 années, un ressenti global, ce serait que d’une manière générale, je suis assez content d’avoir la chance de participer à un produit très stable, tant dans sa technologie que dans ce qu’il propose, et qu’il soit d’une certaine manière d’utilité publique, en ce sens qu’il permet à pas mal de personnes de dégager des revenus grâce à leurs connaissances.

Ainsi, je ne me considère pas comme faisant un bullshit job. Le site que l’on propose permet à pas mal de gens de se procurer un revenu, aussi minime soit-il, aussi complémentaire à une autre activité soit-il. Il permet à d’autres gens de trouver des freelances de la qualité qu’ils souhaitent pour lancer leur propre projet.

C’est cette vision, cette raison, que je me suis faite au cours des années, qui m’a poussé à rester autant de temps là où je suis et à ne pas vouloir faire du front pour une quelconque startup ou SaaS qui propose un énième produit marketing IA-bullshit-related qui ne serait pas en accord avec le peu de principes que je puisse avoir.

Il y a eu des hauts, il y a eu des bas, des très bas, des envies de me barrer, des envies de tout donner, des envies de lâchez-moi la grappe, des envies de ouais non finalement on est biens, bref, on a bien vécu.

Nous avons la chance de savoir ce que l’on fait, que le site, techniquement, n’ait pas connu d’énorme remise à plat. Néanmoins, le front a connu plusieurs gros virages que je vais essayer de récapituler ici. Le back-end aussi en a connu, majoritairement sur les montées de versions de Symfony, évidemment, nous en sommes à la 7.1 aujourd’hui, tout va bien de ce côté, mais nous ne sommes pas là pour ça.

Ma mémoire me faisant pas mal défaut, elle a d’ailleurs laissé sa place à une dette de fatigue de l’enfer, les dates ne sont sûrement pas très bonnes et les événements ne se sont peut-être pas produits dans cet ordre-là, mais eh, tant pis.

C’est parti.

## La première version du site sur laquelle je n’ai pas tellement travaillé

<img width="1280" height="1168" src="../images/10-ans-1.jpg" alt="" />

Quand j’ai commencé à intervenir sur la première version de 5euros, c’était par intermittence. En effet, j’ai été recruté pour d’abord m’occuper du front de BetaSeries, ou sur une appli de rencontre qu’on voulait lancer, je ne sais plus laquelle des deux, et, sur des temps déterminés, de temps en temps, je venais donner un coup de main sur 5euros.

En effet, les trois projets ont été lancés par les deux mêmes fondateurs et appartenaient à la même boîte, à savoir Ouiche Lorraine.

De mémoire, le front de 5euros a été commencé principalement par le développeur back et l’UI designer qui avait également des compétences en front. Nous sommes en 2013 / 2014, on parle de Bootstrap 2.3.2, de Less et de jQuery. Grunt pour contrôler tout ça. Pas vraiment de méthodo sur le front, néanmoins tout s’affichait comme il fallait et c’était le principal et c’était très bien.

De souvenir, je crois que je suis intervenu quelques fois sur cette version du site pour faire quelques maintenances mais pas de réelle intégration, vu qu’une nouvelle version du site était dans les tuyaux. J’étais de toute façon pas mal occupé sur BetaSeries, la mission qui m’incombait alors se basait sur la même configuration : devoir remettre à plat du jQuery bien legacy, supprimer Less, améliorer l’existant, préparer la nouvelle version du site de l’époque.

Cette première version du site m’a permis de me familiariser avec le concept du projet, l’équipe en place (composée de 3 personnes, bon), la stack back présente (Symfony et Twig), bref, faire de la TMA là-dessus m’a été formateur pour la suite des événements.

## Nouveau site pour nouveau front

On arrive fin 2015 / début 2016. La nouvelle version du site est prête.

<img loading="lazy" width="1280" height="1220" src="../images/10-ans-2.jpg" alt="" />

Durant ces presque deux années, de l’autre côté, je me battais avec le front de BetaSeries, à refacto du code legacy, revoir les pages une par une, y supprimer Less, ses nested, ses sélecteurs uniques, améliorer le code écrit avec jQuery en place au profit de Vanilla puis du React. J’ai compris à l’époque comment découper mon intégration en composants, les props, les states, du JS (en dehors du templating de JSX) pour faire fonctionner ça. Cette habitude me suit encore maintenant.

J’ai essayé de comprendre Redux, je n’ai jamais compris Redux, ça m’a créé de belles frustrations mais l’équipe présente s’en occupait finalement à ma place.

Entre-temps, le site de rencontre a été fermé parce qu’on n’avait pas une montagne de fric à cramer en marketing mais l’équipe de ce site (dont je faisais parti) a ensuite rejoint BetaSeries à temps complet pour s’en occuper sérieusement.

Du côté de 5euros, fort de l’expérience de BetaSeries, lors de cette nouvelle version du site, nous avons décidé de ne rien garder du tout du front du site précédent pour se concentrer sur une nouvelle base.

Bootstrap est mis à jour pour sa [version 3.3.0](https://getbootstrap.com/docs/3.3/) qui est toujours en Less donc je garde la compilation en Less mais n’en utilise aucunement sa syntaxe.
La méthode [BEM](https://getbem.com/) est mise en place (sans nested).
Je m’inspire d’un [article de blog de Ghost](http://dev.ghost.org/css-at-ghost/) qui explique comment ils découpent leur CSS en layout / components / patterns, on utilise beaucoup de SVG (merci Sketch), on garde toujours Grunt parce qu’à l’époque (et encore maintenant) ce que je lis de Webpack me hérisse les poils et c’est parti.

Bref, nous y voilà, New website :

<img loading="lazy" width="1280" height="169" src="../images/10-ans-3.jpg" alt="" />

À côté de ça, nous avons un petit peu mieux industrialisé le front, en ayant un designer (le même du site de rencontre et de BetaSeries) qui a fait le design complet de cette nouvelle version sur Sketch et moi qui intègre ça pixel perfect. C’est d’ailleurs toujours le cas-ish (-ish car il y a parfois des pixels qui manquent mais ça reste entre nous).

À noter également que le design mobile n’était pas fait, je faisais moi-même le côté responsive et sur certaines problématiques de type « ouin je sais pas comment faire ça » on la faisait en duo avec le designer.

De mon côté, je fais toujours ça à côté de BetaSeries. Même si de longues périodes de mon temps BetaSeries sont consacrées à 5euros, je ne fais officiellement pas partie de l’équipe 5euros. Je suis donc le projet de loin, dans le sens où je reste employé BetaSeries avec une équipe de 4 autres développeurs.

Cette version du site nous a duré pas mal de temps, 6 ans environ, et beaucoup de mises à jour diverses et variées pour montrer que le site bouge : mise en place de pages statiques de contenus, de nouvelles fonctionnalités, différents changements sur la home, améliorations constantes des pages de service, et j’en passe. Mais tout ça se fait à côté de BetaSeries qui reste mon employeur et 5euros une sorte de side-project.

## Salarié pour 5euros

Nous sommes en 2019, arrive un moment charnière où plusieurs choses se croisent : sur BetaSeries, l’ambiance est bonne malgré le départ de deux personnes que j’estimais beaucoup, mais la mission me plaît de moins en moins et, en même temps, 5euros commence très gentiment à décoller : la boîte arrive à payer de plus en plus de salaires en fonds propres, il y a beaucoup d’idées à mettre en place mais qui ne vont pas assez vite en termes de dev du fait d’un manque de ressources humaines.

Le designer de 5euros, qui était le même de BetaSeries à travailler comme moi sur les deux projets, avait déjà rejoint 5euros juste avant moi, est passé entre-temps product designer (puis deviendra PDG) m’a demandé, avec un des fondateurs, de les rejoindre à temps plein, avec accord du deuxième fondateur derrière BetaSeries, enfin je crois, pour justement accélérer tout ça.

Cela faisait grossièrement 5 ans que j’étais chez BetaSeries, j’avais envie et besoin de changement car, pour diverses raisons, étonnamment, j’en étais arrivé à travailler de moins en moins sur BetaSeries ou 5euros, c’est donc arrivé à point nommé.

Transfert de contrat, je garde mon ancienneté de BetaSeries et me voilà employé à temps plein de 5euros. Tout s’accélère pour le front, le chiffre d’affaires augmente gentiment, pas exponentiellement comme tout le monde l’aurait voulu, mais gentiment quand même. On arrive à une équipe de 10 à 15 personnes dont 2 développeurs back et toujours moi, le front. Tout ça sur fonds propres. En me relisant j’ai l’impression d’insister dessus mais c’est important pour moi.

Concernant le front, toujours l’organisation de fichiers du post de Ghost, MaJ Bootstrap 4 qui introduit Sass puis sa 5.3, petit à petit, j’ai refacto tout le legacy jQuery pour de l’ES6, je vais all-in sur CSS Flexbox puis CSS Grid, on continue d’implémenter pas mal de choses dont le tchat en direct, les notifications, la PWA, pas mal de composants qui servent à notre communauté.

Également, je me concentre beaucoup sur le SEO avec un consultant, on améliore de jour en jour notre score Lighthouse, je prends un gros virage a11y qui améliore tant mon code HTML que surtout l’accès au site pour les personnes ayant besoin de certaines dispositions.

Et voilà, en 6 ans, le site évolue, on propose de nouvelles choses diverses et variées.

<img loading="lazy" width="1280" height="1579" src="../images/10-ans-4.jpg" alt="" />

## Changement de nom

Au lancement réel de 5euros, vers 2018 environ, ce moment où on s’est dit « on tient un truc, ça fonctionne bien », je me souviendrai toujours de cette réunion pour savoir si on conservait 5euros ou non.

L’argument principal retenu, qui n’a pas fait l’unanimité au sein de l’équipe, a été que Fiverr veut bien dire « Cinq dollars-ish » et que nous grosso merdo, on pouvait se dire qu’on proposait des services à partir de 5 €-ish. Bon, j’ai beau relire cette phrase et essayer de la remanier, ce n’est pas clair, c’est plus clair dans ma tête. Ça commence à remonter. Je me souviens que j’étais dans la team ultra sceptique.

Tout ça pour dire que pendant un paquet d’années, on a fonctionné avec ce nom, 5euros, qu’il n’a pas eu l’effet qu’on aurait voulu et que ça a eu l’effet qu’on peut tous imaginer maintenant mais c’est facile de dire aujourd’hui « duuuh » bon bref, et donc, qu’à un moment donné, les fondateurs ont dit grossièrement « v’là-t’y pas qu’il faudrait changer de nom » (ils n’ont jamais tenu ces termes et le changement de nom a pris plusieurs mois, mais je simplifie parce que je ne me souviens plus de comment ça s’est passé exactement, en tout cas la réflexion de base était plus évoluée que « v’là-t’y pas qu’il faudrait changer de nom »).

Et du coup, toute cette introduction longue comme la mort pour qu’in fine v’là-t’y pas qu’on a changé de nom.

<img loading="lazy" width="1280" height="1154" src="../images/10-ans-5.jpg" alt="" />

Cette fois, côté front, le changement de DA est un peu plus léger qu’entre les deux versions précédentes de 5euros : la page d’accueil est entièrement revue, le header et le footer également. Le header mobile avec les catégories m’a fait très longtemps suer à l’époque, mais c’était [techniquement un challenge](https://x.com/IAmNotCyril/status/1539596946628923395) que de ne pas utiliser de JS pour le gérer (j’aurais dû, mais attends, l’auto-critique de mon travail, de mon métier et de ma vie en général, 90 € la consultation merci, c’est à la fin).

Également avec ComeUp, je soumets l’idée de se mettre à Stimulus, un framework JS qui se branche très facilement sur notre HTML et qui me facilite l’utilisation du JS.

Pendant ce temps, enfin c’était avant, Stimulus, mais bon, on n’est pas là pour dessiner une frise chronologique n’est-ce pas, Symfony commence à mettre un pied dans le front avec [Webpack Encore](https://github.com/symfony/webpack-encore-bundle) qui est une surcouche agréable de Webpack et qui s’intègre parfaitement dans l’écosystème de Symfony.

Ils continuent encore de gérer de plus en plus de front avec [Symfony UX](https://ux.symfony.com/) où le front et le back sont intimement liés. Et j’ai eu le nez creux vu qu’ils utilisent eux-mêmes Stimulus. Qu’est-ce qu’on aurait rigolé si j’avais utilisé Alpine ou Preact à la place comme j’ai voulu le faire ! ᕕ( ᐛ )ᕗ

En termes de CSS, j’en fais de moins en moins pour utiliser de plus en plus les classes atomiques de Bootstrap. J’arrive à sortir des composants entiers sans écrire de ligne de CSS et je m’en porte très bien et le site également du fait qu’en atomic c’est plus compliqué d’avoir des régressions visuelles.

Dans la foulée de tout cela, nous recrutons l’ancien alternant-designer de BetaSeries qui est allé voir ailleurs entre-temps et qui est revenu parmi nous, avec qui je m’entends superbement bien ; le maintenant PDG ex-designer historique lui confie les rênes du produit et finit par quitter l’aventure quelques temps après.

Sur une note autre que le côté purement développement, je suis également élu CSE de ComeUp ; c’est un rôle qui me tient à cœur, les sujets que j’ai eu à traiter je les ai traités du mieux que je pouvais et je continue encore aujourd’hui d’avoir ce rôle d’oreille discrète. Je suis très fier et très honoré que mes collègues m’accordent cette confiance. J’espère qu’ils en sont satisfaits.

## Aujourd’hui

<img loading="lazy" width="1280" height="921" src="../images/10-ans-6.jpg" alt="" />

Donc actuellement, nous en sommes là en termes de front, entre autres : toujours du Bootstrap, du Stimulus, de l’atomic, de moins en moins de CSS, la plupart des interactions front sont gérées par le back grâce à Symfony UX et surtout les [UX Live Component](https://symfony.com/bundles/ux-live-component/current/index.html) donc on gagne tous du temps (surtout moi, le moins de JS, le mieux je me porte, dans le sens où on a pas mal d’interactions UI gérées presque uniquement via le back), tout ça au profit de l’utilisateur.

La dernière grosse feature à date de sortie a été de refacto tout le système d’authentification, principalement dans des modales, tout est piloté par Symfony UX, on en est assez contents.

## Être conscient de ses limites et faiblesses

Ce n’est pas facile de revenir sur ces 10 ans sur le même site et de faire son introspection. J’essaie de me souvenir de ce qu’on a pu discuter durant mes différents entretiens annuels avec les différentes personnes que j’ai croisées et premièrement ils s’en dégage que ma principale faiblesse, c’est tout simplement d’être trop fort.

Secondairement, la dette technique que je me suis créée tout seul au fur et à mesure du temps, c’est de ne pas avoir voulu implémenter Bootstrap entièrement. Je l’ai, jusqu’à encore très récemment, utilisé qu’à sa superficie, sans trop le configurer et en écrasant son style pour le configurer. Ou essayer de le tordre comme moi je le voulais alors qu’il fallait simplement le configurer. Ce qu’il s’est passé, c’est que je me suis toujours dit que Bootstrap m’aiderait pour le début et que je m’en détacherais petit à petit, me croyant plus malin que tout le monde.

Terrible erreur. Ne faites pas ça.

Ces quelques dernières années, j’ai réussi à rattraper mon erreur en prenant Bootstrap à bras le corps et en le configurant le plus profondément possible, en utilisant un maximum de ses propres composants. Bootstrap fait partie intégrante du projet et n’en bougera pas. J’ai presque été tenté de passer sur Tailwind mais 1) la flemme 2) je n’y voyais pas forcément d’intérêt 3) voir 1).

Ensuite, j’aurais dû faire de l’atomic bien plus rapidement. Ça nous aurait évité nombre de régressions visuelles, c’est hyper compliqué de maintenir seul un aussi gros site avec autant d’éléments et s’assurer que rien ne pète, et difficile de l’expliquer et de le faire comprendre. Et de redresser la barre sans rien changer. Depuis que je suis passé à du quasi que-atomic, plus rien ne bouge, ces points-là ne sont quasi plus discutés, j’écris de moins en moins de CSS, c’est bénéfique pour tout le monde.

La maintenance du CSS est un calvaire sur un site de cette échelle, tout comme maintenir du Vanilla JS l’est, donc la direction prise avec Bootstrap et Stimulus nous a grandement aidés à améliorer tout ça.

Pour finir, mon principal défaut, c’est certainement de ne pas être assez attentif. Je laisse passer des choses grosses comme des maisons qui, avec mon expérience, ne devraient pas. Je me fais rattraper en code review ou pire, une fois que c’est en prod. Je n’arrive pas à m’en détacher. Je n’ai que très peu d’explication à ça ; la principale doit être certainement la fatigue. J’en suis conscient, on me demande d’améliorer ce point (l’inattention, pas la fatigue), de corriger cette erreur, je n’y arrive pas, j’ai conscience de tout ça mais c’est compliqué, on est sur un mode de David Goodenough qui n’est pas suffisant dans certains cas mais bon, écoutez, peut-être qu’un jour ça se débloquera. En tout cas j’essaie.

## En conclusion

10 ans à être le seul maître à bord du front, c’est long. J’aurais adoré transmettre le peu que je sais du front à quelqu’un d’autre et pouvoir y confronter mes idées et qu’on me dise que telle ou telle chose n’est pas une bonne idée. On m’a toujours fait confiance de ce côté-là et ce dès mon arrivée. C’est une chance incroyable, mais également une forme de pression.

J’ai de la chance d’avoir mes collègues back qui m’ont déjà aidé à prendre différentes décisions bien évidemment et encore aujourd’hui, beaucoup d’idées que je n’ai pas eues viennent d’eux et c’est génial, je les remercie pour cela.

Mais ce que je veux dire par là, c’est que plus que ça, je ne connais pas le fait d’avoir un collègue qui fasse pile le même métier que moi et ça, je pense que c’est ce qu’il me manque le plus.

Un autre regret que j’ai pu avoir, moins maintenant, c’est de ne pas avoir changé d’entreprise pour voir autre chose et me confronter à d’autres idées que les miennes. Je pense que s’il y avait un point vraiment négatif, ce serait celui-là. Je me suis trop vite retrouvé dans ma zone de confort sans vouloir en bouger, j’aurais dû aller voir du pays et changer d’entreprise tous les 3 ou 4 ans comme beaucoup de mes congénères.

Néanmoins, ce regret, je l’atténue par cette chance d’avoir trouvé la bonne entreprise dans laquelle je me sente bien relativement tôt dans ma carrière. J’ai parfois eu envie de démissionner, il y a d’ailleurs, comme tout à chacun j’imagine, quelques raisons très claires dans ma tête qui feraient que ma démission serait probablement instantanée, je les garde pour moi, on les a déjà frôlées quelques fois très dangereusement, mais pour le moment, tout va bien.

Actuellement, le pépère il est certes payé légèrement en deçà du marché mais ça suffit amplement pour rembourser la maison, payer les croquettes au clébard et se payer un p’tit comics de temps en temps, il est dans une équipe qui s’entend bien pour une mission intéressante, il est écouté quand il a quelque chose à dire, il s’occupe de ses collègues quand il y a besoin, il a fait entrer son meilleur ami du collège et le meilleur ami d’un autre meilleur ami, il parle de lui à la troisième personne, il fait des phrases à rallonge qui n’en finissent pas donc bref, pour conclure :

ouais, ça va.
