(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){"use strict";s.r(t);var a=s(0),r=s.n(a),i=s(7),c=s.n(i),n=(s(27),s(6)),o=s(2),l=s(4),d=s(9),j=s(22);const b="LOGIN_REQUEST",p="LOGIN_SUCCESS",h="LOGIN_FAILURE",m={isLoading:!1,isError:!1,isAuth:!1,token:""};var x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;switch((arguments.length>1?arguments[1]:void 0).type){case b:return{...e,isLoading:!0,isError:!1};case p:return{...e,isLoading:!1,isError:!1,isAuth:!0};case h:return{...e,isLoading:!1,isAuth:!0,isError:!0};default:return e}};const g="FETCH_MOVIES_REQUEST",u="FETCH_MOVIES_SUCCESS",O="FETCH_MOVIES_FAILURE",v="SET_FILTER",y="SET_SORT",f={movies:[],isLoading:!1,isError:!1,filter:"",sort:""};var S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{...e,isLoading:!0,isError:!1};case u:return{...e,isLoading:!1,movies:t.payload};case O:return{...e,isLoading:!1,isError:!0};case v:return{...e,filter:t.payload};case y:return{...e,sort:t.payload};default:return e}};const E=Object(d.b)({auth:x,movies:S});var N=Object(d.c)(E,Object(d.a)(j.a)),w=s(8),L=s.n(w);const k=e=>({type:v,payload:e}),C=e=>({type:y,payload:e});var T=s(3);var I=e=>{let{movie:t,onClick:s}=e;const a={margin:"4px 0",color:"black",fontSize:"1em",fontweight:"bold"},[i,c]=r.a.useState(!1);return Object(T.jsx)("div",{className:"movie-card",onClick:s,style:{border:"1px solid #ddd",borderRadius:"8px",overflow:"hidden",backgroundColor:"#fff",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",textAlign:"center",padding:"16px",cursor:"pointer",transition:"transform 0.3s ease, box-shadow 0.3s ease",...i?{transform:"scale(1.05)",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)"}:{}},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:Object(T.jsxs)(n.b,{to:`/movie/${t.id}`,style:{textDecoration:"none"},children:[Object(T.jsx)("img",{src:t.Poster,alt:t.Title,className:"movie-image",style:{width:"100%",height:"auto"}}),Object(T.jsx)("p",{className:"movie-name",style:{fontSize:"1.2em",margin:"8px 0",color:"black"},children:t.Title}),Object(T.jsx)("p",{className:"movie-year",style:a,children:t.Year}),Object(T.jsx)("p",{className:"movie-type",style:a,children:t.Type}),Object(T.jsx)("p",{className:"movie-rating",style:a,children:t.rating})]})})};s(51);var R=()=>{const e=Object(l.b)(),t=Object(o.p)(),s=Object(o.n)(),{movies:r,isLoading:i,isError:c,filter:n,sort:d}=Object(l.c)((e=>e.movies));Object(a.useEffect)((()=>{const t=new URLSearchParams(s.search),a=t.get("rating"),r=t.get("order");a&&e(k(a)),r&&e(C(r)),e((async e=>{e({type:g});try{const t=await L.a.get("http://localhost:8000/movies");e({type:u,payload:t.data})}catch(t){e({type:O,error:t})}}))}),[e,s.search]);const j=n?r.filter((e=>e.rating===parseInt(n))):r,b=d?j.slice().sort(((e,t)=>"asc"===d?e.Year-t.Year:t.Year-e.Year)):j;if(i)return Object(T.jsx)("p",{children:"Loading..."});if(c)return Object(T.jsx)("p",{children:"Error loading movies"});return Object(T.jsx)("div",{"data-testid":"movie-list",className:"movie-grid",children:b.map((e=>Object(T.jsx)(I,{movie:e,onClick:()=>{return s=e.id,void t(`/movie/${s}`);var s}},e.id)))})};s(52);var _=()=>{const e=Object(l.b)(),t=Object(o.p)(),s=Object(o.n)(),{filter:a,sort:r}=Object(l.c)((e=>e.movies)),i=a=>{const r=a.target.value,i=new URLSearchParams(s.search);r?i.set("rating",r):i.delete("rating"),t({search:i.toString()}),e(k(r))},c=a=>{const r=a.target.value,i=new URLSearchParams(s.search);r?i.set("order",r):i.delete("order"),t({search:i.toString()}),e(C(r))},n=e=>Object(T.jsx)(T.Fragment,{children:Array.from({length:e},((e,t)=>Object(T.jsx)("span",{children:"\u2605"},t)))});return Object(T.jsxs)("div",{className:"sidebar",children:[Object(T.jsxs)("div",{className:"filter-section",children:[Object(T.jsx)("p",{style:{fontWeight:"bold"},children:"Filter by Rating"}),[1,2,3,4,5].map((e=>Object(T.jsxs)("label",{className:"rating-label",children:[Object(T.jsx)("input",{type:"radio",name:"rating",value:e,checked:a===String(e),onChange:i,className:"rating-input"}),n(e)]},e)))]}),Object(T.jsxs)("div",{className:"sort-section",children:[Object(T.jsx)("p",{style:{fontWeight:"bold"},children:"Sort by Year"}),Object(T.jsxs)("label",{className:"sort-label",children:[Object(T.jsx)("input",{type:"radio",name:"sort",value:"asc",checked:"asc"===r,onChange:c,className:"sort-input"}),"Ascending"]}),Object(T.jsxs)("label",{className:"sort-label",children:[Object(T.jsx)("input",{type:"radio",name:"sort",value:"desc",checked:"desc"===r,onChange:c,className:"sort-input"}),"Descending"]})]})]})};s(53);var A=()=>Object(T.jsxs)("div",{className:"home-page",children:[Object(T.jsxs)("header",{className:"header",style:{borderBottom:"1px solid black"},children:[Object(T.jsx)("h1",{className:"header-title",children:"Movies Library"}),Object(T.jsxs)("nav",{className:"header-nav",children:[Object(T.jsx)(n.b,{className:"nav-link",to:"/",children:"Home"}),Object(T.jsx)(n.b,{className:"nav-link",to:"/login",children:"Log In"})]})]}),Object(T.jsx)(_,{}),Object(T.jsx)(R,{})]});var M=()=>{const{id:e}=Object(o.r)(),t=Object(l.c)((e=>e.movies.movies)),s=t.find((t=>t.id===parseInt(e)));return console.log("Movies state:",t),console.log("Selected movie:",s),s?Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{className:"movie-id",children:s.id}),Object(T.jsx)("img",{src:s.Poster,alt:s.Title,className:"movie-image"}),Object(T.jsx)("h2",{className:"movie-name",children:s.Title}),Object(T.jsx)("p",{className:"movie-year",children:s.Year}),Object(T.jsx)("p",{className:"movie-type",children:s.Type}),Object(T.jsx)("p",{className:"movie-rating",children:s.rating})]}):Object(T.jsx)("p",{children:"Movie not found"})};var U=()=>{const[e,t]=Object(a.useState)(""),[s,r]=Object(a.useState)(""),i=Object(l.b)(),c=Object(o.p)(),{isAuthenticated:n,user:d}=Object(l.c)((e=>e.auth));return n&&d&&c(`/movies/${d.favoriteMovieId}`),Object(T.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"calc(100vh - 60px)",padding:"20px"},children:Object(T.jsxs)("form",{onSubmit:t=>{var a;t.preventDefault(),i((a={email:e,password:s},async e=>{e({type:b});try{const t=await L.a.post("https://reqres.in/api/login",a),{token:s}=t.data;e({type:p}),localStorage.setItem("token",s)}catch(t){e({type:h,payload:t.message})}}))},style:{display:"flex",flexDirection:"column",width:"300px",padding:"20px",borderRadius:"8px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",backgroundColor:"#fff"},children:[Object(T.jsxs)("label",{style:{marginBottom:"15px",fontSize:"16px"},children:["Email:",Object(T.jsx)("input",{type:"email",value:e,onChange:e=>t(e.target.value),placeholder:"Email",style:{width:"90%",padding:"10px",border:"1px solid #ddd",borderRadius:"4px",marginTop:"5px"},required:!0})]}),Object(T.jsxs)("label",{style:{marginBottom:"15px",fontSize:"16px"},children:["Password:",Object(T.jsx)("input",{type:"password",value:s,onChange:e=>r(e.target.value),placeholder:"Password",style:{width:"90%",padding:"10px",border:"1px solid #ddd",borderRadius:"4px",marginTop:"5px"},required:!0})]}),Object(T.jsx)("button",{type:"submit",style:{padding:"10px",border:"none",borderRadius:"4px",backgroundColor:"#333",color:"#fff",cursor:"pointer",fontSize:"16px",fontWeight:"bold",transition:"background-color 0.3s",marginBottom:"10px"},children:"Login"})]})})};var F=e=>{let{children:t}=e;const{isAuth:s}=Object(l.c)((e=>e.auth));return s?t:Object(T.jsx)(o.a,{to:"/login"})};s(54);var P=function(){return Object(T.jsx)(l.a,{store:N,children:Object(T.jsx)(n.a,{children:Object(T.jsxs)(o.d,{children:[Object(T.jsx)(o.b,{path:"/",element:Object(T.jsx)(A,{})}),Object(T.jsx)(o.b,{path:"/login",element:Object(T.jsx)(U,{})}),Object(T.jsx)(o.b,{path:"/movie/:id",element:Object(T.jsx)(F,{children:Object(T.jsx)(M,{})})})]})})})};c.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(P,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.d9609bd7.chunk.js.map