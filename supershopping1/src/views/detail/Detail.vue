<template>
  <div id="detail">
    <detail-nav-bar  class="detail-nav" @titleClick="titleClick" ref="detailNav"/>
    <scroll class="detail-content1" ref="scrolla" @scroll="contentScroll" :probe-type="3">
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
    <deatil-param-info :param-info="paramInfo" ref="params"></deatil-param-info>
    <deatil-comment-info :comment-info="commentInfo" ref="comment"></deatil-comment-info>
    <good-list :goods="recommends" ref="recommend"></good-list>
    </scroll>  
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
    <back-top @click="backClick" v-show="showFixedSearch"></back-top>
  </div>
</template>

<script>
import DetailNavBar from '@/views/detail/childComps/DetailNavBar'
import DetailSwiper from '@/views/detail/childComps/DetailSwiper'
import DetailBaseInfo from '@/views/detail/childComps/DetailBaseInfo'
import DetailShopInfo from '@/views/detail/childComps/DetailShopInfo'
import DetailGoodsInfo from '@/views/detail/childComps/DetailGoodsInfo'
import DeatilParamInfo from '@/views/detail/childComps/DeatilParamInfo'
import DeatilCommentInfo from '@/views/detail/childComps/DeatilCommentInfo'
import DetailBottomBar from '@/views/detail/childComps/DetailBottomBar'

import Scroll from '@/components/common/scroll/Scroll'
import GoodList from '@/components/content/goods/GoodList'
import BackTop from '@/components/content/backTop/BackTop'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '@/network/detail'


export default {
    name: 'Detail',
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DeatilParamInfo,
        DeatilCommentInfo,
        GoodList,
        DetailBottomBar,
        BackTop
    },
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo:{},
            paramInfo: {},
            commentInfo: {},
            recommends: [],
            navbarY: [],
            currentIndex: 0,
            showFixedSearch: false
        }
    },
    methods: {
        titleClick(index) {
            this.$refs.scrolla.scroll.scrollTo(0, -this.navbarY[index], 100)
        },
        contentScroll(position) {
            //console.log(position);
            //获取当前的y值
            const positionY = -position.y;

            let length = this.navbarY.length;
            for (let i = 0; i < length - 1; i++) {
                if ((this.currentIndex !== i) && ((positionY >= this.navbarY[i] && positionY < this.navbarY[i+1] && i < length - 1))) {
                    this.currentIndex = i;
                    this.$refs.detailNav.currentIndex = this.currentIndex;
                }
            }

            //是否显示回到顶部
            if (position.y<-1000) {
                this.showFixedSearch = true
            } else {
                this.showFixedSearch = false
            }
        },
        backClick() {
            this.$refs.scrolla.scroll.scrollTo(0,0,500);
        },
        addCart() {
            //获取购物车需要展示的数据
            const product = {};
            product.image = this.topImages[0];
            product.title = this.goods.title;
            product.desc = this.goods.desc;
            product.price = this.goods.newPrice;
            product.iid = this.iid;
            product.realPrice = this.goods.realPrice;
            //添加到购物车
            this.$store.commit("addCart",product);
            alert("添加成功");
        }
    },
    created() {
        //获取详情页id
        this.iid = this.$route.params.iid;
        //2.根据iid请求详情页数据
        getDetail(this.iid).then(res =>{
            console.log(res.result);

            //1.获取图片轮播数据
            this.topImages = res.result.itemInfo.topImages;

            //2.获取商品信息
            this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services);

            //3.获取商家信息
            this.shop = new Shop(res.result.shopInfo);

            //4.保存商品的详情数据
            this.detailInfo = res.result.detailInfo;

            //5.获取参数页面信息数据
            this.paramInfo = new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule);

            //6.获取评论数据
            if (res.result.rate.list) {
            this.commentInfo = res.result.rate.list[0];
            }

            
            this.$nextTick(() => {  //$nextTick()是函数自己调用的
                setTimeout(() =>{
                    this.navbarY.push(0);
                    this.navbarY.push(this.$refs.params.$el.offsetTop);
                    this.navbarY.push(this.$refs.comment.$el.offsetTop);
                    this.navbarY.push(this.$refs.recommend.$el.offsetTop);
                    this.navbarY.push(Number.MAX_VALUE);
                    //console.log(this.navbarY);
                    //console.log(this.$refs.params.$el.offsetTop);
                },2000)
            })
        });
        getRecommend().then(res => {
            this.recommends = res.data.list;
        }) 
    },
}
</script>

<style scoped>
#detail {
    height: 100vh;
}

.detail-content1 {
    /* height: calc(100% - 44px);
    margin-top: 44px;
    overflow: hidden; */

    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>