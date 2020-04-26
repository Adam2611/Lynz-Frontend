(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{111:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(55),l=a.n(o),r=(a(71),a(24)),i=a(21),c=a(16),u=a(17),d=a(20),m=a(19),h=(a(25),a(114)),v=a(115),g=a(116),E=a(117),y=a(118),f=a(56),b=a.n(f),p=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(h.a,{className:"nav",bg:"primary",expand:"lg"},s.a.createElement(v.a,{href:"/",id:"navbar-brand"},s.a.createElement("img",{id:"logo",alt:"",src:b.a,width:"39px",height:"39px",className:"d-inline-block align-top"})," ","Lynz  \xa0"),s.a.createElement(g.a,{className:"mr-auto"},s.a.createElement(E.a,null,s.a.createElement(y.a,{href:"/Lynz-Frontend/busyness",className:"navbartext"},"View Busyness")),s.a.createElement(E.a,null,s.a.createElement(y.a,{href:"/Lynz-Frontend/submit",className:"navbartext"},"Submit Live Busyness")))))}}]),a}(n.Component),A=a(57),M=a.n(A),k=a(58),N=a.n(k),H=a(59),S=a.n(H),w=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{id:"all"},s.a.createElement("div",{className:"first"},s.a.createElement("div",{className:"titleinfo"},s.a.createElement("h1",{className:"text-left"}," ","Lineups suck. Know how busy close-by supermarkets are with live help from other customers."," "),s.a.createElement("img",{src:M.a,className:"pic-right",alt:"store"}))),s.a.createElement("div",{className:"second"},s.a.createElement("div",{className:"viewinfo"},s.a.createElement("img",{src:N.a,className:"pic-left",alt:"busy"}),s.a.createElement("h1",{className:"text-right"}," ","Don't get caught in this! See",s.a.createElement(r.b,{to:"/busyness"}," ",s.a.createElement("b",null,s.a.createElement("u",null,"LIVE"))),"  updates from people just like you: customers."," "))),s.a.createElement("div",{className:"third"},s.a.createElement("div",{className:"thirdbodyleft"},s.a.createElement("h2",{className:"workstext"}," How it works"),s.a.createElement("p",{className:"longtext1"}," ",s.a.createElement("br",null),s.a.createElement("br",null),"Lynz is an intuitive tool that helps you to shop more effectively. It works by collecting the busyness of stores from real-live people. This is then displayed to you, so that you can make an informative decision about when to go to the store. After you have visited the store, you can",s.a.createElement(r.b,{to:"/submit",className:"link2"}," ",s.a.createElement("u",null,"submit")),"  updates about the busyness level that you saw. This way, everyone can help everyone!")),s.a.createElement("div",{className:"thirdbodyright"},s.a.createElement("h2",{className:"coronatext"}," How we are helping the COVID-19 Pandemic"),s.a.createElement("p",{className:"longtext2"}," ",s.a.createElement("br",null),"Lynz is not only meant for the convenience of shoppers. Lynz was made to help stop the COVID-19 Pandemic, by informing the public of the optimal times to visit the store. This would decrease crowds and community spread. Lynz helps people to social distance as much as possible, so we can all be happy and healthy."),s.a.createElement("img",{id:"coronapic2",alt:"",src:S.a,width:"100px",height:"110px",className:"d-inline-block align-top"}))),s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"bodyleft"},s.a.createElement("p",{className:"footertext1"},"Created by Adam Lam, Matthew Jiao, Nicholas Tao")),s.a.createElement("div",{className:"bodyright"},s.a.createElement("p",{className:"footertext2"}," \xa9  Lynz 2020 "))))}}]),a}(n.Component),C=a(9),O=(a(39),a(33)),D=a(8),j=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChangeRadius=n.onChangeRadius.bind(Object(C.a)(n)),n.onSubmit=n.onSubmit.bind(Object(C.a)(n)),n.changeStoredata=n.changeStoredata.bind(Object(C.a)(n)),n.makeGrid=n.makeGrid.bind(Object(C.a)(n)),n.state={latitude:"",longitude:"",radius:"",storedata:"",received:!1,textClass:n.computeClass(0)},n}return Object(u.a)(a,[{key:"makeGrid",value:function(e){this.changeStoredata(e),console.log("hi")}},{key:"changeStoredata",value:function(e){this.setState({storedata:e.data,received:!0})}},{key:"onChangeRadius",value:function(e){this.setState({radius:e.target.value})}},{key:"componentDidMount",value:function(){navigator.geolocation.getCurrentPosition(function(e){this.setState({latitude:e.coords.latitude,longitude:e.coords.longitude})}.bind(this))}},{key:"onSubmit",value:function(e){e.preventDefault();this.state.latitude,this.state.longitude,this.state.radius;this.makeGrid(O),console.log(this.state),this.setState({radius:""})}},{key:"renderMatches",value:function(e){var t=this;return!0===this.state.received?(console.log("true"),e.map((function(e){return s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"one"},s.a.createElement("div",{className:"Store"},s.a.createElement("h3",null," ",e.name)),t.computeClass(e.busyness),s.a.createElement("div",{className:"Address"},s.a.createElement("p",null,s.a.createElement("i",null,e.address)))))}))):s.a.createElement("div",{className:"greeting"}," Enter a radius to see stores near you!")}},{key:"computeClass",value:function(e){var t=D({green:"Not Busy"==e,"green-yellow":"Somewhat Busy"==e,yellow:"Moderately Busy"==e,orange:"Busy"==e,red:"Very Busy"==e,brown:"Extremely Busy"==e,blue:"Insufficient Data"==e});return s.a.createElement("div",{className:t},s.a.createElement("b",null,e))}},{key:"render",value:function(){var e=this,t="";return!0===this.state.received&&(t=O.data),s.a.createElement("div",{className:"all"},s.a.createElement("div",{className:"content-wrap"},s.a.createElement("div",{className:"viewing"},s.a.createElement("input",{id:"radius",placeholder:"Enter the Radius (meters)",value:this.state.radius,onChange:this.onChangeRadius}),s.a.createElement("button",{className:"actualButton1",onClick:function(t){e.onSubmit(t)}},"Get Stores!")),s.a.createElement("div",{className:"row"},this.renderMatches(t))),s.a.createElement("div",{className:"footerbottom"},s.a.createElement("div",{className:"bodyleft"},s.a.createElement("p",{className:"footertext1"}," ","Created by Adam Lam, Matthew Jiao, Nicholas Tao")),s.a.createElement("div",{className:"bodyright"},s.a.createElement("p",{className:"footertext2"}," \xa9 Lynz 2020 "))))}}]),a}(s.a.Component),B=a(61),x=a.n(B),I=a(122),L=a(121),R=a(120),T=a(119),P=a(62),G=a.n(P),V=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({address:e})},n.toggle=n.toggle.bind(Object(C.a)(n)),n.select=n.select.bind(Object(C.a)(n)),n.handleMouseHover1=n.handleMouseHover1.bind(Object(C.a)(n)),n.handleMouseHover2=n.handleMouseHover2.bind(Object(C.a)(n)),n.handleMouseHover3=n.handleMouseHover3.bind(Object(C.a)(n)),n.handleMouseHover4=n.handleMouseHover4.bind(Object(C.a)(n)),n.handleMouseHover5=n.handleMouseHover5.bind(Object(C.a)(n)),n.handleMouseHover6=n.handleMouseHover6.bind(Object(C.a)(n)),n.onSubmit=n.onSubmit.bind(Object(C.a)(n)),n.state={dropdownOpen:!1,busyness:"Select Busyness",latitude:"",longitude:"",address:"",received:!1,isHovering1:!1,isHovering2:!1,isHovering3:!1,isHovering4:!1,isHovering5:!1,isHovering6:!1},n}return Object(u.a)(a,[{key:"handleMouseHover1",value:function(){this.setState(this.toggleHoverState1)}},{key:"handleMouseHover2",value:function(){this.setState(this.toggleHoverState2)}},{key:"handleMouseHover3",value:function(){this.setState(this.toggleHoverState3)}},{key:"handleMouseHover4",value:function(){this.setState(this.toggleHoverState4)}},{key:"handleMouseHover5",value:function(){this.setState(this.toggleHoverState5)}},{key:"handleMouseHover6",value:function(){this.setState(this.toggleHoverState6)}},{key:"toggleHoverState1",value:function(e){return{isHovering1:!e.isHovering1}}},{key:"toggleHoverState2",value:function(e){return{isHovering2:!e.isHovering2}}},{key:"toggleHoverState3",value:function(e){return{isHovering3:!e.isHovering3}}},{key:"toggleHoverState4",value:function(e){return{isHovering4:!e.isHovering4}}},{key:"toggleHoverState5",value:function(e){return{isHovering5:!e.isHovering5}}},{key:"toggleHoverState6",value:function(e){return{isHovering6:!e.isHovering6}}},{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"select",value:function(e){this.setState({dropdownOpen:!this.state.dropdownOpen,value:e.target.innerText,busyness:e.target.innerText})}},{key:"onSubmit",value:function(e){this.setState({received:!0}),e.preventDefault();this.state.address,this.state.busyness;this.setState({busyness:"Select Busyness",address:""})}},{key:"render",value:function(){var e=this,t="";return 1==this.state.received&&(console.log("HIII"),t="Thank you for submitting"),s.a.createElement("div",{className:"allsubmit"},s.a.createElement("div",{className:"busyness"},s.a.createElement("div",{className:"location"},s.a.createElement(x.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect,debounce:500},(function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,o=e.loading;return s.a.createElement("div",{className:"location4"},s.a.createElement("input",Object.assign({className:"location5"},t({placeholder:"Enter City and Store"}))),s.a.createElement("div",{className:"location2"},o&&s.a.createElement("div",null),a.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#b8b2a3",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return s.a.createElement("div",Object.assign({className:"location3"},n(e,{className:t,style:a})),s.a.createElement("span",null,e.description))}))))}))),s.a.createElement("div",{className:"submitToggle"},s.a.createElement(I.a,{className:"submitter",isOpen:this.state.dropdownOpen,toggle:this.toggle},s.a.createElement(L.a,null,this.state.busyness),s.a.createElement(R.a,null,s.a.createElement(T.a,null,s.a.createElement("div",{onClick:function(t){e.select(t),e.handleMouseHover1()},onMouseEnter:this.handleMouseHover1,onMouseLeave:this.handleMouseHover1}," ","Not Busy"," "))," ",this.state.isHovering1&&s.a.createElement("div",{className:"hover1"},s.a.createElement("u",null,s.a.createElement("i",null,"(No lineup to get in, short checkout lines)"))),s.a.createElement(T.a,null,s.a.createElement("div",{onClick:function(t){e.select(t),e.handleMouseHover2()},onMouseEnter:this.handleMouseHover2,onMouseLeave:this.handleMouseHover2}," ","Somewhat Busy"," "))," ",this.state.isHovering2&&s.a.createElement("div",{className:"hover1"},s.a.createElement("u",null,s.a.createElement("i",null,"(No lineup to get in, moderate checkout lines)"))),s.a.createElement(T.a,null,s.a.createElement("div",{onClick:function(t){e.select(t),e.handleMouseHover3()},onMouseEnter:this.handleMouseHover3,onMouseLeave:this.handleMouseHover3}," ","Moderately Busy"," "))," ",this.state.isHovering3&&s.a.createElement("div",{className:"hover1"},s.a.createElement("u",null,s.a.createElement("i",null,"(No lineup to get in, long checkout lines)"))),s.a.createElement(T.a,null,s.a.createElement("div",{onClick:function(t){e.select(t),e.handleMouseHover4()},onMouseEnter:this.handleMouseHover4,onMouseLeave:this.handleMouseHover4}," ","Busy"," "))," ",this.state.isHovering4&&s.a.createElement("div",{className:"hover1"},s.a.createElement("u",null,s.a.createElement("i",null,"(Short lineup to get in, less than 10 min)"))),s.a.createElement(T.a,null,s.a.createElement("div",{onClick:function(t){e.select(t),e.handleMouseHover5()},onMouseEnter:this.handleMouseHover5,onMouseLeave:this.handleMouseHover5}," ","Very Busy"," "))," ",this.state.isHovering5&&s.a.createElement("div",{className:"hover1"},s.a.createElement("u",null,s.a.createElement("i",null,"(Long lineup to get in, less than 30 min)"))),s.a.createElement(T.a,null,s.a.createElement("div",{onClick:function(t){e.select(t),e.handleMouseHover6()},onMouseEnter:this.handleMouseHover6,onMouseLeave:this.handleMouseHover6}," ","Extremely Busy"," "))," ",this.state.isHovering6&&s.a.createElement("div",{className:"hover1"},s.a.createElement("u",null,s.a.createElement("i",null,"(Very long lineup to get in, more than 30 min)")))))),s.a.createElement("div",{className:"button2"},s.a.createElement("button",{className:"actualButton2",onClick:function(t){return e.onSubmit(t)}}," ","Submit!"," "),s.a.createElement("p",{className:"actualText"}," \xa0 \xa0 ",t," "))),s.a.createElement("div",{className:"helpingpic"},s.a.createElement("img",{id:"helping",alt:"",src:G.a,width:"1100px",height:"490px"})),s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"bodyleft"},s.a.createElement("p",{className:"footertext1"}," ","Created by Adam Lam, Matthew Jiao, Nicholas Tao")),s.a.createElement("div",{className:"bodyright"},s.a.createElement("p",{className:"footertext2"}," \xa9 Lynz 2020 "))))}}]),a}(s.a.Component);a(111);var J=function(){return s.a.createElement(r.a,null,s.a.createElement("div",{className:"container"},s.a.createElement(p,null),s.a.createElement(i.a,{path:"/Lynz-Frontend",exact:!0,component:w}),s.a.createElement(i.a,{path:"/Lynz-Frontend/busyness",component:j}),s.a.createElement(i.a,{path:"/Lynz-Frontend/submit",component:V})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(112);l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,a){},33:function(e){e.exports=JSON.parse('{"data":[{"name":"Trader Joe\'s","address":"720 Menlo Avenue, Menlo Park","busyness":"Insufficient Data"},{"name":"Whole Foods Market","address":"774 Emerson Street, Palo Alto","busyness":"Insufficient Data"},{"name":"Trader Joe\'s","address":"855 El Camino Real, Palo Alto","busyness":"Insufficient Data"},{"name":"The Willows Market","address":"60 Middlefield Road, Menlo Park","busyness":"Insufficient Data"},{"name":"Draeger\'s Market","address":"1010 University Drive, Menlo Park","busyness":"Insufficient Data"},{"name":"Cardenas Markets","address":"1731 East Bayshore Road, East Palo Alto","busyness":"Insufficient Data"},{"name":"Mollie Stone\'s Markets","address":"164 California Avenue, Palo Alto","busyness":"Insufficient Data"},{"name":"Delucchi\'s Market","address":"3640 Florence Street, Redwood City","busyness":"Insufficient Data"},{"name":"THE MARKET at Edgewood","address":"2170 West Bayshore Road, Palo Alto","busyness":"Insufficient Data"},{"name":"El Rancho Market","address":"812 Willow Road, Menlo Park","busyness":"Insufficient Data"},{"name":"La Estrellita Market & Deli","address":"2387 University Avenue, Palo Alto","busyness":"Insufficient Data"},{"name":"Soleska Market","address":"1305 Willow Road, Menlo Park","busyness":"Insufficient Data"},{"name":"La Hacienda Market","address":"1933 Menalto Avenue, Menlo Park","busyness":"Insufficient Data"},{"name":"Pal Market","address":"2398 University Avenue, East Palo Alto","busyness":"Insufficient Data"},{"name":"Oakwood Market","address":"2106 Oakwood Drive, East Palo Alto","busyness":"Insufficient Data"},{"name":"Khoury\'s Market Palo Alto","address":"501 Oxford Avenue, Palo Alto","busyness":"Insufficient Data"},{"name":"Terraba","address":"1601 Willow Road, Menlo Park","busyness":"Insufficient Data"},{"name":"Chavez Supermarket","address":"46 Fifth Avenue, Redwood City","busyness":"Insufficient Data"},{"name":"Chavez Supermarket","address":"3282 Middlefield Road, Menlo Park","busyness":"Insufficient Data"},{"name":"Euromart","address":"3707 El Camino Real, Palo Alto","busyness":"Insufficient Data"}]}')},56:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBBYVGQKuEPQYAAABw0lEQVRIx7XST0iUYRDH8c+uRpDQISOsKIhAD9WhdG9BEAUGnbsEER0CA29Bpw4hRGCnoD9KXYTsWtAhSSqIDrULIgWVGJ2CiMwyTd3ofTq0vL7tvrHvrjQPL8z8hvkyM++wSmsx7KBps80jRkR+uWd/84guV30XObSaUdqVXVvdNia8aKasNfaKTnrYYPWCK7k4OG3IRz8aAmw0vxLsFfQ12MF9H/Jx8MqingYBBcWVHfw0qZBIDuhKLRp1t+Jtt0mpNZEqOqPNAsjrtTMVMB0DCigmUyeEhu7xkkh7PiEUK9Ss1uO9meQIb80l1rhVn9aaoi8GBZDTbaw6/dhU7B9RFmreJ+sr+U7B2WrAoMiGjAMcFxwg/5dYlLMvI6AgMqFqyhL6dWcC9HpjrlrM+Zwyd/orO0V1B0HJHrszdbBkMU0eEHRk3ILaDniO22YyVI4bTgOMGXU45YBq7esfwH+zbW555nJ8d7DLHU+dt7Z+eZt3lpRExmNti1nfTApu1gccFRzDBcGOitYvKGDEcrKHfCogoKXyhYoWxVpQ19aZsuylyINY6zBj3mvBjSxL3Oy6Jy5qS2idRjxyzppm/so/7Tcq94+QjVQ+/AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNC0yMlQyMToyNTowMiswMDowMKNKoDAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDQtMjJUMjE6MjU6MDIrMDA6MDDSFxiMAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},57:function(e,t,a){e.exports=a.p+"static/media/store.26d4d0be.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/busy.669c6653.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/corona.7484a4a9.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/helpingedit.d3010a4a.jpg"},66:function(e,t,a){e.exports=a(113)},71:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.1d9256c2.chunk.js.map