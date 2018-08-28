<template>
  <div class="login">
    <div class="content">
      <div class="logo"><img src="../assets/logo.png"></div>
      <div class="main">
        <div class="title">
          <p>授权XXX应用访问你的智慧校园账号，将允许一下操作</p>
        </div>
        <div class="base">
        <div class="left">
          <div>
            <p>获取你的基本资料</p>
          </div>
          <div>
            <p>当前登录账号：<span>XXXXXXX</span>（学工号）</p>
          </div>
        </div>
        <div class="right">
          <div class="img">
            <img src="">
          </div>
          <div class="btn">
            <el-button @click="submitForm()">授权</el-button>
            <el-button>取消</el-button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created(){
  },
  methods:{
    // 授权
    submitForm() {
    },
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
          >div:nth-of-type(2)
            height: 1rem
            line-height: 1rem
            .el-form-item
              margin-bottom:.15rem
              .el-input__inner
                height:30px !important
        .right
          width:40%
          text-align: center
          .img
            width:1rem
            height:1rem
            background: #999999
            margin: 0 auto
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
