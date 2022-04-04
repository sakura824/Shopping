<template>
  <div class="cart-pay-bar">
    <check-button class="check-all" v-model="ChangeAll" @click="changeClick"></check-button>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="count" @click="BuyClick">结算:({{$store.state.cartList.length}})</span>
  </div>
</template>

<script>
  import CheckButton from '@/components/content/button/CheckButton'

	export default {
		name: "BottomBar",
    components: {
		  CheckButton
    },
    computed: {
		  totalPrice() {
        const cartList = this.$store.state.cartList;
        return cartList.filter(item => {
          return item.check
        }).reduce((preValue, item) => {
          return preValue + item.count * item.realPrice
        }, 0).toFixed(2)
      },
      ChangeAll() {
        return this.$store.state.cartList.every(item => item.check);
      }
    },
    methods: {
      changeClick() {
        if (this.ChangeAll) {
          this.$store.state.cartList.forEach(item => item.check = false);
          console.log("全不选");
        } else {
          this.$store.state.cartList.forEach(item => item.check = true);
          console.log("全选");
        }
      },
      BuyClick() {
        if (!this.ChangeAll) {
          alert("您还没有选择购买商品");
        } else {

        }
      }
    }
	}
</script>

<style scoped>
  .cart-pay-bar {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

   .check-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

    .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

   .count {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
