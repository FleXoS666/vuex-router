<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <p>{{ count }} <button v-on:click="increment">+</button> </p>
      <p>{{ $store.state.counterGlobal }} <button v-on:click="incrementGlobal">+</button> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    count: Number,
    globalCounter: Number
  },computed:{
globalCounterValue: function(){
return this.$store.statecounterGlobal
}
  },
  methods:{
    increment(){
      this.count++
    },
    incrementGlobal(){
      this.$store.commit('incrementGlobalCounter')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
