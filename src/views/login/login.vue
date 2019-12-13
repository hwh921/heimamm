<template>
  <div class="login-box">
    <!-- 登录表单 -->
    <div class="form-box">
      <div class="title-box">
        <img src="../../assets/login-logo.png" alt />
        <span class="title">黑马面面</span>
        <i></i>
        <span class="sub-title">用户登录</span>
      </div>
      <el-form ref="form" class="login-form" :model="form">
        <el-form-item>
          <el-input prefix-icon="el-icon-user" placeholder="请输入手机号" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-col :span="18">
            <el-input prefix-icon="el-icon-key" placeholder="请输入验证码" v-model="form.name"></el-input>
          </el-col>
          <el-col :span="6">
              <img class="captcha" src="../../assets/captcha.jpg" alt="">
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="form.checked">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
          <el-button class="registe-btn" type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img class="login-pic" src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        checked: false
      }
    };
  }
};
</script>

<style lang="less">
.login-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );

  .form-box {
    width: 475px;
    height: 550px;
    background-color: #f5f5f5;
    box-sizing: border-box;
    padding: 44px;

    .title-box {
      display: flex;
      align-items: center;

      img {
        width: 22px;
        height: 17px;
        margin-right: 16px;
      }
      .title {
        font-size: 24px;
        margin-right: 14px;
      }
      i {
        width: 1px;
        height: 28px;
        background-color: #c7c7c7;
        margin-right: 12px;
      }
      .sub-title {
        font-size: 22px;
      }
    }

    .login-form {
      margin-top: 27px;

      .captcha{
          width: 100%;
          height: 40px;
      }

      .el-checkbox{
          display: flex;
          align-items: center;

          .el-checkbox__label{
              display: flex;
          align-items: center;

          }
      }

      .el-button{
          width: 100%;
          margin: 0;
      }

      .registe-btn{
          margin-top: 26px;
      }
    }
  }

  .login-pic {
  }
}
</style>