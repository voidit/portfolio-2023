import{d as h}from"../chunks/environment.9aa685ef.js";import{s as m,f as p,a as v,F as f,g as d,d as s,c as g,u as _,j as i,w as y,i as c,x as r}from"../chunks/scheduler.4e68f8c7.js";import{S as b,i as w}from"../chunks/index.45d1a301.js";import{b as T}from"../chunks/paths.f4129ec2.js";const S=h,x=!0,L=Object.freeze(Object.defineProperty({__proto__:null,csr:S,prerender:x},Symbol.toStringTag,{value:"Module"}));function M(u){let e,o,t,l=`<h1>About this app</h1> <p>This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:</p> <pre>npm create svelte@latest</pre> <p>The page you&#39;re looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don&#39;t need to load any JavaScript. Try viewing the page&#39;s source, or opening
		the devtools network panel and reloading.</p> <p>The <a href="${T}/sverdle">Sverdle</a> page illustrates SvelteKit&#39;s data loading and form handling. Try
		using it with JavaScript disabled!</p>`;return{c(){e=p("meta"),o=v(),t=p("div"),t.innerHTML=l,this.h()},l(a){const n=f("svelte-1ds1qyu",document.head);e=d(n,"META",{name:!0,content:!0}),n.forEach(s),o=g(a),t=d(a,"DIV",{class:!0,"data-svelte-h":!0}),_(t)!=="svelte-2u24zw"&&(t.innerHTML=l),this.h()},h(){document.title="About",i(e,"name","description"),i(e,"content","About this app"),i(t,"class","text-column")},m(a,n){y(document.head,e),c(a,o,n),c(a,t,n)},p:r,i:r,o:r,d(a){a&&(s(o),s(t)),s(e)}}}class q extends b{constructor(e){super(),w(this,e,null,M,m,{})}}export{q as component,L as universal};
