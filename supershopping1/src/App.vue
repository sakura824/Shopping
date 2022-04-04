<template>
  <div id="nav">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <main-tabbar v-if="this.$route.meta.showTab"></main-tabbar>
  </div>
  
</template>

<script>
import MainTabbar from "./components/content/MainTabbar.vue"


export default ({
 components:{
   MainTabbar
 }
})
</script>

<style>
@import"./assets/css/base.css"
</style>


