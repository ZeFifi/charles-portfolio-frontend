(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8593:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),i=(n(7294),n(1664)),s=n(5030),c=function(e){var t=e.article;return(0,r.jsx)(i.default,{href:"/article/".concat(t.attributes.slug),children:(0,r.jsx)("a",{className:"uk-link-reset",children:(0,r.jsxs)("div",{className:"uk-card uk-card-muted",children:[(0,r.jsx)("div",{className:"uk-card-media-top",children:(0,r.jsx)(s.Z,{image:t.attributes.image})}),(0,r.jsxs)("div",{className:"uk-card-body",children:[(0,r.jsx)("p",{id:"category",className:"uk-text-uppercase",children:t.attributes.category.name}),(0,r.jsx)("p",{id:"title",className:"uk-text-large",children:t.attributes.title})]})]})})})},a=function(e){e.categories;var t=e.articles,n=Math.ceil(t.length/5),i=t.slice(0,n),s=t.slice(n,t.length);return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"uk-child-width-1-2@s","data-uk-grid":"true",children:[(0,r.jsx)("div",{children:i.map((function(e,t){return(0,r.jsx)(c,{article:e},"article__left__".concat(e.attributes.slug))}))}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"uk-child-width-1-2@m uk-grid-match","data-uk-grid":!0,children:s.map((function(e,t){return(0,r.jsx)(c,{article:e},"article__left__".concat(e.attributes.slug))}))})})]})})}},5030:function(e,t,n){"use strict";var r=n(5893),i=n(1422),s=n(5675);t.Z=function(e){var t=e.image,n=(e.style,t.data.attributes),c=(n.url,n.alternativeText),a=n.width,o=n.height;return(0,r.jsx)(s.default,{layout:"responsive",width:a||"100%",height:o||"100%",objectFit:"contain",src:(0,i.$)(t),alt:c||""})}},6347:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=(n(7294),n(1664)),s=function(e){var t,n,s,c=e.categories;return(0,r.jsx)("div",{className:"w-1/3 p-16 text-white",style:{backgroundColor:"#0D0D0D"},children:(0,r.jsxs)("nav",{className:"flex gap-12",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"font-bold",children:c[0].attributes.name}),(0,r.jsx)("ul",{children:null===(t=c[0].attributes.articles)||void 0===t?void 0:t.data.map((function(e){return(0,r.jsx)("li",{className:"font-light",children:(0,r.jsx)(i.default,{href:"/article/".concat(e.attributes.slug),children:(0,r.jsx)("a",{children:e.attributes.title})})},e.id)}))})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"font-bold",children:c[1].attributes.name}),(0,r.jsx)("ul",{className:"mb-6",children:null===(n=c[1].attributes.articles)||void 0===n?void 0:n.data.map((function(e){return(0,r.jsx)("li",{className:"font-light",children:(0,r.jsx)(i.default,{href:"/article/".concat(e.attributes.slug),children:(0,r.jsx)("a",{children:e.attributes.title})})},e.id)}))}),(0,r.jsx)("div",{className:"font-bold",children:c[2].attributes.name}),(0,r.jsx)("ul",{children:null===(s=c[2].attributes.articles)||void 0===s?void 0:s.data.map((function(e){return(0,r.jsx)("li",{className:"font-light",children:(0,r.jsx)(i.default,{href:"/article/".concat(e.attributes.slug),children:(0,r.jsx)("a",{children:e.attributes.title})})},e.id)}))})]})]})})},c=function(e){var t=e.children,n=e.categories;e.seo;return(0,r.jsxs)("div",{className:"flex",style:{minHeight:"100vh"},children:[(0,r.jsx)(s,{categories:n}),(0,r.jsx)("div",{className:"flex flex-col w-full",children:t})]})}},8303:function(e,t,n){"use strict";var r=n(5893),i=n(6156),s=n(9008),c=n(7294),a=n(7672),o=n(1422);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=e.seo,n=(0,c.useContext)(a.GlobalContext),i=n.defaultSeo,l=n.siteName,d=u(u({},i),t),h=u(u({},d),{},{metaTitle:"".concat(d.metaTitle," | ").concat(l),shareImage:(0,o.$)(d.shareImage)});return(0,r.jsxs)(s.default,{children:[h.metaTitle&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:h.metaTitle}),(0,r.jsx)("meta",{property:"og:title",content:h.metaTitle}),(0,r.jsx)("meta",{name:"twitter:title",content:h.metaTitle})]}),h.metaDescription&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"description",content:h.metaDescription}),(0,r.jsx)("meta",{property:"og:description",content:h.metaDescription}),(0,r.jsx)("meta",{name:"twitter:description",content:h.metaDescription})]}),h.shareImage&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{property:"og:image",content:h.shareImage}),(0,r.jsx)("meta",{name:"twitter:image",content:h.shareImage}),(0,r.jsx)("meta",{name:"image",content:h.shareImage})]}),h.article&&(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},8517:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return x},default:function(){return w}});var r=n(5893),i=n(7294),s=(n(8593),n(6347)),c=n(8303),a=n(6156);const o={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},l={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},u="mousemove",d="mouseup";function h(e,t){if(0===t)return e;const n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function p(e,t){const n=t=>{const n="touches"in t;n&&t.touches.length>1||e(((e,i)=>{i.trackMouse&&!n&&(document.addEventListener(u,r),document.addEventListener(d,s));const{clientX:c,clientY:a}=n?t.touches[0]:t,o=h([c,a],i.rotationAngle);return i.onTouchStartOrOnMouseDown&&i.onTouchStartOrOnMouseDown({event:t}),Object.assign(Object.assign(Object.assign({},e),l),{initial:o.slice(),xy:o,start:t.timeStamp||0})}))},r=t=>{e(((e,n)=>{const r="touches"in t;if(r&&t.touches.length>1)return e;if(t.timeStamp-e.start>n.swipeDuration)return e.swiping?Object.assign(Object.assign({},e),{swiping:!1}):e;const{clientX:i,clientY:s}=r?t.touches[0]:t,[c,a]=h([i,s],n.rotationAngle),l=c-e.xy[0],u=a-e.xy[1],d=Math.abs(l),p=Math.abs(u),f=(t.timeStamp||0)-e.start,m=Math.sqrt(d*d+p*p)/(f||1),j=[l/(f||1),u/(f||1)],g=function(e,t,n,r){return e>t?n>0?"Right":"Left":r>0?"Down":"Up"}(d,p,l,u),v="number"===typeof n.delta?n.delta:n.delta[g.toLowerCase()]||o.delta;if(d<v&&p<v&&!e.swiping)return e;const b={absX:d,absY:p,deltaX:l,deltaY:u,dir:g,event:t,first:e.first,initial:e.initial,velocity:m,vxvy:j};b.first&&n.onSwipeStart&&n.onSwipeStart(b),n.onSwiping&&n.onSwiping(b);let O=!1;return(n.onSwiping||n.onSwiped||n[`onSwiped${g}`])&&(O=!0),O&&n.preventScrollOnSwipe&&n.trackTouch&&t.cancelable&&t.preventDefault(),Object.assign(Object.assign({},e),{first:!1,eventData:b,swiping:!0})}))},i=t=>{e(((e,n)=>{let r;if(e.swiping&&e.eventData){if(t.timeStamp-e.start<n.swipeDuration){r=Object.assign(Object.assign({},e.eventData),{event:t}),n.onSwiped&&n.onSwiped(r);const i=n[`onSwiped${r.dir}`];i&&i(r)}}else n.onTap&&n.onTap({event:t});return n.onTouchEndOrOnMouseUp&&n.onTouchEndOrOnMouseUp({event:t}),Object.assign(Object.assign(Object.assign({},e),l),{eventData:r})}))},s=e=>{document.removeEventListener(u,r),document.removeEventListener(d,s),i(e)},c=(e,t)=>{let s=()=>{};if(e&&e.addEventListener){const c=Object.assign(Object.assign({},o.touchEventOptions),t.touchEventOptions),a=[["touchstart",n,c],["touchmove",r,Object.assign(Object.assign({},c),t.preventScrollOnSwipe?{passive:!1}:{})],["touchend",i,c]];a.forEach((([t,n,r])=>e.addEventListener(t,n,r))),s=()=>a.forEach((([t,n])=>e.removeEventListener(t,n)))}return s},a={ref:t=>{null!==t&&e(((e,n)=>{if(e.el===t)return e;const r={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),r.cleanUpTouch=void 0),n.trackTouch&&t&&(r.cleanUpTouch=c(t,n)),Object.assign(Object.assign(Object.assign({},e),{el:t}),r)}))}};return t.trackMouse&&(a.onMouseDown=n),[a,c]}function f(e){const{trackMouse:t}=e,n=i.useRef(Object.assign({},l)),r=i.useRef(Object.assign({},o)),s=i.useRef(Object.assign({},r.current));let c;for(c in s.current=Object.assign({},r.current),r.current=Object.assign(Object.assign({},o),e),o)void 0===r.current[c]&&(r.current[c]=o[c]);const[a,u]=i.useMemo((()=>p((e=>n.current=e(n.current,r.current)),{trackMouse:t})),[t]);return n.current=function(e,t,n,r){return t.trackTouch&&e.el?e.cleanUpTouch?t.preventScrollOnSwipe!==n.preventScrollOnSwipe||t.touchEventOptions.passive!==n.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:r(e.el,t)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:r(e.el,t)}):(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0}))}(n.current,r.current,s.current,u),a}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){var t=e.children,n=e.width;return(0,r.jsx)("div",{className:"carousel-item",style:{width:n},children:t})},v=function(e){var t=e.children,n=(0,i.useState)(0),s=n[0],c=n[1],a=(0,i.useState)(!1),o=a[0],l=a[1],u=function(e){e<0?e=i.Children.count(t)-1:e>=i.Children.count(t)&&(e=0),c(e)};(0,i.useEffect)((function(){var e=setInterval((function(){o||u(s+1)}),3e3);return function(){e&&clearInterval(e)}}));var d=f({onSwipedLeft:function(){return u(s+1)},onSwipedRight:function(){return u(s-1)}});return(0,r.jsxs)("div",j(j({},d),{},{className:"carousel relative w-full",onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},children:[(0,r.jsx)("div",{className:"inner",style:{transform:"translateX(-".concat(100*s,"%)")},children:i.Children.map(t,(function(e,t){return i.cloneElement(e,{width:"100%"})}))}),(0,r.jsx)("div",{className:"indicators w-full",children:i.Children.map(t,(function(e,t){return(0,r.jsx)("button",{className:"".concat(t===s?"active":""),onClick:function(){u(t)}})}))})]}))},b=n(883),O=function(e){var t=e.content;return(0,r.jsx)(v,{children:t.map((function(e){return(0,r.jsx)(g,{children:(0,r.jsx)("a",{className:"w-full h-full",href:e.attributes.work_url,children:(0,r.jsx)("img",{className:"w-full h-full object-cover",src:(0,b.p)(e.attributes.image_url),alt:e.attributes.title})})},e.attributes.id)}))})},x=!0,w=function(e){e.articles;var t=e.carousels,n=e.categories,i=e.homepage;return(0,r.jsxs)(s.Z,{categories:n,children:[(0,r.jsx)(c.Z,{seo:i.attributes.seo}),(0,r.jsx)(O,{content:t})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8517)}])}},function(e){e.O(0,[61,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);