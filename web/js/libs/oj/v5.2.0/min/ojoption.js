/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(e,t){var o={properties:{disabled:{type:"boolean",value:!1},value:{type:"any"}},methods:{setProperty:{},getProperty:{},refresh:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};function n(o){function n(o){var n=e.BaseCustomElementBridge.getSlotMap(o),i=["startIcon","","endIcon"];t.each(n,function(e,n){-1==i.indexOf(e)&&function(e,o){t.each(o,function(t,o){e.removeChild(o)})}(o,n)}),t.each(i,function(e,i){n[i]&&function(e,o){t.each(o,function(t,o){e.appendChild(o)})}(o,n[i])})}this.updateDOM=function(){var e=o.element.customOptionRenderer;n(o.element),e&&"function"==typeof e&&e(o.element)}}o.properties.customOptionRenderer={},o.extension._CONSTRUCTOR=n,e.CustomElementBridge.registerMetadata("oj-option",null,o),e.CustomElementBridge.register("oj-option",{metadata:e.CustomElementBridge.getMetadata("oj-option")})});
