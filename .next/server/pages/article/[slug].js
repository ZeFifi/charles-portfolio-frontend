(function() {
var exports = {};
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 8859:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "react-markdown"
var external_react_markdown_namespaceObject = require("react-markdown");;
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_namespaceObject);
;// CONCATENATED MODULE: external "react-moment"
var external_react_moment_namespaceObject = require("react-moment");;
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__(6347);
// EXTERNAL MODULE: ./components/image.js
var components_image = __webpack_require__(5030);
// EXTERNAL MODULE: ./components/seo.js
var components_seo = __webpack_require__(8303);
// EXTERNAL MODULE: ./lib/media.js
var media = __webpack_require__(1422);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: external "classnames"
var external_classnames_namespaceObject = require("classnames");;
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: ./pages/article/[slug].js




/* eslint-disable @next/next/no-img-element */










const Article = ({
  article,
  categories
}) => {
  var _article$attributes$i, _article$attributes$i2, _gallery$data;

  const imageUrl = (0,media/* getStrapiMedia */.$)(article.attributes.image);
  const imagesUrl = (_article$attributes$i = article.attributes.images.data) === null || _article$attributes$i === void 0 ? void 0 : _article$attributes$i.map(data => (0,api/* getStrapiURL */.p)(data.attributes.url));
  const imagesCaption = (_article$attributes$i2 = article.attributes.images.data) === null || _article$attributes$i2 === void 0 ? void 0 : _article$attributes$i2.map(data => data.attributes.caption);
  const isFlexCol = article.attributes.isFlexCol;
  const gallery = article.attributes.images;
  console.log(gallery);
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    categories: categories.data,
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_seo/* default */.Z, {
      seo: seo
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_classnames_default()("flex items-center justify-evenly min-h-full p-4 text-white", {
        "flex-col": isFlexCol
      }),
      style: {
        backgroundColor: article.attributes.backgroundColor
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex flex-col items-center gap-14",
        children: gallery === null || gallery === void 0 ? void 0 : (_gallery$data = gallery.data) === null || _gallery$data === void 0 ? void 0 : _gallery$data.map(image => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "relative mb-5 flex justify-center items-center gap-14",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              className: external_classnames_default()("object-contain", {
                "w-1/3": isFlexCol
              }),
              src: (0,api/* getStrapiURL */.p)(image.attributes.url),
              alt: "Sylvie"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: image.attributes.caption
            })]
          })
        }))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-section",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "uk-container uk-container-small",
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
              source: article.attributes.content,
              escapeHtml: false
            })
          })
        })
      })]
    })]
  });
};

async function getStaticPaths() {
  const articlesRes = await (0,api/* fetchAPI */.I)("/articles", {
    fields: ["slug"]
  });
  return {
    paths: articlesRes.data.map(article => ({
      params: {
        slug: article.attributes.slug
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
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
/* harmony default export */ var _slug_ = (Article);

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6850:
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [821,544,61,672,367], function() { return __webpack_exec__(8859); });
module.exports = __webpack_exports__;

})();