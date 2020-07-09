$(document).ready(function(){
const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
document.getElementById('video-wrapper').getElementsByTagName('video').style['min-height'] = h + 'px';
document.getElementById('video-wrapper').getElementsByTagName('video').style['height'] = h + 'px';
});// JavaScript Document