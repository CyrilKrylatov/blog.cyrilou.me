---
title: 'Make sure that `.scroll()`&rsquo;s jQuery event will work everywhere'
author: Cyril Krylatov
layout: post
permalink: /2013/05/05/make-sure-that-scrolls-jquery-event-will-work-everywhere/
dsq_thread_id:
  - 1399342335
categories:
  - Intégration web
  - Javascript
tags:
  - front-end
  - Javascript
---
<p class="is-intro">
  I recently (well, 10m ago) had an issue with <a href="http://api.jquery.com/scroll/">`.scoll()`&rsquo;s jQuery event</a>.<br /> So, why not sharing my (probably not the best) solution with you?
</p>

<!--more-->

The fonction was working perfectly fine on Chrome with \`$(&laquo;&nbsp;body&nbsp;&raquo;).scroll();\`. Because Chrome is a real browser. Hinhin.  


Firefox handles this event only on html element, Safari doesn&rsquo;t seem to like when the body is modified  
and IE neither&#8230; Well, IE doing IE.

I had to use that to show a minified version of the top menu of a website when we scroll above the main header, so here it is:



Well, if you have any protip to make it more simple, feel free to contribute to the [Gist][1] directly and I will update!

## EDIT

Aaaand here we are, [@_mlb][2] just updated my code. Nothing to say but thanks a lot. Here it is:

 [1]: https://gist.github.com/DaPo/5520294
 [2]: https://twitter.com/_mlb/