parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||t(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return c(e)}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var l=document.querySelector(".append-row"),u=document.querySelector(".remove-row"),d=document.querySelector(".append-column"),a=document.querySelector(".remove-column"),i=document.querySelector(".container"),m=function(){d.disabled=document.querySelector("tr").children.length>9||!(document.querySelector("tr").children.length>2)&&null,a.disabled=!(document.querySelector("tr").children.length>2)&&(document.querySelector("tr").children.length<3||null)},y=function(){l.disabled=document.querySelectorAll("tr").length>9||!(document.querySelectorAll("tr").length>2)&&null,u.disabled=!(document.querySelectorAll("tr").length>2)&&(document.querySelectorAll("tr").length<3||null)};i.addEventListener("click",function(r){switch(r.target.classList[0]){case"append-row":for(var t=document.querySelector("tbody"),n=document.createElement("tr"),o=document.querySelector("tr").children.length,c=0;c<o;c++){var l=document.createElement("td");n.append(l)}t.append(n),y();break;case"remove-row":var u=document.querySelectorAll("tr");u[u.length-1].remove(),y();break;case"append-column":e(document.querySelectorAll("tr")).forEach(function(e){e.append(document.createElement("td"))}),m();break;case"remove-column":e(document.querySelectorAll("tr")).forEach(function(e){e.children[e.children.length-1].remove()}),m()}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e48aa120.js.map