"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/articles.js + 1 modules
var articles = __webpack_require__(1398);
// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__(3429);
// EXTERNAL MODULE: ./components/seo.js
var seo = __webpack_require__(3726);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(2523);
;// CONCATENATED MODULE: external "react-swipeable"
const external_react_swipeable_namespaceObject = require("react-swipeable");
;// CONCATENATED MODULE: ./components/Carousel.jsx



const CarouselItem = ({ children , width  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "carousel-item",
        style: {
            width: width
        },
        children: children
    });
};
const Carousel = ({ children  })=>{
    const [activeIndex, setActiveIndex] = (0,external_react_.useState)(0);
    const [paused, setPaused] = (0,external_react_.useState)(false);
    const updateIndex = (newIndex)=>{
        if (newIndex < 0) {
            newIndex = external_react_default().Children.count(children) - 1;
        } else if (newIndex >= external_react_default().Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };
    (0,external_react_.useEffect)(()=>{
        const interval = setInterval(()=>{
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 3000);
        return ()=>{
            if (interval) {
                clearInterval(interval);
            }
        };
    });
    const handlers = (0,external_react_swipeable_namespaceObject.useSwipeable)({
        onSwipedLeft: ()=>updateIndex(activeIndex + 1),
        onSwipedRight: ()=>updateIndex(activeIndex - 1)
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ...handlers,
        className: "carousel relative w-full",
        onMouseEnter: ()=>setPaused(true),
        onMouseLeave: ()=>setPaused(false),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "inner",
                style: {
                    transform: `translateX(-${activeIndex * 100}%)`
                },
                children: external_react_default().Children.map(children, (child, index)=>{
                    return /*#__PURE__*/ external_react_default().cloneElement(child, {
                        width: "100%"
                    });
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "indicators w-full",
                children: external_react_default().Children.map(children, (child, index)=>{
                    return /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: `${index === activeIndex ? "active" : ""}`,
                        onClick: ()=>{
                            updateIndex(index);
                        }
                    });
                })
            })
        ]
    });
};
/* harmony default export */ const components_Carousel = (Carousel);

;// CONCATENATED MODULE: ./components/HomeCarousel.jsx
/* eslint-disable @next/next/no-img-element */ 


const HomeCarousel = ({ content  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(components_Carousel, {
        children: content.map((content)=>/*#__PURE__*/ jsx_runtime.jsx(CarouselItem, {
                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                    className: "w-full h-full",
                    href: content.attributes.work_url,
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        className: "w-full h-full object-cover",
                        src: (0,api/* getStrapiURL */.p)(content.attributes.image_url),
                        alt: content.attributes.title
                    })
                })
            }, content.attributes.id))
    });
};

;// CONCATENATED MODULE: ./pages/index.js








const Home = ({ articles , carousels , categories , homepage  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout/* default */.Z, {
        categories: categories,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(seo/* default */.Z, {
                seo: homepage.attributes.seo
            }),
            /*#__PURE__*/ jsx_runtime.jsx(HomeCarousel, {
                content: carousels
            })
        ]
    });
};
async function getStaticProps() {
    // Run API calls in parallel
    const [articlesRes, carouselsRes, categoriesRes, homepageRes] = await Promise.all([
        (0,api/* fetchAPI */.I)("/articles", {
            populate: "*"
        }),
        (0,api/* fetchAPI */.I)("/carousels", {
            populate: "*"
        }),
        (0,api/* fetchAPI */.I)("/categories", {
            populate: "*"
        }),
        (0,api/* fetchAPI */.I)("/homepage", {
            populate: {
                hero: "*",
                seo: {
                    populate: "*"
                }
            }
        })
    ]);
    return {
        props: {
            articles: articlesRes.data,
            carousels: carouselsRes.data,
            categories: categoriesRes.data,
            homepage: homepageRes.data
        },
        revalidate: 1
    };
}
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 7104:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,544,61,4,946,398], () => (__webpack_exec__(9713)));
module.exports = __webpack_exports__;

})();