(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{2137:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/[slug]",function(){return a(299)}])},2751:function(t,e,a){"use strict";var i=a(5893),s=a(5310),r=a(5675),n=a.n(r);let l=t=>{let{image:e,style:a}=t,{url:r,alternativeText:l,width:c,height:o}=e.data.attributes;return(0,i.jsx)(n(),{layout:"responsive",width:c||"100%",height:o||"100%",objectFit:"contain",src:(0,s.$)(e),alt:l||""})};e.Z=l},3429:function(t,e,a){"use strict";a.d(e,{Z:function(){return c}});var i=a(5893);a(7294);var s=a(1664),r=a.n(s);let n=t=>{var e,a,s;let{categories:n}=t;return(0,i.jsx)("div",{className:"w-1/3 p-16 text-white",style:{backgroundColor:"#0D0D0D"},children:(0,i.jsxs)("nav",{className:"flex gap-12",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"font-bold",children:n[0].attributes.name}),(0,i.jsx)("ul",{children:null===(e=n[0].attributes.articles)||void 0===e?void 0:e.data.map(t=>(0,i.jsx)("li",{className:"font-light",children:(0,i.jsx)(r(),{href:"/article/".concat(t.attributes.slug),children:t.attributes.title})},t.id))})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"font-bold",children:n[1].attributes.name}),(0,i.jsx)("ul",{className:"mb-6",children:null===(a=n[1].attributes.articles)||void 0===a?void 0:a.data.map(t=>(0,i.jsx)("li",{className:"font-light",children:(0,i.jsx)(r(),{href:"/article/".concat(t.attributes.slug),children:t.attributes.title})},t.id))}),(0,i.jsx)("div",{className:"font-bold",children:n[2].attributes.name}),(0,i.jsx)("ul",{children:null===(s=n[2].attributes.articles)||void 0===s?void 0:s.data.map(t=>(0,i.jsx)("li",{className:"font-light",children:(0,i.jsx)(r(),{href:"/article/".concat(t.attributes.slug),children:t.attributes.title})},t.id))})]})]})})},l=t=>{let{children:e,categories:a,seo:s}=t;return(0,i.jsxs)("div",{className:"flex",style:{minHeight:"100vh"},children:[(0,i.jsx)(n,{categories:a}),(0,i.jsx)("div",{className:"flex flex-col w-full",children:e})]})};var c=l},3726:function(t,e,a){"use strict";var i=a(5893),s=a(9008),r=a.n(s),n=a(7294),l=a(6004),c=a(5310);let o=t=>{let{seo:e}=t,{defaultSeo:a,siteName:s}=(0,n.useContext)(l.GlobalContext),o={...a,...e},d={...o,metaTitle:"".concat(o.metaTitle," | ").concat(s),shareImage:(0,c.$)(o.shareImage)};return(0,i.jsxs)(r(),{children:[d.metaTitle&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("title",{children:d.metaTitle}),(0,i.jsx)("meta",{property:"og:title",content:d.metaTitle}),(0,i.jsx)("meta",{name:"twitter:title",content:d.metaTitle})]}),d.metaDescription&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"description",content:d.metaDescription}),(0,i.jsx)("meta",{property:"og:description",content:d.metaDescription}),(0,i.jsx)("meta",{name:"twitter:description",content:d.metaDescription})]}),d.shareImage&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{property:"og:image",content:d.shareImage}),(0,i.jsx)("meta",{name:"twitter:image",content:d.shareImage}),(0,i.jsx)("meta",{name:"image",content:d.shareImage})]}),d.article&&(0,i.jsx)("meta",{property:"og:type",content:"article"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})};e.Z=o},299:function(t,e,a){"use strict";a.r(e),a.d(e,{__N_SSG:function(){return x}});var i=a(5893),s=a(724),r=a.n(s);a(4803);var n=a(2523),l=a(3429);a(2751);var c=a(3726),o=a(5310);a(5675);var d=a(4184),m=a.n(d);let u=t=>{var e,a,s;let{article:d,categories:u}=t;(0,o.$)(d.attributes.image),null===(e=d.attributes.images.data)||void 0===e||e.map(t=>(0,n.p)(t.attributes.url)),null===(a=d.attributes.images.data)||void 0===a||a.map(t=>t.attributes.caption);let x=d.attributes.isFlexCol,h=d.attributes.images;console.log(h);let j={metaTitle:d.attributes.title,metaDescription:d.attributes.description,shareImage:d.attributes.image,article:!0};return(0,i.jsxs)(l.Z,{categories:u.data,children:[(0,i.jsx)(c.Z,{seo:j}),(0,i.jsxs)("div",{className:m()("flex items-center justify-evenly min-h-full p-4 text-white",{"flex-col":x}),style:{backgroundColor:d.attributes.backgroundColor},children:[(0,i.jsx)("div",{className:"flex flex-col items-center gap-14",children:null==h?void 0:null===(s=h.data)||void 0===s?void 0:s.map(t=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"relative mb-5 flex justify-center items-center gap-14",children:[(0,i.jsx)("img",{className:m()("object-contain",{"w-1/3":x}),src:(0,n.p)(t.attributes.url),alt:"Sylvie"}),(0,i.jsx)("div",{children:t.attributes.caption})]})}))}),(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"uk-section",children:(0,i.jsx)("div",{className:"uk-container uk-container-small",children:(0,i.jsx)(r(),{source:d.attributes.content,escapeHtml:!1})})})})]})]})};var x=!0;e.default=u}},function(t){t.O(0,[885,61,538,774,888,179],function(){return t(t.s=2137)}),_N_E=t.O()}]);