!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var r,i,u,a,f,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError(o);function j(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function T(e){return c=e,f=setTimeout(S,t),s?j(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function S(){var e=g();if(O(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-l);return d?m(n,u-(e-c)):n}(e))}function h(e){return f=void 0,b&&r?j(e):(r=i=void 0,a)}function w(){var e=g(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return T(l);if(d)return f=setTimeout(S,t),j(l)}return void 0===f&&(f=setTimeout(S,t)),a}return t=y(t)||0,p(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(y(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?a:h(g())},w}function p(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(p(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=p(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=u.test(e);return l||a.test(e)?f(e.slice(2),l?2:8):i.test(e)?NaN:+e}var j,T,O="feedback-form-state",S=document.querySelector(".feedback-form");S.addEventListener("input",(function(e){var t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.message.value,o={email:t,message:n};localStorage.setItem(O,JSON.stringify(o))})),S.addEventListener("submit",(function(e){e.preventDefault(),console.log(S.email.value,S.message.value),e.currentTarget.reset(),localStorage.removeItem(O)})),j=localStorage.getItem(O),T=JSON.parse(j),j&&(console.log(T.email),console.log(T.message),S.email.value=T.email,S.message.value=T.message)}();
//# sourceMappingURL=03-feedback.ada14ef6.js.map
