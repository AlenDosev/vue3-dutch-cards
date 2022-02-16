import{d as h,o as d,c as m,u as _,R as v,a as y,b as a,n as g,t as c,e as C,f as w,g as k,h as b,p as I,i as A}from"./vendor.df7ad755.js";const L=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}};L();const P=h({setup(o){return(e,i)=>(d(),m(_(v)))}}),x="modulepreload",u={},E="/vue3-dutch-cards/",O=function(e,i){return!i||i.length===0?e():Promise.all(i.map(n=>{if(n=`${E}${n}`,n in u)return;u[n]=!0;const t=n.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const s=document.createElement("link");if(s.rel=t?"stylesheet":x,t||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),t)return new Promise((f,p)=>{s.addEventListener("load",f),s.addEventListener("error",p)})})).then(()=>e())};var B=(o,e)=>{const i=o.__vccOpts||o;for(const[n,t]of e)i[n]=t;return i};const D={data:()=>({rows:[],currentIteration:0,fliped:!1}),async mounted(){document.addEventListener("keyup",e=>{e.code==="Space"?this.flipCard():e.code==="ArrowLeft"?this.switchCard(!1):e.code==="ArrowRight"&&this.switchCard(!0)});const{data:o}=await this.axios.get("https://sheets.googleapis.com/v4/spreadsheets/1EHBijDmk5nIANiYF4aiUViKKNPfKfgdw-Ws4B8Xt5mA/values/H1!A2:B200?key=AIzaSyDXokXhuuI6PRqUDAMw1dDhOKXlFHcWDh0");this.rows=o.values},computed:{front(){return this.rows.length?this.rows[this.currentIteration][0]:""},back(){return this.rows.length?this.rows[this.currentIteration][1]:""}},methods:{flipCard(){this.fliped?this.fliped=!1:this.fliped=!0},switchCard(o=!0){let e=0,i=0;this.fliped&&(this.fliped=!1,e=600),o?this.currentIteration+1<this.rows.length&&(i=1):this.currentIteration>1&&(i=-1),setTimeout(()=>{this.currentIteration=this.currentIteration+i},e)}}},N={class:"main"},R={class:"front"},S={class:"back"},V={class:"actions"};function K(o,e,i,n,t,r){return d(),y("main",N,[a("div",{class:"card",onClick:e[0]||(e[0]=(...s)=>r.flipCard&&r.flipCard(...s))},[a("div",{class:g(["content",{fliped:o.fliped}])},[a("div",R,c(r.front),1),a("div",S,c(r.back),1)],2)]),a("div",V,[a("button",{class:"flip-btn",onClick:e[1]||(e[1]=s=>r.switchCard(!1))},"Previous Card"),a("button",{class:"flip-btn",onClick:e[2]||(e[2]=(...s)=>r.flipCard&&r.flipCard(...s))},"Flip"),a("button",{class:"flip-btn",onClick:e[3]||(e[3]=s=>r.switchCard(!0))},"Next Card")])])}var W=B(D,[["render",K]]);const F=C({history:w("/vue3-dutch-cards/"),routes:[{path:"/",name:"home",component:W},{path:"/about",name:"about",component:()=>O(()=>import("./AboutView.a1e3c58a.js"),["assets/AboutView.a1e3c58a.js","assets/AboutView.ab071ea6.css","assets/vendor.df7ad755.js"])}]}),l=k(P);l.use(b());l.use(F);l.use(I,A);l.mount("#app");export{B as _};
