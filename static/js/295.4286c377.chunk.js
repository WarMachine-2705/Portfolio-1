(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[295],{295:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var r=n(43),s=n(475),i=n(551),a=n(579);const c=e=>{let{data:t}=e;return(0,a.jsx)("article",{className:"degree-container",children:(0,a.jsxs)("header",{children:[(0,a.jsx)("h4",{className:"degree",children:t.degree}),(0,a.jsxs)("p",{className:"school",children:[(0,a.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=e=>{let{data:t}=e;return(0,a.jsxs)("div",{className:"education",children:[(0,a.jsx)("div",{className:"link-to",id:"education"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Education"})}),t.map((e=>(0,a.jsx)(c,{data:e},e.school)))]})};o.defaultProps={data:[]};const l=o;var u=n(446),d=n.n(u),h=n(574);const m=e=>{let{data:{name:t,position:n,url:r,startDate:s,endDate:i,summary:c,highlights:o}}=e;return(0,a.jsxs)("article",{className:"jobs-container",children:[(0,a.jsxs)("header",{children:[(0,a.jsxs)("h4",{children:[(0,a.jsx)("a",{href:r,children:t})," - ",n]}),(0,a.jsxs)("p",{className:"daterange",children:[" ",d()(s).format("MMMM YYYY")," - ",i?d()(i).format("MMMM YYYY"):"PRESENT"]})]}),c?(0,a.jsx)(h.Ay,{options:{overrides:{p:{props:{className:"summary"}}}},children:c}):null,o?(0,a.jsx)("ul",{className:"points",children:o.map((e=>(0,a.jsx)("li",{children:e},e)))}):null]})},f=e=>{let{data:t}=e;return(0,a.jsxs)("div",{className:"experience",children:[(0,a.jsx)("div",{className:"link-to",id:"experience"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Experience"})}),t.map((e=>(0,a.jsx)(m,{data:e},"".concat(e.name,"-").concat(e.position))))]})};f.defaultProps={data:[]};const y=f,g=e=>{let{handleClick:t,active:n,label:r}=e;return(0,a.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:()=>t(r),children:r})},v=e=>{let{data:t,categories:n}=e;const{category:r,competency:s,title:i}=t,c={background:n.filter((e=>r.includes(e.name))).map((e=>e.color))[0]},o={...c,width:"".concat(String(Math.min(100,Math.max(s/5*100,0))),"%")};return(0,a.jsxs)("div",{className:"skillbar clearfix",children:[(0,a.jsx)("div",{className:"skillbar-title",style:c,children:(0,a.jsx)("span",{children:i})}),(0,a.jsx)("div",{className:"skillbar-bar",style:o}),(0,a.jsxs)("div",{className:"skill-bar-percent",children:[s," / 5"]})]})};v.defaultProps={categories:[]};const p=v,x=e=>{let{skills:t,categories:n}=e;const s=Object.fromEntries([["All",!1]].concat(n.map((e=>{let{name:t}=e;return[t,!1]})))),[i,c]=(0,r.useState)(s),o=e=>{const t=Object.keys(i).reduce(((t,n)=>({...t,[n]:e===n&&!i[n]})),{});t.All=!Object.keys(i).some((e=>t[e])),c(t)};return(0,a.jsxs)("div",{className:"skills",children:[(0,a.jsx)("div",{className:"link-to",id:"skills"}),(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h3",{children:"Skills"}),(0,a.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,a.jsx)("div",{className:"skill-button-container",children:Object.keys(i).map((e=>(0,a.jsx)(g,{label:e,active:i,handleClick:o},e)))}),(0,a.jsx)("div",{className:"skill-row-container",children:(()=>{const e=Object.keys(i).reduce(((e,t)=>i[t]?t:e),"All");return t.sort(((e,t)=>{let n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((t=>"All"===e||t.category.includes(e))).map((e=>(0,a.jsx)(p,{categories:n,data:e},e.title)))})()})]})};x.defaultProps={skills:[],categories:[]};const j=x,b=e=>{let{data:t,last:n}=e;return(0,a.jsxs)("li",{className:"course-container",children:[(0,a.jsxs)("a",{href:t.link,children:[(0,a.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,a.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,a.jsx)("div",{className:"course-dot",children:(0,a.jsx)("p",{className:"course-name",children:" \u2022"})})]})};b.defaultProps={last:!1};const $=b,k=e=>e.sort(((e,t)=>{let n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map(((t,n)=>(0,a.jsx)($,{data:t,last:n===e.length-1},t.title))),M=e=>{let{data:t}=e;return(0,a.jsxs)("div",{className:"courses",children:[(0,a.jsx)("div",{className:"link-to",id:"courses"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Selected Courses"})}),(0,a.jsx)("ul",{className:"course-list",children:k(t)})]})};M.defaultProps={data:[]};const N=M,D=()=>(0,a.jsxs)("div",{className:"references",children:[(0,a.jsx)("div",{className:"link-to",id:"references"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)(s.N_,{to:"/contact",children:(0,a.jsx)("h3",{children:"References are available upon request"})})})]}),S=[{title:"Calculus",number:"MAT 112",link:"",university:"NIIT University"},{title:"Communication Skills",number:"TA 102",link:"",university:"NIIT University"},{title:"Community Connect",number:"NU 111",link:"",university:"NIIT University"},{title:"Engineering Graphics",number:"TA 202",link:"",university:"NIIT University"},{title:"Fundamentals of Computer Programming",number:"TA 111",link:"",university:"NIIT University"},{title:"Fundamentals of Electronics",number:"EL 111",link:"",university:"NIIT University"},{title:"Organizing and Managing University/Students activity or events",number:"AOC 131",link:"",university:"NIIT University"},{title:"Physics",number:"PHY 101",link:"",university:"NIIT University"},{title:"Algebra & Differential Equations",number:"MAT 101",link:"",university:"NIIT University"},{title:"Chemistry",number:"CHM 111",link:"",university:"NIIT University"},{title:"Data Structures",number:"CS 102",link:"",university:"NIIT University"},{title:"Economics",number:"ECON 102",link:"",university:"NIIT University"},{title:"Environmental Science",number:"ENV 301",link:"",university:"NIIT University"},{title:"Workshop Practice",number:"TA 212",link:"",university:"NIIT University"}],I=[{school:"City Montessori School",degree:"Secured 95.4% in 10th Boards and 94% in 12th Boards.",year:2022},{school:"NIIT University",degree:"B.Tech Computer Science Engineering",link:"https://niituniversity.in/",year:2026}],T=[{name:"NUmunch",position:"Co-founder & CTO",url:"https://numunch1-2.onrender.com/",startDate:"2024-4-08",summary:"NUmunch is an online food ordering company. It helps student to order and get their food without having to wait in long queues for multiple hours. It is loved by many students.",highlights:["Cuts the traditional way of ordering food at the university","Easy to use app"]},{name:"CoEET",position:"Learning Assistant",startDate:"2023-2-20",endDate:"2023-5-9",summary:"CoEET is responsible for the planning, coordination, and execution of more than 60 Educational Technology projects at NU each semester, through its various desks. ",highlights:["I helped in the development of ETIC Portal"]}],w=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:4,category:["Web Development","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"MongoDB",competency:2,category:["Web Development","Databases"]},{title:"SQLite3/SQL",competency:1,category:["Web Development","Databases","Languages"]},{title:"Git",competency:3,category:["Tools"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python","ML Engineering"]},{title:"Jupyter",competency:1,category:["Data Science","Python"]},{title:"HTML + CSS",competency:4,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python","ML Engineering"]},{title:"Express.js",competency:1,category:["Data Engineering","ML Engineering","Python"]},{title:"C++",competency:1,category:["Languages"]},{title:"Matplotlib",competency:2,category:["Data Engineering","ML Engineering","Python"]},{title:"JAVA",competency:3,category:["Data Engineering","ML Engineering","Python"]}].map((e=>({...e,category:e.category.sort()}))),C=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],E=[...new Set(w.flatMap((e=>{let{category:t}=e;return t})))].sort().map(((e,t)=>({name:e,color:C[t]}))),O={Education:()=>(0,a.jsx)(l,{data:I}),Experience:()=>(0,a.jsx)(y,{data:T}),Skills:()=>(0,a.jsx)(j,{skills:w,categories:E}),Courses:()=>(0,a.jsx)(N,{data:S}),References:()=>(0,a.jsx)(D,{})},A=()=>(0,a.jsx)(i.A,{title:"Resume",description:"Michael D'Angelo's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook.",children:(0,a.jsxs)("article",{className:"post",id:"resume",children:[(0,a.jsx)("header",{children:(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h2",{children:(0,a.jsx)(s.N_,{to:"resume",children:"Resume"})}),(0,a.jsx)("div",{className:"link-container",children:Object.keys(O).map((e=>(0,a.jsx)("h4",{children:(0,a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)))})]})}),Object.entries(O).map((e=>{let[t,n]=e;return(0,a.jsx)(n,{},t)}))]})})},446:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",s="second",i="minute",a="hour",c="day",o="week",l="month",u="quarter",d="year",h="date",m="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},p={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(r,l),i=n-s<0,a=t.clone().add(r+(i?-1:1),l);return+(-(r+(n-s)/(i?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:o,d:c,D:h,h:a,m:i,s:s,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",j={};j[x]=g;var b="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[b])},k=function e(t,n,r){var s;if(!t)return x;if("string"==typeof t){var i=t.toLowerCase();j[i]&&(s=i),n&&(j[i]=n,s=i);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var c=t.name;j[c]=t,s=c}return!r&&s&&(x=s),s||!r&&x},M=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},N=p;N.l=k,N.i=$,N.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function g(e){this.$L=k(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[b]=!0}var v=g.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(N.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(f);if(r){var s=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],s,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return N},v.isValid=function(){return!(this.$d.toString()===m)},v.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return M(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<M(e)},v.$g=function(e,t,n){return N.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!N.u(t)||t,u=N.p(e),m=function(e,t){var s=N.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?s:s.endOf(c)},f=function(e,t){return N.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},y=this.$W,g=this.$M,v=this.$D,p="set"+(this.$u?"UTC":"");switch(u){case d:return r?m(1,0):m(31,11);case l:return r?m(1,g):m(0,g+1);case o:var x=this.$locale().weekStart||0,j=(y<x?y+7:y)-x;return m(r?v-j:v+(6-j),g);case c:case h:return f(p+"Hours",0);case a:return f(p+"Minutes",1);case i:return f(p+"Seconds",2);case s:return f(p+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,o=N.p(e),u="set"+(this.$u?"UTC":""),m=(n={},n[c]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[s]=u+"Seconds",n[r]=u+"Milliseconds",n)[o],f=o===c?this.$D+(t-this.$W):t;if(o===l||o===d){var y=this.clone().set(h,1);y.$d[m](f),y.init(),this.$d=y.set(h,Math.min(this.$D,y.daysInMonth())).$d}else m&&this.$d[m](f);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[N.p(e)]()},v.add=function(r,u){var h,m=this;r=Number(r);var f=N.p(u),y=function(e){var t=M(m);return N.w(t.date(t.date()+Math.round(e*r)),m)};if(f===l)return this.set(l,this.$M+r);if(f===d)return this.set(d,this.$y+r);if(f===c)return y(1);if(f===o)return y(7);var g=(h={},h[i]=t,h[a]=n,h[s]=e,h)[f]||1,v=this.$d.getTime()+r*g;return N.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var r=e||"YYYY-MM-DDTHH:mm:ssZ",s=N.z(this),i=this.$H,a=this.$m,c=this.$M,o=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,s,i){return e&&(e[n]||e(t,r))||s[n].slice(0,i)},h=function(e){return N.s(i%12||12,e,"0")},f=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return N.s(t.$y,4,"0");case"M":return c+1;case"MM":return N.s(c+1,2,"0");case"MMM":return d(n.monthsShort,c,l,3);case"MMMM":return d(l,c);case"D":return t.$D;case"DD":return N.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,o,2);case"ddd":return d(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(i);case"HH":return N.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return f(i,a,!0);case"A":return f(i,a,!1);case"m":return String(a);case"mm":return N.s(a,2,"0");case"s":return String(t.$s);case"ss":return N.s(t.$s,2,"0");case"SSS":return N.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,h,m){var f,y=this,g=N.p(h),v=M(r),p=(v.utcOffset()-this.utcOffset())*t,x=this-v,j=function(){return N.m(y,v)};switch(g){case d:f=j()/12;break;case l:f=j();break;case u:f=j()/3;break;case o:f=(x-p)/6048e5;break;case c:f=(x-p)/864e5;break;case a:f=x/n;break;case i:f=x/t;break;case s:f=x/e;break;default:f=x}return m?f:N.a(f)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return j[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=k(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return N.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),S=D.prototype;return M.prototype=S,[["$ms",r],["$s",s],["$m",i],["$H",a],["$W",c],["$M",l],["$y",d],["$D",h]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,D,M),e.$i=!0),M},M.locale=k,M.isDayjs=$,M.unix=function(e){return M(1e3*e)},M.en=j[x],M.Ls=j,M.p={},M}()}}]);
//# sourceMappingURL=295.4286c377.chunk.js.map