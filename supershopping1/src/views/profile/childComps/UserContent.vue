<template>
  <div class="content-all">
      <div class="user-all">
          <span class="user-number">0.00</span>元
          <div class="user-object">我的余额</div>
      </div>
      <div class="user-all">
          <span class="user-number">0</span>个
          <div class="user-object">我的优惠</div>
      </div>
      <div class="user-all">
          <span class="user-number">0</span>
          <div class="user-object">我的积分</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.content-all {
    display: flex;
    height: 80px;
}
.user-number {
    font-size: 25px;
    color: #ff5f3e;
    font-weight: bold;
}
.user-all {
    flex: 1;
    text-align: center;
    border-bottom: 8px solid #eee;
    border-right: 2px solid #eee;
    padding-top: 10px;
    font-size: 15px;
}
.user-object {
    padding-top: 5px;
}
</style>