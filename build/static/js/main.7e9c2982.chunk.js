(this["webpackJsonpredux-example"]=this["webpackJsonpredux-example"]||[]).push([[0],{108:function(e,t,a){e.exports=a(131)},116:function(e,t,a){},117:function(e,t,a){},120:function(e,t,a){},125:function(e,t,a){e.exports=a.p+"static/media/lucas_site_1.40aa2bc2.jpg"},126:function(e,t,a){e.exports=a.p+"static/media/lucas_site_3.25f130d3.jpg"},127:function(e,t,a){e.exports=a.p+"static/media/lucas_site_2.8a656e6f.jpg"},131:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(24),o=a.n(c),l=(a(116),a(33)),i=a(16),s=(a(117),a(22)),m=a(11),_=a(51),d=a.n(_),u=(a(120),Object(s.b)((function(e){return{cart:e.shop.cart}}))((function(e){var t=e.cart,a=Object(r.useState)(0),c=Object(m.a)(a,2),o=c[0],i=c[1];return Object(r.useEffect)((function(){var e=0;t.forEach((function(t){e+=t.qty})),i(e)}),[t,o]),n.a.createElement("div",null,n.a.createElement("div",{className:d.a.navbar},n.a.createElement(l.b,{to:"/"},n.a.createElement("h2",{className:d.a.navbar__logo},n.a.createElement("div",{class:"jumbotron jumbotron-fluid",id:"animate-area",style:{minHeight:"250px"}},n.a.createElement("div",{class:"logo"},n.a.createElement("b",null,"y",n.a.createElement("span",null,"u",n.a.createElement("span",null),"n"),"gla",n.a.createElement("span",null,"d"),"c",n.a.createElement("span",null,"o.")))))),n.a.createElement(l.b,{to:"/cart"},n.a.createElement("div",{className:d.a.navbar__cart},n.a.createElement("h3",{className:d.a.cart__title},"Cart"),n.a.createElement("div",{className:d.a.cart__counter},o)))))}))),p=a(90),b=a.n(p),E=a(28),f=a.n(E),g=function(e){return{type:"ADD_TO_CART",payload:{id:e}}},h=Object(s.b)(null,(function(e){return{addToCart:function(t){return e(g(t))},loadCurrentItem:function(t){return e(function(e){return{type:"LOAD_CURRENT_ITEM",payload:e}}(t))}}}))((function(e){var t=e.product,a=e.addToCart,r=e.loadCurrentItem;return n.a.createElement("div",{className:f.a.product},n.a.createElement("img",{className:f.a.product__image,src:t.image,alt:t.title}),n.a.createElement("div",{className:f.a.product__details},n.a.createElement("p",{className:f.a.details__title},t.title),n.a.createElement("p",{className:f.a.details__desc},t.description),n.a.createElement("p",{className:f.a.details__price},"$ ",t.price)),n.a.createElement("div",{className:f.a.product__buttons},n.a.createElement(l.b,{to:"/product/".concat(t.id)},n.a.createElement("button",{onClick:function(){return r(t)},className:"".concat(f.a.buttons__btn," ").concat(f.a.buttons__view)},"View Item")),n.a.createElement("button",{color:"secondary",onClick:function(){return a(t.id)},className:"".concat(f.a.buttons__btn," ").concat(f.a.buttons__add)},"Add To Cart")))})),x=Object(s.b)((function(e){return{products:e.shop.products}}))((function(e){var t=e.products;return n.a.createElement("div",{className:b.a.products},n.a.createElement("h1",{style:{fontSize:"45px",color:"#ffff33",textShadow:"4px 4px 5px green",marginBottom:"13px"}},"Welcome To The Shop!"),n.a.createElement("h2",{style:{color:"#ffff33",textShadow:"4px 4px 5px green",marginBottom:"46px"}},"Stay awhile and check it out ya mooks"),t.map((function(e){return n.a.createElement(h,{key:e.id,product:e})})))})),y=a(45),v=a.n(y),I=a(91),C=function(e){var t=e.close;return n.a.createElement("aside",{className:"sidebar"},n.a.createElement("div",{onClick:function(){return t()}}),n.a.createElement(I.PayPalButton,null))},N=a(34),O=a.n(N),k=Object(s.b)(null,(function(e){return{adjustQty:function(t,a){return e({type:"ADJUST_ITEM_QTY",payload:{id:t,qty:a}})},removeFromCart:function(t){return e({type:"REMOVE_FROM_CART",payload:{id:t}})}}}))((function(e){var t=e.item,a=e.adjustQty,c=e.removeFromCart,o=Object(r.useState)(t.qty),l=Object(m.a)(o,2),i=l[0],s=l[1];return n.a.createElement("div",{className:O.a.cartItem},n.a.createElement("img",{className:O.a.cartItem__image,src:t.image,alt:t.title}),n.a.createElement("div",{className:O.a.cartItem__details},n.a.createElement("p",{className:O.a.details__title},t.title),n.a.createElement("p",{className:O.a.details__desc},t.description),n.a.createElement("p",{className:O.a.details__price},"$ ",t.price)),n.a.createElement("div",{className:O.a.cartItem__actions},n.a.createElement("div",{className:O.a.cartItem__qty},n.a.createElement("label",{htmlFor:"qty"},"Qty"),n.a.createElement("input",{min:"1",type:"number",id:"qty",name:"qty",value:i,onChange:function(e){s(e.target.value),a(t.id,e.target.value)}})),n.a.createElement("button",{onClick:function(){return c(t.id)},className:O.a.actions__deleteItemBtn},"remove")))})),T=Object(s.b)((function(e){return{cart:e.shop.cart}}))((function(e){var t=e.cart,a=Object(r.useState)(!1),c=Object(m.a)(a,2),o=c[0],l=c[1],i=Object(r.useState)(0),s=Object(m.a)(i,2),_=s[0],d=s[1],u=Object(r.useState)(0),p=Object(m.a)(u,2),b=p[0],E=p[1];return Object(r.useEffect)((function(){var e=0,a=0;t.forEach((function(t){e+=t.qty,a+=t.qty*t.price})),E(e),d(a)}),[t,_,b,d,E]),n.a.createElement("div",{className:v.a.cart},n.a.createElement("div",{className:v.a.cart__items},t.map((function(e){return n.a.createElement(k,{key:e.id,item:e})}))),n.a.createElement("div",{className:v.a.cart__summary},n.a.createElement("h4",{className:v.a.summary__title},"Cart Summary"),n.a.createElement("div",{className:v.a.summary__price},n.a.createElement("span",null,"TOTAL: (",b," items)"),n.a.createElement("span",null,"$ ",_)),n.a.createElement("button",{className:v.a.summary__checkoutBtn,onClick:function(){l((function(e){return!e}))}},"Proceed To Checkout"),o&&n.a.createElement(C,{close:function(){return l(!1)}})))})),w=a(40),j=a.n(w),S=Object(s.b)((function(e){return{current:e.shop.currentItem}}),(function(e){return{addToCart:function(t){return e(g(t))}}}))((function(e){var t=e.current,a=e.addToCart;return n.a.createElement("div",{className:j.a.singleItem},n.a.createElement("img",{className:j.a.singleItem__image,src:t.image,alt:t.title}),n.a.createElement("div",{className:j.a.singleItem__details},n.a.createElement("p",{className:j.a.details__title},t.title),n.a.createElement("p",{className:j.a.details__description},t.description),n.a.createElement("p",{className:j.a.details__price},"$ ",t.price),n.a.createElement("button",{onClick:function(){return a(t.id)},className:j.a.details__addBtn},"Add To Cart")))})),D=a(194),B=a(190),P=a(195),q=a(186),M=a(196),W=a(188),A=a(201),R=a(202),z=a(200),H=a(199),L=a(198),G=a(197),J=a(94),Q=a.n(J),F=a(191);a(86);function U(){return n.a.createElement(P.a,{id:"contact-box",sx:{padding:"4%"}},n.a.createElement(M.a,{id:"contact-card",sx:{border:1,borderColor:"gold",background:"black"}},n.a.createElement(G.a,{variant:"h4",sx:{color:"#ffff4d",textShadow:" 2px 3px 3px grey",marginTop:"44px"}},"check out these sweet commissions"),n.a.createElement(F.a,null,n.a.createElement(M.a,{sx:{maxWidth:"100%",marginTop:"45px",backgroundColor:"#b3b3b3",border:2,borderColor:"gold"}},n.a.createElement(L.a,{component:"img",alt:"green iguana",height:"auto",image:a(125)}),n.a.createElement(H.a,{sx:{borderTop:1,borderColor:"black"}},n.a.createElement(G.a,{gutterBottom:!0,variant:"h5",component:"div"},"Dranky Ghost"),n.a.createElement(G.a,{variant:"body1",color:"text.secondary"},"This is an example of a potential commission that could be posted to the site in hopes that people will order something like it.")),n.a.createElement(z.a,null,n.a.createElement(B.a,{sx:{color:"black"},color:"success",variant:"outlined",size:"large"},"Share!"),n.a.createElement(B.a,{sx:{color:"black"},color:"success",variant:"outlined",size:"large"},"Learn More!"))),n.a.createElement(M.a,{sx:{maxWidth:"100%",marginTop:"45px",backgroundColor:"#b3b3b3",border:2,borderColor:"gold"}},n.a.createElement(L.a,{component:"img",alt:"green iguana",height:"auto",image:a(126)}),n.a.createElement(H.a,{sx:{borderTop:1,borderColor:"black"}},n.a.createElement(G.a,{gutterBottom:!0,variant:"h5",component:"div"},"Boo-ro"),n.a.createElement(G.a,{variant:"body1",color:"text.secondary"},"This is an example of a potential commission that could be posted to the site in hopes that people will order something like it.")),n.a.createElement(z.a,null,n.a.createElement(B.a,{sx:{color:"black"},color:"success",variant:"outlined",size:"large"},"Share"),n.a.createElement(B.a,{sx:{color:"black"},color:"success",variant:"outlined",size:"large"},"Learn More"))),n.a.createElement(M.a,{sx:{maxWidth:"100%",marginTop:"45px",backgroundColor:"#b3b3b3",border:2,borderColor:"gold"}},n.a.createElement(L.a,{component:"img",alt:"green iguana",height:"auto",image:a(127)}),n.a.createElement(H.a,{sx:{borderTop:1,borderColor:"black"}},n.a.createElement(G.a,{gutterBottom:!0,variant:"h5",component:"div"},"Nightmare Horse"),n.a.createElement(G.a,{variant:"body1",color:"text.secondary"},"This is an example of a potential commission that could be posted to the site in hopes that people will order something like it.")),n.a.createElement(z.a,null,n.a.createElement(B.a,{sx:{color:"black"},color:"success",variant:"outlined",size:"large"},"Share"),n.a.createElement(B.a,{sx:{color:"black"},color:"success",variant:"outlined",size:"large"},"Learn More"))),n.a.createElement(W.a,{id:"accordion",sx:{marginTop:"35px",background:"radial-gradient(circle, rgba(255,254,248,1) 50%, rgba(255,2,2,1) 100%)"}},n.a.createElement(A.a,{expandIcon:n.a.createElement(Q.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},n.a.createElement(G.a,null,n.a.createElement("h2",null,"you want one? let me know bruv"))),n.a.createElement(R.a,null,n.a.createElement(q.a,{id:"fullWidth",fullWidth:!0,label:"Put Your Name Here!"}),n.a.createElement(q.a,{sx:{marginTop:"14px"},id:"fullWidth",fullWidth:!0,label:"Put Your Contact Info Here!"}),n.a.createElement(q.a,{sx:{marginTop:"14px"},fullWidth:!0,label:"Put Your Message Here!",id:"fullWidth"}),n.a.createElement(B.a,{sx:{marginTop:"15px",float:"right",marginBottom:"16px",marginRight:"4px"},variant:"contained",color:"success"},"SEND"))))))}function Y(){return n.a.createElement(P.a,{id:"contact-box",sx:{padding:"4%"}},n.a.createElement(M.a,{id:"contact-card",sx:{border:1,borderColor:"gold",background:"black"}},n.a.createElement(G.a,{variant:"h1",sx:{color:"#ffff4d",textShadow:" 4px 4px 5px purple",marginTop:"44px",marginBottom:"66px",textDecoration:"underline"}},"follow me around!"),n.a.createElement(G.a,{variant:"h2",sx:{color:"#ffff4d",textShadow:" 2px 3px 3px yellow",marginTop:"44px",textDecoration:"none"}},n.a.createElement("a",{href:"https://www.instagram.com/lucasdicenzo/?hl=en",style:{textDecoration:"underline"}}," instagram: lucasdicenzo ")),n.a.createElement(G.a,{variant:"h2",sx:{color:"#ffff4d",textShadow:" 2px 3px 3px yellow",marginTop:"44px",textDecoration:"none"}},n.a.createElement("a",{href:"https://www.instagram.com/yungladco/?hl=en",style:{textDecoration:"underline"}},"art instagram: yungladco ")),n.a.createElement(G.a,{variant:"h2",sx:{color:"#ffff4d",textShadow:" 2px 3px 3px yellow",marginTop:"44px",textDecoration:"none",marginBottom:"54px"}},n.a.createElement("a",{href:"https://www.tiktok.com/@lucasdicenzo",style:{textDecoration:"underline"}}," tiktok: lucasdicenzo "))))}var Z=Object(s.b)((function(e){return{current:e.shop.currentItem}}))((function(e){var t=e.current;return n.a.createElement(l.a,null,n.a.createElement("div",{className:"app"},n.a.createElement(u,null),n.a.createElement(D.a,{id:"appbar",position:"sticky",color:"transparent"},n.a.createElement("span",{style:{marginBottom:"35px"}},n.a.createElement(l.b,{to:"/"},n.a.createElement(B.a,{id:"appbar-button"},"shop")),n.a.createElement(l.b,{to:"commissions"},n.a.createElement(B.a,{id:"appbar-button"},"commissions")),n.a.createElement(l.b,{to:"follow"},n.a.createElement(B.a,{id:"appbar-button"},"follow"))),n.a.createElement(i.d,null,n.a.createElement(i.b,{exact:!0,path:"/",component:x}),n.a.createElement(i.b,{exact:!0,path:"/cart",component:T}),n.a.createElement(i.b,{exact:!0,path:"/commissions",component:U}),n.a.createElement(i.b,{exact:!0,path:"/follow",component:Y}),t?n.a.createElement(i.b,{exact:!0,path:"/product/:id",component:S}):n.a.createElement(i.a,{to:"/"})))),n.a.createElement("div",{id:"copyrights"},n.a.createElement("p",{style:{marginBottom:"6px"}},"All work is copyrighted by \u24d2youngladco."),n.a.createElement("p",null,"Site Provided by \u24d2Sprigg Diddy Designs")))})),X=a(42),$=a(95),V=a(17),K=a(23),ee={products:[{id:1,title:"This is the COOLEST Cube Ever",description:"This cube will keep you busy the entire day and it is very fun to play with",price:15,image:"https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},{id:2,title:"Large Coffee Cup",description:"Get a big cup of coffee every morning before the day starts",price:20,image:"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:3,title:"Books That CHANGED My Life",description:"These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",price:150,image:"https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"}],cart:[],currentItem:null},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var a=e.products.find((function(e){return e.id===t.payload.id})),r=e.cart.find((function(e){return e.id===t.payload.id}));return Object(K.a)(Object(K.a)({},e),{},{cart:r?e.cart.map((function(e){return e.id===t.payload.id?Object(K.a)(Object(K.a)({},e),{},{qty:e.qty+1}):e})):[].concat(Object(V.a)(e.cart),[Object(K.a)(Object(K.a)({},a),{},{qty:1})])});case"REMOVE_FROM_CART":return Object(K.a)(Object(K.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});case"ADJUST_ITEM_QTY":return Object(K.a)(Object(K.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload.id?Object(K.a)(Object(K.a)({},e),{},{qty:+t.payload.qty}):e}))});case"LOAD_CURRENT_ITEM":return Object(K.a)(Object(K.a)({},e),{},{currentItem:t.payload});default:return e}},ae=Object(X.combineReducers)({shop:te}),re=Object(X.createStore)(ae,Object($.composeWithDevTools)());o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s.a,{store:re},n.a.createElement(Z,null))),document.getElementById("root"))},28:function(e,t,a){e.exports={product:"Product_product__i8MmW",product__image:"Product_product__image__2JRIA",product__details:"Product_product__details__S_ZnW",details__title:"Product_details__title__30WM4",details__desc:"Product_details__desc__2dCLq",details__price:"Product_details__price__oDnOv",product__buttons:"Product_product__buttons__W_XPi",buttons__btn:"Product_buttons__btn__3f6MD",buttons__view:"Product_buttons__view__3NRNH",buttons__add:"Product_buttons__add__2fX31","product-container":"Product_product-container__3Iodd"}},34:function(e,t,a){e.exports={cartItem:"CartItem_cartItem__21Zlc",cartItem__image:"CartItem_cartItem__image__LDiSj",cartItem__details:"CartItem_cartItem__details__3DMCJ",details__title:"CartItem_details__title__1I6Wk",details__desc:"CartItem_details__desc__2PGFW",details__price:"CartItem_details__price__2_WGi",cartItem__actions:"CartItem_cartItem__actions__3ExId",cartItem__qty:"CartItem_cartItem__qty__3itwv",actions__deleteItemBtn:"CartItem_actions__deleteItemBtn__15GKz"}},40:function(e,t,a){e.exports={singleItem:"SingleItem_singleItem__PIZGf",singleItem__image:"SingleItem_singleItem__image__3gDpQ",singleItem__details:"SingleItem_singleItem__details__1uteI",details__title:"SingleItem_details__title__3F9Sw",details__price:"SingleItem_details__price__3aO2d",details__description:"SingleItem_details__description__1wOU3",details__addBtn:"SingleItem_details__addBtn__1N9Hm"}},45:function(e,t,a){e.exports={cart:"Cart_cart__3vRG_",cart__items:"Cart_cart__items__2j3DF",cart__summary:"Cart_cart__summary__bYyGo",summary__title:"Cart_summary__title__aH1Qv",summary__price:"Cart_summary__price__3AwUH",summary__checkoutBtn:"Cart_summary__checkoutBtn__2uBZg"}},51:function(e,t,a){e.exports={navbar:"Navbar_navbar__Xhy41",navbar__logo:"Navbar_navbar__logo__Ouh52",navbar__cart:"Navbar_navbar__cart__1GkXS",cart__title:"Navbar_cart__title__PtJ6o",cart__image:"Navbar_cart__image__3UU8q",cart__counter:"Navbar_cart__counter__3oZs0"}},86:function(e,t,a){},90:function(e,t,a){e.exports={products:"Products_products__3MD8v"}}},[[108,1,2]]]);
//# sourceMappingURL=main.7e9c2982.chunk.js.map