import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex"

Vue.use(Vuex);//inject vuex to every sub component
Vue.config.productionTip = false

const store=new Vuex.Store({
  state:{
    total:0
  },
  mutations:{
    increment(state,n){
      state.total+=n;
    }
  }
});

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
