(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{302:function(t,e,o){var content=o(666);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("2a0d37a2",content,!0,{sourceMap:!1})},665:function(t,e,o){"use strict";var n=o(302);o.n(n).a},666:function(t,e,o){(t.exports=o(8)(!1)).push([t.i,".kuaishou_video_downloader .nya-checkbox{margin-top:.9375rem}",""])},784:function(t,e,o){"use strict";o.r(e);o(135);var n={name:"KuaishouVideoDownloader",head:function(){return this.$store.state.currentTool.head},data:function(){return{kuaishouLink:"",downloadUrl:"",requestIn:!1,removeWatermark:!1}},methods:{download:function(){var t=this;if(this.requestIn)return!1;var e=/(https?:\/\/)(www\.gifshow\.com|live\.kuaishou\.com)\/(i\/photo\/lwx([?&]([^=&#]+)=([^&#]*))+|u\/\w+\/\w+|s\/[0-9a-zA-Z-]+)/;e.test(this.kuaishouLink)?(this.requestIn=!0,this.downloadUrl="",this.$axios.post("/kuaishou_video_downloader",{url:this.kuaishouLink.match(e)[0],removeWatermark:this.removeWatermark}).then(function(e){t.requestIn=!1,t.downloadUrl=e.data.data}).catch(function(e){t.requestIn=!1,t.$modal.show("dialog",{title:"下载失败",text:"ERROR: ".concat(e)})})):this.$modal.show("dialog",{title:"下载失败",text:"ERROR: 请输入正确的链接"})}}},r=(o(665),o(2)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"kuaishou_video_downloader"},[o("nya-container",{attrs:{title:"快手视频下载"}},[o("div",{staticClass:"inputbtn"},[o("nya-input",{attrs:{autofocus:"",label:"输入链接开始下载",placeholder:"http://www.gifshow.com/s/Yjzm-hdX",autocomplete:"off"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.download(e)}},model:{value:t.kuaishouLink,callback:function(e){t.kuaishouLink="string"==typeof e?e.trim():e},expression:"kuaishouLink"}}),t._v(" "),o("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.download}},[t._v("\n                "+t._s(t.requestIn?"获取中":"开始获取")+"\n            ")])],1),t._v(" "),o("nya-checkbox",{attrs:{label:"去水印（测试中）"},model:{value:t.removeWatermark,callback:function(e){t.removeWatermark=e},expression:"removeWatermark"}})],1),t._v(" "),o("nya-container",{directives:[{name:"show",rawName:"v-show",value:t.downloadUrl,expression:"downloadUrl"}],attrs:{title:"获取成功"}},[o("a",{attrs:{href:t.downloadUrl,target:"_blank",title:"右键另存为下载或长按保存",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.downloadUrl)+"\n        ")])]),t._v(" "),o("nya-container",{attrs:{title:"Explain"}},[o("ul",{staticClass:"nya-list"},[o("li",[t._v("去水印下载为测试功能，可能不稳定")])])])],1)},[],!1,null,null,null);e.default=component.exports}}]);