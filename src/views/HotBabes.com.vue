<template>
  <div class="home">
    <img alt="Vue logo" src="http://babeholder.pixoil.com/img/400">
    <HelloWorld msg="BRAVO !!!! Voivi ton cadeau" :count="count"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
  return{
  'count' : 0
  }
}
}
</script>
