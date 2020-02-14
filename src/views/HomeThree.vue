<template>
  <div class="home">
  <img alt="Vue logo" src="../assets/nedry2.gif">
  <HelloWorld msg="Tu veux voir ma bite ?" :count="count"/>
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
