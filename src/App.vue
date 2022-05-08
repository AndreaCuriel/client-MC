<template>
  <nav>
    <router-link to="/"><h2>Woopa!!</h2></router-link> 
    <router-link to="/missionCommanders">Mission Commanders</router-link>
    <router-link to="/addMissionCommander">Agregar Mission Commander</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 3%;
}

nav a.router-link-exact-active {
  color: #df42d7;
}
</style>
