/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","promise","ojs/ojcomponentcore"],function(t,i){t.AnimationUtils={},t.AnimationUtils._getName=function(i,n){if(!t.AnimationUtils._nameMap){t.AnimationUtils._nameMap={};var e=t.AnimationUtils._nameMap,a=i.style;e.backfaceVisibility=void 0!==a.webkitBackfaceVisibility?"webkitBackfaceVisibility":"backfaceVisibility",e.transform=void 0!==a.webkitTransform?"webkitTransform":"transform",e.transformOrigin=void 0!==a.webkitTransformOrigin?"webkitTransformOrigin":"transformOrigin",e.transition=void 0!==a.webkitTransition?"webkitTransition":"transition",e.transitionend=void 0!==a.webkitTransition?"webkitTransitionEnd":"transitionend"}var o=t.AnimationUtils._nameMap[n];return o||n},t.AnimationUtils._getElementStyle=function(i,n){return i.style[t.AnimationUtils._getName(i,n)]},t.AnimationUtils._setElementStyle=function(i,n,e){i.style[t.AnimationUtils._getName(i,n)]=e},t.AnimationUtils._animate=function(n,e,a,o,s,r){var l=[].concat(s),m=function(i,m){var f=function(i){var n=0==i.propertyName.indexOf("-webkit-")?i.propertyName.substr(8):i.propertyName;n=t.AnimationUtils._getCamelCasePropName(n);var e=l.indexOf(n);e>-1&&(l.length>1?l.splice(e,1):p())},c=0,d=!1,p=function(){d||(c&&(window.cancelAnimationFrame(c),c=0),n.removeEventListener(t.AnimationUtils._getName(n,"transitionend"),f),i&&i(!0),d=!0)};null==a&&(a={}),null==a.css&&(a.css={}),a.css.transition=t.AnimationUtils._createTransitionValue(n,s,o);var u=t.AnimationUtils._saveStyle(n,e,a,o,r||s);t.AnimationUtils._applyState(n,e,u>1),n.addEventListener(t.AnimationUtils._getName(n,"transitionend"),f);var A=o.duration,g=o.delay,_=o._skipPromise;function U(){c=0,t.AnimationUtils._applyState(n,a,u>1)}null==e?U():(o._noReflow||(t.AnimationUtils._x=n.offsetWidth),c=window.requestAnimationFrame(U));var v=t.AnimationUtils._getTotalTiming(A,g);_||setTimeout(p,v+100)};return o._skipPromise?(m(null),null):new Promise(m).then(function(){e&&e.addClass&&i(n).removeClass(e.addClass),a&&a.addClass&&i(n).removeClass(a.addClass),t.AnimationUtils._restoreStyle(n)})},t.AnimationUtils._saveCssValues=function(i,n,e,a){for(var o in n)e.hasOwnProperty(o)||a&&-1!=a.indexOf(o)||(e[o]=t.AnimationUtils._getElementStyle(i,o))},t.AnimationUtils._saveStyle=function(i,n,e,a,o){var s=i._ojSavedStyle||{},r=n&&n.css?n.css:{},l=e&&e.css?e.css:{};a&&"all"===a.persist||(o=null),t.AnimationUtils._saveCssValues(i,r,s,o),t.AnimationUtils._saveCssValues(i,l,s,o),i._ojSavedStyle=s;var m=i._ojEffectCount||0;return i._ojEffectCount=++m,m},t.AnimationUtils._restoreStyle=function(i){var n=i._ojEffectCount;if(n>1)i._ojEffectCount=n-1;else{var e=i._ojSavedStyle;if(e){for(var a in e)t.AnimationUtils._setElementStyle(i,a,e[a]);delete i._ojSavedStyle,delete i._ojEffectCount}}},t.AnimationUtils._getCamelCasePropName=function(t){if(t.indexOf("-")>=0){for(var i="",n=t.split("-"),e=0;e<n.length;e++){var a=n[e];a&&(i?i+=a.charAt(0).toUpperCase()+a.slice(1):i=a)}return i}return t},t.AnimationUtils._getHyphenatedPropName=function(t){var i=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();return 0==i.indexOf("webkit")&&(i="-"+i),i},t.AnimationUtils._concatMultiValue=function(i,n,e,a,o){if(n.css[e]){var s=t.AnimationUtils._getElementStyle(i,e);s&&0!=s.indexOf(a)&&(n.css[e]=s+o+n.css[e])}},t.AnimationUtils._splitTransform=function(t){var i=[];if(t&&"none"!=t)for(var n;(n=t.indexOf(")"))>0;){var e=t.substr(0,n+1);i.push(e.trim()),t=t.slice(n+1)}return i},t.AnimationUtils._getTransformFuncName=function(t){var i=t.indexOf("(");return i>=1?t.substr(0,i):t},t.AnimationUtils._applyTransform=function(i,n){for(var e=t.AnimationUtils._getElementStyle(i,"transform"),a=t.AnimationUtils._splitTransform(e),o=t.AnimationUtils._splitTransform(n),s=[],r=0;r<o.length;r++){var l=t.AnimationUtils._getTransformFuncName(o[r]),m=!1;if(l)for(var f=0;f<a.length;f++)0==a[f].indexOf(l+"(")&&(a[f]=o[r],m=!0);m||s.push(o[r])}return(a=a.concat(s)).join(" ")},t.AnimationUtils._applyState=function(n,e,a){if(e){if(e.css){a&&t.AnimationUtils._concatMultiValue(n,e,"transition","all",", "),e.css.transform&&(e.css.transform=t.AnimationUtils._applyTransform(n,e.css.transform));var o=e.css;for(var s in o)t.AnimationUtils._setElementStyle(n,s,o[s])}e.addClass&&i(n).addClass(e.addClass),e.removeClass&&i(n).removeClass(e.removeClass)}},t.AnimationUtils._getTimingValue=function(t){var i=parseFloat(t);return isNaN(i)?0:t.indexOf("ms")>-1?i:1e3*i},t.AnimationUtils._getTotalTiming=function(i,n){var e=t.AnimationUtils._getTimingValue(i);return e>0?e+(n?t.AnimationUtils._getTimingValue(n):0):0},t.AnimationUtils._calcCssTime=function(i,n,e){for(var a=i.split(","),o=n.split(","),s=e.split(","),r=a.length,l=o.length,m=s.length,f=0,c=0;c<r;c++){var d=s[c%m],p=o[c%l],u=t.AnimationUtils._getTotalTiming(d,p);f=Math.max(f,u)}return f},t.AnimationUtils._calcEffectTime=function(i){var n,e,a,o=window.getComputedStyle(i);n=o.animationName||o.webkitAnimationName,e=o.animationDelay||o.webkitAnimationDelay,a=o.animationDuration||o.webkitAnimationDuration;var s=t.AnimationUtils._calcCssTime(n,e,a);n=o.transitionProperty||o.webkitTransitionProperty,e=o.transitionDelay||o.webkitTransitionDelay,a=o.transitionDuration||o.webkitTransitionDuration;var r=t.AnimationUtils._calcCssTime(n,e,a);return Math.max(s,r)},t.AnimationUtils._fillEmptyOptions=function(t,i){t.delay=t.delay||i.delay,t.duration=t.duration||i.duration,t.timingFunction=t.timingFunction||i.timingFunction,t.persist=t.persist||i.persist},t.AnimationUtils._triggerEvent=function(t,i,n,e){var a;if(e&&e._trigger)a=!e._trigger(i,null,n);else{var o="oj"+i.substr(0,1).toUpperCase()+i.substr(1),s=new CustomEvent(o,{detail:n,bubbles:!0,cancelable:!0}),r=e||t;r.dispatchEvent&&r.dispatchEvent(s),a=s.defaultPrevented}return a},t.AnimationUtils.startAnimation=function(n,e,a,o){return n=i(n)[0],new Promise(function(s,r){var l=i(n),m="oj-animate-"+e,f=m+"-active",c=!1,d=!1,p=function(){if(c&&d){l.removeClass(m),l.removeClass(f),t.AnimationUtils._restoreStyle(n),s(!0);var i={action:e,element:n};t.AnimationUtils._triggerEvent(n,"animateEnd",i,o)}},u=function(){c=!0,p()},A=function(){d=!0,p()};t.AnimationUtils._saveStyle(n,null,null,null,null);var g={action:e,element:n,endCallback:u};if(!t.AnimationUtils._triggerEvent(n,"animateStart",g,o)){for(var _=[].concat(a),U=[],v={},h=0;h<_.length;h++){var y,x=_[h],w="";null!=x&&"none"!=x&&("string"==typeof x?(w=x,y={}):"object"==typeof x&&(w=x.effect,y=i.extend({},x)),t.AnimationUtils._fillEmptyOptions(y,v),v=i.extend({},y)),w&&t.AnimationUtils[w]&&U.push(t.AnimationUtils[w](n,y))}U.length?Promise.all(U).then(u):u()}l.addClass(m);var b=window.requestAnimationFrame(function(){b=0,l.addClass(f);var i=t.AnimationUtils._calcEffectTime(n);i>0?setTimeout(A,i+100):A()});setTimeout(function(){b&&(window.cancelAnimationFrame(b),b=0,A())},1e3)})},t.AnimationUtils._mergeOptions=function(n,e){return null==t.AnimationUtils._defaultOptions&&(t.AnimationUtils._defaultOptions=t.ThemeUtils.parseJSONFromFontFamily("oj-animation-effect-default-options")),i.extend({duration:"400ms"},t.AnimationUtils._defaultOptions?t.AnimationUtils._defaultOptions[n]:null,e)},t.AnimationUtils._createTransitionValue=function(i,n,e){var a="";if(n)for(var o=0;o<n.length;o++){var s=t.AnimationUtils._getName(i,n[o]);a+=(o>0?", ":"")+t.AnimationUtils._getHyphenatedPropName(s)+" "+e.duration,e.timingFunction&&(a+=" "+e.timingFunction),e.delay&&(a+=" "+e.delay)}return a},t.AnimationUtils._fade=function(i,n,e,a,o){var s={css:{opacity:a}},r={css:{opacity:o}};return(n=t.AnimationUtils._mergeOptions(e,n))&&(n.startOpacity&&(s.css.opacity=n.startOpacity),n.endOpacity&&(r.css.opacity=n.endOpacity)),t.AnimationUtils._animate(i,s,r,n,["opacity"])},t.AnimationUtils.fadeIn=function(i,n){return t.AnimationUtils._fade(i,n,"fadeIn",0,1)},t.AnimationUtils.fadeOut=function(i,n){return t.AnimationUtils._fade(i,n,"fadeOut",1,0)},t.AnimationUtils.expand=function(i,n){return t.AnimationUtils._expandCollapse(i,n,!0)},t.AnimationUtils.collapse=function(i,n){return t.AnimationUtils._expandCollapse(i,n,!1)},t.AnimationUtils._wrapRowContent=function(t,i){var n=[],e=t.children,a=[],o=[];t._ojSavedHeight=t.style.height;for(var s=0;s<e.length;s++){var r=e[s],l=window.getComputedStyle(r);a.push(l.padding),o.push(l.textAlign),r._ojSavedPadding=r.style.padding}for(s=0;s<e.length;s++){r=e[s];var m=document.createElement("div");m.style.overflow="hidden;";var f=document.createElement("div");for(f.style.display="table-cell",f.style.verticalAlign="middle",f.style.boxSizing="border-box",f.style.height=i,f.style.padding=a[s],f.style.textAlign=o[s],m.appendChild(f);r.firstChild;)f.appendChild(r.firstChild);r.appendChild(m),r.style.padding="0",n.push(m)}return t.style.height="0",n},t.AnimationUtils._unwrapRowContent=function(t){for(var i=t.children,n=0;n<i.length;n++){var e=i[n],a=e.children[0];if(a){var o=a.children[0];if(o)for(;o.firstChild;)e.appendChild(o.firstChild);e.removeChild(a)}e.style.padding=e._ojSavedPadding,delete e._ojSavedPadding}t.style.height=t._ojSavedHeight,delete t._ojSavedHeight},t.AnimationUtils._expandCollapseRow=function(n,e,a){var o,s=n.offsetHeight+"px",r=t.AnimationUtils._wrapRowContent(n,s),l=i.extend({},e);if(a?l.endMaxHeight||(l.endMaxHeight=s):l.startMaxHeight||(l.startMaxHeight=s),l.persist="all",l._noReflow=!0,r.length)for(var m=0;m<r.length;m++)0==m?(l._skipPromise=!1,o=t.AnimationUtils._expandCollapse(r[m],l,a)):(l._skipPromise=!0,t.AnimationUtils._expandCollapse(r[m],l,a));else o=Promise.resolve();return o.then(function(){null!=e&&"all"==e.persist||t.AnimationUtils._unwrapRowContent(n)})},t.AnimationUtils._getSizeLimit=function(t,i,n,e,a){var o=n;if(!o)if(e)o="0";else{var s=a?i.maxWidth:i.maxHeight;o="none"!==s?s:(a?t.offsetWidth:t.offsetHeight)+"px"}return o},t.AnimationUtils._expandCollapse=function(i,n,e){if(i&&"TR"==i.tagName)return t.AnimationUtils._expandCollapseRow(i,n,e);var a={},o={},s=(n=t.AnimationUtils._mergeOptions(e?"expand":"collapse",n)).direction||"height",r=a.css={},l=o.css={},m=window.getComputedStyle(i),f=[];if("both"===s||"height"===s){var c=t.AnimationUtils._getSizeLimit(i,m,n.startMaxHeight,e,!1),d=t.AnimationUtils._getSizeLimit(i,m,n.endMaxHeight,!e,!1);r.maxHeight=c,l.maxHeight=d,f.push("maxHeight")}if("both"===s||"width"===s){var p=t.AnimationUtils._getSizeLimit(i,m,n.startMaxWidth,e,!0),u=t.AnimationUtils._getSizeLimit(i,m,n.endMaxWidth,!e,!0);r.maxWidth=p,l.maxWidth=u,f.push("maxWidth")}r.overflow=n.overflow?n.overflow:"hidden";var A=[].concat(f);return A.push("overflow"),t.AnimationUtils._animate(i,a,o,n,f,A)},t.AnimationUtils.zoomIn=function(i,n){return t.AnimationUtils._zoom(i,n,!0)},t.AnimationUtils.zoomOut=function(i,n){return t.AnimationUtils._zoom(i,n,!1)},t.AnimationUtils._zoom=function(i,n,e){var a={},o={},s=(n=t.AnimationUtils._mergeOptions(e?"zoomIn":"zoomOut",n)).axis||"both",r="both"===s?"scale":"x"===s?"scaleX":"scaleY",l=a.css={},m=o.css={};return l.transform=r+"("+(e?0:1)+") translateZ(0)",m.transform=r+"("+(e?1:0)+") translateZ(0)",l.transformOrigin=n.transformOrigin||"center",t.AnimationUtils._animate(i,a,o,n,["transform"])},t.AnimationUtils.slideIn=function(i,n){return t.AnimationUtils._slide(i,n,!0)},t.AnimationUtils.slideOut=function(i,n){return t.AnimationUtils._slide(i,n,!1)},t.AnimationUtils._slide=function(i,n,e){var a={},o={},s=(n=t.AnimationUtils._mergeOptions(e?"slideIn":"slideOut",n)).direction||"start",r="0",l="0",m=a.css={},f=o.css={};if(n.offsetX||n.offsetY)n.offsetX&&(r=n.offsetX),n.offsetY&&(l=n.offsetY);else{var c="rtl"===t.DomUtils.getReadingDirection();switch(s){case"left":r=(e?i.offsetWidth:-i.offsetWidth)+"px";break;case"right":r=(e?-i.offsetWidth:i.offsetWidth)+"px";break;case"top":l=(e?i.offsetHeight:-i.offsetHeight)+"px";break;case"bottom":l=(e?-i.offsetHeight:i.offsetHeight)+"px";break;case"end":r=(e?-i.offsetWidth:i.offsetWidth)*(c?-1:1)+"px";break;default:r=(e?i.offsetWidth:-i.offsetWidth)*(c?-1:1)+"px"}}return e?(m.transform="translate("+r+","+l+") translateZ(0)",f.transform="translate(0,0) translateZ(0)"):(m.transform="translate(0,0) translateZ(0)",f.transform="translate("+r+","+l+") translateZ(0)"),t.AnimationUtils._animate(i,a,o,n,["transform"])},t.AnimationUtils.ripple=function(n,e){e=t.AnimationUtils._mergeOptions("ripple",e);var a={},o={},s=n.offsetWidth,r=n.offsetHeight,l=i("<div style='position:absolute; overflow:hidden'>"),m=i("<div class='oj-animation-effect-ripple oj-animation-rippler'>"),f="static"==window.getComputedStyle(n).position?{left:n.offsetLeft,top:n.offsetTop}:{left:0,top:0};n.insertBefore(l[0],n.firstChild),l.css({left:f.left+"px",top:f.top+"px",width:s+"px",height:r+"px"}),l.prepend(m);var c=a.css={},d=o.css={};return t.AnimationUtils._setRippleOptions(c,m,l,e),c.transform="scale(0) translateZ(0)",c.opacity=e.startOpacity||m.css("opacity"),d.transform="scale(1) translateZ(0)",d.opacity=e.endOpacity||0,e.persist="all",t.AnimationUtils._animate(m[0],a,o,e,["transform","opacity"]).then(function(){l.remove()})},t.AnimationUtils._setRippleOptions=function(i,n,e,a){var o=n.width(),s=e.width(),r=e.height();if(a.diameter){var l=a.diameter,m=parseInt(l,10);isNaN(m)||(o="%"==l.charAt(l.length-1)?Math.floor(Math.min(s,r)*(m/100)):m,i.width=o+"px",i.height=o+"px")}var f,c="static"==e.css("position")?e.position():{left:0,top:0};null!=(f=t.AnimationUtils._calcRippleOffset(a.offsetX,o,s,c.left))&&(i.left=f+"px"),null!=(f=t.AnimationUtils._calcRippleOffset(a.offsetY,o,r,c.top))&&(i.top=f+"px"),a.color&&(i.backgroundColor=a.color)},t.AnimationUtils._calcRippleOffset=function(t,i,n,e){var a;t=t||"50%";var o=parseInt(t,10);return isNaN(o)||(a="%"==t.charAt(t.length-1)?n*(o/100)-i/2:o-i/2,a=Math.floor(a+e)),a},t.AnimationUtils._removeRipple=function(n,e){var a=(e=e||{}).removeEffect||"fadeOut",o=i(".oj-animation-rippler",n);if(0!==o.length)return a in{fadeOut:1,collapse:1,zoomOut:1,slideOut:1}?t.AnimationUtils[a](o,e).then(function(){o.remove()}):o.remove();console.warn("No rippler so returning")},t.AnimationUtils._calcBackfaceAngle=function(t){var i,n=t.match(/^([\+\-]?\d*\.?\d*)(.*)$/),e=parseFloat(n[1]),a=n[2];switch(a){case"deg":i=e-180+a;break;case"grad":i=e-200+a;break;case"rad":i=e-3.1416+a;break;case"turn":i=e-.5+a;break;default:console.log("Unknown angle unit in flip animation: "+a)}return i},t.AnimationUtils._flip=function(n,e,a,o,s){if(e&&"children"==e.flipTarget){var r,l=[],m=i(n).children(),f=i.extend({},e);delete f.flipTarget;var c=i.extend({},f);c.startAngle=t.AnimationUtils._calcBackfaceAngle(e.startAngle||o),c.endAngle=t.AnimationUtils._calcBackfaceAngle(e.endAngle||s);for(var d=0;d<m.length;d++)r=i(m[d]).hasClass("oj-animation-backface")?c:f,l.push(t.AnimationUtils._flip(m[d],r,a,o,s));return Promise.all(l)}var p,u={},A={},g={css:u},_={css:A},U="rotateY(",v="2000px",h="hidden",y="center";(e=t.AnimationUtils._mergeOptions(a,e))&&("x"===e.axis&&(U="rotateX("),e.startAngle&&(o=e.startAngle),e.endAngle&&(s=e.endAngle),e.perspective&&(v=e.perspective),e.backfaceVisibility&&(h=e.backfaceVisibility),e.transformOrigin&&(y=e.transformOrigin)),p="perspective("+v+") "+U;return u.transform=p+o+")",u.backfaceVisibility=h,u.transformOrigin=y,A.transform=p+s+")",t.AnimationUtils._animate(n,g,_,e,["transform"],["transform","backfaceVisibility","transformOrigin"])},t.AnimationUtils.flipIn=function(i,n){return t.AnimationUtils._flip(i,n,"flipIn","-180deg","0deg")},t.AnimationUtils.flipOut=function(i,n){return t.AnimationUtils._flip(i,n,"flipOut","0deg","180deg")},t.AnimationUtils.addTransition=function(i,n){return n=t.AnimationUtils._mergeOptions("addTransition",n),t.AnimationUtils._animate(i,null,null,n,n.transitionProperties)}});
