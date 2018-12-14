/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojpulltorefresh"],function(e,t){var r={properties:{refreshContent:{type:"function"},target:{type:"Element"},text:{type:"string",value:""},threshold:{type:"number",value:0},translations:{type:"object",value:{}}},methods:{refresh:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},extension:{}};e.__registerWidget("oj.ojRefresher",t.oj.baseComponent,{widgetEventPrefix:"oj",options:{refreshContent:null,threshold:0,target:null,text:""},_SetupResources:function(){this._super(),this.element.addClass("oj-component"),this._setupRefresh()},_ReleaseResources:function(){this._super(),this._checkObserver(),e.PullToRefreshUtils.tearDownPullToRefresh(this.scrollerElement)},refresh:function(){this._super(),this._checkObserver(),this._setupRefresh()},_checkObserver:function(){this.observer&&(this.observer.disconnect(),this.observer=null)},_setupRefresh:function(){var t=this;this._setupScrollerElement(),this.scrollerElement?e.Context.getContext(this.scrollerElement).getBusyContext().whenReady().then(function(){t._setupObserver(t),t._setupPullToRefresh()}):e.Logger.error("Issue with the target selected: Target missing or not found")},_setupPullToRefresh:function(){e.PullToRefreshUtils.setupPullToRefresh(this.scrollerElement,this.options.refreshContent,{threshold:this.options.threshold,primaryText:this.options.text})},_setupScrollerElement:function(){if(null!=this.options.target)this.scrollerElement=this.options.target;else if(this.element[0]){var e=this.element[0].getElementsByClassName("oj-scroller");this.scrollerElement=e.length>0?e[0]:null,this.scrollerElement||0==this.element[0].children.length||(this.scrollerElement=this.element[0].children[0])}else this.scrollerElement=null},_setupObserver:function(t){t.scrollerElement&&(t.observer=new MutationObserver(function(r){r.forEach(function(r){r.removedNodes.length>0&&r.removedNodes[0]==t.scrollerElement&&(t.observer.disconnect(),t.observer=null,e.PullToRefreshUtils.tearDownPullToRefresh(t.scrollerElement))})}),t.parentNode=t.scrollerElement.parentNode,t.parentNode?t.observer.observe(t.parentNode,{childList:!0}):t.observer.observe(document,{childList:!0}))}}),r.extension._WIDGET_NAME="ojRefresher",e.CustomElementBridge.registerMetadata("oj-refresher","baseComponent",r),e.CustomElementBridge.register("oj-refresher",{metadata:e.CustomElementBridge.getMetadata("oj-refresher")})});
