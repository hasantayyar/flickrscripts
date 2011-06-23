// ==UserScript==
// @name           flickrAllowSaveAs
// @description    for logged in flickr users - removes spaceball div
// @copyright      2010, Hasan Tayyar BEŞİK (http://hasantayyar.com)
// @license        LGPL 
// @include        http://www.flickr.com/*
// ==/UserScript==

function removeDivL1(id){
 pl1 = document.getElementById(id);
 sl1 = pl1.children[0] 
 pl1.removeChild(sl1);
}
removeDivL1('allsizes-photo');
