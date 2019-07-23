<template>
  <div id="app" align="center">
    请输入：<input type="text" v-model="getCounterNumber"><br>
    <counter-sum></counter-sum>
  </div>
</template>

<script>
//import { METHODS } from 'http';
import CounterSum from './components/CounterSum.vue';

export default {
  name: 'app',
  components: {
    CounterSum
  },
  computed:{
    getCounterNumber:{
        get(){ return this.$store.getters.getCountNumber; },
        set(val){ this.$store.commit("updateCounterNumber", val);}
    }
  }
}
</script>

