(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 131:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/articles.js + 1 modules
var articles = __webpack_require__(8593);
// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__(6347);
// EXTERNAL MODULE: ./components/seo.js
var seo = __webpack_require__(8303);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
;// CONCATENATED MODULE: external "react-swipeable"
var external_react_swipeable_namespaceObject = require("react-swipeable");;
;// CONCATENATED MODULE: ./components/Carousel.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const CarouselItem = ({
  children,
  width
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "carousel-item",
    style: {
      width: width
    },
    children: children
  });
};

const Carousel = ({
  children
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,external_react_.useState)(0);
  const {
    0: paused,
    1: setPaused
  } = (0,external_react_.useState)(false);

  const updateIndex = newIndex => {
    if (newIndex < 0) {
      newIndex = external_react_default().Children.count(children) - 1;
    } else if (newIndex >= external_react_default().Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  (0,external_react_.useEffect)(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  const handlers = (0,external_react_swipeable_namespaceObject.useSwipeable)({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({}, handlers), {}, {
    className: "carousel relative w-full",
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "inner",
      style: {
        transform: `translateX(-${activeIndex * 100}%)`
      },
      children: external_react_default().Children.map(children, (child, index) => {
        return /*#__PURE__*/external_react_default().cloneElement(child, {
          width: "100%"
        });
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "indicators w-full",
      children: external_react_default().Children.map(children, (child, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: `${index === activeIndex ? "active" : ""}`,
          onClick: () => {
            updateIndex(index);
          }
        });
      })
    })]
  }));
};

/* harmony default export */ var components_Carousel = (Carousel);
;// CONCATENATED MODULE: ./components/HomeCarousel.jsx


/* eslint-disable @next/next/no-img-element */


const HomeCarousel = ({
  content
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(components_Carousel, {
    children: content.map(content => /*#__PURE__*/jsx_runtime_.jsx(CarouselItem, {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "w-full h-full",
        href: content.attributes.work_url,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "w-full h-full object-cover",
          src: (0,api/* getStrapiURL */.p)(content.attributes.image_url),
          alt: content.attributes.title
        })
      })
    }, content.attributes.id))
  });
};
;// CONCATENATED MODULE: ./pages/index.js










const Home = ({
  articles,
  carousels,
  categories,
  homepage
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    categories: categories,
    children: [/*#__PURE__*/jsx_runtime_.jsx(seo/* default */.Z, {
      seo: homepage.attributes.seo
    }), /*#__PURE__*/jsx_runtime_.jsx(HomeCarousel, {
      content: carousels
    })]
  });
};

async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, carouselsRes, categoriesRes, homepageRes] = await Promise.all([(0,api/* fetchAPI */.I)("/articles", {
    populate: "*"
  }), (0,api/* fetchAPI */.I)("/carousels", {
    populate: "*"
  }), (0,api/* fetchAPI */.I)("/categories", {
    populate: "*"
  }), (0,api/* fetchAPI */.I)("/homepage", {
    populate: {
      hero: "*",
      seo: {
        populate: "*"
      }
    }
  })]);
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
/* harmony default export */ var pages = (Home);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [821,544,61,672,367,593], function() { return __webpack_exec__(131); });
module.exports = __webpack_exports__;

})();