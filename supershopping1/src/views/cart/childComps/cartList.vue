<template>
  <div class="cart-list">
      <scroll class="cart-content" :probe-type="3" ref="cartScroll">
          <cart-list-item v-for="(item,index) in $store.state.cartList" :key="index" :product="item"></cart-list-item>
      </scroll>
  </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll.vue'
import CartListItem from './cartListItem.vue'
export default {
  components: { Scroll, CartListItem },
  activated() {
      this.$refs.cartScroll.scroll.refresh(); //对购物车刷新，不然添加数据不能滚动
  }
}
</script>

<style >
.cart-list {
    height: 100vh;
}
.cart-content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
</style>