<template>
    <!-- <nav class="navbar">
  <div class="logo"><a href="/">Passes</a></div>
  <ul>
    <li><a href="/players">Players</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/admin">Admin</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav> -->
<nav>
  <div class="navbar">
    <div class="container nav-container">
      <input class="checkbox" type="checkbox">
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
      <div class="name">
        <h1>PASSES</h1>
      </div>
      <div class="menu-items">
        <li><a href="#">Home</a></li>
        <li><a href="#">Players</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Admin</a></li>
        <li><a href="#">Contact</a></li>
      </div>
    </div>
  </div>
</nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
/* .navbar {
  height: 60px;
  width: 90vw;
  margin: 0 auto;
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
  z-index: 999;
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
  color: #03a9f4;
  transition-duration: 0.3s;
} */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1050px;
  width: 90%;
  margin: auto;
}

.navbar{
  width: 100%;
  box-shadow: 0 1px 4px rgb(146, 161, 176 / 15%);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
}

.navbar .menu-items {
  display: flex;
}

.navbar .nav-container li {
  list-style: none;
}

.navbar .nav-container a {
  text-decoration: none;
  color: #0e2431;
  font-weight: 500;
  font-size: 1.2rem;
  padding: 0.7rem;
}

.navbar .nav-container a:hover{
  font-weight: bolder;
}

.nav-container{
  display: block;
  position: relative;
  height: 60px;
}

.nav-container .checkbox {
  position: absolute;
  display: block;
  height: 32px;
  width: 32px;
  top: 20px;
  left: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

nav-container .hamburger-lines {
  height: 26px;
  width: 32px;
  top: 20px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-container .hamburger-lines .line{
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #0e2431;
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2{
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3{
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

.navbar .menu-items {
  padding-top: 120px;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
  height: 100vh;
  width: 100%;
  transform: translate(-150%);
  display: flex;
  flex-direction: column;
  margin-left: -40px;
  padding-left: 50px;
  transition: transform 0.5s ease-in-out;
  text-align: center;
}


</style>
