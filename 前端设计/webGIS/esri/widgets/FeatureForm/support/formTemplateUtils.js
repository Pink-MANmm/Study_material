// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define(["exports","../../../layers/support/RangeDomain","../FieldConfig","../FieldGroupConfig"],function(m,p,q,r){function n(h,c,d,k=!0){return h.map(a=>{if("field"===a.type){{const {description:t,domain:e,editable:u,fieldName:v,hint:w,input:b,label:x,requiredExpression:y,visibilityExpression:z}=a;a=new q({description:t,domain:e,editable:u,hint:w,label:x,name:v,requiredExpression:c[y]||null,visibilityExpression:c[z]||null});if(b)if("barcode-scanner"===b.type||"text-area"===b.type||"text-box"===b.type)a.minLength=
b.minLength,a.maxLength=b.maxLength;else if("combo-box"===b.type||"radio-buttons"===b.type)a.noValueOptionLabel=b.noValueOptionLabel,a.showNoValueOption=b.showNoValueOption;else if("switch"===b.type)a.offValue=b.offValue,a.onValue=b.onValue;else if("datetime-picker"===b.type){a.includeTime=b.includeTime;const {max:f,min:g}=b;if(f||g){var l="range"===(null==e?void 0:e.type)?Math.min(null==f?void 0:f.getTime(),e.maxValue):null==f?void 0:f.getTime();const A="range"===(null==e?void 0:e.type)?Math.max(null==
g?void 0:g.getTime(),e.minValue):null==g?void 0:g.getTime();a.domain=new p({maxValue:l,minValue:A,name:"__internal-range-domain-based-on-datetime-picker-input__"})}}else d.push({type:"unsupported-input-type",details:b})}return a}if("group"===a.type){if(!k)return d.push({type:"nested-group",details:a}),null;l=c[a.visibilityExpression]||null;return new r({description:a.description,state:a.initialState,fieldConfig:n(a.elements,c,d,!1),label:a.label,visibilityExpression:l})}d.push({type:"unsupported-element-type",
details:a});return null}).filter(a=>!!a)}m.fieldConfigsFromFormTemplate=function(h){var c;const d={},k=[];null==(c=h.expressionInfos)?void 0:c.map(a=>d[a.name]=a.expression);return{config:n(h.elements,d,k),encounteredUnsupportedTypes:k}};Object.defineProperties(m,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});