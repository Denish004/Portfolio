(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[590],{7631:function(t){t.exports=function(){"use strict";function t(){return"undefined"!==typeof window}function e(){var t=!1;try{var e={get passive(){t=!0}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(n){t=!1}return t}function n(){return!!(t()&&function(){}.bind&&"classList"in document.documentElement&&Object.assign&&Object.keys&&requestAnimationFrame)}function s(t){return 9===t.nodeType}function o(t){return t&&t.document&&s(t.document)}function i(t){var e=t.document,n=e.body,s=e.documentElement;return{scrollHeight:function(){return Math.max(n.scrollHeight,s.scrollHeight,n.offsetHeight,s.offsetHeight,n.clientHeight,s.clientHeight)},height:function(){return t.innerHeight||s.clientHeight||n.clientHeight},scrollY:function(){return void 0!==t.pageYOffset?t.pageYOffset:(s||n.parentNode||n).scrollTop}}}function r(t){return{scrollHeight:function(){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},height:function(){return Math.max(t.offsetHeight,t.clientHeight)},scrollY:function(){return t.scrollTop}}}function a(t){return o(t)?i(t):r(t)}function l(t,n,s){var o,i=e(),r=!1,l=a(t),c=l.scrollY(),u={};function h(){var t=Math.round(l.scrollY()),e=l.height(),o=l.scrollHeight();u.scrollY=t,u.lastScrollY=c,u.direction=t>c?"down":"up",u.distance=Math.abs(t-c),u.isOutOfBounds=t<0||t+e>o,u.top=t<=n.offset[u.direction],u.bottom=t+e>=o,u.toleranceExceeded=u.distance>n.tolerance[u.direction],s(u),c=t,r=!1}function d(){r||(r=!0,o=requestAnimationFrame(h))}var f=!!i&&{passive:!0,capture:!1};return t.addEventListener("scroll",d,f),h(),{destroy:function(){cancelAnimationFrame(o),t.removeEventListener("scroll",d,f)}}}function c(t){return t===Object(t)?t:{down:t,up:t}}function u(t,e){e=e||{},Object.assign(this,u.options,e),this.classes=Object.assign({},u.options.classes,e.classes),this.elem=t,this.tolerance=c(this.tolerance),this.offset=c(this.offset),this.initialised=!1,this.frozen=!1}return u.prototype={constructor:u,init:function(){return u.cutsTheMustard&&!this.initialised&&(this.addClass("initial"),this.initialised=!0,setTimeout((function(t){t.scrollTracker=l(t.scroller,{offset:t.offset,tolerance:t.tolerance},t.update.bind(t))}),100,this)),this},destroy:function(){this.initialised=!1,Object.keys(this.classes).forEach(this.removeClass,this),this.scrollTracker.destroy()},unpin:function(){!this.hasClass("pinned")&&this.hasClass("unpinned")||(this.addClass("unpinned"),this.removeClass("pinned"),this.onUnpin&&this.onUnpin.call(this))},pin:function(){this.hasClass("unpinned")&&(this.addClass("pinned"),this.removeClass("unpinned"),this.onPin&&this.onPin.call(this))},freeze:function(){this.frozen=!0,this.addClass("frozen")},unfreeze:function(){this.frozen=!1,this.removeClass("frozen")},top:function(){this.hasClass("top")||(this.addClass("top"),this.removeClass("notTop"),this.onTop&&this.onTop.call(this))},notTop:function(){this.hasClass("notTop")||(this.addClass("notTop"),this.removeClass("top"),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){this.hasClass("bottom")||(this.addClass("bottom"),this.removeClass("notBottom"),this.onBottom&&this.onBottom.call(this))},notBottom:function(){this.hasClass("notBottom")||(this.addClass("notBottom"),this.removeClass("bottom"),this.onNotBottom&&this.onNotBottom.call(this))},shouldUnpin:function(t){return"down"===t.direction&&!t.top&&t.toleranceExceeded},shouldPin:function(t){return"up"===t.direction&&t.toleranceExceeded||t.top},addClass:function(t){this.elem.classList.add.apply(this.elem.classList,this.classes[t].split(" "))},removeClass:function(t){this.elem.classList.remove.apply(this.elem.classList,this.classes[t].split(" "))},hasClass:function(t){return this.classes[t].split(" ").every((function(t){return this.classList.contains(t)}),this.elem)},update:function(t){t.isOutOfBounds||!0!==this.frozen&&(t.top?this.top():this.notTop(),t.bottom?this.bottom():this.notBottom(),this.shouldUnpin(t)?this.unpin():this.shouldPin(t)&&this.pin())}},u.options={tolerance:{up:0,down:0},offset:0,scroller:t()?window:null,classes:{frozen:"headroom--frozen",pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},u.cutsTheMustard=n(),u}()},1590:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return K}});var s=n(7294),o=n(2806),i=n(7631),r=n.n(i),a=(n(1664),n(7462)),l=n(3366),c=n(5697),u=n.n(c),h=n(4184),d=n.n(h),f=n(3663),p={light:u().bool,dark:u().bool,full:u().bool,fixed:u().string,sticky:u().string,color:u().string,role:u().string,tag:f.iC,className:u().string,cssModule:u().object,expand:u().oneOfType([u().bool,u().string])},g=function(t){var e,n=t.expand,o=t.className,i=t.cssModule,r=t.light,c=t.dark,u=t.fixed,h=t.sticky,p=t.color,g=t.tag,m=(0,l.Z)(t,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),v=(0,f.mx)(d()(o,"navbar",function(t){return!1!==t&&(!0===t||"xs"===t?"navbar-expand":"navbar-expand-"+t)}(n),((e={"navbar-light":r,"navbar-dark":c})["bg-"+p]=p,e["fixed-"+u]=u,e["sticky-"+h]=h,e)),i);return s.createElement(g,(0,a.Z)({},m,{className:v}))};g.propTypes=p,g.defaultProps={tag:"nav",expand:!1};var m=g,v={tag:f.iC,className:u().string,cssModule:u().object},b=function(t){var e=t.className,n=t.cssModule,o=t.tag,i=(0,l.Z)(t,["className","cssModule","tag"]),r=(0,f.mx)(d()(e,"navbar-brand"),n);return s.createElement(o,(0,a.Z)({},i,{className:r}))};b.propTypes=v,b.defaultProps={tag:"a"};var E,x=b,y=n(7326),C=n(1721),j=n(4942),O=n(4317);function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){(0,j.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var M=T(T({},O.Transition.propTypes),{},{isOpen:u().bool,children:u().oneOfType([u().arrayOf(u().node),u().node]),tag:f.iC,className:u().node,navbar:u().bool,cssModule:u().object,innerRef:u().oneOfType([u().func,u().string,u().object])}),k=T(T({},O.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:f.wF.Collapse}),w=((E={})[f.E5.ENTERING]="collapsing",E[f.E5.ENTERED]="collapse show",E[f.E5.EXITING]="collapsing",E[f.E5.EXITED]="collapse",E);function Z(t){return t.scrollHeight}var P=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(t){n[t]=n[t].bind((0,y.Z)(n))})),n}(0,C.Z)(e,t);var n=e.prototype;return n.onEntering=function(t,e){this.setState({height:Z(t)}),this.props.onEntering(t,e)},n.onEntered=function(t,e){this.setState({height:null}),this.props.onEntered(t,e)},n.onExit=function(t){this.setState({height:Z(t)}),this.props.onExit(t)},n.onExiting=function(t){t.offsetHeight;this.setState({height:0}),this.props.onExiting(t)},n.onExited=function(t){this.setState({height:null}),this.props.onExited(t)},n.render=function(){var t=this,e=this.props,n=e.tag,o=e.isOpen,i=e.className,r=e.navbar,c=e.cssModule,u=e.children,h=(e.innerRef,(0,l.Z)(e,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),p=this.state.height,g=(0,f.ei)(h,f.rb),m=(0,f.CE)(h,f.rb);return s.createElement(O.Transition,(0,a.Z)({},g,{in:o,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(e){var o=function(t){return w[t]||"collapse"}(e),l=(0,f.mx)(d()(i,o,r&&"navbar-collapse"),c),h=null===p?null:{height:p};return s.createElement(n,(0,a.Z)({},m,{style:T(T({},m.style),h),className:l,ref:t.props.innerRef}),u)}))},e}(s.Component);P.propTypes=M,P.defaultProps=k;var H=P,L=["toggleEvents","defaultOpen"],z={defaultOpen:u().bool,toggler:u().string.isRequired,toggleEvents:u().arrayOf(u().string)},R={toggleEvents:f.mP},B=function(t){function e(e){var n;return(n=t.call(this,e)||this).togglers=null,n.removeEventListeners=null,n.toggle=n.toggle.bind((0,y.Z)(n)),n.state={isOpen:e.defaultOpen||!1},n}(0,C.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.togglers=(0,f.kQ)(this.props.toggler),this.togglers.length&&(this.removeEventListeners=(0,f.y_)(this.togglers,this.toggle,this.props.toggleEvents))},n.componentWillUnmount=function(){this.togglers.length&&this.removeEventListeners&&this.removeEventListeners()},n.toggle=function(t){this.setState((function(t){return{isOpen:!t.isOpen}})),t.preventDefault()},n.render=function(){return s.createElement(H,(0,a.Z)({isOpen:this.state.isOpen},(0,f.CE)(this.props,L)))},e}(s.Component);B.propTypes=z,B.defaultProps=R;var _=B,I={tabs:u().bool,pills:u().bool,vertical:u().oneOfType([u().bool,u().string]),horizontal:u().string,justified:u().bool,fill:u().bool,navbar:u().bool,card:u().bool,tag:f.iC,className:u().string,cssModule:u().object},S=function(t){var e=t.className,n=t.cssModule,o=t.tabs,i=t.pills,r=t.vertical,c=t.horizontal,u=t.justified,h=t.fill,p=t.navbar,g=t.card,m=t.tag,v=(0,l.Z)(t,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),b=(0,f.mx)(d()(e,p?"navbar-nav":"nav",!!c&&"justify-content-"+c,function(t){return!1!==t&&(!0===t||"xs"===t?"flex-column":"flex-"+t+"-column")}(r),{"nav-tabs":o,"card-header-tabs":g&&o,"nav-pills":i,"card-header-pills":g&&i,"nav-justified":u,"nav-fill":h}),n);return s.createElement(m,(0,a.Z)({},v,{className:b}))};S.propTypes=I,S.defaultProps={tag:"ul",vertical:!1};var D=S,Y={tag:f.iC,active:u().bool,className:u().string,cssModule:u().object},U=function(t){var e=t.className,n=t.cssModule,o=t.active,i=t.tag,r=(0,l.Z)(t,["className","cssModule","active","tag"]),c=(0,f.mx)(d()(e,"nav-item",!!o&&"active"),n);return s.createElement(i,(0,a.Z)({},r,{className:c}))};U.propTypes=Y,U.defaultProps={tag:"li"};var F=U,q={tag:f.iC,innerRef:u().oneOfType([u().object,u().func,u().string]),disabled:u().bool,active:u().bool,className:u().string,cssModule:u().object,onClick:u().func,href:u().any},A=function(t){function e(e){var n;return(n=t.call(this,e)||this).onClick=n.onClick.bind((0,y.Z)(n)),n}(0,C.Z)(e,t);var n=e.prototype;return n.onClick=function(t){this.props.disabled?t.preventDefault():("#"===this.props.href&&t.preventDefault(),this.props.onClick&&this.props.onClick(t))},n.render=function(){var t=this.props,e=t.className,n=t.cssModule,o=t.active,i=t.tag,r=t.innerRef,c=(0,l.Z)(t,["className","cssModule","active","tag","innerRef"]),u=(0,f.mx)(d()(e,"nav-link",{disabled:c.disabled,active:o}),n);return s.createElement(i,(0,a.Z)({},c,{ref:r,onClick:this.onClick,className:u}))},e}(s.Component);A.propTypes=q,A.defaultProps={tag:"a"};var G=A,X=n(8595),Q=n(267),W=n(1252),J=n(5893),K=function(){var t=(0,s.useState)(""),e=t[0],n=t[1];return(0,s.useEffect)((function(){new(r())(document.getElementById("navbar-main")).init()})),(0,J.jsx)(J.Fragment,{children:(0,J.jsx)("header",{className:"header-global",children:(0,J.jsx)(m,{className:"navbar-main navbar-transparent navbar-light headroom",expand:"lg",id:"navbar-main",children:(0,J.jsxs)(X.Z,{children:[(0,J.jsx)(x,{href:"#",className:"mr-lg-5",children:(0,J.jsx)("h2",{className:"text-white",id:"nav-title",children:o.c0.name})}),(0,J.jsx)("button",{className:"navbar-toggler","aria-label":"navbar_toggle",id:"navbar_global",children:(0,J.jsx)("span",{className:"navbar-toggler-icon"})}),(0,J.jsxs)(_,{toggler:"#navbar_global",navbar:!0,className:e,onExiting:function(){return n("collapsing-out")},onExited:function(){return n("")},children:[(0,J.jsx)("div",{className:"navbar-collapse-header",children:(0,J.jsxs)(Q.Z,{children:[(0,J.jsx)(W.Z,{className:"collapse-brand",xs:"6",children:(0,J.jsx)("h3",{className:"text-black",id:"nav-title",children:o.c0.name})}),(0,J.jsx)(W.Z,{className:"collapse-close",xs:"6",children:(0,J.jsxs)("button",{className:"navbar-toggler",id:"navbar_global",children:[(0,J.jsx)("span",{}),(0,J.jsx)("span",{})]})})]})}),(0,J.jsx)(D,{className:"align-items-lg-center ml-lg-auto",navbar:!0,children:["Education","Experience","Projects","Research","Contact"].map((function(t){return(0,J.jsx)(F,{children:(0,J.jsx)(G,{rel:"noopener","aria-label":t,className:"nav-link-icon",href:"#"+t.toLowerCase(),children:t})},t)}))})]})]})})})})}},2167:function(t,e,n){"use strict";var s=n(3848);var o,i=(o=n(7294))&&o.__esModule?o:{default:o},r=n(1063),a=n(4651),l=n(7426);var c={};function u(t,e,n,s){if(t&&r.isLocalURL(e)){t.prefetch(e,n,s).catch((function(t){0}));var o=s&&"undefined"!==typeof s.locale?s.locale:t&&t.locale;c[e+"%"+n+(o?"%"+o:"")]=!0}}},7426:function(t,e,n){"use strict";var s=n(3848);Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootMargin,n=t.disabled||!r,l=o.useRef(),c=o.useState(!1),u=s(c,2),h=u[0],d=u[1],f=o.useCallback((function(t){l.current&&(l.current(),l.current=void 0),n||h||t&&t.tagName&&(l.current=function(t,e,n){var s=function(t){var e=t.rootMargin||"",n=a.get(e);if(n)return n;var s=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=s.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return a.set(e,n={id:e,observer:o,elements:s}),n}(n),o=s.id,i=s.observer,r=s.elements;return r.set(t,e),i.observe(t),function(){r.delete(t),i.unobserve(t),0===r.size&&(i.disconnect(),a.delete(o))}}(t,(function(t){return t&&d(t)}),{rootMargin:e}))}),[n,e,h]);return o.useEffect((function(){if(!r&&!h){var t=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(t)}}}),[h]),[f,h]};var o=n(7294),i=n(3447),r="undefined"!==typeof IntersectionObserver;var a=new Map},1664:function(t,e,n){n(2167)}}]);