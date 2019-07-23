import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex"

Vue.use(Vuex);//inject vuex to every sub component
Vue.config.productionTip = false

const store=new Vuex.Store({
  state:{
    countNumber:2,
    total:0
  },
  getters:{
    getCountNumber(state){
      return state.countNumber;
    }
  },
  mutations:{
    increment(state,n){
      state.total+=n;
    },
    updateCounterNumber(state,n){
      state.countNumber=n;
    }
  }
});

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
