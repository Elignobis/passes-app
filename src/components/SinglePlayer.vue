<template>
  <div v-if="player" class="single">
    <router-link to="/players">
      <div class="backbutton">
        <h1>Back</h1>
      </div>
    </router-link>
    <div id="fullplayerbox">
      <div id="playerimage">
        <img :src="player.img_URL" :alt="player.name" />
      </div>
      <div id="playerbox">
<div id="playername">
        <h3>Player Name:</h3>
        <br>
        <h2>{{ player.name }}</h2>
      </div>
      <div id="playerage">
        <h3>Age:</h3>
        <br>
        <h2>{{ player.age }}</h2>
      </div>
<div id="playergender">
  <h3>Gender:</h3>
  <br>
<h2>{{ player.gender }}</h2>
</div>
      <div id="currentteam">
        <h3>Current Team:</h3>
        <br>
<h2>{{ player.currrentClub }}</h2>
      </div>
      <div id="nationalteam">
        <h3>National Team:</h3>
        <br>
<h2>{{ player.nationalTeam }}</h2>
      </div>
      <div id="playerprice">
        <h3>Contract Price</h3>
        <br>
 <h2>R: {{ player.price }}</h2>
      </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    player() {
      return this.$store.state.player
    }
  },
  mounted() {
    this.$store.dispatch('fetchPlayer', this.id)
  },

};
</script>


<style>
.backbutton {
  margin: auto;
  background-color: burlywood;
  width: 100px;
  height: 35px;
  border: 2px solid brown;
  border-radius: 5px;
  margin-bottom: 30px;
}

#fullplayerbox {
  display: flex;
  background-color: burlywood;
  border: 2px solid brown;
  border-radius: 5px;
}

#playerimage {
  display: flex;
  justify-content: start;
}

#playerbox {
  display: flex;
  flex-wrap: wrap;
}

#playername {
  background-color: gainsboro;
  border: 2px solid brown;
  border-radius: 5px;
  width: 220px;
  height: 90px;
  margin-right: 2px;
}

#playerage {
  background-color: gainsboro;
  border: 2px solid brown;
  border-radius: 5px;
   width: 220px;
  height: 90px;
  margin-right: 2px;
}

#playergender
{
   background-color: gainsboro;
  border: 2px solid brown;
  border-radius: 5px;
   width: 220px;
  height: 90px;
  margin-right: 2px;
}

#currentteam
{
    background-color: gainsboro;
  border: 2px solid brown;
  border-radius: 5px;
   width: 220px;
  height: 90px;
  margin-right: 2px; 
}

#nationalteam
{
      background-color: gainsboro;
  border: 2px solid brown;
  border-radius: 5px;
   width: 341px;
  height: 90px;
  margin-right: 2px; 
}

#playerprice{
        background-color: gainsboro;
  border: 2px solid brown;
  border-radius: 5px;
   width: 1245px;
  height: 205Gpx;
  margin-right: 2px;
}
</style>