(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8127:function(e,t,r){"use strict";r.d(t,{t:function(){return a}});var n=r(5893),i=r(6265);r(7294);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var a=function(e){return(0,n.jsxs)("picture",{className:e.className,children:[e.sources.map((function(e,t){return(0,n.jsx)("source",c({},e),t)})),(0,n.jsx)("img",c({},e.fallback))]})}},3573:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return de},default:function(){return fe}});var n=r(6265),i=r(5893),o=r(1664),c=r(7294),a=r(9163),s=r(1585),l=r.n(s),u=r(5366),p=r.n(u),d=r(953),f=r.n(d),g=r(9525),h=r.n(g),m=r(4259),b=r.n(m),y=r(7310);function v(){try{return/Mobi|Android/i.test(navigator.userAgent)}catch(e){return!0}}function j(e,t){return{x:e,y:t}}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e){var t,r=e.target,n=e.event,i=n.clientX,o=n.clientY,c=i-r.left,a=o-r.top,s=j((t=r)?t.width/2:0,t?t.height/2:0);return w(w({},j(c/s.x,a/s.y)),{},{target:r})}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=c.createContext({duration:1e3,easing:"cubic-bezier(0.23, 1, 0.32, 1)",event:"move",eventData:{x:0,y:0},isMoving:!1,movement:{x:0,y:0,target:null},shape:null}),C=function(e){var t=e.active,r=e.children,n=e.duration,o=e.easing,a=e.event,s=e.perspective,l=e.tag,u=(0,c.useRef)(null),p=(0,c.useState)(!1),d=p[0],f=p[1],g=(0,c.useState)(!1),h=g[0],m=g[1],b=(0,c.useState)(null),y=b[0],O=b[1],w=(0,c.useState)({x:0,y:0,target:null}),P=w[0],_=w[1],C=(0,c.useState)({x:0,y:0}),E=C[0],M=C[1];(0,c.useEffect)((function(){var e={orientation:"deviceorientation",scroll:"scroll",move:v()?"deviceorientation":"move"};return"move"!==e[a]&&window.addEventListener(e[a],N,!0),function(){window.removeEventListener(e[a],N,!0)}}),[a]);var N=function(e,t,r){var n,i;return function(){var r,o=this;r=t;var c=+new Date,a=arguments;n&&c<n+r?(clearTimeout(i),i=setTimeout((function(){requestAnimationFrame((function(){n=c,e.apply(o,a)}))}),r)):requestAnimationFrame((function(){n=c,e.apply(o,a)}))}}((function(e){var r,n;if(t){d||h||f(!0);var i=null!==(r=null===(n=u.current)||void 0===n?void 0:n.getBoundingClientRect())&&void 0!==r?r:null;O(i);var o,c,s=(o=i).bottom>=0&&o.right>=0&&o.top<=(window.innerHeight||document.documentElement.clientHeight)&&o.left<=(window.innerWidth||document.documentElement.clientWidth);"move"===a&&d&&!v()?(_(x({target:i,event:e})),M(j(e.clientX,e.clientY))):("orientation"===a||"move"===a&&v())&&s?_(function(e){var t=e.event,r=e.target;return k(k({},j(t.gamma/45,t.beta/90)),{},{target:r})}({target:i,event:e})):"scroll"===a&&s&&null!==i&&void 0!==i&&i.height&&_(D(D({},j(((c=i).left-window.innerWidth)/(c.width+window.innerWidth),(c.top-window.innerHeight)/(c.height+window.innerHeight))),{},{target:c}))}}),100),I=l;return(0,i.jsx)(S.Provider,{value:{duration:n,easing:o,event:a,eventData:E,isMoving:d,movement:P,shape:y},children:(0,i.jsx)(I,{ref:u,style:{perspective:"".concat(s,"px")},onMouseMove:N,onMouseEnter:function(){t&&f(!0)},onMouseLeave:function(){t&&(m(!0),f(!1))},children:r})})};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e){var t=e.y,r=e.x,n=e.target,i=e.originX,o=void 0===i?50:i,c=e.strength,a=void 0===c?10:c,s=e.event,l=void 0===s?null:s,u=e.originY,p=void 0===u?50:u;return"scroll"===l&&(p=-p/2),M(M({},j((r-o/50)*a,(t-p/50)*a)),{},{target:n})}function I(e,t,r){return r&&e>r?r:t&&e<t?t:e}function Z(e){var t=e.referencePosition,r=e.elementPosition,n=e.spanningRange,i=e.cycles,o=(t-r)*(2*Math.PI)/n;return n*Math.sin(o*i)/(n/2)}function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}C.defaultProps={active:!0,duration:1e3,easing:"cubic-bezier(0.23, 1, 0.32, 1)",tag:"div",perspective:1e3,event:"move"};var R=function(e){var t=e.axis,r=e.children,n=e.cycle,o=e.strength,a=e.maxX,s=e.maxY,l=e.minX,u=e.minY,p=e.originX,d=e.originY,f=e.tag,g=e.transformOrigin,h=e.type,m=(0,c.useContext)(S),b=m.duration,y=m.easing,v=m.event,j=m.eventData,O=m.isMoving,w=m.movement,x=m.shape,P=function(e,t){return"translate3d(".concat(-e,"px, ").concat(-t,"px, 0)")},k=function(e,r){var n;return t?"x"===t?n=2*e:"y"===t&&(n=2*r):n=e+r,"rotate3d(0,0,1,".concat(n,"deg)")},_=function(e,t,r){return"rotateX(".concat(-t,"deg) rotateY(").concat(e,"deg) translate3d(0,0,").concat(2*r,"px)")},D=function(e,t){var r=Math.sign(o)*(Math.abs(e)+Math.abs(t))/10+1;return"scale3d(".concat("scaleX"===h||"scale"===h?r:1,",\n\t\t\t").concat("scaleY"===h||"scale"===h?r:1,",\n\t\t\t1)")},C=function(){if(!O&&"move"===v)return{};var e,r,i="depth"===h||"depth_inv"===h?Math.abs(o):o;if(n<=0){var c=N(Y(Y({},w),{},{originX:p,originY:d,modifiedStrength:i})),f=c.x,g=c.y;if("scroll"!==v)e="y"===t?0:I(f,l,a),r="x"===t?0:I(g,u,s);else{var m=N({x:w.x,y:w.y,originX:p,originY:d,modifiedStrength:i,event:v}).y;e="x"===t?m:0,r="y"!==t&&t?0:m}}else if(n>0){if(null!=x)e=("x"===t?Z({referencePosition:"scroll"===v?0:j.x,elementPosition:x.left,spanningRange:"scroll"===v?window.innerWidth:x.width,cycles:n}):0)*i,r=("y"!==t&&t?0:Z({referencePosition:"scroll"===v?0:j.y,elementPosition:x.top,spanningRange:"scroll"===v?window.innerHeight:x.height,cycles:n}))*i}return{transform:function(e,t,r,n){var i;switch(e){case"translate":i=P(t,r);break;case"rotate":i=k(t,r);break;case"depth":i=_(t,r,n);break;case"depth_inv":i=_(-t,-r,n);break;case"scale":case"scaleX":case"scaleY":i=D(t,r)}return i}(h,e,r,o)}}(),E=f;return(0,i.jsx)(E,{style:Y(Y({},C),{},{transitionProperty:"transform",transitionDuration:"".concat(b,"ms"),transformOrigin:g,transitionTimingFunction:y}),children:r})};R.defaultProps={tag:"div",type:"translate",transformOrigin:"center",originX:50,originY:50,strength:10,audioIndex:10,axis:null,maxX:null,maxY:null,minX:null,minY:null,cycle:0};var A=r(4776),H=r(5775),W=r(183),L=r(3417),z=r(249),F=r(7688),T=r(932),B=r(8127);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=a.ZP.div.withConfig({displayName:"ProjectPicker__LeftAlign",componentId:"dyt3ax-0"})(["@media (min-width:","px){padding-left:calc((100% - 960px) / 2);}"],F.u.min.lg),G=a.ZP.a.withConfig({displayName:"ProjectPicker__A",componentId:"dyt3ax-1"})(["color:",";"," display:inline-block;font-family:'Open Sans',sans-serif;"," font-weight:300;transition:color 0.3s cubic-bezier(0.23,1,0.32,1);text-transform:uppercase;&:hover{color:",";}&:active{color:",";}&:disabled{color:",";}"],(function(e){return e.theme.colors[4][0]}),(function(e){return e.isDisabled?"cursor: not-allowed;":""}),T.R.fontSize("16px"),(function(e){return e.theme.colors[4][1]}),(function(e){return e.theme.colors[4][2]}),(function(e){return e.theme.colors[4][3]})),V=a.ZP.ul.withConfig({displayName:"ProjectPicker__ProjectList",componentId:"dyt3ax-2"})(["list-style:none;&:not(:hover) ","{color:",";}"],G,(function(e){return e.theme.colors[4][1]})),K=a.ZP.li.withConfig({displayName:"ProjectPicker__ListItem",componentId:"dyt3ax-3"})([""," &:last-child{margin-bottom:0;}"],T.R.marginBottom("63px")),Q=a.ZP.span.withConfig({displayName:"ProjectPicker__Big",componentId:"dyt3ax-4"})(["font-family:'Judson',serif;font-weight:bold;"," text-transform:none;white-space:pre;"],T.R.fontSize("42px")),$=a.ZP.span.withConfig({displayName:"ProjectPicker__IB",componentId:"dyt3ax-5"})(["display:inline-block;"]),ee=a.ZP.div.withConfig({displayName:"ProjectPicker__PictureContainer",componentId:"dyt3ax-6"})(["height:480px;text-align:center;width:480px;"]),te=(0,a.ZP)(B.t).withConfig({displayName:"ProjectPicker__StyledPicture",componentId:"dyt3ax-7"})(["display:block;height:100%;width:100%;img{max-height:100%;max-width:100%;width:auto;}"]),re=function(e){var t,r=e.darkMode,n=e.projects,a=(0,c.useState)(null),s=a[0],l=a[1],u=r&&null!==(t=null===s||void 0===s?void 0:s.darkModeImage)&&void 0!==t?t:null===s||void 0===s?void 0:s.image;return(0,i.jsx)(q,{children:(0,i.jsxs)("div",{className:"row justify-content-lg-start justify-content-center align-items-center",children:[(0,i.jsx)("div",{className:"col-auto d-none d-lg-block",children:(0,i.jsx)(ee,{children:u&&(0,i.jsx)(te,J({},u))})}),(0,i.jsx)("div",{className:"col-auto col-lg",onMouseLeave:function(){return l(null)},children:(0,i.jsx)(C,{children:(0,i.jsx)(R,{type:"depth",strength:5,children:(0,i.jsx)(V,{children:n.map((function(e,t){var r=e.title,n=e.url,c=e.type,a=e.disabled;return(0,i.jsx)(K,{children:(0,i.jsx)(o.default,{href:n,passHref:!0,children:(0,i.jsxs)(G,{onClick:a?function(e){return e.preventDefault()}:void 0,isDisabled:a,onMouseEnter:function(){return l(e)},onFocus:function(){return l(e)},children:[t+1,(0,i.jsx)("wbr",{}),(0,i.jsxs)(Q,{children:["   ",r,"   "]}),(0,i.jsx)("wbr",{}),(0,i.jsx)("br",{className:"d-sm-inline d-md-none d-lg-inline d-xxl-none"}),(0,i.jsx)($,{children:c})]})})},t)}))})})})})]})})},ne=r(6011);function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ce=a.ZP.div.withConfig({displayName:"pages__Subheader",componentId:"sc-1un8o0x-0"})([""," font-weight:bold;"],T.R.fontSize("36px")),ae=a.ZP.span.withConfig({displayName:"pages__Wide",componentId:"sc-1un8o0x-1"})([""," font-family:'Lustria',sans-serif;font-weight:normal;letter-spacing:0.5em;text-transform:uppercase;vertical-align:middle;span{letter-spacing:normal;}"],T.R.fontSize("24px")),se=a.ZP.a.withConfig({displayName:"pages__CheckOut",componentId:"sc-1un8o0x-2"})(["color:inherit !important;display:block;float:right;"," "," position:relative;width:100px;"],T.R.margin("0 0 40px"),T.R.padding("0 10px 20px 0")),le=a.ZP.div.withConfig({displayName:"pages__ArrowContainer",componentId:"sc-1un8o0x-3"})(["height:100%;position:absolute;right:0;top:0;width:0;& > div{height:100%;}"]),ue=a.ZP.div.withConfig({displayName:"pages__Arrow",componentId:"sc-1un8o0x-4"})(["border-radius:2px;border-right:2px solid currentColor;height:100%;&:after{content:'';border:8px solid currentColor;border-bottom:0;border-left-color:transparent;border-right-color:transparent;bottom:-2px;height:8px;position:absolute;right:-9px;width:16px;}"]),pe=a.ZP.div.withConfig({displayName:"pages__FullHeight",componentId:"sc-1un8o0x-5"})(["display:flex;flex-direction:column;min-height:100vh;"]),de=!0;function fe(e){var t=(0,ne.C)((function(e){return e})).darkMode;return(0,i.jsxs)(H.N,oe(oe({},e),{},{darkMode:t,children:[(0,i.jsx)(C,{children:(0,i.jsxs)(pe,{children:[(0,i.jsx)(z.m,{}),(0,i.jsx)(W.J,{children:(0,i.jsxs)(A.O,{children:[(0,i.jsxs)("h1",{children:["Hello, I'm ",(0,i.jsx)(y.H,{children:"Allie"}),"."]}),(0,i.jsxs)(ce,{children:["I am a designer and artist based in San Francisco.",(0,i.jsx)("br",{}),"I have a passion for ",(0,i.jsxs)(ae,{children:["aesthetic",(0,i.jsx)("span",{children:"s"})]})," & actually taking a moment to stop and smell the flowers."]})]})}),(0,i.jsx)(A.O,{children:(0,i.jsx)(o.default,{href:"/#work",passHref:!0,children:(0,i.jsxs)(se,{children:["Check out some of my work.",(0,i.jsx)(le,{children:(0,i.jsx)(R,{type:"translate",strength:5,axis:"y",cycle:2,children:(0,i.jsx)(ue,{})})})]})})})]})}),(0,i.jsxs)(pe,{id:"work",children:[(0,i.jsx)(W.J,{children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(re,{darkMode:t,projects:[{title:"Marshawarma",type:"UX/UI App Design",url:"/marshawarma",image:{sources:[{srcSet:h()}],fallback:{src:f(),alt:"Marshawarma"}},darkModeImage:{sources:[{srcSet:p()}],fallback:{src:l(),alt:"Marshawarma"}}},{disabled:!0,title:"Government Website",type:"UX/UI Web Design",url:"/gov",image:{sources:[],fallback:{src:"",alt:""}}},{disabled:!0,title:"Project in the Works",type:"Check back in a bit :)",url:"#",image:{sources:[],fallback:{src:"",alt:""}}},{disabled:!0,title:"Various Multimedia",type:"Personal Projects",url:"/multimedia",image:{sources:[],fallback:{src:b(),alt:"Various Multimedia"}}}]})})}),(0,i.jsx)(L.W,{darkMode:t})]})]}))}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3573)}])},1585:function(e){e.exports="/_next/static/images/marshawarma-preview-dark-9475b4b394c44ce65fe8ac9bed21475c.png"},953:function(e){e.exports="/_next/static/images/marshawarma-preview-a2bf25cec22558ebef00be7412dc2e3d.png"},4259:function(e){e.exports="/_next/static/images/multimedia-preview-3cae135e2dcc90602c28dcbff507eb6c.jpg"},5366:function(e){e.exports="/_next/static/images/marshawarma-preview-dark-164c3434e1c9b9e1669befe1150d264c.webp"},9525:function(e){e.exports="/_next/static/images/marshawarma-preview-c61414ddeeda939bad1da8d5546ca4bf.webp"}},function(e){e.O(0,[937,866,556,372,96,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);