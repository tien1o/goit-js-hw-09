function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("7Y9D8");const i=document.querySelector(".form"),l=document.querySelector('input[name="amount"]'),d=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]');function c(t,n){const o=Math.random()>.3;new Promise(((e,r)=>{setTimeout((()=>{o?e(t):r(t)}),n)})).then((o=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((o=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}i.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=Number(l.value),t=Number(d.value),n=Number(a.value);for(let o=0;o<e;o++)c(o+1,t+o*n)})()}));
//# sourceMappingURL=03-promises.3bb2b458.js.map