dianpinPlus([5],{321:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function l(e){return{}}function u(e){return{appActionList:(0,m.bindActionCreators)(g,e)}}Object.defineProperty(n,"__esModule",{value:!0});var c=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),s=t(0),f=o(s),p=t(6),d=o(p),b=t(119),h=t(11),m=t(14),y=t(121),g=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(y),v=t(639),x=o(v),O=t(659),_=o(O),j=function(e){function n(e){r(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.shouldComponentUpdate=d.default.shouldComponentUpdate.bind(t),t.state={data:[]},t}return i(n,e),c(n,[{key:"render",value:function(){console.log("****"+this.props.data);this.props.data;return f.default.createElement("div",{id:_.default["user-info"]},f.default.createElement(x.default,null),f.default.createElement("div",{style:{height:"15px"}}))}},{key:"componentDidMount",value:function(){console.log(1111),this.props.appActionList.menu({location:4});var e=(0,b.getUserData)();console.log("result***22233***"+e),this.resultHandle(e)}},{key:"resultHandle",value:function(e){var n=this;e.then(function(e){if(console.log(e),e.ok)return console.log("22332323"),e.json();console.log(e)}).then(function(e){console.log("222"+e);var t=e.data;console.log("22233"+t),n.setState({data:n.state.data.concat(t)})}).catch(function(e){console.log(e.message)})}}]),n}(s.Component);n.default=(0,h.connect)(l,u)(j)},639:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),u=t(0),c=o(u),s=t(6),f=o(s),p=t(660),d=o(p),b=function(e){function n(e){r(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.shouldComponentUpdate=f.default.shouldComponentUpdate.bind(t),t}return i(n,e),l(n,[{key:"render",value:function(){return c.default.createElement("div",{id:d.default["user-info-face"],className:"clear-fix"},c.default.createElement("div",{className:d.default.face}),c.default.createElement("div",{className:d.default["user-info-action"]},c.default.createElement("span",null,"登录"),c.default.createElement("span",null,"注册")))}}]),n}(u.Component);n.default=b},649:function(e,n,t){n=e.exports=t(311)(!1),n.push([e.i,"",""])},650:function(e,n,t){var o=t(322);n=e.exports=t(311)(!1),n.push([e.i,"#user-info-face-1OREOB26 {\n  background-color: #fdfbef;\n  height: 200px;\n  position: relative;\n}\n\n#user-info-face-1OREOB26 .face-3dSOm2u_ {\n  background: url("+o(t(662))+") no-repeat;\n  width: 100px;\n  height: 100px;\n  background-size: 100% auto;\n  top: 30px;\n  position: absolute;\n  text-align: center;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n  -ms-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  border-radius: 50%;\n}\n\n#user-info-face-1OREOB26 .user-info-action-1C7jJ7S0 {\n  position: absolute;\n  text-align: center;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n  -ms-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  top: 135px;\n}\n\n#user-info-face-1OREOB26 .user-info-action-1C7jJ7S0 span {\n  background: #e9203d;\n  float: left;\n  padding: 2px 5px;\n  color: #fff;\n  border-radius: 5px;\n}\n\n#user-info-face-1OREOB26 .user-info-action-1C7jJ7S0 span:nth-child(2) {\n  margin-left: 30px;\n}\n\n#user-action-list-7x3aSYhz {\n  background-color: #fff;\n}\n\n#user-action-list-7x3aSYhz li {\n  padding: 15px 0px 15px 15px;\n}\n\n#user-action-list-7x3aSYhz li a {\n  width: 100%;\n  float: left;\n  border-left: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  border-top: 1px solid #ccc;\n  padding: 10px 0px 10px 10px;\n}",""]),n.locals={"user-info-face":"user-info-face-1OREOB26",face:"face-3dSOm2u_","user-info-action":"user-info-action-1C7jJ7S0","user-action-list":"user-action-list-7x3aSYhz"}},659:function(e,n,t){var o=t(649);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;t(312)(o,r);o.locals&&(e.exports=o.locals)},660:function(e,n,t){var o=t(650);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;t(312)(o,r);o.locals&&(e.exports=o.locals)},662:function(e,n,t){e.exports=t.p+"images/face.22223450.jpg"}});