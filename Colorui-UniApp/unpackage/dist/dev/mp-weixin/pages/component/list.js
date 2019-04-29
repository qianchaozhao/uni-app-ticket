(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/component/list"],{

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/main.js?{\"page\":\"pages%2Fcomponent%2Flist\"}":
/*!*********************************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/main.js?{"page":"pages%2Fcomponent%2Flist"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _list = _interopRequireDefault(__webpack_require__(/*! ./pages/component/list.vue */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_list.default));

/***/ }),

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue":
/*!**************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_0d53e598___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=0d53e598& */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=template&id=0d53e598&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&lang=css& */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_0d53e598___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_0d53e598___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=script&lang=js&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=template&id=0d53e598&":
/*!*********************************************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=template&id=0d53e598& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_0d53e598___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=0d53e598& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=template&id=0d53e598&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_0d53e598___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_0d53e598___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =




























































































































































































































































































{
  data: function data() {
    return {
      iconList: [{
        icon: 'cardboardfill',
        color: 'red',
        badge: 120,
        name: 'VR' },
      {
        icon: 'recordfill',
        color: 'orange',
        badge: 1,
        name: '录像' },
      {
        icon: 'picfill',
        color: 'yellow',
        badge: 0,
        name: '图像' },
      {
        icon: 'noticefill',
        color: 'olive',
        badge: 22,
        name: '通知' },
      {
        icon: 'upstagefill',
        color: 'cyan',
        badge: 0,
        name: '排行榜' },
      {
        icon: 'clothesfill',
        color: 'blue',
        badge: 0,
        name: '皮肤' },
      {
        icon: 'discoverfill',
        color: 'purple',
        badge: 0,
        name: '发现' },
      {
        icon: 'questionfill',
        color: 'mauve',
        badge: 0,
        name: '帮助' },
      {
        icon: 'commandfill',
        color: 'purple',
        badge: 0,
        name: '问答' },
      {
        icon: 'brandfill',
        color: 'mauve',
        badge: 0,
        name: '版权' }],

      modalName: null,
      gridCol: 3,
      gridBorder: false,
      menuBorder: false,
      menuArrow: false,
      menuCard: false,
      skin: false,
      listTouchStart: 0,
      listTouchDirection: null };

  },
  methods: {
    showModal: function showModal(e) {
      this.modalName = e.currentTarget.dataset.target;
    },
    hideModal: function hideModal(e) {
      this.modalName = null;
    },
    Gridchange: function Gridchange(e) {
      this.gridCol = e.detail.value;
    },
    Gridswitch: function Gridswitch(e) {
      this.gridBorder = e.detail.value;
    },
    MenuBorder: function MenuBorder(e) {
      this.menuBorder = e.detail.value;
    },
    MenuArrow: function MenuArrow(e) {
      this.menuArrow = e.detail.value;
    },
    MenuCard: function MenuCard(e) {
      this.menuCard = e.detail.value;
    },
    SwitchSex: function SwitchSex(e) {
      this.skin = e.detail.value;
    },

    // ListTouch触摸开始
    ListTouchStart: function ListTouchStart(e) {
      this.listTouchStart = e.touches[0].pageX;
    },

    // ListTouch计算方向
    ListTouchMove: function ListTouchMove(e) {
      this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left';
    },

    // ListTouch计算滚动
    ListTouchEnd: function ListTouchEnd(e) {
      if (this.listTouchDirection == 'left') {
        this.modalName = e.currentTarget.dataset.target;
      } else {
        this.modalName = null;
      }
      this.listTouchDirection = null;
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!/Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=template&id=0d53e598&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/list.vue?vue&type=template&id=0d53e598& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c(
        "scroll-view",
        {
          staticClass: "page",
          class: _vm.modalName != null ? "show" : "",
          attrs: { "scroll-y": _vm.modalName == null }
        },
        [
          _c(
            "cu-custom",
            {
              attrs: {
                bgColor: "bg-gradual-pink",
                isBack: true,
                mpcomid: "32a8a23c-0"
              }
            },
            [
              _c("block", { slot: "backText" }, [_vm._v("返回")]),
              _c("block", { slot: "content" }, [_vm._v("列表")])
            ],
            1
          ),
          _c(
            "view",
            { staticClass: "cu-bar bg-white solid-bottom margin-top" },
            [
              _c("view", { staticClass: "action" }, [
                _c("text", { staticClass: "cuIcon-title text-orange " }),
                _vm._v("宫格列表")
              ]),
              _c(
                "view",
                { staticClass: "action" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "cu-btn bg-green shadow",
                      attrs: {
                        "data-target": "gridModal",
                        eventid: "32a8a23c-0"
                      },
                      on: { tap: _vm.showModal }
                    },
                    [_vm._v("设置")]
                  )
                ],
                1
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: "cu-modal",
              class: _vm.modalName == "gridModal" ? "show" : "",
              attrs: { eventid: "32a8a23c-4" },
              on: { tap: _vm.hideModal }
            },
            [
              _c(
                "view",
                {
                  staticClass: "cu-dialog",
                  attrs: { eventid: "32a8a23c-3" },
                  on: {
                    tap: function($event) {
                      $event.stopPropagation()
                    }
                  }
                },
                [
                  _c(
                    "radio-group",
                    {
                      staticClass: "block",
                      attrs: { eventid: "32a8a23c-1", mpcomid: "32a8a23c-1" },
                      on: { change: _vm.Gridchange }
                    },
                    [
                      _c(
                        "view",
                        { staticClass: "cu-list menu text-left" },
                        _vm._l(3, function(item, index) {
                          return _c(
                            "view",
                            { key: index, staticClass: "cu-item" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "flex justify-between align-center flex-sub"
                                },
                                [
                                  _c("view", { staticClass: "flex-sub" }, [
                                    _vm._v(_vm._s(index + 3) + " 列")
                                  ]),
                                  _c("radio", {
                                    staticClass: "round",
                                    class:
                                      _vm.gridCol == index + 3 ? "checked" : "",
                                    attrs: {
                                      value: index + 3 + "",
                                      checked: _vm.gridCol == index + 3
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        })
                      )
                    ]
                  ),
                  _c(
                    "view",
                    { staticClass: "cu-list menu text-left solid-top" },
                    [
                      _c("view", { staticClass: "cu-item" }, [
                        _c("view", { staticClass: "content" }, [
                          _c("text", { staticClass: "text-grey" }, [
                            _vm._v("边框")
                          ])
                        ]),
                        _c("view", { staticClass: "action" }, [
                          _c("switch", {
                            class: _vm.gridBorder ? "checked" : "",
                            attrs: {
                              checked: _vm.gridBorder ? true : false,
                              eventid: "32a8a23c-2"
                            },
                            on: { change: _vm.Gridswitch }
                          })
                        ])
                      ])
                    ]
                  )
                ],
                1
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: "cu-list grid",
              class: ["col-" + _vm.gridCol, _vm.gridBorder ? "" : "no-border"]
            },
            _vm._l(_vm.iconList, function(item, index) {
              return index < _vm.gridCol * 2
                ? _c("view", { key: index, staticClass: "cu-item" }, [
                    _c(
                      "view",
                      { class: ["cuIcon-" + item.icon, "text-" + item.color] },
                      [
                        item.badge != 0
                          ? _c(
                              "view",
                              { staticClass: "cu-tag badge" },
                              [
                                item.badge != 1
                                  ? _c("block", [
                                      _vm._v(
                                        _vm._s(
                                          item.badge > 99 ? "99+" : item.badge
                                        )
                                      )
                                    ])
                                  : _vm._e()
                              ],
                              1
                            )
                          : _vm._e()
                      ]
                    ),
                    _c("text", [_vm._v(_vm._s(item.name))])
                  ])
                : _vm._e()
            })
          ),
          _c(
            "view",
            { staticClass: "cu-bar bg-white solid-bottom margin-top" },
            [
              _c("view", { staticClass: "action" }, [
                _c("text", { staticClass: "cuIcon-title text-orange" }),
                _vm._v("菜单列表")
              ]),
              _c(
                "view",
                { staticClass: "action" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "cu-btn bg-green shadow",
                      attrs: {
                        "data-target": "menuModal",
                        eventid: "32a8a23c-5"
                      },
                      on: { tap: _vm.showModal }
                    },
                    [_vm._v("设置")]
                  )
                ],
                1
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: "cu-modal",
              class: _vm.modalName == "menuModal" ? "show" : "",
              attrs: { eventid: "32a8a23c-10" },
              on: { tap: _vm.hideModal }
            },
            [
              _c(
                "view",
                {
                  staticClass: "cu-dialog",
                  attrs: { eventid: "32a8a23c-9" },
                  on: {
                    tap: function($event) {
                      $event.stopPropagation()
                    }
                  }
                },
                [
                  _c(
                    "view",
                    { staticClass: "cu-list menu text-left solid-top" },
                    [
                      _c("view", { staticClass: "cu-item" }, [
                        _c("view", { staticClass: "content" }, [
                          _c("text", { staticClass: "text-grey" }, [
                            _vm._v("短边框")
                          ])
                        ]),
                        _c("view", { staticClass: "action" }, [
                          _c("switch", {
                            class: _vm.menuBorder ? "checked" : "",
                            attrs: {
                              checked: _vm.menuBorder ? true : false,
                              eventid: "32a8a23c-6"
                            },
                            on: { change: _vm.MenuBorder }
                          })
                        ])
                      ]),
                      _c("view", { staticClass: "cu-item" }, [
                        _c("view", { staticClass: "content" }, [
                          _c("text", { staticClass: "text-grey" }, [
                            _vm._v("箭头")
                          ])
                        ]),
                        _c("view", { staticClass: "action" }, [
                          _c("switch", {
                            class: _vm.menuArrow ? "checked" : "",
                            attrs: {
                              checked: _vm.menuArrow ? true : false,
                              eventid: "32a8a23c-7"
                            },
                            on: { change: _vm.MenuArrow }
                          })
                        ])
                      ]),
                      _c("view", { staticClass: "cu-item" }, [
                        _c("view", { staticClass: "content" }, [
                          _c("text", { staticClass: "text-grey" }, [
                            _vm._v("卡片")
                          ])
                        ]),
                        _c("view", { staticClass: "action" }, [
                          _c("switch", {
                            class: _vm.menuCard ? "checked" : "",
                            attrs: {
                              checked: _vm.menuCard ? true : false,
                              eventid: "32a8a23c-8"
                            },
                            on: { change: _vm.MenuCard }
                          })
                        ])
                      ])
                    ]
                  )
                ]
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: "cu-list menu",
              class: [
                _vm.menuBorder ? "sm-border" : "",
                _vm.menuCard ? "card-menu margin-top" : ""
              ]
            },
            [
              _c(
                "view",
                { staticClass: "cu-item", class: _vm.menuArrow ? "arrow" : "" },
                [
                  _c("view", { staticClass: "content" }, [
                    _c("text", { staticClass: "cuIcon-circlefill text-grey" }),
                    _c("text", { staticClass: "text-grey" }, [
                      _vm._v("图标 + 标题")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                { staticClass: "cu-item", class: _vm.menuArrow ? "arrow" : "" },
                [
                  _c("view", { staticClass: "content" }, [
                    _c("image", {
                      staticClass: "png",
                      attrs: { src: "/static/logo.png", mode: "aspectFit" }
                    }),
                    _c("text", { staticClass: "text-grey" }, [
                      _vm._v("图片 + 标题")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                { staticClass: "cu-item", class: _vm.menuArrow ? "arrow" : "" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "cu-btn content",
                      attrs: { "open-type": "contact" }
                    },
                    [
                      _c("text", { staticClass: "cuIcon-btn text-olive" }),
                      _c("text", { staticClass: "text-grey" }, [
                        _vm._v("Open-type 按钮")
                      ])
                    ]
                  )
                ],
                1
              ),
              _c(
                "view",
                { staticClass: "cu-item", class: _vm.menuArrow ? "arrow" : "" },
                [
                  _c(
                    "navigator",
                    {
                      staticClass: "content",
                      attrs: {
                        "hover-class": "none",
                        url: "../list/list",
                        "open-type": "redirect"
                      }
                    },
                    [
                      _c("text", {
                        staticClass: "cuIcon-discoverfill text-orange"
                      }),
                      _c("text", { staticClass: "text-grey" }, [
                        _vm._v("Navigator 跳转")
                      ])
                    ]
                  )
                ],
                1
              ),
              _c(
                "view",
                { staticClass: "cu-item", class: _vm.menuArrow ? "arrow" : "" },
                [
                  _c("view", { staticClass: "content" }, [
                    _c("text", {
                      staticClass: "cuIcon-emojiflashfill text-pink"
                    }),
                    _c("text", { staticClass: "text-grey" }, [_vm._v("头像组")])
                  ]),
                  _c("view", { staticClass: "action" }, [
                    _c("view", { staticClass: "cu-avatar-group" }, [
                      _c("view", {
                        staticClass: "cu-avatar round sm",
                        staticStyle: {
                          "background-image":
                            "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"
                        }
                      }),
                      _c("view", {
                        staticClass: "cu-avatar round sm",
                        staticStyle: {
                          "background-image":
                            "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg)"
                        }
                      }),
                      _c("view", {
                        staticClass: "cu-avatar round sm",
                        staticStyle: {
                          "background-image":
                            "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg)"
                        }
                      }),
                      _c("view", {
                        staticClass: "cu-avatar round sm",
                        staticStyle: {
                          "background-image":
                            "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg)"
                        }
                      })
                    ]),
                    _c("text", { staticClass: "text-grey text-sm" }, [
                      _vm._v("4 人")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                { staticClass: "cu-item", class: _vm.menuArrow ? "arrow" : "" },
                [
                  _c("view", { staticClass: "content" }, [
                    _c("text", { staticClass: "cuIcon-btn text-green" }),
                    _c("text", { staticClass: "text-grey" }, [_vm._v("按钮")])
                  ]),
                  _c(
                    "view",
                    { staticClass: "action" },
                    [
                      _c(
                        "button",
                        { staticClass: "cu-btn round bg-green shadow" },
                        [
                          _c("text", { staticClass: "cuIcon-upload" }),
                          _vm._v("上传")
                        ]
                      )
                    ],
                    1
                  )
                ]
              ),
              _c(
                "view",
                { staticClass: "cu-item", class: _vm.menuArrow ? "arrow" : "" },
                [
                  _c("view", { staticClass: "content" }, [
                    _c("text", {
                      staticClass: "cuIcon-tagfill text-red  margin-right-xs"
                    }),
                    _c("text", { staticClass: "text-grey" }, [_vm._v("标签")])
                  ]),
                  _c("view", { staticClass: "action" }, [
                    _c(
                      "view",
                      { staticClass: "cu-tag round bg-orange light" },
                      [_vm._v("音乐")]
                    ),
                    _c("view", { staticClass: "cu-tag round bg-olive light" }, [
                      _vm._v("电影")
                    ]),
                    _c("view", { staticClass: "cu-tag round bg-blue light" }, [
                      _vm._v("旅行")
                    ])
                  ])
                ]
              ),
              _c(
                "view",
                { staticClass: "cu-item", class: _vm.menuArrow ? "arrow" : "" },
                [
                  _c("view", { staticClass: "content" }, [
                    _c("text", { staticClass: "cuIcon-warn text-green" }),
                    _c("text", { staticClass: "text-grey" }, [_vm._v("文本")])
                  ]),
                  _c("view", { staticClass: "action" }, [
                    _c("text", { staticClass: "text-grey text-sm" }, [
                      _vm._v("小目标还没有实现！")
                    ])
                  ])
                ]
              ),
              _c("view", { staticClass: "cu-item" }, [
                _c("view", { staticClass: "content padding-tb-sm" }, [
                  _c("view", [
                    _c("text", {
                      staticClass:
                        "cuIcon-clothesfill text-blue margin-right-xs"
                    }),
                    _vm._v("多行Item")
                  ]),
                  _c("view", { staticClass: "text-gray text-sm" }, [
                    _c("text", {
                      staticClass: "cuIcon-infofill margin-right-xs"
                    }),
                    _vm._v("小目标还没有实现！")
                  ])
                ]),
                _c("view", { staticClass: "action" }, [
                  _c("switch", {
                    staticClass: "switch-sex",
                    class: _vm.skin ? "checked" : "",
                    attrs: {
                      checked: _vm.skin ? true : false,
                      eventid: "32a8a23c-11"
                    },
                    on: { change: _vm.SwitchSex }
                  })
                ])
              ])
            ]
          ),
          _c(
            "view",
            { staticClass: "cu-bar bg-white solid-bottom margin-top" },
            [
              _c("view", { staticClass: "action" }, [
                _c("text", { staticClass: "cuIcon-title text-orange " }),
                _vm._v("消息列表")
              ])
            ]
          ),
          _c("view", { staticClass: "cu-list menu-avatar" }, [
            _c("view", { staticClass: "cu-item" }, [
              _c("view", {
                staticClass: "cu-avatar round lg",
                staticStyle: {
                  "background-image":
                    "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"
                }
              }),
              _c("view", { staticClass: "content" }, [
                _c("view", { staticClass: "text-grey" }, [_vm._v("凯尔")]),
                _c("view", { staticClass: "text-gray text-sm flex" }, [
                  _c("text", { staticClass: "text-cut" }, [
                    _c("text", {
                      staticClass: "cuIcon-infofill text-red  margin-right-xs"
                    }),
                    _vm._v(
                      "我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。"
                    )
                  ])
                ])
              ]),
              _c("view", { staticClass: "action" }, [
                _c("view", { staticClass: "text-grey text-xs" }, [
                  _vm._v("22:20")
                ]),
                _c("view", { staticClass: "cu-tag round bg-grey sm" }, [
                  _vm._v("5")
                ])
              ])
            ]),
            _c("view", { staticClass: "cu-item" }, [
              _c(
                "view",
                {
                  staticClass: "cu-avatar round lg",
                  staticStyle: {
                    "background-image":
                      "url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png)"
                  }
                },
                [_c("view", { staticClass: "cu-tag badge" }, [_vm._v("99+")])]
              ),
              _c("view", { staticClass: "content" }, [
                _c("view", { staticClass: "text-grey" }, [
                  _c("text", { staticClass: "text-cut" }, [
                    _vm._v("瓦洛兰之盾-塔里克")
                  ]),
                  _c("view", { staticClass: "cu-tag round bg-orange sm" }, [
                    _vm._v("战士")
                  ])
                ]),
                _c("view", { staticClass: "text-gray text-sm flex" }, [
                  _c("text", { staticClass: "text-cut" }, [
                    _vm._v(
                      "塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。"
                    )
                  ])
                ])
              ]),
              _c("view", { staticClass: "action" }, [
                _c("view", { staticClass: "text-grey text-xs" }, [
                  _vm._v("22:20")
                ]),
                _c("view", {
                  staticClass: "cuIcon-notice_forbid_fill text-gray"
                })
              ])
            ]),
            _c("view", { staticClass: "cu-item " }, [
              _c("view", {
                staticClass: "cu-avatar radius lg",
                staticStyle: {
                  "background-image":
                    "url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"
                }
              }),
              _c("view", { staticClass: "content" }, [
                _c("view", { staticClass: "text-pink" }, [
                  _c("text", { staticClass: "text-cut" }, [_vm._v("莫甘娜")])
                ]),
                _c("view", { staticClass: "text-gray text-sm flex" }, [
                  _c("text", { staticClass: "text-cut" }, [
                    _vm._v("凯尔，你被自己的光芒变的盲目！")
                  ])
                ])
              ]),
              _c("view", { staticClass: "action" }, [
                _c("view", { staticClass: "text-grey text-xs" }, [
                  _vm._v("22:20")
                ]),
                _c("view", { staticClass: "cu-tag round bg-red sm" }, [
                  _vm._v("5")
                ])
              ])
            ]),
            _c("view", { staticClass: "cu-item grayscale" }, [
              _c("view", {
                staticClass: "cu-avatar radius lg",
                staticStyle: {
                  "background-image":
                    "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg)"
                }
              }),
              _c("view", { staticClass: "content" }, [
                _c("view", [
                  _c("text", { staticClass: "text-cut" }, [_vm._v("伊泽瑞尔")]),
                  _c("view", { staticClass: "cu-tag round bg-orange sm" }, [
                    _vm._v("断开连接...")
                  ])
                ]),
                _c("view", { staticClass: "text-gray text-sm flex" }, [
                  _c("text", { staticClass: "text-cut" }, [
                    _vm._v("等我回来一个打十个")
                  ])
                ])
              ]),
              _c("view", { staticClass: "action" }, [
                _c("view", { staticClass: "text-grey text-xs" }, [
                  _vm._v("22:20")
                ]),
                _c("view", { staticClass: "cu-tag round bg-red sm" }, [
                  _vm._v("5")
                ])
              ])
            ]),
            _c("view", { staticClass: "cu-item cur" }, [
              _c(
                "view",
                {
                  staticClass: "cu-avatar radius lg",
                  staticStyle: {
                    "background-image":
                      "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg)"
                  }
                },
                [_c("view", { staticClass: "cu-tag badge" })]
              ),
              _c("view", { staticClass: "content" }, [
                _c("view", [
                  _c("text", { staticClass: "text-cut" }, [
                    _vm._v("瓦罗兰大陆-睡衣守护者-新手保护营")
                  ]),
                  _c("view", { staticClass: "cu-tag round bg-orange sm" }, [
                    _vm._v("6人")
                  ])
                ]),
                _c("view", { staticClass: "text-gray text-sm flex" }, [
                  _c("text", { staticClass: "text-cut" }, [
                    _vm._v("伊泽瑞尔："),
                    _c("text", {
                      staticClass:
                        "cuIcon-locationfill text-orange margin-right-xs"
                    }),
                    _vm._v("传送中...")
                  ])
                ])
              ]),
              _c("view", { staticClass: "action" }, [
                _c("view", { staticClass: "text-grey text-xs" }, [
                  _vm._v("22:20")
                ]),
                _c("view", {
                  staticClass: "cuIcon-notice_forbid_fill text-gray"
                })
              ])
            ])
          ]),
          _c(
            "view",
            { staticClass: "cu-bar bg-white solid-bottom margin-top" },
            [
              _c("view", { staticClass: "action" }, [
                _c("text", { staticClass: "cuIcon-title text-orange " }),
                _vm._v("列表左滑")
              ])
            ]
          ),
          _c(
            "view",
            { staticClass: "cu-list menu-avatar" },
            _vm._l(4, function(item, index) {
              return _c(
                "view",
                {
                  key: index,
                  staticClass: "cu-item",
                  class: _vm.modalName == "move-box-" + index ? "move-cur" : "",
                  attrs: {
                    "data-target": "move-box-" + index,
                    eventid: "32a8a23c-12-" + index
                  },
                  on: {
                    touchstart: _vm.ListTouchStart,
                    touchmove: _vm.ListTouchMove,
                    touchend: _vm.ListTouchEnd
                  }
                },
                [
                  _c("view", {
                    staticClass: "cu-avatar round lg",
                    style: [
                      {
                        backgroundImage:
                          "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100" +
                          (index + 2) +
                          ".jpg)"
                      }
                    ]
                  }),
                  _c("view", { staticClass: "content" }, [
                    _c("view", { staticClass: "text-grey" }, [
                      _vm._v("文晓港")
                    ]),
                    _c("view", { staticClass: "text-gray text-sm" }, [
                      _c("text", {
                        staticClass: "cuIcon-infofill text-red  margin-right-xs"
                      }),
                      _vm._v("消息未送达")
                    ])
                  ]),
                  _c("view", { staticClass: "action" }, [
                    _c("view", { staticClass: "text-grey text-xs" }, [
                      _vm._v("22:20")
                    ]),
                    _c("view", { staticClass: "cu-tag round bg-grey sm" }, [
                      _vm._v("5")
                    ])
                  ]),
                  _c("view", { staticClass: "move" }, [
                    _c("view", { staticClass: "bg-grey" }, [_vm._v("置顶")]),
                    _c("view", { staticClass: "bg-red" }, [_vm._v("删除")])
                  ])
                ]
              )
            })
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/main.js?{\"page\":\"pages%2Fcomponent%2Flist\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/component/list.js.map