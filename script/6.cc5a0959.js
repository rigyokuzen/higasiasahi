dianpinPlus([6],{316:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{}}function a(e){return{appActionList:(0,y.bindActionCreators)(_,e)}}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),p=o(l),s=n(6),d=o(s),b=n(11),y=n(14),h=n(122),_=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(h),v=function(e){function t(e){r(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.shouldComponentUpdate=d.default.shouldComponentUpdate.bind(n),n}return i(t,e),f(t,[{key:"render",value:function(){return p.default.createElement("h2",{style:{textAlign:"center"}},"404页面丢失了...")}},{key:"componentDidMount",value:function(){this.props.appActionList.menu({location:-1})}}]),t}(l.Component);t.default=(0,b.connect)(c,a)(v)}});