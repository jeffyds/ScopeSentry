import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CzRQLBNq.js";import{d as t,l as a,O as o,e as l,X as i,r as s,o as r,i as p,w as m,a as n,a0 as d}from"./index-5vcJ2QQZ.js";import{_ as c}from"./Table.vue_vue_type_script_lang-D6IomfDf.js";import{a as b}from"./index-BgR3XEMY.js";import{E as u}from"./el-tag-syt7MiqL.js";import"./el-card-6d_8MANV.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-popper-Bv917HkU.js";import"./el-checkbox-DLONfMTE.js";import"./useInput-BJ98M5Ic.js";import"./debounce-C5xcjF8i.js";import"./el-pagination-aFDEV2Bo.js";import"./el-image-viewer-qAQi6eg3.js";import"./tsxHelper-Fb1TrILC.js";import"./el-dropdown-item-DS_GItzN.js";import"./castArray-Dl7Q6x2L.js";import"./refs-DcxNlh2e.js";import"./index-CZhkd1jU.js";import"./raf-DeJzx9dp.js";import"./index-kuLHsiIe.js";const j=t({__name:"DefaultTable",setup(t){const{t:j}=a(),f=[{field:"title",label:j("tableDemo.title")},{field:"author",label:j("tableDemo.author")},{field:"display_time",label:j("tableDemo.displayTime"),sortable:!0},{field:"importance",label:j("tableDemo.importance"),formatter:(e,t,a)=>o(u,{type:1===a?"success":2===a?"warning":"danger"},(()=>j(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:j("tableDemo.pageviews")},{field:"action",label:j("tableDemo.action"),slots:{default:e=>{let t;return l(i,{type:"primary",onClick:()=>y(e)},"function"==typeof(a=t=j("tableDemo.action"))||"[object Object]"===Object.prototype.toString.call(a)&&!d(a)?t:{default:()=>[t]});var a}}}],g=s(!0);let _=s([]);(async e=>{const t=await b(e||{pageIndex:1,pageSize:10}).catch((()=>{})).finally((()=>{g.value=!1}));t&&(_.value=t.data.list)})();const y=e=>{};return(t,a)=>(r(),p(n(e),{title:n(j)("tableDemo.table"),message:n(j)("tableDemo.tableDes")},{default:m((()=>[l(n(c),{columns:f,data:n(_),loading:g.value,defaultSort:{prop:"display_time",order:"descending"}},null,8,["data","loading"])])),_:1},8,["title","message"]))}});export{j as default};