<template>
  <div class="home">
  <HelloWorld msg="COUCOU" :count="count"/>
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
