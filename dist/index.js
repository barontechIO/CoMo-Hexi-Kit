!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=6)}({1:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o}));var r="3074457355995945552",o=280},6:function(n,t,e){"use strict";e.r(t);var r=e(1),o=function(n,t,e,r){return new(e||(e=Promise))((function(o,i){function u(n){try{c(r.next(n))}catch(n){i(n)}}function l(n){try{c(r.throw(n))}catch(n){i(n)}}function c(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(u,l)}c((r=r.apply(n,t||[])).next())}))},i=function(n,t){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(n,u)}catch(n){i=[6,n],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};miro.onReady((function(){return o(void 0,void 0,void 0,(function(){return i(this,(function(n){return miro.initialize({extensionPoints:{bottomBar:function(){return o(void 0,void 0,void 0,(function(){var n,t;return i(this,(function(e){switch(e.label){case 0:return[4,miro.currentUser.getCurrentBoardPermissions()];case 1:return n=e.sent(),t=-1!==n.findIndex((function(n){return"EDIT_CONTENT"===n})),[4,miro.isAuthorized()];case 2:return e.sent()&&t?[2,{title:"Team Topologies",svgIcon:'<svg version="1.1" id="team_topologies_logo_btn" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 103 103" style="enable-background:new 0 0 339 103;" xml:space="preserve">\n<g>\n  <path fill="#59FBE3" d="M66.4,49.7v33.6h-9.2c-6.7,0-12.1-5.4-12.1-12.1V49.7h7.1H66.4z" />\n  <path fill="#9B79EE" d="M66.4,22.8v5.7h-2.1h-7.1H45.1V10.7h9.2C61,10.7,66.4,16.1,66.4,22.8z" />\n  <path fill="#9B79EE" d="M40,49.7v33.6h-9.2c-6.7,0-12.1-5.4-12.1-12.1V49.7H40z" />\n  <path fill="#FFDF56" d="M30.8,28.5c-6.7,0-12.1,5.4-12.1,12.1v9.2H40h12.2h14.2h5.9h1.6c6.7,0,12.1-5.4,12.1-12.1v-9.2" />\n  <path fill="#59FBE3" d="M40,22.8v5.7h-9.2c-6.7,0-12.1,5.4-12.1,12.1V10.7h9.2C34.6,10.7,40,16.1,40,22.8z" />\n  <path fill="#F2195C" d="M66.4,28.5v9.2c0,6.7-6,12.1-13.4,12.1h-7.9v-9.2c0-6.7,6.1-12.1,13.5-12.1H66.4z" />\n</g>\n</svg>',onClick:function(){miro.board.ui.openBottomPanel("miro-team-topologies/bottom-panel.html",{width:r.b})}}]:[2]}}))}))}}}),[2]}))}))}))}});