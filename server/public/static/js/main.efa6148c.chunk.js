(this["webpackJsonplive-calculator"]=this["webpackJsonplive-calculator"]||[]).push([[0],[,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_aminkedir_sezzle_live_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_Users_aminkedir_sezzle_live_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_Users_aminkedir_sezzle_live_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_Users_aminkedir_sezzle_live_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_components_results__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),_components_KeypadComponent__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),App=function(_Component){Object(_Users_aminkedir_sezzle_live_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(App,_Component);var _super=Object(_Users_aminkedir_sezzle_live_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(App);function App(){var _this;return Object(_Users_aminkedir_sezzle_live_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),_this=_super.call(this),_this.onClick=function(e){"="===e?_this.calculate():"C"===e?_this.reset():"CE"===e?_this.backspace():_this.setState({result:_this.state.result+e})},_this.calculate=function(){try{_this.setState({result:(eval(_this.state.result)||"")+""})}catch(e){console.log("this is error",e),_this.setState({result:"error"})}},_this.reset=function(){_this.setState({result:""})},_this.backspace=function(){_this.setState({result:_this.state.result.slice(0,-1)})},_this.state={result:""},_this}return Object(_Users_aminkedir_sezzle_live_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_KeypadComponent__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:this.onClick}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1",null,"Results"),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_results__WEBPACK_IMPORTED_MODULE_6__.a,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p",null,this.state.resultsArray)))}}]),App}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=App},function(e,_,t){"use strict";var n=t(1),a=t(2),r=t(4),l=t(3),c=t(0),o=t.n(c),s=function(e){Object(r.a)(t,e);var _=Object(l.a)(t);function t(){return Object(n.a)(this,t),_.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){var e=this.props.result;return[].push(e),o.a.createElement("div",{className:"result"},o.a.createElement("p",null,e))}}]),t}(c.Component);_.a=s},function(e,_,t){"use strict";var n=t(1),a=t(2),r=t(4),l=t(3),c=t(0),o=t.n(c),s=function(e){Object(r.a)(t,e);var _=Object(l.a)(t);function t(){return Object(n.a)(this,t),_.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"button"},o.a.createElement("button",{name:"(",onClick:function(_){return e.props.onClick(_.target.name)}},"("),o.a.createElement("button",{name:"CE",onClick:function(_){return e.props.onClick(_.target.name)}},"CE"),o.a.createElement("button",{name:")",onClick:function(_){return e.props.onClick(_.target.name)}},")"),o.a.createElement("button",{name:"C",onClick:function(_){return e.props.onClick(_.target.name)}},"C"),o.a.createElement("br",null),o.a.createElement("button",{name:"1",onClick:function(_){return e.props.onClick(_.target.name)}},"1"),o.a.createElement("button",{name:"2",onClick:function(_){return e.props.onClick(_.target.name)}},"2"),o.a.createElement("button",{name:"3",onClick:function(_){return e.props.onClick(_.target.name)}},"3"),o.a.createElement("button",{name:"+",onClick:function(_){return e.props.onClick(_.target.name)}},"+"),o.a.createElement("br",null),o.a.createElement("button",{name:"4",onClick:function(_){return e.props.onClick(_.target.name)}},"4"),o.a.createElement("button",{name:"5",onClick:function(_){return e.props.onClick(_.target.name)}},"5"),o.a.createElement("button",{name:"6",onClick:function(_){return e.props.onClick(_.target.name)}},"6"),o.a.createElement("button",{name:"-",onClick:function(_){return e.props.onClick(_.target.name)}},"-"),o.a.createElement("br",null),o.a.createElement("button",{name:"7",onClick:function(_){return e.props.onClick(_.target.name)}},"7"),o.a.createElement("button",{name:"8",onClick:function(_){return e.props.onClick(_.target.name)}},"8"),o.a.createElement("button",{name:"9",onClick:function(_){return e.props.onClick(_.target.name)}},"9"),o.a.createElement("button",{name:"*",onClick:function(_){return e.props.onClick(_.target.name)}},"x"),o.a.createElement("br",null),o.a.createElement("button",{name:".",onClick:function(_){return e.props.onClick(_.target.name)}},"."),o.a.createElement("button",{name:"0",onClick:function(_){return e.props.onClick(_.target.name)}},"0"),o.a.createElement("button",{name:"=",onClick:function(_){return e.props.onClick(_.target.name)}},"="),o.a.createElement("button",{name:"/",onClick:function(_){return e.props.onClick(_.target.name)}},"\xf7"),o.a.createElement("br",null))}}]),t}(c.Component);_.a=s},function(e,_,t){e.exports=t(17)},,,,,function(e,_,t){},function(e,_,t){},function(e,_,t){"use strict";t.r(_);var n=t(0),a=t.n(n),r=t(6),l=t.n(r),c=(t(15),t(7));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.efa6148c.chunk.js.map