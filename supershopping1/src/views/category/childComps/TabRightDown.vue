<template>
    <div class="right-down">
        <goods-list-item v-for="(item,index) in categoryDetail" :key="index" :goods-item="item" class="item-img"></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from '../../../components/content/goods/GoodsListItem.vue'
export default {
  components: { 
    GoodsListItem
  },
  props: {
      categoryDetail: {
          type: Array,
          default() {
              return []
          }
      }
  }

}
</script>

<style>
.right-down {
    flex-wrap: wrap;
    display: flex;
}
.item-img {
    width: 45%;
    margin-left: 10px;
}
</style>