/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore"],function(e){var t=function(){function e(){}return e.prototype.addEventListener=function(e,t){this._eventListeners||(this._eventListeners=[]),this._eventListeners.push({type:e.toLowerCase(),listener:t})},e.prototype.removeEventListener=function(e,t){if(this._eventListeners){var n=void 0;for(n=this._eventListeners.length-1;n>=0;n--)this._eventListeners[n].type==e&&this._eventListeners[n].listener==t&&this._eventListeners.splice(n,1)}},e.prototype.dispatchEvent=function(e){if(this._eventListeners){var t,n=this._eventListeners.slice(0);for(t=0;t<n.length;t++){var i=n[t];if(i.type==e.type&&!1===i.listener.apply(this,[e]))return!1}}return!0},e.applyMixin=function(t){[e].forEach(function(e){Object.getOwnPropertyNames(e.prototype).forEach(function(n){"constructor"!==n&&(t.prototype[n]=e.prototype[n])})})},e}();e.EventTargetMixin=t;var n=function(){return function(e,t){this.type=e,this.options=t,null!=t&&(this.detail=t.detail)}}();e.GenericEvent=n});
