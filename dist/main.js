!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n,e){},function(t,n,e){"use strict";e.r(n);const r="http://localhost:8080/products",o=async t=>{const n=t?`${r}/product/${t}`:r+"/list";try{const t=await fetch(n);return await t.json()}catch{console.log(error)}},i=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",a={"/":async()=>`\n    <div class="Items">\n      ${(await o()).map(t=>`\n          <article class="Item">\n            <a href="#/${t.id}">\n              <img src="${t.image_url}" alt="${t.product_name}"/>\n              <p><strong>Product Name:</strong> ${t.product_name}</p>\n              <p><strong>Product Price:</strong> ${t.price}</p>\n              <p><strong>Description:</strong> ${t.description}</p>\n              <button>Add Car</button>\n            </a>\n          </article>\n        `).join("")}\n    </div>\n  `,"/:id":async()=>{const t=i(),n=await o(t);return`\n\t\t<div class="Item">\n\t\t\t<article>\n\t\t\t\t<img src="${n.image_url}" alt="${n.product_name}" />\n\t\t\t</article>\n\t\t\t<article>\n\t\t\t\t<p><strong>Name:</strong> ${n.product_name}</p>\n\t\t\t\t<p><strong>Name:</strong> ${n.price}</p>\n\t\t\t\t<p><strong>Description:</strong> ${n.description}</p>\n\t\t\t</article>\n\t\t</div>\n\t`}},c=async()=>{const t=document.getElementById("header"),n=document.getElementById("store");t.innerHTML=await'\n\t\t<div>\n\t\t\t<a href="">\n\t\t\t\t<h1>Bryson\'s Shop</h1>\n\t\t\t</a>\n\t\t</div>\n\t';let e=i(),r=await(t=>{if(t.length<=3){return"/"===t?t:"/:id"}return"/"+t})(e),o=a[r]?a[r]:"";n.innerHTML=await o()};e(0);window.addEventListener("load",c),window.addEventListener("hashchange",c)}]);