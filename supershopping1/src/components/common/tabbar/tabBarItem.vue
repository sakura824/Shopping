<template>
  <div class="tab_bar_item" @click="itemClick">
      <div v-if="!isChange"><slot  name="item-icon"></slot></div>
      <div v-else><slot  name="item-icon-change"></slot></div>
      <div :style="changeStyle"><slot  name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name:"tabBarItem",
    props:{
        path:String,
        sizeColor:{
            type:String,
            default:'red'
        }
            },
    data(){
        return {
           // isChange:true,
        }
    },
    computed:{
        isChange(){
            return this.$route.path.indexOf(this.path)!==-1;
        },
        changeStyle(){
            return this.isChange ? {color:this.sizeColor} : {}
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path).catch(err=>err)
        }
    }
}
</script>

<style>
.tab_bar_item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab_bar_item img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
.change{
    color: var(--color-tint);
}
</style>