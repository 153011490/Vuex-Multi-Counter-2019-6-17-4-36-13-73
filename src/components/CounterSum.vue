<template>
  <div>
    <div v-for="index in (parseInt(this.$store.getters.getCountNumber)||0)" :key="index">
      <CounterGroup></CounterGroup>
    </div>
    <div>
        总计:{{this.$store.state.total}}
    </div>
  </div>
</template>

<script>

import CounterGroup from './CounterGroup';

export default {
  name: 'CounterSum',
  components:{
      CounterGroup
  }
}
</script>

