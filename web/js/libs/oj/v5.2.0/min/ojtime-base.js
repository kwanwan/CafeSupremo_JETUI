/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtToolkit","ojs/ojvalidation-datetime"],function(e,t,n,r,o){e.__registerWidget("oj.dvtTimeComponent",t.oj.dvtBaseComponent,{_GetEventTypes:function(){return["optionChange","viewportChange"]},_GetTranslationMap:function(){this.options.translations;var t=this._super(),n=e.LocaleData.getMonthNames("wide");t["DvtUtilBundle.MONTH_JANUARY"]=n[0],t["DvtUtilBundle.MONTH_FEBRUARY"]=n[1],t["DvtUtilBundle.MONTH_MARCH"]=n[2],t["DvtUtilBundle.MONTH_APRIL"]=n[3],t["DvtUtilBundle.MONTH_MAY"]=n[4],t["DvtUtilBundle.MONTH_JUNE"]=n[5],t["DvtUtilBundle.MONTH_JULY"]=n[6],t["DvtUtilBundle.MONTH_AUGUST"]=n[7],t["DvtUtilBundle.MONTH_SEPTEMBER"]=n[8],t["DvtUtilBundle.MONTH_OCTOBER"]=n[9],t["DvtUtilBundle.MONTH_NOVEMBER"]=n[10],t["DvtUtilBundle.MONTH_DECEMBER"]=n[11];var r=e.LocaleData.getDayNames("wide");t["DvtUtilBundle.DAY_SUNDAY"]=r[0],t["DvtUtilBundle.DAY_MONDAY"]=r[1],t["DvtUtilBundle.DAY_TUESDAY"]=r[2],t["DvtUtilBundle.DAY_WEDNESDAY"]=r[3],t["DvtUtilBundle.DAY_THURSDAY"]=r[4],t["DvtUtilBundle.DAY_FRIDAY"]=r[5],t["DvtUtilBundle.DAY_SATURDAY"]=r[6];var o=e.LocaleData.getDayNames("abbreviated");return t["DvtUtilBundle.DAY_SHORT_SUNDAY"]=o[0],t["DvtUtilBundle.DAY_SHORT_MONDAY"]=o[1],t["DvtUtilBundle.DAY_SHORT_TUESDAY"]=o[2],t["DvtUtilBundle.DAY_SHORT_WEDNESDAY"]=o[3],t["DvtUtilBundle.DAY_SHORT_THURSDAY"]=o[4],t["DvtUtilBundle.DAY_SHORT_FRIDAY"]=o[5],t["DvtUtilBundle.DAY_SHORT_SATURDAY"]=o[6],t},_HandleEvent:function(e){if("viewportChange"===e.type){var t=new Date(e.viewportStart).toISOString(),n=new Date(e.viewportEnd).toISOString(),r=e.minorAxisScale,o={viewportStart:t,viewportEnd:n,minorAxisScale:r};this._UserOptionChange("viewportStart",t),this._UserOptionChange("viewportEnd",n),this._UserOptionChange("minorAxis.scale",r),this._trigger("viewportChange",null,o)}else this._super(e)},_LoadResources:function(){null==this.options._resources&&(this.options._resources={});var t=this.options._resources;t.grabbingCursor=e.Config.getResourceUrl("resources/internal-deps/dvt/chart/hand-closed.cur"),t.grabCursor=e.Config.getResourceUrl("resources/internal-deps/dvt/chart/hand-open.cur");var n=e.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME),r=n.createConverter({hour:"numeric",minute:"2-digit",second:"2-digit"}),o=n.createConverter({hour:"numeric",minute:"2-digit"}),i=n.createConverter({hour:"numeric"}),a=n.createConverter({month:"numeric",day:"2-digit"}),s=n.createConverter({month:"long"}),l={seconds:r,minutes:o,hours:i,days:a,weeks:a,months:s,quarters:s,years:n.createConverter({year:"numeric"})};t.converter=l,t.converterFactory=n,t.firstDayOfWeek=e.LocaleData.getFirstDayOfWeek()},_ProcessTemplates:function(t,n,r){var o=this,i=this._GetDataProviderSeriesConfig(),a=this.element[0];return this._super(t,n,r).then(function(n){if(i&&t===i.dataProperty){var s,l,d,u,v=[],D={},c=n.values[0],p=0;for(d=0;d<c.length;d++){var m=c[d],_={data:m._itemData,key:m.id,index:d,componentElement:a},h=i.idAttribute,g=i.itemsKey,U=null!=m[h]?m[h]:m.id;D[U]?(D[U][g].push(_),v[D[U].index][g].push(m)):((l={componentElement:a,id:U,index:p})[g]=[_],D[U]=l,p+=1,(s={id:U})[g]=[m],v.push(s))}var A=Promise.resolve(v),T=i.templateName,C=i.templateElementName,B=o.getTemplates()[T];if(B){var E,O=o.options.as,Y=e.CustomElementBridge.getMetadata(C),N=Object.keys(Y.properties),S=[],R=document.createElement("div");R.setAttribute("data-oj-context","");var f=document.createDocumentFragment();for(d=0;d<v.length;d++){l=D[v[d].id];try{var y=r.execute(a,B[0],l,O);for(u=0;u<y.length;u++)if(y[u].tagName&&y[u].tagName.toLowerCase()===C){E=y[u];break}}catch(t){e.Logger.error(t)}S.push(E),f.appendChild(E)}R.appendChild(f),document.body.appendChild(R),A=e.Context.getContext(R).getBusyContext().whenReady().then(function(){for(d=0;d<v.length;d++)for(s=v[d],E=S[d],u=0;u<N.length;u++){var e=E.getProperty(N[u]);void 0!==e&&(s[N[u]]=e)}return r.clean(R),document.body.removeChild(R),R=null,v})}return A.then(function(e){return{paths:n.paths,values:[e]}})}return n})},_GetDataProviderSeriesConfig:function(){return{}}}),e.CustomElementBridge.registerMetadata("dvtTimeComponent","dvtBaseComponent",{properties:{},methods:{getContextByNode:{}},extension:{_WIDGET_NAME:"dvtTimeComponent"}})});
