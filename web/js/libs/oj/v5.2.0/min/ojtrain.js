/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(e,t){var s={properties:{selectedStep:{type:"string",writeback:!0},steps:{type:"Array<Object>"},translations:{type:"object",value:{}}},methods:{getStep:{},getNextSelectableStep:{},getPreviousSelectableStep:{},updateStep:{},refresh:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojBeforeDeselect:{},ojDeselect:{},ojBeforeSelect:{},ojSelect:{}},extension:{}};e.__registerWidget("oj.ojTrain",t.oj.baseComponent,{version:"1.0.0",defaultElement:"<div>",widgetEventPrefix:"oj",options:{steps:[],selected:"",selectedStep:"",beforeDeselect:null,deselect:null,beforeSelect:null,select:null},_stepNum:0,_stepArray:null,_ComponentCreate:function(){this._super(),this._setupTrain()},_setupTrain:function(){var e=this.options,s=e.steps;this._stepNum=s.length,this._wrapper=t("<div class='oj-train-wrapper'></div>"),this._wrapper.appendTo(this.element),this._connectorWrapper=t("<div class='oj-train-connector-wrapper'></div>"),this._connectorWrapper.appendTo(this._wrapper);var i=this.element.attr("class");this._stretch=null!=i&&i.indexOf("oj-train-stretch")>=0,this._stretch&&this._connectorWrapper.css("padding","0 "+100/(2*this._stepNum)+"%"),this._connector=t("<div class='oj-train-connector'></div>"),this._connector.appendTo(this._connectorWrapper),this._stepList=t("<ul>"),this._stepList.addClass("oj-train-step-list"),this._connectorFill=t("<div class='oj-train-connector-fill'></div>"),this._connectorFill.appendTo(this._connectorWrapper),this._setupArray(),this._selectedIndex=this._getStepIndex(e.selectedStep||e.selected),-1===this._selectedIndex&&s[0]&&s[0].id&&(this._selectedIndex=0,e.selectedStep=s[0].id,e.selected=s[0].id);for(var r=0;r<this._stepNum;r++){var n=t("<li>").addClass("oj-train-step-list-item").attr({id:this._stepArray[r][1]}),a=this._stepArray[r][4];"confirmation"===a?n.addClass("oj-confirmation"):"info"===a?n.addClass("oj-info"):"error"===a||"fatal"===a?n.addClass("oj-invalid"):"warning"===a&&n.addClass("oj-warning"),n.appendTo(this._stepList),this._drawLabel(r),this._drawStepFill(r),this._drawIndividualConnectorLine(r),this._drawButton(r),this._drawStepNumberLabel(r),this._drawMessageType(r),this._stretch&&n.css("width",100/this._stepNum+"%")}var o=this._stepNum-1===this._selectedIndex?100:100/(2*(this._stepNum-1))+this._selectedIndex/(this._stepNum-1)*100;this._connectorFill.css({width:o+"%"}),this._stepList.appendTo(this._wrapper),this.element.addClass("oj-train")},_setupArray:function(){var e=this.options;this._stepArray=[];for(var t=0;t<this._stepNum;t++){var s=e.steps[t];this._stepArray[t]=new Array(5),this._stepArray[t][0]=s.label?s.label:null,this._stepArray[t][1]=s.id?s.id:null,this._stepArray[t][2]=!!s.disabled,this._stepArray[t][3]=!!s.visited,this._stepArray[t][4]=s.messageType?s.messageType:null}},_drawButton:function(e){var s=t("<div/>").addClass("oj-train-button"),i=t("<span/>"),r=this,n="";if(this._stepArray[e]){var a=this._stepArray[e][3],o=this._stepArray[e][2];this._selectedIndex===e?(s.addClass("oj-selected"),n=" current "):a&&!o?(s.addClass("oj-visited"),n=" visited "):a||o?s.addClass("oj-disabled"):(s.addClass("oj-default"),n=" not visited "),this._stepArray[e][2]||this._selectedIndex===e||(this._AddHoverable(s),this._AddActiveable(s),s.on("click"+this.eventNamespace,function(e){r._fireSelectedStepOptionChange(this.parentNode.parentNode.id,e),r.refresh(),r._setFocus(this.parentNode.parentNode.id)}));var d=this._stepList.children().eq(e).find(".oj-train-button-connector");d.length>=1?(d.children().remove(),d.append(s)):d.append(s),i.text(n),i.addClass("oj-helper-hidden-accessible"),this._stepList.children().eq(e).find("a").append(i)}},_drawMessageType:function(e){if(this._stepArray[e]&&this._stepArray[e][4]){var s=t("<div/>").addClass("oj-train-icon oj-component-icon").attr("aria-hidden","true"),i=t("<span/>"),r="",n=this,a=this._stepArray[e][4];"confirmation"===a?(s.addClass("oj-confirmation"),r=" Confirmation "):"info"===a?(s.addClass("oj-info"),r=" Info "):"error"===a?(s.addClass("oj-error"),r=" Error "):"fatal"===a?(s.addClass("oj-error"),r=" Error "):"warning"===a&&(s.addClass("oj-warning"),r=" Warning ");var o=this._stepList.children().eq(e).find(".oj-train-button");o.children().length>=2&&o.children()[1].remove(),this._stepArray[e][2]||this._selectedIndex===e||s.on("click"+this.eventNamespace,function(e){n._fireSelectedStepOptionChange(this.parentNode.parentNode.parentNode.id,e),n.refresh(),n._setFocus(this.parentNode.parentNode.parentNode.id)}),null!=a&&(i.text(r),i.addClass("oj-helper-hidden-accessible"),this._stepList.children().eq(e).find("a").append(i),o.append(s))}},_fireOptionChange:function(e,t,s){var i={fromStep:this.getStep(e),toStep:this.getStep(t),optionMetadata:{writeback:s?"shouldWrite":"shouldNotWrite"}};if(!1!==this._trigger("beforeDeselect",s,i)&&!1!==this._trigger("beforeSelect",s,i)){var r=this._getStepIndex(e);-1!==r&&(this.options.steps[r].visited=!0),this._trigger("deselect",s,i),this.options.selectedStep&&this.option("selectedStep",t,{_context:{originalEvent:s,internalSet:!0}}),this.options.selected&&this.option("selected",t,{_context:{originalEvent:s,internalSet:!0}}),this._trigger("select",s,i)}},_drawStepNumberLabel:function(e){var s=t("<div/>").addClass("oj-train-button-text");s.append((e+1).toString()),this._stepList.children().eq(e).find(".oj-train-button").append(s)},_drawIndividualConnectorLine:function(e){if(e!=this._stepNum-1){var s=t("<div/>").addClass("oj-train-step-individual-connector");e<this._selectedIndex&&s.addClass("oj-train-connector-before-selected-step"),this._stepList.children().eq(e).prepend(s)}},_drawStepFill:function(e){var s=t("<div/>");if(s.addClass("oj-train-button-connector"),this._stepArray[e]){e<=this._selectedIndex&&s.addClass("oj-train-fill");var i=this._stepList.children().eq(e).children();s.insertBefore(i)}},_drawLabel:function(e){var s=this;if(this._stepArray[e]){var i=t("<div/>").addClass("oj-train-label-wrapper"),r=t("<a>");r.text(this._stepArray[e][0]);var n=this._stepArray[e][2];i.append(r),r.addClass("oj-train-label"),e===this._selectedIndex?r.addClass("oj-selected"):this._stepArray[e][3]&&!n?r.addClass("oj-visited"):n&&r.addClass("oj-disabled"),n||(r.attr("href","#"),this._focusable({element:r,applyHighlight:!0}),this._AddHoverable(r),this._AddActiveable(r),r.on("click keydown"+this.eventNamespace,function(e){e.keyCode!==t.ui.keyCode.ENTER&&"click"!==e.type||(e.preventDefault(),s._fireSelectedStepOptionChange(this.parentNode.parentNode.id,e),s.refresh(),s._setFocus(this.parentNode.parentNode.id))}));var a=this._stepList.children().eq(e).children();a.length>=2&&a[1].remove(),this._stepList.children().eq(e).append(i)}},_getStepIndex:function(e){for(var t=0;t<this._stepNum;t++)if(this._stepArray[t]&&this._stepArray[t][1]===e)return t;return-1},getStep:function(e){for(var s=0;s<this._stepNum;s++)if(this._stepArray[s]&&this._stepArray[s][1]===e)return t.extend({},this.options.steps[s]);return null},nextSelectableStep:function(){return this.getNextSelectableStep()},previousSelectableStep:function(){return this.getPreviousSelectableStep()},getNextSelectableStep:function(){for(var e=this._getStepIndex(this.options.selectedStep||this.options.selected);e<this._stepNum;e++)if(e+1<this._stepNum&&this._stepArray[e+1]&&!this._stepArray[e+1][2])return this._stepArray[e+1][1];return null},getPreviousSelectableStep:function(){for(var e=this._getStepIndex(this.options.selectedStep||this.options.selected);e>=0;e--)if(this._stepArray[e-1]&&!this._stepArray[e-1][2])return this._stepArray[e-1][1];return null},setStep:function(e){e.id&&this.updateStep(e.id,e)},updateStep:function(e,t){if(e){var s=this.getStep(e),i=this._getStepIndex(e);if(-1!==i){var r=this.options.steps[i];t.label&&(s[0]=t.label,r.label=t.label),"string"==typeof t.id&&(s[1]=t.id,r.id=t.id),"boolean"==typeof t.disabled&&(s[2]=t.disabled,r.disabled=t.disabled),"boolean"==typeof t.visited&&(s[3]=t.visited,r.visited=t.visited),t.messageType&&(s[4]=t.messageType,r.messageType=t.messageType),this.refresh()}}},_setOptions:function(e){this._super(e),this.refresh()},_setOption:function(e,t,s){if(("selectedStep"==e||"selected"==e)&&this._stepArray&&this._stepArray[this._selectedIndex]){if(t==this._stepArray[this._selectedIndex][1])return;this._fireOptionChange(this._stepArray[this._selectedIndex][1],t,null)}else this._super(e,t,s)},refresh:function(){this._super(),this._destroy(),this._setupTrain()},_destroy:function(){this._stepList.children().each(function(){t(this).remove()}),this.element.removeClass("oj-train"),this.element.find(".oj-train-wrapper").remove(),this.element.find(".oj-train-connector-wrapper").remove(),this.element.find(".oj-train-step-list").remove(),this.element.find(".oj-train-step-list").remove(),this._super()},_fireSelectedStepOptionChange:function(e,t){var s=this._stepArray[this._selectedIndex][1];s!=e&&this._fireOptionChange(s,e,t)},_setFocus:function(e){var t=this._getStepIndex(e);this._stepList.children().eq(t).find(".oj-train-label").focus()},getNodeBySubId:function(e){if(null===e)return this.element?this.element[0]:null;var t=e.subId,s=e.index;if("number"!=typeof s||s<0||s>=this._stepNum)return null;switch(t){case"oj-train-step":case"oj-train-button":return this._stepList.children().eq(s).find(".oj-train-button")[0];case"oj-train-button-connector":return this._stepList.children().eq(s).find(".oj-train-button-connector")[0];case"oj-train-connector":return this._connector;case"oj-train-connector-fill":return this._connectorFill;case"oj-train-icon":return this._stepList.children().eq(s).find(".oj-train-icon")[0];case"oj-train-label":return this._stepList.children().eq(s).find(".oj-train-label")[0]}return null},getSubIdByNode:function(e){for(var s=e,i=this._stepArray?this._stepArray.length:0,r=0;r<i;r++){var n={subId:"oj-train-step",index:r},a=this.getNodeBySubId(n);if(t(s).closest(a).length>0||t(s).closest(t(a.parentNode.parentNode).find(".oj-train-label")[0]).length>0)return n}return null}}),s.extension._WIDGET_NAME="ojTrain",e.CustomElementBridge.registerMetadata("oj-train","baseComponent",s),e.CustomElementBridge.register("oj-train",{metadata:e.CustomElementBridge.getMetadata("oj-train")})});
