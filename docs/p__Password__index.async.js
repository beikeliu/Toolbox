"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29],{18905:function(K,v,e){e.r(v);var M=e(25359),b=e.n(M),D=e(49811),O=e.n(D),y=e(54306),f=e.n(y),U=e(24434),c=e(15438),r=e(88983),T=e(12068),B=e(49952),L=e(96285),A=e(93236),a=e(62086),I=c.Z.Title,j=[{label:"\u5927\u5199\u5B57\u6BCD",value:"hasUpperCase"},{label:"\u5C0F\u5199\u5B57\u6BCD",value:"hasLowerCase"},{label:"\u6570\u5B57",value:"hasNumber"},{label:"\u7B26\u53F7",value:"hasSymbol"}];function R(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:6,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,s="",l="",p="ABCDEFGHIJKLMNOPQRSTUVWXYZ",h="abcdefghijklmnopqrstuvwxyz",E="012345678901234567890123456789",t="!@#$%^&*()_+~`|}{[]:;?><,./-=";if(o&&(s+=p),d&&(s+=h),n&&(s+=E),i&&(s+=t),s==="")return"\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u79CD\u5B57\u7B26\u7C7B\u578B";for(var _=0;_<g;_++)l+=s[Math.floor(Math.random()*s.length)];return l}var W=function(){var o=r.Z.useForm(),d=f()(o,1),n=d[0],i=(0,A.useState)(""),s=f()(i,2),l=s[0],p=s[1],h=function(){var E=O()(b()().mark(function t(){var _,C,u,P;return b()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.validateFields();case 2:_=n.getFieldsValue(),C=_.length,u=_.types,P=R(C,u.includes("hasUpperCase"),u.includes("hasLowerCase"),u.includes("hasNumber"),u.includes("hasSymbol")),p(P);case 5:case"end":return m.stop()}},t)}));return function(){return E.apply(this,arguments)}}();return(0,a.jsxs)(U._z,{children:[(0,a.jsxs)(r.Z,{form:n,labelCol:{span:4},wrapperCol:{span:24},style:{maxWidth:600},autoComplete:"off",children:[(0,a.jsx)(r.Z.Item,{label:"\u5BC6\u7801\u957F\u5EA6",name:"length",required:!0,initialValue:8,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4E00\u4E2A\u4ECB\u4E8E4\u548C24\u4E4B\u95F4\u7684\u5BC6\u7801\u957F\u5EA6\uFF08\u6574\u6570\uFF09\uFF01"}],children:(0,a.jsx)(T.Z,{min:4,max:24,precision:0})}),(0,a.jsx)(r.Z.Item,{label:"\u5141\u8BB8\u7C7B\u578B",name:"types",required:!0,initialValue:["hasLowerCase","hasNumber"],rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5141\u8BB8\u7C7B\u578B\uFF01"}],children:(0,a.jsx)(B.Z.Group,{options:j})}),(0,a.jsx)(r.Z.Item,{wrapperCol:{offset:1},children:(0,a.jsx)(L.ZP,{type:"primary",htmlType:"submit",onClick:h,children:"\u5F00\u59CB\u751F\u6210"})})]}),(0,a.jsx)(I,{copyable:!!l,children:l})]})};v.default=W}}]);
