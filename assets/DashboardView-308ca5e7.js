import{_ as p,i as h,j as g,k as r,l as f,m,o as v,c as k,a as s,h as i,u as w,p as D,e as x,s as S}from"./index-a84e0d6e.js";import{u as I}from"./user-5f11e5ca.js";const _=t=>(D("data-v-8eec0566"),t=t(),x(),t),V={class:"container"},B=_(()=>s("h1",{class:"title"},"Dashboard",-1)),C=_(()=>s("h2",null,"Hi,",-1)),U=["onClick"],y={__name:"DashboardView",setup(t){const a=h().currentUser,n=g(),l=r(n);f(m(l,`users/${a.uid}/nombre`)).then(e=>{e.exists()?console.log(e.val()):console.log("No data available")}).catch(e=>{console.error(e)});function u(e,o,c){S(r(n,"users/"+e),{nombre:o,apellido:c}),console.log("escribiendo")}const d=I(),b=()=>{d.logout()};return(e,o)=>(v(),k("div",V,[B,C,s("button",{class:"buttons__btn buttons__btn--logout",onClick:i(b,["prevent"])}," Logout ",8,U),s("button",{class:"buttons__btn buttons__btn--logout",onClick:o[0]||(o[0]=i(c=>u(w(a).uid,"katherine",""),["prevent"]))}," escribir ")]))}},A=p(y,[["__scopeId","data-v-8eec0566"]]);export{A as default};
