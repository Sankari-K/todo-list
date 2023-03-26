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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main: #333;\n    --content: #eee;\n    --nav: #ddd;\n    --nav-dark: #ccc;\n    --green: #77dd77;\n    --red: #ff6961;\n    --cancel-display: none;\n    --priority-color: var(--nav-dark);\n    --priority-bg: var(--nav);\n}\n\n.priority-1 {\n    --priority-color: #F4442E;\n    --priority-bg: #F4442E66;\n}\n\n.priority-2 {\n    --priority-color: #FC9E4F;\n    --priority-bg: #FC9E4F66;\n}\n\n.priority-3 {\n    --priority-color: #EDD382;\n    --priority-bg: #EDD38266;\n}\n\n.priority-4 {\n    --priority-color: #F2F3AE;\n    --priority-bg: #F2F3AE66;\n}\n\nbody {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Roboto', sans-serif;\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n}\n\nimg {\n    height: 25px;\n}\n\nbutton {\n    cursor: pointer;\n    border: 0px;\n    color: #fff;\n}\n\n#header {\n    display: flex;\n    align-items: center;\n    gap: 2px;\n    font-size: 42px;\n    background-color: var(--main);\n    padding: 20px 10px;\n    font-weight: 600;\n    font-family: 'Yusei Magic', sans-serif; \n    color: var(--content);\n}\n\n#header img {\n    height: 60px;\n}\n\n.side-nav {\n    padding: 20px;\n    font-size: 16px;\n    background-color: var(--nav);\n}\n\n.side-nav img {\n    height: 30px;\n}\n\n.side-nav > div {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    gap: 2px;\n    border-radius: 7px;\n}\n\n.side-nav .nav-item:hover {\n    background-color: var(--nav-dark);\n    cursor: pointer;\n}\n\n.nav-item {\n    margin: 5px 0px;\n}\n\n\n.main-content {\n    flex-grow: 1;\n    display: grid;\n    grid-template-columns: minmax(300px, 1fr) 6fr;\n    background-color: var(--content);\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 10px;\n    justify-content: center;\n    background-color: var(--main);\n    color: var(--content);\n}\n\nfooter img, #header img {\n    filter: invert(95%) sepia(0%) saturate(333%) hue-rotate(147deg) brightness(98%) contrast(85%);\n}\n\ndiv.project-container {\n    margin-top: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n#add-project {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    width: 100%;\n    padding: 5px;\n    border-radius: 7px;\n}\n\n.project-container > span {\n    font-size: larger;\n    font-weight: 500;\n}\n\n#new-project input {\n    width: 100%;\n    height: 25px;\n    border-radius: 7px;\n    border: 1px solid var(--red);\n    font-size: 16px;\n    padding: 5px;\n    margin: 5px 0 10px 0;\n    outline-width: 0;\n}\n\n#new-project input:focus {\n    border: 1px solid var(--green);\n    outline-width: 0;\n}\n\n#new-project button {\n    width: 100px;\n    font-size: 16px;\n    margin: 0 5px;\n    padding: 5px;\n    border-radius: 7px;\n}\n\n#new-project {\n    display: none; /* flex */\n    flex-wrap: wrap;\n}\n\n.green {\n    background-color: var(--green);\n}\n\n.red {\n    background-color: var(--red);\n}\n\n#projects {\n    width: 100%;\n}\n\n#projects > div {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    width: 100%;\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 7px;\n}\n\n#projects > div:hover {\n    background-color: var(--nav-dark);\n    --cancel-display: block;\n}\n\n.cancel {\n    margin-left: auto;\n    margin-right: 5px;\n    display: var(--cancel-display);\n}\n\n.content {\n    padding: 50px 15vw;\n}\n\n.content > span {\n    font-size: 30px;\n}\n\n#create-todos {\n    margin: 20px 0;\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    border-radius: 7px;\n    gap: 10px;\n}\n\n#create-todos:hover {\n    background-color: var(--nav-dark);\n    cursor: pointer;\n}\n\n.todo {\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n    border-radius: 7px;\n    background-color: aqua;\n    padding: 17px;\n    margin: 5px;\n    border: 2px solid var(--content);\n    background: linear-gradient( to left, var(--priority-color), var(--priority-color) 9px, var(--priority-bg) 9px, var(--priority-bg) 100% );\n}\n\n.todo:hover {\n    border: 2px solid var(--priority-bg);\n}\n\n.todo > div {\n    flex-wrap: wrap;\n    display: flex;\n    gap: 10px;\n    align-items: flex-end;\n}\n\n.todo .title {\n    font-size: 18px;\n    font-weight: 500;\n    margin-right: auto;\n    display: flex;\n    align-items: center;\n    gap: 3px;\n}\n\n.todo .edits {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.todo .edits > img:hover {\n    cursor: pointer;\n}\n\n.due-date {\n    margin-right: auto;\n}\n\n#new-todo, #new-todo-edit {\n    border: 1px solid var(--main);\n    padding: 10px;\n    border-radius: 7px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    margin: 10px 0;\n    display: none;\n}\n\n#new-todo input, #new-todo-edit input {\n    outline: 0;\n    border-width: 0 0;\n    background-color: var(--content);\n    font-size: 16px;\n}\n\n#new-todo select, #new-todo-edit select {\n    background-color: var(--content);\n    padding: 3px;\n    border-radius: 7px;\n}\n\n#new-todo button, #new-todo-edit button {\n    padding: 5px;\n    margin: 0 2px;\n    font-size: 16px;\n    border-radius: 7px;\n    width: 100px;\n    align-self: center;\n}\n\n#new-todo .buttons, #new-todo-edit .buttons {\n    display: flex;\n    gap: 5px;\n    justify-content: flex-end;\n}\n\n#new-todo input:first-child, #new-todo-edit input:first-child {\n    font-size: 20px;\n}\n\n.todo .description {\n    font-style: italic;\n}\n\ninput[type=checkbox] {\n    margin: 0px;\n    width: 20px;\n    height: 20px;\n    clip-path: circle(42% at 50% 50%);\n    accent-color: var(--priority-color);\n}\n\ninput[type=checkbox]:checked + span {\n    text-decoration: line-through;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300&family=Yusei+Magic&display=swap');\n\n:root {\n    --main: #333;\n    --content: #eee;\n    --nav: #ddd;\n    --nav-dark: #ccc;\n    --green: #77dd77;\n    --red: #ff6961;\n    --cancel-display: none;\n    --priority-color: var(--nav-dark);\n    --priority-bg: var(--nav);\n}\n\n.priority-1 {\n    --priority-color: #F4442E;\n    --priority-bg: #F4442E66;\n}\n\n.priority-2 {\n    --priority-color: #FC9E4F;\n    --priority-bg: #FC9E4F66;\n}\n\n.priority-3 {\n    --priority-color: #EDD382;\n    --priority-bg: #EDD38266;\n}\n\n.priority-4 {\n    --priority-color: #F2F3AE;\n    --priority-bg: #F2F3AE66;\n}\n\nbody {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Roboto', sans-serif;\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n}\n\nimg {\n    height: 25px;\n}\n\nbutton {\n    cursor: pointer;\n    border: 0px;\n    color: #fff;\n}\n\n#header {\n    display: flex;\n    align-items: center;\n    gap: 2px;\n    font-size: 42px;\n    background-color: var(--main);\n    padding: 20px 10px;\n    font-weight: 600;\n    font-family: 'Yusei Magic', sans-serif; \n    color: var(--content);\n}\n\n#header img {\n    height: 60px;\n}\n\n.side-nav {\n    padding: 20px;\n    font-size: 16px;\n    background-color: var(--nav);\n}\n\n.side-nav img {\n    height: 30px;\n}\n\n.side-nav > div {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    gap: 2px;\n    border-radius: 7px;\n}\n\n.side-nav .nav-item:hover {\n    background-color: var(--nav-dark);\n    cursor: pointer;\n}\n\n.nav-item {\n    margin: 5px 0px;\n}\n\n\n.main-content {\n    flex-grow: 1;\n    display: grid;\n    grid-template-columns: minmax(300px, 1fr) 6fr;\n    background-color: var(--content);\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 10px;\n    justify-content: center;\n    background-color: var(--main);\n    color: var(--content);\n}\n\nfooter img, #header img {\n    filter: invert(95%) sepia(0%) saturate(333%) hue-rotate(147deg) brightness(98%) contrast(85%);\n}\n\ndiv.project-container {\n    margin-top: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n#add-project {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    width: 100%;\n    padding: 5px;\n    border-radius: 7px;\n}\n\n.project-container > span {\n    font-size: larger;\n    font-weight: 500;\n}\n\n#new-project input {\n    width: 100%;\n    height: 25px;\n    border-radius: 7px;\n    border: 1px solid var(--red);\n    font-size: 16px;\n    padding: 5px;\n    margin: 5px 0 10px 0;\n    outline-width: 0;\n}\n\n#new-project input:focus {\n    border: 1px solid var(--green);\n    outline-width: 0;\n}\n\n#new-project button {\n    width: 100px;\n    font-size: 16px;\n    margin: 0 5px;\n    padding: 5px;\n    border-radius: 7px;\n}\n\n#new-project {\n    display: none; /* flex */\n    flex-wrap: wrap;\n}\n\n.green {\n    background-color: var(--green);\n}\n\n.red {\n    background-color: var(--red);\n}\n\n#projects {\n    width: 100%;\n}\n\n#projects > div {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    width: 100%;\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 7px;\n}\n\n#projects > div:hover {\n    background-color: var(--nav-dark);\n    --cancel-display: block;\n}\n\n.cancel {\n    margin-left: auto;\n    margin-right: 5px;\n    display: var(--cancel-display);\n}\n\n.content {\n    padding: 50px 15vw;\n}\n\n.content > span {\n    font-size: 30px;\n}\n\n#create-todos {\n    margin: 20px 0;\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    border-radius: 7px;\n    gap: 10px;\n}\n\n#create-todos:hover {\n    background-color: var(--nav-dark);\n    cursor: pointer;\n}\n\n.todo {\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n    border-radius: 7px;\n    background-color: aqua;\n    padding: 17px;\n    margin: 5px;\n    border: 2px solid var(--content);\n    background: linear-gradient( to left, var(--priority-color), var(--priority-color) 9px, var(--priority-bg) 9px, var(--priority-bg) 100% );\n}\n\n.todo:hover {\n    border: 2px solid var(--priority-bg);\n}\n\n.todo > div {\n    flex-wrap: wrap;\n    display: flex;\n    gap: 10px;\n    align-items: flex-end;\n}\n\n.todo .title {\n    font-size: 18px;\n    font-weight: 500;\n    margin-right: auto;\n    display: flex;\n    align-items: center;\n    gap: 3px;\n}\n\n.todo .edits {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.todo .edits > img:hover {\n    cursor: pointer;\n}\n\n.due-date {\n    margin-right: auto;\n}\n\n#new-todo, #new-todo-edit {\n    border: 1px solid var(--main);\n    padding: 10px;\n    border-radius: 7px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    margin: 10px 0;\n    display: none;\n}\n\n#new-todo input, #new-todo-edit input {\n    outline: 0;\n    border-width: 0 0;\n    background-color: var(--content);\n    font-size: 16px;\n}\n\n#new-todo select, #new-todo-edit select {\n    background-color: var(--content);\n    padding: 3px;\n    border-radius: 7px;\n}\n\n#new-todo button, #new-todo-edit button {\n    padding: 5px;\n    margin: 0 2px;\n    font-size: 16px;\n    border-radius: 7px;\n    width: 100px;\n    align-self: center;\n}\n\n#new-todo .buttons, #new-todo-edit .buttons {\n    display: flex;\n    gap: 5px;\n    justify-content: flex-end;\n}\n\n#new-todo input:first-child, #new-todo-edit input:first-child {\n    font-size: 20px;\n}\n\n.todo .description {\n    font-style: italic;\n}\n\ninput[type=checkbox] {\n    margin: 0px;\n    width: 20px;\n    height: 20px;\n    clip-path: circle(42% at 50% 50%);\n    accent-color: var(--priority-color);\n}\n\ninput[type=checkbox]:checked + span {\n    text-decoration: line-through;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _editToDo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editToDo */ "./src/dom-manipulation/editToDo.js");





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
    editImg.addEventListener('click', _editToDo__WEBPACK_IMPORTED_MODULE_3__.editToDo);

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
/* harmony import */ var _editToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editToDo */ "./src/dom-manipulation/editToDo.js");



const deleteToDo = (e) => {
    let projectName = document.querySelector('.content').querySelector('span').textContent;
    let toDelete = e.currentTarget.correspondingToDo;

    // if the edit option was opened for this, close that
    let todoDOM = e.currentTarget.parentNode.parentNode;
    console.log(todoDOM);
    if (todoDOM.nextSibling != null && todoDOM.nextSibling.id == "new-todo-edit") {
        (0,_editToDo__WEBPACK_IMPORTED_MODULE_1__.exitEditForm)();
    }

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

/***/ "./src/dom-manipulation/editToDo.js":
/*!******************************************!*\
  !*** ./src/dom-manipulation/editToDo.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editToDo": () => (/* binding */ editToDo),
/* harmony export */   "exitEditForm": () => (/* binding */ exitEditForm)
/* harmony export */ });
const exitEditForm = () => {
    // clean up
    let editForm = document.querySelector('#new-todo-edit');
    document.querySelector('#new-todo').after(editForm);
    editForm.style.display = "none";
}

const editToDo = (e) => {
    // get the todo DOM
    let todoDOM = e.currentTarget.parentNode.parentNode;
    // get the todo object
    let todoEdit = e.currentTarget.nextSibling.correspondingToDo;

    let editForm = document.querySelector('#new-todo-edit');
    todoDOM.after(editForm);

    let title = document.querySelector('#new-todo-edit input:first-child');
    title.value = todoEdit.title;
    let desc = title.nextElementSibling;
    desc.value = todoEdit.description;
    let dueDate = desc.nextElementSibling.querySelector('input');
    dueDate.value = todoEdit.dueDate;
    let priority = document.querySelector('#priority-edit');
    priority.value = todoEdit.priority;
    editForm.style.display = "flex";
 
    let cancelButton = document.querySelector('#new-todo-edit .buttons > .red');
    let submitButton = document.querySelector('#new-todo-edit .buttons > .green');
    cancelButton.onclick = exitEditForm;

    submitButton.onclick = function() {
        // check values
        if (title.value == '') {
            window.alert("Task name can't be empty");
            title.value = todoEdit.title;
            return;
        }
        else if (desc.value == '') {
            window.alert("Description can't be empty");
            desc.value = todoEdit.description;
            return;
        }
        else if (dueDate.value == '') {
            window.alert("Due date can't be empty");
            dueDate.value = todoEdit.dueDate;
            return;
        }
        // change values in the data structure
        todoEdit.title = title.value;
        todoEdit.description = desc.value;
        todoEdit.dueDate = dueDate.value;
        todoEdit.priority = priority.value;
        exitEditForm();

        todoDOM.querySelector('.title').textContent = title.value;
        todoDOM.querySelector('.description').textContent = desc.value;
        todoDOM.querySelector('.due-date').textContent = dueDate.value;
        // change priority class
        todoDOM.className = todoDOM.className.replace( /priority-([1-4])/ , `priority-${todoEdit.priority}` )
    }
}

 

/***/ }),

/***/ "./src/dom-manipulation/inboxPage.js":
/*!*******************************************!*\
  !*** ./src/dom-manipulation/inboxPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showInbox": () => (/* binding */ showInbox)
/* harmony export */ });
/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ "./src/dom-manipulation/createToDo.js");
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/projects */ "./src/modules/projects.js");
/* harmony import */ var _deleteToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteToDo */ "./src/dom-manipulation/deleteToDo.js");
/* harmony import */ var _editToDo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editToDo */ "./src/dom-manipulation/editToDo.js");






const createTitle = (name) => {
    let contentContainer = document.querySelector('.content');
    contentContainer.querySelector('span').textContent = name;
}

const showInbox = () => {
    let projectName = "Inbox";
    
    // create the title
    createTitle(projectName);
    // in case the todo-creator was opened by any other project
    (0,_createToDo__WEBPACK_IMPORTED_MODULE_0__.exitToDoInput)();
    // in case the todo-editor was opened by any other project
    (0,_editToDo__WEBPACK_IMPORTED_MODULE_3__.exitEditForm)();

    // clear anything else in the content
    let todoContainer = document.querySelector('.todos');
    todoContainer.innerHTML = "";
    
    // show ALL todos
    for (const project in _modules_projects__WEBPACK_IMPORTED_MODULE_1__.Projects.projectList) {
        // project has the project names
        for (const todo of _modules_projects__WEBPACK_IMPORTED_MODULE_1__.Projects.projectList[project].todos) {
            let newToDo = (0,_createToDo__WEBPACK_IMPORTED_MODULE_0__.createToDoDOM)(todo);
            todoContainer.appendChild(newToDo);
            newToDo.querySelector('.edits').lastChild.addEventListener('click', _deleteToDo__WEBPACK_IMPORTED_MODULE_2__.deleteToDo);
            newToDo.querySelector('.edits').lastChild.correspondingToDo = todo; 
        }
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
        element.addEventListener('click', (e) => (0,_projectPage__WEBPACK_IMPORTED_MODULE_1__.showProjectPage)(e, true));

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
/* harmony import */ var _editToDo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editToDo */ "./src/dom-manipulation/editToDo.js");






const createTitle = (name) => {
    let contentContainer = document.querySelector('.content');
    contentContainer.querySelector('span').textContent = name;
}

const showProjectPage = (e, flag) => {
    let projectName;
    if (flag) {
        projectName = e.target.innerText;
    }
    else {
        projectName = e;
    }
    

    // create the title
    createTitle(projectName);
    // in case the todo-creator was opened by any other project
    (0,_createToDo__WEBPACK_IMPORTED_MODULE_0__.exitToDoInput)();
    // in case the todo-editor was opened by any other project
    (0,_editToDo__WEBPACK_IMPORTED_MODULE_3__.exitEditForm)();

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
    projectList['Inbox'] = createProject('Inbox');

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
/* harmony import */ var _dom_manipulation_inboxPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-manipulation/inboxPage */ "./src/dom-manipulation/inboxPage.js");





// We start by showing the user the inbox page
(0,_dom_manipulation_inboxPage__WEBPACK_IMPORTED_MODULE_3__.showInbox)();

document.querySelector('#add-project').addEventListener('click', _dom_manipulation_projectControls__WEBPACK_IMPORTED_MODULE_1__.addProject);
document.querySelector('#create-todos').addEventListener('click', _dom_manipulation_createToDo__WEBPACK_IMPORTED_MODULE_2__.createToDoInput);
document.querySelector('.side-nav').firstElementChild.addEventListener('click', function() {
    (0,_dom_manipulation_inboxPage__WEBPACK_IMPORTED_MODULE_3__.showInbox)()
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLHVDQUF1QztBQUNyTDtBQUNBLGlEQUFpRCxtQkFBbUIsc0JBQXNCLGtCQUFrQix1QkFBdUIsdUJBQXVCLHFCQUFxQiw2QkFBNkIsd0NBQXdDLGdDQUFnQyxHQUFHLGlCQUFpQixnQ0FBZ0MsK0JBQStCLEdBQUcsaUJBQWlCLGdDQUFnQywrQkFBK0IsR0FBRyxpQkFBaUIsZ0NBQWdDLCtCQUErQixHQUFHLGlCQUFpQixnQ0FBZ0MsK0JBQStCLEdBQUcsVUFBVSxtQkFBbUIsa0JBQWtCLHdDQUF3QyxvQkFBb0Isd0JBQXdCLDZCQUE2QixHQUFHLFNBQVMsbUJBQW1CLEdBQUcsWUFBWSxzQkFBc0Isa0JBQWtCLGtCQUFrQixHQUFHLGFBQWEsb0JBQW9CLDBCQUEwQixlQUFlLHNCQUFzQixvQ0FBb0MseUJBQXlCLHVCQUF1Qiw4Q0FBOEMsNEJBQTRCLEdBQUcsaUJBQWlCLG1CQUFtQixHQUFHLGVBQWUsb0JBQW9CLHNCQUFzQixtQ0FBbUMsR0FBRyxtQkFBbUIsbUJBQW1CLEdBQUcscUJBQXFCLG9CQUFvQiwwQkFBMEIsbUJBQW1CLGVBQWUseUJBQXlCLEdBQUcsK0JBQStCLHdDQUF3QyxzQkFBc0IsR0FBRyxlQUFlLHNCQUFzQixHQUFHLHFCQUFxQixtQkFBbUIsb0JBQW9CLG9EQUFvRCx1Q0FBdUMsR0FBRyxZQUFZLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLG9CQUFvQiw4QkFBOEIsb0NBQW9DLDRCQUE0QixHQUFHLDZCQUE2QixvR0FBb0csR0FBRywyQkFBMkIsdUJBQXVCLG9CQUFvQiw2QkFBNkIsOEJBQThCLEdBQUcsa0JBQWtCLG9CQUFvQiwwQkFBMEIsZUFBZSxrQkFBa0IsbUJBQW1CLHlCQUF5QixHQUFHLCtCQUErQix3QkFBd0IsdUJBQXVCLEdBQUcsd0JBQXdCLGtCQUFrQixtQkFBbUIseUJBQXlCLG1DQUFtQyxzQkFBc0IsbUJBQW1CLDJCQUEyQix1QkFBdUIsR0FBRyw4QkFBOEIscUNBQXFDLHVCQUF1QixHQUFHLHlCQUF5QixtQkFBbUIsc0JBQXNCLG9CQUFvQixtQkFBbUIseUJBQXlCLEdBQUcsa0JBQWtCLHFCQUFxQixnQ0FBZ0MsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFVBQVUsbUNBQW1DLEdBQUcsZUFBZSxrQkFBa0IsR0FBRyxxQkFBcUIsb0JBQW9CLDBCQUEwQixlQUFlLGtCQUFrQixtQkFBbUIsc0JBQXNCLHlCQUF5QixHQUFHLDJCQUEyQix3Q0FBd0MsOEJBQThCLEdBQUcsYUFBYSx3QkFBd0Isd0JBQXdCLHFDQUFxQyxHQUFHLGNBQWMseUJBQXlCLEdBQUcscUJBQXFCLHNCQUFzQixHQUFHLG1CQUFtQixxQkFBcUIsb0JBQW9CLDBCQUEwQixtQkFBbUIseUJBQXlCLGdCQUFnQixHQUFHLHlCQUF5Qix3Q0FBd0Msc0JBQXNCLEdBQUcsV0FBVyxvQkFBb0IsNkJBQTZCLGVBQWUseUJBQXlCLDZCQUE2QixvQkFBb0Isa0JBQWtCLHVDQUF1QyxnSkFBZ0osR0FBRyxpQkFBaUIsMkNBQTJDLEdBQUcsaUJBQWlCLHNCQUFzQixvQkFBb0IsZ0JBQWdCLDRCQUE0QixHQUFHLGtCQUFrQixzQkFBc0IsdUJBQXVCLHlCQUF5QixvQkFBb0IsMEJBQTBCLGVBQWUsR0FBRyxrQkFBa0Isb0JBQW9CLDBCQUEwQixnQ0FBZ0MsR0FBRyw4QkFBOEIsc0JBQXNCLEdBQUcsZUFBZSx5QkFBeUIsR0FBRywrQkFBK0Isb0NBQW9DLG9CQUFvQix5QkFBeUIsb0JBQW9CLDZCQUE2QixlQUFlLHFCQUFxQixvQkFBb0IsR0FBRywyQ0FBMkMsaUJBQWlCLHdCQUF3Qix1Q0FBdUMsc0JBQXNCLEdBQUcsNkNBQTZDLHVDQUF1QyxtQkFBbUIseUJBQXlCLEdBQUcsNkNBQTZDLG1CQUFtQixvQkFBb0Isc0JBQXNCLHlCQUF5QixtQkFBbUIseUJBQXlCLEdBQUcsaURBQWlELG9CQUFvQixlQUFlLGdDQUFnQyxHQUFHLG1FQUFtRSxzQkFBc0IsR0FBRyx3QkFBd0IseUJBQXlCLEdBQUcsMEJBQTBCLGtCQUFrQixrQkFBa0IsbUJBQW1CLHdDQUF3QywwQ0FBMEMsR0FBRyx5Q0FBeUMsb0NBQW9DLEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxvQkFBb0IsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksdUdBQXVHLE1BQU0sTUFBTSxNQUFNLE1BQU0sd0NBQXdDLFdBQVcsbUJBQW1CLHNCQUFzQixrQkFBa0IsdUJBQXVCLHVCQUF1QixxQkFBcUIsNkJBQTZCLHdDQUF3QyxnQ0FBZ0MsR0FBRyxpQkFBaUIsZ0NBQWdDLCtCQUErQixHQUFHLGlCQUFpQixnQ0FBZ0MsK0JBQStCLEdBQUcsaUJBQWlCLGdDQUFnQywrQkFBK0IsR0FBRyxpQkFBaUIsZ0NBQWdDLCtCQUErQixHQUFHLFVBQVUsbUJBQW1CLGtCQUFrQix3Q0FBd0Msb0JBQW9CLHdCQUF3Qiw2QkFBNkIsR0FBRyxTQUFTLG1CQUFtQixHQUFHLFlBQVksc0JBQXNCLGtCQUFrQixrQkFBa0IsR0FBRyxhQUFhLG9CQUFvQiwwQkFBMEIsZUFBZSxzQkFBc0Isb0NBQW9DLHlCQUF5Qix1QkFBdUIsOENBQThDLDRCQUE0QixHQUFHLGlCQUFpQixtQkFBbUIsR0FBRyxlQUFlLG9CQUFvQixzQkFBc0IsbUNBQW1DLEdBQUcsbUJBQW1CLG1CQUFtQixHQUFHLHFCQUFxQixvQkFBb0IsMEJBQTBCLG1CQUFtQixlQUFlLHlCQUF5QixHQUFHLCtCQUErQix3Q0FBd0Msc0JBQXNCLEdBQUcsZUFBZSxzQkFBc0IsR0FBRyxxQkFBcUIsbUJBQW1CLG9CQUFvQixvREFBb0QsdUNBQXVDLEdBQUcsWUFBWSxvQkFBb0IsMEJBQTBCLGdCQUFnQixvQkFBb0IsOEJBQThCLG9DQUFvQyw0QkFBNEIsR0FBRyw2QkFBNkIsb0dBQW9HLEdBQUcsMkJBQTJCLHVCQUF1QixvQkFBb0IsNkJBQTZCLDhCQUE4QixHQUFHLGtCQUFrQixvQkFBb0IsMEJBQTBCLGVBQWUsa0JBQWtCLG1CQUFtQix5QkFBeUIsR0FBRywrQkFBK0Isd0JBQXdCLHVCQUF1QixHQUFHLHdCQUF3QixrQkFBa0IsbUJBQW1CLHlCQUF5QixtQ0FBbUMsc0JBQXNCLG1CQUFtQiwyQkFBMkIsdUJBQXVCLEdBQUcsOEJBQThCLHFDQUFxQyx1QkFBdUIsR0FBRyx5QkFBeUIsbUJBQW1CLHNCQUFzQixvQkFBb0IsbUJBQW1CLHlCQUF5QixHQUFHLGtCQUFrQixxQkFBcUIsZ0NBQWdDLEdBQUcsWUFBWSxxQ0FBcUMsR0FBRyxVQUFVLG1DQUFtQyxHQUFHLGVBQWUsa0JBQWtCLEdBQUcscUJBQXFCLG9CQUFvQiwwQkFBMEIsZUFBZSxrQkFBa0IsbUJBQW1CLHNCQUFzQix5QkFBeUIsR0FBRywyQkFBMkIsd0NBQXdDLDhCQUE4QixHQUFHLGFBQWEsd0JBQXdCLHdCQUF3QixxQ0FBcUMsR0FBRyxjQUFjLHlCQUF5QixHQUFHLHFCQUFxQixzQkFBc0IsR0FBRyxtQkFBbUIscUJBQXFCLG9CQUFvQiwwQkFBMEIsbUJBQW1CLHlCQUF5QixnQkFBZ0IsR0FBRyx5QkFBeUIsd0NBQXdDLHNCQUFzQixHQUFHLFdBQVcsb0JBQW9CLDZCQUE2QixlQUFlLHlCQUF5Qiw2QkFBNkIsb0JBQW9CLGtCQUFrQix1Q0FBdUMsZ0pBQWdKLEdBQUcsaUJBQWlCLDJDQUEyQyxHQUFHLGlCQUFpQixzQkFBc0Isb0JBQW9CLGdCQUFnQiw0QkFBNEIsR0FBRyxrQkFBa0Isc0JBQXNCLHVCQUF1Qix5QkFBeUIsb0JBQW9CLDBCQUEwQixlQUFlLEdBQUcsa0JBQWtCLG9CQUFvQiwwQkFBMEIsZ0NBQWdDLEdBQUcsOEJBQThCLHNCQUFzQixHQUFHLGVBQWUseUJBQXlCLEdBQUcsK0JBQStCLG9DQUFvQyxvQkFBb0IseUJBQXlCLG9CQUFvQiw2QkFBNkIsZUFBZSxxQkFBcUIsb0JBQW9CLEdBQUcsMkNBQTJDLGlCQUFpQix3QkFBd0IsdUNBQXVDLHNCQUFzQixHQUFHLDZDQUE2Qyx1Q0FBdUMsbUJBQW1CLHlCQUF5QixHQUFHLDZDQUE2QyxtQkFBbUIsb0JBQW9CLHNCQUFzQix5QkFBeUIsbUJBQW1CLHlCQUF5QixHQUFHLGlEQUFpRCxvQkFBb0IsZUFBZSxnQ0FBZ0MsR0FBRyxtRUFBbUUsc0JBQXNCLEdBQUcsd0JBQXdCLHlCQUF5QixHQUFHLDBCQUEwQixrQkFBa0Isa0JBQWtCLG1CQUFtQix3Q0FBd0MsMENBQTBDLEdBQUcseUNBQXlDLG9DQUFvQyxHQUFHLG1CQUFtQjtBQUNqbGM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2IrQztBQUNSO0FBQ3FCO0FBQ3RCOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsY0FBYzs7QUFFaEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLG9FQUFVO0FBQ2xEO0FBQ0Esc0NBQXNDLCtDQUFROztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBEQUFlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtRUFBb0I7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkorQztBQUNMOztBQUUxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFZO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUVBQW9CO0FBQ3ZDLFlBQVksbUVBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0Ysa0JBQWtCO0FBQzFHO0FBQ0E7O0FBS0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFNEM7QUFDRTtBQUNGO0FBQ0g7QUFDQTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBYTtBQUNqQjtBQUNBLElBQUksdURBQVk7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUVBQW9CO0FBQzlDO0FBQ0EsMkJBQTJCLG1FQUFvQjtBQUMvQywwQkFBMEIsMERBQWE7QUFDdkM7QUFDQSxnRkFBZ0YsbURBQVU7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkMrQztBQUNDOztBQUVoRDtBQUNBLElBQUkscUVBQXNCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUVBQW9CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsbUVBQW9CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELDZEQUFlOztBQUVoRTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx3RUFBeUI7QUFDakMsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFGNkM7QUFDRTtBQUNGO0FBQ0g7QUFDQTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQWE7QUFDakI7QUFDQSxJQUFJLHVEQUFZOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1FQUFvQjtBQUMzQyxzQkFBc0IsMERBQWE7QUFDbkM7QUFDQSw0RUFBNEUsbURBQVU7QUFDdEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O1VDdEREO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMkM7QUFDQTtBQUNQOztBQUV6RDtBQUNBLHNFQUFTOztBQUVULGlFQUFpRSx5RUFBVTtBQUMzRSxrRUFBa0UseUVBQWU7QUFDakY7QUFDQSxJQUFJLHNFQUFTO0FBQ2IsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20tbWFuaXB1bGF0aW9uL2NyZWF0ZVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS1tYW5pcHVsYXRpb24vZGVsZXRlVG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLW1hbmlwdWxhdGlvbi9lZGl0VG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLW1hbmlwdWxhdGlvbi9pbmJveFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS1tYW5pcHVsYXRpb24vcHJvamVjdENvbnRyb2xzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20tbWFuaXB1bGF0aW9uL3Byb2plY3RQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDsxLDEwMDsxLDMwMCZmYW1pbHk9WXVzZWkrTWFnaWMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLW1haW46ICMzMzM7XFxuICAgIC0tY29udGVudDogI2VlZTtcXG4gICAgLS1uYXY6ICNkZGQ7XFxuICAgIC0tbmF2LWRhcms6ICNjY2M7XFxuICAgIC0tZ3JlZW46ICM3N2RkNzc7XFxuICAgIC0tcmVkOiAjZmY2OTYxO1xcbiAgICAtLWNhbmNlbC1kaXNwbGF5OiBub25lO1xcbiAgICAtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1uYXYtZGFyayk7XFxuICAgIC0tcHJpb3JpdHktYmc6IHZhcigtLW5hdik7XFxufVxcblxcbi5wcmlvcml0eS0xIHtcXG4gICAgLS1wcmlvcml0eS1jb2xvcjogI0Y0NDQyRTtcXG4gICAgLS1wcmlvcml0eS1iZzogI0Y0NDQyRTY2O1xcbn1cXG5cXG4ucHJpb3JpdHktMiB7XFxuICAgIC0tcHJpb3JpdHktY29sb3I6ICNGQzlFNEY7XFxuICAgIC0tcHJpb3JpdHktYmc6ICNGQzlFNEY2NjtcXG59XFxuXFxuLnByaW9yaXR5LTMge1xcbiAgICAtLXByaW9yaXR5LWNvbG9yOiAjRUREMzgyO1xcbiAgICAtLXByaW9yaXR5LWJnOiAjRUREMzgyNjY7XFxufVxcblxcbi5wcmlvcml0eS00IHtcXG4gICAgLS1wcmlvcml0eS1jb2xvcjogI0YyRjNBRTtcXG4gICAgLS1wcmlvcml0eS1iZzogI0YyRjNBRTY2O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaW1nIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnB4O1xcbiAgICBmb250LXNpemU6IDQycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnWXVzZWkgTWFnaWMnLCBzYW5zLXNlcmlmOyBcXG4gICAgY29sb3I6IHZhcigtLWNvbnRlbnQpO1xcbn1cXG5cXG4jaGVhZGVyIGltZyB7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYpO1xcbn1cXG5cXG4uc2lkZS1uYXYgaW1nIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uc2lkZS1uYXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdhcDogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5zaWRlLW5hdiAubmF2LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtZGFyayk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1pdGVtIHtcXG4gICAgbWFyZ2luOiA1cHggMHB4O1xcbn1cXG5cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDBweCwgMWZyKSA2ZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbnRlbnQpO1xcbn1cXG5cXG5mb290ZXIgaW1nLCAjaGVhZGVyIGltZyB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDk1JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMzMyUpIGh1ZS1yb3RhdGUoMTQ3ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoODUlKTtcXG59XFxuXFxuZGl2LnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yZWQpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMCAxMHB4IDA7XFxuICAgIG91dGxpbmUtd2lkdGg6IDA7XFxufVxcblxcbiNuZXctcHJvamVjdCBpbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogZmxleCAqL1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ncmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLnJlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdHMgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbiNwcm9qZWN0cyA+IGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1kYXJrKTtcXG4gICAgLS1jYW5jZWwtZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jYW5jZWwge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIGRpc3BsYXk6IHZhcigtLWNhbmNlbC1kaXNwbGF5KTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA1MHB4IDE1dnc7XFxufVxcblxcbi5jb250ZW50ID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuI2NyZWF0ZS10b2RvcyB7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jY3JlYXRlLXRvZG9zOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWRhcmspO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgcGFkZGluZzogMTdweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbnRlbnQpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHRvIGxlZnQsIHZhcigtLXByaW9yaXR5LWNvbG9yKSwgdmFyKC0tcHJpb3JpdHktY29sb3IpIDlweCwgdmFyKC0tcHJpb3JpdHktYmcpIDlweCwgdmFyKC0tcHJpb3JpdHktYmcpIDEwMCUgKTtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmlvcml0eS1iZyk7XFxufVxcblxcbi50b2RvID4gZGl2IHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLnRvZG8gLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG4udG9kbyAuZWRpdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4udG9kbyAuZWRpdHMgPiBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kdWUtZGF0ZSB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuI25ldy10b2RvLCAjbmV3LXRvZG8tZWRpdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4pO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI25ldy10b2RvIGlucHV0LCAjbmV3LXRvZG8tZWRpdCBpbnB1dCB7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGJvcmRlci13aWR0aDogMCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50KTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4jbmV3LXRvZG8gc2VsZWN0LCAjbmV3LXRvZG8tZWRpdCBzZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50KTtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbiNuZXctdG9kbyBidXR0b24sICNuZXctdG9kby1lZGl0IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAwIDJweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXRvZG8gLmJ1dHRvbnMsICNuZXctdG9kby1lZGl0IC5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiNuZXctdG9kbyBpbnB1dDpmaXJzdC1jaGlsZCwgI25ldy10b2RvLWVkaXQgaW5wdXQ6Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b2RvIC5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoNDIlIGF0IDUwJSA1MCUpO1xcbiAgICBhY2NlbnQtY29sb3I6IHZhcigtLXByaW9yaXR5LWNvbG9yKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIHNwYW4ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5h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UixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLHlJQUF5STtBQUM3STs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsU0FBUztJQUNULHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdDQUFnQztJQUNoQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDsxLDEwMDsxLDMwMCZmYW1pbHk9WXVzZWkrTWFnaWMmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW46ICMzMzM7XFxuICAgIC0tY29udGVudDogI2VlZTtcXG4gICAgLS1uYXY6ICNkZGQ7XFxuICAgIC0tbmF2LWRhcms6ICNjY2M7XFxuICAgIC0tZ3JlZW46ICM3N2RkNzc7XFxuICAgIC0tcmVkOiAjZmY2OTYxO1xcbiAgICAtLWNhbmNlbC1kaXNwbGF5OiBub25lO1xcbiAgICAtLXByaW9yaXR5LWNvbG9yOiB2YXIoLS1uYXYtZGFyayk7XFxuICAgIC0tcHJpb3JpdHktYmc6IHZhcigtLW5hdik7XFxufVxcblxcbi5wcmlvcml0eS0xIHtcXG4gICAgLS1wcmlvcml0eS1jb2xvcjogI0Y0NDQyRTtcXG4gICAgLS1wcmlvcml0eS1iZzogI0Y0NDQyRTY2O1xcbn1cXG5cXG4ucHJpb3JpdHktMiB7XFxuICAgIC0tcHJpb3JpdHktY29sb3I6ICNGQzlFNEY7XFxuICAgIC0tcHJpb3JpdHktYmc6ICNGQzlFNEY2NjtcXG59XFxuXFxuLnByaW9yaXR5LTMge1xcbiAgICAtLXByaW9yaXR5LWNvbG9yOiAjRUREMzgyO1xcbiAgICAtLXByaW9yaXR5LWJnOiAjRUREMzgyNjY7XFxufVxcblxcbi5wcmlvcml0eS00IHtcXG4gICAgLS1wcmlvcml0eS1jb2xvcjogI0YyRjNBRTtcXG4gICAgLS1wcmlvcml0eS1iZzogI0YyRjNBRTY2O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaW1nIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnB4O1xcbiAgICBmb250LXNpemU6IDQycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnWXVzZWkgTWFnaWMnLCBzYW5zLXNlcmlmOyBcXG4gICAgY29sb3I6IHZhcigtLWNvbnRlbnQpO1xcbn1cXG5cXG4jaGVhZGVyIGltZyB7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYpO1xcbn1cXG5cXG4uc2lkZS1uYXYgaW1nIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uc2lkZS1uYXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdhcDogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5zaWRlLW5hdiAubmF2LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtZGFyayk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1pdGVtIHtcXG4gICAgbWFyZ2luOiA1cHggMHB4O1xcbn1cXG5cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDBweCwgMWZyKSA2ZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbnRlbnQpO1xcbn1cXG5cXG5mb290ZXIgaW1nLCAjaGVhZGVyIGltZyB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDk1JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMzMyUpIGh1ZS1yb3RhdGUoMTQ3ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoODUlKTtcXG59XFxuXFxuZGl2LnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1yZWQpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiA1cHggMCAxMHB4IDA7XFxuICAgIG91dGxpbmUtd2lkdGg6IDA7XFxufVxcblxcbiNuZXctcHJvamVjdCBpbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXG4gICAgb3V0bGluZS13aWR0aDogMDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogZmxleCAqL1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ncmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLnJlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdHMgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbiNwcm9qZWN0cyA+IGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1kYXJrKTtcXG4gICAgLS1jYW5jZWwtZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jYW5jZWwge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIGRpc3BsYXk6IHZhcigtLWNhbmNlbC1kaXNwbGF5KTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA1MHB4IDE1dnc7XFxufVxcblxcbi5jb250ZW50ID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuI2NyZWF0ZS10b2RvcyB7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jY3JlYXRlLXRvZG9zOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWRhcmspO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgcGFkZGluZzogMTdweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbnRlbnQpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHRvIGxlZnQsIHZhcigtLXByaW9yaXR5LWNvbG9yKSwgdmFyKC0tcHJpb3JpdHktY29sb3IpIDlweCwgdmFyKC0tcHJpb3JpdHktYmcpIDlweCwgdmFyKC0tcHJpb3JpdHktYmcpIDEwMCUgKTtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmlvcml0eS1iZyk7XFxufVxcblxcbi50b2RvID4gZGl2IHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLnRvZG8gLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3B4O1xcbn1cXG5cXG4udG9kbyAuZWRpdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4udG9kbyAuZWRpdHMgPiBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kdWUtZGF0ZSB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuI25ldy10b2RvLCAjbmV3LXRvZG8tZWRpdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4pO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI25ldy10b2RvIGlucHV0LCAjbmV3LXRvZG8tZWRpdCBpbnB1dCB7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGJvcmRlci13aWR0aDogMCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50KTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4jbmV3LXRvZG8gc2VsZWN0LCAjbmV3LXRvZG8tZWRpdCBzZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50KTtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbiNuZXctdG9kbyBidXR0b24sICNuZXctdG9kby1lZGl0IGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiAwIDJweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jbmV3LXRvZG8gLmJ1dHRvbnMsICNuZXctdG9kby1lZGl0IC5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiNuZXctdG9kbyBpbnB1dDpmaXJzdC1jaGlsZCwgI25ldy10b2RvLWVkaXQgaW5wdXQ6Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b2RvIC5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoNDIlIGF0IDUwJSA1MCUpO1xcbiAgICBhY2NlbnQtY29sb3I6IHZhcigtLXByaW9yaXR5LWNvbG9yKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIHNwYW4ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4uL21vZHVsZXMvcHJvamVjdHNcIjtcbmltcG9ydCB7IHRvRG8gfSBmcm9tIFwiLi4vbW9kdWxlcy90b2RvXCI7XG5pbXBvcnQgeyBkZWxldGVUb0RvIH0gZnJvbSBcIi4uL2RvbS1tYW5pcHVsYXRpb24vZGVsZXRlVG9Eb1wiO1xuaW1wb3J0IHsgZWRpdFRvRG8gfSBmcm9tIFwiLi9lZGl0VG9Eb1wiO1xuXG5jb25zdCBleGl0VG9Eb0lucHV0ID0gKCkgPT4ge1xuICAgIGxldCBhZGRUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS10b2RvcycpO1xuICAgIGxldCBjcmVhdGVUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10b2RvJyk7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8gaW5wdXQ6Zmlyc3QtY2hpbGQnKTtcbiAgICBsZXQgZGVzYyA9IHRpdGxlLm5leHRFbGVtZW50U2libGluZztcbiAgICBsZXQgZHVlRGF0ZSA9IGRlc2MubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5cbiAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgZGVzYy52YWx1ZSA9IFwiXCI7XG4gICAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gICAgcHJpb3JpdHkuc2VsZWN0ZWRJbmRleCA9IDA7XG5cbiAgICBhZGRUb0RvLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBjcmVhdGVUb0RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuY29uc3QgY3JlYXRlVG9Eb0RPTSA9ICh0b2RvKSA9PiB7XG4gICAgbGV0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kbycsIGBwcmlvcml0eS0ke3RvZG8ucHJpb3JpdHl9YCk7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcbiAgICAvLyB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG5cbiAgICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGlmICh0b2RvLmRvbmUgPT0gdHJ1ZSkge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0b2RvLmRvbmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9kby5kb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgbGV0IHRpdGxlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aXRsZU5hbWUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlTmFtZSk7XG5cbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdCcpO1xuICAgIHByb2plY3QudGV4dENvbnRlbnQgPSB0b2RvLnByb2plY3Q7XG4gICAgaGVhZGVyLmFwcGVuZChcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHByb2plY3RcbiAgICApXG5cbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkZXNjLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcblxuICAgIGxldCBlZGl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXRzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdHMnKTtcblxuICAgIGxldCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZHVlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHVlLWRhdGUnKTtcbiAgICBkdWUudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgbGV0IGVkaXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBlZGl0SW1nLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9jb250ZW50L2VkaXQucG5nXCI7XG4gICAgZWRpdEltZy5hbHQgPSBcImVkaXQtaWNvblwiO1xuICAgIGxldCBkZWxldGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkZWxldGVJbWcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2NvbnRlbnQvZGVsZXRlLnBuZ1wiO1xuICAgIGRlbGV0ZUltZy5hbHQgPSBcImRlbGV0ZS1pY29uXCI7XG5cbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gZGVsZXRlIHRvZG9zXG4gICAgZGVsZXRlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9Ebyk7XG4gICAgZGVsZXRlSW1nLmNvcnJlc3BvbmRpbmdUb0RvID0gdG9kbztcbiAgICBlZGl0SW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRvRG8pO1xuXG4gICAgZWRpdHMuYXBwZW5kKFxuICAgICAgICBkdWUsXG4gICAgICAgIGVkaXRJbWcsXG4gICAgICAgIGRlbGV0ZUltZ1xuICAgICk7XG5cbiAgICB0b2RvRWxlbWVudC5hcHBlbmQoXG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgZGVzYyxcbiAgICAgICAgZWRpdHNcbiAgICApO1xuICAgIHJldHVybiB0b2RvRWxlbWVudDtcbn1cblxuY29uc3QgY3JlYXRlVG9Eb0lucHV0ID0gKCkgPT4ge1xuICAgIC8vIERPTSBzdHVmZiBmaXJzdCAtIGhpZGUgdGhlIGNyZWF0ZSBidXR0b24sXG4gICAgLy8gc2hvdyB0aGUgaW5wdXQgZm9ybVxuICAgIGxldCBhZGRUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS10b2RvcycpO1xuICAgIGxldCBjcmVhdGVUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10b2RvJyk7XG5cbiAgICBhZGRUb0RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjcmVhdGVUb0RvLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdG9kbyBpbnB1dDpmaXJzdC1jaGlsZCcpO1xuICAgIGxldCBkZXNjID0gdGl0bGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGxldCBkdWVEYXRlID0gZGVzYy5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbiAgICBcbiAgICAvLyBub3csIGFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBzdWJtaXQgYW5kIGNhbmNlbCBidXR0b25cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8gLnJlZCcpLm9uY2xpY2sgPSBleGl0VG9Eb0lucHV0O1xuXG4gICAgZnVuY3Rpb24gZ2V0VG9Eb0RldGFpbHMoKSB7XG4gICAgICAgIC8vIHZhbGlkYXRlIGZvcm1cbiAgICAgICAgaWYgKHRpdGxlLnZhbHVlID09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUYXNrIG5hbWUgY2FuJ3QgYmUgZW1wdHlcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzYy52YWx1ZSA9PSAnJykge1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRGVzY3JpcHRpb24gY2FuJ3QgYmUgZW1wdHlcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHVlRGF0ZS52YWx1ZSA9PSAnJykge1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRHVlIGRhdGUgY2FuJ3QgYmUgZW1wdHlcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUb2RvIGNhbiBiZSBjcmVhdGVkIG5vd1xuICAgICAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQgPiBzcGFuJykudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBsZXQgdG9kbyA9IHRvRG8uY3JlYXRlVG9EbyhcbiAgICAgICAgICAgICAgICB0aXRsZS52YWx1ZSwgXG4gICAgICAgICAgICAgICAgZGVzYy52YWx1ZSwgXG4gICAgICAgICAgICAgICAgZHVlRGF0ZS52YWx1ZSwgXG4gICAgICAgICAgICAgICAgcHJpb3JpdHkudmFsdWUsIFxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gYWRkIHRoZSB0b2RvIHRvIHRoZSBwcm9qZWN0IGRhdGEgc3RydWN0dXJlXG4gICAgICAgICAgICBQcm9qZWN0cy5wcm9qZWN0TGlzdFtwcm9qZWN0TmFtZV0uYWRkVG9Qcm9qZWN0KHRvZG8pO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSB0b2RvIERPTSBzdHJ1Y3R1cmUgYW5kIGFwcGVuZCB0byBleGlzdGluZyBlbGVtZW50c1xuICAgICAgICAgICAgbGV0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbiAgICAgICAgICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9Eb0RPTSh0b2RvKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV4aXRUb0RvSW5wdXQoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vIGZvciB0aGUgc3VibWl0IGJ1dHRvbiBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8gLmdyZWVuJykub25jbGljayA9IGdldFRvRG9EZXRhaWxzO1xufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZVRvRG9JbnB1dCxcbiAgICBleGl0VG9Eb0lucHV0LFxuICAgIGNyZWF0ZVRvRG9ET01cbn0iLCJpbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gXCIuLi9tb2R1bGVzL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBleGl0RWRpdEZvcm0gfSBmcm9tIFwiLi9lZGl0VG9Eb1wiO1xuXG5jb25zdCBkZWxldGVUb0RvID0gKGUpID0+IHtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudDtcbiAgICBsZXQgdG9EZWxldGUgPSBlLmN1cnJlbnRUYXJnZXQuY29ycmVzcG9uZGluZ1RvRG87XG5cbiAgICAvLyBpZiB0aGUgZWRpdCBvcHRpb24gd2FzIG9wZW5lZCBmb3IgdGhpcywgY2xvc2UgdGhhdFxuICAgIGxldCB0b2RvRE9NID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zb2xlLmxvZyh0b2RvRE9NKTtcbiAgICBpZiAodG9kb0RPTS5uZXh0U2libGluZyAhPSBudWxsICYmIHRvZG9ET00ubmV4dFNpYmxpbmcuaWQgPT0gXCJuZXctdG9kby1lZGl0XCIpIHtcbiAgICAgICAgZXhpdEVkaXRGb3JtKCk7XG4gICAgfVxuXG4gICAgbGV0IERPTUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpLmNoaWxkcmVuO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCB0b2RvIG9mIERPTUNvbnRhaW5lcikge1xuICAgICAgICBsZXQgZGVsZXRlRWxlbWVudCA9IHRvZG8ucXVlcnlTZWxlY3RvcignLmVkaXRzJykubGFzdENoaWxkLmNvcnJlc3BvbmRpbmdUb0RvO1xuICAgICAgICBpZiAoZGVsZXRlRWxlbWVudCA9PSB0b0RlbGV0ZSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGl0IGZyb20gdGhlIERPTVxuICAgICAgICAgICAgdG9kby5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIG5vdywgZGVsZXRlIGl0IGZyb20gdGhlIGRhdGEgc3RydWN0dXJlXG4gICAgICAgICAgICBkZWxldGUgUHJvamVjdHMucHJvamVjdExpc3RbcHJvamVjdE5hbWVdLnRvZG9zW2luZGV4XVxuICAgICAgICAgICAgUHJvamVjdHMucHJvamVjdExpc3RbcHJvamVjdE5hbWVdLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGRlbGV0ZVRvRG9cbn0iLCJjb25zdCBleGl0RWRpdEZvcm0gPSAoKSA9PiB7XG4gICAgLy8gY2xlYW4gdXBcbiAgICBsZXQgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8tZWRpdCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdG9kbycpLmFmdGVyKGVkaXRGb3JtKTtcbiAgICBlZGl0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmNvbnN0IGVkaXRUb0RvID0gKGUpID0+IHtcbiAgICAvLyBnZXQgdGhlIHRvZG8gRE9NXG4gICAgbGV0IHRvZG9ET00gPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIC8vIGdldCB0aGUgdG9kbyBvYmplY3RcbiAgICBsZXQgdG9kb0VkaXQgPSBlLmN1cnJlbnRUYXJnZXQubmV4dFNpYmxpbmcuY29ycmVzcG9uZGluZ1RvRG87XG5cbiAgICBsZXQgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8tZWRpdCcpO1xuICAgIHRvZG9ET00uYWZ0ZXIoZWRpdEZvcm0pO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10b2RvLWVkaXQgaW5wdXQ6Zmlyc3QtY2hpbGQnKTtcbiAgICB0aXRsZS52YWx1ZSA9IHRvZG9FZGl0LnRpdGxlO1xuICAgIGxldCBkZXNjID0gdGl0bGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGRlc2MudmFsdWUgPSB0b2RvRWRpdC5kZXNjcmlwdGlvbjtcbiAgICBsZXQgZHVlRGF0ZSA9IGRlc2MubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZS52YWx1ZSA9IHRvZG9FZGl0LmR1ZURhdGU7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LWVkaXQnKTtcbiAgICBwcmlvcml0eS52YWx1ZSA9IHRvZG9FZGl0LnByaW9yaXR5O1xuICAgIGVkaXRGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiBcbiAgICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10b2RvLWVkaXQgLmJ1dHRvbnMgPiAucmVkJyk7XG4gICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdG9kby1lZGl0IC5idXR0b25zID4gLmdyZWVuJyk7XG4gICAgY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSBleGl0RWRpdEZvcm07XG5cbiAgICBzdWJtaXRCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjaGVjayB2YWx1ZXNcbiAgICAgICAgaWYgKHRpdGxlLnZhbHVlID09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUYXNrIG5hbWUgY2FuJ3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICB0aXRsZS52YWx1ZSA9IHRvZG9FZGl0LnRpdGxlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRlc2MudmFsdWUgPT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkRlc2NyaXB0aW9uIGNhbid0IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgZGVzYy52YWx1ZSA9IHRvZG9FZGl0LmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGR1ZURhdGUudmFsdWUgPT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydChcIkR1ZSBkYXRlIGNhbid0IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgZHVlRGF0ZS52YWx1ZSA9IHRvZG9FZGl0LmR1ZURhdGU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hhbmdlIHZhbHVlcyBpbiB0aGUgZGF0YSBzdHJ1Y3R1cmVcbiAgICAgICAgdG9kb0VkaXQudGl0bGUgPSB0aXRsZS52YWx1ZTtcbiAgICAgICAgdG9kb0VkaXQuZGVzY3JpcHRpb24gPSBkZXNjLnZhbHVlO1xuICAgICAgICB0b2RvRWRpdC5kdWVEYXRlID0gZHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgdG9kb0VkaXQucHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZTtcbiAgICAgICAgZXhpdEVkaXRGb3JtKCk7XG5cbiAgICAgICAgdG9kb0RPTS5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS50ZXh0Q29udGVudCA9IHRpdGxlLnZhbHVlO1xuICAgICAgICB0b2RvRE9NLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gZGVzYy52YWx1ZTtcbiAgICAgICAgdG9kb0RPTS5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUnKS50ZXh0Q29udGVudCA9IGR1ZURhdGUudmFsdWU7XG4gICAgICAgIC8vIGNoYW5nZSBwcmlvcml0eSBjbGFzc1xuICAgICAgICB0b2RvRE9NLmNsYXNzTmFtZSA9IHRvZG9ET00uY2xhc3NOYW1lLnJlcGxhY2UoIC9wcmlvcml0eS0oWzEtNF0pLyAsIGBwcmlvcml0eS0ke3RvZG9FZGl0LnByaW9yaXR5fWAgKVxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBlZGl0VG9EbyxcbiAgICBleGl0RWRpdEZvcm1cbn0gIiwiaW1wb3J0IHsgZXhpdFRvRG9JbnB1dCB9IGZyb20gXCIuL2NyZWF0ZVRvRG9cIjtcbmltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4uL21vZHVsZXMvcHJvamVjdHNcIjtcbmltcG9ydCB7IGNyZWF0ZVRvRG9ET00gfSBmcm9tIFwiLi9jcmVhdGVUb0RvXCI7XG5pbXBvcnQgeyBkZWxldGVUb0RvIH0gZnJvbSBcIi4vZGVsZXRlVG9Eb1wiO1xuaW1wb3J0IHsgZXhpdEVkaXRGb3JtIH0gZnJvbSBcIi4vZWRpdFRvRG9cIjtcblxuY29uc3QgY3JlYXRlVGl0bGUgPSAobmFtZSkgPT4ge1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9IG5hbWU7XG59XG5cbmNvbnN0IHNob3dJbmJveCA9ICgpID0+IHtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBcIkluYm94XCI7XG4gICAgXG4gICAgLy8gY3JlYXRlIHRoZSB0aXRsZVxuICAgIGNyZWF0ZVRpdGxlKHByb2plY3ROYW1lKTtcbiAgICAvLyBpbiBjYXNlIHRoZSB0b2RvLWNyZWF0b3Igd2FzIG9wZW5lZCBieSBhbnkgb3RoZXIgcHJvamVjdFxuICAgIGV4aXRUb0RvSW5wdXQoKTtcbiAgICAvLyBpbiBjYXNlIHRoZSB0b2RvLWVkaXRvciB3YXMgb3BlbmVkIGJ5IGFueSBvdGhlciBwcm9qZWN0XG4gICAgZXhpdEVkaXRGb3JtKCk7XG5cbiAgICAvLyBjbGVhciBhbnl0aGluZyBlbHNlIGluIHRoZSBjb250ZW50XG4gICAgbGV0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbiAgICB0b2RvQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgXG4gICAgLy8gc2hvdyBBTEwgdG9kb3NcbiAgICBmb3IgKGNvbnN0IHByb2plY3QgaW4gUHJvamVjdHMucHJvamVjdExpc3QpIHtcbiAgICAgICAgLy8gcHJvamVjdCBoYXMgdGhlIHByb2plY3QgbmFtZXNcbiAgICAgICAgZm9yIChjb25zdCB0b2RvIG9mIFByb2plY3RzLnByb2plY3RMaXN0W3Byb2plY3RdLnRvZG9zKSB7XG4gICAgICAgICAgICBsZXQgbmV3VG9EbyA9IGNyZWF0ZVRvRG9ET00odG9kbyk7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvRG8pO1xuICAgICAgICAgICAgbmV3VG9Eby5xdWVyeVNlbGVjdG9yKCcuZWRpdHMnKS5sYXN0Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUb0RvKTtcbiAgICAgICAgICAgIG5ld1RvRG8ucXVlcnlTZWxlY3RvcignLmVkaXRzJykubGFzdENoaWxkLmNvcnJlc3BvbmRpbmdUb0RvID0gdG9kbzsgXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgc2hvd0luYm94XG59IiwiaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tIFwiLi4vbW9kdWxlcy9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgc2hvd1Byb2plY3RQYWdlIH0gZnJvbSBcIi4vcHJvamVjdFBhZ2VcIjtcblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChlKSA9PiB7XG4gICAgUHJvamVjdHMuZGVsZXRlUHJvamVjdChlLnRhcmdldC5pZCk7XG4gICAgcmVmcmVzaFByb2plY3QoKTtcbn1cblxuY29uc3QgcmVmcmVzaFByb2plY3QgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJykuY2hpbGRyZW47XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgICBsZXQgbmFtZSA9IHByb2plY3QucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50O1xuICAgICAgICBpZiAoIShuYW1lIGluIFByb2plY3RzLnByb2plY3RMaXN0KSkge1xuICAgICAgICAgICAgcHJvamVjdC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdGhpcyBpcyBjYWxsZWQgd2hlbiBzb21lb25lIGNsaWNrcyBvbiB0aGUgXCJBZGQgUHJvamVjdFwiIGJ1dHRvblxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBsZXQgYWRkUHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKTtcbiAgICBsZXQgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBzaG93Q29udHJvbHMgPSAoKSA9PiB7XG4gICAgICAgIGFkZFByb2plY3RFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG5cbiAgICBjb25zdCBleGl0Q29udHJvbHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0ID4gaW5wdXQnKTtcbiAgICAgICAgY29udGVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgYWRkUHJvamVjdEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBpbnB1dEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHNob3dDb250cm9scygpO1xuICAgIGxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QgPiAuZ3JlZW4nKTtcbiAgICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0ID4gLnJlZCcpO1xuXG4gICAgLy8gaWYgdXNlciBjYW5jZWxzIG1pZHdheVxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4aXRDb250cm9scyk7XG5cbiAgICAvLyB1c2VyIGFjdHVhbGx5IHN1Ym1pdHNcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0ID4gaW5wdXQnKTtcbiAgICAgICAgaWYgKGNvbnRlbnQudmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgICAgZXhpdENvbnRyb2xzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29udGVudC52YWx1ZSBpbiBQcm9qZWN0cy5wcm9qZWN0TGlzdCkge1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUHJvamVjdCBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgICAgICAgIGV4aXRDb250cm9scygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld1Byb2plY3ROYW1lID0gY29udGVudC52YWx1ZTtcbiAgICAgICAgLy8gdGhpcyBpcyB3aGVyZSB3ZSBoYXZlIHRvIGFkZCBhIG5ldyBwcm9qZWN0XG4gICAgICAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG5cbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gXCIuLi9zcmMvYXNzZXRzL3NpZGUtbmF2L3Byb2plY3QucG5nXCI7XG4gICAgICAgIGltYWdlLmFsdCA9IFwicHJvamVjdCBpY29uXCI7XG5cbiAgICAgICAgbGV0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjYW5jZWwuc3JjID0gXCIuLi9zcmMvYXNzZXRzL3NpZGUtbmF2L2NhbmNlbC5wbmdcIjtcbiAgICAgICAgY2FuY2VsLmFsdCA9IFwiZGVsZXRlIHByb2plY3RcIjtcbiAgICAgICAgY2FuY2VsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FuY2VsJyk7XG4gICAgICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgbmV3UHJvamVjdE5hbWUpO1xuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZGVsZXRlUHJvamVjdChlKSk7XG5cbiAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0TmFtZTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmQoXG4gICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBjYW5jZWxcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGlzIFwiZWxlbWVudFwiXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gc2hvd1Byb2plY3RQYWdlKGUsIHRydWUpKTtcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgICAgIGNvbnRlbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICBleGl0Q29udHJvbHMoKTtcblxuICAgICAgICBQcm9qZWN0cy5jcmVhdGVOZXdQcm9qZWN0KG5ld1Byb2plY3ROYW1lKTtcbiAgICB9KSAgICBcbn07XG5cbmV4cG9ydCB7XG4gICAgYWRkUHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIHJlZnJlc2hQcm9qZWN0XG59IiwiaW1wb3J0IHsgZXhpdFRvRG9JbnB1dCB9IGZyb20gXCIuL2NyZWF0ZVRvRG9cIjtcbmltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4uL21vZHVsZXMvcHJvamVjdHNcIjtcbmltcG9ydCB7IGNyZWF0ZVRvRG9ET00gfSBmcm9tIFwiLi9jcmVhdGVUb0RvXCI7XG5pbXBvcnQgeyBkZWxldGVUb0RvIH0gZnJvbSBcIi4vZGVsZXRlVG9Eb1wiO1xuaW1wb3J0IHsgZXhpdEVkaXRGb3JtIH0gZnJvbSBcIi4vZWRpdFRvRG9cIjtcblxuY29uc3QgY3JlYXRlVGl0bGUgPSAobmFtZSkgPT4ge1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9IG5hbWU7XG59XG5cbmNvbnN0IHNob3dQcm9qZWN0UGFnZSA9IChlLCBmbGFnKSA9PiB7XG4gICAgbGV0IHByb2plY3ROYW1lO1xuICAgIGlmIChmbGFnKSB7XG4gICAgICAgIHByb2plY3ROYW1lID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJvamVjdE5hbWUgPSBlO1xuICAgIH1cbiAgICBcblxuICAgIC8vIGNyZWF0ZSB0aGUgdGl0bGVcbiAgICBjcmVhdGVUaXRsZShwcm9qZWN0TmFtZSk7XG4gICAgLy8gaW4gY2FzZSB0aGUgdG9kby1jcmVhdG9yIHdhcyBvcGVuZWQgYnkgYW55IG90aGVyIHByb2plY3RcbiAgICBleGl0VG9Eb0lucHV0KCk7XG4gICAgLy8gaW4gY2FzZSB0aGUgdG9kby1lZGl0b3Igd2FzIG9wZW5lZCBieSBhbnkgb3RoZXIgcHJvamVjdFxuICAgIGV4aXRFZGl0Rm9ybSgpO1xuXG4gICAgLy8gc2hvdyBhbGwgdGhlIHRvLWRvcyB1bmRlciB0aGlzIHByb2plY3QgXG4gICAgbGV0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbiAgICAvLyBjbGVhciBhbnl0aGluZyBlbHNlIGZpcnN0XG4gICAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIFxuICAgIGZvciAoY29uc3QgdG9kbyBvZiBQcm9qZWN0cy5wcm9qZWN0TGlzdFtwcm9qZWN0TmFtZV0udG9kb3MpIHtcbiAgICAgICAgbGV0IG5ld1RvRG8gPSBjcmVhdGVUb0RvRE9NKHRvZG8pO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvRG8pO1xuICAgICAgICBuZXdUb0RvLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0cycpLmxhc3RDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRvRG8pO1xuICAgICAgICBuZXdUb0RvLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0cycpLmxhc3RDaGlsZC5jb3JyZXNwb25kaW5nVG9EbyA9IHRvZG87IFxuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBzaG93UHJvamVjdFBhZ2Vcbn0iLCJjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICAvLyBlYWNoIHByb2plY3QgaGFzIGEgbmFtZSBhbmQgYSBsaXN0IG9mIHRvZG9zXG4gICAgY29uc3QgdG9kb3MgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRvUHJvamVjdCA9IHRvZG8gPT4ge1xuICAgICAgICB0b2Rvcy5wdXNoKHRvZG8pXG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUZyb21Qcm9qZWN0ID0gdG9kbyA9PiB7XG4gICAgICAgIHZhciBpbmRleCA9IHRvZG9zLmluZGV4T2YodG9kbyk7XG4gICAgICAgIHZhciByZW1vdmVkVG9kbyA9IHRvZG9zW2luZGV4XTtcblxuICAgICAgICBpZiAoaW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbW92ZWRUb2RvO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBuYW1lLCB0b2RvcywgYWRkVG9Qcm9qZWN0LCByZW1vdmVGcm9tUHJvamVjdCB9O1xufTtcblxuY29uc3QgUHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IHt9O1xuICAgIHByb2plY3RMaXN0WydJbmJveCddID0gY3JlYXRlUHJvamVjdCgnSW5ib3gnKTtcblxuICAgIGNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAobmFtZSkgPT4ge1xuICAgICAgICBwcm9qZWN0TGlzdFtuYW1lXSA9IGNyZWF0ZVByb2plY3QobmFtZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgICAgICBkZWxldGUgcHJvamVjdExpc3RbbmFtZV07XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3RMaXN0LFxuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LFxuICAgICAgICBkZWxldGVQcm9qZWN0XG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7XG4gICAgUHJvamVjdHNcbn07IiwiY29uc3QgdG9EbyA9ICgoKSA9PiB7XG4gICAgbGV0IHRpdGxlO1xuICAgIGxldCBkZXNjcmlwdGlvbjtcbiAgICBsZXQgZHVlRGF0ZTtcbiAgICBsZXQgcHJpb3JpdHk7XG4gICAgbGV0IHByb2plY3Q7XG4gICAgbGV0IGRvbmU7XG5cbiAgICBjb25zdCBjcmVhdGVUb0RvID0gKG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHksIG5ld1Byb2plY3QpID0+IHtcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICAgICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgICAgIHByb2plY3QgPSBuZXdQcm9qZWN0O1xuICAgICAgICBkb25lID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZSwgXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICBkdWVEYXRlLCBcbiAgICAgICAgICAgIHByaW9yaXR5LCBcbiAgICAgICAgICAgIHByb2plY3QsXG4gICAgICAgICAgICBkb25lXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8vIHNldHRlcnMgXG4gICAgY29uc3QgY2hhbmdlVGl0bGUgPSBuZXdUaXRsZSA9PiB7XG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoYW5nZURlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb24gPT4ge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGFuZ2VEdWVEYXRlID0gbmV3RHVlRGF0ZSA9PiB7XG4gICAgICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IG5ld1ByaW9yaXR5ID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgY3JlYXRlVG9EbyxcbiAgICAgICAgY2hhbmdlVGl0bGUsXG4gICAgICAgIGNoYW5nZURlc2NyaXB0aW9uLFxuICAgICAgICBjaGFuZ2VEdWVEYXRlLFxuICAgICAgICBjaGFuZ2VQcmlvcml0eVxuICAgIH07XG59KSgpO1xuXG5leHBvcnQge1xuICAgIHRvRG9cbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnLi9kb20tbWFuaXB1bGF0aW9uL3Byb2plY3RDb250cm9scyc7XG5pbXBvcnQgeyBjcmVhdGVUb0RvSW5wdXQgfSBmcm9tICcuL2RvbS1tYW5pcHVsYXRpb24vY3JlYXRlVG9Ebyc7XG5pbXBvcnQgeyBzaG93SW5ib3ggfSBmcm9tICcuL2RvbS1tYW5pcHVsYXRpb24vaW5ib3hQYWdlJztcblxuLy8gV2Ugc3RhcnQgYnkgc2hvd2luZyB0aGUgdXNlciB0aGUgaW5ib3ggcGFnZVxuc2hvd0luYm94KCk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRvZG9zJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUb0RvSW5wdXQpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtbmF2JykuZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBzaG93SW5ib3goKVxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9