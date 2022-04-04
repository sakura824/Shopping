<template>
  <div class="user-info" @click="Login">
      <div class="user-head">
          <slot name="icon">
              <i class="iconfont icon-weidenglu-touxiang"></i>
          </slot>
      </div>
      <div class="user-content">
        <slot name="user-state">
          <div>登录\注册</div>
        </slot>
      </div>
      <div class="user-enter">
        <i class="iconfont icon-jinru"></i>
      </div>
      <div class="phone">
        <i class="iconfont icon-shouji"></i>
        <slot name="user-name">
          暂无绑定手机号
        </slot>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    Login() {
      //console.log(1)
      this.$router.push('/login')
    }
  },
}
</script>

<style>
.user-info {
  background-color: var(--color-tint);
  height: 90px;
  color: #fff;
}
.user-head {
  float: left;
  padding-top: 10px;
}
.user-content {
  padding-top: 20px;
}
.phone {
  font-size: 14px;
}
</style>