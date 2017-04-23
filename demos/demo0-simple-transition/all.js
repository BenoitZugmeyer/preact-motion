!function(){"use strict";function e(){}function t(t,n){var r=q,o=void 0,a=void 0,i=void 0,l=void 0;for(l=arguments.length;l-- >2;)B.push(arguments[l]);for(n&&null!=n.children&&(B.length||B.push(n.children),delete n.children);B.length;)if((a=B.pop())&&void 0!==a.pop)for(l=a.length;l--;)B.push(a[l]);else!0!==a&&!1!==a||(a=null),(i="function"!=typeof t)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(i=!1)),i&&o?r[r.length-1]+=a:r===q?r=[a]:r.push(a),o=i;var s=new e;return s.nodeName=t,s.children=r,s.attributes=null==n?void 0:n,s.key=null==n?void 0:n.key,void 0!==E.vnode&&E.vnode(s),s}function n(e,t){for(var n in t)e[n]=t[n];return e}function r(e){!e._dirty&&(e._dirty=!0)&&1==K.push(e)&&(E.debounceRendering||setTimeout)(o)}function o(){var e=void 0,t=K;for(K=[];e=t.pop();)e._dirty&&_(e)}function a(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&i(e,t.nodeName):n||e._componentConstructor===t.nodeName}function i(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function l(e){var t=n({},e.attributes);t.children=e.children;var r=e.nodeName.defaultProps;if(void 0!==r)for(var o in r)void 0===t[o]&&(t[o]=r[o]);return t}function s(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function u(e){e.parentNode&&e.parentNode.removeChild(e)}function c(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"===(void 0===r?"undefined":Q(r))){if("string"!=typeof n)for(var a in n)a in r||(e.style[a]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===J.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,f,l):e.removeEventListener(t,f,l),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)p(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var s=o&&t!==(t=t.replace(/^xlink\:?/,""));null==r||!1===r?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function p(e,t,n){try{e[t]=n}catch(e){}}function f(e){return this._listeners[e.type](E.event&&E.event(e)||e)}function d(){for(var e=void 0;e=te.pop();)E.afterMount&&E.afterMount(e),e.componentDidMount&&e.componentDidMount()}function m(e,t,n,r,o,a){ne++||(re=null!=o&&void 0!==o.ownerSVGElement,oe=null!=e&&!(G in e));var i=y(e,t,n,r,a);return o&&i.parentNode!==o&&o.appendChild(i),--ne||(oe=!1,a||d()),i}function y(e,t,n,r,o){var a=e,l=re;if(null==t&&(t=""),"string"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(a=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(a,e),h(e,!0))),a[G]=!0,a;if("function"==typeof t.nodeName)return k(e,t,n,r);if(re="svg"===t.nodeName||"foreignObject"!==t.nodeName&&re,(!e||!i(e,String(t.nodeName)))&&(a=s(String(t.nodeName),re),e)){for(;e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),h(e,!0)}var u=a.firstChild,c=a[G]||(a[G]={}),p=t.children;return!oe&&p&&1===p.length&&"string"==typeof p[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=p[0]&&(u.nodeValue=p[0]):(p&&p.length||null!=u)&&v(a,p,n,r,oe||null!=c.dangerouslySetInnerHTML),b(a,t.attributes,c),re=l,a}function v(e,t,n,r,o){var i=e.childNodes,l=[],s={},c=0,p=0,f=i.length,d=0,m=t?t.length:0,v=void 0,S=void 0,b=void 0,g=void 0;if(0!==f)for(var I=0;I<f;I++){var w=i[I],T=w[G],_=m&&T?w._component?w._component.__key:T.key:null;null!=_?(c++,s[_]=w):(T||(void 0!==w.splitText?!o||w.nodeValue.trim():o))&&(l[d++]=w)}if(0!==m)for(var k=0;k<m;k++){b=t[k],g=null;var P=b.key;if(null!=P)c&&void 0!==s[P]&&(g=s[P],s[P]=void 0,c--);else if(!g&&p<d)for(v=p;v<d;v++)if(void 0!==l[v]&&a(S=l[v],b,o)){g=S,l[v]=void 0,v===d-1&&d--,v===p&&p++;break}g=y(g,b,n,r),g&&g!==e&&(k>=f?e.appendChild(g):g!==i[k]&&(g===i[k+1]?u(i[k]):e.insertBefore(g,i[k]||null)))}if(c)for(var N in s)void 0!==s[N]&&h(s[N],!1);for(;p<=d;)void 0!==(g=l[d--])&&h(g,!1)}function h(e,t){var n=e._component;n?P(n):(null!=e[G]&&e[G].ref&&e[G].ref(null),!1!==t&&null!=e[G]||u(e),S(e))}function S(e){for(e=e.lastChild;e;){var t=e.previousSibling;h(e,!0),e=t}}function b(e,t,n){var r=void 0;for(r in n)t&&null!=t[r]||null==n[r]||c(e,r,n[r],n[r]=void 0,re);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||c(e,r,n[r],n[r]=t[r],re)}function g(e){var t=e.constructor.name;(ae[t]||(ae[t]=[])).push(e)}function I(e,t,n){var r=ae[e.name],o=void 0;if(e.prototype&&e.prototype.render?(o=new e(t,n),N.call(o,t,n)):(o=new N(t,n),o.constructor=e,o.render=w),r)for(var a=r.length;a--;)if(r[a].constructor===e){o.nextBase=r[a].nextBase,r.splice(a,1);break}return o}function w(e,t,n){return this.constructor(e,n)}function T(e,t,n,o,a){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||a?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,n!==z&&(n!==F&&!1===E.syncComponentUpdates&&e.base?r(e):_(e,F,a)),e.__ref&&e.__ref(e))}function _(e,t,r,o){if(!e._disable){var a=e.props,i=e.state,s=e.context,u=e.prevProps||a,c=e.prevState||i,p=e.prevContext||s,f=e.base,y=e.nextBase,v=f||y,S=e._component,b=!1,g=void 0,w=void 0,k=void 0;if(f&&(e.props=u,e.state=c,e.context=p,t!==H&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(a,i,s)?b=!0:e.componentWillUpdate&&e.componentWillUpdate(a,i,s),e.props=a,e.state=i,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!b){g=e.render(a,i,s),e.getChildContext&&(s=n(n({},s),e.getChildContext()));var N=g&&g.nodeName,x=void 0,C=void 0;if("function"==typeof N){var D=l(g);w=S,w&&w.constructor===N&&D.key==w.__key?T(w,D,F,s,!1):(x=w,e._component=w=I(N,D,s),w.nextBase=w.nextBase||y,w._parentComponent=e,T(w,D,z,s,!1),_(w,F,r,!0)),C=w.base}else k=v,x=S,x&&(k=e._component=null),(v||t===F)&&(k&&(k._component=null),C=m(k,g,s,r||!f,v&&v.parentNode,!0));if(v&&C!==v&&w!==S){var V=v.parentNode;V&&C!==V&&(V.replaceChild(C,v),x||(v._component=null,h(v,!1)))}if(x&&P(x),e.base=C,C&&!o){for(var O=e,A=e;A=A._parentComponent;)(O=A).base=C;C._component=O,C._componentConstructor=O.constructor}}if(!f||r?te.unshift(e):b||(d(),e.componentDidUpdate&&e.componentDidUpdate(u,c,p),E.afterUpdate&&E.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);ne||o||d()}}function k(e,t,n,r){for(var o=e&&e._component,a=o,i=e,s=o&&e._componentConstructor===t.nodeName,u=s,c=l(t);o&&!u&&(o=o._parentComponent);)u=o.constructor===t.nodeName;return o&&u&&(!r||o._component)?(T(o,c,$,n,r),e=o.base):(a&&!s&&(P(a),e=i=null),o=I(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,i=null),T(o,c,F,n,r),e=o.base,i&&e!==i&&(i._component=null,h(i,!1))),e}function P(e){E.beforeUnmount&&E.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?P(n):t&&(t[G]&&t[G].ref&&t[G].ref(null),e.nextBase=t,u(t),g(e),S(t)),e.__ref&&e.__ref(null)}function N(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function x(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t}function C(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"==typeof e[n]?e[n]:e[n].val);return t}function D(e,t,n,r,o,a,i){var l=-o*(t-r),s=-a*n,u=l+s,c=n+u*e,p=t+c*e;return Math.abs(c)<i&&Math.abs(p-r)<i?(ie[0]=r,ie[1]=0,ie):(ie[0]=p,ie[1]=c,ie)}function V(e,t){return t={exports:{}},e(t,t.exports),t.exports}function O(e,t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(0!==n[r])return!1;var o="number"==typeof t[r]?t[r]:t[r].val;if(e[r]!==o)return!1}return!0}function A(e){return function(){return e}}function M(e,t,n){for(var r=0;r<e.length;r++)if(!O(e[r],t[r],n[r]))return!1;return!0}function U(e,t,n){for(var r={},o=0;o<e.length;o++)r[e[o].key]=o;for(var a={},i=0;i<t.length;i++)a[t[i].key]=i;for(var l=[],s=0;s<t.length;s++)l[s]=t[s];for(var u=0;u<e.length;u++)if(!Object.prototype.hasOwnProperty.call(a,e[u].key)){var c=n(u,e[u]);null!=c&&l.push(c)}return l.sort(function(e,n){var o=a[e.key],i=a[n.key],l=r[e.key],s=r[n.key];if(null!=o&&null!=i)return a[e.key]-a[n.key];if(null!=l&&null!=s)return r[e.key]-r[n.key];if(null!=o){for(var u=0;u<t.length;u++){var c=t[u].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(o<a[c]&&s>r[c])return-1;if(o>a[c]&&s<r[c])return 1}}return 1}for(var p=0;p<t.length;p++){var f=t[p].key;if(Object.prototype.hasOwnProperty.call(r,f)){if(i<a[f]&&l>r[f])return 1;if(i>a[f]&&l<r[f])return-1}}return-1})}function j(e,t,n){var r=t;return null==r?e.map(function(e,t){return{key:e.key,data:e.data,style:n[t]}}):e.map(function(e,t){for(var o=0;o<r.length;o++)if(r[o].key===e.key)return{key:r[o].key,data:r[o].data,style:n[t]};return{key:e.key,data:e.data,style:n[t]}})}function L(e,t,n,r){if(r.length!==t.length)return!1;for(var o=0;o<r.length;o++)if(r[o].key!==t[o].key)return!1;for(var a=0;a<r.length;a++)if(!O(e[a],t[a].style,n[a]))return!1;return!0}function R(e,t,n,r,o,a,i,l,s){for(var u=U(r,o,function(e,r){var o=t(r);return null==o?(n({key:r.key,data:r.data}),null):O(a[e],o,i[e])?(n({key:r.key,data:r.data}),null):{key:r.key,data:r.data,style:o}}),c=[],p=[],f=[],d=[],m=0;m<u.length;m++){for(var y=u[m],v=null,h=0;h<r.length;h++)if(r[h].key===y.key){v=h;break}if(null==v){var S=e(y);c[m]=S,f[m]=S;var b=x(y.style);p[m]=b,d[m]=b}else c[m]=a[v],f[m]=l[v],p[m]=i[v],d[m]=s[v]}return[u,c,p,f,d]}function W(e,t){return Y({},Ne,t,{val:e})}var E={},B=[],q=[],z=0,F=1,H=2,$=3,G="__preactattr_",J=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,K=[],Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},ee=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},te=[],ne=0,re=!1,oe=!1,ae={};n(N.prototype,{setState:function(e,t){var o=this.state;this.prevState||(this.prevState=n({},o)),n(o,"function"==typeof e?e(o,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),r(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),_(this,H)},render:function(){}});for(var ie=[0,0],le="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},se=V(function(e){(function(){var t,n,r;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-r)/1e6},n=process.hrtime,t=function(){var e;return e=n(),1e9*e[0]+e[1]},r=t()):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(le)}),ue="undefined"==typeof window?le:window,ce=["moz","webkit"],pe="AnimationFrame",fe=ue["request"+pe],de=ue["cancel"+pe]||ue["cancelRequest"+pe],me=0;!fe&&me<ce.length;me++)fe=ue[ce[me]+"Request"+pe],de=ue[ce[me]+"Cancel"+pe]||ue[ce[me]+"CancelRequest"+pe];if(!fe||!de){var ye=0,ve=0,he=[];fe=function(e){if(0===he.length){var t=se(),n=Math.max(0,1e3/60-(t-ye));ye=n+t,setTimeout(function(){var e=he.slice(0);he.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(ye)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return he.push({handle:++ve,callback:e,cancelled:!1}),ve},de=function(e){for(var t=0;t<he.length;t++)he[t].handle===e&&(he[t].cancelled=!0)}}var Se=function(e){return fe.call(ue,e)},be=function(){de.apply(ue,arguments)},ge=function(){ue.requestAnimationFrame=fe,ue.cancelAnimationFrame=de};Se.cancel=be,Se.polyfill=ge;var Ie=function(){};Ie.thatReturns=A,Ie.thatReturnsFalse=A(!1),Ie.thatReturnsTrue=A(!0),Ie.thatReturnsNull=A(null),Ie.thatReturnsThis=function(){return this},Ie.thatReturnsArgument=function(e){return e};var we=1e3/60,Te=function(e){function t(n){X(this,t);var r=ee(this,e.call(this,n));return r.wasAnimating=!1,r.animationID=null,r.prevTime=0,r.accumulatedTime=0,r.unreadPropStyle=null,r.clearUnreadPropStyle=function(e){var t=!1,n=r.state,o=n.currentStyle,a=n.currentVelocity,i=n.lastIdealStyle,l=n.lastIdealVelocity;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var u=e[s];"number"==typeof u&&(t||(t=!0,o=Y({},o),a=Y({},a),i=Y({},i),l=Y({},l)),o[s]=u,a[s]=0,i[s]=u,l[s]=0)}t&&r.setState({currentStyle:o,currentVelocity:a,lastIdealStyle:i,lastIdealVelocity:l})},r.startAnimationIfNecessary=function(){r.animationID=Se(function(e){var t=r.props.style;if(O(r.state.currentStyle,t,r.state.currentVelocity))return r.wasAnimating&&r.props.onRest&&r.props.onRest(),r.animationID=null,r.wasAnimating=!1,void(r.accumulatedTime=0);r.wasAnimating=!0;var n=e||se(),o=n-r.prevTime;if(r.prevTime=n,r.accumulatedTime=r.accumulatedTime+o,r.accumulatedTime>10*we&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();var a=(r.accumulatedTime-Math.floor(r.accumulatedTime/we)*we)/we,i=Math.floor(r.accumulatedTime/we),l={},s={},u={},c={};for(var p in t)if(Object.prototype.hasOwnProperty.call(t,p)){var f=t[p];if("number"==typeof f)u[p]=f,c[p]=0,l[p]=f,s[p]=0;else{for(var d=r.state.lastIdealStyle[p],m=r.state.lastIdealVelocity[p],y=0;y<i;y++){var v=D(we/1e3,d,m,f.val,f.stiffness,f.damping,f.precision);d=v[0],m=v[1]}var h=D(we/1e3,d,m,f.val,f.stiffness,f.damping,f.precision),S=h[0],b=h[1];u[p]=d+(S-d)*a,c[p]=m+(b-m)*a,l[p]=d,s[p]=m}}r.animationID=null,r.accumulatedTime-=i*we,r.setState({currentStyle:u,currentVelocity:c,lastIdealStyle:l,lastIdealVelocity:s}),r.unreadPropStyle=null,r.startAnimationIfNecessary()})},r.state=r.defaultState(),r}return Z(t,e),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,n=e.style,r=t||C(n),o=x(r);return{currentStyle:r,currentVelocity:o,lastIdealStyle:r,lastIdealVelocity:o}},t.prototype.componentDidMount=function(){this.prevTime=se(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=se(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(Se.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){return this.props.children[0](this.state.currentStyle)},t}(N),_e=1e3/60,ke=(function(e){function t(n){X(this,t);var r=ee(this,e.call(this,n));return r.animationID=null,r.prevTime=0,r.accumulatedTime=0,r.unreadPropStyles=null,r.clearUnreadPropStyle=function(e){for(var t=r.state,n=t.currentStyles,o=t.currentVelocities,a=t.lastIdealStyles,i=t.lastIdealVelocities,l=!1,s=0;s<e.length;s++){var u=e[s],c=!1;for(var p in u)if(Object.prototype.hasOwnProperty.call(u,p)){var f=u[p];"number"==typeof f&&(c||(c=!0,l=!0,n[s]=Y({},n[s]),o[s]=Y({},o[s]),a[s]=Y({},a[s]),i[s]=Y({},i[s])),n[s][p]=f,o[s][p]=0,a[s][p]=f,i[s][p]=0)}}l&&r.setState({currentStyles:n,currentVelocities:o,lastIdealStyles:a,lastIdealVelocities:i})},r.startAnimationIfNecessary=function(){r.animationID=Se(function(e){var t=r.props.styles(r.state.lastIdealStyles);if(M(r.state.currentStyles,t,r.state.currentVelocities))return r.animationID=null,void(r.accumulatedTime=0);var n=e||se(),o=n-r.prevTime;if(r.prevTime=n,r.accumulatedTime=r.accumulatedTime+o,r.accumulatedTime>10*_e&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();for(var a=(r.accumulatedTime-Math.floor(r.accumulatedTime/_e)*_e)/_e,i=Math.floor(r.accumulatedTime/_e),l=[],s=[],u=[],c=[],p=0;p<t.length;p++){var f=t[p],d={},m={},y={},v={};for(var h in f)if(Object.prototype.hasOwnProperty.call(f,h)){var S=f[h];if("number"==typeof S)d[h]=S,m[h]=0,y[h]=S,v[h]=0;else{for(var b=r.state.lastIdealStyles[p][h],g=r.state.lastIdealVelocities[p][h],I=0;I<i;I++){var w=D(_e/1e3,b,g,S.val,S.stiffness,S.damping,S.precision);b=w[0],g=w[1]}var T=D(_e/1e3,b,g,S.val,S.stiffness,S.damping,S.precision),_=T[0],k=T[1];d[h]=b+(_-b)*a,m[h]=g+(k-g)*a,y[h]=b,v[h]=g}}u[p]=d,c[p]=m,l[p]=y,s[p]=v}r.animationID=null,r.accumulatedTime-=i*_e,r.setState({currentStyles:u,currentVelocities:c,lastIdealStyles:l,lastIdealVelocities:s}),r.unreadPropStyles=null,r.startAnimationIfNecessary()})},r.state=r.defaultState(),r}Z(t,e),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=t||n().map(C),o=r.map(function(e){return x(e)});return{currentStyles:r,currentVelocities:o,lastIdealStyles:r,lastIdealVelocities:o}},t.prototype.componentDidMount=function(){this.prevTime=se(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=se(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(Se.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){return this.props.children[0](this.state.currentStyles)}}(N),1e3/60);((function(e){function t(n){X(this,t);var r=ee(this,e.call(this,n));return r.unmounting=!1,r.animationID=null,r.prevTime=0,r.accumulatedTime=0,r.unreadPropStyles=null,r.clearUnreadPropStyle=function(e){for(var t=R(r.props.willEnter,r.props.willLeave,r.props.didLeave,r.state.mergedPropsStyles,e,r.state.currentStyles,r.state.currentVelocities,r.state.lastIdealStyles,r.state.lastIdealVelocities),n=t[0],o=t[1],a=t[2],i=t[3],l=t[4],s=0;s<e.length;s++){var u=e[s].style,c=!1;for(var p in u)if(Object.prototype.hasOwnProperty.call(u,p)){var f=u[p];"number"==typeof f&&(c||(c=!0,o[s]=Y({},o[s]),a[s]=Y({},a[s]),i[s]=Y({},i[s]),l[s]=Y({},l[s]),n[s]={key:n[s].key,data:n[s].data,style:Y({},n[s].style)}),o[s][p]=f,a[s][p]=0,i[s][p]=f,l[s][p]=0,n[s].style[p]=f)}}r.setState({currentStyles:o,currentVelocities:a,mergedPropsStyles:n,lastIdealStyles:i,lastIdealVelocities:l})},r.startAnimationIfNecessary=function(){r.unmounting||(r.animationID=Se(function(e){if(!r.unmounting){var t=r.props.styles,n="function"==typeof t?t(j(r.state.mergedPropsStyles,r.unreadPropStyles,r.state.lastIdealStyles)):t;if(L(r.state.currentStyles,n,r.state.currentVelocities,r.state.mergedPropsStyles))return r.animationID=null,void(r.accumulatedTime=0);var o=e||se(),a=o-r.prevTime;if(r.prevTime=o,r.accumulatedTime=r.accumulatedTime+a,r.accumulatedTime>10*ke&&(r.accumulatedTime=0),0===r.accumulatedTime)return r.animationID=null,void r.startAnimationIfNecessary();for(var i=(r.accumulatedTime-Math.floor(r.accumulatedTime/ke)*ke)/ke,l=Math.floor(r.accumulatedTime/ke),s=R(r.props.willEnter,r.props.willLeave,r.props.didLeave,r.state.mergedPropsStyles,n,r.state.currentStyles,r.state.currentVelocities,r.state.lastIdealStyles,r.state.lastIdealVelocities),u=s[0],c=s[1],p=s[2],f=s[3],d=s[4],m=0;m<u.length;m++){var y=u[m].style,v={},h={},S={},b={};for(var g in y)if(Object.prototype.hasOwnProperty.call(y,g)){var I=y[g];if("number"==typeof I)v[g]=I,h[g]=0,S[g]=I,b[g]=0;else{for(var w=f[m][g],T=d[m][g],_=0;_<l;_++){var k=D(ke/1e3,w,T,I.val,I.stiffness,I.damping,I.precision);w=k[0],T=k[1]}var P=D(ke/1e3,w,T,I.val,I.stiffness,I.damping,I.precision),N=P[0],x=P[1];v[g]=w+(N-w)*i,h[g]=T+(x-T)*i,S[g]=w,b[g]=T}}f[m]=S,d[m]=b,c[m]=v,p[m]=h}r.animationID=null,r.accumulatedTime-=l*ke,r.setState({currentStyles:c,currentVelocities:p,lastIdealStyles:f,lastIdealVelocities:d,mergedPropsStyles:u}),r.unreadPropStyles=null,r.startAnimationIfNecessary()}}))},r.state=r.defaultState(),r}return Z(t,e),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=e.willEnter,o=e.willLeave,a=e.didLeave,i="function"==typeof n?n(t):n,l=void 0;l=null==t?i:t.map(function(e){for(var t=0;t<i.length;t++)if(i[t].key===e.key)return i[t];return e});var s=null==t?i.map(function(e){return C(e.style)}):t.map(function(e){return C(e.style)}),u=null==t?i.map(function(e){return x(e.style)}):t.map(function(e){return x(e.style)}),c=R(r,o,a,l,i,s,u,s,u),p=c[0];return{currentStyles:c[1],currentVelocities:c[2],lastIdealStyles:c[3],lastIdealVelocities:c[4],mergedPropsStyles:p}},t.prototype.componentDidMount=function(){this.prevTime=se(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;this.unreadPropStyles="function"==typeof t?t(j(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):t,null==this.animationID&&(this.prevTime=se(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(Se.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=j(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles);return this.props.children[0](e)},t})(N)).defaultProps={willEnter:function(e){return C(e.style)},willLeave:function(){return null},didLeave:function(){}};var Pe={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},Ne=Y({},Pe.noWobble,{precision:.01}),xe=function(e){function n(t){X(this,n);var r=ee(this,e.call(this,t));return r.handleMouseDown=function(){r.setState({open:!r.state.open})},r.handleTouchStart=function(e){e.preventDefault(),r.handleMouseDown()},r.state={open:!1},r}return Z(n,e),n.prototype.render=function(){return t("div",null,t("button",{onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart},"Toggle"),t(Te,{style:{x:W(this.state.open?400:0)}},function(e){var n=e.x;return t("div",{className:"demo0"},t("div",{className:"demo0-block",style:{WebkitTransform:"translate3d("+n+"px, 0, 0)",transform:"translate3d("+n+"px, 0, 0)"}}))}))},n}(N);!function(e,t,n){m(n,e,{},!1,t,!1)}(t(xe,null),document.querySelector("#content"))}();
//# sourceMappingURL=all.js.map
