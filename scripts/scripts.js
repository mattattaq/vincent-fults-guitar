$(document).ready(function(){$('a[href^="#"]').bind("click.smoothscroll",function(o){o.preventDefault();var t=this.hash,e=$(t);$("html, body").stop().animate({scrollTop:e.offset().top-90})})});
