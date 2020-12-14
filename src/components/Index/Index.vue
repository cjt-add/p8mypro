<template>
  <div class="index">
    <el-container>
      <el-aside width="20%">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item index="/home/index/homes">
            <i class="el-icon-setting"></i>
            <span slot="title">后台首页</span>
          </el-menu-item>
          <el-menu-item index="/home/index/image">
            <i class="el-icon-setting"></i>
            <span slot="title">相册管理</span>
          </el-menu-item>
          <el-menu-item index="/home/index/cartList">
            <i class="el-icon-setting"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "index"
};
</script>
<style lang="scss">
.el-container {
  display: flex;
}
.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  flex: 1;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>