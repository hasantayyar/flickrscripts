// ==UserScript==
// @name           flickrAllowSaveAs
// @description     darker background good for focusing on photo
// @copyright      2011, Hasan Tayyar BEŞİK (http://hasantayyar.com)
// @license        LGPL 
// @include        http://www.flickr.com/*
// ==/UserScript==

function makeDark($color){
 document.body.style.setProperty('background-color',$color)
}

makeDark( '#464641' );
