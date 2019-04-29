(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/component/card"],{

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/main.js?{\"page\":\"pages%2Fcomponent%2Fcard\"}":
/*!*********************************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/main.js?{"page":"pages%2Fcomponent%2Fcard"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _card = _interopRequireDefault(__webpack_require__(/*! ./pages/component/card.vue */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/card.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_card.default));

/***/ }),

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/card.vue":
/*!**************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/card.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_vue_vue_type_template_id_aeb962b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.vue?vue&type=template&id=aeb962b4& */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/card.vue?vue&type=template&id=aeb962b4&");
/* harmony import */ var _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.vue?vue&type=script&lang=js& */ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/card.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _card_vue_vue_type_template_id_aeb962b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _card_vue_vue_type_template_id_aeb962b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/card.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/card.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/card.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/card.vue?vue&type=script&lang=js&");
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/card.vue?vue&type=template&id=aeb962b4&":
/*!*********************************************************************************************************************!*\
  !*** /Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/card.vue?vue&type=template&id=aeb962b4& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_aeb962b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./card.vue?vue&type=template&id=aeb962b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/card.vue?vue&type=template&id=aeb962b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_aeb962b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_template_id_aeb962b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/card.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/card.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =





















































































































































{
  data: function data() {
    return {
      isCard: false };

  },
  methods: {
    IsCard: function IsCard(e) {
      this.isCard = e.detail.value;
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/card.vue?vue&type=template&id=aeb962b4&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!/Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/pages/component/card.vue?vue&type=template&id=aeb962b4& ***!
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
            mpcomid: "32b10d58-0"
          }
        },
        [
          _c("block", { slot: "backText" }, [_vm._v("返回")]),
          _c("block", { slot: "content" }, [_vm._v("卡片")])
        ],
        1
      ),
      _c("view", { staticClass: "cu-bar bg-white solid-bottom" }, [
        _vm._m(0),
        _c("view", { staticClass: "action" }, [
          _c("switch", {
            class: _vm.isCard ? "checked" : "",
            attrs: {
              checked: _vm.isCard ? true : false,
              eventid: "32b10d58-0"
            },
            on: { change: _vm.IsCard }
          })
        ])
      ]),
      _c(
        "view",
        { staticClass: "cu-card case", class: _vm.isCard ? "no-card" : "" },
        [_vm._m(1)]
      ),
      _c(
        "view",
        {
          staticClass: "cu-bar bg-white solid-bottom",
          class: _vm.isCard ? "margin-top" : ""
        },
        [
          _vm._m(2),
          _c("view", { staticClass: "action" }, [
            _c("switch", {
              class: _vm.isCard ? "checked" : "",
              attrs: {
                checked: _vm.isCard ? true : false,
                eventid: "32b10d58-1"
              },
              on: { change: _vm.IsCard }
            })
          ])
        ]
      ),
      _c(
        "view",
        { staticClass: "cu-card dynamic", class: _vm.isCard ? "no-card" : "" },
        [
          _c("view", { staticClass: "cu-item shadow" }, [
            _vm._m(3),
            _c("view", { staticClass: "text-content" }, [
              _vm._v(
                "折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！"
              )
            ]),
            _c(
              "view",
              {
                staticClass: "grid flex-sub padding-lr",
                class: _vm.isCard ? "col-3 grid-square" : "col-1"
              },
              _vm._l(_vm.isCard ? 9 : 1, function(item, index) {
                return _c("view", {
                  key: index,
                  staticClass: "bg-img",
                  class: _vm.isCard ? "" : "only-img",
                  staticStyle: {
                    "background-image":
                      "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"
                  }
                })
              })
            ),
            _vm._m(4),
            _vm._m(5)
          ])
        ]
      ),
      _c("view", { staticClass: "cu-bar bg-white solid-bottom margin-top" }, [
        _vm._m(6),
        _c("view", { staticClass: "action" }, [
          _c("switch", {
            class: _vm.isCard ? "checked" : "",
            attrs: {
              checked: _vm.isCard ? true : false,
              eventid: "32b10d58-2"
            },
            on: { change: _vm.IsCard }
          })
        ])
      ]),
      _c(
        "view",
        { staticClass: "cu-card article", class: _vm.isCard ? "no-card" : "" },
        [_vm._m(7)]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "action" }, [
      _c("text", { staticClass: "cuIcon-titles text-orange" }),
      _vm._v("案例类卡片")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-item shadow" }, [
      _c("view", { staticClass: "image" }, [
        _c("image", {
          attrs: {
            src:
              "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
            mode: "widthFix"
          }
        }),
        _c("view", { staticClass: "cu-tag bg-blue" }, [_vm._v("史诗")]),
        _c("view", { staticClass: "cu-bar bg-shadeBottom" }, [
          _c("text", { staticClass: "text-cut" }, [
            _vm._v(
              "我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。"
            )
          ])
        ])
      ]),
      _c("view", { staticClass: "cu-list menu-avatar" }, [
        _c("view", { staticClass: "cu-item" }, [
          _c("view", {
            staticClass: "cu-avatar round lg",
            staticStyle: {
              "background-image":
                "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"
            }
          }),
          _c("view", { staticClass: "content flex-sub" }, [
            _c("view", { staticClass: "text-grey" }, [_vm._v("正义天使 凯尔")]),
            _c(
              "view",
              { staticClass: "text-gray text-sm flex justify-between" },
              [
                _vm._v("十天前"),
                _c("view", { staticClass: "text-gray text-sm" }, [
                  _c("text", {
                    staticClass: "cuIcon-attentionfill margin-lr-xs"
                  }),
                  _vm._v("10"),
                  _c("text", {
                    staticClass: "cuIcon-appreciatefill margin-lr-xs"
                  }),
                  _vm._v("20"),
                  _c("text", {
                    staticClass: "cuIcon-messagefill margin-lr-xs"
                  }),
                  _vm._v("30")
                ])
              ]
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "action" }, [
      _c("text", { staticClass: "cuIcon-titles text-orange " }),
      _vm._v("动态类卡片")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-list menu-avatar" }, [
      _c("view", { staticClass: "cu-item" }, [
        _c("view", {
          staticClass: "cu-avatar round lg",
          staticStyle: {
            "background-image":
              "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"
          }
        }),
        _c("view", { staticClass: "content flex-sub" }, [
          _c("view", [_vm._v("凯尔")]),
          _c(
            "view",
            { staticClass: "text-gray text-sm flex justify-between" },
            [_vm._v("2019年12月3日")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "text-gray text-sm text-right padding" }, [
      _c("text", { staticClass: "cuIcon-attentionfill margin-lr-xs" }),
      _vm._v("10"),
      _c("text", { staticClass: "cuIcon-appreciatefill margin-lr-xs" }),
      _vm._v("20"),
      _c("text", { staticClass: "cuIcon-messagefill margin-lr-xs" }),
      _vm._v("30")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      { staticClass: "cu-list menu-avatar comment solids-top" },
      [
        _c("view", { staticClass: "cu-item" }, [
          _c("view", {
            staticClass: "cu-avatar round",
            staticStyle: {
              "background-image":
                "url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"
            }
          }),
          _c("view", { staticClass: "content" }, [
            _c("view", { staticClass: "text-grey" }, [_vm._v("莫甘娜")]),
            _c("view", { staticClass: "text-gray text-content text-df" }, [
              _vm._v("凯尔，你被自己的光芒变的盲目。")
            ]),
            _c(
              "view",
              {
                staticClass: "bg-grey padding-sm radius margin-top-sm  text-sm"
              },
              [
                _c("view", { staticClass: "flex" }, [
                  _c("view", [_vm._v("凯尔：")]),
                  _c("view", { staticClass: "flex-sub" }, [
                    _vm._v("妹妹，你在帮他们给黑暗找借口吗?")
                  ])
                ])
              ]
            ),
            _c("view", { staticClass: "margin-top-sm flex justify-between" }, [
              _c("view", { staticClass: "text-gray text-df" }, [
                _vm._v("2018年12月4日")
              ]),
              _c("view", [
                _c("text", { staticClass: "cuIcon-appreciatefill text-red" }),
                _c("text", {
                  staticClass: "cuIcon-messagefill text-gray margin-left-sm"
                })
              ])
            ])
          ])
        ]),
        _c("view", { staticClass: "cu-item" }, [
          _c("view", {
            staticClass: "cu-avatar round",
            staticStyle: {
              "background-image":
                "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"
            }
          }),
          _c("view", { staticClass: "content" }, [
            _c("view", { staticClass: "text-grey" }, [_vm._v("凯尔")]),
            _c("view", { staticClass: "text-gray text-content text-df" }, [
              _vm._v("妹妹，如果不是为了飞翔，我们要这翅膀有什么用?")
            ]),
            _c(
              "view",
              {
                staticClass: "bg-grey padding-sm radius margin-top-sm  text-sm"
              },
              [
                _c("view", { staticClass: "flex" }, [
                  _c("view", [_vm._v("莫甘娜：")]),
                  _c("view", { staticClass: "flex-sub" }, [
                    _vm._v("如果不能立足于大地，要这双脚又有何用?")
                  ])
                ])
              ]
            ),
            _c("view", { staticClass: "margin-top-sm flex justify-between" }, [
              _c("view", { staticClass: "text-gray text-df" }, [
                _vm._v("2018年12月4日")
              ]),
              _c("view", [
                _c("text", { staticClass: "cuIcon-appreciate text-gray" }),
                _c("text", {
                  staticClass: "cuIcon-messagefill text-gray margin-left-sm"
                })
              ])
            ])
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "action" }, [
      _c("text", { staticClass: "cuIcon-titles text-orange " }),
      _vm._v("文章类卡片")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-item shadow" }, [
      _c("view", { staticClass: "title" }, [
        _c("view", { staticClass: "text-cut" }, [
          _vm._v(
            "无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。"
          )
        ])
      ]),
      _c("view", { staticClass: "content" }, [
        _c("image", {
          attrs: {
            src:
              "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
            mode: "aspectFill"
          }
        }),
        _c("view", { staticClass: "desc" }, [
          _c("view", { staticClass: "text-content" }, [
            _vm._v(
              "折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！"
            )
          ]),
          _c("view", [
            _c("view", { staticClass: "cu-tag bg-red light sm round" }, [
              _vm._v("正义天使")
            ]),
            _c("view", { staticClass: "cu-tag bg-green light sm round" }, [
              _vm._v("史诗")
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../../../../../Users/mac126/Downloads/ColorUI-master/Colorui-UniApp/main.js?{\"page\":\"pages%2Fcomponent%2Fcard\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/component/card.js.map