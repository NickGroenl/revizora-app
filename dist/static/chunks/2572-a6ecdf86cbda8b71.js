(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2572],{72572:function(e,r,o){Promise.resolve().then(o.bind(o,76887))},76887:function(e,r,o){"use strict";o.r(r);var a=o(57437),t=o(27009),n=o(24033),l=o(2265),d=o(57719),s=o(81550),i=o.n(s);o(7081);var u=o(70508),c=o(74246);o(22990);var p=o(17483),m=o(5803),b=o(42105),g=o(49882),h=o(58501);r.default=()=>{let e=(0,n.useRouter)(),[r,o]=(0,l.useState)(null),[s,x]=(0,l.useState)(""),[y,f]=(0,l.useState)(""),[k,v]=(0,l.useState)(null),[w,C]=(0,l.useState)(),[j,A]=(0,l.useState)(""),[S,R]=(0,l.useState)(""),[E,L]=(0,l.useState)(""),[N,P]=(0,l.useState)(),[T,B]=(0,l.useState)(""),[z,D]=(0,l.useState)(""),[W,I]=(0,l.useState)(""),[F,_]=(0,l.useState)(""),[X,Z]=(0,l.useState)(""),[V,q]=(0,l.useState)(""),M=[{label:"Imagen",renderCell:e=>(0,a.jsx)("img",{style:{width:"105px",maxHeight:"105px"},src:null==e?void 0:e.image,alt:"Product Image"})},{label:"Nombre de Producto",renderCell:e=>(0,a.jsx)("p",{children:null==e?void 0:e.name})},{label:"C\xf3digo de repuesto",renderCell:e=>(0,a.jsx)("p",{children:null==e?void 0:e.code})},{label:"",renderCell:e=>(0,a.jsx)(i(),{onClick:()=>{C(null==w?void 0:w.filter((r,o)=>(null==e?void 0:e.name)!==w[o].name))},name:"trash-outline",style:{cursor:"pointer",color:"#E43E1B",fontSize:"1.2rem"}})}],O=[{label:"Imagen",renderCell:e=>(0,a.jsx)("img",{style:{width:"105px",maxHeight:"105px"},src:null==e?void 0:e.image,alt:"Product Image"})},{label:"Nombre de Producto",renderCell:e=>(0,a.jsx)("p",{children:null==e?void 0:e.product})},{label:"Proveedor",renderCell:e=>(0,a.jsx)("p",{children:null==e?void 0:e.provider})},{label:"Marca",renderCell:e=>(0,a.jsx)("p",{children:null==e?void 0:e.brand})},{label:"Precio",renderCell:e=>(0,a.jsxs)("p",{children:["s/. ",null==e?void 0:e.price]})},{label:"Tiempo de env\xedo",renderCell:e=>(0,a.jsxs)("p",{children:[" ",null==e?void 0:e.timeDeliveried]})},{label:"",renderCell:e=>(0,a.jsx)(i(),{onClick:()=>{Y(null==K?void 0:K.filter((r,o)=>(null==e?void 0:e.product)!==K[o].product))},name:"trash-outline",style:{cursor:"pointer",color:"#E43E1B",fontSize:"1.2rem"}})}],U=(0,g.u)([(0,h.g)(),{Table:"\n            --data-table-library_grid-template-columns: 150px 300px 200px 100px !important;\n             "}]),H=(0,g.u)([(0,h.g)(),{}]),[Q,G]=(0,l.useState)(),[K,Y]=(0,l.useState)(),J=async()=>{if(""!==s&&""!==y&&null!==k){if((null==w?void 0:w.length)>0){let o={owner_id:null==r?void 0:r._id,vehicle:s,plate:y,date:k,requirements:null!=w?w:[],sendedQuotes:null!=K?K:[],state:"Pending"},a=await (0,m.Ol)(o);null!==a?e.push("/quotes"):p.fn.error("Ocurrio un problema","Error")}else p.fn.error("Agrega al menos un producto","Error")}else p.fn.error("Completa los datos","Error")},$=async()=>{let r=await (0,d.PR)();if(null==r){e.push("/");return}if((null==r?void 0:r.type)!=="workshop")return e.push("/hub");o(r)},ee=async e=>{let r=e.target.files[0],o=new FileReader;o.readAsDataURL(r),o.onload=()=>{A(String(o.result))},o.onerror=e=>{console.log(e)}},er=async e=>{let r=e.target.files[0],o=new FileReader;o.readAsDataURL(r),o.onload=()=>{B(String(o.result))},o.onerror=e=>{console.log(e)}},[eo,ea]=(0,l.useState)(0),et=()=>ea(window.innerWidth);return(0,l.useEffect)(()=>($(),et(),window.addEventListener("resize",et),()=>window.removeEventListener("resize",et)),[]),(0,a.jsx)(a.Fragment,{children:null===r?(0,a.jsx)(i(),{name:"chevron-collapse-outline",className:"rotateItem",color:"#1366D9",style:{fontSize:"1.5rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}):(0,a.jsx)(t.Z,{user:r,route:"quotes",frameContennt:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{style:{color:"grey"},children:"Crear cotizaci\xf3n"}),(0,a.jsx)("h1",{style:{fontSize:"1.1rem",fontWeight:"500",marginTop:"1rem"},children:"Detalle de cotizaci\xf3n"}),(0,a.jsxs)("div",{style:{marginTop:".5rem",display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("input",{value:s,onChange:e=>x(e.target.value),placeholder:"Veh\xedculo",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:y,onChange:e=>f(e.target.value),placeholder:"Placa",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:k,onChange:e=>v(e.target.value),placeholder:"Placa",type:"datetime-local",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,a.jsxs)("div",{style:{display:"flex",marginTop:"2rem",marginBottom:"1rem"},children:[(0,a.jsx)("h1",{style:{fontSize:"1.1rem",fontWeight:"500"},children:"Productos"}),(0,a.jsx)("button",{className:"buttonsWithouthPadding",onClick:()=>P(!0),style:{marginLeft:"1rem",fontSize:".8rem",borderRadius:".5rem",padding:".2rem",paddingLeft:"1rem",paddingRight:"1rem",marginRight:"1rem",backgroundColor:"transparent",color:"#1366D9",border:"1px solid #1366D9"},children:"+"})]}),(0,a.jsx)("div",{style:{maxWidth:"100%"},children:(0,a.jsx)(b._,{theme:U,layout:{custom:!0,horizontalScroll:!0},columns:M,data:{nodes:null!=w?w:[]}})}),(0,a.jsxs)("div",{style:{display:"flex",marginTop:"2rem",marginBottom:"1rem"},children:[(0,a.jsx)("h1",{style:{fontSize:"1.1rem",fontWeight:"500"},children:"Cotizaciones"}),(0,a.jsx)("button",{className:"buttonsWithouthPadding",onClick:()=>G(!0),style:{marginLeft:"1rem",fontSize:".8rem",borderRadius:".5rem",padding:".2rem",paddingLeft:"1rem",paddingRight:"1rem",marginRight:"1rem",backgroundColor:"transparent",color:"#1366D9",border:"1px solid #1366D9"},children:"+"})]}),(0,a.jsx)("div",{style:{maxWidth:"100%"},children:(0,a.jsx)(b._,{theme:H,layout:{custom:!0,horizontalScroll:!0},columns:O,data:{nodes:null!=K?K:[]}})}),(0,a.jsx)("div",{style:{width:"100%",textAlign:"center",marginTop:"2rem"},children:(0,a.jsx)("button",{onClick:()=>J(),style:{width:"max-content",background:"rgb(21, 112, 239)",color:"white",padding:".7rem",borderRadius:".2rem",cursor:"pointer"},children:"Crear Cotizaci\xf3n"})}),(0,a.jsx)(u.Z,{closeIcon:(0,a.jsx)(i(),{name:"close"}),styles:{modal:{borderRadius:"1rem",padding:"0rem",maxWidth:eo<921?"90%":"900px"},closeIcon:{color:"white !important"},overlay:{backgroundColor:"rgba(220, 217, 217, 0.5)"}},open:N,center:!0,onClose:()=>P(!1),children:(0,a.jsxs)("div",{style:{padding:"1rem"},children:[(0,a.jsx)("p",{style:{color:"grey"},children:"Toca para cambiar la imagen"}),(0,a.jsxs)("label",{htmlFor:"imageLogo",style:{cursor:"pointer"},children:[(0,a.jsx)("img",{style:{width:"150px",height:"150px",borderRadius:"100%",padding:"1rem",marginRight:"auto",marginLeft:"auto"},src:""!==j?j:c.Z.src,alt:"Logo"}),(0,a.jsx)("input",{accept:"image",id:"imageLogo",onChange:ee,type:"file",placeholder:"Subir archivo",style:{visibility:"hidden",display:"none"}})]}),(0,a.jsxs)("div",{style:{marginTop:".5rem",display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("input",{value:S,onChange:e=>R(e.target.value),placeholder:"Nombre de producto",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:E,onChange:e=>L(e.target.value),placeholder:"Codigo de repuesto",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,a.jsx)("div",{style:{width:"100%",textAlign:"right",marginTop:"2rem"},children:(0,a.jsx)("div",{onClick:()=>{""!==S&&""!==E?(C([...null!=w?w:[],{image:null!=j?j:"",name:S,code:E}]),A(""),R(""),L(""),P(!1)):p.fn.error("Completa el formulario","Error")},style:{color:"rgb(21, 112, 239)",cursor:"pointer"},children:"Guardar"})})]})}),(0,a.jsx)(u.Z,{closeIcon:(0,a.jsx)(i(),{name:"close"}),styles:{modal:{borderRadius:"1rem",padding:"0rem",maxWidth:eo<921?"90%":"900px"},closeIcon:{color:"white !important"},overlay:{backgroundColor:"rgba(220, 217, 217, 0.5)"}},open:Q,center:!0,onClose:()=>G(!1),children:(0,a.jsxs)("div",{style:{padding:"1rem"},children:[(0,a.jsx)("p",{style:{color:"grey"},children:"Toca para cambiar la imagen"}),(0,a.jsxs)("label",{htmlFor:"imageLogo",style:{cursor:"pointer"},children:[(0,a.jsx)("img",{style:{width:"150px",height:"150px",borderRadius:"100%",padding:"1rem",marginRight:"auto",marginLeft:"auto"},src:""!==T?T:c.Z.src,alt:"Logo"}),(0,a.jsx)("input",{accept:"image",id:"imageLogo",onChange:er,type:"file",placeholder:"Subir archivo",style:{visibility:"hidden",display:"none"}})]}),(0,a.jsxs)("select",{onChange:e=>D(e.target.value),className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"},children:[(0,a.jsx)("option",{value:"",children:(null==w?void 0:w.length)>0?"Productos":"Todavia no agregaste productos"}),null==w?void 0:w.map(e=>(0,a.jsx)("option",{value:null==e?void 0:e.name,children:null==e?void 0:e.name}))]}),(0,a.jsxs)("div",{style:{marginTop:".5rem",display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("input",{value:W,onChange:e=>I(e.target.value),placeholder:"Proveedor",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:F,onChange:e=>_(e.target.value),placeholder:"Marca",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,a.jsxs)("div",{style:{marginTop:".5rem",display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("input",{value:V,onChange:e=>q(e.target.value),placeholder:"Precio",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:X,onChange:e=>Z(e.target.value),placeholder:"Tiempo de envio",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,a.jsx)("div",{style:{width:"100%",textAlign:"right",marginTop:"2rem"},children:(0,a.jsx)("div",{onClick:()=>{""!==z&&""!==W&&""!==F&&""!==X?(Y([...null!=K?K:[],{product:z,provider:W,brand:F,price:V,timeDeliveried:X,image:T}]),q(""),D(""),B(""),Z(""),I(""),q(""),G(!1)):p.fn.error("Completa el formulario","Error")},style:{color:"rgb(21, 112, 239)",cursor:"pointer"},children:"Guardar"})})]})})]})})})}},7081:function(){},74246:function(e,r){"use strict";r.Z={src:"/_next/static/media/productImage.c22ed7cc.png",height:201,width:213,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEX////u7u5pZ2dwcG9JSUn8/Pycm5q1tLP29vXZ2NjMy8qCgoHBwL97enmVlZRjYV6npqQpKCkOe5RlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nCXLSxKAMAjA0FCg0L/e/7KOusm8TQBp6YDXYqXhzNvsFbHOWTESiR46a8DWPa6eOFX/Dfn6ADVVAXFb3kC/AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}}]);