<template>
  <div id="app" align="center">
    请输入：<input type="text" v-model="counter"><br>
    <counter-sum :counter="counter"></counter-sum>
  </div>
</template>

<script>
//import { METHODS } from 'http';
import CounterSum from './components/CounterSum.vue';

export default {
  name: 'app',
  data(){
    return{
      counter:1
    };
  },
  components: {
    CounterSum
  }
}
</script>

