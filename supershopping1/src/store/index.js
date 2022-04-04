
import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: []
  },
  mutations: {
    //mutations唯一目的计算修改state中的状态
    //mutations中的每一个方法尽可能完成的事件比较单一
    addCart(state,payload ){
        //console.log(payload);
      // 1.查看是否添加过
    const oldInfo = state.cartList.find(item => item.iid === payload.iid);
    // 2.+1或者新添加
    if (oldInfo) {
      oldInfo.count += 1;
    } else {
      payload.count = 1;
      payload.check = true;
      state.cartList.push(payload);
    }
    }
  },
  actions: {
  },
  modules: {
  }
})
