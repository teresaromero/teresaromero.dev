(function(n){function e(e){for(var o,i,l=e[0],c=e[1],s=e[2],f=0,d=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(n[o]=c[o]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],o=!0,l=1;l<t.length;l++){var c=t[l];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),n=i(i.s=t[0]))}return n}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)i.d(t,o,function(e){return n[e]}.bind(null,o));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/teresaromero.dev/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var o=t("85ec"),r=t.n(o);r.a},"1baa":function(n,e,t){},"2b14":function(n,e,t){n.exports=t.p+"img/pink.4a163762.png"},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=t("55d9"),a=t("5f34"),i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),t("Hero"),t("AboutMe"),t("features"),t("CallToAction"),t("Footer")],1)},l=[],c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("styled-nav",[t("styled-title",{attrs:{href:"#"}},[n._v("Teresa Romero")]),t("styled-mobile-menu",[t("font-awesome-icon",{attrs:{icon:n.open?["fas","times"]:["fas","ellipsis-v"],size:"lg"},on:{click:n.toggle}})],1),t("styled-menu",{attrs:{open:n.open}},[t("styled-navLink",{attrs:{href:"/"}},[n._v(n._s(n.$t("navbar.home")))]),t("styled-navLink",{attrs:{href:"#"}},[n._v(n._s(n.$t("navbar.about")))]),t("styled-navLink",{attrs:{href:"#"}},[n._v(n._s(n.$t("navbar.contact")))])],1)],1)},s=[],u=t("8785"),f=t("9c56"),d=t("ecee"),p=t("c074"),m=t("ad3d");function b(){var n=Object(u["a"])(["\n  background: #011826;\n  padding: 0.5em 1em;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: justify-between;\n  align-items: center;\n  @media (min-width: 768px) {\n    display: flex;\n    flex-flow: row nowrap;\n  }\n"]);return b=function(){return n},n}function y(){var n=Object(u["a"])(["\n  flex-grow: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  color: #f26389;\n  @media (min-width: 768px) {\n    display: none;\n  }\n"]);return y=function(){return n},n}function v(){var n=Object(u["a"])(["\n  display: ",";\n  flex-direction: column;\n  width: 100%;\n  @media (min-width: 768px) {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n  }\n"]);return v=function(){return n},n}function g(){var n=Object(u["a"])(['\n  font-size: 1.3em;\n  text-align: center;\n  color: #f26389;\n  font-family: "Baloo 2", cursive;\n  padding: 0.2em 0;\n  @media (min-width: 768px) {\n    font-size: 1.3em;\n    padding: 0 1em;\n  }\n']);return g=function(){return n},n}function h(){var n=Object(u["a"])(['\n  font-size: 1.8em;\n  text-align: left;\n  color: #f26389;\n  font-family: "Baloo 2", cursive;\n  min-width: fit-content;\n']);return h=function(){return n},n}d["c"].add(p["a"]),d["c"].add(p["b"]);var w=f["a"].a(h()),x=f["a"].a(g()),j=Object(f["a"])("div",{open:Boolean})(v(),(function(n){return n.open?"flex":"none"})),O=f["a"].div(y()),_=Object(f["a"])("nav",{open:Boolean})(b()),k={name:"Navbar",components:{"styled-title":w,"styled-navLink":x,"styled-menu":j,"styled-nav":_,"styled-mobile-menu":O,"font-awesome-icon":m["a"]},data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open}}},S=k,C=t("2877"),N=Object(C["a"])(S,c,s,!1,null,null,null),$=N.exports,T=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("styled-hero-wrapper",[t("styled-h2",[t("styled-mark",[n._v(n._s(n.$t("hero.title")))])],1),t("styled-h3",[t("styled-mark",[n._v(n._s(n.$t("hero.subtitle")))])],1)],1)},z=[],P=t("64ed"),A=t.n(P);function B(){var n=Object(u["a"])(["\n  background-color: #f26389;\n  line-height: 2;\n"]);return B=function(){return n},n}function E(){var n=Object(u["a"])(['\n  font-size: 1.5em;\n  font-weight: 500;\n  text-align: left;\n  font-family: "Baloo 2", cursive;\n  margin: 1em 0;\n']);return E=function(){return n},n}function J(){var n=Object(u["a"])(['\n  font-size: 2em;\n  font-weight: 700;\n  text-align: left;\n  font-family: "Baloo 2", cursive;\n  margin: 1em 0;\n']);return J=function(){return n},n}function M(){var n=Object(u["a"])(["\n  background-image: url(",");\n  background-repeat: repeat;\n  background-position: center;\n  background-size: contain;\n  padding: 2em 1em;\n"]);return M=function(){return n},n}d["c"].add(p["a"]),d["c"].add(p["b"]);var L=f["a"].section(M(),A.a),H=f["a"].h2(J()),R=f["a"].h3(E()),q=f["a"].mark(B()),F={name:"Hero",components:{"styled-hero-wrapper":L,"styled-h2":H,"styled-h3":R,"styled-mark":q}},D=F,V=Object(C["a"])(D,T,z,!1,null,null,null),G=V.exports,I=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("styled-container",[t("styled-h4",[n._v("¿Qué tecnologias utilizo?")]),t("styled-wrapper",[t("styled-element",[t("icon-base",{attrs:{"icon-name":"mdiNodejs",iconColor:"#f26389"}})],1),t("styled-element",[t("icon-base",{attrs:{"icon-name":"mdiReact",iconColor:"#f26389"}})],1),t("styled-element",[t("icon-base",{attrs:{"icon-name":"mdiVuejs",iconColor:"#f26389"}})],1),t("styled-element",[t("icon-base",{attrs:{"icon-name":"mdiWordpress",iconColor:"#f26389"}})],1),t("styled-element",[t("icon-base",{attrs:{"icon-name":"mdiAws",iconColor:"#f26389"}})],1),t("styled-element",[t("icon-base",{attrs:{"icon-name":"mdiGoogleCloud",iconColor:"#f26389"}})],1),t("styled-element",[t("icon-base",{attrs:{"icon-name":"mdiGithub",iconColor:"#f26389"}})],1),t("styled-element",[t("icon-base",{attrs:{"icon-name":"mdiSass",iconColor:"#f26389"}})],1)],1)],1)},Q=[],W=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:n.width,height:n.height,viewBox:"0 0 24 24","aria-labelledby":n.iconName,role:"img"}},[t("title",{attrs:{id:n.iconName,lang:"en"}},[n._v(n._s(n.iconName)+" icon")]),t("g",[t("path",{attrs:{fill:n.iconColor,d:n.iconPath}})])])},K=[],U=(t("a9e3"),t("94ed")),X={props:{iconName:{type:String,default:"box"},width:{type:[Number,String],default:"24"},height:{type:[Number,String],default:"24"},iconColor:{type:String,default:"currentColor"}},data:function(){return{iconPath:U[this.iconName]}}},Y=X,Z=(t("849a"),Object(C["a"])(Y,W,K,!1,null,"435caee9",null)),nn=Z.exports;function en(){var n=Object(u["a"])(["\n  padding: 0.5em;\n"]);return en=function(){return n},n}function tn(){var n=Object(u["a"])(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 1em;\n"]);return tn=function(){return n},n}function on(){var n=Object(u["a"])(['\n  text-align: center;\n  font-family: "Open Sans", sans-serif;\n  font-weight: bolder;\n']);return on=function(){return n},n}function rn(){var n=Object(u["a"])(["\n  display: flex;\n  background: #f2f2f2;\n  flex-flow: column nowrap;\n"]);return rn=function(){return n},n}var an=f["a"].section(rn()),ln=f["a"].h4(on()),cn=f["a"].section(tn()),sn=f["a"].div(en()),un={name:"Features",components:{"styled-wrapper":cn,"styled-element":sn,"icon-base":nn,"styled-container":an,"styled-h4":ln}},fn=un,dn=Object(C["a"])(fn,I,Q,!1,null,null,null),pn=dn.exports,mn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("styled-section",[t("styled-button",[n._v("Quiero informarme")])],1)},bn=[],yn=t("2b14"),vn=t.n(yn);function gn(){var n=Object(u["a"])(['\n  background-color: #f2f2f2;\n  border-radius: 8px;\n  color:#f26389;\n  font-family: "Baloo 2", cursive;\n  font-size: 1.3em;\n  font-weight: bold;\n  padding: 12px 24px;\n  text-decoration: none;\n']);return gn=function(){return n},n}function hn(){var n=Object(u["a"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url(",");\n  background-repeat: repeat;\n  background-position: center;\n  background-size: contain;\n  background-color: #f26389;\n  padding: 4em 1em;\n"]);return hn=function(){return n},n}var wn=f["a"].section(hn(),vn.a),xn=f["a"].button(gn()),jn={components:{"styled-section":wn,"styled-button":xn}},On=jn,_n=Object(C["a"])(On,mn,bn,!1,null,null,null),kn=_n.exports,Sn=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("styled-footer",[t("styled-wrapper",[t("styled-element",[t("p",[n._v("Copyright Teresa Romero")])]),t("styled-element",[t("a",[n._v("Aviso Legal")]),t("a",[n._v("Politica de Privacidad")])])],1)],1)},Cn=[];function Nn(){var n=Object(u["a"])([""]);return Nn=function(){return n},n}function $n(){var n=Object(u["a"])(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n"]);return $n=function(){return n},n}function Tn(){var n=Object(u["a"])(['\n  background: #011826;\n  color: #f26389;\n  font-family: "Open Sans", sans-serif;\n']);return Tn=function(){return n},n}d["c"].add(p["a"]),d["c"].add(p["b"]);var zn=f["a"].footer(Tn()),Pn=f["a"].div($n()),An=f["a"].div(Nn()),Bn={name:"Footer",components:{"styled-footer":zn,"styled-wrapper":Pn,"styled-element":An}},En=Bn,Jn=(t("760c"),Object(C["a"])(En,Sn,Cn,!1,null,null,null)),Mn=Jn.exports,Ln=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("styled-wrapper",{attrs:{id:"about"}},[o("s-blockquote-left",[n._v("¿Necesitas una página web para tu negocio?")]),o("s-blockquote-left",[n._v("¿Tienes en mente un negocio digital y no sabes como empezar?")]),o("styled-wrapper2",[o("styled-element",[o("avatar",[o("img",{attrs:{src:t("9b18")}})])],1),o("styled-element",[o("styled-p",[n._v("Soy Teresa Romero, desarrolladora web y puedo ayudarte desde el planteamiento del diseño del producto digitial hasta su puesta en produción.")]),o("styled-p",[n._v("Desarrollo todo tipo de proyectos digitales para particulares y pequeños negocios.")])],1)],1)],1)},Hn=[];function Rn(){var n=Object(u["a"])(["\n  justify-content: center;\n  border-radius: 50%;\n  overflow: hidden;\n  max-width: 200px;\n"]);return Rn=function(){return n},n}function qn(){var n=Object(u["a"])(['\n  padding: 0 1em;\n  margin: 1em;\n  border-left: 8px solid #f26389;\n  font-family: "Open Sans", sans-serif;\n  font-weight: bold;\n']);return qn=function(){return n},n}function Fn(){var n=Object(u["a"])(['\n  text-align: center;\n  font-family: "Open Sans", sans-serif;\n  padding-bottom: 1em;\n']);return Fn=function(){return n},n}function Dn(){var n=Object(u["a"])(["\n  display: flex;\n  flex-flow: column nowrap;\n  padding: 1em;\n  justify-content: center;\n  align-items: center;\n"]);return Dn=function(){return n},n}function Vn(){var n=Object(u["a"])(["\n  display: flex;\n  flex-flow: column nowrap;\n\n  @media (min-width: 769px) {\n    flex-flow: row nowrap;\n    padding: 2em 4em;\n    margin: 1em;\n    background-color:#f26389;\n  }\n\n"]);return Vn=function(){return n},n}function Gn(){var n=Object(u["a"])(["\n  display: flex;\n  flex-flow: column nowrap;\n  background: #f2f2f2;\n  padding: 1em;\n\n  @media (min-width: 769px) {\n    padding: 2em 4em;\n  }\n\n"]);return Gn=function(){return n},n}var In=f["a"].section(Gn()),Qn=f["a"].div(Vn()),Wn=f["a"].div(Dn()),Kn=f["a"].p(Fn()),Un=f["a"].blockquote(qn()),Xn=f["a"].div(Rn()),Yn={name:"AboutMe",components:{"styled-wrapper":In,"styled-element":Wn,"styled-p":Kn,"s-blockquote-left":Un,avatar:Xn,"styled-wrapper2":Qn}},Zn=Yn,ne=Object(C["a"])(Zn,Ln,Hn,!1,null,null,null),ee=ne.exports,te={name:"App",components:{Navbar:$,Hero:G,Features:pn,CallToAction:kn,Footer:Mn,AboutMe:ee}},oe=te,re=(t("034f"),Object(C["a"])(oe,i,l,!1,null,null,null)),ae=re.exports,ie=(t("def6"),{en:{navbar:{home:"Home",about:"About",contact:"Contact"},hero:{title:"Hi! 👋🏻",subtitle:"I'm a web developer!",callToAction:"Let's Talk!"},features:{title:"Services",description:{wordpress:"Wordpress",bots_Desc:"Bots",node:"NodeJS",react:"ReactJS",vue:"VueJS"}}},es:{navbar:{home:"Inicio",about:"Sobre Mi",contact:"Contacto"},hero:{title:"Hola! 👋🏻",subtitle:"Soy desarrolladora web y proyectos digitales!"},features:{title:"Servicios",description:{wordpress:"Desarrollo tu página web en lorem ipsum mola mil",bots_Desc:"Bots",node:"NodeJS",react:"ReactJS",vue:"VueJS"}}}}),le=ie;o["a"].config.productionTip=!1,o["a"].use(r["a"]),a["a"].init({lng:"es",fallbackLng:"es",resources:{en:{translation:le.en},es:{translation:le.es}}});var ce=new r["a"](a["a"]);new o["a"]({el:"#app",i18n:ce,render:function(n){return n(ae)}})},"64ed":function(n,e,t){n.exports=t.p+"img/blue.bc1cdf87.png"},"760c":function(n,e,t){"use strict";var o=t("c3f5"),r=t.n(o);r.a},"849a":function(n,e,t){"use strict";var o=t("1baa"),r=t.n(o);r.a},"85ec":function(n,e,t){},"9b18":function(n,e,t){n.exports=t.p+"img/fotoTeresaColor.18b3aff3.png"},c3f5:function(n,e,t){},def6:function(n,e,t){}});
//# sourceMappingURL=app.246e48c3.js.map