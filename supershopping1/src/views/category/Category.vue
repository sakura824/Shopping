<template>
  <div id="category">
    <nav-bar>
      <template v-slot:center> 
        <div>商品分类</div>
      </template>
    </nav-bar>
    <scroll id="b">
      <tab-left :categories="categories" @selectItem="selectItem"></tab-left>
    </scroll>
      <scroll :data="[categoryData]" id="a">
          <tab-right-up :subcategories="showSubcategory"></tab-right-up>
          <tab-control :titles="['流行','新款','精选']" 
          @TabClick="TabClick"
          ></tab-control>
          <tab-right-down :category-detail="showCategoryDetail"></tab-right-down>
      </scroll>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'

import TabLeft from '@/views/category/childComps/TabLeft.vue'
import TabRightDown from '@/views/category/childComps/TabRightDown'
import {getCategory, getSubcategory, getCategoryDetail} from "../../network/category"
import Scroll from '../../components/common/scroll/Scroll.vue'
import TabRightUp from './childComps/TabRightUp.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
  
  export default {
    name: "Category",
    components: { 
      NavBar,
      TabLeft,
      Scroll,
      TabRightUp,
      TabRightDown,
      TabControl,
    }, 
    data() {
      return {
        categories: [],
        categoryData: {},
        currentIndex: -1,
        currentType: 'pop'
      }
    },
    computed: {
      showSubcategory() {
        if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
        if (this.currentIndex === -1) return []
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType];
      }
    },
    methods: {
      //右侧Tab栏监听
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
      },
      getCategory() {
        getCategory().then(res => {
          //把分类左侧数据请求过来
          //console.log(res);
          this.categories = res.data.category.list;
          //添加一个对象subcategories存放右侧上方数据
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          this.getSubcategories(0);
        })
      },
      getSubcategories(index) {
        this.currentIndex = index;
        const mailKey = this.categories[index].maitKey;
        //获取右侧上方数据存到subcategories中
        getSubcategory(mailKey).then(res => {
          //console.log(res);
          this.categoryData[index].subcategories = res.data;
          this.categoryData = {...this.categoryData}
          this.getCategoryDetail('pop')
          this.getCategoryDetail('new')
          this.getCategoryDetail('sell')
        })
      },
      getCategoryDetail(type) {
        //获取请求的minWallkey
        const M = this.categories[this.currentIndex].miniWallkey;
        getCategoryDetail(M,type).then(res => {
          //保存右下角数据
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
          //console.log(res);
        })
      },
      selectItem(index) {
        this.getSubcategories(index);
      },
    },
    created() {
      this.getCategory();
      console.log(this.categoryData);
    }
  }
    
</script>

<style scoped>
#category {
    height: 100vh;
    position: relative;
  }
  #a {
    position: absolute;
      top: 44px;
      left: 100px;
      bottom: 49px;
      overflow: hidden;
  }
  #b {
    position: absolute;
      top: 44px;
      left: 0;
      bottom: 49px;
      overflow: hidden;
  }
</style>