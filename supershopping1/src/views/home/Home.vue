<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center> 
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
        @TabClick="TabClick"
        ref="tabControl1" 
        class="tab-control2"
        v-show="isTabFixed"
      ></tab-control>
    <scroll class="content1" 
    :probe-type="3" 
    @scroll="contentScroll" 
    ref="scroll2" 
    :pull-up-load="true"
    @pullingUp="LoadMore"
    >
      <home-swiper :banners="banners"
       @swiperImageLoad="swiperImageLoad"
       >
       </home-swiper>
      <recommends-view :recommends="recommends"></recommends-view>
      <week-popular />
      <tab-control :titles="['流行','新款','精选']" 
        @TabClick="TabClick"
        ref="tabControl2"
      ></tab-control>
      <good-list :goods="goods[currentType].list"></good-list>
    </scroll>
    <back-top @click="backClick" v-show="showFixedSearch"></back-top>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSwiper from '../home/childComps/HomeSwiper.vue'
import RecommendsView from '../home/childComps/RecommendView.vue'
import WeekPopular from '../home/childComps/WeekPopular.vue'

import NavBar from '../../components/common/navbar/NavBar.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodList from '@/components/content/goods/GoodList'
import BackTop from '@/components/content/backTop/BackTop'
import Scroll from '@/components/common/scroll/Scroll'

import { getHomeMulitidata,getHomeGoods } from '../../network/home'


export default {
  name: 'Home',
  components: {
    HomeSwiper,
    RecommendsView,
    WeekPopular,
    NavBar,
    TabControl,
    GoodList,
    BackTop,
    Scroll
  },
  data() {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      showFixedSearch: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  activated() {
    this.$refs.scroll2.scroll.refresh();
    this.$refs.scroll2.scroll.scrollTo(0,this.saveY,0);
  },
  deactivated() {
    //离开时
    this.saveY = this.$refs.scroll2.scroll.y;
  },
  created() {
    this.getHomeMulitidata();
    //请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods:{
    //事件监听方法
    TabClick(index){
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
      
        case 1:
          this.currentType = 'new'
          break;

          case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position){
      if (position.y<-1000) {
        this.showFixedSearch = true
      } else {
        this.showFixedSearch = false
      }
      //决定tabcontrol是否吸顶
      this.isTabFixed = -(position.y) > this.tabOffsetTop
    },
    backClick() {
      this.$refs.scroll2.scroll.scrollTo(0,0,500)
    },
    LoadMore() {
      //获取下一页数据  
      this.getHomeGoods(this.currentType);
      //刷新
      this.$refs.scroll2.scroll.refresh();
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    //网络请求方法
    getHomeMulitidata(){
      getHomeMulitidata().then(res => {
      //console.log(res);
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
    },
    getHomeGoods(type){
      const page=this.goods[type].page + 1;
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page+=1;
        
        this.$refs.scroll2.scroll.finishPullUp();
      })
    },
  
  }
  
}
</script>
<style>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    top: 44px;
    z-index: 9;
  }
.content1 {
    /* height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px; */
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
.tab-control2{
  position: relative;
  z-index: 20;
}
</style>
