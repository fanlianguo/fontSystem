(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f8a0572"],{"812b":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("transition",{attrs:{name:"el-zoom-in-top"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.is_login,expression:"is_login"}],staticClass:"form-control",staticStyle:{transition:".2s all ease-out"}},[r("el-form",{ref:"ruleForm",attrs:{"label-width":"80px",rules:e.rules,model:e.loginForm}},[r("h2",[e._v("成绩管理系统登陆")]),r("el-row",{staticStyle:{"margin-top":"30px"}},[r("el-col",{attrs:{span:4}},[r("div",{staticClass:"content"})]),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"账号",prop:"username"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入管理员账号"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:4}},[r("div",{staticClass:"content"})]),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"请输入管理员密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-button",{staticStyle:{width:"30%",position:"relative",left:"16px"},on:{click:e.loginRequest}},[e._v("\n              登陆\n            ")])],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("span",{staticStyle:{display:"block",position:"relative",top:"10px","font-size":"14px"},attrs:{id:"goRegister"},on:{click:function(t){return e.triggerForm("register")}}},[e._v("没有账号?去注册")])])],1)],1)],1)]),r("transition",{attrs:{name:"el-zoom-in-bottom"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.is_register,expression:"is_register"}],staticClass:"form-control register",staticStyle:{transition:".2s all ease-in"}},[r("el-form",{ref:"register",attrs:{rules:e.rules,model:e.registerForm,"label-width":"60px"}},[r("h2",[e._v("管理员注册")]),r("el-row",[r("el-col",{attrs:{span:4}},[r("div",{staticClass:"content"})]),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"账号",prop:"username"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入管理员账号"},on:{blur:e.checkUsername},model:{value:e.registerForm.username,callback:function(t){e.$set(e.registerForm,"username",t)},expression:"registerForm.username"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:4}},[r("div",{staticClass:"content"})]),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入管理员密码"},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:4}},[r("div",{staticClass:"content"})]),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"昵称"}},[r("el-input",{attrs:{type:"text",placeholder:"昵称"},on:{blur:e.checkNickname},model:{value:e.registerForm.nickname,callback:function(t){e.$set(e.registerForm,"nickname",t)},expression:"registerForm.nickname"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:4}},[r("div",{staticClass:"content"})]),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"性别",prop:"gender"}},[r("el-input",{attrs:{type:"text",placeholder:"性别"},on:{blur:e.checkGender},model:{value:e.registerForm.gender,callback:function(t){e.$set(e.registerForm,"gender",t)},expression:"registerForm.gender"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:4}},[r("div",{staticClass:"content"})]),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[r("el-input",{attrs:{type:"text",placeholder:"电话"},on:{blur:e.checkPhone},model:{value:e.registerForm.mobile,callback:function(t){e.$set(e.registerForm,"mobile",t)},expression:"registerForm.mobile"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:4}},[r("div",{staticClass:"content"})]),r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"邮箱"}},[r("el-input",{attrs:{type:"text",placeholder:"邮箱"},model:{value:e.registerForm.email,callback:function(t){e.$set(e.registerForm,"email",t)},expression:"registerForm.email"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{span:24}},[r("el-button",{staticStyle:{width:"30%"},on:{click:e.registerRequest}},[e._v("注册")])],1)],1),r("el-row",{staticStyle:{"margin-top":"10px"}},[r("el-col",{attrs:{span:24}},[r("span",{staticStyle:{"font-size":"14px"},attrs:{id:"goLogin"},on:{click:function(t){return e.triggerForm("")}}},[e._v("已有账号?登陆")])])],1)],1)],1)])],1)},o=[],i=r("f25d");function n(e){return Object(i["a"])({url:"authorizations/",data:{form:e},method:"post"})}function a(e){return Object(i["a"])({url:"register/",data:{form:e},method:"post"})}function l(e,t){return Object(i["a"])({url:"check/"+t,params:{check:e}})}var c={name:"login",data:function(){return{is_login:!0,is_register:!1,loginForm:{username:"",password:""},registerForm:{username:"",nickname:"",password:"",gender:"",mobile:"",email:""},rules:{username:[{required:!0,message:"请输入账号",trigger:"blur"},{min:6,max:6,message:"长度必须是 6 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:4,max:12,message:"长度介于4-12之间",trigger:"blur"}],gender:[{required:!0,message:"性别不能为空",trigger:"blur"}],mobile:[{required:!0,message:"手机号不能为空",trigger:"blur"},{min:11,max:11,message:"请输入正确的手机号",trigger:"blur"}]}}},methods:{checkPhone:function(){var e=this;l(this.registerForm.mobile,1).then((function(t){"exists"===t&&(e.registerForm.mobile="",e.$message({message:"该手机已被注册",type:"error"}))})).catch((function(e){console.log(e)}))},checkNickname:function(){var e=this;l(this.registerForm.nickname,2).then((function(t){"exists"===t&&(e.registerForm.nickname="",e.$message({message:"这个名字已经被注册啦",type:"error"}))})).catch((function(e){console.log(e)}))},checkUsername:function(){var e=this;l(this.registerForm.username,3).then((function(t){"exists"===t&&(e.registerForm.username="",e.$message({message:"此账号已被注册",type:"error"}))})).catch((function(e){console.log(e)}))},loginRequest:function(){var e=this;n(this.loginForm).then((function(t){"error"!==t?(sessionStorage.setItem("username",t.username),console.log(t.username),sessionStorage.setItem("nickname",t.nickname),e.$router.push("/")):e.$message({message:"账号或密码错误",type:"error"})})).catch((function(e){console.log(e)}))},registerRequest:function(){var e=this;console.log(this.registerForm),a(this.registerForm).then((function(t){if("failed"!==t)return e.$message({message:"注册成功,为您切换至登陆页面",duration:2400,type:"success"}),console.log(t),void document.getElementById("goLogin").click();e.$message({message:"注册失败,请检查输入",type:"error",duration:2400})})).catch((function(e){console.log(e)}))},triggerForm:function(e){"register"===e?(this.is_register=!0,this.is_login=!1):(this.is_register=!1,this.is_login=!0)},checkGender:function(){""!==this.registerForm.gender&&"男"!==this.registerForm.gender&&"女"!==this.registerForm.gender&&(this.$message({message:"请输入有效的性别！",type:"warning"}),this.registerForm.gender="")}}},m=c,g=(r("b979"),r("2877")),u=Object(g["a"])(m,s,o,!1,null,"671bc539",null);t["default"]=u.exports},b979:function(e,t,r){"use strict";r("bcc0")},bcc0:function(e,t,r){}}]);
//# sourceMappingURL=chunk-1f8a0572.a9a36ae7.js.map