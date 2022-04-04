<template>
  <div class="profile">
    <nav-bar>
      <template v-slot:center> 
        <div>用户中心</div>
      </template>
    </nav-bar>
    <user-info></user-info>
    <user-content></user-content>
    <user-other></user-other>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import UserInfo from '@/views/profile/childComps/UserInfo'
import UserContent from './childComps/UserContent.vue'
import UserOther from './childComps/UserOther.vue'
export default {
  components: { 
    NavBar,
    UserInfo,
    UserContent,
    UserOther,
  
  },

}
</script>

<style>

</style>