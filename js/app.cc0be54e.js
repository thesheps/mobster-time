(function(e){function t(t){for(var s,i,o=t[0],c=t[1],l=t[2],d=0,f=[];d<o.length;d++)i=o[d],r[i]&&f.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(f.length)f.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},r={app:0},n=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return a(t)}function n(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{dark:e.dark}},[a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[e._v("Mobster")]),e.$vuetify.breakpoint.mdAndUp?a("span",{staticClass:"font-weight-light"},[e._v(": The collaboration timer")]):e._e()]),a("v-spacer"),a("v-btn",{attrs:{flat:"",icon:""},on:{click:function(t){e.dark=!e.dark}}},[a("v-icon",[e._v("invert_colors")])],1),a("v-btn",{attrs:{flat:"",icon:"",href:"https://github.com/thesheps/mobster"}},[a("v-icon",[e._v("code")])],1),a("v-btn",{attrs:{flat:"",icon:"",color:"pink",href:"https://campaign.justgiving.com/charity/forevermanchester/bigchangemcr"}},[a("v-icon",[e._v("favorite")])],1)],1),a("v-content",[a("router-view")],1)],1)},n=[],i={name:"Mobster-Time",data:function(){return{dark:!0}}},o=i,c=a("2877"),l=a("6544"),u=a.n(l),d=a("7496"),f=a("8336"),b=a("549c"),h=a("132d"),m=a("9910"),v=a("71d9"),p=a("2a7f"),j=Object(c["a"])(o,r,n,!1,null,null,null),g=j.exports;u()(j,{VApp:d["a"],VBtn:f["a"],VContent:b["a"],VIcon:h["a"],VSpacer:m["a"],VToolbar:v["a"],VToolbarTitle:p["a"]});var k=a("8c4f"),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[e.$vuetify.breakpoint.mdAndUp?a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"mr-4"},[a("v-list",{attrs:{subheader:""}},[a("Configuration"),a("MobsterList",{model:{value:e.mobsters,callback:function(t){e.mobsters=t},expression:"mobsters"}})],1)],1),a("v-flex",{attrs:{shrink:""}},[a("Timer",{attrs:{disabled:e.timerDisabled}})],1)],1):a("v-flex",{attrs:{row:""}},[a("v-flex",{staticClass:"mr-4",attrs:{row:""}},[a("v-list",{attrs:{subheader:""}},[a("Configuration"),a("MobsterList",{model:{value:e.mobsters,callback:function(t){e.mobsters=t},expression:"mobsters"}})],1)],1),a("v-flex",{attrs:{row:"",shrink:""}},[a("Timer",{attrs:{condensed:"true",disabled:e.timerDisabled}})],1)],1)],1)},w=[],T=a("cebc"),_=a("2f62"),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-responsive",[e.condensed?a("div",{staticClass:"text-xs-center"},[a("v-card-text",{staticClass:"display-3"},[e._v(e._s(e._f("timeRemaining")(e.secondsLeft)))])],1):a("v-layout",{attrs:{row:"","pb-2":""}},[e.$vuetify.breakpoint.smAndUp?a("v-progress-circular",{attrs:{size:e.size,width:e.width,value:e.ratio,rotate:"-90"}},[a("v-card-text",{staticClass:"display-4"},[e._v(e._s(e._f("timeRemaining")(e.secondsLeft)))]),e.breakFrequency>0?a("v-card-text",{staticClass:"display-4 text-md-center font-weight-black"},[e._v(e._s(e.breakMessage))]):e._e()],1):e._e()],1),a("v-layout",{attrs:{row:""}},[a("v-btn",{attrs:{block:"",large:"",color:e.isRunning?"error":"success",disabled:e.disabled},on:{click:function(t){return e.toggleTimer(!e.isRunning)}}},[e._v(e._s(e.buttonLabel))])],1)],1)},x=[],V=a("134a"),D=a("c1df"),z=a.n(D),M=new s["a"],O={props:["disabled","condensed"],data:function(){return{size:450,width:125,isRunning:!1,stopwatch:{start:function(){},stop:function(){}},buttonLabel:"Start",secondsLeft:0,totalSeconds:0,rotation:0}},watch:{breakFrequency:function(e){this.rotation=0},cycleTime:function(e){this.secondsLeft=new z.a.duration(e).asSeconds(),this.totalSeconds=this.secondsLeft,this.resetTimer()},isRunning:function(e){this.buttonLabel=e?"Pause":"Start"}},computed:Object(T["a"])({},Object(_["b"])(["cycleTime","breakFrequency"]),{ratio:function(){return this.secondsLeft/this.totalSeconds*100},breakMessage:function(){var e=this.breakFrequency-this.rotation;return"".concat(e," More Turn").concat(e>1?"s":"","!")}}),filters:{timeRemaining:function(e){var t=new z.a.duration({seconds:e}),a=("0"+t.hours()).slice(-2),s=("0"+t.minutes()).slice(-2),r=("0"+t.seconds()).slice(-2),n="".concat(a,":").concat(s,":").concat(r);return M.$emit("timerTick",n),n}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},methods:{resetTimer:function(){var e=this;this.stopwatch.stop(),this.isRunning=!1,this.stopwatch=new V["Stopwatch"](1,{seconds:this.totalSeconds}),this.stopwatch.on("tick",function(t){e.secondsLeft=t}),this.stopwatch.on("end",function(t){e.rotateMobster()})},toggleTimer:function(e){this.isRunning=e,this.isRunning?this.stopwatch.start():this.stopwatch.stop()},rotateMobster:function(){this.resetTimer(),this.rotation++,this.breakFrequency>0&&this.rotation===this.breakFrequency?(this.rotation=0,M.$emit("takeABreak")):(M.$emit("rotateMobster"),this.toggleTimer(!0))},handleResize:function(){var e=window.innerWidth/2,t=window.innerHeight-200;this.size=t<e?t:e,this.width=30/450*this.size}}},$=O,S=a("99d9"),L=a("a722"),F=a("490a"),q=a("6b53"),A=Object(c["a"])($,C,x,!1,null,null,null),B=A.exports;u()(A,{VBtn:f["a"],VCardText:S["b"],VLayout:L["a"],VProgressCircular:F["a"],VResponsive:q["a"]});var E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-list",[a("v-subheader",{staticClass:"display-1 mb-4 mt-4"},[e._v("Mobsters")]),a("v-list-tile",[a("v-text-field",{staticClass:"title",attrs:{placeholder:"Add a new Mobster (at least 2)...",autofocus:"",label:"Mobster name"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addMobster(t)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("draggable",{attrs:{handle:".handle"},model:{value:e.mobsters,callback:function(t){e.mobsters=t},expression:"mobsters"}},[a("transition-group",{attrs:{type:"transition",name:"flip-fade"}},e._l(e.mobsters,function(t,s){return a("v-list-tile",{key:t.id,staticClass:"mt-4 dragger",attrs:{avatar:""}},[a("v-list-tile-action",{staticClass:"handle"},[a("v-icon",{attrs:{large:""}},[e._v("drag_indicator")])],1),a("v-list-tile-action",{on:{click:function(t){return e.setDriver(s)}}},[a("v-btn",{attrs:{large:"",icon:"",ripple:""}},[a("v-icon",{attrs:{large:"",color:e.isDriving(s)}},[e._v("drive_eta")])],1)],1),a("v-list-tile-action",{on:{click:function(e){t.showCamera=!0}}},[a("v-btn",{attrs:{icon:"",ripple:""}},[a("v-icon",{attrs:{large:""}},[e._v("camera_enhance")])],1)],1),a("v-list-tile-avatar",{attrs:{size:"50"},on:{click:function(t){return e.toggleAvatar(s)}}},[a("transition",{attrs:{name:"flip-fade",mode:"out-in"}},[a("img",{key:t.avatar,attrs:{src:t.photo?t.photo:t.avatar}})])],1),a("v-list-tile-content",{staticClass:"ml-4"},[a("v-list-tile-title",{domProps:{textContent:e._s(t.name)}})],1),a("v-list-tile-action",{on:{click:function(t){return e.removeMobster(s)}}},[a("v-btn",{attrs:{icon:"",ripple:""}},[a("v-icon",{attrs:{large:"",color:"grey lighten-1"}},[e._v("delete")])],1)],1),a("Camera",{attrs:{showCamera:t.showCamera},on:{close:function(e){t.showCamera=!1}},model:{value:t.photo,callback:function(a){e.$set(t,"photo",a)},expression:"mobster.photo"}})],1)}),1)],1),a("v-snackbar",{attrs:{top:""},model:{value:e.showError,callback:function(t){e.showError=t},expression:"showError"}},[e._v("\n    "+e._s(e.errorText)+"\n    "),a("v-btn",{attrs:{color:"pink",flat:""},on:{click:function(t){e.showError=!1}}},[e._v("Close")])],1),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.showBreakDialog,callback:function(t){e.showBreakDialog=t},expression:"showBreakDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Time to take a break!")]),a("v-card-text",[e._v("Well done Mobsters, now go and recharge your batteries!")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:function(t){e.showBreakDialog=!1}}},[e._v("Ok")])],1)],1)],1)],1)},R=[],P=(a("7f7f"),a("1980")),N=a.n(P),U=a("b730"),I=a.n(U),G={raiseNotification:function(e,t,a){I.a.create(e,{body:a,icon:t,timeout:4e3,onClick:function(){window.focus(),this.close()}})}},J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{persistent:"","max-height":"400","max-width":"400"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("v-card",[a("v-toolbar",[a("v-btn",{attrs:{icon:""},on:{click:e.close}},[a("v-icon",[e._v("close")])],1),a("v-toolbar-title",[e._v("Say Cheese!!")])],1),a("video",{ref:"camera",staticClass:"camera",attrs:{"v-if":e.show}}),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:e.snapshot}},[e._v("Snap!")])],1)],1)],1)},W=[],H={stream:{},initialise:function(e){var t=this;window.navigator.getUserMedia({video:!0},function(a){t.stream=a,e.srcObject=a,e.play()},function(e){console.error(e)})},takeSnapshot:function(e){var t=document.createElement("canvas");t.width=640,t.height=480;var a=t.getContext("2d");return a.drawImage(e,0,0,t.width,t.height),t.toDataURL("image/png")},stop:function(){this.stream.getTracks()[0].stop()}},K={props:["width","height","showCamera"],data:function(){return{show:this.showCamera}},watch:{showCamera:function(e){this.show=e,e?H.initialise(this.$refs.camera):(H.stop(),this.close())}},methods:{snapshot:function(){var e=this,t=H.takeSnapshot(this.$refs.camera);e.$emit("input",t),e.$emit("close")},close:function(){H.stop(this.$refs.camera),this.$emit("close")}}},Q=K,X=(a("8839"),a("b0af")),Y=a("169a"),Z=Object(c["a"])(Q,J,W,!1,null,"110302e8",null),ee=Z.exports;u()(Z,{VBtn:f["a"],VCard:X["a"],VCardActions:S["a"],VDialog:Y["a"],VIcon:h["a"],VSpacer:m["a"],VToolbar:v["a"],VToolbarTitle:p["a"]});var te={components:{draggable:N.a,Camera:ee},data:function(){return{name:"",mobsters:[],errorText:"",showError:!1,showBreakDialog:!1,currentDriver:0}},mounted:function(){var e=this;M.$on("rotateMobster",function(){e.rotateDriver(),e.mobsters&&0!==e.mobsters.length&&G.raiseNotification("Time to rotate!",e.mobsters[e.currentDriver].avatar,"Take the wheel, ".concat(e.mobsters[e.currentDriver].name,"!"))}),M.$on("takeABreak",function(){e.showBreakDialog=!0,e.rotateDriver(),G.raiseNotification("Break time!","img/icons/coffee.png","Step away from the keyboard!")}),M.$on("timerTick",function(t){e.mobsters.length>0&&e.mobsters[e.currentDriver]?document.title="".concat(e.mobsters[e.currentDriver].name," - ").concat(t):document.title="Mobster"})},methods:{isDriving:function(e){return e===this.currentDriver?"pink":"grey"},addMobster:function(){if(!this.name)return this.errorText="Please enter a mobster name!",void(this.showError=!0);this.mobsters.push({id:this.mobsters.length,name:this.name,avatar:this.getAvatar(),showCamera:!1}),this.name="",this.$emit("input",this.mobsters)},removeMobster:function(e){this.$delete(this.mobsters,e),this.$emit("input",this.mobsters)},setDriver:function(e){this.currentDriver=e},rotateDriver:function(){this.currentDriver===this.mobsters.length-1?this.currentDriver=0:this.currentDriver++},toggleAvatar:function(e){var t=this.mobsters[e],a=this.getAvatar();while(a===t.avatar)a=this.getAvatar();t.avatar=a,this.$set(this.mobsters,e,t)},getAvatar:function(){return"img/avatars/".concat(Math.floor(9*Math.random())+1,".jpg")}}},ae=te,se=(a("76b1"),a("12b2")),re=a("8860"),ne=a("ba95"),ie=a("40fe"),oe=a("c954"),ce=a("5d23"),le=a("2db4"),ue=a("e0c7"),de=a("2677"),fe=Object(c["a"])(ae,E,R,!1,null,null,null),be=fe.exports;u()(fe,{VBtn:f["a"],VCard:X["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:se["a"],VDialog:Y["a"],VIcon:h["a"],VList:re["a"],VListTile:ne["a"],VListTileAction:ie["a"],VListTileAvatar:oe["a"],VListTileContent:ce["a"],VListTileTitle:ce["b"],VSnackbar:le["a"],VSpacer:m["a"],VSubheader:ue["a"],VTextField:de["a"]});var he=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-list",[a("v-subheader",{staticClass:"display-1 mb-4"},[e._v("Configuration")]),a("v-list-tile",[a("v-text-field",{staticClass:"title",attrs:{label:"Cycle time",mask:"##:##:##",placeholder:"00:08:00","return-masked-value":"",value:e.cycleTime,"append-outer-icon":"refresh"},on:{input:e.updateCycleTime,"click:append-outer":e.updateCycleTime}})],1),a("v-list-tile",{staticClass:"mt-4"},[a("v-text-field",{staticClass:"title",attrs:{mask:"##",label:"Break frequency",placeholder:"Every N turns...",value:e.breakFrequency},on:{input:e.updateBreakFrequency}})],1)],1)},me=[],ve={computed:Object(T["a"])({},Object(_["c"])({cycleTime:function(e){return e.cycleTime},breakFrequency:function(e){return e.breakFrequency}})),methods:{updateCycleTime:function(e){this.$store.commit("updateCycleTime",e)},updateBreakFrequency:function(e){this.$store.commit("updateBreakFrequency",e)}}},pe=ve,je=Object(c["a"])(pe,he,me,!1,null,null,null),ge=je.exports;u()(je,{VList:re["a"],VListTile:ne["a"],VSubheader:ue["a"],VTextField:de["a"]});var ke={components:{Configuration:ge,Timer:B,MobsterList:be},data:function(){return{configuration:{},mobsters:[],timerDisabled:!0}},computed:Object(T["a"])({},Object(_["c"])({cycleTime:function(e){return e.cycleTime},breakFrequency:function(e){return e.breakFrequency}})),watch:{configuration:function(){this.setTimerDisabled()},mobsters:function(){this.setTimerDisabled()}},methods:{setTimerDisabled:function(){this.timerDisabled=null==this.cycleTime||null==this.breakFrequency||this.mobsters.length<=1}}},ye=ke,we=a("a523"),Te=a("0e8f"),_e=Object(c["a"])(ye,y,w,!1,null,null,null),Ce=_e.exports;u()(_e,{VContainer:we["a"],VFlex:Te["a"],VLayout:L["a"],VList:re["a"]}),s["a"].use(k["a"]);var xe=new k["a"]({routes:[{path:"/",name:"timer",component:Ce}]});s["a"].use(_["a"]);var Ve=new _["a"].Store({state:{breakFrequency:8,cycleTime:"00:00:00"},getters:{breakFrequency:function(e){return e.breakFrequency},cycleTime:function(e){return e.cycleTime}},mutations:{updateBreakFrequency:function(e,t){e.breakFrequency=t},updateCycleTime:function(e,t){e.cycleTime=t}}}),De=a("bb71");a("da64");s["a"].use(De["a"],{iconfont:"md"});var ze=a("9483");Object(ze["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),s["a"].config.productionTip=!1,new s["a"]({router:xe,store:Ve,render:function(e){return e(g)}}).$mount("#app")},"76b1":function(e,t,a){"use strict";var s=a("aab1"),r=a.n(s);r.a},8839:function(e,t,a){"use strict";var s=a("e486"),r=a.n(s);r.a},aab1:function(e,t,a){},e486:function(e,t,a){}});
//# sourceMappingURL=app.cc0be54e.js.map