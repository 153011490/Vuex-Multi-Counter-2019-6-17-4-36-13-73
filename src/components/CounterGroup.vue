<template>
  <div>
    <span>{{count}}</span><br>
    <button @click="add">点我+</button>
    <button @click="sub">点我-</button>
  </div>
</template>

<script>
export default {
  name: 'CounterGroup',
  data:function(){
    return{
      count:0
    };
  },
  methods:{
    add:function(){
     this.$store.commit('increment',1);
     this.count++;
     this.$emit('calculate',1);
    },
    sub:function(){
     this.$store.commit('increment',-1);
     this.count--;
     this.$emit('calculate',-1);
    }
  },
  beforeDestroy(){
    const self=this;
    self.$store.state.total-=self.count;
  }
}
</script>

