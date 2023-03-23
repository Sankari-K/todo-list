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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --main: #333;\n    --content: #eee;\n    --nav: #ddd;\n    --nav-dark: #ccc;\n    --green: #77dd77;\n    --red: #ff6961;\n    --cancel-display: none;\n\n}\n\nbody {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Roboto', sans-serif;\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n}\n\nimg {\n    height: 25px;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n#header {\n    display: flex;\n    align-items: center;\n    gap: 2px;\n    font-size: 42px;\n    background-color: var(--main);\n    padding: 20px 10px;\n    font-weight: 600;\n    font-family: 'Yusei Magic', sans-serif; \n    color: var(--content);\n}\n\n#header img {\n    height: 60px;\n}\n\n.side-nav {\n    padding: 20px;\n    font-size: 16px;\n    background-color: var(--nav);\n}\n\n.side-nav img {\n    height: 30px;\n}\n\n.side-nav > div {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    gap: 2px;\n    border-radius: 7px;\n}\n\n.side-nav .nav-item:hover {\n    background-color: var(--nav-dark);\n    cursor: pointer;\n}\n\n.nav-item {\n    margin: 5px 0px;\n}\n\n\n.main-content {\n    flex-grow: 1;\n    display: grid;\n    grid-template-columns: minmax(300px, 1fr) 6fr;\n    background-color: var(--content);\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 10px;\n    justify-content: center;\n    background-color: var(--main);\n    color: var(--content);\n}\n\nfooter img, #header img {\n    filter: invert(95%) sepia(0%) saturate(333%) hue-rotate(147deg) brightness(98%) contrast(85%);\n}\n\ndiv.project-container {\n    margin-top: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n#add-project {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    width: 100%;\n    padding: 5px;\n    border-radius: 7px;\n}\n\n.project-container > span {\n    font-size: larger;\n    font-weight: 500;\n}\n\n#new-project input {\n    width: 100%;\n    height: 25px;\n    border-radius: 7px;\n    border: 1px solid var(--main);\n    font-size: 16px;\n    padding: 5px;\n    margin: 0 0 10px 0;\n}\n\n#new-project button {\n    width: 100px;\n    font-size: 16px;\n    margin: 0 5px;\n    padding: 3px;\n    border-radius: 7px;\n}\n\n#new-project {\n    display: none; /* flex */\n    flex-wrap: wrap;\n}\n\n.green {\n    background-color: var(--green);\n}\n\n.red {\n    background-color: var(--red);\n}\n\n#projects {\n    width: 100%;\n}\n\n#projects > div {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    width: 100%;\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 7px;\n}\n\n#projects > div:hover {\n    background-color: var(--nav-dark);\n    --cancel-display: block;\n}\n\n.cancel {\n    margin-left: auto;\n    margin-right: 5px;\n    display: var(--cancel-display);\n}\n\n.content {\n    padding: 50px 15vw;\n}\n\n.content > span {\n    font-size: 30px;\n}\n\n#create-todos {\n    margin: 20px 0;\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    border-radius: 7px;\n    gap: 10px;\n}\n\n#create-todos:hover {\n    background-color: var(--nav-dark);\n    cursor: pointer;\n}\n\n.todo {\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n    border-radius: 7px;\n    background-color: aqua;\n    padding: 17px;\n    margin: 5px;\n    background: linear-gradient( to left, #ffd8c9, #ffd8c9 7px, var(--nav) 7px, var(--nav) 100% );\n}\n\n.todo > div {\n    flex-wrap: wrap;\n    display: flex;\n    gap: 10px;\n    align-items: flex-end;\n}\n.todo .title {\n    font-size: 18px;\n    font-weight: 500;\n    margin-right: auto;\n}\n/* .todo:hover {\n    background: linear-gradient( to right, #ffd8c9, #ffd8c9 7px, var(--nav) 7px, var(--nav) 100% );\n} */\n\n.todo .edits {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.todo .edits > img:hover {\n    cursor: pointer;\n    filter: invert(54%) sepia(21%) saturate(1624%) hue-rotate(314deg) brightness(100%) contrast(102%);\n}\n\n.due-date {\n    margin-right: auto;\n}\n\n#new-todo {\n    border: 1px solid var(--main);\n    padding: 10px;\n    border-radius: 7px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    margin: 10px 0;\n    display: none;\n}\n\n#new-todo input {\n    outline: 0;\n    border-width: 0 0;\n    background-color: var(--content);\n    font-size: 16px;\n}\n\n#new-todo select {\n    background-color: var(--content);\n    padding: 3px;\n    border-radius: 7px;\n}\n\n#new-todo button {\n    padding: 5px;\n    font-size: 16px;\n    border-radius: 7px;\n    width: minmax(200px, 50%);\n    align-self: center;\n}\n\n#new-todo .buttons {\n    display: flex;\n    gap: 5px;\n    justify-content: flex-end;\n}\n\n#new-todo input:first-child {\n    font-size: 20px;\n}\n\n.todo .description {\n    font-style: italic;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300&family=Yusei+Magic&display=swap');\n\n:root {\n    --main: #333;\n    --content: #eee;\n    --nav: #ddd;\n    --nav-dark: #ccc;\n    --green: #77dd77;\n    --red: #ff6961;\n    --cancel-display: none;\n\n}\n\nbody {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Roboto', sans-serif;\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n}\n\nimg {\n    height: 25px;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n#header {\n    display: flex;\n    align-items: center;\n    gap: 2px;\n    font-size: 42px;\n    background-color: var(--main);\n    padding: 20px 10px;\n    font-weight: 600;\n    font-family: 'Yusei Magic', sans-serif; \n    color: var(--content);\n}\n\n#header img {\n    height: 60px;\n}\n\n.side-nav {\n    padding: 20px;\n    font-size: 16px;\n    background-color: var(--nav);\n}\n\n.side-nav img {\n    height: 30px;\n}\n\n.side-nav > div {\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    gap: 2px;\n    border-radius: 7px;\n}\n\n.side-nav .nav-item:hover {\n    background-color: var(--nav-dark);\n    cursor: pointer;\n}\n\n.nav-item {\n    margin: 5px 0px;\n}\n\n\n.main-content {\n    flex-grow: 1;\n    display: grid;\n    grid-template-columns: minmax(300px, 1fr) 6fr;\n    background-color: var(--content);\n}\n\nfooter {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 10px;\n    justify-content: center;\n    background-color: var(--main);\n    color: var(--content);\n}\n\nfooter img, #header img {\n    filter: invert(95%) sepia(0%) saturate(333%) hue-rotate(147deg) brightness(98%) contrast(85%);\n}\n\ndiv.project-container {\n    margin-top: 40px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\n#add-project {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    width: 100%;\n    padding: 5px;\n    border-radius: 7px;\n}\n\n.project-container > span {\n    font-size: larger;\n    font-weight: 500;\n}\n\n#new-project input {\n    width: 100%;\n    height: 25px;\n    border-radius: 7px;\n    border: 1px solid var(--main);\n    font-size: 16px;\n    padding: 5px;\n    margin: 0 0 10px 0;\n}\n\n#new-project button {\n    width: 100px;\n    font-size: 16px;\n    margin: 0 5px;\n    padding: 3px;\n    border-radius: 7px;\n}\n\n#new-project {\n    display: none; /* flex */\n    flex-wrap: wrap;\n}\n\n.green {\n    background-color: var(--green);\n}\n\n.red {\n    background-color: var(--red);\n}\n\n#projects {\n    width: 100%;\n}\n\n#projects > div {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    width: 100%;\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 7px;\n}\n\n#projects > div:hover {\n    background-color: var(--nav-dark);\n    --cancel-display: block;\n}\n\n.cancel {\n    margin-left: auto;\n    margin-right: 5px;\n    display: var(--cancel-display);\n}\n\n.content {\n    padding: 50px 15vw;\n}\n\n.content > span {\n    font-size: 30px;\n}\n\n#create-todos {\n    margin: 20px 0;\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    border-radius: 7px;\n    gap: 10px;\n}\n\n#create-todos:hover {\n    background-color: var(--nav-dark);\n    cursor: pointer;\n}\n\n.todo {\n    display: flex;\n    flex-direction: column;\n    gap: 7px;\n    border-radius: 7px;\n    background-color: aqua;\n    padding: 17px;\n    margin: 5px;\n    background: linear-gradient( to left, #ffd8c9, #ffd8c9 7px, var(--nav) 7px, var(--nav) 100% );\n}\n\n.todo > div {\n    flex-wrap: wrap;\n    display: flex;\n    gap: 10px;\n    align-items: flex-end;\n}\n.todo .title {\n    font-size: 18px;\n    font-weight: 500;\n    margin-right: auto;\n}\n/* .todo:hover {\n    background: linear-gradient( to right, #ffd8c9, #ffd8c9 7px, var(--nav) 7px, var(--nav) 100% );\n} */\n\n.todo .edits {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n}\n\n.todo .edits > img:hover {\n    cursor: pointer;\n    filter: invert(54%) sepia(21%) saturate(1624%) hue-rotate(314deg) brightness(100%) contrast(102%);\n}\n\n.due-date {\n    margin-right: auto;\n}\n\n#new-todo {\n    border: 1px solid var(--main);\n    padding: 10px;\n    border-radius: 7px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    margin: 10px 0;\n    display: none;\n}\n\n#new-todo input {\n    outline: 0;\n    border-width: 0 0;\n    background-color: var(--content);\n    font-size: 16px;\n}\n\n#new-todo select {\n    background-color: var(--content);\n    padding: 3px;\n    border-radius: 7px;\n}\n\n#new-todo button {\n    padding: 5px;\n    font-size: 16px;\n    border-radius: 7px;\n    width: minmax(200px, 50%);\n    align-self: center;\n}\n\n#new-todo .buttons {\n    display: flex;\n    gap: 5px;\n    justify-content: flex-end;\n}\n\n#new-todo input:first-child {\n    font-size: 20px;\n}\n\n.todo .description {\n    font-style: italic;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "createToDoInput": () => (/* binding */ createToDoInput),
/* harmony export */   "exitToDoInput": () => (/* binding */ exitToDoInput)
/* harmony export */ });
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/projects */ "./src/modules/projects.js");
/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/todo */ "./src/modules/todo.js");



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
    todoElement.setAttribute('class', 'todo');

    let header = document.createElement('div');
    let title = document.createElement('span');
    title.setAttribute('class', 'title');
    title.textContent = todo.title;
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
        console.log("$$#$434");
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


const createTitle = (name) => {
    let contentContainer = document.querySelector('.content');
    contentContainer.querySelector('span').textContent = name;
}

const showProjectPage = (e) => {
    let projectName = e.target.innerText;
    console.log(projectName);

    // create the title
    createTitle(projectName);
    // in case the todo-creator was opened by any other project
    (0,_createToDo__WEBPACK_IMPORTED_MODULE_0__.exitToDoInput)();

    // show all the to-dos under this project 
    let todoContainer = document.querySelector('.todos');
    todoContainer.innerHTML = "";
    
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

    const createToDo = (newTitle, newDescription, newDueDate, newPriority, newProject) => {
        title = newTitle;
        description = newDescription;
        dueDate = newDueDate;
        priority = newPriority;
        project = newProject;
        return {
            title, 
            description, 
            dueDate, 
            priority, 
            project
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxvQkFBb0IsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVQ25ERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMkM7QUFDQTs7QUFFaEUsaUVBQWlFLHlFQUFVO0FBQzNFLGtFQUFrRSx5RUFBZSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20tbWFuaXB1bGF0aW9uL2NyZWF0ZVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS1tYW5pcHVsYXRpb24vcHJvamVjdENvbnRyb2xzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20tbWFuaXB1bGF0aW9uL3Byb2plY3RQYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDsxLDEwMDsxLDMwMCZmYW1pbHk9WXVzZWkrTWFnaWMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLW1haW46ICMzMzM7XFxuICAgIC0tY29udGVudDogI2VlZTtcXG4gICAgLS1uYXY6ICNkZGQ7XFxuICAgIC0tbmF2LWRhcms6ICNjY2M7XFxuICAgIC0tZ3JlZW46ICM3N2RkNzc7XFxuICAgIC0tcmVkOiAjZmY2OTYxO1xcbiAgICAtLWNhbmNlbC1kaXNwbGF5OiBub25lO1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaW1nIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDJweDtcXG4gICAgZm9udC1zaXplOiA0MnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogJ1l1c2VpIE1hZ2ljJywgc2Fucy1zZXJpZjsgXFxuICAgIGNvbG9yOiB2YXIoLS1jb250ZW50KTtcXG59XFxuXFxuI2hlYWRlciBpbWcge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5zaWRlLW5hdiB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2KTtcXG59XFxuXFxuLnNpZGUtbmF2IGltZyB7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnNpZGUtbmF2ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBnYXA6IDJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4uc2lkZS1uYXYgLm5hdi1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWRhcmspO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXYtaXRlbSB7XFxuICAgIG1hcmdpbjogNXB4IDBweDtcXG59XFxuXFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzAwcHgsIDFmcikgNmZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50KTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XFxuICAgIGNvbG9yOiB2YXIoLS1jb250ZW50KTtcXG59XFxuXFxuZm9vdGVyIGltZywgI2hlYWRlciBpbWcge1xcbiAgICBmaWx0ZXI6IGludmVydCg5NSUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgzMzMlKSBodWUtcm90YXRlKDE0N2RlZykgYnJpZ2h0bmVzcyg5OCUpIGNvbnRyYXN0KDg1JSk7XFxufVxcblxcbmRpdi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jYWRkLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIgPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNuZXctcHJvamVjdCBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbik7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XFxufVxcblxcbiNuZXctcHJvamVjdCBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbiNuZXctcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIGZsZXggKi9cXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZ3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxufVxcblxcbi5yZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4jcHJvamVjdHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbn1cXG5cXG4jcHJvamVjdHMgPiBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtZGFyayk7XFxuICAgIC0tY2FuY2VsLWRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY2FuY2VsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICBkaXNwbGF5OiB2YXIoLS1jYW5jZWwtZGlzcGxheSk7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogNTBweCAxNXZ3O1xcbn1cXG5cXG4uY29udGVudCA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbiNjcmVhdGUtdG9kb3Mge1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2NyZWF0ZS10b2Rvczpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1kYXJrKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICAgIHBhZGRpbmc6IDE3cHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHRvIGxlZnQsICNmZmQ4YzksICNmZmQ4YzkgN3B4LCB2YXIoLS1uYXYpIDdweCwgdmFyKC0tbmF2KSAxMDAlICk7XFxufVxcblxcbi50b2RvID4gZGl2IHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuLnRvZG8gLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi8qIC50b2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCB0byByaWdodCwgI2ZmZDhjOSwgI2ZmZDhjOSA3cHgsIHZhcigtLW5hdikgN3B4LCB2YXIoLS1uYXYpIDEwMCUgKTtcXG59ICovXFxuXFxuLnRvZG8gLmVkaXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnRvZG8gLmVkaXRzID4gaW1nOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWx0ZXI6IGludmVydCg1NCUpIHNlcGlhKDIxJSkgc2F0dXJhdGUoMTYyNCUpIGh1ZS1yb3RhdGUoMzE0ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMiUpO1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbiNuZXctdG9kbyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4pO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI25ldy10b2RvIGlucHV0IHtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQpO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiNuZXctdG9kbyBzZWxlY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50KTtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbiNuZXctdG9kbyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICB3aWR0aDogbWlubWF4KDIwMHB4LCA1MCUpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNuZXctdG9kbyAuYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4jbmV3LXRvZG8gaW5wdXQ6Zmlyc3QtY2hpbGQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50b2RvIC5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHNDQUFzQztJQUN0Qyxx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QXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzEsMTAwOzEsMzAwJmZhbWlseT1ZdXNlaStNYWdpYyZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbjogIzMzMztcXG4gICAgLS1jb250ZW50OiAjZWVlO1xcbiAgICAtLW5hdjogI2RkZDtcXG4gICAgLS1uYXYtZGFyazogI2NjYztcXG4gICAgLS1ncmVlbjogIzc3ZGQ3NztcXG4gICAgLS1yZWQ6ICNmZjY5NjE7XFxuICAgIC0tY2FuY2VsLWRpc3BsYXk6IG5vbmU7XFxuXFxufVxcblxcbmJvZHkge1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbWcge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnB4O1xcbiAgICBmb250LXNpemU6IDQycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4pO1xcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnWXVzZWkgTWFnaWMnLCBzYW5zLXNlcmlmOyBcXG4gICAgY29sb3I6IHZhcigtLWNvbnRlbnQpO1xcbn1cXG5cXG4jaGVhZGVyIGltZyB7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYpO1xcbn1cXG5cXG4uc2lkZS1uYXYgaW1nIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uc2lkZS1uYXYgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdhcDogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5zaWRlLW5hdiAubmF2LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtZGFyayk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1pdGVtIHtcXG4gICAgbWFyZ2luOiA1cHggMHB4O1xcbn1cXG5cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzMDBweCwgMWZyKSA2ZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbnRlbnQpO1xcbn1cXG5cXG5mb290ZXIgaW1nLCAjaGVhZGVyIGltZyB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDk1JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMzMyUpIGh1ZS1yb3RhdGUoMTQ3ZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoODUlKTtcXG59XFxuXFxuZGl2LnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNhZGQtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciA+IHNwYW4ge1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IGlucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluKTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuI25ldy1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogbm9uZTsgLyogZmxleCAqL1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5ncmVlbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuXFxuLnJlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbiNwcm9qZWN0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdHMgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxufVxcblxcbiNwcm9qZWN0cyA+IGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1kYXJrKTtcXG4gICAgLS1jYW5jZWwtZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jYW5jZWwge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIGRpc3BsYXk6IHZhcigtLWNhbmNlbC1kaXNwbGF5KTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA1MHB4IDE1dnc7XFxufVxcblxcbi5jb250ZW50ID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuI2NyZWF0ZS10b2RvcyB7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jY3JlYXRlLXRvZG9zOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWRhcmspO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gICAgcGFkZGluZzogMTdweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggdG8gbGVmdCwgI2ZmZDhjOSwgI2ZmZDhjOSA3cHgsIHZhcigtLW5hdikgN3B4LCB2YXIoLS1uYXYpIDEwMCUgKTtcXG59XFxuXFxuLnRvZG8gPiBkaXYge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4udG9kbyAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLyogLnRvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIHRvIHJpZ2h0LCAjZmZkOGM5LCAjZmZkOGM5IDdweCwgdmFyKC0tbmF2KSA3cHgsIHZhcigtLW5hdikgMTAwJSApO1xcbn0gKi9cXG5cXG4udG9kbyAuZWRpdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4udG9kbyAuZWRpdHMgPiBpbWc6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDU0JSkgc2VwaWEoMjElKSBzYXR1cmF0ZSgxNjI0JSkgaHVlLXJvdGF0ZSgzMTRkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTAyJSk7XFxufVxcblxcbi5kdWUtZGF0ZSB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuI25ldy10b2RvIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbik7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbmV3LXRvZG8gaW5wdXQge1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBib3JkZXItd2lkdGg6IDAgMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudCk7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuI25ldy10b2RvIHNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQpO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG59XFxuXFxuI25ldy10b2RvIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIHdpZHRoOiBtaW5tYXgoMjAwcHgsIDUwJSk7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI25ldy10b2RvIC5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiNuZXctdG9kbyBpbnB1dDpmaXJzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRvZG8gLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tIFwiLi4vbW9kdWxlcy9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgdG9EbyB9IGZyb20gXCIuLi9tb2R1bGVzL3RvZG9cIjtcblxuY29uc3QgZXhpdFRvRG9JbnB1dCA9ICgpID0+IHtcbiAgICBsZXQgYWRkVG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdG9kb3MnKTtcbiAgICBsZXQgY3JlYXRlVG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdG9kbycpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10b2RvIGlucHV0OmZpcnN0LWNoaWxkJyk7XG4gICAgbGV0IGRlc2MgPSB0aXRsZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgbGV0IGR1ZURhdGUgPSBkZXNjLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuXG4gICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgIGRlc2MudmFsdWUgPSBcIlwiO1xuICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgIHByaW9yaXR5LnNlbGVjdGVkSW5kZXggPSAwO1xuXG4gICAgYWRkVG9Eby5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgY3JlYXRlVG9Eby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmNvbnN0IGNyZWF0ZVRvRG9ET00gPSAodG9kbykgPT4ge1xuICAgIGxldCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9FbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kbycpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHByb2plY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0Jyk7XG4gICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHRvZG8ucHJvamVjdDtcbiAgICBoZWFkZXIuYXBwZW5kKFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgcHJvamVjdFxuICAgIClcblxuICAgIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlc2Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2MudGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuXG4gICAgbGV0IGVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdHMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0cycpO1xuXG4gICAgbGV0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkdWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkdWUtZGF0ZScpO1xuICAgIGR1ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICBsZXQgZWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGVkaXRJbWcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2NvbnRlbnQvZWRpdC5wbmdcIjtcbiAgICBlZGl0SW1nLmFsdCA9IFwiZWRpdC1pY29uXCI7XG4gICAgbGV0IGRlbGV0ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRlbGV0ZUltZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvY29udGVudC9kZWxldGUucG5nXCI7XG4gICAgZGVsZXRlSW1nLmFsdCA9IFwiZGVsZXRlLWljb25cIjtcblxuICAgIGVkaXRzLmFwcGVuZChcbiAgICAgICAgZHVlLFxuICAgICAgICBlZGl0SW1nLFxuICAgICAgICBkZWxldGVJbWdcbiAgICApO1xuXG4gICAgdG9kb0VsZW1lbnQuYXBwZW5kKFxuICAgICAgICBoZWFkZXIsXG4gICAgICAgIGRlc2MsXG4gICAgICAgIGVkaXRzXG4gICAgKTtcbiAgICByZXR1cm4gdG9kb0VsZW1lbnQ7XG59XG5cbmNvbnN0IGNyZWF0ZVRvRG9JbnB1dCA9ICgpID0+IHtcbiAgICAvLyBET00gc3R1ZmYgZmlyc3QgLSBoaWRlIHRoZSBjcmVhdGUgYnV0dG9uLFxuICAgIC8vIHNob3cgdGhlIGlucHV0IGZvcm1cbiAgICBsZXQgYWRkVG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdG9kb3MnKTtcbiAgICBsZXQgY3JlYXRlVG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdG9kbycpO1xuXG4gICAgYWRkVG9Eby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY3JlYXRlVG9Eby5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8gaW5wdXQ6Zmlyc3QtY2hpbGQnKTtcbiAgICBsZXQgZGVzYyA9IHRpdGxlLm5leHRFbGVtZW50U2libGluZztcbiAgICBsZXQgZHVlRGF0ZSA9IGRlc2MubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgXG4gICAgLy8gbm93LCBhZGQgZXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgc3VibWl0IGFuZCBjYW5jZWwgYnV0dG9uXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10b2RvIC5yZWQnKS5vbmNsaWNrID0gZXhpdFRvRG9JbnB1dDtcblxuICAgIGZ1bmN0aW9uIGdldFRvRG9EZXRhaWxzKCkge1xuICAgICAgICAvLyB2YWxpZGF0ZSBmb3JtXG4gICAgICAgIGNvbnNvbGUubG9nKFwiJCQjJDQzNFwiKTtcbiAgICAgICAgaWYgKHRpdGxlLnZhbHVlID09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUYXNrIG5hbWUgY2FuJ3QgYmUgZW1wdHlcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzYy52YWx1ZSA9PSAnJykge1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRGVzY3JpcHRpb24gY2FuJ3QgYmUgZW1wdHlcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZHVlRGF0ZS52YWx1ZSA9PSAnJykge1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiRHVlIGRhdGUgY2FuJ3QgYmUgZW1wdHlcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBUb2RvIGNhbiBiZSBjcmVhdGVkIG5vd1xuICAgICAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQgPiBzcGFuJykudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBsZXQgdG9kbyA9IHRvRG8uY3JlYXRlVG9EbyhcbiAgICAgICAgICAgICAgICB0aXRsZS52YWx1ZSwgXG4gICAgICAgICAgICAgICAgZGVzYy52YWx1ZSwgXG4gICAgICAgICAgICAgICAgZHVlRGF0ZS52YWx1ZSwgXG4gICAgICAgICAgICAgICAgcHJpb3JpdHkudmFsdWUsIFxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gYWRkIHRoZSB0b2RvIHRvIHRoZSBwcm9qZWN0IGRhdGEgc3RydWN0dXJlXG4gICAgICAgICAgICBQcm9qZWN0cy5wcm9qZWN0TGlzdFtwcm9qZWN0TmFtZV0uYWRkVG9Qcm9qZWN0KHRvZG8pO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSB0b2RvIERPTSBzdHJ1Y3R1cmUgYW5kIGFwcGVuZCB0byBleGlzdGluZyBlbGVtZW50c1xuICAgICAgICAgICAgbGV0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbiAgICAgICAgICAgIHRvRG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9Eb0RPTSh0b2RvKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGV4aXRUb0RvSW5wdXQoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIC8vIGZvciB0aGUgc3VibWl0IGJ1dHRvbiBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8gLmdyZWVuJykub25jbGljayA9IGdldFRvRG9EZXRhaWxzO1xufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZVRvRG9JbnB1dCxcbiAgICBleGl0VG9Eb0lucHV0XG59IiwiaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tIFwiLi4vbW9kdWxlcy9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgc2hvd1Byb2plY3RQYWdlIH0gZnJvbSBcIi4vcHJvamVjdFBhZ2VcIjtcblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChlKSA9PiB7XG4gICAgUHJvamVjdHMuZGVsZXRlUHJvamVjdChlLnRhcmdldC5pZCk7XG4gICAgcmVmcmVzaFByb2plY3QoKTtcbn1cblxuY29uc3QgcmVmcmVzaFByb2plY3QgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJykuY2hpbGRyZW47XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgICBsZXQgbmFtZSA9IHByb2plY3QucXVlcnlTZWxlY3Rvcignc3BhbicpLnRleHRDb250ZW50O1xuICAgICAgICBpZiAoIShuYW1lIGluIFByb2plY3RzLnByb2plY3RMaXN0KSkge1xuICAgICAgICAgICAgcHJvamVjdC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdGhpcyBpcyBjYWxsZWQgd2hlbiBzb21lb25lIGNsaWNrcyBvbiB0aGUgXCJBZGQgUHJvamVjdFwiIGJ1dHRvblxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBsZXQgYWRkUHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKTtcbiAgICBsZXQgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBzaG93Q29udHJvbHMgPSAoKSA9PiB7XG4gICAgICAgIGFkZFByb2plY3RFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG5cbiAgICBjb25zdCBleGl0Q29udHJvbHMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0ID4gaW5wdXQnKTtcbiAgICAgICAgY29udGVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgYWRkUHJvamVjdEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBpbnB1dEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHNob3dDb250cm9scygpO1xuICAgIGxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QgPiAuZ3JlZW4nKTtcbiAgICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0ID4gLnJlZCcpO1xuXG4gICAgLy8gaWYgdXNlciBjYW5jZWxzIG1pZHdheVxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4aXRDb250cm9scyk7XG5cbiAgICAvLyB1c2VyIGFjdHVhbGx5IHN1Ym1pdHNcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0ID4gaW5wdXQnKTtcbiAgICAgICAgaWYgKGNvbnRlbnQudmFsdWUgPT0gXCJcIikge1xuICAgICAgICAgICAgZXhpdENvbnRyb2xzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29udGVudC52YWx1ZSBpbiBQcm9qZWN0cy5wcm9qZWN0TGlzdCkge1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KFwiUHJvamVjdCBhbHJlYWR5IGV4aXN0c1wiKTtcbiAgICAgICAgICAgIGV4aXRDb250cm9scygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld1Byb2plY3ROYW1lID0gY29udGVudC52YWx1ZTtcbiAgICAgICAgLy8gdGhpcyBpcyB3aGVyZSB3ZSBoYXZlIHRvIGFkZCBhIG5ldyBwcm9qZWN0XG4gICAgICAgIGxldCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzJyk7XG5cbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gXCIuLi9zcmMvYXNzZXRzL3NpZGUtbmF2L3Byb2plY3QucG5nXCI7XG4gICAgICAgIGltYWdlLmFsdCA9IFwicHJvamVjdCBpY29uXCI7XG5cbiAgICAgICAgbGV0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjYW5jZWwuc3JjID0gXCIuLi9zcmMvYXNzZXRzL3NpZGUtbmF2L2NhbmNlbC5wbmdcIjtcbiAgICAgICAgY2FuY2VsLmFsdCA9IFwiZGVsZXRlIHByb2plY3RcIjtcbiAgICAgICAgY2FuY2VsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FuY2VsJyk7XG4gICAgICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgbmV3UHJvamVjdE5hbWUpO1xuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZGVsZXRlUHJvamVjdChlKSk7XG5cbiAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0TmFtZTtcbiAgICAgICAgZWxlbWVudC5hcHBlbmQoXG4gICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBjYW5jZWxcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGlzIFwiZWxlbWVudFwiXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gc2hvd1Byb2plY3RQYWdlKGUpKTtcblxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgICAgIGNvbnRlbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICBleGl0Q29udHJvbHMoKTtcblxuICAgICAgICBQcm9qZWN0cy5jcmVhdGVOZXdQcm9qZWN0KG5ld1Byb2plY3ROYW1lKTtcbiAgICB9KSAgICBcbn07XG5cbmV4cG9ydCB7XG4gICAgYWRkUHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIHJlZnJlc2hQcm9qZWN0XG59IiwiaW1wb3J0IHsgZXhpdFRvRG9JbnB1dCB9IGZyb20gXCIuL2NyZWF0ZVRvRG9cIjtcblxuY29uc3QgY3JlYXRlVGl0bGUgPSAobmFtZSkgPT4ge1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS50ZXh0Q29udGVudCA9IG5hbWU7XG59XG5cbmNvbnN0IHNob3dQcm9qZWN0UGFnZSA9IChlKSA9PiB7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lKTtcblxuICAgIC8vIGNyZWF0ZSB0aGUgdGl0bGVcbiAgICBjcmVhdGVUaXRsZShwcm9qZWN0TmFtZSk7XG4gICAgLy8gaW4gY2FzZSB0aGUgdG9kby1jcmVhdG9yIHdhcyBvcGVuZWQgYnkgYW55IG90aGVyIHByb2plY3RcbiAgICBleGl0VG9Eb0lucHV0KCk7XG5cbiAgICAvLyBzaG93IGFsbCB0aGUgdG8tZG9zIHVuZGVyIHRoaXMgcHJvamVjdCBcbiAgICBsZXQgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpO1xuICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBcbn1cblxuZXhwb3J0IHtcbiAgICBzaG93UHJvamVjdFBhZ2Vcbn0iLCJjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICAvLyBlYWNoIHByb2plY3QgaGFzIGEgbmFtZSBhbmQgYSBsaXN0IG9mIHRvZG9zXG4gICAgY29uc3QgdG9kb3MgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRvUHJvamVjdCA9IHRvZG8gPT4ge1xuICAgICAgICB0b2Rvcy5wdXNoKHRvZG8pXG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUZyb21Qcm9qZWN0ID0gdG9kbyA9PiB7XG4gICAgICAgIHZhciBpbmRleCA9IHRvZG9zLmluZGV4T2YodG9kbyk7XG4gICAgICAgIHZhciByZW1vdmVkVG9kbyA9IHRvZG9zW2luZGV4XTtcblxuICAgICAgICBpZiAoaW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbW92ZWRUb2RvO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBuYW1lLCB0b2RvcywgYWRkVG9Qcm9qZWN0LCByZW1vdmVGcm9tUHJvamVjdCB9O1xufTtcblxuY29uc3QgUHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IHt9O1xuXG4gICAgY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIHByb2plY3RMaXN0W25hbWVdID0gY3JlYXRlUHJvamVjdChuYW1lKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBwcm9qZWN0TGlzdFtuYW1lXTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdExpc3QsXG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3QsXG4gICAgICAgIGRlbGV0ZVByb2plY3RcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IHtcbiAgICBQcm9qZWN0c1xufTsiLCJjb25zdCB0b0RvID0gKCgpID0+IHtcbiAgICBsZXQgdGl0bGU7XG4gICAgbGV0IGRlc2NyaXB0aW9uO1xuICAgIGxldCBkdWVEYXRlO1xuICAgIGxldCBwcmlvcml0eTtcbiAgICBsZXQgcHJvamVjdDtcblxuICAgIGNvbnN0IGNyZWF0ZVRvRG8gPSAobmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSwgbmV3UHJvamVjdCkgPT4ge1xuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgICAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICAgICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICAgICAgcHJvamVjdCA9IG5ld1Byb2plY3Q7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZSwgXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICBkdWVEYXRlLCBcbiAgICAgICAgICAgIHByaW9yaXR5LCBcbiAgICAgICAgICAgIHByb2plY3RcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLy8gc2V0dGVycyBcbiAgICBjb25zdCBjaGFuZ2VUaXRsZSA9IG5ld1RpdGxlID0+IHtcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hhbmdlRGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbiA9PiB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfTtcblxuICAgIGNvbnN0IGNoYW5nZUR1ZURhdGUgPSBuZXdEdWVEYXRlID0+IHtcbiAgICAgICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoYW5nZVByaW9yaXR5ID0gbmV3UHJpb3JpdHkgPT4ge1xuICAgICAgICBwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBjcmVhdGVUb0RvLFxuICAgICAgICBjaGFuZ2VUaXRsZSxcbiAgICAgICAgY2hhbmdlRGVzY3JpcHRpb24sXG4gICAgICAgIGNoYW5nZUR1ZURhdGUsXG4gICAgICAgIGNoYW5nZVByaW9yaXR5XG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7XG4gICAgdG9Eb1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tICcuL2RvbS1tYW5pcHVsYXRpb24vcHJvamVjdENvbnRyb2xzJztcbmltcG9ydCB7IGNyZWF0ZVRvRG9JbnB1dCB9IGZyb20gJy4vZG9tLW1hbmlwdWxhdGlvbi9jcmVhdGVUb0RvJztcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9qZWN0KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdG9kb3MnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRvRG9JbnB1dCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9