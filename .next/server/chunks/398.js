"use strict";
exports.id = 398;
exports.ids = [398];
exports.modules = {

/***/ 1398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ articles)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/image.js
var components_image = __webpack_require__(2751);
;// CONCATENATED MODULE: ./components/card.js




const Card = ({ article  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        href: `/article/${article.attributes.slug}`,
        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
            className: "uk-link-reset",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "uk-card uk-card-muted",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "uk-card-media-top",
                        children: /*#__PURE__*/ jsx_runtime.jsx(components_image/* default */.Z, {
                            image: article.attributes.image
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "uk-card-body",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                id: "category",
                                className: "uk-text-uppercase",
                                children: article.attributes.category.name
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                id: "title",
                                className: "uk-text-large",
                                children: article.attributes.title
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const card = (Card);

;// CONCATENATED MODULE: ./components/articles.js



const Articles = ({ categories , articles  })=>{
    const leftArticlesCount = Math.ceil(articles.length / 5);
    const leftArticles = articles.slice(0, leftArticlesCount);
    const rightArticles = articles.slice(leftArticlesCount, articles.length);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "uk-child-width-1-2@s",
            "data-uk-grid": "true",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    children: leftArticles.map((article, i)=>{
                        return /*#__PURE__*/ jsx_runtime.jsx(card, {
                            article: article
                        }, `article__left__${article.attributes.slug}`);
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "uk-child-width-1-2@m uk-grid-match",
                        "data-uk-grid": true,
                        children: rightArticles.map((article, i)=>{
                            return /*#__PURE__*/ jsx_runtime.jsx(card, {
                                article: article
                            }, `article__left__${article.attributes.slug}`);
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const articles = (Articles);


/***/ })

};
;