<template>
  <div id="app">
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link to="/about">Заявка</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


nav {
  
  display: flex;
  justify-content: space-between;
  margin: 2% 5% 0 5%;

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 50px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #190bda;
    }
  }
}

@media print {
	nav{
    display: none;
  }
}

@media screen and (min-width: 220px) and (max-width: 1000px) {
 nav{
  a {
    font-size: 25px;
  }
 }
}

@media screen and (min-width: 320px) and (max-width: 600px) {
 #app{

  padding-top: 5%;
 }
}

</style>
