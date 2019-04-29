(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/component/nav"],{

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/main.js?{\"page\":\"pages%2Fcomponent%2Fnav\"}":
/*!********************************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/main.js?{"page":"pages%2Fcomponent%2Fnav"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _nav = _interopRequireDefault(__webpack_require__(/*! ./pages/component/nav.vue */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/nav.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_nav.default));

/***/ }),

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/nav.vue":
/*!*************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/nav.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_vue_vue_type_template_id_a2e25d06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.vue?vue&type=template&id=a2e25d06& */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/nav.vue?vue&type=template&id=a2e25d06&");
/* harmony import */ var _nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.vue?vue&type=script&lang=js& */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/nav.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nav_vue_vue_type_template_id_a2e25d06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nav_vue_vue_type_template_id_a2e25d06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/nav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/nav.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/nav.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./nav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/nav.vue?vue&type=script&lang=js&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/nav.vue?vue&type=template&id=a2e25d06&":
/*!********************************************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/nav.vue?vue&type=template&id=a2e25d06& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_a2e25d06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./nav.vue?vue&type=template&id=a2e25d06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/nav.vue?vue&type=template&id=a2e25d06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_a2e25d06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_a2e25d06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/nav.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/nav.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =






































































{
  data: function data() {
    return {
      TabCur: 0,
      scrollLeft: 0 };

  },
  methods: {
    tabSelect: function tabSelect(e) {
      this.TabCur = e.currentTarget.dataset.id;
      this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/nav.vue?vue&type=template&id=a2e25d06&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/nav.vue?vue&type=template&id=a2e25d06& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
            mpcomid: "7b0dd25f-0"
          }
        },
        [
          _c("block", { slot: "backText" }, [_vm._v("返回")]),
          _c("block", { slot: "content" }, [_vm._v("导航栏")])
        ],
        1
      ),
      _vm._l(10, function(item, index) {
        return index == _vm.TabCur
          ? _c(
              "view",
              { key: index, staticClass: "bg-grey padding margin text-center" },
              [_vm._v("Tab" + _vm._s(index))]
            )
          : _vm._e()
      }),
      _vm._m(0),
      _c(
        "scroll-view",
        {
          staticClass: "bg-white nav",
          attrs: {
            "scroll-x": "",
            "scroll-with-animation": "",
            "scroll-left": _vm.scrollLeft
          }
        },
        _vm._l(10, function(item, index) {
          return _c(
            "view",
            {
              key: index,
              staticClass: "cu-item",
              class: index == _vm.TabCur ? "text-green cur" : "",
              attrs: { "data-id": index, eventid: "7b0dd25f-0-" + index },
              on: { tap: _vm.tabSelect }
            },
            [_vm._v("Tab" + _vm._s(index))]
          )
        })
      ),
      _vm._m(1),
      _c(
        "scroll-view",
        { staticClass: "bg-white nav text-center", attrs: { "scroll-x": "" } },
        _vm._l(3, function(item, index) {
          return _c(
            "view",
            {
              key: index,
              staticClass: "cu-item",
              class: index == _vm.TabCur ? "text-blue cur" : "",
              attrs: { "data-id": index, eventid: "7b0dd25f-1-" + index },
              on: { tap: _vm.tabSelect }
            },
            [_vm._v("Tab" + _vm._s(index))]
          )
        })
      ),
      _vm._m(2),
      _c(
        "scroll-view",
        { staticClass: "bg-white nav", attrs: { "scroll-x": "" } },
        [
          _c(
            "view",
            { staticClass: "flex text-center" },
            _vm._l(4, function(item, index) {
              return _c(
                "view",
                {
                  key: index,
                  staticClass: "cu-item flex-sub",
                  class: index == _vm.TabCur ? "text-orange cur" : "",
                  attrs: { "data-id": index, eventid: "7b0dd25f-2-" + index },
                  on: { tap: _vm.tabSelect }
                },
                [_vm._v("Tab" + _vm._s(index))]
              )
            })
          )
        ]
      ),
      _vm._m(3),
      _c(
        "scroll-view",
        { staticClass: "bg-red nav text-center", attrs: { "scroll-x": "" } },
        _vm._l(3, function(item, index) {
          return _c(
            "view",
            {
              key: index,
              staticClass: "cu-item",
              class: index == _vm.TabCur ? "text-white cur" : "",
              attrs: { "data-id": index, eventid: "7b0dd25f-3-" + index },
              on: { tap: _vm.tabSelect }
            },
            [_vm._v("Tab" + _vm._s(index))]
          )
        })
      ),
      _vm._m(4),
      _c(
        "scroll-view",
        { staticClass: "bg-green nav text-center", attrs: { "scroll-x": "" } },
        [
          _c(
            "view",
            {
              staticClass: "cu-item",
              class: 0 == _vm.TabCur ? "text-white cur" : "",
              attrs: { "data-id": "0", eventid: "7b0dd25f-4" },
              on: { tap: _vm.tabSelect }
            },
            [_c("text", { staticClass: "cuIcon-camerafill" }), _vm._v("数码")]
          ),
          _c(
            "view",
            {
              staticClass: "cu-item",
              class: 1 == _vm.TabCur ? "text-white cur" : "",
              attrs: { "data-id": "1", eventid: "7b0dd25f-5" },
              on: { tap: _vm.tabSelect }
            },
            [
              _c("text", { staticClass: "cuIcon-upstagefill" }),
              _vm._v("排行榜")
            ]
          ),
          _c(
            "view",
            {
              staticClass: "cu-item",
              class: 2 == _vm.TabCur ? "text-white cur" : "",
              attrs: { "data-id": "2", eventid: "7b0dd25f-6" },
              on: { tap: _vm.tabSelect }
            },
            [_c("text", { staticClass: "cuIcon-clothesfill" }), _vm._v("皮肤")]
          )
        ]
      )
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-bar bg-white solid-bottom" }, [
      _c("view", { staticClass: "action" }, [
        _c("text", { staticClass: "cuIcon-title text-orange" }),
        _vm._v("默认")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      { staticClass: "cu-bar bg-white margin-top solid-bottom" },
      [
        _c("view", { staticClass: "action" }, [
          _c("text", { staticClass: "cuIcon-title text-orange" }),
          _vm._v("居中")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      { staticClass: "cu-bar bg-white margin-top solid-bottom" },
      [
        _c("view", { staticClass: "action" }, [
          _c("text", { staticClass: "cuIcon-title text-orange" }),
          _vm._v("平分")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      { staticClass: "cu-bar bg-white margin-top solid-bottom" },
      [
        _c("view", { staticClass: "action" }, [
          _c("text", { staticClass: "cuIcon-title text-orange" }),
          _vm._v("背景")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      { staticClass: "cu-bar bg-white margin-top solid-bottom" },
      [
        _c("view", { staticClass: "action" }, [
          _c("text", { staticClass: "cuIcon-title text-orange" }),
          _vm._v("图标")
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ })

},[["../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/main.js?{\"page\":\"pages%2Fcomponent%2Fnav\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/component/nav.js.map