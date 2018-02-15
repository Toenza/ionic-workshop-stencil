/*! Built with http://stenciljs.com */
(function(appNamespace,publicPath){"use strict";
(function(publicPath){var t,n,r=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t};Context.activeRouter=(t={},n=[],{set:function(e){t=r({},t,e),function(){for(var t=n,r=0;r<t.length;r++)(0,t[r])()}()},get:function(n){return n?t[n]:t},subscribe:function(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var r=!0;return n.push(t),function(){if(r){r=!1;var e=n.indexOf(t);n.splice(e,1)}}}});
})(publicPath);
})("App","/build/app/");