<template>
  <div class="home">
    <div class="menu">
      <el-menu theme="dark" default-active="1-1" class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <div class="header">
        <div class="userinfo">
          <el-dropdown>
            <div class="head_img"></div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><i class="icon el-icon-message"></i>消息</el-dropdown-item>
              <el-dropdown-item><i class="icon el-icon-setting"></i>设置</el-dropdown-item>
              <el-dropdown-item divided @click.native="$router.push({name: 'Login'})">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="page">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 100%;
  position: relative;
}
.menu {
  width: 200px;
  height: 100%;
  background-color: #324157;
  overflow-y: auto;
  position: relative;
  z-index: 2;
}
.content {
  position: absolute;
  z-index: 1;
  top: 0;
  padding-left: 200px;
  width: 100%;
  box-sizing: border-box;
}
.header {
  background: #273344;
  padding: 5px 10px;
  color: #fff;
}
.userinfo {
  text-align: right;
}
.head_img {
  width: 50px;
  height: 50px;
  background: #aaa;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}
.icon {
  color: #888;
  margin-right: 10px;
}
</style>
