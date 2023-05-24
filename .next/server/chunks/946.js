"use strict";
exports.id = 946;
exports.ids = [946];
exports.modules = {

/***/ 2751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5310);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const Image = ({ image , style  })=>{
    const { url , alternativeText , width , height  } = image.data.attributes;
    // const loader = () => {
    //   return getStrapiMedia(image)
    // }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        // loader={loader}
        layout: "responsive",
        width: width || "100%",
        height: height || "100%",
        objectFit: "contain",
        src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_1__/* .getStrapiMedia */ .$)(image),
        alt: alternativeText || ""
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);


/***/ }),

/***/ 3429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/nav.js



const Nav = ({ categories  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "w-1/3 p-16 text-white",
        style: {
            backgroundColor: "#0D0D0D"
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
            className: "flex gap-12",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "font-bold",
                            children: categories[0].attributes.name
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            children: categories[0].attributes.articles?.data.map((data)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: "font-light",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: `/article/${data.attributes.slug}`,
                                        children: data.attributes.title
                                    })
                                }, data.id))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "font-bold",
                            children: categories[1].attributes.name
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            className: "mb-6",
                            children: categories[1].attributes.articles?.data.map((data)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: "font-light",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: `/article/${data.attributes.slug}`,
                                        children: data.attributes.title
                                    })
                                }, data.id))
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "font-bold",
                            children: categories[2].attributes.name
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            children: categories[2].attributes.articles?.data.map((data)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: "font-light",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: `/article/${data.attributes.slug}`,
                                        children: data.attributes.title
                                    })
                                }, data.id))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const nav = (Nav);

;// CONCATENATED MODULE: ./components/layout.js


const Layout = ({ children , categories , seo  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex",
        style: {
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(nav, {
                categories: categories
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex flex-col w-full",
                children: children
            })
        ]
    });
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 3726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6004);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5310);





const Seo = ({ seo  })=>{
    const { defaultSeo , siteName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.GlobalContext);
    const seoWithDefaults = {
        ...defaultSeo,
        ...seo
    };
    const fullSeo = {
        ...seoWithDefaults,
        // Add title suffix
        metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
        // Get full image URL
        shareImage: (0,_lib_media__WEBPACK_IMPORTED_MODULE_4__/* .getStrapiMedia */ .$)(seoWithDefaults.shareImage)
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            fullSeo.metaTitle && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: fullSeo.metaTitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: fullSeo.metaTitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: fullSeo.metaTitle
                    })
                ]
            }),
            fullSeo.metaDescription && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: fullSeo.metaDescription
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: fullSeo.metaDescription
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: fullSeo.metaDescription
                    })
                ]
            }),
            fullSeo.shareImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: fullSeo.shareImage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:image",
                        content: fullSeo.shareImage
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "image",
                        content: fullSeo.shareImage
                    })
                ]
            }),
            fullSeo.article && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "article"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);


/***/ })

};
;