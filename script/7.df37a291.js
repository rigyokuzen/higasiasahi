dianpinPlus([7],{315:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return{userinfo:e.userinfo}}function p(e){return{appActionList:(0,b.bindActionCreators)(m,e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),l=o(s),f=n(6),d=o(f),h=n(11),b=n(14),y=n(122),m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(y),_=n(130),v=(o(_),n(129)),O=o(v),w=n(134),j=(o(w),n(135)),P=o(j),k=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.shouldComponentUpdate=d.default.shouldComponentUpdate.bind(n),n}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props.match.params;return l.default.createElement("div",null,l.default.createElement(O.default,null),l.default.createElement(P.default,{shopid:e.shopid}))}},{key:"componentDidMount",value:function(){this.props.appActionList.initShopAndDesk({shopid:this.props.match.params.shopid,deskid:this.props.match.params.deskid}),this.props.appActionList.menu({location:1})}}]),t}(s.Component);t.default=(0,h.connect)(a,p)(k)}});