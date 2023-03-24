/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300&family=Yusei+Magic&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main: #333;\n    --content: #eee;\n    --nav: #ddd;\n    --nav-dark: #ccc;\n    --green: #77dd77;\n    --red: #ff6961;\n    --cancel-display: none;\n    --priority-color: var(--nav-dark);\n    --priority-bg: var(--nav);\n}\n\n.priority-1 {\n    --priority-color: #F4442E;\n    --priority-bg: #F4442E66;\n}\n\n.priority-2 {\n    --priority-color: #FC9E4F;\n    --priority-bg: #FC9E4F66;\n}\n\n.priority-3 {\n    --priority-color: #EDD382;\n    --priority-bg: #EDD38266;\n}\n\n.priority-4 {\n    --priority-color: #F2F3AE;\n    --priority-bg: #F2F3AE66;\n}\n\nbody {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Roboto', sans-serif;\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n}\n\nimg {\n    height: 25px;\n}\n\nbutton {\n    cursor: pointer;\n    border: 0px;\n    color: #fff;\n}\n\n#header {\n    display: flex;\n    align-items: center;\n    gap: 2px;\n    font-size: 42px;\n    background-color: var(--main);\n    padding: 20px 10px;\n    font-weight: 600;\n    font-family: 'Yusei Magic', sans-serif; \n    color: var(--content);\n}\n\n#header img {\n    height: 60px;\n}\n\n.side-nav {\n    padding: 20px;\n    font-size: 16px;\n    background-color: var(--nav);\n}\n\n.side-nav img {\n    height: 30px;\n}\n\n.side-nav > div {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    gap: 2px;\n    border-radius: 7px;\n}\n\n.side-nav .nav-item:hover {\n    background-color: var(--nav-dark);\n    cursor: pointer;\n}\n\n.nav-item {\n    margin: 5px 0px;\n}\n\n\n.main-content {\n    flex-grow: 1;\n    display: grid;\n    grid-template-columns: minmax(300px, 1fr) 6fr;\n    background-color: var(--content);\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 10px;\n    justify-content: center;\n    background-color: var(--main);\n    color: var(--content);\n}\n\nfooter img, #header img {\n    filter: invert(95%) sepia(0%) saturate(333%) hue-rotate(147deg) brightness(98%) contrast(85%);\n}\n\ndiv.project-container {\n    margin-top: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n#add-project {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    width: 100%;\n    padding: 5px;\n    border-radius: 7px;\n}\n\n.project-container > span {\n    font-size: larger;\n    font-weight: 500;\n}\n\n#new-project input {\n    width: 100%;\n    height: 25px;\n    border-radius: 7px;\n    border: 1px solid var(--red);\n    font-size: 16px;\n    padding: 5px;\n    margin: 5px 0 10px 0;\n    outline-width: 0;\n}\n\n#new-project input:focus {\n    border: 1px solid var(--green);\n    outline-width: 0;\n}\n\n#new-project button {\n    width: 100px;\n    font-size: 16px;\n    margin: 0 5px;\n    padding: 5px;\n    border-radius: 7px;\n}\n\n#new-project {\n    display: none; /* flex */\n    flex-wrap: wrap;\n}\n\n.green {\n    background-color: var(--green);\n}\n\n.red {\n    background-color: var(--red);\n}\n\n#projects {\n    width: 100%;\n}\n\n#projects > div {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    width: 100%;\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 7px;\n}\n\n#projects > div:hover {\n    background-color: var(--nav-dark);\n    --cancel-display: block;\n}\n\n.cancel {\n    margin-left: auto;\n    margin-right: 5px;\n    display: var(--cancel-display);\n}\n\n.content {\n    padding: 50px 15vw;\n}\n\n.content > span {\n    font-size: 30px;\n}\n\n#create-todos {\n    margin: 20px 0;\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    border-radius: 7px;\n    gap: 10px;\n}\n\n#create-todos:hover {\n    background-color: var(--nav-dark);\n    cursor: pointer;\n}\n\n.todo {\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n    border-radius: 7px;\n    background-color: aqua;\n    padding: 17px;\n    margin: 5px;\n    border: 2px solid var(--content);\n    background: linear-gradient( to left, var(--priority-color), var(--priority-color) 9px, var(--priority-bg) 9px, var(--priority-bg) 100% );\n}\n\n.todo:hover {\n    border: 2px solid var(--priority-bg);\n}\n\n.todo > div {\n    flex-wrap: wrap;\n    display: flex;\n    gap: 10px;\n    align-items: flex-end;\n}\n\n.todo .title {\n    font-size: 18px;\n    font-weight: 500;\n    margin-right: auto;\n    display: flex;\n    align-items: center;\n    gap: 3px;\n}\n\n.todo .edits {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.todo .edits > img:hover {\n    cursor: pointer;\n}\n\n.due-date {\n    margin-right: auto;\n}\n\n#new-todo {\n    border: 1px solid var(--main);\n    padding: 10px;\n    border-radius: 7px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    margin: 10px 0;\n    display: none;\n}\n\n#new-todo input {\n    outline: 0;\n    border-width: 0 0;\n    background-color: var(--content);\n    font-size: 16px;\n}\n\n#new-todo select {\n    background-color: var(--content);\n    padding: 3px;\n    border-radius: 7px;\n}\n\n#new-todo button {\n    padding: 5px;\n    margin: 0 2px;\n    font-size: 16px;\n    border-radius: 7px;\n    width: 100px;\n    align-self: center;\n}\n\n#new-todo .buttons {\n    display: flex;\n    gap: 5px;\n    justify-content: flex-end;\n}\n\n#new-todo input:first-child {\n    font-size: 20px;\n}\n\n.todo .description {\n    font-style: italic;\n}\n\ninput[type=checkbox] {\n    margin: 0px;\n    width: 20px;\n    height: 20px;\n    clip-path: circle(42% at 50% 50%);\n    accent-color: var(--priority-color);\n}\n\ninput[type=checkbox]:checked + span {\n    text-decoration: line-through;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300&family=Yusei+Magic&display=swap');\n\n:root {\n    --main: #333;\n    --content: #eee;\n    --nav: #ddd;\n    --nav-dark: #ccc;\n    --green: #77dd77;\n    --red: #ff6961;\n    --cancel-display: none;\n    --priority-color: var(--nav-dark);\n    --priority-bg: var(--nav);\n}\n\n.priority-1 {\n    --priority-color: #F4442E;\n    --priority-bg: #F4442E66;\n}\n\n.priority-2 {\n    --priority-color: #FC9E4F;\n    --priority-bg: #FC9E4F66;\n}\n\n.priority-3 {\n    --priority-color: #EDD382;\n    --priority-bg: #EDD38266;\n}\n\n.priority-4 {\n    --priority-color: #F2F3AE;\n    --priority-bg: #F2F3AE66;\n}\n\nbody {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Roboto', sans-serif;\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n}\n\nimg {\n    height: 25px;\n}\n\nbutton {\n    cursor: pointer;\n    border: 0px;\n    color: #fff;\n}\n\n#header {\n    display: flex;\n    align-items: center;\n    gap: 2px;\n    font-size: 42px;\n    background-color: var(--main);\n    padding: 20px 10px;\n    font-weight: 600;\n    font-family: 'Yusei Magic', sans-serif; \n    color: var(--content);\n}\n\n#header img {\n    height: 60px;\n}\n\n.side-nav {\n    padding: 20px;\n    font-size: 16px;\n    background-color: var(--nav);\n}\n\n.side-nav img {\n    height: 30px;\n}\n\n.side-nav > div {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    gap: 2px;\n    border-radius: 7px;\n}\n\n.side-nav .nav-item:hover {\n    background-color: var(--nav-dark);\n    cursor: pointer;\n}\n\n.nav-item {\n    margin: 5px 0px;\n}\n\n\n.main-content {\n    flex-grow: 1;\n    display: grid;\n    grid-template-columns: minmax(300px, 1fr) 6fr;\n    background-color: var(--content);\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 10px;\n    justify-content: center;\n    background-color: var(--main);\n    color: var(--content);\n}\n\nfooter img, #header img {\n    filter: invert(95%) sepia(0%) saturate(333%) hue-rotate(147deg) brightness(98%) contrast(85%);\n}\n\ndiv.project-container {\n    margin-top: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n#add-project {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    width: 100%;\n    padding: 5px;\n    border-radius: 7px;\n}\n\n.project-container > span {\n    font-size: larger;\n    font-weight: 500;\n}\n\n#new-project input {\n    width: 100%;\n    height: 25px;\n    border-radius: 7px;\n    border: 1px solid var(--red);\n    font-size: 16px;\n    padding: 5px;\n    margin: 5px 0 10px 0;\n    outline-width: 0;\n}\n\n#new-project input:focus {\n    border: 1px solid var(--green);\n    outline-width: 0;\n}\n\n#new-project button {\n    width: 100px;\n    font-size: 16px;\n    margin: 0 5px;\n    padding: 5px;\n    border-radius: 7px;\n}\n\n#new-project {\n    display: none; /* flex */\n    flex-wrap: wrap;\n}\n\n.green {\n    background-color: var(--green);\n}\n\n.red {\n    background-color: var(--red);\n}\n\n#projects {\n    width: 100%;\n}\n\n#projects > div {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    width: 100%;\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 7px;\n}\n\n#projects > div:hover {\n    background-color: var(--nav-dark);\n    --cancel-display: block;\n}\n\n.cancel {\n    margin-left: auto;\n    margin-right: 5px;\n    display: var(--cancel-display);\n}\n\n.content {\n    padding: 50px 15vw;\n}\n\n.content > span {\n    font-size: 30px;\n}\n\n#create-todos {\n    margin: 20px 0;\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    border-radius: 7px;\n    gap: 10px;\n}\n\n#create-todos:hover {\n    background-color: var(--nav-dark);\n    cursor: pointer;\n}\n\n.todo {\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n    border-radius: 7px;\n    background-color: aqua;\n    padding: 17px;\n    margin: 5px;\n    border: 2px solid var(--content);\n    background: linear-gradient( to left, var(--priority-color), var(--priority-color) 9px, var(--priority-bg) 9px, var(--priority-bg) 100% );\n}\n\n.todo:hover {\n    border: 2px solid var(--priority-bg);\n}\n\n.todo > div {\n    flex-wrap: wrap;\n    display: flex;\n    gap: 10px;\n    align-items: flex-end;\n}\n\n.todo .title {\n    font-size: 18px;\n    font-weight: 500;\n    margin-right: auto;\n    display: flex;\n    align-items: center;\n    gap: 3px;\n}\n\n.todo .edits {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.todo .edits > img:hover {\n    cursor: pointer;\n}\n\n.due-date {\n    margin-right: auto;\n}\n\n#new-todo {\n    border: 1px solid var(--main);\n    padding: 10px;\n    border-radius: 7px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    margin: 10px 0;\n    display: none;\n}\n\n#new-todo input {\n    outline: 0;\n    border-width: 0 0;\n    background-color: var(--content);\n    font-size: 16px;\n}\n\n#new-todo select {\n    background-color: var(--content);\n    padding: 3px;\n    border-radius: 7px;\n}\n\n#new-todo button {\n    padding: 5px;\n    margin: 0 2px;\n    font-size: 16px;\n    border-radius: 7px;\n    width: 100px;\n    align-self: center;\n}\n\n#new-todo .buttons {\n    display: flex;\n    gap: 5px;\n    justify-content: flex-end;\n}\n\n#new-todo input:first-child {\n    font-size: 20px;\n}\n\n.todo .description {\n    font-style: italic;\n}\n\ninput[type=checkbox] {\n    margin: 0px;\n    width: 20px;\n    height: 20px;\n    clip-path: circle(42% at 50% 50%);\n    accent-color: var(--priority-color);\n}\n\ninput[type=checkbox]:checked + span {\n    text-decoration: line-through;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-manipulation/createToDo.js":
/*!********************************************!*\
  !*** ./src/dom-manipulation/createToDo.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToDoDOM": () => (/* binding */ createToDoDOM),
/* harmony export */   "createToDoInput": () => (/* binding */ createToDoInput),
/* harmony export */   "exitToDoInput": () => (/* binding */ exitToDoInput)
/* harmony export */ });
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/projects */ "./src/modules/projects.js");
/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/todo */ "./src/modules/todo.js");
/* harmony import */ var _dom_manipulation_deleteToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom-manipulation/deleteToDo */ "./src/dom-manipulation/deleteToDo.js");




const exitToDoInput = () => {
    let addToDo = document.querySelector('#create-todos');
    let createToDo = document.querySelector('#new-todo');

    let title = document.querySelector('#new-todo input:first-child');
    let desc = title.nextElementSibling;
    let dueDate = desc.nextElementSibling.querySelector('input');
    let priority = document.querySelector('#priority');

    title.value = "";
    desc.value = "";
    dueDate.value = "";
    priority.selectedIndex = 0;

    addToDo.style.display = "flex";
    createToDo.style.display = "none";
}

const createToDoDOM = (todo) => {
    let todoElement = document.createElement('div');
    todoElement.classList.add('todo', `priority-${todo.priority}`);

    let header = document.createElement('div');
    let title = document.createElement('div'); 
    title.setAttribute('class', 'title');
    // title.textContent = todo.title;

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    if (todo.done == true) {
        checkbox.checked = true;
    }
    title.appendChild(checkbox);

    checkbox.addEventListener('change', () => {
        if (checkbox.checked == true) {
            todo.done = true;
        }
        else {
            todo.done = false;
        }
    })

    let titleName = document.createElement('span');
    titleName.textContent = todo.title;
    title.appendChild(titleName);

    let project = document.createElement('span');
    project.setAttribute('class', 'project');
    project.textContent = todo.project;
    header.append(
        title,
        project
    )

    let desc = document.createElement('span');
    desc.setAttribute('class', 'description');
    desc.textContent = todo.description;

    let edits = document.createElement('div');
    edits.setAttribute('class', 'edits');

    let due = document.createElement('span');
    due.setAttribute('class', 'due-date');
    due.textContent = todo.dueDate;
    let editImg = document.createElement('img');
    editImg.src = "../src/assets/content/edit.png";
    editImg.alt = "edit-icon";
    let deleteImg = document.createElement('img');
    deleteImg.src = "../src/assets/content/delete.png";
    deleteImg.alt = "delete-icon";

    // add event listener to delete todos
    deleteImg.addEventListener('click', _dom_manipulation_deleteToDo__WEBPACK_IMPORTED_MODULE_2__.deleteToDo);
    deleteImg.correspondingToDo = todo;

    edits.append(
        due,
        editImg,
        deleteImg
    );

    todoElement.append(
        header,
        desc,
        edits
    );
    return todoElement;
}

const createToDoInput = () => {
    // DOM stuff first - hide the create button,
    // show the input form
    let addToDo = document.querySelector('#create-todos');
    let createToDo = document.querySelector('#new-todo');

    addToDo.style.display = "none";
    createToDo.style.display = "flex";

    let title = document.querySelector('#new-todo input:first-child');
    let desc = title.nextElementSibling;
    let dueDate = desc.nextElementSibling.querySelector('input');
    let priority = document.querySelector('#priority');
    
    // now, add event listeners for the submit and cancel button
    document.querySelector('#new-todo .red').onclick = exitToDoInput;

    function getToDoDetails() {
        // validate form
        if (title.value == '') {
            window.alert("Task name can't be empty");
        }
        else if (desc.value == '') {
            window.alert("Description can't be empty");
        }
        else if (dueDate.value == '') {
            window.alert("Due date can't be empty");
        }
        else {
            // Todo can be created now
            let projectName = document.querySelector('.content > span').textContent;
            let todo = _modules_todo__WEBPACK_IMPORTED_MODULE_1__.toDo.createToDo(
                title.value, 
                desc.value, 
                dueDate.value, 
                priority.value, 
                projectName);
            
            // add the todo to the project data structure
            _modules_projects__WEBPACK_IMPORTED_MODULE_0__.Projects.projectList[projectName].addToProject(todo);

            // create a todo DOM structure and append to existing elements
            let toDoContainer = document.querySelector('.todos');
            toDoContainer.appendChild(createToDoDOM(todo));
            
            exitToDoInput();
        }

    }
    // for the submit button 
    document.querySelector('#new-todo .green').onclick = getToDoDetails;
}



/***/ }),

/***/ "./src/dom-manipulation/deleteToDo.js":
/*!********************************************!*\
  !*** ./src/dom-manipulation/deleteToDo.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteToDo": () => (/* binding */ deleteToDo)
/* harmony export */ });
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/projects */ "./src/modules/projects.js");


const deleteToDo = (e) => {
    let projectName = document.querySelector('.content').querySelector('span').textContent;
    let toDelete = e.currentTarget.correspondingToDo;

    let DOMContainer = document.querySelector('.todos').children;
    let index = 0;
    for (const todo of DOMContainer) {
        let deleteElement = todo.querySelector('.edits').lastChild.correspondingToDo;
        if (deleteElement == toDelete) {
            // remove it from the DOM
            todo.remove();
            // now, delete it from the data structure
            delete _modules_projects__WEBPACK_IMPORTED_MODULE_0__.Projects.projectList[projectName].todos[index]
            _modules_projects__WEBPACK_IMPORTED_MODULE_0__.Projects.projectList[projectName].todos.splice(index, 1);
        };
        index += 1;
    }
}



/***/ }),

/***/ "./src/dom-manipulation/projectControls.js":
/*!*************************************************!*\
  !*** ./src/dom-manipulation/projectControls.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "refreshProject": () => (/* binding */ refreshProject)
/* harmony export */ });
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/projects */ "./src/modules/projects.js");
/* harmony import */ var _projectPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectPage */ "./src/dom-manipulation/projectPage.js");



const deleteProject = (e) => {
    _modules_projects__WEBPACK_IMPORTED_MODULE_0__.Projects.deleteProject(e.target.id);
    refreshProject();
}

const refreshProject = () => {
    let projects = document.querySelector('#projects').children;
    for (let project of projects) {
        let name = project.querySelector('span').textContent;
        if (!(name in _modules_projects__WEBPACK_IMPORTED_MODULE_0__.Projects.projectList)) {
            project.remove();
        }
    }
}

// this is called when someone clicks on the "Add Project" button
const addProject = () => {
    let addProjectElement = document.querySelector('#add-project');
    let inputElement = document.querySelector('#new-project');

    const showControls = () => {
        addProjectElement.style.display = "none";
        inputElement.style.display = "flex";
    }

    const exitControls = () => {
        let content = document.querySelector('#new-project > input');
        content.value = "";

        addProjectElement.style.display = "flex";
        inputElement.style.display = "none";
    }

    showControls();
    let submitButton = document.querySelector('#new-project > .green');
    let cancelButton = document.querySelector('#new-project > .red');

    // if user cancels midway
    cancelButton.addEventListener('click', exitControls);

    // user actually submits
    submitButton.addEventListener('click', () => {
        let content = document.querySelector('#new-project > input');
        if (content.value == "") {
            exitControls();
            return;
        }
        else if (content.value in _modules_projects__WEBPACK_IMPORTED_MODULE_0__.Projects.projectList) {
            window.alert("Project already exists");
            exitControls();
            return;
        }

        let newProjectName = content.value;
        // this is where we have to add a new project
        let projectContainer = document.querySelector('#projects');

        let element = document.createElement('div');

        let image = document.createElement('img');
        image.src = "../src/assets/side-nav/project.png";
        image.alt = "project icon";

        let cancel = document.createElement('img');
        cancel.src = "../src/assets/side-nav/cancel.png";
        cancel.alt = "delete project";
        cancel.setAttribute('class', 'cancel');
        cancel.setAttribute('id', newProjectName);
        cancel.addEventListener('click', (e) => deleteProject(e));

        let name = document.createElement('span');
        name.textContent = newProjectName;
        element.append(
            image,
            name,
            cancel
        )

        // add an event listener to this "element"
        element.addEventListener('click', (e) => (0,_projectPage__WEBPACK_IMPORTED_MODULE_1__.showProjectPage)(e));

        projectContainer.appendChild(element)
        content.value = "";
        exitControls();

        _modules_projects__WEBPACK_IMPORTED_MODULE_0__.Projects.createNewProject(newProjectName);
    })    
};



/***/ }),

/***/ "./src/dom-manipulation/projectPage.js":
/*!*********************************************!*\
  !*** ./src/dom-manipulation/projectPage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showProjectPage": () => (/* binding */ showProjectPage)
/* harmony export */ });
/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ "./src/dom-manipulation/createToDo.js");
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/projects */ "./src/modules/projects.js");
/* harmony import */ var _deleteToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteToDo */ "./src/dom-manipulation/deleteToDo.js");





const createTitle = (name) => {
    let contentContainer = document.querySelector('.content');
    contentContainer.querySelector('span').textContent = name;
}

const showProjectPage = (e) => {
    let projectName = e.target.innerText;

    // create the title
    createTitle(projectName);
    // in case the todo-creator was opened by any other project
    (0,_createToDo__WEBPACK_IMPORTED_MODULE_0__.exitToDoInput)();

    // show all the to-dos under this project 
    let todoContainer = document.querySelector('.todos');
    // clear anything else first
    todoContainer.innerHTML = "";
    
    for (const todo of _modules_projects__WEBPACK_IMPORTED_MODULE_1__.Projects.projectList[projectName].todos) {
        let newToDo = (0,_createToDo__WEBPACK_IMPORTED_MODULE_0__.createToDoDOM)(todo);
        todoContainer.appendChild(newToDo);
        newToDo.querySelector('.edits').lastChild.addEventListener('click', _deleteToDo__WEBPACK_IMPORTED_MODULE_2__.deleteToDo);
        newToDo.querySelector('.edits').lastChild.correspondingToDo = todo; 
    }
}



/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Projects": () => (/* binding */ Projects)
/* harmony export */ });
const createProject = (name) => {
    // each project has a name and a list of todos
    const todos = [];

    const addToProject = todo => {
        todos.push(todo)
    };

    const removeFromProject = todo => {
        var index = todos.indexOf(todo);
        var removedTodo = todos[index];

        if (index != -1) {
            todos.splice(index, 1);
        }
        return removedTodo;
    };

    return { name, todos, addToProject, removeFromProject };
};

const Projects = (() => {
    let projectList = {};

    const createNewProject = (name) => {
        projectList[name] = createProject(name);
    };

    const deleteProject = (name) => {
        delete projectList[name];
    };

    return {
        projectList,
        createNewProject,
        deleteProject
    };
})();



/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDo": () => (/* binding */ toDo)
/* harmony export */ });
const toDo = (() => {
    let title;
    let description;
    let dueDate;
    let priority;
    let project;
    let done;

    const createToDo = (newTitle, newDescription, newDueDate, newPriority, newProject) => {
        title = newTitle;
        description = newDescription;
        dueDate = newDueDate;
        priority = newPriority;
        project = newProject;
        done = false;
        return {
            title, 
            description, 
            dueDate, 
            priority, 
            project,
            done
        };
    };

    // setters 
    const changeTitle = newTitle => {
        title = newTitle;
    };

    const changeDescription = newDescription => {
        description = newDescription;
    };

    const changeDueDate = newDueDate => {
        dueDate = newDueDate;
    };

    const changePriority = newPriority => {
        priority = newPriority;
    };

    return {
        title,
        description,
        dueDate,
        priority,
        project,
        createToDo,
        changeTitle,
        changeDescription,
        changeDueDate,
        changePriority
    };
})();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom_manipulation_projectControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manipulation/projectControls */ "./src/dom-manipulation/projectControls.js");
/* harmony import */ var _dom_manipulation_createToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-manipulation/createToDo */ "./src/dom-manipulation/createToDo.js");




document.querySelector('#add-project').addEventListener('click', _dom_manipulation_projectControls__WEBPACK_IMPORTED_MODULE_1__.addProject);
document.querySelector('#create-todos').addEventListener('click', _dom_manipulation_createToDo__WEBPACK_IMPORTED_MODULE_2__.createToDoInput);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVQ3RERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMkM7QUFDQTs7QUFFaEUsaUVBQWlFLHlFQUFVO0FBQzNFLGtFQUFrRSx5RUFBZSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20tbWFuaXB1bGF0aW9uL2NyZWF0ZVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS1tYW5pcHVsYXRpb24vZGVsZXRlVG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLW1hbmlwdWxhdGlvbi9wcm9qZWN0Q29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS1tYW5pcHVsYXRpb24vcHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzEsMTAwOzEsMzAwJmZhbWlseT1ZdXNlaStNYWdpYyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbWFpbjogIzMzMztcXG4gICAgLS1jb250ZW50OiAjZWVlO1xcbiAgICAtLW5hdjogI2RkZDtcXG4gICAgLS1uYXYtZGFyazogI2NjYztcXG4gICAgLS1ncmVlbjogIzc3ZGQ3NztcXG4gICAgLS1yZWQ6ICNmZjY5NjE7XFxuICAgIC0tY2FuY2VsLWRpc3BsYXk6IG5vbmU7XFxuICAgIC0tcHJpb3JpdHktY29sb3I6IHZhcigtLW5hdi1kYXJrKTtcXG4gICAgLS1wcmlvcml0eS1iZzogdmFyKC0tbmF2KTtcXG59XFxuXFxuLnByaW9yaXR5LTEge1xcbiAgICAtLXByaW9yaXR5LWNvbG9yOiAjRjQ0NDJFO1xcbiAgICAtLXByaW9yaXR5LWJnOiAjRjQ0NDJFNjY7XFxufVxcblxcbi5wcmlvcml0eS0yIHtcXG4gICAgLS1wcmlvcml0eS1jb2xvcjogI0ZDOUU0RjtcXG4gICAgLS1wcmlvcml0eS1iZzogI0ZDOUU0RjY2O1xcbn1cXG5cXG4ucHJpb3JpdHktMyB7XFxuICAgIC0tcHJpb3JpdHktY29sb3I6ICNFREQzODI7XFxuICAgIC0tcHJpb3JpdHktYmc6ICNFREQzODI2NjtcXG59XFxuXFxuLnByaW9yaXR5LTQge1xcbiAgICAtLXByaW9yaXR5LWNvbG9yOiAjRjJGM0FFO1xcbiAgICAtLXByaW9yaXR5LWJnOiAjRjJGM0FFNjY7XFxufVxcblxcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbWcge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAycHg7XFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XFxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdZdXNlaSBNYWdpYycsIHNhbnMtc2VyaWY7IFxcbiAgICBjb2xvcjogdmFyKC0tY29udGVudCk7XFxufVxcblxcbiNoZWFkZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4uc2lkZS1uYXYge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdik7XFxufVxcblxcbi5zaWRlLW5hdiBpbWcge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5zaWRlLW5hdiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZ2FwOiAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLnNpZGUtbmF2IC5uYXYtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1kYXJrKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2LWl0ZW0ge1xcbiAgICBtYXJnaW46IDVweCAwcHg7XFxufVxcblxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDMwMHB4LCAxZnIpIDZmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudCk7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xcbiAgICBjb2xvcjogdmFyKC0tY29udGVudCk7XFxufVxcblxcbmZvb3RlciBpbWcsICNoZWFkZXIgaW1nIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTUlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMzMzJSkgaHVlLXJvdGF0ZSgxNDdkZWcpIGJyaWdodG5lc3MoOTglKSBjb250cmFzdCg4NSUpO1xcbn1cXG5cXG5kaXYucHJvamVjdC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jbmV3LXByb2plY3QgaW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJlZCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDVweCAwIDEwcHggMDtcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IGlucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JlZW4pO1xcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xcbn1cXG5cXG4jbmV3LXByb2plY3QgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4jbmV3LXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBub25lOyAvKiBmbGV4ICovXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmdyZWVuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbn1cXG5cXG4ucmVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuI3Byb2plY3RzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwcm9qZWN0cyA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuI3Byb2plY3RzID4gZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWRhcmspO1xcbiAgICAtLWNhbmNlbC1kaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNhbmNlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgZGlzcGxheTogdmFyKC0tY2FuY2VsLWRpc3BsYXkpO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDUwcHggMTV2dztcXG59XFxuXFxuLmNvbnRlbnQgPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4jY3JlYXRlLXRvZG9zIHtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNjcmVhdGUtdG9kb3M6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtZGFyayk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgICBwYWRkaW5nOiAxN3B4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29udGVudCk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggdG8gbGVmdCwgdmFyKC0tcHJpb3JpdHktY29sb3IpLCB2YXIoLS1wcmlvcml0eS1jb2xvcikgOXB4LCB2YXIoLS1wcmlvcml0eS1iZykgOXB4LCB2YXIoLS1wcmlvcml0eS1iZykgMTAwJSApO1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW9yaXR5LWJnKTtcXG59XFxuXFxuLnRvZG8gPiBkaXYge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4udG9kbyAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcHg7XFxufVxcblxcbi50b2RvIC5lZGl0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi50b2RvIC5lZGl0cyA+IGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4jbmV3LXRvZG8ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNuZXctdG9kbyBpbnB1dCB7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGJvcmRlci13aWR0aDogMCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50KTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4jbmV3LXRvZG8gc2VsZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudCk7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4jbmV3LXRvZG8gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDAgMnB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNuZXctdG9kbyAuYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4jbmV3LXRvZG8gaW5wdXQ6Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b2RvIC5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoNDIlIGF0IDUwJSA1MCUpO1xcbiAgICBhY2NlbnQtY29sb3I6IHZhcigtLXByaW9yaXR5LWNvbG9yKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIHNwYW4ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJB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QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDsxLDEwMDsxLDMwMCZmYW1pbHk9WXVzZWkrTWFnaWMmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW46ICMzMzM7XFxuICAgIC0tY29udGVudDogI2VlZTtcXG4gICAgLS1uYXY6ICNkZGQ7XFxuICAgIC0tbmF2LWRhcms6ICNjY2M7XFxuICAgIC0tZ3JlZW46ICM3N2RkNzc7XFxuICAgIC0tcmVkOiAjZmY2OTYxO1xcbiAgICAtLWNhbmNlbC1kaXNwbGF5OiBub25lO1xcbiAgICAtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1uYXYtZGFyayk7XFxuICAgIC0tcHJpb3JpdHktYmc6IHZhcigtLW5hdik7XFxufVxcblxcbi5wcmlvcml0eS0xIHtcXG4gICAgLS1wcmlvcml0eS1jb2xvcjogI0Y0NDQyRTtcXG4gICAgLS1wcmlvcml0eS1iZzogI0Y0NDQyRTY2O1xcbn1cXG5cXG4ucHJpb3JpdHktMiB7XFxuICAgIC0tcHJpb3JpdHktY29sb3I6ICNGQzlFNEY7XFxuICAgIC0tcHJpb3JpdHktYmc6ICNGQzlFNEY2NjtcXG59XFxuXFxuLnByaW9yaXR5LTMge1xcbiAgICAtLXByaW9yaXR5LWNvbG9yOiAjRUREMzgyO1xcbiAgICAtLXByaW9yaXR5LWJnOiAjRUREMzgyNjY7XFxufVxcblxcbi5wcmlvcml0eS00IHtcXG4gICAgLS1wcmlvcml0eS1jb2xvcjogI0YyRjNBRTtcXG4gICAgLS1wcmlvcml0eS1iZzogI0YyRjNBRTY2O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaW1nIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnB4O1xcbiAgICBmb250LXNpemU6IDQycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnWXVzZWkgTWFnaWMnLCBzYW5zLXNlcmlmOyBcXG4gICAgY29sb3I6IHZhcigtLWNvbnRlbnQpO1xcbn1cXG5cXG4jaGVhZGVyIGltZyB7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYpO1xcbn1cXG5cXG4uc2lkZS1uYXYgaW1nIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uc2lkZS1uYXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdhcDogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5zaWRlLW5hdiAubmF2LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtZGFyayk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1pdGVtIHtcXG4gICAgbWFyZ2luOiA1cHggMHB4O1xcbn1cXG5cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDBweCwgMWZyKSA2ZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbnRlbnQpO1xcbn1cXG5cXG5mb290ZXIgaW1nLCAjaGVhZGVyIGltZyB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDk1JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMzMyUpIGh1ZS1yb3RhdGUoMTQ3ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoODUlKTtcXG59XFxuXFxuZGl2LnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yZWQpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMCAxMHB4IDA7XFxuICAgIG91dGxpbmUtd2lkdGg6IDA7XFxufVxcblxcbiNuZXctcHJvamVjdCBpbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogZmxleCAqL1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ncmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLnJlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdHMgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbiNwcm9qZWN0cyA+IGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1kYXJrKTtcXG4gICAgLS1jYW5jZWwtZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jYW5jZWwge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIGRpc3BsYXk6IHZhcigtLWNhbmNlbC1kaXNwbGF5KTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA1MHB4IDE1dnc7XFxufVxcblxcbi5jb250ZW50ID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuI2NyZWF0ZS10b2RvcyB7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jY3JlYXRlLXRvZG9zOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWRhcmspO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgcGFkZGluZzogMTdweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbnRlbnQpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHRvIGxlZnQsIHZhcigtLXByaW9yaXR5LWNvbG9yKSwgdmFyKC0tcHJpb3JpdHktY29sb3IpIDlweCwgdmFyKC0tcHJpb3JpdHktYmcpIDlweCwgdmFyKC0tcHJpb3JpdHktYmcpIDEwMCUgKTtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmlvcml0eS1iZyk7XFxufVxcblxcbi50b2RvID4gZGl2IHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLnRvZG8gLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG4udG9kbyAuZWRpdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4udG9kbyAuZWRpdHMgPiBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kdWUtZGF0ZSB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuI25ldy10b2RvIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbik7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbmV3LXRvZG8gaW5wdXQge1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBib3JkZXItd2lkdGg6IDAgMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuI25ldy10b2RvIHNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQpO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuI25ldy10b2RvIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAwIDJweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXRvZG8gLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuI25ldy10b2RvIGlucHV0OmZpcnN0LWNoaWxkIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udG9kbyAuZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDQyJSBhdCA1MCUgNTAlKTtcXG4gICAgYWNjZW50LWNvbG9yOiB2YXIoLS1wcmlvcml0eS1jb2xvcik7XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBzcGFuIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gXCIuLi9tb2R1bGVzL3Byb2plY3RzXCI7XG5pbXBvcnQgeyB0b0RvIH0gZnJvbSBcIi4uL21vZHVsZXMvdG9kb1wiO1xuaW1wb3J0IHsgZGVsZXRlVG9EbyB9IGZyb20gXCIuLi9kb20tbWFuaXB1bGF0aW9uL2RlbGV0ZVRvRG9cIjtcblxuY29uc3QgZXhpdFRvRG9JbnB1dCA9ICgpID0+IHtcbiAgICBsZXQgYWRkVG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdG9kb3MnKTtcbiAgICBsZXQgY3JlYXRlVG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdG9kbycpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10b2RvIGlucHV0OmZpcnN0LWNoaWxkJyk7XG4gICAgbGV0IGRlc2MgPSB0aXRsZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IGR1ZURhdGUgPSBkZXNjLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuXG4gICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgIGRlc2MudmFsdWUgPSBcIlwiO1xuICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgIHByaW9yaXR5LnNlbGVjdGVkSW5kZXggPSAwO1xuXG4gICAgYWRkVG9Eby5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgY3JlYXRlVG9Eby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmNvbnN0IGNyZWF0ZVRvRG9ET00gPSAodG9kbykgPT4ge1xuICAgIGxldCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8nLCBgcHJpb3JpdHktJHt0b2RvLnByaW9yaXR5fWApO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyBcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XG4gICAgLy8gdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuXG4gICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBpZiAodG9kby5kb25lID09IHRydWUpIHtcbiAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgfVxuICAgIHRpdGxlLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdG9kby5kb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvZG8uZG9uZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGxldCB0aXRsZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGl0bGVOYW1lLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZU5hbWUpO1xuXG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QnKTtcbiAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gdG9kby5wcm9qZWN0O1xuICAgIGhlYWRlci5hcHBlbmQoXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBwcm9qZWN0XG4gICAgKVxuXG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGVzYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG5cbiAgICBsZXQgZWRpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXRzJyk7XG5cbiAgICBsZXQgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGR1ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2R1ZS1kYXRlJyk7XG4gICAgZHVlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuICAgIGxldCBlZGl0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZWRpdEltZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvY29udGVudC9lZGl0LnBuZ1wiO1xuICAgIGVkaXRJbWcuYWx0ID0gXCJlZGl0LWljb25cIjtcbiAgICBsZXQgZGVsZXRlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZGVsZXRlSW1nLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9jb250ZW50L2RlbGV0ZS5wbmdcIjtcbiAgICBkZWxldGVJbWcuYWx0ID0gXCJkZWxldGUtaWNvblwiO1xuXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSB0b2Rvc1xuICAgIGRlbGV0ZUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvRG8pO1xuICAgIGRlbGV0ZUltZy5jb3JyZXNwb25kaW5nVG9EbyA9IHRvZG87XG5cbiAgICBlZGl0cy5hcHBlbmQoXG4gICAgICAgIGR1ZSxcbiAgICAgICAgZWRpdEltZyxcbiAgICAgICAgZGVsZXRlSW1nXG4gICAgKTtcblxuICAgIHRvZG9FbGVtZW50LmFwcGVuZChcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBkZXNjLFxuICAgICAgICBlZGl0c1xuICAgICk7XG4gICAgcmV0dXJuIHRvZG9FbGVtZW50O1xufVxuXG5jb25zdCBjcmVhdGVUb0RvSW5wdXQgPSAoKSA9PiB7XG4gICAgLy8gRE9NIHN0dWZmIGZpcnN0IC0gaGlkZSB0aGUgY3JlYXRlIGJ1dHRvbixcbiAgICAvLyBzaG93IHRoZSBpbnB1dCBmb3JtXG4gICAgbGV0IGFkZFRvRG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRvZG9zJyk7XG4gICAgbGV0IGNyZWF0ZVRvRG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8nKTtcblxuICAgIGFkZFRvRG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNyZWF0ZVRvRG8uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10b2RvIGlucHV0OmZpcnN0LWNoaWxkJyk7XG4gICAgbGV0IGRlc2MgPSB0aXRsZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IGR1ZURhdGUgPSBkZXNjLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuICAgIFxuICAgIC8vIG5vdywgYWRkIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIHN1Ym1pdCBhbmQgY2FuY2VsIGJ1dHRvblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdG9kbyAucmVkJykub25jbGljayA9IGV4aXRUb0RvSW5wdXQ7XG5cbiAgICBmdW5jdGlvbiBnZXRUb0RvRGV0YWlscygpIHtcbiAgICAgICAgLy8gdmFsaWRhdGUgZm9ybVxuICAgICAgICBpZiAodGl0bGUudmFsdWUgPT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIlRhc2sgbmFtZSBjYW4ndCBiZSBlbXB0eVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZXNjLnZhbHVlID09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJEZXNjcmlwdGlvbiBjYW4ndCBiZSBlbXB0eVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkdWVEYXRlLnZhbHVlID09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJEdWUgZGF0ZSBjYW4ndCBiZSBlbXB0eVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRvZG8gY2FuIGJlIGNyZWF0ZWQgbm93XG4gICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCA+IHNwYW4nKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGxldCB0b2RvID0gdG9Eby5jcmVhdGVUb0RvKFxuICAgICAgICAgICAgICAgIHRpdGxlLnZhbHVlLCBcbiAgICAgICAgICAgICAgICBkZXNjLnZhbHVlLCBcbiAgICAgICAgICAgICAgICBkdWVEYXRlLnZhbHVlLCBcbiAgICAgICAgICAgICAgICBwcmlvcml0eS52YWx1ZSwgXG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBhZGQgdGhlIHRvZG8gdG8gdGhlIHByb2plY3QgZGF0YSBzdHJ1Y3R1cmVcbiAgICAgICAgICAgIFByb2plY3RzLnByb2plY3RMaXN0W3Byb2plY3ROYW1lXS5hZGRUb1Byb2plY3QodG9kbyk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIHRvZG8gRE9NIHN0cnVjdHVyZSBhbmQgYXBwZW5kIHRvIGV4aXN0aW5nIGVsZW1lbnRzXG4gICAgICAgICAgICBsZXQgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpO1xuICAgICAgICAgICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUb0RvRE9NKHRvZG8pKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZXhpdFRvRG9JbnB1dCgpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgLy8gZm9yIHRoZSBzdWJtaXQgYnV0dG9uIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdG9kbyAuZ3JlZW4nKS5vbmNsaWNrID0gZ2V0VG9Eb0RldGFpbHM7XG59XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlVG9Eb0lucHV0LFxuICAgIGV4aXRUb0RvSW5wdXQsXG4gICAgY3JlYXRlVG9Eb0RPTVxufSIsImltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4uL21vZHVsZXMvcHJvamVjdHNcIjtcblxuY29uc3QgZGVsZXRlVG9EbyA9IChlKSA9PiB7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQ7XG4gICAgbGV0IHRvRGVsZXRlID0gZS5jdXJyZW50VGFyZ2V0LmNvcnJlc3BvbmRpbmdUb0RvO1xuXG4gICAgbGV0IERPTUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpLmNoaWxkcmVuO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCB0b2RvIG9mIERPTUNvbnRhaW5lcikge1xuICAgICAgICBsZXQgZGVsZXRlRWxlbWVudCA9IHRvZG8ucXVlcnlTZWxlY3RvcignLmVkaXRzJykubGFzdENoaWxkLmNvcnJlc3BvbmRpbmdUb0RvO1xuICAgICAgICBpZiAoZGVsZXRlRWxlbWVudCA9PSB0b0RlbGV0ZSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGl0IGZyb20gdGhlIERPTVxuICAgICAgICAgICAgdG9kby5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIG5vdywgZGVsZXRlIGl0IGZyb20gdGhlIGRhdGEgc3RydWN0dXJlXG4gICAgICAgICAgICBkZWxldGUgUHJvamVjdHMucHJvamVjdExpc3RbcHJvamVjdE5hbWVdLnRvZG9zW2luZGV4XVxuICAgICAgICAgICAgUHJvamVjdHMucHJvamVjdExpc3RbcHJvamVjdE5hbWVdLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGRlbGV0ZVRvRG9cbn0iLCJpbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gXCIuLi9tb2R1bGVzL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBzaG93UHJvamVjdFBhZ2UgfSBmcm9tIFwiLi9wcm9qZWN0UGFnZVwiO1xuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKGUpID0+IHtcbiAgICBQcm9qZWN0cy5kZWxldGVQcm9qZWN0KGUudGFyZ2V0LmlkKTtcbiAgICByZWZyZXNoUHJvamVjdCgpO1xufVxuXG5jb25zdCByZWZyZXNoUHJvamVjdCA9ICgpID0+IHtcbiAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKS5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICAgIGxldCBuYW1lID0gcHJvamVjdC5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQ7XG4gICAgICAgIGlmICghKG5hbWUgaW4gUHJvamVjdHMucHJvamVjdExpc3QpKSB7XG4gICAgICAgICAgICBwcm9qZWN0LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0aGlzIGlzIGNhbGxlZCB3aGVuIHNvbWVvbmUgY2xpY2tzIG9uIHRoZSBcIkFkZCBQcm9qZWN0XCIgYnV0dG9uXG5jb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGxldCBhZGRQcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpO1xuICAgIGxldCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKTtcblxuICAgIGNvbnN0IHNob3dDb250cm9scyA9ICgpID0+IHtcbiAgICAgICAgYWRkUHJvamVjdEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBpbnB1dEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cblxuICAgIGNvbnN0IGV4aXRDb250cm9scyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QgPiBpbnB1dCcpO1xuICAgICAgICBjb250ZW50LnZhbHVlID0gXCJcIjtcblxuICAgICAgICBhZGRQcm9qZWN0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGlucHV0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgc2hvd0NvbnRyb2xzKCk7XG4gICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCA+IC5ncmVlbicpO1xuICAgIGxldCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QgPiAucmVkJyk7XG5cbiAgICAvLyBpZiB1c2VyIGNhbmNlbHMgbWlkd2F5XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhpdENvbnRyb2xzKTtcblxuICAgIC8vIHVzZXIgYWN0dWFsbHkgc3VibWl0c1xuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QgPiBpbnB1dCcpO1xuICAgICAgICBpZiAoY29udGVudC52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgICAgICBleGl0Q29udHJvbHMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb250ZW50LnZhbHVlIGluIFByb2plY3RzLnByb2plY3RMaXN0KSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJQcm9qZWN0IGFscmVhZHkgZXhpc3RzXCIpO1xuICAgICAgICAgICAgZXhpdENvbnRyb2xzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3UHJvamVjdE5hbWUgPSBjb250ZW50LnZhbHVlO1xuICAgICAgICAvLyB0aGlzIGlzIHdoZXJlIHdlIGhhdmUgdG8gYWRkIGEgbmV3IHByb2plY3RcbiAgICAgICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMnKTtcblxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWFnZS5zcmMgPSBcIi4uL3NyYy9hc3NldHMvc2lkZS1uYXYvcHJvamVjdC5wbmdcIjtcbiAgICAgICAgaW1hZ2UuYWx0ID0gXCJwcm9qZWN0IGljb25cIjtcblxuICAgICAgICBsZXQgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNhbmNlbC5zcmMgPSBcIi4uL3NyYy9hc3NldHMvc2lkZS1uYXYvY2FuY2VsLnBuZ1wiO1xuICAgICAgICBjYW5jZWwuYWx0ID0gXCJkZWxldGUgcHJvamVjdFwiO1xuICAgICAgICBjYW5jZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYW5jZWwnKTtcbiAgICAgICAgY2FuY2VsLnNldEF0dHJpYnV0ZSgnaWQnLCBuZXdQcm9qZWN0TmFtZSk7XG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBkZWxldGVQcm9qZWN0KGUpKTtcblxuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IG5ld1Byb2plY3ROYW1lO1xuICAgICAgICBlbGVtZW50LmFwcGVuZChcbiAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGNhbmNlbFxuICAgICAgICApXG5cbiAgICAgICAgLy8gYWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoaXMgXCJlbGVtZW50XCJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBzaG93UHJvamVjdFBhZ2UoZSkpO1xuXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICAgICAgY29udGVudC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGV4aXRDb250cm9scygpO1xuXG4gICAgICAgIFByb2plY3RzLmNyZWF0ZU5ld1Byb2plY3QobmV3UHJvamVjdE5hbWUpO1xuICAgIH0pICAgIFxufTtcblxuZXhwb3J0IHtcbiAgICBhZGRQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgcmVmcmVzaFByb2plY3Rcbn0iLCJpbXBvcnQgeyBleGl0VG9Eb0lucHV0IH0gZnJvbSBcIi4vY3JlYXRlVG9Eb1wiO1xuaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tIFwiLi4vbW9kdWxlcy9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgY3JlYXRlVG9Eb0RPTSB9IGZyb20gXCIuL2NyZWF0ZVRvRG9cIjtcbmltcG9ydCB7IGRlbGV0ZVRvRG8gfSBmcm9tIFwiLi9kZWxldGVUb0RvXCI7XG5cbmNvbnN0IGNyZWF0ZVRpdGxlID0gKG5hbWUpID0+IHtcbiAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzcGFuJykudGV4dENvbnRlbnQgPSBuYW1lO1xufVxuXG5jb25zdCBzaG93UHJvamVjdFBhZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LmlubmVyVGV4dDtcblxuICAgIC8vIGNyZWF0ZSB0aGUgdGl0bGVcbiAgICBjcmVhdGVUaXRsZShwcm9qZWN0TmFtZSk7XG4gICAgLy8gaW4gY2FzZSB0aGUgdG9kby1jcmVhdG9yIHdhcyBvcGVuZWQgYnkgYW55IG90aGVyIHByb2plY3RcbiAgICBleGl0VG9Eb0lucHV0KCk7XG5cbiAgICAvLyBzaG93IGFsbCB0aGUgdG8tZG9zIHVuZGVyIHRoaXMgcHJvamVjdCBcbiAgICBsZXQgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpO1xuICAgIC8vIGNsZWFyIGFueXRoaW5nIGVsc2UgZmlyc3RcbiAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgXG4gICAgZm9yIChjb25zdCB0b2RvIG9mIFByb2plY3RzLnByb2plY3RMaXN0W3Byb2plY3ROYW1lXS50b2Rvcykge1xuICAgICAgICBsZXQgbmV3VG9EbyA9IGNyZWF0ZVRvRG9ET00odG9kbyk7XG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9Ebyk7XG4gICAgICAgIG5ld1RvRG8ucXVlcnlTZWxlY3RvcignLmVkaXRzJykubGFzdENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9Ebyk7XG4gICAgICAgIG5ld1RvRG8ucXVlcnlTZWxlY3RvcignLmVkaXRzJykubGFzdENoaWxkLmNvcnJlc3BvbmRpbmdUb0RvID0gdG9kbzsgXG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIHNob3dQcm9qZWN0UGFnZVxufSIsImNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIC8vIGVhY2ggcHJvamVjdCBoYXMgYSBuYW1lIGFuZCBhIGxpc3Qgb2YgdG9kb3NcbiAgICBjb25zdCB0b2RvcyA9IFtdO1xuXG4gICAgY29uc3QgYWRkVG9Qcm9qZWN0ID0gdG9kbyA9PiB7XG4gICAgICAgIHRvZG9zLnB1c2godG9kbylcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlRnJvbVByb2plY3QgPSB0b2RvID0+IHtcbiAgICAgICAgdmFyIGluZGV4ID0gdG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICAgICAgdmFyIHJlbW92ZWRUb2RvID0gdG9kb3NbaW5kZXhdO1xuXG4gICAgICAgIGlmIChpbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVtb3ZlZFRvZG87XG4gICAgfTtcblxuICAgIHJldHVybiB7IG5hbWUsIHRvZG9zLCBhZGRUb1Byb2plY3QsIHJlbW92ZUZyb21Qcm9qZWN0IH07XG59O1xuXG5jb25zdCBQcm9qZWN0cyA9ICgoKSA9PiB7XG4gICAgbGV0IHByb2plY3RMaXN0ID0ge307XG5cbiAgICBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICAgICAgcHJvamVjdExpc3RbbmFtZV0gPSBjcmVhdGVQcm9qZWN0KG5hbWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICAgICAgZGVsZXRlIHByb2plY3RMaXN0W25hbWVdO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0TGlzdCxcbiAgICAgICAgY3JlYXRlTmV3UHJvamVjdCxcbiAgICAgICAgZGVsZXRlUHJvamVjdFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQge1xuICAgIFByb2plY3RzXG59OyIsImNvbnN0IHRvRG8gPSAoKCkgPT4ge1xuICAgIGxldCB0aXRsZTtcbiAgICBsZXQgZGVzY3JpcHRpb247XG4gICAgbGV0IGR1ZURhdGU7XG4gICAgbGV0IHByaW9yaXR5O1xuICAgIGxldCBwcm9qZWN0O1xuICAgIGxldCBkb25lO1xuXG4gICAgY29uc3QgY3JlYXRlVG9EbyA9IChuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5LCBuZXdQcm9qZWN0KSA9PiB7XG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgICAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgICAgICBwcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgICAgICAgZG9uZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGUsIFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgZHVlRGF0ZSwgXG4gICAgICAgICAgICBwcmlvcml0eSwgXG4gICAgICAgICAgICBwcm9qZWN0LFxuICAgICAgICAgICAgZG9uZVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvLyBzZXR0ZXJzIFxuICAgIGNvbnN0IGNoYW5nZVRpdGxlID0gbmV3VGl0bGUgPT4ge1xuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGFuZ2VEZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uID0+IHtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hhbmdlRHVlRGF0ZSA9IG5ld0R1ZURhdGUgPT4ge1xuICAgICAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSBuZXdQcmlvcml0eSA9PiB7XG4gICAgICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIGNyZWF0ZVRvRG8sXG4gICAgICAgIGNoYW5nZVRpdGxlLFxuICAgICAgICBjaGFuZ2VEZXNjcmlwdGlvbixcbiAgICAgICAgY2hhbmdlRHVlRGF0ZSxcbiAgICAgICAgY2hhbmdlUHJpb3JpdHlcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IHtcbiAgICB0b0RvXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgYWRkUHJvamVjdCB9IGZyb20gJy4vZG9tLW1hbmlwdWxhdGlvbi9wcm9qZWN0Q29udHJvbHMnO1xuaW1wb3J0IHsgY3JlYXRlVG9Eb0lucHV0IH0gZnJvbSAnLi9kb20tbWFuaXB1bGF0aW9uL2NyZWF0ZVRvRG8nO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS10b2RvcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlVG9Eb0lucHV0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=