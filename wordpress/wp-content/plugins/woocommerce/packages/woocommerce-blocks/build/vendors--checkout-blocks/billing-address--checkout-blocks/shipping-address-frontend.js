(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[10],{114:function(e,t,n){"use strict";var o=n(115);e.exports=function(e,t,n){n=n||{},9===t.nodeType&&(t=o.getWindow(t));var r=n.allowHorizontalScroll,i=n.onlyScrollIfNeeded,s=n.alignWithTop,c=n.alignWithLeft,l=n.offsetTop||0,u=n.offsetLeft||0,a=n.offsetBottom||0,f=n.offsetRight||0;r=void 0===r||r;var d=o.isWindow(t),p=o.offset(e),h=o.outerHeight(e),b=o.outerWidth(e),m=void 0,v=void 0,g=void 0,w=void 0,O=void 0,j=void 0,y=void 0,x=void 0,E=void 0,L=void 0;d?(y=t,L=o.height(y),E=o.width(y),x={left:o.scrollLeft(y),top:o.scrollTop(y)},O={left:p.left-x.left-u,top:p.top-x.top-l},j={left:p.left+b-(x.left+E)+f,top:p.top+h-(x.top+L)+a},w=x):(m=o.offset(t),v=t.clientHeight,g=t.clientWidth,w={left:t.scrollLeft,top:t.scrollTop},O={left:p.left-(m.left+(parseFloat(o.css(t,"borderLeftWidth"))||0))-u,top:p.top-(m.top+(parseFloat(o.css(t,"borderTopWidth"))||0))-l},j={left:p.left+b-(m.left+g+(parseFloat(o.css(t,"borderRightWidth"))||0))+f,top:p.top+h-(m.top+v+(parseFloat(o.css(t,"borderBottomWidth"))||0))+a}),O.top<0||j.top>0?!0===s?o.scrollTop(t,w.top+O.top):!1===s?o.scrollTop(t,w.top+j.top):O.top<0?o.scrollTop(t,w.top+O.top):o.scrollTop(t,w.top+j.top):i||((s=void 0===s||!!s)?o.scrollTop(t,w.top+O.top):o.scrollTop(t,w.top+j.top)),r&&(O.left<0||j.left>0?!0===c?o.scrollLeft(t,w.left+O.left):!1===c?o.scrollLeft(t,w.left+j.left):O.left<0?o.scrollLeft(t,w.left+O.left):o.scrollLeft(t,w.left+j.left):i||((c=void 0===c||!!c)?o.scrollLeft(t,w.left+O.left):o.scrollLeft(t,w.left+j.left)))}},115:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function i(e,t){var n=e["page"+(t?"Y":"X")+"Offset"],o="scroll"+(t?"Top":"Left");if("number"!=typeof n){var r=e.document;"number"!=typeof(n=r.documentElement[o])&&(n=r.body[o])}return n}function s(e){return i(e)}function c(e){return i(e,!0)}function l(e){var t=function(e){var t,n=void 0,o=void 0,r=e.ownerDocument,i=r.body,s=r&&r.documentElement;return n=(t=e.getBoundingClientRect()).left,o=t.top,{left:n-=s.clientLeft||i.clientLeft||0,top:o-=s.clientTop||i.clientTop||0}}(e),n=e.ownerDocument,o=n.defaultView||n.parentWindow;return t.left+=s(o),t.top+=c(o),t}var u=new RegExp("^("+/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source+")(?!px)[a-z%]+$","i"),a=/^(top|right|bottom|left)$/,f="currentStyle",d="runtimeStyle",p="left",h=void 0;function b(e,t){for(var n=0;n<e.length;n++)t(e[n])}function m(e){return"border-box"===h(e,"boxSizing")}"undefined"!=typeof window&&(h=window.getComputedStyle?function(e,t,n){var o="",r=e.ownerDocument,i=n||r.defaultView.getComputedStyle(e,null);return i&&(o=i.getPropertyValue(t)||i[t]),o}:function(e,t){var n=e[f]&&e[f][t];if(u.test(n)&&!a.test(t)){var o=e.style,r=o[p],i=e[d][p];e[d][p]=e[f][p],o[p]="fontSize"===t?"1em":n||0,n=o.pixelLeft+"px",o[p]=r,e[d][p]=i}return""===n?"auto":n});var v=["margin","border","padding"],g=-1,w=2,O=1;function j(e,t,n){var o=0,r=void 0,i=void 0,s=void 0;for(i=0;i<t.length;i++)if(r=t[i])for(s=0;s<n.length;s++){var c;c="border"===r?r+n[s]+"Width":r+n[s],o+=parseFloat(h(e,c))||0}return o}function y(e){return null!=e&&e==e.window}var x={};function E(e,t,n){if(y(e))return"width"===t?x.viewportWidth(e):x.viewportHeight(e);if(9===e.nodeType)return"width"===t?x.docWidth(e):x.docHeight(e);var o="width"===t?["Left","Right"]:["Top","Bottom"],r="width"===t?e.offsetWidth:e.offsetHeight,i=(h(e),m(e)),s=0;(null==r||r<=0)&&(r=void 0,(null==(s=h(e,t))||Number(s)<0)&&(s=e.style[t]||0),s=parseFloat(s)||0),void 0===n&&(n=i?O:g);var c=void 0!==r||i,l=r||s;if(n===g)return c?l-j(e,["border","padding"],o):s;if(c){var u=n===w?-j(e,["border"],o):j(e,["margin"],o);return l+(n===O?0:u)}return s+j(e,v.slice(n),o)}b(["Width","Height"],(function(e){x["doc"+e]=function(t){var n=t.document;return Math.max(n.documentElement["scroll"+e],n.body["scroll"+e],x["viewport"+e](n))},x["viewport"+e]=function(t){var n="client"+e,o=t.document,r=o.body,i=o.documentElement[n];return"CSS1Compat"===o.compatMode&&i||r&&r[n]||i}}));var L={position:"absolute",visibility:"hidden",display:"block"};function k(e){var t=void 0,n=arguments;return 0!==e.offsetWidth?t=E.apply(void 0,n):function(e,o,r){var i={},s=e.style,c=void 0;for(c in o)o.hasOwnProperty(c)&&(i[c]=s[c],s[c]=o[c]);for(c in function(){t=E.apply(void 0,n)}.call(e),o)o.hasOwnProperty(c)&&(s[c]=i[c])}(e,L),t}function T(e,t,n){var o=n;if("object"!==(void 0===t?"undefined":r(t)))return void 0!==o?("number"==typeof o&&(o+="px"),void(e.style[t]=o)):h(e,t);for(var i in t)t.hasOwnProperty(i)&&T(e,i,t[i])}b(["width","height"],(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);x["outer"+t]=function(t,n){return t&&k(t,e,n?0:O)};var n="width"===e?["Left","Right"]:["Top","Bottom"];x[e]=function(t,o){return void 0===o?t&&k(t,e,g):t?(h(t),m(t)&&(o+=j(t,["padding","border"],n)),T(t,e,o)):void 0}})),e.exports=o({getWindow:function(e){var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},offset:function(e,t){if(void 0===t)return l(e);!function(e,t){"static"===T(e,"position")&&(e.style.position="relative");var n=l(e),o={},r=void 0,i=void 0;for(i in t)t.hasOwnProperty(i)&&(r=parseFloat(T(e,i))||0,o[i]=r+t[i]-n[i]);T(e,o)}(e,t)},isWindow:y,each:b,css:T,clone:function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);if(e.overflow)for(var n in e)e.hasOwnProperty(n)&&(t.overflow[n]=e.overflow[n]);return t},scrollLeft:function(e,t){if(y(e)){if(void 0===t)return s(e);window.scrollTo(t,c(e))}else{if(void 0===t)return e.scrollLeft;e.scrollLeft=t}},scrollTop:function(e,t){if(y(e)){if(void 0===t)return c(e);window.scrollTo(s(e),t)}else{if(void 0===t)return e.scrollTop;e.scrollTop=t}},viewportWidth:0,viewportHeight:0},x)},148:function(e,t,n){"use strict";var o=n(0),r=n(9);const i=Object(o.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(r.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}));t.a=i},420:function(e,t,n){"use strict";var o=n(0),r=n(4),i=n.n(r),s=n(6),c=n(1),l=n(10),u=n(23),a=n(24),f=n(148),d=n(81),p=n(82),h=n(361),b=n(56),m=n(520),v=n(476),g=n(473),w=n(440),O=Object(v.a)({as:"div",useHook:function(e){const t=Object(g.a)(e,"FlexBlock");return Object(w.a)({isBlock:!0,...t})},name:"FlexBlock"}),j=n(477),y=n(7);const x=Object(l.createHigherOrderComponent)((e=>t=>{const[n,r]=Object(o.useState)(),i=Object(o.useCallback)((e=>r((()=>null!=e&&e.handleFocusOutside?e.handleFocusOutside.bind(e):void 0))),[]);return Object(o.createElement)("div",Object(l.__experimentalUseFocusOutside)(n),Object(o.createElement)(e,Object(y.a)({ref:i},t)))}),"withFocusOutside")(class extends o.Component{handleFocusOutside(e){this.props.onFocusOutside(e)}render(){return this.props.children}});t.a=function e({value:t,label:n,options:r,onChange:v,onFilterValueChange:g=s.noop,hideLabelFromVision:w,help:y,allowReset:E=!0,className:L,messages:k={selected:Object(c.__)("Item selected.")}}){var T;const C=Object(l.useInstanceId)(e),[S,I]=Object(o.useState)(null),[W,F]=Object(o.useState)(!1),[_,M]=Object(o.useState)(!1),[R,D]=Object(o.useState)(""),N=Object(o.useRef)(),H=r.find((e=>e.value===t)),B=null!==(T=null==H?void 0:H.label)&&void 0!==T?T:"",P=Object(o.useMemo)((()=>{const e=[],t=[],n=Object(s.deburr)(R.toLocaleLowerCase());return r.forEach((o=>{const r=Object(s.deburr)(o.label).toLocaleLowerCase().indexOf(n);0===r?e.push(o):r>0&&t.push(o)})),e.concat(t)}),[R,r,t]),V=e=>{v(e.value),Object(a.speak)(k.selected,"assertive"),I(e),D(""),F(!1)},$=(e=1)=>{let t=P.indexOf(S)+e;t<0?t=P.length-1:t>=P.length&&(t=0),I(P[t]),F(!0)};return Object(o.useEffect)((()=>{const e=P.length>0;if(W){const t=e?Object(c.sprintf)(
/* translators: %d: number of results. */
Object(c._n)("%d result found, use up and down arrow keys to navigate.","%d results found, use up and down arrow keys to navigate.",P.length),P.length):Object(c.__)("No results.");Object(a.speak)(t,"polite")}}),[P,W]),Object(o.createElement)(x,{onFocusOutside:()=>{F(!1)}},Object(o.createElement)(h.a,{className:i()(L,"components-combobox-control"),tabIndex:"-1",label:n,id:`components-form-token-input-${C}`,hideLabelFromVision:w,help:y},Object(o.createElement)("div",{className:"components-combobox-control__suggestions-container",tabIndex:"-1",onKeyDown:e=>{let t=!1;switch(e.keyCode){case u.ENTER:S&&(V(S),t=!0);break;case u.UP:$(-1),t=!0;break;case u.DOWN:$(1),t=!0;break;case u.ESCAPE:F(!1),I(null),t=!0,e.stopPropagation()}t&&e.preventDefault()}},Object(o.createElement)(m.a,null,Object(o.createElement)(O,null,Object(o.createElement)(d.a,{className:"components-combobox-control__input",instanceId:C,ref:N,value:W?R:B,"aria-label":B?`${B}, ${n}`:null,onFocus:()=>{M(!0),F(!0),g(""),D("")},onBlur:()=>{M(!1)},isExpanded:W,selectedSuggestionIndex:P.indexOf(S),onChange:e=>{const t=e.value;D(t),g(t),_&&F(!0)}})),E&&Object(o.createElement)(j.a,null,Object(o.createElement)(b.a,{className:"components-combobox-control__reset",icon:f.a,disabled:!t,onClick:()=>{v(null),N.current.input.focus()},label:Object(c.__)("Reset")}))),W&&Object(o.createElement)(p.a,{instanceId:C,match:{label:R},displayTransform:e=>e.label,suggestions:P,selectedIndex:P.indexOf(S),onHover:I,onSelect:V,scrollIntoView:!0}))))}},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r}));var o=n(8);function r(e,t,n){var r=this,i=Object(o.useRef)(null),s=Object(o.useRef)(0),c=Object(o.useRef)(null),l=Object(o.useRef)([]),u=Object(o.useRef)(),a=Object(o.useRef)(),f=Object(o.useRef)(e),d=Object(o.useRef)(!0);Object(o.useEffect)((function(){f.current=e}),[e]);var p=!t&&0!==t&&"undefined"!=typeof window;if("function"!=typeof e)throw new TypeError("Expected a function");t=+t||0;var h=!!(n=n||{}).leading,b=!("trailing"in n)||!!n.trailing,m="maxWait"in n,v=m?Math.max(+n.maxWait||0,t):null;Object(o.useEffect)((function(){return d.current=!0,function(){d.current=!1}}),[]);var g=Object(o.useMemo)((function(){var e=function(e){var t=l.current,n=u.current;return l.current=u.current=null,s.current=e,a.current=f.current.apply(n,t)},n=function(e,t){p&&cancelAnimationFrame(c.current),c.current=p?requestAnimationFrame(e):setTimeout(e,t)},o=function(e){if(!d.current)return!1;var n=e-i.current;return!i.current||n>=t||n<0||m&&e-s.current>=v},g=function(t){return c.current=null,b&&l.current?e(t):(l.current=u.current=null,a.current)},w=function e(){var r=Date.now();if(o(r))return g(r);if(d.current){var c=t-(r-i.current),l=m?Math.min(c,v-(r-s.current)):c;n(e,l)}},O=function(){var f=Date.now(),p=o(f);if(l.current=[].slice.call(arguments),u.current=r,i.current=f,p){if(!c.current&&d.current)return s.current=i.current,n(w,t),h?e(i.current):a.current;if(m)return n(w,t),e(i.current)}return c.current||n(w,t),a.current};return O.cancel=function(){c.current&&(p?cancelAnimationFrame(c.current):clearTimeout(c.current)),s.current=0,l.current=i.current=u.current=c.current=null},O.isPending=function(){return!!c.current},O.flush=function(){return c.current?g(Date.now()):a.current},O}),[h,m,t,v,b,p]);return g}function i(e,t){return e===t}function s(e){return"function"==typeof e?function(){return e}:e}function c(e,t,n){var c,l,u=n&&n.equalityFn||i,a=(c=Object(o.useState)(s(e)),l=c[1],[c[0],Object(o.useCallback)((function(e){return l(s(e))}),[])]),f=a[0],d=a[1],p=r(Object(o.useCallback)((function(e){return d(e)}),[d]),t,n),h=Object(o.useRef)(e);return u(h.current,e)||(p(e),h.current=e),[f,p]}},81:function(e,t,n){"use strict";var o=n(7),r=n(0),i=n(4),s=n.n(i);class c extends r.Component{constructor(){super(...arguments),this.onChange=this.onChange.bind(this),this.bindInput=this.bindInput.bind(this)}focus(){this.input.focus()}hasFocus(){return this.input===this.input.ownerDocument.activeElement}bindInput(e){this.input=e}onChange(e){this.props.onChange({value:e.target.value})}render(){const{value:e,isExpanded:t,instanceId:n,selectedSuggestionIndex:i,className:c,...l}=this.props,u=e?e.length+1:0;return Object(r.createElement)("input",Object(o.a)({ref:this.bindInput,id:`components-form-token-input-${n}`,type:"text"},l,{value:e||"",onChange:this.onChange,size:u,className:s()(c,"components-form-token-field__input"),autoComplete:"off",role:"combobox","aria-expanded":t,"aria-autocomplete":"list","aria-owns":t?`components-form-token-suggestions-${n}`:void 0,"aria-activedescendant":-1!==i?`components-form-token-suggestions-${n}-${i}`:void 0,"aria-describedby":`components-form-token-suggestions-howto-${n}`}))}}t.a=c},82:function(e,t,n){"use strict";var o=n(0),r=n(6),i=n(83),s=n.n(i),c=n(4),l=n.n(c),u=n(10);class a extends o.Component{constructor(){super(...arguments),this.handleMouseDown=this.handleMouseDown.bind(this),this.bindList=this.bindList.bind(this)}componentDidUpdate(){this.props.selectedIndex>-1&&this.props.scrollIntoView&&this.list.children[this.props.selectedIndex]&&(this.scrollingIntoView=!0,s()(this.list.children[this.props.selectedIndex],this.list,{onlyScrollIfNeeded:!0}),this.props.setTimeout((()=>{this.scrollingIntoView=!1}),100))}bindList(e){this.list=e}handleHover(e){return()=>{this.scrollingIntoView||this.props.onHover(e)}}handleClick(e){return()=>{this.props.onSelect(e)}}handleMouseDown(e){e.preventDefault()}computeSuggestionMatch(e){const t=this.props.displayTransform(this.props.match||"").toLocaleLowerCase();if(0===t.length)return null;const n=(e=this.props.displayTransform(e)).toLocaleLowerCase().indexOf(t);return{suggestionBeforeMatch:e.substring(0,n),suggestionMatch:e.substring(n,n+t.length),suggestionAfterMatch:e.substring(n+t.length)}}render(){return Object(o.createElement)("ul",{ref:this.bindList,className:"components-form-token-field__suggestions-list",id:`components-form-token-suggestions-${this.props.instanceId}`,role:"listbox"},Object(r.map)(this.props.suggestions,((e,t)=>{const n=this.computeSuggestionMatch(e),r=l()("components-form-token-field__suggestion",{"is-selected":t===this.props.selectedIndex});return Object(o.createElement)("li",{id:`components-form-token-suggestions-${this.props.instanceId}-${t}`,role:"option",className:r,key:null!=e&&e.value?e.value:this.props.displayTransform(e),onMouseDown:this.handleMouseDown,onClick:this.handleClick(e),onMouseEnter:this.handleHover(e),"aria-selected":t===this.props.selectedIndex},n?Object(o.createElement)("span",{"aria-label":this.props.displayTransform(e)},n.suggestionBeforeMatch,Object(o.createElement)("strong",{className:"components-form-token-field__suggestion-match"},n.suggestionMatch),n.suggestionAfterMatch):this.props.displayTransform(e))})))}}a.defaultProps={match:"",onHover:()=>{},onSelect:()=>{},suggestions:Object.freeze([])},t.a=Object(u.withSafeTimeout)(a)},83:function(e,t,n){"use strict";e.exports=n(114)}}]);