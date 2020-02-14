<template>
  <div id="app">
    <div id="nav">
     <transition name="slide-fade"><router-link to="/">HomeOne</router-link></transition> |
      <router-link to="/Home2">HomeTwo</router-link> |
      <router-link to="/Home3">HomeThree</router-link> 
      <span v-if="$store.state.counterGlobal >= 10"> |
      <router-link  to="/HotBabes.com">HotBabes.com</router-link> </span>
    </div>
    <keep-alive><router-view/></keep-alive>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>
