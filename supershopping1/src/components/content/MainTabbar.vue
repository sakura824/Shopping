<template>
  <tab-bar>
      <tab-bar-item path="/home" sizeColor="blue">
        <template v-slot:item-icon>
          <img src="../../assets/img/tabbar/home.png" alt="">
        </template>
        <template v-slot:item-icon-change>
          <img src="../../assets/img/tabbar/home-o.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category" sizeColor="blue">
        <template v-slot:item-icon>
          <img src="../../assets/img/tabbar/category.png" alt="">
        </template>
        <template v-slot:item-icon-change>
          <img src="../../assets/img/tabbar/category-o.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart" sizeColor="blue">
        <template v-slot:item-icon>
          <img src="../../assets/img/tabbar/cart.png" alt="">
        </template>
        <template v-slot:item-icon-change>
          <img src="../../assets/img/tabbar/cart-o.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
          </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" sizeColor="blue">
        <template v-slot:item-icon>
          <img src="../../assets/img/tabbar/my.png" alt="">
        </template>
        <template v-slot:item-icon-change>
          <img src="../../assets/img/tabbar/my-o.png" alt="">
        </template>
        <template v-slot:item-text>
          <div>用户</div>
          </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>

import tabBar from '../../components/common/tabbar/tabBar.vue'
import tabBarItem from '../../components/common/tabbar/tabBarItem.vue'
export default {
    components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style>

</style>