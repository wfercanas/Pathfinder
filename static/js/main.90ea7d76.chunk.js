(this.webpackJsonppathfinder=this.webpackJsonppathfinder||[]).push([[0],{19:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(6),o=t.n(c),i=(t(19),t(4)),s=t(14),l=t(0),d=Object(r.createContext)(null),u=function(e){var n=e.children,t=Object(r.useState)(),a=Object(i.a)(t,2),c=a[0],o=a[1],u=Object(r.useState)(new s.a({apiKey:"AIzaSyDIpChs6-EgIwHbLFYaHmy1-UYkYtsvCaA",version:"weekly",libraries:["places","geocoder"]})),j=Object(i.a)(u,1)[0],b=Object(r.useState)(null),O=Object(i.a)(b,2),p=O[0],m=O[1];Object(r.useEffect)((function(){j.load().then((function(e){m(new e.maps.places.AutocompleteService)}))}),[j]);var h=Object(r.useState)(null),g=Object(i.a)(h,2),f=g[0],x=g[1];Object(r.useEffect)((function(){j.load().then((function(e){x(new e.maps.Geocoder)}))}),[j]);var v=Object(r.useState)(null),w=Object(i.a)(v,2),y=w[0],S=w[1];Object(r.useEffect)((function(){j.load().then((function(e){S(new e.maps.DirectionsService)}))}),[j]);var D=Object(r.useState)(null),C=Object(i.a)(D,2),k=C[0],F=C[1];return Object(r.useEffect)((function(){j.load().then((function(e){F(new e.maps.DirectionsRenderer)}))}),[j,c]),Object(r.useEffect)((function(){k&&k.setMap(c)}),[k,c]),Object(l.jsx)(d.Provider,{value:{map:c,setMap:o,loader:j,autocompleteService:p,geocoderService:f,directionsService:y,directionsRenderer:k},children:n})};function j(){var e=Object(r.useContext)(d),n=e.setMap,t=e.loader;return Object(r.useEffect)((function(){t.load().then((function(e){n(new e.maps.Map(document.getElementById("map"),{center:{lat:4.624,lng:-74.063},zoom:10,disableDefaultUI:!0,mapTypeId:"terrain"}))}))}),[]),Object(l.jsx)(l.Fragment,{})}var b,O,p,m,h,g,f,x,v,w,y,S,D,C,k,F,M,N,E,R,I,P,T,z=t(2),A=t(3),B=A.a.button(b||(b=Object(z.a)(["\n  cursor: pointer;\n  padding: 0.6rem 1.2rem;\n  border: none;\n  border-radius: 0.3rem;\n  color: var(--n10);\n  background-color: ",";\n"])),(function(e){switch(e.purpose){case"modal":return"var(--b400)";case"go":return"var(--g200)";default:return"var(--n900)"}})),Y=function(e){var n=e.label,t=e.purpose,r=e.handleClick;return Object(l.jsx)(B,{purpose:t,type:"submit",onClick:r,children:n})},_=A.a.div(O||(O=Object(z.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: var(--n400a);\n"]))),G=function(e){var n=e.children;return Object(l.jsx)(_,{children:n})},K=A.a.div(p||(p=Object(z.a)(["\n  position: absolute;\n  top: calc(40%);\n  left: calc(50% - 15.5rem);\n  padding: 1.6rem 2rem;\n  width: 27.5rem;\n  border-radius: 0.3rem;\n  background-color: var(--b200);\n  color: var(--n10);\n"]))),H=A.a.div(m||(m=Object(z.a)(["\n  margin-top: 0.8rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),J=A.a.div(h||(h=Object(z.a)(["\n  button {\n    margin-left: 0.8rem;\n  }\n"]))),U=function(e){var n=e.labels,t=e.modal,a=e.setModal,c=Object(r.useState)(0),s=Object(i.a)(c,2),d=s[0],u=s[1],j=function(){a(!1)};return t?o.a.createPortal(Object(l.jsx)(G,{children:Object(l.jsxs)(K,{children:[Object(l.jsx)("p",{children:n[d]}),Object(l.jsxs)(H,{children:[Object(l.jsxs)("p",{children:[d+1,"/",n.length]}),Object(l.jsx)(J,{children:d+1===n.length?Object(l.jsx)(Y,{purpose:"modal",label:"Next",handleClick:j}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Y,{purpose:"modal",label:"Skip",handleClick:j}),Object(l.jsx)(Y,{purpose:"modal",label:"Next",handleClick:function(){u((function(e){return e+1}))}})]})})]})]})}),document.getElementById("modal")):null},V=t.p+"static/media/danger.f120dc7c.svg",q=A.a.div(g||(g=Object(z.a)(["\n  position: fixed;\n  top: 0.5rem;\n  width: 80%;\n  max-width: 46rem;\n  padding: 1.4rem 3rem;\n  display: ",";\n  justify-content: center;\n  align-items: center;\n  background-color: var(--r400);\n  color: var(--n10);\n  z-index: 1;\n"])),(function(e){return""===e.show?"none":"flex"})),L=A.a.p(f||(f=Object(z.a)(["\n  margin: 0.4rem;\n"]))),Q=t(5),W=a.a.createContext(null),X={newOrigin:"",newDestination:"",currentOrigin:"",currentDestination:"",currentRouteDistance:"",currentRouteTimeTravel:"",errorMessage:"",showFinder:!1},Z=function(e,n){switch(n.type){case"setNewOrigin":return Object(Q.a)(Object(Q.a)({},e),{},{newOrigin:n.payload});case"setNewDestination":return Object(Q.a)(Object(Q.a)({},e),{},{newDestination:n.payload});case"setCurrentRoute":return Object(Q.a)(Object(Q.a)({},e),{},{currentOrigin:n.payload.origin,currentDestination:n.payload.destination,currentRouteDistance:n.payload.routeDistance,currentRouteTimeTravel:n.payload.routeTimeTravel});case"resetNewOriginAndDestination":return Object(Q.a)(Object(Q.a)({},e),{},{newOrigin:"",newDestination:""});case"setErrorMessage":return Object(Q.a)(Object(Q.a)({},e),{},{errorMessage:n.payload});case"setShowFinder":return Object(Q.a)(Object(Q.a)({},e),{},{showFinder:n.payload});default:return e}},$=function(e){var n=e.children,t=Object(r.useReducer)(Z,X),a=Object(i.a)(t,2),c=a[0],o=a[1];return Object(l.jsx)(W.Provider,{value:{controlsState:c,controlsDispatch:o},children:n})},ee=function(){var e=Object(r.useContext)(W).controlsState;return Object(l.jsxs)(q,{show:e.errorMessage,children:[Object(l.jsx)("img",{src:V,alt:"error icon"}),Object(l.jsx)(L,{children:e.errorMessage})]})},ne=A.a.div(x||(x=Object(z.a)(["\n  position: fixed;\n  top: ",";\n  width: 80%;\n  max-width: 46rem;\n  padding: 1.4rem 3rem;\n  display: ",";\n  grid-template-columns: 4fr 1fr;\n  row-gap: 0.5rem;\n  border-radius: 1.6rem;\n  background-color: var(--n400a);\n  color: var(--n10);\n"])),(function(e){return""===e.verticalSpace?"1rem":"7rem"}),(function(e){return""!==e.show?"grid":"none"})),te=A.a.p(v||(v=Object(z.a)([""]))),re=A.a.p(w||(w=Object(z.a)(["\n  display: flex;\n  text-align: end;\n  justify-self: end;\n  align-items: center;\n"]))),ae=function(){var e=Object(r.useContext)(W).controlsState;return Object(l.jsxs)(ne,{show:e.currentOrigin,verticalSpace:e.errorMessage,children:[Object(l.jsxs)(te,{children:[Object(l.jsx)("strong",{children:"Origin:"})," ",e.currentOrigin]}),Object(l.jsx)(re,{children:e.currentRouteDistance}),Object(l.jsxs)(te,{children:[Object(l.jsx)("strong",{children:"Destination:"})," ",e.currentDestination]}),Object(l.jsx)(re,{children:e.currentRouteTimeTravel})]})},ce=A.a.form(y||(y=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1.2rem;\n"]))),oe=A.a.div(S||(S=Object(z.a)(["\n  width: 31rem;\n  display: flex;\n  justify-content: flex-end;\n"]))),ie=t.p+"static/media/world.ff6bdfbb.svg",se=A.a.div(D||(D=Object(z.a)(["\n  position: relative;\n"]))),le=A.a.label(C||(C=Object(z.a)(["\n  color: var(--n10);\n  font-weight: bold;\n  font-size: 1.2rem;\n  line-height: 1.6rem;\n"]))),de=A.a.div(k||(k=Object(z.a)(["\n  margin-top: 0.6rem;\n  padding: 0.2rem 0.6rem;\n  width: 29.4rem;\n  display: flex;\n  align-items: center;\n  background-color: var(--n10);\n  border: 0.2rem solid var(--n40);\n  border-radius: 0.3rem;\n"]))),ue=A.a.img(F||(F=Object(z.a)(["\n  margin-right: 0.6rem;\n"]))),je=A.a.input(M||(M=Object(z.a)(["\n  border: none;\n  width: 80%;\n  background-color: transparent;\n  color: var(--n200);\n\n  &:focus {\n    outline: none;\n  }\n"]))),be=A.a.div(N||(N=Object(z.a)(["\n  position: absolute;\n  z-index: 1;\n  top: 5.6rem;\n  display: ",";\n"])),(function(e){return!1===e.show?"none":"block"})),Oe=A.a.div(E||(E=Object(z.a)(["\n  background-color: var(--n10);\n  border-radius: 0.3rem;\n  padding: 0.4rem;\n  width: 30.2rem;\n"]))),pe=A.a.ul(R||(R=Object(z.a)(["\n  padding: 0;\n  list-style: none;\n"]))),me=A.a.li(I||(I=Object(z.a)(["\n  cursor: pointer;\n  color: var(--n100);\n  padding: 0.6rem 1.6rem;\n\n  &:hover {\n    font-weight: bold;\n  }\n"]))),he=function(e){var n=e.options,t=e.label,a=Object(r.useContext)(W).controlsDispatch;return Object(l.jsx)(Oe,{children:Object(l.jsx)(pe,{children:n.map((function(e,n){return Object(l.jsx)(me,{onClick:function(){return function(e){a("Origin"===t?{type:"setNewOrigin",payload:e.description}:{type:"setNewDestination",payload:e.description})}(e)},children:e.description},n)}))})})},ge=function(e){var n=e.label,t=e.placeholder,r=e.newPlace,a=e.handleChange,c=e.handleFocus,o=e.suggestions,i=e.autocomplete;return Object(l.jsxs)(se,{children:[Object(l.jsx)(le,{htmlFor:n,children:n}),Object(l.jsxs)(de,{children:[Object(l.jsx)(ue,{src:ie,alt:"world icon"}),Object(l.jsx)(je,{name:n,id:n,placeholder:t,value:r,onChange:a,onFocus:c,onBlur:c,type:"text",required:!0})]}),Object(l.jsx)(be,{show:i,children:Object(l.jsx)(he,{options:o,label:n})})]})},fe=function(e){var n=e.label,t=e.placeholder,a=e.newPlace,c=(e.setNewPlace,Object(r.useState)(!1)),o=Object(i.a)(c,2),s=o[0],u=o[1],j=Object(r.useState)(!1),b=Object(i.a)(j,2),O=b[0],p=b[1];Object(r.useEffect)((function(){s?a&&!O?p(!0):a||p(!1):p(!1)}),[a,s,O]);var m=Object(r.useContext)(d).autocompleteService,h=Object(r.useContext)(W).controlsDispatch,g=Object(r.useState)([]),f=Object(i.a)(g,2),x=f[0],v=f[1];return Object(l.jsx)(ge,{label:n,placeholder:t,newPlace:a,autocomplete:O,handleFocus:function(e){"onFocus"===e._reactName?u(!0):"onBlur"===e._reactName&&setTimeout((function(){return u(!1)}),500)},handleChange:function(e){var t=e.target;h("Origin"===n?{type:"setNewOrigin",payload:t.value}:{type:"setNewDestination",payload:t.value}),t.value&&m.getQueryPredictions({input:t.value},(function(e,n){"OK"===n&&v(e.slice(0,3))}))},suggestions:x})},xe=function(e){var n=e.handleSubmit,t=Object(r.useContext)(W).controlsState;return Object(l.jsxs)(ce,{onSubmit:n,children:[Object(l.jsx)(fe,{label:"Origin",placeholder:"Select an origin",newPlace:t.newOrigin}),Object(l.jsx)(fe,{label:"Destination",placeholder:"Select your destination",newPlace:t.newDestination}),Object(l.jsx)(oe,{children:Object(l.jsx)(Y,{purpose:"go",label:"Go!"})})]})},ve=function(){var e=Object(r.useContext)(W),n=e.controlsState,t=e.controlsDispatch,a=Object(r.useContext)(d),c=a.directionsService,o=a.directionsRenderer;return Object(l.jsx)(xe,{handleSubmit:function(e){if(e.preventDefault(),n.newOrigin&&n.newDestination){var r={origin:n.newOrigin,destination:n.newDestination,travelMode:"DRIVING"};c.route(r,(function(e,r){if("OK"===r){o.setDirections(e);var a=e.routes[0].legs[0];t({type:"setCurrentRoute",payload:{origin:a.start_address,destination:a.end_address,routeDistance:a.distance.text,routeTimeTravel:a.duration.text}}),t({type:"resetNewOriginAndDestination",payload:{}}),n.errorMessage&&t({type:"setErrorMessage",payload:""})}else t({type:"setErrorMessage",payload:"Route Not Found - Please try a new one"})}))}}})},we=A.a.div(P||(P=Object(z.a)(["\n  cursor: pointer;\n  position: fixed;\n  bottom: ",";\n  transition: bottom 1s ease-out;\n  border-radius: 1.6rem 1.6rem 0 0;\n  display: flex;\n  justify-content: center;\n  padding: 4.5rem 4rem 11rem;\n  background-color: var(--n400a);\n"])),(function(e){return!1===e.showFinder?"-28rem":"0"})),ye=A.a.div(T||(T=Object(z.a)(["\n  position: absolute;\n  top: 1.5rem;\n  right: 35%;\n  width: 30%;\n  height: 0.5rem;\n  border-radius: 1.2rem;\n  background-color: var(--n10);\n"]))),Se=function(e){var n=e.showFinder,t=e.toggleFinder;return Object(l.jsxs)(we,{showFinder:n,onClick:t,children:[Object(l.jsx)(ye,{}),Object(l.jsx)(ve,{})]})},De=function(){var e=Object(r.useContext)(W),n=e.controlsState,t=e.controlsDispatch;return Object(l.jsx)(Se,{showFinder:n.showFinder,toggleFinder:function(e){"DIV"===e.target.tagName&&t({type:"setShowFinder",payload:!n.showFinder})}})},Ce=function(){return Object(l.jsxs)($,{children:[Object(l.jsx)(ee,{}),Object(l.jsx)(ae,{}),Object(l.jsx)(De,{})]})},ke=function(){var e=Object(r.useState)(!0),n=Object(i.a)(e,2),t=n[0],a=n[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(Ce,{}),Object(l.jsx)(U,{modal:t,setModal:a,labels:["Welcome to Pathfinder","You give me two places and I'll show you the path."]})]})};var Fe=function(){return Object(l.jsx)(u,{children:Object(l.jsx)(ke,{})})};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(Fe,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.90ea7d76.chunk.js.map