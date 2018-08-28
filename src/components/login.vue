<template>
  <div class="login">
    <div class="content">
      <div class="logo"><img src="../assets/logo.png"></div>
      <div class="main">
        <div class="title">
          <p>授权 <span>{{data.applicationName}}</span> 应用访问你的智慧校园账号，将允许以下操作</p>
        </div>
        <div class="base">
        <div class="left">
          <div>
            <p v-for="(item,index) in data.scopeList" :key="'a'+index">{{item.message}}</p>
            <p v-if="!data.scopeList">暂无相关内容</p>
          </div>
          <div>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width=".8rem" label-position="left">
              <el-form-item label="学工号" prop="username">
                <el-input v-model="ruleForm.username" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="right">
          <div class="img">
            <img :src="data.applicationIcon">
          </div>
          <div class="btn">
            <el-button @click="submitForm()">登录</el-button>
            <el-button>取消</el-button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {getAppMessage,getAppLogin} from '../api/login'

export default {
  data () {
    var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('学工号不能为空！'));
        } else {
          callback();
        }
    }; 
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('密码不能为空！'));
        } else {
          callback();
        }
    };
    return {
      ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
             { validator: validateUser, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ]
        },
        data:{}
    }
  },
  created(){
    this._getAppMessage()
  },
  methods:{
    // 登录
    submitForm(formName) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          let params = this.ruleForm
          getAppLogin(params).then((res) => {
            if(res.code === "40001"){
              // console.log(res.content.webSuccessUrl)
              window.location.href = res.content.webSuccessUrl
            }else{
              this.$message.error(res.message)
            }
          })
        } else {
          return false;
        }
      });
    },
    _getAppMessage(){
      getAppMessage().then((res) => {
        if(res.code === "40001"){
          this.data = res.content
        }
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.login
  height:100%
  width:100%
  background: #f6f8f9
  font-size:.16rem
  text-align:left
  .content
    width:7.24rem
    height:3.98rem    
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%,-80%)
    .logo img
        width:161px
        height:52px
    .main
      height:3.42rem  
      background: #ffffff
      padding:0 .26rem
      box-sizing:border-box
      box-shadow:0px 2px 6px 0px rgba(87,87,87,0.32)
      .title p
        color:#333333
        height:.59rem
        line-height:.59rem
      .base
        height:2.83rem
        padding:.1rem 0
        box-sizing:border-box
        display:flex
        .left
          width:60%
          >div:nth-of-type(1)
            height:1rem    
            padding-left: .3rem
            line-height: 1rem
            margin-bottom:.5rem
            border-right: 1px solid #ECECEC
            overflow:auto
            p
              line-height: .3rem
          >div:nth-of-type(2)
            height: 1rem
            line-height: 1rem
            .el-form-item
              margin-bottom:.15rem
              .el-input__inner
                height:.3rem !important
        .right
          width:40%
          text-align: center
          .img
            width:1rem
            height:1rem
            background: #999999
            margin: 0 auto
            img
              width:100%
              height:100%
          .btn 
            margin-top:.38rem
            height: 1.2rem
            line-height: 1.2rem
            .el-button
              width:.83rem
              height:.36rem
              padding:0 !important
              &:focus, &:hover
                color: #ffffff !important
                border-color: #195DA0 !important
                background-color: #195DA0 !important
</style>
