(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-addOrUpdate-addOrUpdate"],{"041a":function(t,n,e){var i=e("09e2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("2c30abee",i,!0,{sourceMap:!1,shadowMode:!1})},"09e2":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.home[data-v-2fc24d5f]{padding:%?30?%}.home .item[data-v-2fc24d5f]{border:%?1?% solid #999;padding:%?20?%;margin-bottom:%?20?%}.home uni-button[data-v-2fc24d5f]{margin-bottom:%?20?%}.home uni-button[disabled][data-v-2fc24d5f]{background-color:#999}.home .submit[data-v-2fc24d5f]{color:#fff;background-color:#4a7171}.home .pics[data-v-2fc24d5f]{margin-bottom:%?40?%;display:grid;grid-template-columns:repeat(3,%?220?%);justify-content:space-between}.home .pics .pic-item[data-v-2fc24d5f]{position:relative;width:%?220?%;height:%?220?%;margin-bottom:%?15?%}.home .pics .pic-item uni-image[data-v-2fc24d5f]{width:100%;height:100%}.home .pics .pic-item .delete-pic[data-v-2fc24d5f]{position:absolute;top:0;right:0;width:%?50?%;height:%?50?%;text-align:center;color:#fff;background-color:rgba(0,0,0,.3);border-radius:0 0 0 %?25?%}.home .pics .add-pic[data-v-2fc24d5f]{width:%?220?%;height:%?220?%;border:%?1?% solid #bbb;text-align:center;line-height:%?200?%;color:#bbb;font-size:%?100?%}',""]),t.exports=n},"18bc":function(t,n,e){"use strict";e.r(n);var i=e("a880"),a=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=a.a},"96f3":function(t,n,e){"use strict";e.r(n);var i=e("cf04"),a=e("18bc");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);e("af8d");var r=e("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"2fc24d5f",null,!1,i["a"],void 0);n["default"]=c.exports},a880:function(t,n,e){"use strict";(function(t){e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("c7eb")),o=i(e("2909")),r=i(e("1da1"));e("d81d"),e("4de4"),e("d3b7"),e("3ca3"),e("ddb0"),e("99af"),e("a434");var c={data:function(){return{artInfo:{title:"",author:"",content:"",fileIDArr:[]},imgInfo:[]}},onLoad:function(t){if(t.obj){var n=JSON.parse(decodeURIComponent(t.obj));this.artInfo=n,this.imgInfo=n.fileIDArr.map((function(t){return{path:t}})),uni.setNavigationBarTitle({title:"修改文章"})}},methods:{onSubmit:function(t){var n=this;"w+"==this.artInfo.author?uni.showModal({title:"提醒！",content:"作者为w+的文章修改与删除都需要秘钥！您确定作者名为w+吗？",confirmColor:"#4a7171",cancelColor:"#999",success:function(t){t.confirm&&n.addOrUpdate()}}):this.addOrUpdate()},addOrUpdate:function(){var n=this;return(0,r.default)((0,a.default)().mark((function e(){var i,r;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"正在拼命帮你完成操作...",mask:!0}),i=n.imgInfo.filter((function(t){if(t.name)return t})),r=i.map((function(n){return t.uploadFile({filePath:n.path,cloudPath:n.name})})),e.next=5,Promise.all(r).then((function(t){var e=t.map((function(t){return t.fileID}));n.artInfo.fileIDArr=[].concat((0,o.default)(n.artInfo.fileIDArr),(0,o.default)(e))}));case 5:n.artInfo._id?n.update():n.add();case 6:case"end":return e.stop()}}),e)})))()},add:function(){t.callFunction({name:"addOrUpdateArticle",data:this.artInfo}).then((function(t){uni.hideLoading(),uni.showModal({title:"操作成功！",content:t.result,confirmText:"去看看！",cancelText:"继续添加",confirmColor:"#4a7171",cancelColor:"#999",success:function(t){t.confirm&&uni.reLaunch({url:"/pages/index/index"})}})}))},update:function(){t.callFunction({name:"addOrUpdateArticle",data:this.artInfo}).then((function(t){uni.hideLoading(),uni.showToast({title:"修改成功"}),setTimeout((function(){uni.navigateBack()}),1e3)}))},chooseImage:function(){var t=this;uni.chooseImage({count:9-this.imgInfo.length,extension:["jpg","png","webp","gif"],success:function(n){var e=n.tempFiles.map((function(t){return{name:t.name,path:t.path}}));t.imgInfo=[].concat((0,o.default)(t.imgInfo),(0,o.default)(e))}})},deletePic:function(t){this.imgInfo.splice(t,1),this.artInfo.fileIDArr.splice(t,1)},preview:function(t){uni.previewImage({current:t,urls:this.imgInfo.map((function(t){return t.path})),indicator:"number",loop:!0})},reset:function(){var t=this;uni.showModal({title:"重置！",content:"确定要清除填写内容吗？",confirmText:"确定",cancelText:"点错了~",confirmColor:"#4a7171",cancelColor:"#999",success:function(n){n.confirm&&(t.artInfo.title="",t.artInfo.author="",t.artInfo.content="")}})}},computed:{isDisabled:function(){var t=this.artInfo.title&&this.artInfo.author&&this.artInfo.content;return!t}}};n.default=c}).call(this,e("a9ff")["default"])},af8d:function(t,n,e){"use strict";var i=e("041a"),a=e.n(i);a.a},cf04:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"home"},[e("v-uni-form",{on:{submit:function(n){arguments[0]=n=t.$handleEvent(n),t.onSubmit.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"item"},[e("v-uni-input",{attrs:{type:"text",name:"title",placeholder:"请输入标题"},model:{value:t.artInfo.title,callback:function(n){t.$set(t.artInfo,"title",n)},expression:"artInfo.title"}})],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-input",{attrs:{type:"text",name:"author",placeholder:"作者名称"},model:{value:t.artInfo.author,callback:function(n){t.$set(t.artInfo,"author",n)},expression:"artInfo.author"}})],1),e("v-uni-view",{staticClass:"item"},[e("v-uni-textarea",{attrs:{type:"text",name:"content",placeholder:"请输入详细内容..."},model:{value:t.artInfo.content,callback:function(n){t.$set(t.artInfo,"content",n)},expression:"artInfo.content"}})],1),e("v-uni-view",{staticClass:"pics"},[t._l(t.imgInfo,(function(n,i){return e("v-uni-view",{key:i,staticClass:"pic-item"},[e("v-uni-image",{attrs:{src:n.path,mode:"aspectFill"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.preview(i)}}}),e("v-uni-view",{staticClass:"delete-pic",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.deletePic(i)}}},[t._v("×")])],1)})),t.imgInfo.length<9?e("v-uni-view",{staticClass:"add-pic",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.chooseImage.apply(void 0,arguments)}}},[t._v("+")]):t._e()],2),e("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.reset.apply(void 0,arguments)}}},[t._v("重置")]),e("v-uni-button",{staticClass:"submit",attrs:{"form-type":"submit",disabled:t.isDisabled}},[t._v("提交")])],1)],1)},a=[]}}]);