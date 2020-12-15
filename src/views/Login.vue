<template>
  <div class="login">
    <div class="boxs"></div>
    <div class="box">
      <h2 class="bt">UNI-ADMIN</h2>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="dl" @click="login">登录</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [{ required: true, message: "请输入登录名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    }
  },
  methods:{
    login(){
      // var script = document.createElement('script')
      // script.src = 'http://ceshi5.dishait.cn/admin/login'
      // var boxs = document.querySelector('.boxs')
      // boxs.appendChild(script)
      var obj = {username:this.ruleForm.name,password:this.ruleForm.password}
      this.$http.post('/api/login',obj).then((res)=>{
        console.log(res)
          sessionStorage.setItem('token',JSON.stringify(res.data.data.token))
          this.$router.push('/home')
      }).catch((err)=>{
         console.log(err.response)
         this.$message.error(err.response.data.msg)
      })
    }
  },
  // mounted(){
  //   this.login()
  // }
};
</script>
<style lang="scss">
.login {
  position: relative;
}
.box {
  padding: 0 20px;
  position: relative;
  width: 500px;
  height: 300px;
  border: 1px solid #eeeeee;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -150px;
}
.bt{
  text-align: center;
  padding: 10px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #eeeeee;
}
.dl{
  width: 400px;
  position: absolute;
  left: 120px;
  bottom: 15px;
}
</style>
