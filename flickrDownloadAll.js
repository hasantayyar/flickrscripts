// ==UserScript==
// @name           flickrDowloadAll
// @description     open all listed images in new window in a very disturbing way
// @copyright      2011, Hasan Tayyar BEŞİK (http://hasantayyar.com)
// @license        LGPL 
// @include        http://www.flickr.com/*
// ==/UserScript==

// I should generate a link to make this action by user :)

downloadContainer = new Object();

var thumbs = document.getElementsByClassName('pc_img');
downloadContainer.thumbs = [];
for (var i = 0; i < thumbs.length; i++) {
        downloadContainer.thumbs.push(thumbs[i].src);
}

if(downloadContainer.thumbs.length>0){
        var url = '';
        for(var i = 0; i < downloadContainer.thumbs.length; i++) {
                        url = downloadContainer.thumbs[i].replace('_s.','_b.').replace('_m.','_b.');
                        window.open(url);
        }
}
