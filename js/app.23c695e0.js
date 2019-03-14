(function(e){function t(t){for(var s,n,l=t[0],o=t[1],c=t[2],d=0,m=[];d<l.length;d++)n=l[d],r[n]&&m.push(r[n][0]),r[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(s=!1)}s&&(i.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},r={app:0},i=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/gallery/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0a2a":function(e,t,a){"use strict";var s=a("2587"),r=a.n(s);r.a},"1baa":function(e,t,a){},2587:function(e,t,a){},"2b3f":function(e,t,a){"use strict";var s=a("4d2c"),r=a.n(s);r.a},"33c7":function(e,t,a){"use strict";var s=a("1baa"),r=a.n(s);r.a},"3a47":function(e,t,a){"use strict";var s=a("7a64"),r=a.n(s);r.a},"4d2c":function(e,t,a){},"54fb":function(e,t,a){"use strict";var s=a("edfe"),r=a.n(s);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("7f7f"),a("cadf"),a("551c"),a("097d");var s=a("2b0e"),r=a("9f7b"),i=a("7bb1"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("NavBar",{attrs:{isAuthenticated:e.isAuthenticated},on:{userAuthenticated:e.toggleAuthenticated}}),a("router-view",{attrs:{isAuthenticated:e.isAuthenticated},on:{userAuthenticated:e.toggleAuthenticated}})],1)},l=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v("\n                    All Galleries\n                ")])],1),a("li",{staticClass:"nav-item",attrs:{id:"login"}},[e.isAuthenticated?e._e():a("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[e._v("\n                    Login\n                ")])],1),a("li",[e.isAuthenticated?a("router-link",{staticClass:"nav-link",attrs:{to:"/my-galleries"}},[e._v("\n                    My Galleries\n                ")]):e._e()],1),a("li",[e.isAuthenticated?a("router-link",{staticClass:"nav-link",attrs:{to:"/create"}},[e._v("\n                    Create New Gallery\n                ")]):e._e()],1),a("li",{staticClass:"nav-item"},[e.isAuthenticated?e._e():a("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[e._v("\n                    Register\n                ")])],1),a("li",[e.isAuthenticated?a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:e.logout}},[e._v("Logout")]):e._e()])])])])},c=[],u=a("c665"),d=a("aa9a"),m=a("bc3a"),g=a.n(m),v=function(){function e(){Object(u["a"])(this,e),g.a.defaults.baseURL="http://localhost:8000/api/",this.setAuthorizationHeader()}return Object(d["a"])(e,[{key:"isAuthenticated",value:function(){return!!localStorage.getItem("token")}},{key:"getUserId",value:function(){return localStorage.getItem("user_id")}},{key:"logout",value:function(){localStorage.removeItem("token"),localStorage.removeItem("user_id")}},{key:"login",value:function(e,t){var a=this;return g.a.post("auth/login",{email:e,password:t}).then(function(e){localStorage.setItem("token",e.data.access_token),localStorage.setItem("user_id",e.data.user_id),a.setAuthorizationHeader()})}},{key:"setAuthorizationHeader",value:function(){var e=localStorage.getItem("token");g.a.defaults.headers.common["Authorization"]="Bearer ".concat(e)}},{key:"register",value:function(e){return g.a.post("auth/register",e)}}]),e}(),p=new v,f={props:{isAuthenticated:Boolean},methods:{logout:function(){p.logout(),this.$emit("userAuthenticated",!1),this.$router.push("/login")}}},h=f,_=a("2877"),b=Object(_["a"])(h,o,c,!1,null,null,null);b.options.__file="NavBar.vue";var y=b.exports,C={components:{NavBar:y},data:function(){return{isAuthenticated:p.isAuthenticated()}},methods:{toggleAuthenticated:function(e){this.isAuthenticated=e}}},w=C,x=Object(_["a"])(w,n,l,!1,null,null,null);x.options.__file="App.vue";var k=x.exports,A=a("8c4f"),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Login")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-form-label",attrs:{for:"email"}},[e._v("Email")]),a("div",{staticClass:"col-8"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control here",attrs:{id:"email",name:"email",type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"alert alert-warning"},[e._v(e._s(e.errors.first("email")))])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-form-label",attrs:{for:"password"}},[e._v("Password")]),a("div",{staticClass:"col-8"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control here",attrs:{id:"password",name:"password",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticClass:"alert alert-warning"},[e._v(e._s(e.errors.first("password")))]),a("div",{staticClass:"input-group"},[e.error?a("span",{staticClass:"alert alert-warning"},[e._v(e._s(e.error))]):e._e()])])]),a("button",{staticClass:"btn btn-secondary",attrs:{name:"submit",type:"submit"}},[e._v("Login")])])])},$=[],N={data:function(){return{email:"",password:"",error:""}},methods:{onSubmit:function(){var e=this;this.$validator.validateAll().then(function(t){t&&p.login(e.email,e.password).then(function(t){e.$emit("userAuthenticated",!0),e.$router.push("/all-galleries")}).catch(function(t){e.error=t.response.data.error})})}}},P=N,O=(a("f274"),Object(_["a"])(P,S,$,!1,null,"ac378134",null));O.options.__file="Login.vue";var q=O.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("form",{staticClass:"form-inline md-form mr-auto mb-5",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search_term,expression:"search_term"}],staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search","aria-label":"Search"},domProps:{value:e.search_term},on:{input:function(t){t.target.composing||(e.search_term=t.target.value)}}}),a("button",{staticClass:"btn btn-outline-secondary aqua-gradient btn-rounded btn-sm my-0",attrs:{type:"submit"}},[e._v("Search")])]),e.galleries?a("div",{staticClass:"wrapper"},e._l(e.galleries,function(t){return t.images?a("div",{key:t.id,staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:t.images[t.images.length-1].image_url,alt:"Card image cap"}}),a("div",{staticClass:"card-body bg-light"},[a("router-link",{attrs:{to:{name:"single-gallery",params:{id:t.id}}}},[a("h4",{staticClass:"card-text"},[a("strong",[e._v(e._s(t.title))])])]),a("div",{staticClass:"card-text",staticStyle:{padding:"0.6rem"}},[e._v("by\n                    "),a("router-link",{staticStyle:{color:"black"},attrs:{to:{name:"single-author",params:{id:t.user.id}}}},[a("em",[e._v(e._s(t.user.first_name)+" "+e._s(t.user.last_name))])]),a("div",{staticClass:"card-text",staticStyle:{"font-size":"0.7rem"}},[e._v(e._s(t.created_at))])],1)],1)]):e._e()})):e._e(),a("div",{attrs:{id:"load-more"}},[a("button",{directives:[{name:"show",rawName:"v-show",value:e.pagination.total>e.galleries.length,expression:"pagination.total > galleries.length"}],staticClass:"btn btn-outline-secondary",on:{click:e.loadMore}},[e._v("\n            Load more\n        ")])])])},G=[],E=function(){function e(){Object(u["a"])(this,e),g.a.defaults.baseURL="http://localhost:8000/api/"}return Object(d["a"])(e,[{key:"getAll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return g.a.get("galleries?term=".concat(e))}},{key:"get",value:function(e){return g.a.get("galleries/".concat(e))}},{key:"getAuthor",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return g.a.get("authors/".concat(e,"?term=").concat(t))}},{key:"getLoggedUser",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return g.a.get("my-galleries?term=".concat(e))}},{key:"add",value:function(e){return g.a.post("galleries",e)}},{key:"addComment",value:function(e){return g.a.post("comments",e)}},{key:"deleteComment",value:function(e){return g.a.delete("comments/".concat(e),e)}},{key:"deleteGallery",value:function(e){return g.a.delete("galleries/".concat(e),e)}},{key:"getGallery",value:function(e){return g.a.get("galleries?page=".concat(e))}},{key:"getMyGalleries",value:function(e){return g.a.get("my-galleries?page=".concat(e))}},{key:"getAuthorsGalleries",value:function(e,t){return g.a.get("authors/".concat(t,"?page=").concat(e))}},{key:"edit",value:function(e){return g.a.put("galleries/".concat(e.id),e)}}]),e}(),L=new E,M={data:function(){return{galleries:[],pagination:{},galleriesPaginate:[],search_term:"",e:""}},beforeRouteEnter:function(e,t,a){var s=this;L.getAll().then(function(e){a(function(t){t.galleries=e.data.data,t.pagination=e.data})}).catch(function(e){s.e=e.response.data})},methods:{onSubmit:function(){var e=this;L.getAll(this.search_term).then(function(t){e.galleries=t.data.data,e.pagination=t.data})},loadMore:function(){var e=this;this.pagination.current_page++,L.getGallery(this.pagination.current_page).then(function(t){e.galleriesPaginate=t.data.data,e.galleries=e.galleries.concat(e.galleriesPaginate)})}}},U=M,I=(a("54fb"),Object(_["a"])(U,j,G,!1,null,"6644e4a2",null));I.options.__file="index.vue";var D=I.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Register")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-form-label",attrs:{for:"first_name"}},[e._v("First name")]),a("div",{staticClass:"col-8"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.first_name,expression:"user.first_name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control here",attrs:{id:"first_name",name:"first_name",type:"text"},domProps:{value:e.user.first_name},on:{input:function(t){t.target.composing||e.$set(e.user,"first_name",t.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("first_name"),expression:"errors.has('first_name')"}],staticClass:"alert alert-warning"},[e._v(e._s(e.errors.first("first_name")))]),a("div",{staticClass:"input-group"},[e.e.first_name?a("span",{staticClass:"alert alert-warning"},[e._v(e._s(e.e.first_name[0]))]):e._e()])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-form-label",attrs:{for:"last_name"}},[e._v("Last name")]),a("div",{staticClass:"col-8"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.last_name,expression:"user.last_name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control here",attrs:{id:"last_name",name:"last_name",type:"text"},domProps:{value:e.user.last_name},on:{input:function(t){t.target.composing||e.$set(e.user,"last_name",t.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("last_name"),expression:"errors.has('last_name')"}],staticClass:"alert alert-warning"},[e._v(e._s(e.errors.first("last_name")))]),a("div",{staticClass:"input-group"},[e.e.last_name?a("span",{staticClass:"alert alert-warning"},[e._v(e._s(e.e.last_name[0]))]):e._e()])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-form-label",attrs:{for:"email"}},[e._v("Email")]),a("div",{staticClass:"col-8"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control here",attrs:{id:"email",name:"email",type:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"alert alert-warning"},[e._v(e._s(e.errors.first("email")))]),a("div",{staticClass:"input-group"},[e.e.email?a("span",{staticClass:"alert alert-warning"},[e._v(e._s(e.e.email[0]))]):e._e()])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-form-label",attrs:{for:"password"}},[e._v("Password")]),a("div",{staticClass:"col-8"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control here",attrs:{id:"password",name:"password",type:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticClass:"alert alert-warning"},[e._v(e._s(e.errors.first("password")))]),a("div",{staticClass:"input-group"},[e.e.password?a("span",{staticClass:"alert alert-warning"},[e._v(e._s(e.e.password[0]))]):e._e()])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-form-label",attrs:{for:"password_confirmation"}},[e._v("Confirm password")]),a("div",{staticClass:"col-8"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password_confirmation,expression:"user.password_confirmation"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control here",attrs:{id:"password_confirmation",name:"password_confirmation",type:"password"},domProps:{value:e.user.password_confirmation},on:{input:function(t){t.target.composing||e.$set(e.user,"password_confirmation",t.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password_confirmation"),expression:"errors.has('password_confirmation')"}],staticClass:"alert alert-warning"},[e._v(e._s(e.errors.first("password_confirmation")))])])]),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-4 col-form-label"}),a("div",{staticClass:"col-8"},[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.accept_terms_and_conditions,expression:"user.accept_terms_and_conditions"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"true",name:"accept_terms_and_conditions",id:"accept_terms_and_conditions"},domProps:{checked:Array.isArray(e.user.accept_terms_and_conditions)?e._i(e.user.accept_terms_and_conditions,"true")>-1:e.user.accept_terms_and_conditions},on:{change:function(t){var a=e.user.accept_terms_and_conditions,s=t.target,r=!!s.checked;if(Array.isArray(a)){var i="true",n=e._i(a,i);s.checked?n<0&&e.$set(e.user,"accept_terms_and_conditions",a.concat([i])):n>-1&&e.$set(e.user,"accept_terms_and_conditions",a.slice(0,n).concat(a.slice(n+1)))}else e.$set(e.user,"accept_terms_and_conditions",r)}}}),e._v("\n                Accept terms and conditions\n              ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("accept_terms_and_conditions"),expression:"errors.has('accept_terms_and_conditions')"}],staticClass:"alert alert-warning"},[e._v(e._s(e.errors.first("accept_terms_and_conditions")))])]),a("div",{staticClass:"input-group"},[e.e.accept_terms_and_conditions?a("span",{staticClass:"alert alert-warning"},[e._v(e._s(e.e.accept_terms_and_conditions[0]))]):e._e()])])]),a("button",{staticClass:"btn btn-secondary",attrs:{name:"submit",type:"submit"}},[e._v("Register")])])])},z=[],B={data:function(){return{user:{},e:[]}},methods:{onSubmit:function(){var e=this;this.$validator.validateAll().then(function(t){t&&p.register(e.user).then(function(t){p.login(e.user.email,e.user.password).then(function(t){e.$emit("userAuthenticated",!0),e.$router.push("/all-galleries")})}).catch(function(t){e.e=t.response.data.errors})})}}},T=B,H=(a("7a43"),Object(_["a"])(T,R,z,!1,null,"ff1a6300",null));H.options.__file="Register.vue";var J=H.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"gallery-data"},[a("h1",[e._v(e._s(e.gallery.title))]),e.gallery.user?a("div",[a("div",{attrs:{id:"buttons"}},[e.isAuthenticated&&e.gallery.user.id==e.user_id?a("button",{staticClass:"btn btn-danger",attrs:{name:"submit",type:"submit"},on:{click:function(t){e.deleteGallery(e.gallery)}}},[e._v("\n                    Delete\n                ")]):e._e(),e.isAuthenticated&&e.gallery.user.id==e.user_id?a("router-link",{staticClass:"btn btn-dark",attrs:{to:{name:"edit-gallery",params:{id:e.gallery.id}},name:"submit",type:"submit",id:"edit-btn"}},[e._v("\n                    Edit\n                ")]):e._e()],1),a("em",[e._v("Author:")]),a("router-link",{attrs:{to:{name:"single-author",params:{id:e.gallery.user.id}},id:"user"}},[e._v("\n                "+e._s(e.gallery.user.first_name)+" "+e._s(e.gallery.user.last_name)+"                \n            ")])],1):e._e(),a("div",[a("em",[e._v("Created at:")]),e._v(" "+e._s(e.gallery.created_at))]),a("div",{attrs:{id:"description"}},[e._v(e._s(e.gallery.description))])]),e.gallery.images?a("b-carousel",{attrs:{id:"carousel1",controls:"",indicators:"",background:"#ababab",interval:3e3,"img-height":"500px"},on:{"sliding-start":e.onSlideStart,"sliding-end":e.onSlideEnd},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},e._l(e.gallery.images.slice().reverse(),function(t){return a("b-carousel-slide",{key:t.id,staticStyle:{height:"500px"},attrs:{"img-src":t.image_url}},[a("div",{attrs:{id:"link-view"}},[a("button",{staticClass:"btn btn-dark",on:{click:function(a){e.openInNewTab(t.image_url)}}},[e._v("View")])])])})):e._e(),e._l(e.gallery.comments,function(t){return a("ul",{key:t.id,staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item"},[t.user?a("div",{attrs:{id:"first-li"}},[a("strong",[e._v("\n                "+e._s(t.user.first_name)+" "+e._s(t.user.last_name))]),t.user?a("div",[e.isAuthenticated&&t.user.id==e.user_id?a("button",{staticClass:"btn btn-danger",attrs:{name:"submit"},on:{click:function(a){e.deleteComment(t)}}},[a("i",{staticClass:"far fa-trash-alt"})]):e._e()]):e._e()]):e._e(),a("div",{staticStyle:{"font-size":"0.8rem"}},[e._v("at "),a("em",[e._v(e._s(t.created_at))])]),a("div",[e._v(e._s(t.text))])])])}),e.isAuthenticated?a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newComment.text,expression:"newComment.text"}],attrs:{name:"text",cols:"50",rows:"2"},domProps:{value:e.newComment.text},on:{input:function(t){t.target.composing||e.$set(e.newComment,"text",t.target.value)}}})]),a("div",{staticClass:"input-group"},[e.e.text?a("span",{staticClass:"alert alert-warning"},[e._v(e._s(e.e.text[0]))]):e._e()]),a("button",{staticClass:"btn btn-info",attrs:{name:"submit",type:"submit"}},[e._v("Add")])]):e._e()],2)},V=[],W={data:function(){return{gallery:{},slide:0,sliding:null,newComment:{},e:[],er:"",user_id:p.getUserId(),isAuthenticated:p.isAuthenticated()}},created:function(){var e=this;L.get(this.$route.params.id).then(function(t){e.gallery=t.data})},methods:{onSlideStart:function(e){this.sliding=!0},onSlideEnd:function(e){this.sliding=!1},openInNewTab:function(e){window.open(e,"_blank")},onSubmit:function(){var e=this;this.newComment.gallery_id=this.gallery.id,L.addComment(this.newComment).then(function(t){e.newComment=t.data,e.gallery.comments.push(e.newComment),e.newComment={}}).catch(function(t){return e.e=t.response.data.errors})},deleteComment:function(e){var t=this;confirm("Are you sure you want to delete this comment?")&&L.deleteComment(e.id).then(function(a){var s=t.gallery.comments.indexOf(e);t.gallery.comments.splice(s,1)}).catch(function(e){return t.e=e.response.data})},deleteGallery:function(e){var t=this;confirm("Are you sure you want to delete this gallery?")&&L.deleteGallery(e.id).then(function(e){t.$router.push("/my-galleries")}).catch(function(e){return t.e=e.response.data})}}},K=W,Q=(a("3a47"),Object(_["a"])(K,F,V,!1,null,"2b11ba4c",null));Q.options.__file="SingleGallery.vue";var X=Q.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("form",{staticClass:"form-inline md-form mr-auto mb-5",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search_term,expression:"search_term"}],staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search","aria-label":"Search"},domProps:{value:e.search_term},on:{input:function(t){t.target.composing||(e.search_term=t.target.value)}}}),a("button",{staticClass:"btn btn-outline-secondary aqua-gradient btn-rounded btn-sm my-0",attrs:{type:"submit"}},[e._v("Search")])]),e.galleries?a("div",{staticClass:"wrapper"},e._l(e.galleries,function(t){return t.images?a("div",{key:t.id,staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:t.images[t.images.length-1].image_url,alt:"Card image cap"}}),a("div",{staticClass:"card-body bg-light"},[a("router-link",{attrs:{to:{name:"single-gallery",params:{id:t.id}}}},[a("h4",{staticClass:"card-text"},[a("strong",[e._v(e._s(t.title))])])]),a("div",{staticClass:"card-text",staticStyle:{padding:"0.6rem"}},[e._v("by\n                    "),a("router-link",{staticStyle:{color:"black"},attrs:{to:{name:"single-author",params:{id:t.user.id}}}},[a("em",[e._v(e._s(t.user.first_name)+" "+e._s(t.user.last_name))])]),a("div",{staticClass:"card-text",staticStyle:{"font-size":"0.7rem"}},[e._v(e._s(t.created_at))])],1)],1)]):e._e()})):e._e(),a("div",{attrs:{id:"load-more"}},[e.galleries?a("button",{directives:[{name:"show",rawName:"v-show",value:e.pagination.total>e.galleries.length,expression:"pagination.total > galleries.length"}],staticClass:"btn btn-outline-secondary",on:{click:e.loadMore}},[e._v("\n            Load more\n        ")]):e._e()])])},Z=[],ee={data:function(){return{galleries:[],pagination:{},galleriesPaginate:[],search_term:"",e:""}},beforeRouteEnter:function(e,t,a){var s=this;L.getAuthor(e.params.id).then(function(e){a(function(t){t.galleries=e.data.data,t.pagination=e.data})}).catch(function(e){s.e=e.response.data})},methods:{onSubmit:function(){var e=this;L.getAuthor(this.$route.params.id,this.search_term).then(function(t){e.galleries=t.data.data,e.pagination=t.data})},loadMore:function(){var e=this;this.pagination.current_page++,L.getAuthorsGalleries(this.pagination.current_page,this.$route.params.id).then(function(t){e.galleriesPaginate=t.data.data,e.galleries=e.galleries.concat(e.galleriesPaginate)})}}},te=ee,ae=(a("33c7"),Object(_["a"])(te,Y,Z,!1,null,"364e4027",null));ae.options.__file="SingleAuthor.vue";var se=ae.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("form",{staticClass:"form-inline md-form mr-auto mb-5",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search_term,expression:"search_term"}],staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search","aria-label":"Search"},domProps:{value:e.search_term},on:{input:function(t){t.target.composing||(e.search_term=t.target.value)}}}),a("button",{staticClass:"btn btn-outline-secondary aqua-gradient btn-rounded btn-sm my-0",attrs:{type:"submit"}},[e._v("Search")])]),e.galleries?a("div",{staticClass:"wrapper"},e._l(e.galleries,function(t){return t.images?a("div",{key:t.id,staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:t.images[t.images.length-1].image_url,alt:"Card image cap"}}),a("div",{staticClass:"card-body bg-light"},[a("router-link",{attrs:{to:{name:"single-gallery",params:{id:t.id}}}},[a("h4",{staticClass:"card-text"},[a("strong",[e._v(e._s(t.title))])])]),a("div",{staticClass:"card-text",staticStyle:{padding:"0.6rem"}},[e._v("by\n                      "),a("router-link",{staticStyle:{color:"black"},attrs:{to:{name:"my-galleries",params:{id:t.user.id}}}},[a("em",[e._v(e._s(t.user.first_name)+" "+e._s(t.user.last_name))])]),a("div",{staticClass:"card-text",staticStyle:{"font-size":"0.7rem"}},[e._v(e._s(t.created_at))])],1)],1)]):e._e()})):e._e(),a("div",{attrs:{id:"load-more"}},[e.galleries?a("button",{directives:[{name:"show",rawName:"v-show",value:e.pagination.total>e.galleries.length,expression:"pagination.total > galleries.length"}],staticClass:"btn btn-outline-secondary",on:{click:e.loadMore}},[e._v("\n              Load more\n          ")]):e._e()])])},ie=[],ne={data:function(){return{pagination:{},galleriesPaginate:[],galleries:[],search_term:"",e:""}},beforeRouteEnter:function(e,t,a){var s=this;L.getLoggedUser().then(function(e){a(function(t){t.galleries=e.data.data,t.pagination=e.data})}).catch(function(e){s.e=e.response.data})},methods:{onSubmit:function(){var e=this;L.getLoggedUser(this.search_term).then(function(t){e.galleries=t.data.data,e.pagination=t.data})},loadMore:function(){var e=this;this.pagination.current_page++,L.getMyGalleries(this.pagination.current_page).then(function(t){e.galleriesPaginate=t.data.data,e.galleries=e.galleries.concat(e.galleriesPaginate)})}}},le=ne,oe=(a("0a2a"),Object(_["a"])(le,re,ie,!1,null,"13198c50",null));oe.options.__file="MyGalleries.vue";var ce=oe.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("form",{on:{submit:function(e){e.preventDefault()}}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-form-label",attrs:{for:"title"}},[e._v("Name")]),a("div",{staticClass:"col-8"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.gallery.title,expression:"gallery.title"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control here",attrs:{id:"title",name:"title",type:"text"},domProps:{value:e.gallery.title},on:{input:function(t){t.target.composing||e.$set(e.gallery,"title",t.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("title"),expression:"errors.has('title')"}],staticClass:"alert alert-warning"},[e._v(e._s(e.errors.first("title")))]),a("div",{staticClass:"input-group"},[e.e.title?a("span",{staticClass:"alert alert-warning"},[e._v(e._s(e.e.title[0]))]):e._e()])])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-form-label",attrs:{for:"description"}},[e._v("Description")]),a("div",{staticClass:"col-8"},[a("div",{staticClass:"input-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.gallery.description,expression:"gallery.description"}],staticClass:"form-control here",attrs:{id:"description",name:"description",type:"text"},domProps:{value:e.gallery.description},on:{input:function(t){t.target.composing||e.$set(e.gallery,"description",t.target.value)}}})])])]),e._l(e.number,function(t,s){return a("div",{key:s,staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-form-label",attrs:{for:"images"}},[e._v("Image")]),a("div",{staticClass:"col-8"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.gallery.images[s],expression:"gallery.images[index]"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control here",attrs:{id:"image_url",name:"image_url",type:"text"},domProps:{value:e.gallery.images[s]},on:{input:function(t){t.target.composing||e.$set(e.gallery.images,s,t.target.value)}}}),a("button",{staticClass:"btn btn-light",on:{click:function(t){e.deleteUrl(e.gallery.images[s])}}},[a("i",{staticClass:"far fa-trash-alt"})]),e.gallery.images[s]&&s>0?a("button",{staticClass:"btn btn-light",on:{click:function(t){e.moveUp(e.gallery.images[s])}}},[a("i",{staticClass:"fas fa-arrow-up"})]):e._e(),e.gallery.images[s]&&s<e.gallery.images.length-1?a("button",{staticClass:"btn btn-light",on:{click:function(t){e.moveDown(e.gallery.images[s])}}},[a("i",{staticClass:"fas fa-arrow-down"})]):e._e()]),a("div",{staticClass:"input-group"},[e.e["images."+s]?a("span",{staticClass:"alert alert-warning"},[e._v("Wrong format of image")]):e._e()]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("image_url"),expression:"errors.has('image_url')"}],staticClass:"alert alert-warning"},[e._v(e._s(e.errors.first("image_url")))]),a("div",{staticClass:"input-group"},[e.e.images?a("span",{staticClass:"alert alert-warning"},[e._v(e._s(e.e.images[0]))]):e._e()])])])}),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-4 col-form-label",attrs:{for:"images"}},[e._v("Add more images:")]),a("div",{staticClass:"col-8"},[a("button",{staticClass:"btn btn-light",on:{click:e.addUrl}},[a("i",{staticClass:"fas fa-plus"})])])]),a("button",{staticClass:"btn btn-info",attrs:{id:"add-btn",type:"submit"},on:{click:e.onSubmit}},[e._v("Add")]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"},on:{click:e.cancel}},[e._v("Cancel")])],2)])},de=[],me=(a("ac6a"),{data:function(){return{gallery:{title:"",description:"",images:[]},number:1,e:[]}},created:function(){var e=this;this.$route.params.id&&L.get(this.$route.params.id).then(function(t){e.gallery.title=t.data.title,e.gallery.description=t.data.description,e.gallery.id=t.data.id,t.data.images.forEach(function(t){e.gallery.images.push(t.image_url)})})},methods:{onSubmit:function(){this.$route.params.id?this.editGallery():this.addGallery()},addGallery:function(){var e=this;this.$validator.validateAll().then(function(t){t&&L.add(e.gallery).then(function(t){e.$router.push("/my-galleries")}).catch(function(t){e.e=t.response.data.errors})})},editGallery:function(){var e=this;this.$validator.validateAll().then(function(t){t&&L.edit(e.gallery).then(function(t){e.$router.push("/galleries/".concat(e.$route.params.id))}).catch(function(t){e.e=t.response.data.errors})})},cancel:function(){this.$route.params.id?this.$router.push("/galleries/".concat(this.$route.params.id)):this.$router.push("/my-galleries")},addUrl:function(){this.number++},deleteUrl:function(e){if(this.number>1){var t=this.gallery.images.indexOf(e);this.gallery.images.splice(t,1),this.gallery.images.splice(e,1),this.number--}},moveUp:function(e){var t=this.gallery.images.indexOf(e),a=this.gallery.images.indexOf(e)-1;if(0!==t&&this.number>1)this.gallery.images.splice(t,1,this.gallery.images[a]),this.gallery.images.splice(a,1,e);else if(a<0){var s=this.gallery.images.length-1;this.gallery.images.splice(a,1,this.gallery.images[s])}},moveDown:function(e){var t=this.gallery.images.indexOf(e),a=(this.gallery.images.indexOf(e),this.gallery.images.indexOf(e)+1);t<this.gallery.images.length-1&&(this.gallery.images.splice(t,1,this.gallery.images[a]),this.gallery.images.splice(a,1,e))}}}),ge=me,ve=(a("2b3f"),Object(_["a"])(ge,ue,de,!1,null,"6f04f566",null));ve.options.__file="CreateGallery.vue";var pe=ve.exports;s["a"].use(A["a"]);var fe=new A["a"]({routes:[{path:"/",redirect:"all-galleries"},{path:"/all-galleries",name:"all-galleries",component:D},{path:"/login",name:"login",component:q},{path:"/register",name:"register",component:J},{path:"/galleries/:id",name:"single-gallery",component:X},{path:"/authors/:id",name:"single-author",component:se},{path:"/my-galleries",name:"my-galleries",component:ce},{path:"/create",name:"create",component:pe},{path:"/edit-gallery/:id",name:"edit-gallery",component:pe}]});s["a"].use(r["a"]),s["a"].use(i["a"]),s["a"].config.productionTip=!1,fe.beforeEach(function(e,t,a){"login"===e.name&&p.isAuthenticated()?a({path:"all-galleries"}):"register"===e.name&&p.isAuthenticated()?a({path:"all-galleries"}):("my-galleries"!==e.name||p.isAuthenticated())&&("create"!==e.name||p.isAuthenticated())&&("edit-gallery"!==e.name||p.isAuthenticated())?a():a({path:"all-galleries"})}),new s["a"]({router:fe,render:function(e){return e(k)}}).$mount("#app")},"7a43":function(e,t,a){"use strict";var s=a("cd50"),r=a.n(s);r.a},"7a64":function(e,t,a){},cd50:function(e,t,a){},edfe:function(e,t,a){},f274:function(e,t,a){"use strict";var s=a("f2a4"),r=a.n(s);r.a},f2a4:function(e,t,a){}});
//# sourceMappingURL=app.23c695e0.js.map