<template>
  <nav>
    <div class="icon">
      
    </div>
    <router-link :to="{name: 'Home'}">Home</router-link> 
    <!-- <router-link :to="{name: 'Players'}">Players</router-link>  -->
    <router-link :to="{name: 'Admin'}">Admin</router-link> 
    <router-link :to="{name: 'Contact'}">Contact</router-link> 
    <router-link :to="{name: 'About'}">About</router-link>
  </nav>
  <div class="container">
    <h1>Hello</h1>
  </div>
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

.logo {
  width: 100px;
}

nav {
  padding: 30px;
  background-color: rgba(157, 202, 184, 0.8);
}

nav a {
  position: relative;
  right: -300px;
  font-weight: bold;
  color: #2c3e50;
  margin-right: 20px;
  margin-left: 20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
