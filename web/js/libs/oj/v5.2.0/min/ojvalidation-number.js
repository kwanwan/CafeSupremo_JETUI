/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojL10n!ojtranslations/nls/localeElements","ojs/ojvalidation-base"],function(e,r,t){var n;e.NumberConverter=function(){this.Init()},e.Object.createSubclass(e.NumberConverter,e.Converter,"oj.NumberConverter"),e.NumberConverter.prototype.Init=function(r){e.NumberConverter.superclass.Init.call(this,r)},e.NumberConverter.prototype.format=function(r){return e.NumberConverter.superclass.format.call(this,r)},e.NumberConverter.prototype.parse=function(r){return e.NumberConverter.superclass.parse.call(this,r)},e.IntlNumberConverter=function(e){this.Init(e)},e.Object.createSubclass(e.IntlNumberConverter,e.NumberConverter,"oj.IntlNumberConverter"),e.IntlNumberConverter.prototype.Init=function(r){e.IntlNumberConverter.superclass.Init.call(this,r)},e.IntlNumberConverter.prototype._getWrapped=function(){return this._wrapped||(this._wrapped=n.getInstance()),this._wrapped},e.IntlNumberConverter.prototype.format=function(r){var t,n,i;if(null==r||"string"==typeof r&&0===e.StringUtils.trim(""+r).length||"number"==typeof r&&isNaN(r))return e.IntlConverterUtils.__getNullFormattedValue();t=e.Config.getLocale(),n=e.LocaleData.__getBundle(),i=this.resolvedOptions();try{return this._getWrapped().format(r,n,i,t)}catch(e){throw this._processConverterError(e,r)}},e.IntlNumberConverter.prototype.getHint=function(){return null},e.IntlNumberConverter.prototype.getOptions=function(){return e.IntlNumberConverter.superclass.getOptions.call(this)},e.IntlNumberConverter.prototype.parse=function(r){var t,n,i;if(null==r||""===r)return null;t=e.Config.getLocale(),n=e.LocaleData.__getBundle(),i=this.resolvedOptions();try{return this._getWrapped().parse(e.StringUtils.trim(r),n,i,t)}catch(e){throw this._processConverterError(e,r)}},e.IntlNumberConverter.prototype.resolvedOptions=function(){var r,t=e.Config.getLocale();if(t!==this._locale||!this._resolvedOptions){r=e.LocaleData.__getBundle();try{if(!r)return e.Logger.error("locale bundle for the current locale %s is unavailable",t),{};this._resolvedOptions=this._getWrapped().resolvedOptions(r,this.getOptions(),t),this._locale=t}catch(e){throw this._processConverterError(e)}}return this._resolvedOptions},e.IntlNumberConverter.prototype._processConverterError=function(r,t){var n,i,a,o,s,l,u=r.errorInfo;if(u){switch(i=u.errorCode,o=u.parameterMap,e.Assert.assertObject(o),o.propertyName,i){case"optionTypesMismatch":case"optionTypeInvalid":case"optionOutOfRange":case"optionValueInvalid":n=e.IntlConverterUtils.__getConverterOptionError(i,o);break;case"decimalFormatMismatch":s="oj-converter.number.decimalFormatMismatch.summary";break;case"currencyFormatMismatch":s="oj-converter.number.currencyFormatMismatch.summary";break;case"percentFormatMismatch":s="oj-converter.number.percentFormatMismatch.summary";break;case"unsupportedParseFormat":l=e.Translations.getTranslatedString("oj-converter.number.shortLongUnsupportedParse.summary"),a=e.Translations.getTranslatedString("oj-converter.number.shortLongUnsupportedParse.detail"),n=new e.ConverterError(l,a)}s&&(l=e.Translations.getTranslatedString(s,{value:t||o.value,format:o.format}),a=e.Translations.getTranslatedString("oj-converter.hint.detail",{exampleValue:this._getHintValue()}),n=new e.ConverterError(l,a))}return n||(l=r.message,a=r.message,n=new e.ConverterError(l,a)),n},e.IntlNumberConverter.prototype._getHintValue=function(){var r="";try{r=this.format(12345.98765)}catch(t){t instanceof e.ConverterError&&(r="",e.Logger.error("error retrieving hint value in format"))}finally{return r}},e.NumberRangeValidator=function(e){this.Init(e)},e.Object.createSubclass(e.NumberRangeValidator,e.Validator,"oj.NumberRangeValidator"),e.NumberRangeValidator.prototype.Init=function(r){e.NumberRangeValidator.superclass.Init.call(this),r&&(this._min=r.min,this._max=r.max,this._converter=e.IntlConverterUtils.getConverterInstance(r.converter),this._hint=r.hint||{},this._customMessageSummary=r.messageSummary||{},this._customMessageDetail=r.messageDetail||{})},e.NumberRangeValidator.prototype.validate=function(r){var t=r?r.toString():r,n=parseFloat(t),i=this._customMessageSummary,a=this._customMessageDetail,o=a.rangeOverflow,s=a.rangeUnderflow,l=a.exact,u=i.rangeOverflow,m=i.rangeUnderflow,c=void 0!==this._min?parseFloat(this._min):null,g=void 0!==this._max?parseFloat(this._max):null,p=c&&this._converter?this._converter.format(c):c,v=g&&this._converter?this._converter.format(g):g,d="",f="",y=null,h=e.Translations;if(null===r)return r;if(null!==c&&null!==g){if(n>=c&&n<=g||c>g)return t}else if(null!==c){if(n>=c)return t}else if(null===g||n<=g)return t;throw null!==g&&null!==c&&c===g?(y={value:r,num:v},f=l?h.applyParameters(l,y):h.getTranslatedString("oj-validator.range.number.messageDetail.exact",y),n>g?d=u||h.getTranslatedString("oj-validator.range.number.messageSummary.rangeOverflow"):n<c&&(d=u?m:h.getTranslatedString("oj-validator.range.number.messageSummary.rangeUnderflow"))):null!==g&&n>g?(y={value:r,max:v},d=u||h.getTranslatedString("oj-validator.range.number.messageSummary.rangeOverflow"),f=o?h.applyParameters(o,y):h.getTranslatedString("oj-validator.range.number.messageDetail.rangeOverflow",y)):null!==c&&n<c&&(y={value:r,min:p},d=m||h.getTranslatedString("oj-validator.range.number.messageSummary.rangeUnderflow"),f=s?h.applyParameters(s,y):h.getTranslatedString("oj-validator.range.number.messageDetail.rangeUnderflow",y)),new e.ValidatorError(d,f)},e.NumberRangeValidator.prototype.getHint=function(){var r=null,t=this._hint,n=t.inRange,i=t.exact,a=t.min,o=t.max,s=e.Translations,l=void 0!==this._min?parseFloat(this._min):null,u=void 0!==this._max?parseFloat(this._max):null,m=l&&this._converter?this._converter.format(l):l,c=u&&this._converter?this._converter.format(u):u;return null!==l&&null!==u?r=l!==u?n?s.applyParameters(n,{min:m,max:c}):s.getTranslatedString("oj-validator.range.number.hint.inRange",{min:m,max:c}):i?s.applyParameters(i,{num:m}):s.getTranslatedString("oj-validator.range.number.hint.exact",{num:m}):null!==l?r=a?s.applyParameters(a,{min:m}):s.getTranslatedString("oj-validator.range.number.hint.min",{min:m}):null!==u&&(r=o?s.applyParameters(o,{max:c}):s.getTranslatedString("oj-validator.range.number.hint.max",{max:c})),r},e.NumberConverterFactory=function(){return{createConverter:function(r){return function(r){return new e.IntlNumberConverter(r)}(r)}}}(),e.Validation.__registerDefaultConverterFactory(e.ConverterFactory.CONVERTER_TYPE_NUMBER,e.NumberConverterFactory),e.NumberRangeValidatorFactory=function(){return{createValidator:function(r){return function(r){return new e.NumberRangeValidator(r)}(r)}}}(),e.Validation.__registerDefaultValidatorFactory(e.ValidatorFactory.VALIDATOR_TYPE_NUMBERRANGE,e.NumberRangeValidatorFactory),n=function(){var r,t,n,i,a,o,s,l,u,m,c,g,p,v,d,f,y,h,b,F,S,I,D,x,N,O,_,C,w,E,U,M,P,j,T,V,L,A=/^[+\-]?infinity$/i,R=/^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/,$=/([^+-.0-9]*)([+\-]?\d*\.?\d*(E[+\-]?\d+)?).*$/,H=/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,k=/(^0\.0*)([^0].*$)/,W={trillion:[1e14,1e13,1e12],billion:[1e11,1e10,1e9],million:[1e8,1e7,1e6],thousand:[1e5,1e4,1e3]},G={trillion:1e12,billion:1e9,million:1e6,thousand:1e3},K={HALF_UP:"ceil",HALF_DOWN:"floor",DEFAULT:"round"};r=function(e,r,t){var n;for(n=e.length;n<r;n+=1)e=t?"0"+e:e+"0";return e},y=function(e,r,t,n){var i=new RangeError(e+" is out of range.  Enter a value between "+r+" and "+t+" for "+n),a={errorCode:"numberOptionOutOfRange",parameterMap:{value:e,minValue:r,maxValue:t,propertyName:n}};throw i.errorInfo=a,i},S=function(e,r,t,n,i){var a=e[r];return void 0!==a?(a=Number(a),(isNaN(a)||a<t||a>n)&&y(a,t,n,r),Math.floor(a)):i},d=function(e,r){if(void 0===r)return"latn";var t=I(r),n="symbols-numberSystem-"+t;return void 0===e.numbers[n]&&(t="latn"),t},f=function(e){return e.split("-")[0]},I=function(e){var r=(e=e||"en-US").indexOf("-u-nu-"),t="latn";return-1!==r&&(t=e.substr(r+6,4)),t},c=function(r,t,n,i){var a,o=e.OraI18nUtils.getLocaleElementsMainNode(r),l=d(o,i);t.numberingSystemKey=l,t.numberingSystem="symbols-numberSystem-"+l;var u=n.lenientParse;if(t.lenientParse=u||"full",t.style=n.style,void 0!==n.pattern&&n.pattern.length>0)a=n.pattern;else{var m;switch(t.style){case"decimal":m="decimalFormats-numberSystem-";break;case"currency":m="currencyFormats-numberSystem-";break;case"percent":m="percentFormats-numberSystem-";break;default:m="decimalFormats-numberSystem-"}m+=t.numberingSystemKey,a=o.numbers[m].standard;var c=n.decimalFormat;void 0===c&&(c=n.currencyFormat),void 0===c||"decimal"!==t.style&&"currency"!==t.style||(t.shortDecimalFormat=o.numbers["decimalFormats-numberSystem-latn"][c].decimalFormat)}var g=o.numbers[t.numberingSystem].decimal,p=o.numbers[t.numberingSystem].group,v=n.separators;if(void 0!==v){t.separators=v;var y=v.decimal,h=v.group;void 0!==y&&""!==y&&(g=v.decimal),void 0!==h&&(p=v.group)}var b=e.OraI18nUtils.getLocaleElementsMainNodeKey(r),F=f(b);if(t.plurals=r.supplemental.plurals,t.lang=F,t.pat=a,t.minusSign=o.numbers[t.numberingSystem].minusSign,t.decimalSeparator=g,t.exponential=o.numbers[t.numberingSystem].exponential,t.groupingSeparator=p,t.currencyDisplay=n.currencyDisplay,void 0!==n.currency&&(t.currencyCode=n.currency.toUpperCase()),void 0!==n.unit&&(t.unit=n.unit.toLowerCase()),s(n,a,o,t),void 0===n.pattern&&(t.minimumIntegerDigits=S(n,"minimumIntegerDigits",1,21,t.minimumIntegerDigits),void 0!==n.maximumFractionDigits&&(t.maximumFractionDigits=S(n,"maximumFractionDigits",0,20,t.maximumFractionDigits),t.maximumFractionDigits<t.minimumFractionDigits&&(t.minimumFractionDigits=t.maximumFractionDigits)),void 0!==n.minimumFractionDigits&&(t.minimumFractionDigits=S(n,"minimumFractionDigits",0,20,t.minimumFractionDigits)),t.maximumFractionDigits<t.minimumFractionDigits&&(t.maximumFractionDigits=t.minimumFractionDigits,e.Logger.info("maximumFractionDigits is less than minimumFractionDigits, so maximumFractionDigits will be set to minimumFractionDigits")),"currency"===t.style&&void 0===n.minimumFractionDigits)){var I=r.supplemental.currencyData.fractions[n.currency];if(void 0!==I){var D=parseInt(I._digits,10);t.minimumFractionDigits=D,t.maximumFractionDigits=D}}},v=function(e){var r=new TypeError('The property "currency" is required when the property "'+e+'" is "currency". An accepted value is a three-letter ISO 4217 currency code.'),t={errorCode:"optionTypesMismatch",parameterMap:{propertyName:e,propertyValue:"currency",requiredPropertyName:"currency",requiredPropertyValueValid:"a three-letter ISO 4217 currency code"}};throw r.errorInfo=t,r},E=function(e){var r=new TypeError('The property "unit" is required when the property "'+e+'" is "unit". An accepted value is  "byte" or "bit".'),t={errorCode:"optionTypesMismatch",parameterMap:{propertyName:e,propertyValue:"unit",requiredPropertyName:"unit",requiredPropertyValueValid:"byte or bit"}};throw r.errorInfo=t,r},N=function(e){var r,t;throw t={errorCode:"unsupportedParseFormat",parameterMap:{shortFormats:e}},(r=new Error("long and short "+e+" are not supported for parsing")).errorInfo=t,r},g=function(r,t){var n=e.OraI18nUtils.getGetOption(r,t),i=n("style","string",["currency","decimal","percent","unit","perMill"],"decimal");if("decimal"===i||"currency"===i){var a="decimal"===i?"decimalFormat":"currencyFormat";i=n(a,"string",["standard","short","long"]),"OraNumberConverter.parse"===t&&void 0!==i&&"standard"!==i&&N(a)}var o=n("currency","string");"currency"===i&&void 0===o&&v("style"),o=n("unit","string"),"unit"===i&&void 0===o&&E("style");n("roundingMode","string",["HALF_UP","HALF_DOWN","HALF_EVEN"],"DEFAULT"),n("lenientParse","string",["none","full"],"full")},w=function(r,t,n,i){var a,o;r>=1099511627776?(a="digital-tera",o=r/1099511627776):r>=1073741824?(a="digital-giga",o=r/1073741824):r>=1048576?(a="digital-mega",o=r/1048576):r>=1024?(a="digital-kilo",o=r/1024):(a="digital-",o=r),a+=n.unit;var s=n.lang,l=n.plurals[s](o);l="unitPattern-count-"+l;var u=O(o,t,n),m=i.units.narrow[a][l];return u=e.OraI18nUtils.formatString(m,[u])},C=function(e,r,t){var n=function(e){var r,t,n;for(r in W)for(n=W[r].length,t=0;t<n;t++)if(W[r][t]<=e)return[r,W[r][t]];return[e,null]}(e),i="";if(null!==n[1]){var a=t.lang,o=t.plurals[a](Math.floor(e/G[n[0]])),s=n[1]+"-count-"+o;void 0===(s=t.shortDecimalFormat[s])&&(o="other",s=n[1]+"-count-"+o,s=t.shortDecimalFormat[s]);var l=function(e){var r=0,t=0,n=0,i="";if("0"!==e[0]){for(;"0"!==e[r]&&r<e.length;)r++;i=e.substr(0,r),n=r}for(r=n;r<e.length&&"0"===e[r];r++)t++;return[i,t]}(s),u=l[1];if(i=l[0],u<s.length){var m=1*Math.pow(10,u);e/=m=n[1]/m*10}}var c="";void 0!==s&&(c=s.substr(u+l[0].length));return c=i+O(e,r,t)+(c=c.replace(/'\.'/g,"."))},_=function(e,t){var n=e+"",i=0,a=n.split(/e/i),o=a[0];k.lastIndex=0;var s=k.exec(o);null!==s?(i=s[1].length-1,o=s[2]):o=o.replace(".","");var l=a.length>1?parseInt(a[1],10):0,u=parseInt(o,10),m=t.minimumIntegerDigits+t.maximumFractionDigits;if(o.length>m){m-=o.length;var c=Math.pow(10,m);u=Math.round(u*c)}var g=t.minimumIntegerDigits+t.minimumFractionDigits;u=r(u+="",g,!1),-1!==n.indexOf(".")?l-=t.minimumIntegerDigits-n.indexOf(".")+i:l-=g-o.length-t.minimumFractionDigits;var p=Math.abs(l);p=r(p+"",t.minExponentDigits,!0),l<0&&(p=t.minusSign+p);var v=u.slice(0,t.minimumIntegerDigits);return u.slice(t.minimumIntegerDigits).length>0?v+=t.decimalSeparator+u.slice(t.minimumIntegerDigits)+t.exponential+p:v+=t.exponential+p,v},O=function(e,t,n){var i,a=n.groupingSize,o=n.groupingSize0,s=n.decimalSeparator,l=e+"",u=l.split(/e/i),m=u.length>1?parseInt(u[1],10):0,c=(u=(l=u[0]).split(".")).length>1?u[1]:"";if(u.length>1&&c.length>m){i=Math.min(n.maximumFractionDigits,c.length-m);var g=t.roundingMode||"DEFAULT";e=h(e,i,g)}m=(u=(l=e+"").split(/e/i)).length>1?parseInt(u[1],10):0,l=(u=(l=u[0]).split("."))[0],c=u.length>1?u[1]:"",m>0?(l+=(c=r(c,m,!1)).slice(0,m),c=c.substr(m)):m<0&&(c=(l=r(l,(m=-m)+1,!0)).slice(-m,l.length)+c,l=l.slice(0,-m)),c=i>0&&c.length>0?s+(c.length>i?c.slice(0,i):r(c,i,!1)):n.minimumFractionDigits>0?s:"";var p=s.length+n.minimumFractionDigits;c=r(c,p,!1);var v=n.groupingSeparator,d="";!1===t.useGrouping&&void 0===t.pattern&&(v="");var f=(l=r(l,n.minimumIntegerDigits,!0)).length-1;for(c=c.length>1?c:"";f>=0;){if(0===a||a>f)return l.slice(0,f+1)+(d.length?v+d+c:c);d=l.slice(f-a+1,f+1)+(d.length?v+d:""),f-=a,o>0&&(a=o)}return l.slice(0,f+1)+v+d+c},D=function(e,r,t){if("HALF_DOWN"===t||"HALF_EVEN"===t){var n=e.substr(r);(n=parseInt(n,10))>5&&(t="HALF_UP")}return t},h=function(e,r,t){var n=e.toString().split(".");if(void 0===n[1])return e;if("5"===n[1][r]&&"DEFAULT"!==t){var i=D(n[1],r,t);return i=F(n,i,r),b(e,-r,i,n)}var a=Math.pow(10,r),o=Math.round(e*a)/a;return isFinite(o)?o:e},F=function(e,r,t){var n=K[r];if("HALF_EVEN"===r){var i;if(0===t){var a=e[0].length;i=parseInt(e[0][a-1],10)}else i=parseInt(e[1][t-1],10);n=i%2==0?K.HALF_DOWN:K.HALF_UP}return n},b=function(e,r,t,n){if(0===r)return"5"===n[1][0]?Math[t](e):Math.round(e);var i=e.toString().split("e"),a=i[0],o=i[1],s=a+"e"+(o?parseInt(o,10)-r:-r),l=parseFloat(s);return s=(a=(i=(e=Math[t](l)).toString().split("e"))[0])+"e"+((o=i[1])?parseInt(o,10)+r:r),l=parseFloat(s)},t=function(r,t,n,i,a){var o=e.OraI18nUtils.getLocaleElementsMainNode(n);if(!isFinite(r))return r===1/0?o.numbers[i.numberingSystem].infinity:r===-1/0?o.numbers[i.numberingSystem].infinity:o.numbers[i.numberingSystem].nan;var s=Math.abs(r);!0===i.isPercent||"percent"===i.style?s*=100:!0===i.isPerMill&&(s*=1e3);var l=t.decimalFormat;void 0===l&&(l=t.currencyFormat);var u=i.style;s="decimal"!==u&&"currency"!==u||void 0===l||"standard"===l?!0===i.useExponentialNotation?_(s,i):"unit"===u?w(s,t,i,o):O(s,t,i):C(s,t,i);var m="";m+=r<0&&s-0!=0?i.negativePrefix+s+i.negativeSuffix:i.positivePrefix+s+i.positiveSuffix;var c=I(a);if(void 0===e.OraI18nUtils.numeringSystems[c]&&(c="latn"),"latn"!==c){var g,p=[];for(g=0;g<m.length;g++)m[g]>="0"&&m[g]<="9"?p.push(e.OraI18nUtils.numeringSystems[c][m[g]]):p.push(m[g]);return p.join("")}return m},l=function(r,t,n,i){var a,s=e.OraI18nUtils.trimNumber(r),l="",m=!1,c=i.numbers[n.numberingSystem].plusSign,g=new RegExp("^"+c.replace(H,"\\$1"));s=s.replace(g,"");var p=e.OraI18nUtils.trimNumber(n.positivePrefix),v=e.OraI18nUtils.trimNumber(n.positiveSuffix),d=e.OraI18nUtils.trimNumber(n.negativePrefix),f=e.OraI18nUtils.trimNumber(n.negativeSuffix),y=new RegExp("^"+(p||"").replace(H,"\\$1")),h=new RegExp((v||"").replace(H,"\\$1")+"$"),b=new RegExp("^"+(d||"").replace(H,"\\$1")),F=new RegExp((f||"").replace(H,"\\$1")+"$");if(!0===b.test(s)&&!0===F.test(s))s=(s=s.replace(b,"")).replace(F,""),l="-",m=!0;else if(!0===y.test(s)&&!0===h.test(s))s=(s=s.replace(y,"")).replace(h,""),l="+",m=!0;else if("currency"===n.style){var S,I,D,x,N,O=n.currencyCode,_=O;void 0!==i.numbers.currencies[O]&&(_=i.numbers.currencies[O].symbol),void 0===n.currencyDisplay||"symbol"===n.currencyDisplay?N=_:"code"===n.currencyDisplay&&(N=O),void 0!==N&&(S=(p||"").replace(N,""),I=(v||"").replace(N,""),D=(d||"").replace(N,""),x=(f||"").replace(N,""),y=new RegExp(("^"+S).replace(H,"\\$1")),h=new RegExp(I.replace(H,"\\$1")+"$"),b=new RegExp(("^"+D).replace(H,"\\$1")),F=new RegExp(x.replace(H,"\\$1")+"$"),!0===b.test(s)&&!0===F.test(s)?(s=(s=s.replace(b,"")).replace(F,""),l="-",m=!0):!0===y.test(s)&&!0===h.test(s)&&(s=(s=s.replace(y,"")).replace(h,""),l="+",m=!0))}return m?a=[l,s]:"full"===n.lenientParse?(a=u(s,n))[2]=!0:o(n.style,n,r),a},u=function(r,t){var n=t.groupingSeparator,i=t.decimalSeparator,a=t.minusSign,o="",s="",l=e.OraI18nUtils.toUpper(t.exponential),u=n;r=(r=(r=e.OraI18nUtils.toUpper(r)).split(l).join("E")).split(u).join("");var m=u.replace(/\u00A0/g," ");u!==m&&(r=r.split(m).join("")),"."===(r=r.split(i).join(".")).charAt(0)&&(r=r.substr(1),s="."),r=r.replace(a,"-");var c=s+$.exec(r)[2];return e.OraI18nUtils.startsWith(c,"-")?(c=c.substr("-".length),o="-"):e.OraI18nUtils.startsWith(r,"+")&&(c=c.substr("+".length),o="+"),[o,c]},m=function(r,t){var n,i=t.minusSign,a=t.plusSign;return r=e.OraI18nUtils.trimNumber(r),i=e.OraI18nUtils.trimNumber(i),a=e.OraI18nUtils.trimNumber(a),e.OraI18nUtils.startsWith(r,i)?n=["-",r.substr(i.length)]:e.OraI18nUtils.startsWith(r,e.OraI18nUtils.trimNumber(a))&&(n=["+",r.substr(a.length)]),n||["",r]},i=function(r,t){var n,i=I(t);if(void 0===e.OraI18nUtils.numeringSystems[i])return r;var a=[];for(n=0;n<r.length;n++){var o=e.OraI18nUtils.numeringSystems[i].indexOf(r[n]);-1!==o?a.push(o):a.push(r[n])}return a.join("")},a=function(r,t){var n={},i=t.decimalSeparator,a=t.groupingSeparator;r=r.replace(/ /g,"");var o,s,l=t.exponential,u=r.indexOf(l.toLowerCase());u<0&&(u=r.indexOf(e.OraI18nUtils.toUpper(l))),u<0?(s=r,n.exponent=null):(s=r.substr(0,u),n.exponent=r.substr(u+l.length));var m=i,c=s.indexOf(m);c<0?(o=s,n.fraction=null):(o=s.substr(0,c),n.fraction=s.substr(c+m.length)),o=o.split(a).join("");var g=a.replace(/\u00A0/g," ");return a!==g&&(o=o.split(g).join("")),n.integer=o,n},x=function(r,t,n,i){return isNaN(r)&&o(n.style,n,i),!0===n.isPercent||"percent"===n.style?r/=100:!0===n.isPerMill&&(r/=1e3),e.OraI18nUtils.getGetOption(t,"OraNumberConverter.parse")("roundDuringParse","boolean",[!0,!1],!1)&&(r=p(r,n,t)),r},o=function(e,r,t){var n,i,a,o;switch(n="Unparsable number "+t+" The expected number pattern is "+r.pat,e){case"decimal":o="decimalFormatMismatch";break;case"currency":o="currencyFormatMismatch";break;case"percent":o="percentFormatMismatch"}throw i=new Error(n),a={errorCode:o,parameterMap:{value:t,format:r.pat}},i.errorInfo=a,i},n=function(r,t,n,s){var g=e.OraI18nUtils.getLocaleElementsMainNode(t),p={},v=i(r,s);c(t,p,n,s);var d=NaN,f=v.replace(/ /g,"");if(A.test(f))return d=parseFloat(v);var y=l(v,0,p,g),h=y[0],b=y[1];if(h=h||"+",y[2])return d=parseFloat(h+b),x(d,n,p,r);var F=a(b,p),S=F.integer,I=F.fraction,D=F.exponent,N=h+S;if(null!==I&&(N+="."+I),null!==D){var O=m(D,p);N+="e"+(O[0]||"+")+O[1]}return R.test(N)?d=parseFloat(N):"full"===p.lenientParse?(N=u(v,p),d=parseFloat(N[0]+N[1])):o(p.style,p,r),x(d,n,p,r)};var q,B,z,Y;return T=function(e){var r,t;throw t={errorCode:"optionValueInvalid",parameterMap:{propertyName:"pattern",propertyValue:e,propertyValueHint:"#,##0.###"}},(r=new SyntaxError('Unexpected character(s) encountered in the pattern "'+e+' An example of a valid pattern is "#,##0.###".')).errorInfo=t,r},M=function(e,r,t){var n=e.substr(r,t.length);return null!==new RegExp(t,"i").exec(n)},j=function(e,r){var t={};null!==q&&(r.positivePrefix=P(q,e,r,t)),null!==B&&(r.positiveSuffix=P(B,e,r,t)),null!==z&&(r.negativePrefix=P(z,e,r,t)),null!==Y&&(r.negativeSuffix=P(Y,e,r,t)),void 0!==t.name&&(r.positiveSuffix=" "+t.name,r.positivePrefix="","ar"===r.lang?(r.negativeSuffix=e.numbers[r.numberingSystem].minusSign+" "+t.name,r.negativePrefix=""):(r.negativeSuffix=" "+t.name,r.negativePrefix=e.numbers[r.numberingSystem].minusSign))},P=function(e,r,t,n){for(var i="",a=0;a<e.length;){var o=e.charAt(a++);if("'"!==o){switch(o){case"¤":var s=t.currencyCode,l=s,u=s;void 0!==r.numbers.currencies[s]&&(l=r.numbers.currencies[s].displayName,u=r.numbers.currencies[s].symbol),void 0===t.currencyDisplay||"symbol"===t.currencyDisplay?o=u:"code"===t.currencyDisplay?o=s:(o=l,n.name=o);break;case"%":o=r.numbers[t.numberingSystem].percentSign;break;case"‰":o=r.numbers[t.numberingSystem].perMille;break;case"-":o=r.numbers[t.numberingSystem].minusSign}i=i.concat(o)}}return i},s=function(e,r,t,n){for(var i=!1,a=!1,o=0,s=0,l=!0,u=1;u>=0&&s<r.length;--u){var m,c=!1,g="",p="",d=-1,f=1,y=0,h=0,b=0,F=-1,S=-1,I=0;l=!0;for(var D=s;D<r.length;++D){var x=r.charAt(D);switch(I){case 0:case 2:if(c){if("'"===x){D+1<r.length&&"'"===r.charAt(D+1)?(++D,l?g=g.concat("''"):p=p.concat("''")):c=!1;continue}}else{if("#"===x||"0"===x||","===x||"."===x){I=1,--D;continue}if("¤"===x){void 0===e.currency&&v("style"),n.style="currency";var N=D+1<r.length&&"¤"===r.charAt(D+1);N&&++D,l?g=g.concat(N?"'¤¤":"'¤"):p=p.concat(N?"'¤¤":"'¤");continue}if("'"===x){if("'"===x){D+1<r.length&&"'"===r.charAt(D+1)?(++D,l?g=g.concat("''"):p=p.concat("''")):c=!0;continue}}else{if(";"===x){0!==I&&0!==u||T(r),s=D+1,D=r.length;continue}if("%"===x){n.style="percent",1!==f&&T(r),n.isPercent=!0,f=100,l?g=g.concat("'%"):p=p.concat("'%");continue}if("‰"===x){1!==f&&T(r),n.style="perMill",n.isPerMill=!0,f=1e3,l?g=g.concat("'‰"):p=p.concat("'‰");continue}if("-"===x){l?g=g.concat("'-"):p=p.concat("'-");continue}}}l?g=g.concat(x):p=p.concat(x);break;case 1:if(1!==u){0==--o&&(I=2,l=!1);continue}if(++o,"#"===x)h>0?++b:++y,F>=0&&d<0&&++F;else if("0"===x)b>0&&T(r),++h,F>=0&&d<0&&++F;else if(","===x)S=F,F=0;else{if("."!==x){if(M(r,D,"E")){for(a&&T(r),a=!0,m=0,D+="E".length;D<r.length&&"0"===r.charAt(D);)++m,++o,++D;(y+h<1||m<1)&&T(r),I=2,l=!1,--D;continue}I=2,l=!1,--D,--o;continue}d>=0&&T(r),d=y+h+b}}}if(0===h&&y>0&&d>=0){var O=d;0===O&&++O,b=y-O,y=O-1,h=1}if((d<0&&b>0||d>=0&&(d<y||d>y+h)||0===F||c)&&T(r),1===u){z=q=g,Y=B=p;var _=y+h+b,C=d>=0?d:_;n.minimumIntegerDigits=C-y,n.maximumIntegerDigits=a?y+n.minimumIntegerDigits:2147483647,n.maximumFractionDigits=d>=0?_-d:0,n.minimumFractionDigits=d>=0?y+h-d:0,n.groupingSize=F>0?F:0,n.groupingSize0=S}else z=g,Y=p,i=!0}0===r.length&&(q=B="",n.minimumIntegerDigits=0,n.maximumIntegerDigits=2147483647,n.minimumFractionDigits=0,n.maximumFractionDigits=2147483647),n.useExponentialNotation=a,n.minExponentDigits=m,(!i||0===z.localeCompare(q)&&0===Y.localeCompare(B))&&("currency"===n.style&&"ar"===n.lang?(Y=B+"'‏-",z=q):(Y=B,z="'-"+q)),j(t,n)},p=function(e,r,t){var n=r.maximumFractionDigits,i=e<0,a=t.roundingMode||"DEFAULT",o=h(Math.abs(e),n,a);return i?-o:o},V=function(r,t,n){var i={};return g(t,"OraNumberConverter.resolvedOptions"),c(r,i,t,n),i.numberingSystemKey=I(n),void 0===e.OraI18nUtils.numeringSystems[i.numberingSystemKey]&&(i.numberingSystemKey="latn"),i},L=function(e,r,t){var n={locale:t,style:void 0===e.style?"decimal":e.style,useGrouping:void 0===r.useGrouping||r.useGrouping,numberingSystem:e.numberingSystemKey};n.minimumIntegerDigits=e.minimumIntegerDigits,n.minimumFractionDigits=e.minimumFractionDigits,n.maximumFractionDigits=e.maximumFractionDigits,"decimal"===e.style&&void 0!==r.decimalFormat&&(n.decimalFormat=r.decimalFormat),"currency"===e.style&&void 0!==r.currencyFormat&&(n.currencyFormat=r.currencyFormat),"currency"===e.style&&(n.currency=r.currency,n.currencyDisplay=void 0===r.currencyDisplay?"symbol":r.currencyDisplay),void 0!==r.unit&&(n.unit=r.unit),void 0!==r.pattern&&(n.pattern=r.pattern);var i=r.roundingMode,a=r.roundDuringParse;void 0!==i&&(n.roundingMode=i),void 0!==a&&(n.roundDuringParse=a);var o=e.lenientParse;void 0!==o&&(n.lenientParse=o);var s=e.separators;return void 0!==s&&(n.separators=s),n},{getInstance:function(){return U||(U={format:function(e,r,n,i){(arguments.length<=2||void 0===n)&&(n={useGrouping:!0,style:"decimal"}),g(n,"OraNumberConverter.format");var a={};return c(r,a,n,i),t(e,n,r,a,i)},parse:function(e,r,t,i){return"number"==typeof e?e:"[object Number]"===Object.prototype.toString.call(e)?Number(e):((arguments.length<=2||void 0===t)&&(t={useGrouping:!0,style:"decimal"}),g(t,"OraNumberConverter.parse"),n(e,r,t,i))},resolvedOptions:function(r,t,n){(arguments.length<3||void 0===n)&&(n=e.OraI18nUtils.getLocaleElementsMainNodeKey(r)),(arguments.length<2||void 0===t)&&(t={useGrouping:!0,style:"decimal"});var i=V(r,t,n);return L(i,t,n)}}),U}}}()});
