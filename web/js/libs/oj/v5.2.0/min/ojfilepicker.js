/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","knockout","ojs/ojcomponentcore","ojs/ojcomposite"],function(e,t,n){e.Composite.register("oj-file-picker",{view:"<input type='file' style='display:none'       data-bind=\"attr:{multiple: $properties.selectionMode == 'multiple',                         accept: acceptStr}\"></input><div class='oj-filepicker-clickable'>  <oj-bind-slot name='trigger'>    <div tabindex='0'         class='oj-filepicker-dropzone'>      <p class='oj-filepicker-text' data-bind='text: defDropzoneText'></p>    </div>  </oj-bind-slot></div>",viewModel:function(r){var i,o,a=r.element,s=r.properties,l=!1;function d(e){var n=i[0],r=t(a).find(".oj-filepicker-clickable")[0];switch(function(e){e&&(e.removeEventListener("dragenter",m,!1),e.removeEventListener("dragover",h,!1),e.removeEventListener("dragleave",j,!1),e.removeEventListener("dragend",j,!1),e.removeEventListener("drop",k,!1))}(n),function(e){e&&(e.removeEventListener("click",c,!1),e.removeEventListener("keypress",c,!1))}(r),e){case"click":f(r);break;case"drop":v(n),r&&r.addEventListener("keypress",c,!1);break;case"auto":case"clickAndDrop":default:f(r),v(n)}}function c(e){return l=!0,e.preventDefault(),o.click(),!0}function p(e){e.preventDefault(),e.stopPropagation();var t=e.target.files;t.length>0&&(E(t,e),o.value=null),l=!1}function u(t){var n,r=s.accept;if(!r||0===r.length||!t)return!0;for(var i=0;i<r.length;i++){if(!(n=e.StringUtils.trim(r[i])))return!0;if(n.startsWith(".",0)){if(!t.name||t.name&&t.name.endsWith(n))return!0}else{if(!t.type)return!1;if("image/*"===n){if(t.type.startsWith("image/",0))return!0}else if("video/*"===n){if(t.type.startsWith("video/",0))return!0}else if("audio/*"===n){if(t.type.startsWith("audio/",0))return!0}else if(t.type===n)return!0}}return!1}function f(e){e&&(e.addEventListener("click",c,!1),e.addEventListener("keypress",c,!1))}function v(e){e&&(e.addEventListener("dragenter",m,!1),e.addEventListener("dragover",h,!1),e.addEventListener("dragleave",j,!1),e.addEventListener("dragend",j,!1),e.addEventListener("drop",k,!1))}function g(e){var t="single"!==a.selectionMode||1===e.length;return t?function(e){if(e)for(var t=0;t<e.length;t++)if(!u(e[t]))return!1;return!0}(e):t}function m(e){e.preventDefault(),e.stopPropagation()}function h(e){e.preventDefault(),e.stopPropagation();var t=e.dataTransfer,n=!t.items||g(t.items);return n?(t.dropEffect="copy",i.addClass("oj-valid-drop")):t.dropEffect="none",n}function j(e){e.preventDefault(),e.stopPropagation(),i.removeClass("oj-valid-drop")}function k(t){var n=t.dataTransfer.files;g(n)?E(n,t):e.Logger.warn("oj-file-picker: Files "+function(e){var t="";if(e)for(var n=0;n<e.length;n++)t+=e[n].name+" ";return t}(n)+" are not acceptable."),j(t)}function E(e,t){var n=new CustomEvent("ojSelect",{detail:{files:e,originalEvent:t}});a.dispatchEvent(n)}this.acceptStr=n.pureComputed(function(){var e=s.accept;return e&&e.length?e.join(","):null},this),a.addEventListener("selectOnChanged",function(e){d(e.detail.value)}),this.defDropzoneText=e.Translations.getTranslatedString("oj-ojFilePicker.dropzoneText"),this.bindingsApplied=function(){var n=t(a);n.addClass("oj-filepicker"),i=n.find(".oj-filepicker-dropzone"),d(s.selectOn);var r=n.find("input");r.length&&(o=r[0]).addEventListener("change",p,!1),i.length&&(i[0].addEventListener("focus",function(){l||(e.DomUtils.recentPointer()?i.removeClass("oj-focus-highlight"):i.addClass("oj-focus-highlight"))}),i[0].addEventListener("focusout",function(){l||i.removeClass("oj-focus-highlight")}))}},metadata:{properties:{accept:{type:"Array<string>"},selectOn:{type:"string",enumValues:["auto","click","clickAndDrop","drop"],value:"auto"},selectionMode:{type:"string",enumValues:["multiple","single"],value:"multiple"}},methods:{setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojSelect:{}},extension:{}}})});
