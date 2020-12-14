<template>
  <div class="home">
    <el-header>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="/home/index">首页</el-menu-item>
        <el-menu-item index="/home/cart">商品</el-menu-item>
         <el-menu-item index="/home/dd">订单</el-menu-item>
        <el-menu-item index="/home/app">会员</el-menu-item>
        <el-menu-item index="/home/Sz">设置</el-menu-item>
        <el-submenu index="6">
          <template slot="title">admin</template>
          <el-menu-item index="/login" @click="tc">退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      activeIndex2:'2'
    }
  },
  methods:{
    tc(){
      sessionStorage.removeItem('token')
    }
  }
};
</script>
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
}
.el-header,
.el-footer {
  width: 100%;
  background-color: #333;
  color: #fff;
  text-align: center;
  height: 60px;
}

.el-main {
  width: 100%;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  width: 100%;
  flex: 1;
}
</style>
