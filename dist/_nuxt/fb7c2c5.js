(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{273:function(t,o,e){var content=e(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("7a5180e3",content,!0,{sourceMap:!1})},282:function(t,o,e){"use strict";e(273)},283:function(t,o,e){var n=e(15)(!1);n.push([t.i,".admin-page[data-v-76d82822]{padding:20px}.new-post[data-v-76d82822]{border-bottom:2px solid #ccc;padding-bottom:10px}.existing-posts h1[data-v-76d82822],.new-post[data-v-76d82822]{text-align:center}",""]),t.exports=n},299:function(t,o,e){"use strict";e.r(o);var n={layout:"admin",head:{title:"Admin"},middleware:["check-auth","auth"],computed:{loadedPosts:function(){return this.$store.getters.loadedPosts}},methods:{onLogout:function(){this.$store.dispatch("logout"),this.$router.push("/admin/auth")}}},d=(e(282),e(6)),component=Object(d.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"admin-page"},[e("section",{staticClass:"new-post"},[e("AppButton",{on:{click:function(o){return t.$router.push("/admin/new-post")}}},[t._v("\n      Create Post\n    ")]),t._v(" "),e("AppButton",{staticStyle:{"margin-left":"10px"},on:{click:t.onLogout}},[t._v("\n      Logout\n    ")])],1),t._v(" "),e("section",{staticClass:"existing-posts"},[e("h1",[t._v("Existing Posts")]),t._v(" "),e("PostList",{attrs:{"is-admin":"",posts:t.loadedPosts}})],1)])}),[],!1,null,"76d82822",null);o.default=component.exports}}]);