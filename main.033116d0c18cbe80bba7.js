"use strict";(self.webpackChunknews=self.webpackChunknews||[]).push([[179],{267:(t,e,r)=>{var n=r(294),o=r(745);r(111);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,c=void 0,c=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===i(c)?c:String(c)),n)}var o,c}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=f(t);if(e){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r)}}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}var l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(f,t);var e,r,o,i=a(f);function f(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),i.call(this,t)}return e=f,r=[{key:"render",value:function(){var t={backgroundImage:"url(".concat(this.props.img,")")};return n.createElement("header",{style:t})}}],r&&c(e.prototype,r),o&&c(e,o),Object.defineProperty(e,"prototype",{writable:!1}),f}(n.Component);r(656);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===s(i)?i:String(i)),n)}var o,i}function y(t,e){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},y(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=d(t);if(e){var o=d(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return m(t)}(this,r)}}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&y(t,e)}(c,t);var e,r,o,i=b(c);function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=i.call(this,t)).data=e.props.data,e.createList=e.createList.bind(m(e)),e}return e=c,r=[{key:"createList",value:function(t){return t.map((function(t,e){var r=t.list.map((function(t,e,r){return n.createElement("li",{id:"c_"+(e+1),key:"c_"+(e+1)},r[e])}));return n.createElement("ul",{id:e+1,key:e+1,className:"meal"},n.createElement("li",null,t.name),n.createElement("ul",null,r))}))}},{key:"render",value:function(){return n.createElement("div",{className:"body"},n.createElement("main",null,n.createElement("ul",{className:"menu"},this.createList(this.data))))}}],r&&p(e.prototype,r),o&&p(e,o),Object.defineProperty(e,"prototype",{writable:!1}),c}(n.Component);r(439);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===h(i)?i:String(i)),n)}var o,i}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=j(t);if(e){var o=j(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r)}}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(c,t);var e,r,o,i=g(c);function c(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,t)}return e=c,(r=[{key:"render",value:function(){return n.createElement("footer",{style:{backgroundImage:"url(".concat(this.props.img,")")}})}}])&&w(e.prototype,r),o&&w(e,o),Object.defineProperty(e,"prototype",{writable:!1}),c}(n.Component);const S=r.p+"17f99137d93a08a7903c.png",E=r.p+"4562d84befe626eb1bd9.png";function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function R(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(o=n.key,i=void 0,i=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===_(i)?i:String(i)),n)}var o,i}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},k(t,e)}function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=C(t);if(e){var o=C(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return B(t)}(this,r)}}function B(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(c,t);var e,r,o,i=T(c);function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=i.call(this,t)).refreshImg=e.refreshImg.bind(B(e)),e.img=null,e.state={width:0},e.data=!!e.props.data&&e.props.data,e}return e=c,(r=[{key:"componentDidMount",value:function(){this.setState({width:window.innerWidth}),window.addEventListener("resize",this.refreshImg)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.refreshImg)}},{key:"refreshImg",value:function(){this.setState({width:+window.innerWidth})}},{key:"render",value:function(){return this.img=this.state.width>516?E:S,n.createElement("div",null,n.createElement(l,{img:this.img}),n.createElement(v,{data:this.data}),n.createElement(P,{img:this.img}))}}])&&R(e.prototype,r),o&&R(e,o),Object.defineProperty(e,"prototype",{writable:!1}),c}(n.Component);r(118);o.s(document.body.querySelector("#root")).render(n.createElement(x,{data:[{name:"Antipasto",list:["Bocconcino","Grissini con crudo","Salsiccia secca","Acciuga con burro","Sottaceti","Formaggio"]},{name:"Primo",list:["Rigatoni alla Bolognese"]},{name:"Secondo",list:["Salsiccia al forno con patate"]},{name:"Frutta",list:["Macedonia"]},{name:"Dolce",list:["Pastiera"]}]}))},118:(t,e,r)=>{var n=r(783)(t.id,{locals:!1});t.hot.dispose(n),t.hot.accept(void 0,n)},656:(t,e,r)=>{var n=r(783)(t.id,{locals:!1});t.hot.dispose(n),t.hot.accept(void 0,n)},439:(t,e,r)=>{var n=r(783)(t.id,{locals:!1});t.hot.dispose(n),t.hot.accept(void 0,n)},111:(t,e,r)=>{var n=r(783)(t.id,{locals:!1});t.hot.dispose(n),t.hot.accept(void 0,n)}},t=>{t.O(0,[126],(()=>{return e=267,t(t.s=e);var e}));t.O()}]);
//# sourceMappingURL=main.033116d0c18cbe80bba7.js.map