/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","knockout","ojs/ojmodule","ojs/ojcomposite"],function(e,o){e.Composite.register("oj-module",{view:'\x3c!-- ko ojModule: {"view":$properties.config.view, "viewModel":$properties.config.viewModel,"cleanupMode":$properties.config.cleanupMode,"animation":animation} --\x3e\x3c!-- /ko --\x3e',metadata:{properties:{animation:{type:"object"},config:{type:"object",properties:{cleanupMode:{type:"string",enumValues:["none","onDisconnect"],value:"onDisconnect"},view:{type:"Array<Node>"},viewModel:{type:"object"}}}},events:{ojTransitionStart:{},ojViewConnected:{},ojTransitionEnd:{},ojViewDisconnected:{}},extension:{}},viewModel:function(e){var n=e.element,i=e.properties,t=this;function c(e){var o=e?e.view:null;return o&&o.length>0&&n.contains(o[0])}function r(e,n){var i=e&&e[n];"function"==typeof i&&o.ignoreDependencies(i,e)}this.animation=e.properties.animation,this.propertyChanged=function(e){"animation"===e.property&&(t.animation=e.value)},this.connected=function(e){c(i&&i.config)&&r(i.config?i.config.viewModel:null,"connected")},this.disconnected=function(e){c(i&&i.config)&&r(i.config?i.config.viewModel:null,"disconnected")}}})});
