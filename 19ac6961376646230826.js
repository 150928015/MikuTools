(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{283:function(t,e,n){var content=n(618);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("3d34c469",content,!0,{sourceMap:!1})},617:function(t,e,n){"use strict";var r=n(283);n.n(r).a},618:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,".dictionary .detail-explain{white-space:pre-wrap;line-height:1.7}.dictionary .bihua,.dictionary .bushou,.dictionary .pinyin,.dictionary .words,.dictionary .wubi{font-size:20px;font-size:1.25rem}.dictionary .bihua .name,.dictionary .bushou .name,.dictionary .pinyin .name,.dictionary .words .name,.dictionary .wubi .name{font-weight:700}.dictionary .result{line-height:1.5}.dictionary .word{font-size:40px;font-size:2.5rem;font-weight:700;margin-bottom:.625rem}",""])},783:function(t,e,n){"use strict";n.r(e);var r={name:"Dictionary",head:function(){return this.$store.state.currentTool.head},data:function(){return{word:"",result:{},requestIn:!1}},methods:{query:function(){var t=this;return!this.requestIn&&(this.word.length>1?(this.$modal.show("dialog",{title:"查询失败",text:"ERROR: 仅能查询一个汉字"}),!1):void(/[\u4e00-\u9fa5]/.test(this.word)?(this.requestIn=!0,this.result={},this.$axios.post("/dictionary",{word:this.word}).then(function(e){t.requestIn=!1,t.result=e.data.data}).catch(function(e){t.requestIn=!1,t.$modal.show("dialog",{title:"查询失败",text:"ERROR: ".concat(e)})})):this.$modal.show("dialog",{title:"查询失败",text:"ERROR: 请输入正确的汉字"})))}}},o=(n(617),n(2)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dictionary"},[n("nya-container",{attrs:{title:"新华字典"}},[n("div",{staticClass:"inputbtn"},[n("nya-input",{attrs:{label:"请输入要查询的文字",placeholder:"朧",autocomplete:"off",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.query(e)}},model:{value:t.word,callback:function(e){t.word="string"==typeof e?e.trim():e},expression:"word"}}),t._v(" "),n("button",{staticClass:"nya-btn",attrs:{type:"button",disabled:t.requestIn},on:{click:t.query}},[t._v("\n                "+t._s(t.requestIn?"查询中":"开始查询")+"\n            ")])],1)]),t._v(" "),t.result.hanzi?n("nya-container",{staticClass:"result",attrs:{title:"查询成功"}},[n("div",{staticClass:"word"},[t._v("\n            "+t._s(t.result.hanzi)+"\n        ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.result.pinyin,expression:"result.pinyin"}],staticClass:"pinyin"},[n("span",{staticClass:"name"},[t._v("\n                拼音：\n            ")]),t._v(t._s(t.result.pinyin)+"\n        ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.result.bihua,expression:"result.bihua"}],staticClass:"bihua"},[n("span",{staticClass:"name"},[t._v("\n                笔画：\n            ")]),t._v(t._s(t.result.bihua)+"\n        ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.result.bushou,expression:"result.bushou"}],staticClass:"bushou"},[n("span",{staticClass:"name"},[t._v("\n                部首：\n            ")]),t._v(t._s(t.result.bushou)+"\n        ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.result.words,expression:"result.words"}],staticClass:"words"},[n("span",{staticClass:"name"},[t._v("\n                组词：\n            ")]),t._v(t._s(t.result.words)+"\n        ")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.result.wubi,expression:"result.wubi"}],staticClass:"wubi"},[n("span",{staticClass:"name"},[t._v("\n                五笔：\n            ")]),t._v(t._s(t.result.wubi)+"\n        ")]),t._v(" "),n("hr",{directives:[{name:"show",rawName:"v-show",value:t.result.detail_explain[0],expression:"result.detail_explain[0]"}]}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.result.detail_explain[0],expression:"result.detail_explain[0]"}],staticClass:"detail-explain"},[t._v("\n            "+t._s(t.result.detail_explain.join("\n"))+"\n        ")])]):t._e()],1)},[],!1,null,null,null);e.default=component.exports}}]);