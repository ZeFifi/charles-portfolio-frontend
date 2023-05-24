"use strict";
(() => {
var exports = {};
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 2939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "react-markdown"
const external_react_markdown_namespaceObject = require("react-markdown");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_namespaceObject);
;// CONCATENATED MODULE: external "react-moment"
const external_react_moment_namespaceObject = require("react-moment");
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(2523);
// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__(3429);
// EXTERNAL MODULE: ./components/image.js
var components_image = __webpack_require__(2751);
// EXTERNAL MODULE: ./components/seo.js
var components_seo = __webpack_require__(3726);
// EXTERNAL MODULE: ./lib/media.js
var media = __webpack_require__(5310);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: ./pages/article/[slug].js
/* eslint-disable @next/next/no-img-element */ 









const Article = ({ article , categories  })=>{
    const imageUrl = (0,media/* getStrapiMedia */.$)(article.attributes.image);
    const imagesUrl = article.attributes.images.data?.map((data)=>(0,api/* getStrapiURL */.p)(data.attributes.url));
    const imagesCaption = article.attributes.images.data?.map((data)=>data.attributes.caption);
    const isFlexCol = article.attributes.isFlexCol;
    const gallery = article.attributes.images;
    console.log(gallery);
    const seo = {
        metaTitle: article.attributes.title,
        metaDescription: article.attributes.description,
        shareImage: article.attributes.image,
        article: true
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout/* default */.Z, {
        categories: categories.data,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(components_seo/* default */.Z, {
                seo: seo
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: external_classnames_default()("flex items-center justify-evenly min-h-full p-4 text-white", {
                    "flex-col": isFlexCol
                }),
                style: {
                    backgroundColor: article.attributes.backgroundColor
                },
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex flex-col items-center gap-14",
                        children: gallery?.data?.map((image)=>/*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "relative mb-5 flex justify-center items-center gap-14",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            className: external_classnames_default()("object-contain", {
                                                "w-1/3": isFlexCol
                                            }),
                                            src: (0,api/* getStrapiURL */.p)(image.attributes.url),
                                            alt: "Sylvie"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            children: image.attributes.caption
                                        })
                                    ]
                                })
                            }))
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "uk-section",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "uk-container uk-container-small",
                                children: /*#__PURE__*/ jsx_runtime.jsx((external_react_markdown_default()), {
                                    source: article.attributes.content,
                                    escapeHtml: false
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
async function getStaticPaths() {
    const articlesRes = await (0,api/* fetchAPI */.I)("/articles", {
        fields: [
            "slug"
        ]
    });
    return {
        paths: articlesRes.data.map((article)=>({
                params: {
                    slug: article.attributes.slug
                }
            })),
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const articlesRes = await (0,api/* fetchAPI */.I)("/articles", {
        filters: {
            slug: params.slug
        },
        populate: "*"
    });
    const categoriesRes = await (0,api/* fetchAPI */.I)("/categories", {
        populate: "*"
    });
    return {
        props: {
            article: articlesRes.data[0],
            categories: categoriesRes
        },
        revalidate: 1
    };
}
/* harmony default export */ const _slug_ = (Article);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,544,61,4,946], () => (__webpack_exec__(2939)));
module.exports = __webpack_exports__;

})();