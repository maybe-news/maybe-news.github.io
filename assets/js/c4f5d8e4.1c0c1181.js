(self.webpackChunkmaybe_news_github_io=self.webpackChunkmaybe_news_github_io||[]).push([[4195],{1493:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(7294),o=n(6010),s=n(5091),a=n(8746),c=n(6832),i=n(1402),u=n(365),l=n.n(u),f=n(7635),m=n.n(f),d=function(e){var t=e.status,n=e.message,o=e.className,s=e.style,a=e.onSubmitted,c=void 0;return r.createElement("div",{className:o,style:s},"sending"===t&&r.createElement("div",{style:{color:"blue"}},"sending..."),"error"===t&&r.createElement("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:n}}),"success"===t&&r.createElement("div",{style:{color:"green"},dangerouslySetInnerHTML:{__html:n}}),r.createElement("input",{ref:function(e){return c=e},type:"email",placeholder:"Your email"}),r.createElement("button",{onClick:function(){return c&&c.value.indexOf("@")>-1&&a({EMAIL:c.value})}},"Submit"))};function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var b=function(e){return e.replace("/post?","/post-json?")},h=function(e){function t(){var n,r;p(this,t);for(var o=arguments.length,s=Array(o),a=0;a<o;a++)s[a]=arguments[a];return n=r=g(this,e.call.apply(e,[this].concat(s))),r.state={status:null,message:null},r.subscribe=function(e){var t=m()(e),n=b(r.props.url)+"&"+t;r.setState({status:"sending",message:null},(function(){return l()(n,{param:"c"},(function(e,t){e?r.setState({status:"error",message:e}):"success"!==t.result?r.setState({status:"error",message:t.msg}):r.setState({status:"success",message:t.msg})}))}))},g(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return this.props.render({subscribe:this.subscribe,status:this.state.status,message:this.state.message})},t}(r.Component);h.propTypes={},h.defaultProps={render:function(e){var t=e.subscribe,n=e.status,o=e.message;return r.createElement(d,{status:n,message:o,onSubmitted:function(e){return t(e)}})}};var y=h,v="heroBanner_UJJx",w="heroTitle_ohkl",E="heroSubtitle_GKHc",_="heroButton_jgNU",N="buttons_pzbO",S="subscribeForm_rRuT",x="formInputWrapper_SshY",A="formLabel_BVBC",C="formInput_QJRK",j="subscribeBtnWrapper_h8LG",k="subscribeBtn_ARZE",O=function(e){var t,n=e.status,o=e.message,s=e.onValidated;return r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("div",{className:S},"sending"===n&&r.createElement("div",{className:"alert alert--info",role:"alert"},"Sending..."),"error"===n&&r.createElement("div",{role:"alert",className:"alert alert--danger",dangerouslySetInnerHTML:{__html:o}}),"success"===n&&r.createElement("div",{role:"alert",className:"alert alert--success",dangerouslySetInnerHTML:{__html:o}}),r.createElement("div",{className:x},r.createElement("label",{className:A},"Email Address *",r.createElement("input",{className:C,ref:function(e){return t=e},type:"email"}))),r.createElement("div",{className:j},r.createElement("button",{className:k,onClick:function(){return t&&t.value.indexOf("@")>-1&&s({EMAIL:t.value})}},"Subscribe"))))))};function M(){var e=(0,c.Z)().siteConfig,t=void 0===e?{}:e;return r.createElement(s.Z,{title:"Home",description:"\u53ef\u80fd\u662f\u65b0\u95fb\u7684\u77e5\u8bc6"},r.createElement("header",{className:(0,o.Z)("hero hero--primary",v)},r.createElement("div",{className:"container"},r.createElement("h1",{className:(0,o.Z)("hero__title",w)},t.title),r.createElement("p",{className:(0,o.Z)("hero__subtitle",E)},t.tagline),r.createElement("div",{className:N},r.createElement(a.Z,{className:(0,o.Z)("button button--secondary button--lg",_),to:(0,i.Z)("issues")},"Issues"),r.createElement(a.Z,{className:(0,o.Z)("button button--secondary button--lg",_),to:(0,i.Z)("series")},"Series")))),r.createElement("main",null,r.createElement(y,{url:"https://news.us18.list-manage.com/subscribe/post?u=013b62af8e756cabe51db0038&id=fc8cfd980b",render:function(e){var t=e.subscribe,n=e.status,o=e.message;return r.createElement(O,{status:n,message:o,onValidated:function(e){return t(e)}})}})))}},365:function(e,t,n){var r=n(1445)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var a,c,i=t.prefix||"__jp",u=t.name||i+o++,l=t.param||"callback",f=null!=t.timeout?t.timeout:6e4,m=encodeURIComponent,d=document.getElementsByTagName("script")[0]||document.head;f&&(c=setTimeout((function(){p(),n&&n(new Error("Timeout"))}),f));function p(){a.parentNode&&a.parentNode.removeChild(a),window[u]=s,c&&clearTimeout(c)}return window[u]=function(e){r("jsonp got",e),p(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+m(u)).replace("?&","?"),r('jsonp req "%s"',e),(a=document.createElement("script")).src=e,d.parentNode.insertBefore(a,d),function(){window[u]&&p()}};var o=0;function s(){}},1445:function(e,t,n){function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}(t=e.exports=n(4805)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,s=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(s=o))})),e.splice(s,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},4805:function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,s=o-(r||o);e.diff=s,e.prev=r,e.curr=o,r=o;for(var a=new Array(arguments.length),c=0;c<a.length;c++)a[c]=arguments[c];a[0]=t.coerce(a[0]),"string"!=typeof a[0]&&a.unshift("%O");var i=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;i++;var o=t.formatters[r];if("function"==typeof o){var s=a[i];n=o.call(e,s),a.splice(i,1),i--}return n})),t.formatArgs.call(e,a);var u=n.log||t.log||console.log.bind(console);u.apply(e,a)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(971),t.names=[],t.skips=[],t.formatters={}},971:function(e){var t=1e3,n=60*t,r=60*n,o=24*r,s=365.25*o;function a(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,c){c=c||{};var i,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var a=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!a)return;var c=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*s;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===u&&!1===isNaN(e))return c.long?a(i=e,o,"day")||a(i,r,"hour")||a(i,n,"minute")||a(i,t,"second")||i+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},7635:function(e){"undefined"!=typeof self&&self,e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e,t,n,r,o){var c=r&&o.arrayPrefix||"";return"object"===(void 0===t?"undefined":a(t))?""+s(t,n+""+e+c+(n&&"]")+"[",o):n&&n.length?""+n+e+"]"+c+"="+encodeURIComponent(t):""+e+c+"="+encodeURIComponent(t)}function o(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t.map((function(t){return r(e,t,n,!0,o)})).join("&")}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=[];return s=Array.isArray(e)?e.map((function(e,o){return r(""+o,e,t,!0,n)})):Object.keys(e).filter((function(t){return void 0!==e[t]})).map((function(s){return e[s]&&Array.isArray(e[s])?o(""+s,e[s],t,n):r(s,e[s],t,!1,n)})),s.join("&").replace(/%20/g,"+")}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=s}])}}]);