/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","ojs/ojeventtarget"],function(t){var e,r,i=t.GenericEvent;!function(t){!function(t){t.$co="$co",t.$eq="$eq",t.$ew="$ew",t.$pr="$pr",t.$gt="$gt",t.$ge="$ge",t.$lt="$lt",t.$le="$le",t.$ne="$ne",t.$regex="$regex",t.$sw="$sw"}(t.AttributeOperator||(t.AttributeOperator={}))}(e||(e={})),t.AttributeFilterOperator=e,t.AttributeFilterOperator.AttributeOperator=e.AttributeOperator,function(t){!function(t){t.$and="$and",t.$or="$or"}(t.CompoundOperator||(t.CompoundOperator={}))}(r||(r={})),t.CompoundFilterOperator=r,t.CompoundFilterOperator.CompoundOperator=r.CompoundOperator;var a=function(t){function e(r){var i={};return i[e._DETAIL]=r,t.call(this,"mutate",i)||this}return __extends(e,t),e._DETAIL="detail",e}(i);t.DataProviderMutationEvent=a,t.DataProviderMutationEvent=a;var n=function(t){function e(){return t.call(this,"refresh")||this}return __extends(e,t),e}(i);t.DataProviderRefreshEvent=n,t.DataProviderRefreshEvent=n,t.DataProvider=function(){};var o=function(){function t(){}return t.prototype.fetchByKeys=function(t){var e=0,r=this.getIterationLimit?this.getIterationLimit():-1,i={size:25},a=new Map,n=this.fetchFirst(i)[Symbol.asyncIterator]();return function t(i,a,n){return a.next().then(function(o){var p=o.value,s=p.data,u=p.metadata,f=u.map(function(t){return t.key}),c=!0;return i.keys.forEach(function(t){n.has(t)||f.map(function(e,r){e==t&&n.set(e,{metadata:u[r],data:s[r]})}),n.has(t)||(c=!1)}),e+=s.length,c||o.done?n:-1!=r&&e>=r?n:t(i,a,n)})}(t,n,a).then(function(e){var r=new Map;return e.forEach(function(t,e){var i=[t];r.set(e,i[0])}),{fetchParameters:t,results:r}})},t.prototype.containsKeys=function(t){return this.fetchByKeys(t).then(function(e){var r=new Set;return t.keys.forEach(function(t){null!=e.results.get(t)&&r.add(t)}),Promise.resolve({containsParameters:t,results:r})})},t.prototype.getCapability=function(t){if("fetchByKeys"==t)return{implementation:"iteration"};var e=null;if(!0!==this._ojSkipLastCapability){this._ojSkipLastCapability=!0;for(var r=1;this["_ojLastGetCapability"+r];)++r;for(--r;r>0&&!(e=this["_ojLastGetCapability"+r](t));r--);delete this._ojSkipLastCapability}return e},t.applyMixin=function(e){var r=e.prototype.getCapability;if([t].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(r){"constructor"!==r&&(e.prototype[r]=t.prototype[r])})}),r){for(var i=1;e.prototype["_ojLastGetCapability"+i];)++i;e.prototype["_ojLastGetCapability"+i]=r}},t}();t.FetchByKeysMixin=o,t.FetchByKeysMixin.applyMixin=o.applyMixin;var p=function(){function t(){}return t.prototype.fetchByOffset=function(t){var e=t&&t.size>0?t.size:25,r=t?t.sortCriteria:null,i=t&&t.offset>0?t.offset:0,a=0,n=this.getIterationLimit?this.getIterationLimit():-1,o=!1,p={};p.size=e,p.sortCriteria=r;var s=new Array,u=this.fetchFirst(p)[Symbol.asyncIterator]();return function t(r,p,s){return p.next().then(function(u){o=u.done;var f=u.value,c=f.data,y=f.metadata,l=c.length;if(i<a+l)for(var h=i<=a?0:i-a;h<l&&s.length!=e;h++)s.push({metadata:y[h],data:c[h]});return a+=l,s.length<e&&!o?-1!=n&&a>=n?s:t(r,p,s):s})}(t,u,s).then(function(e){return{fetchParameters:t,results:e,done:o}})},t.prototype.getCapability=function(t){if("fetchByOffset"==t)return{implementation:"iteration"};var e=null;if(!0!==this._ojSkipLastCapability){this._ojSkipLastCapability=!0;for(var r=1;this["_ojLastGetCapability"+r];)++r;for(--r;r>0&&!(e=this["_ojLastGetCapability"+r](t));r--);delete this._ojSkipLastCapability}return e},t.applyMixin=function(e){var r=e.prototype.getCapability;if([t].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(r){"constructor"!==r&&(e.prototype[r]=t.prototype[r])})}),r){for(var i=1;e.prototype["_ojLastGetCapability"+i];)++i;e.prototype["_ojLastGetCapability"+i]=r}},t}();t.FetchByOffsetMixin=p,t.FetchByOffsetMixin.applyMixin=p.applyMixin});
