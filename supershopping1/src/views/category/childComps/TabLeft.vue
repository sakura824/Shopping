<template>
  <div id="tab-left" >
      <div class="tab-item" 
      v-for="(item,index) in categories" 
      :key="index"
      :class="{active: index === currentIndex}"
      @click="tabClick(index)"
      >
          {{item.title}}
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        currentIndex: 0
      }
  },
  props: {
      categories: {
          type: Array
      }
  },
  methods: {
      tabClick(index) {
          this.currentIndex = index;
          this.$emit('selectItem', index);
      }
  }
}
</script>

<style>
#tab-left {
    background-color: #f6f6f6;
    width: 100px;
    height: 100%;
    top: 44px;
    left: 0;
    overflow: hidden;
    box-sizing: border-box;
}
.tab-item {
    height: 45px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
}
.active {
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
}
</style>