<template>
  <div id="app">
    <nav>
    <side-bar />
    </nav>


    <router-view/>
  </div>
</template>

<script setup>
  import sideBar from './views/sideBar.vue'

</script> 
  

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-columns: auto 1fr;
  background:rgb(240, 245, 245);
  height: 100%;
  

		@media (max-width: 1024px) {

		}
    @media print{
      nav{
        display: none;
      }
    }

}





</style>
