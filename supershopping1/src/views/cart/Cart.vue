<template>
  <div class="cart">
    <nav-bar class="nav-bar">
        <template v-slot:center> 
          <div>购物车({{$store.state.cartList.length}})</div>
        </template>
    </nav-bar>
    <cart-list></cart-list>
    <cart-pay-bar></cart-pay-bar>
  </div>
  
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import CartList from './childComps/cartList.vue'
import CartPayBar from './childComps/CartPayBar.vue'
export default {
  components: { 
    NavBar,
    CartList ,
    CartPayBar
  },

}
</script>
<style>
.nav-bar {
  background-color: var(--color-tint);
    color: white;
}
</style>