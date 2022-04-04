<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" :key="index" :class="{active1: index===currentIndex}"
        class="tab-control-item" @click="tabClick(index)"
      >
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        tabClick(index){
            this.currentIndex=index;
            this.$emit('TabClick',index)
        }
    }
}
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    background-color: #fff;
}
.tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
    
}
.tab-control-item span{
    padding: 5px;
}
.active{
    color: var(--color-high-text);
    
}
.active1 span{
border-bottom: 3px solid var(--color-tint);

}
</style>