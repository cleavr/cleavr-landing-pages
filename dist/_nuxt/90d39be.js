(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{199:function(e,n,t){"use strict";t.r(n);t(68),t(69),t(28),t(49);var r=t(100);var o=t(103);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}var d=new Map;function y(e){if("undefined"==typeof IntersectionObserver)return null;var n=JSON.stringify(e);if(d.has(n))return d.get(n);var t=new IntersectionObserver((function(e){e.forEach((function(e){(e.isIntersecting||e.intersectionRatio>0)&&e.target.hydrate&&e.target.hydrate()}))}),e);return d.set(n,t),t}function h(e,n){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(n){l(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}({render:function(n){var t=this.$el?this.$el.tagName:"div";return this.$el||e._resolve(),n(t)}},n)}function v(component){var e,n=new Promise((function(n){e=n}));return n._resolve=function(){e("function"==typeof component?component():component)},n}var m="undefined"==typeof window;Boolean,Boolean,Boolean,Boolean,Boolean;const w=e=>e.replace(/_/,"").toUpperCase(),O=e=>e.replace(/-/,"").toUpperCase();var _={name:"Dynamic",props:{name:{type:String,required:!0},hydration:{type:String,default:"WhenIdle"}},computed:{hydrate:function(){var e;return null!==(e=this["hydrate".concat(this.hydration)])&&void 0!==e?e:null},componentLoader:function(){var e,n=this;return null!==(e=[""].concat(c(this.$nuxtDynamic.prefixes)).map((function(e){var t="Lazy".concat(e).concat(n.name.replace(/(^\w|-\w)/g,O).replace(/(^\w|_\w)/g,w));return t in n.$nuxtDynamic.loaders?n.$nuxtDynamic.loaders[t]:null})).filter((function(e){return e})).shift())&&void 0!==e?e:null},lazyComponent:function(){return this.hydrate&&this.componentLoader?this.hydrate(this.componentLoader):this.name}},methods:{hydrateOnInteraction:function(component){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.event,t=void 0===n?"focus":n,r=e.ignoredProps;if(m)return component;var o=v(component),c=Array.isArray(t)?t:[t],l=h(o,{props:r,mounted:function(){var e=this;c.forEach((function(n){e.$el.addEventListener(n,o._resolve,{capture:!0,once:!0,passive:!0})}))}});return function(){return{component:o,delay:0,loading:l}}},hydrateWhenIdle:function(component){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.ignoredProps;if(m)return component;var t=v(component),r=h(t,{props:n,mounted:function(){if("requestIdleCallback"in window&&"requestAnimationFrame"in window){var e=requestIdleCallback((function(){requestAnimationFrame(t._resolve)}),{timeout:this.idleTimeout});t.then((function(){return cancelIdleCallback(e)}))}else t._resolve()}});return function(){return{component:t,delay:0,loading:r}}},hydrateWhenVisible:function(component){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.ignoredProps,t=e.observerOptions;if(m)return component;var r=v(component),o=y(t),c=h(r,{props:n,mounted:function(){var e=this;if(o){this.$el.hydrate=r._resolve;r.then((function(){return o.unobserve(e.$el)})),o.observe(this.$el)}else r._resolve()}});return function(){return{component:r,delay:0,loading:c}}},hydrateSsrOnly:function(component){if(m)return component;var e=v(component),n=h(e);return function(){return{component:e,delay:0,loading:n}}}}},j=t(27),component=Object(j.a)(_,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.lazyComponent?t(e.lazyComponent,e._g(e._b({tag:"component",staticClass:"blokwise__dynamic",scopedSlots:e._u([e._l(e.$slots,(function(n,t){return{key:t,fn:function(){return[e._t(t)]},proxy:!0}})),e._l(e.$scopedSlots,(function(n,t){return{key:t,fn:function(n){return[e._t(t,null,null,n)]}}}))],null,!0)},"component",e.$attrs,!1),e.$listeners)):e._e()}),[],!1,null,null,null);n.default=component.exports}}]);