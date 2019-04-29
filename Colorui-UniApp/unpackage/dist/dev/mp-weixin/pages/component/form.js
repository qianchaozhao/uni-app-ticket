(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/component/form"],{

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/main.js?{\"page\":\"pages%2Fcomponent%2Fform\"}":
/*!*********************************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/main.js?{"page":"pages%2Fcomponent%2Fform"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _form = _interopRequireDefault(__webpack_require__(/*! ./pages/component/form.vue */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_form.default));

/***/ }),

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue":
/*!**************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_7546334c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=7546334c& */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=template&id=7546334c&");
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.vue?vue&type=style&index=0&lang=css& */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_7546334c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_7546334c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=script&lang=js&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=template&id=7546334c&":
/*!*********************************************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=template&id=7546334c& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7546334c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=7546334c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=template&id=7546334c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7546334c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_7546334c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =






















































































































































































{
  data: function data() {
    return {
      index: -1,
      picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
      multiArray: [
      ['无脊柱动物', '脊柱动物'],
      ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
      ['猪肉绦虫', '吸血虫']],

      objectMultiArray: [
      [{
        id: 0,
        name: '无脊柱动物' },

      {
        id: 1,
        name: '脊柱动物' }],


      [{
        id: 0,
        name: '扁性动物' },

      {
        id: 1,
        name: '线形动物' },

      {
        id: 2,
        name: '环节动物' },

      {
        id: 3,
        name: '软体动物' },

      {
        id: 3,
        name: '节肢动物' }],


      [{
        id: 0,
        name: '猪肉绦虫' },

      {
        id: 1,
        name: '吸血虫' }]],



      multiIndex: [0, 0, 0],
      time: '12:01',
      date: '2018-12-25',
      region: ['广东省', '广州市', '海珠区'],
      switchA: false,
      switchB: true,
      switchC: false,
      switchD: false,
      radio: 'A',
      checkbox: [{
        value: 'A',
        checked: true },
      {
        value: 'B',
        checked: true },
      {
        value: 'C',
        checked: false }],

      imgList: [],
      modalName: null,
      textareaAValue: '',
      textareaBValue: '' };

  },
  methods: {
    PickerChange: function PickerChange(e) {
      this.index = e.detail.value;
    },
    MultiChange: function MultiChange(e) {
      this.multiIndex = e.detail.value;
    },
    MultiColumnChange: function MultiColumnChange(e) {
      var data = {
        multiArray: this.multiArray,
        multiIndex: this.multiIndex };

      data.multiIndex[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          switch (data.multiIndex[0]) {
            case 0:
              data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
              data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
              break;
            case 1:
              data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
              data.multiArray[2] = ['鲫鱼', '带鱼'];
              break;}

          data.multiIndex[1] = 0;
          data.multiIndex[2] = 0;
          break;
        case 1:
          switch (data.multiIndex[0]) {
            case 0:
              switch (data.multiIndex[1]) {
                case 0:
                  data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                  break;
                case 1:
                  data.multiArray[2] = ['蛔虫'];
                  break;
                case 2:
                  data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                  break;
                case 3:
                  data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                  break;
                case 4:
                  data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                  break;}

              break;
            case 1:
              switch (data.multiIndex[1]) {
                case 0:
                  data.multiArray[2] = ['鲫鱼', '带鱼'];
                  break;
                case 1:
                  data.multiArray[2] = ['青蛙', '娃娃鱼'];
                  break;
                case 2:
                  data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                  break;}

              break;}

          data.multiIndex[2] = 0;
          break;}

      this.multiArray = data.multiArray;
      this.multiIndex = data.multiIndex;
    },
    TimeChange: function TimeChange(e) {
      this.time = e.detail.value;
    },
    DateChange: function DateChange(e) {
      this.date = e.detail.value;
    },
    RegionChange: function RegionChange(e) {
      this.region = e.detail.value;
    },
    SwitchA: function SwitchA(e) {
      this.switchA = e.detail.value;
    },
    SwitchB: function SwitchB(e) {
      this.switchB = e.detail.value;
    },
    SwitchC: function SwitchC(e) {
      this.switchC = e.detail.value;
    },
    SwitchD: function SwitchD(e) {
      this.switchD = e.detail.value;
    },
    RadioChange: function RadioChange(e) {
      this.radio = e.detail.value;
    },
    CheckboxChange: function CheckboxChange(e) {
      var items = this.checkbox,
      values = e.detail.value;
      for (var i = 0, lenI = items.length; i < lenI; ++i) {
        items[i].checked = false;
        for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
          if (items[i].value == values[j]) {
            items[i].checked = true;
            break;
          }
        }
      }
    },
    ChooseImage: function ChooseImage() {var _this = this;
      uni.chooseImage({
        count: 4, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: function success(res) {
          if (_this.imgList.length != 0) {
            _this.imgList = _this.imgList.concat(res.tempFilePaths);
          } else {
            _this.imgList = res.tempFilePaths;
          }
        } });

    },
    ViewImage: function ViewImage(e) {
      uni.previewImage({
        urls: this.imgList,
        current: e.currentTarget.dataset.url });

    },
    DelImg: function DelImg(e) {var _this2 = this;
      uni.showModal({
        title: '召唤师',
        content: '确定要删除这段回忆吗？',
        cancelText: '再看看',
        confirmText: '再见',
        success: function success(res) {
          if (res.confirm) {
            _this2.imgList.splice(e.currentTarget.dataset.index, 1);
          }
        } });

    },
    textareaAInput: function textareaAInput(e) {
      this.textareaAValue = e.detail.value;
    },
    textareaBInput: function textareaBInput(e) {
      this.textareaBValue = e.detail.value;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!/Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=template&id=7546334c&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/form.vue?vue&type=template&id=7546334c& ***!
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
        "cu-custom",
        {
          attrs: {
            bgColor: "bg-gradual-pink",
            isBack: true,
            mpcomid: "32ade9f0-0"
          }
        },
        [
          _c("block", { slot: "backText" }, [_vm._v("返回")]),
          _c("block", { slot: "content" }, [_vm._v("表单")])
        ],
        1
      ),
      _c(
        "form",
        [
          _c("view", { staticClass: "cu-form-group margin-top" }, [
            _c("view", { staticClass: "title" }, [_vm._v("邮件")]),
            _c("input", { attrs: { placeholder: "两字短标题", name: "input" } })
          ]),
          _c("view", { staticClass: "cu-form-group" }, [
            _c("view", { staticClass: "title" }, [_vm._v("输入框")]),
            _c("input", { attrs: { placeholder: "三字标题", name: "input" } })
          ]),
          _c("view", { staticClass: "cu-form-group" }, [
            _c("view", { staticClass: "title" }, [_vm._v("收货地址")]),
            _c("input", {
              attrs: { placeholder: "统一标题的宽度", name: "input" }
            })
          ]),
          _c("view", { staticClass: "cu-form-group" }, [
            _c("view", { staticClass: "title" }, [_vm._v("收货地址")]),
            _c("input", {
              attrs: { placeholder: "输入框带个图标", name: "input" }
            }),
            _c("text", { staticClass: "cuIcon-locationfill text-orange" })
          ]),
          _c(
            "view",
            { staticClass: "cu-form-group" },
            [
              _c("view", { staticClass: "title" }, [_vm._v("验证码")]),
              _c("input", {
                attrs: { placeholder: "输入框带个按钮", name: "input" }
              }),
              _c("button", { staticClass: "cu-btn bg-green shadow" }, [
                _vm._v("验证码")
              ])
            ],
            1
          ),
          _c("view", { staticClass: "cu-form-group" }, [
            _c("view", { staticClass: "title" }, [_vm._v("手机号码")]),
            _c("input", {
              attrs: { placeholder: "输入框带标签", name: "input" }
            }),
            _c("view", { staticClass: "cu-capsule radius" }, [
              _c("view", { staticClass: "cu-tag bg-blue " }, [_vm._v("+86")]),
              _c("view", { staticClass: "cu-tag line-blue" }, [
                _vm._v("中国大陆")
              ])
            ])
          ]),
          _c(
            "view",
            { staticClass: "cu-form-group margin-top" },
            [
              _c("view", { staticClass: "title" }, [_vm._v("普通选择")]),
              _c(
                "picker",
                {
                  attrs: {
                    value: _vm.index,
                    range: _vm.picker,
                    eventid: "32ade9f0-0"
                  },
                  on: { change: _vm.PickerChange }
                },
                [
                  _c("view", { staticClass: "picker" }, [
                    _vm._v(
                      _vm._s(
                        _vm.index > -1
                          ? _vm.picker[_vm.index]
                          : "禁止换行，超出容器部分会以 ... 方式截断"
                      )
                    )
                  ])
                ]
              )
            ],
            1
          ),
          _c(
            "view",
            { staticClass: "cu-form-group" },
            [
              _c("view", { staticClass: "title" }, [_vm._v("多列选择")]),
              _c(
                "picker",
                {
                  attrs: {
                    mode: "multiSelector",
                    value: _vm.multiIndex,
                    range: _vm.multiArray,
                    eventid: "32ade9f0-1"
                  },
                  on: {
                    change: _vm.MultiChange,
                    columnchange: _vm.MultiColumnChange
                  }
                },
                [
                  _c("view", { staticClass: "picker" }, [
                    _vm._v(
                      _vm._s(_vm.multiArray[0][_vm.multiIndex[0]]) +
                        "，" +
                        _vm._s(_vm.multiArray[1][_vm.multiIndex[1]]) +
                        "，" +
                        _vm._s(_vm.multiArray[2][_vm.multiIndex[2]])
                    )
                  ])
                ]
              )
            ],
            1
          ),
          _c(
            "view",
            { staticClass: "cu-form-group" },
            [
              _c("view", { staticClass: "title" }, [_vm._v("时间选择")]),
              _c(
                "picker",
                {
                  attrs: {
                    mode: "time",
                    value: _vm.time,
                    start: "09:01",
                    end: "21:01",
                    eventid: "32ade9f0-2"
                  },
                  on: { change: _vm.TimeChange }
                },
                [
                  _c("view", { staticClass: "picker" }, [
                    _vm._v(_vm._s(_vm.time))
                  ])
                ]
              )
            ],
            1
          ),
          _c(
            "view",
            { staticClass: "cu-form-group" },
            [
              _c("view", { staticClass: "title" }, [_vm._v("日期选择")]),
              _c(
                "picker",
                {
                  attrs: {
                    mode: "date",
                    value: _vm.date,
                    start: "2015-09-01",
                    end: "2020-09-01",
                    eventid: "32ade9f0-3"
                  },
                  on: { change: _vm.DateChange }
                },
                [
                  _c("view", { staticClass: "picker" }, [
                    _vm._v(_vm._s(_vm.date))
                  ])
                ]
              )
            ],
            1
          ),
          _c(
            "view",
            { staticClass: "cu-form-group" },
            [
              _c("view", { staticClass: "title" }, [_vm._v("地址选择")]),
              _c(
                "picker",
                {
                  attrs: {
                    mode: "region",
                    value: _vm.region,
                    eventid: "32ade9f0-4"
                  },
                  on: { change: _vm.RegionChange }
                },
                [
                  _c("view", { staticClass: "picker" }, [
                    _vm._v(
                      _vm._s(_vm.region[0]) +
                        "，" +
                        _vm._s(_vm.region[1]) +
                        "，" +
                        _vm._s(_vm.region[2])
                    )
                  ])
                ]
              )
            ],
            1
          ),
          _c("view", { staticClass: "cu-form-group margin-top" }, [
            _c("view", { staticClass: "title" }, [_vm._v("开关选择")]),
            _c("switch", {
              class: _vm.switchA ? "checked" : "",
              attrs: {
                checked: _vm.switchA ? true : false,
                eventid: "32ade9f0-5"
              },
              on: { change: _vm.SwitchA }
            })
          ]),
          _c("view", { staticClass: "cu-form-group" }, [
            _c("view", { staticClass: "title" }, [_vm._v("定义颜色")]),
            _c("switch", {
              staticClass: "red",
              class: _vm.switchB ? "checked" : "",
              attrs: {
                checked: _vm.switchB ? true : false,
                eventid: "32ade9f0-6"
              },
              on: { change: _vm.SwitchB }
            })
          ]),
          _c("view", { staticClass: "cu-form-group" }, [
            _c("view", { staticClass: "title" }, [_vm._v("定义图标")]),
            _c("switch", {
              staticClass: "switch-sex",
              class: _vm.switchC ? "checked" : "",
              attrs: {
                checked: _vm.switchC ? true : false,
                eventid: "32ade9f0-7"
              },
              on: { change: _vm.SwitchC }
            })
          ]),
          _c("view", { staticClass: "cu-form-group" }, [
            _c("view", { staticClass: "title" }, [_vm._v("方形开关")]),
            _c("switch", {
              staticClass: "orange radius",
              class: _vm.switchD ? "checked" : "",
              attrs: {
                checked: _vm.switchD ? true : false,
                eventid: "32ade9f0-8"
              },
              on: { change: _vm.SwitchD }
            })
          ]),
          _c(
            "radio-group",
            {
              staticClass: "block",
              attrs: { eventid: "32ade9f0-9", mpcomid: "32ade9f0-1" },
              on: { change: _vm.RadioChange }
            },
            [
              _c(
                "view",
                { staticClass: "cu-form-group margin-top" },
                [
                  _c("view", { staticClass: "title" }, [
                    _vm._v("单选操作(radio)")
                  ]),
                  _c("radio", {
                    class: _vm.radio == "A" ? "checked" : "",
                    attrs: {
                      checked: _vm.radio == "A" ? true : false,
                      value: "A"
                    }
                  })
                ],
                1
              ),
              _c(
                "view",
                { staticClass: "cu-form-group" },
                [
                  _c("view", { staticClass: "title" }, [_vm._v("定义样式")]),
                  _c("radio", {
                    staticClass: "radio",
                    class: _vm.radio == "B" ? "checked" : "",
                    attrs: {
                      checked: _vm.radio == "B" ? true : false,
                      value: "B"
                    }
                  })
                ],
                1
              ),
              _c("view", { staticClass: "cu-form-group" }, [
                _c("view", { staticClass: "title" }, [_vm._v("定义颜色")]),
                _c(
                  "view",
                  [
                    _c("radio", {
                      staticClass: "blue radio",
                      class: _vm.radio == "C" ? "checked" : "",
                      attrs: {
                        checked: _vm.radio == "C" ? true : false,
                        value: "C"
                      }
                    }),
                    _c("radio", {
                      staticClass: "red margin-left-sm",
                      class: _vm.radio == "D" ? "checked" : "",
                      attrs: {
                        checked: _vm.radio == "D" ? true : false,
                        value: "D"
                      }
                    })
                  ],
                  1
                )
              ])
            ]
          ),
          _c(
            "checkbox-group",
            {
              staticClass: "block",
              attrs: { eventid: "32ade9f0-10", mpcomid: "32ade9f0-2" },
              on: { change: _vm.CheckboxChange }
            },
            [
              _c(
                "view",
                { staticClass: "cu-form-group margin-top" },
                [
                  _c("view", { staticClass: "title" }, [
                    _vm._v("复选选操作(checkbox)")
                  ]),
                  _c("checkbox", {
                    class: _vm.checkbox[0].checked ? "checked" : "",
                    attrs: {
                      checked: _vm.checkbox[0].checked ? true : false,
                      value: "A"
                    }
                  })
                ],
                1
              ),
              _c(
                "view",
                { staticClass: "cu-form-group" },
                [
                  _c("view", { staticClass: "title" }, [_vm._v("定义形状")]),
                  _c("checkbox", {
                    staticClass: "round",
                    class: _vm.checkbox[1].checked ? "checked" : "",
                    attrs: {
                      checked: _vm.checkbox[1].checked ? true : false,
                      value: "B"
                    }
                  })
                ],
                1
              ),
              _c(
                "view",
                { staticClass: "cu-form-group" },
                [
                  _c("view", { staticClass: "title" }, [_vm._v("定义颜色")]),
                  _c("checkbox", {
                    staticClass: "round blue",
                    class: _vm.checkbox[2].checked ? "checked" : "",
                    attrs: {
                      checked: _vm.checkbox[2].checked ? true : false,
                      value: "C"
                    }
                  })
                ],
                1
              )
            ]
          ),
          _c("view", { staticClass: "cu-bar bg-white margin-top" }, [
            _c("view", { staticClass: "action" }, [_vm._v("图片上传")]),
            _c("view", { staticClass: "action" }, [
              _vm._v(_vm._s(_vm.imgList.length) + "/4")
            ])
          ]),
          _c("view", { staticClass: "cu-form-group" }, [
            _c(
              "view",
              { staticClass: "grid col-4 grid-square flex-sub" },
              [
                _vm._l(_vm.imgList, function(item, index) {
                  return _c(
                    "view",
                    {
                      key: index,
                      staticClass: "bg-img",
                      attrs: {
                        "data-url": _vm.imgList[index],
                        eventid: "32ade9f0-12-" + index
                      },
                      on: { tap: _vm.ViewImage }
                    },
                    [
                      _c("image", {
                        attrs: { src: _vm.imgList[index], mode: "aspectFill" }
                      }),
                      _c(
                        "view",
                        {
                          staticClass: "cu-tag bg-red",
                          attrs: {
                            "data-index": index,
                            eventid: "32ade9f0-11-" + index
                          },
                          on: {
                            tap: function($event) {
                              $event.stopPropagation()
                              _vm.DelImg($event)
                            }
                          }
                        },
                        [_c("text", { staticClass: "cuIcon-close" })]
                      )
                    ]
                  )
                }),
                _vm.imgList.length < 4
                  ? _c(
                      "view",
                      {
                        staticClass: "solids",
                        attrs: { eventid: "32ade9f0-13" },
                        on: { tap: _vm.ChooseImage }
                      },
                      [_c("text", { staticClass: "cuIcon-cameraadd" })]
                    )
                  : _vm._e()
              ],
              2
            )
          ]),
          _c("view", { staticClass: "cu-form-group margin-top" }, [
            _c("view", { staticClass: "title" }, [_vm._v("头像")]),
            _c("view", { staticClass: "cu-avatar radius bg-gray" })
          ]),
          _c("view", { staticClass: "cu-form-group margin-top" }, [
            _c("textarea", {
              attrs: {
                maxlength: "-1",
                disabled: _vm.modalName != null,
                placeholder: "多行文本输入框",
                eventid: "32ade9f0-14"
              },
              on: { input: _vm.textareaAInput }
            })
          ]),
          _c("view", { staticClass: "cu-form-group align-start" }, [
            _c("view", { staticClass: "title" }, [_vm._v("文本框")]),
            _c("textarea", {
              attrs: {
                maxlength: "-1",
                disabled: _vm.modalName != null,
                placeholder: "多行文本输入框",
                eventid: "32ade9f0-15"
              },
              on: { input: _vm.textareaBInput }
            })
          ])
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

},[["../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/main.js?{\"page\":\"pages%2Fcomponent%2Fform\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/component/form.js.map