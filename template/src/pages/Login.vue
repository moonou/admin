<template>
  <div class="login_page">
    <div class="content">
      <el-card class="box-card">
        <el-form label-width="80px">
          <el-form-item label="用户名">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="$router.push({name: 'Home'})">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.login_page {
  height: 100%;
  background-color: #324157;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  width: 30%;
  min-width: 400px;
}
</style>
