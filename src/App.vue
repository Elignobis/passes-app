<template>
    <nav class="navbar">
  <div class="logo"><a href="/">Passes</a></div>
  <ul>
    <li><a href="/players">Players</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/admin">Admin</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
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
.navbar {
  height: 60px;
  width: 90vw;
  margin: 0 auto;
  /* margin-top: 25px; */
  padding-left: 1em;
  padding-right: 1em;
  box-sizing: border-box;
  display: block;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.15),
    0px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 9px;
  position: relative;
  background-color: #646e79;
  display: flex;
  align-items: center;
  justify-content: left;
  position: relative;
  z-index: 2;
}

.navbar .logo {
  text-transform: uppercase;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 300;
  font-size: 16pt;
}

.navbar .logo a {
  text-decoration: none;
  color: #fff;
}

.navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: 4em;
}

.navbar ul li {
  display: inline;
  text-decoration: none;
}

.navbar ul li a {
  padding: 0.25em 1em 0.25em 1em;
  color: #fff;
  text-decoration: none;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
}

.navbar a:hover {
  color: #777;
  transition-duration: 0.3s;
}
</style>
