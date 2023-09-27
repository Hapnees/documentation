"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0435\u0439 \u0444\u043e\u0440\u043c\u044b",sidebar_position:3},l=void 0,c={unversionedId:"libs/react-hook-form/form-values",id:"libs/react-hook-form/form-values",title:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0435\u0439 \u0444\u043e\u0440\u043c\u044b",description:"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c, \u043a\u043e\u0433\u0434\u0430 \u043c\u043d\u0435 \u043d\u0443\u0436\u043d\u044b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u0444\u043e\u0440\u043c\u044b \u0432\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438?",source:"@site/docs/libs/react-hook-form/form-values.mdx",sourceDirName:"libs/react-hook-form",slug:"/libs/react-hook-form/form-values",permalink:"/slonum-documentation/docs/libs/react-hook-form/form-values",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/libs/react-hook-form/form-values.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0435\u0439 \u0444\u043e\u0440\u043c\u044b",sidebar_position:3},sidebar:"reactHookFormId",previous:{title:"Controlled \u0438\u043d\u043f\u0443\u0442",permalink:"/slonum-documentation/docs/libs/react-hook-form/controller"},next:{title:"\u0413\u043b\u0443\u0431\u043e\u043a\u0430\u044f \u0444\u043e\u0440\u043c\u0430",permalink:"/slonum-documentation/docs/libs/react-hook-form/deep-form"}},i={},s=[{value:"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c, \u043a\u043e\u0433\u0434\u0430 \u043c\u043d\u0435 \u043d\u0443\u0436\u043d\u044b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u0444\u043e\u0440\u043c\u044b \u0432\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438?",id:"\u0447\u0442\u043e-\u0434\u0435\u043b\u0430\u0442\u044c-\u043a\u043e\u0433\u0434\u0430-\u043c\u043d\u0435-\u043d\u0443\u0436\u043d\u044b-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f-\u0438\u0437-\u0444\u043e\u0440\u043c\u044b-\u0432\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0438-\u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438",level:2},{value:"getValues",id:"getvalues",level:3},{value:"watch",id:"watch",level:3},{value:"\u0412 \u0447\u0451\u043c \u043e\u0442\u043b\u0438\u0447\u0438\u0435 watch \u0438 getValues?",id:"\u0432-\u0447\u0451\u043c-\u043e\u0442\u043b\u0438\u0447\u0438\u0435-watch-\u0438-getvalues",level:3},{value:"\u041a\u0430\u043a \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044f \u0438\u0437\u0432\u043d\u0435?",id:"\u043a\u0430\u043a-\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f-\u043f\u043e\u043b\u044f-\u0438\u0437\u0432\u043d\u0435",level:2}],u={toc:s},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u0447\u0442\u043e-\u0434\u0435\u043b\u0430\u0442\u044c-\u043a\u043e\u0433\u0434\u0430-\u043c\u043d\u0435-\u043d\u0443\u0436\u043d\u044b-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f-\u0438\u0437-\u0444\u043e\u0440\u043c\u044b-\u0432\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0438-\u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438"},"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c, \u043a\u043e\u0433\u0434\u0430 \u043c\u043d\u0435 \u043d\u0443\u0436\u043d\u044b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u0437 \u0444\u043e\u0440\u043c\u044b \u0432\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438?"),(0,o.kt)("p",null,"\u041d\u0430 \u044d\u0442\u043e\u0442 \u0441\u043b\u0443\u0447\u0430\u0439 \u0432 \u0445\u0443\u043a\u0435 ",(0,o.kt)("strong",{parentName:"p"},"useForm")," \u0435\u0441\u0442\u044c \u0434\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438: ",(0,o.kt)("inlineCode",{parentName:"p"},"getValues")," \u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"watch")),(0,o.kt)("h3",{id:"getvalues"},"getValues"),(0,o.kt)("p",null,"\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c, \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044f \u0432 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435. \u0414\u043b\u044f \u0442\u0430\u043a\u0438\u0445 \u043d\u0443\u0436\u0434 \u043d\u0430\u043c \u043f\u043e\u0434\u043e\u0439\u0434\u0451\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"getValues")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface IForm {\n  comment: string\n}\n\nexport const SendComment = () => {\n  const { register, getValues } = useForm<IForm>()\n\n  const onClickSomeButton = () => {\n    console.log(getValues('comment'))\n  }\n\n  return (\n    <div>\n      <textarea {...register('comment')} />\n      <button onClick={onClickSomeButton}></button>\n    </div>\n  )\n}\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"watch"},"watch"),(0,o.kt)("p",null,"\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c, \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u043b\u0435\u0434\u0438\u0442\u044c \u0437\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044f. \u0414\u043b\u044f \u0442\u0430\u043a\u0438\u0445 \u043d\u0443\u0436\u0434 \u043d\u0430\u043c \u043f\u043e\u0434\u043e\u0439\u0434\u0451\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"watch")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface IForm {\n  comment: string\n}\nexport const SendComment = () => {\n  const { register, watch } = useForm<IForm>()\n  const commentValue = watch('comment')\n\n  useEffect(() => {\n    console.log(commentValue)\n  }, [commentValue])\n\n  return (\n    <div>\n      <textarea {...register('comment')} />\n    </div>\n  )\n}\n")),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"\u0432-\u0447\u0451\u043c-\u043e\u0442\u043b\u0438\u0447\u0438\u0435-watch-\u0438-getvalues"},"\u0412 \u0447\u0451\u043c \u043e\u0442\u043b\u0438\u0447\u0438\u0435 watch \u0438 getValues?"),(0,o.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"watch")," \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044f \u0438 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u0440\u0435\u0440\u0435\u043d\u0434\u0435\u0440 \u043f\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u043c\n\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0435\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"),(0,o.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"getValues")," - \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442, \u043d\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438 \u043d\u0435 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u0440\u0435\u0440\u0435\u043d\u0434\u0435\u0440"),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"\u043a\u0430\u043a-\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f-\u043f\u043e\u043b\u044f-\u0438\u0437\u0432\u043d\u0435"},"\u041a\u0430\u043a \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u044f \u0438\u0437\u0432\u043d\u0435?"),(0,o.kt)("p",null,"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432 ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," \u0435\u0441\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"setValue")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface IForm {\n  comment: string\n}\n\nexport const SendComment = () => {\n  const { register, setValue } = useForm<IForm>()\n\n  const onClickSomeButton = () => {\n    setValue('comment', 'My special comment')\n  }\n\n  return (\n    <div>\n      <textarea {...register('comment')} />\n      <button onClick={onClickSomeButton}>Click me</button>\n    </div>\n  )\n}\n")))}p.isMDXComponent=!0}}]);