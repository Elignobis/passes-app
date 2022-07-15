<template>
  <div v-if="player" class="single">
    <router-link to="/players">
      <div class="backbutton">
        <h1>Back</h1>
      </div>
    </router-link>
    <div id="fullplayerbox">
      <div id="playerimage">
        <img :src="player.img_URL" :alt="player.name" id="picture"/>
      </div>
      <div id="playerbox">
        <div class="playerdetails">
          <h2>Player Name:</h2>
          <br>
          <h1>{{ player.name }}</h1>
        </div>
        <div class="playerdetails">
          <h2>Age:</h2>
          <br>
          <h1>{{ player.age }}</h1>
        </div>
        <div class="playerdetails">
          <h2>Gender:</h2>
          <br>
          <h1>{{ player.gender }}</h1>
        </div>
        <div class="playerdetails">
          <h2>Current Team:</h2>
          <br>
          <h1>{{ player.currrentClub }}</h1>
        </div>
        <div class="playerdetails">
          <h2>National Team:</h2>
          <br>
          <h1>{{ player.nationalTeam }}</h1>
        </div>
        <div class="playerdetails">
          <h2>Contract Price</h2>
          <br>
          <h1>R{{ player.price }}</h1>
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
.single{
    text-align: center;
  background-color:rgb(8, 8, 101) ;
}

.backbutton {
  margin: auto;
  background-color: rgb(53, 53, 155) ;
  width: 100px;
  height: 35px;
  border: 2px solid lightblue;
  border-radius: 5px;
  color: white;
  margin-top: 20px;
text-decoration: none;
}

#fullplayerbox {
  display: flex;
  flex-direction: row;
  background-color: rgb(59, 59, 223);
   border: 2px solid lightblue;
  border-radius: 5px;
}

#picture
{
  width: 340px;
  height: 633px;
}

#playerimage {
  display: flex;
  justify-content: start;
}

#playerbox {
  display: flex;
  flex-wrap: wrap;
}

.playerdetails{
  background-color: rgb(53, 53, 155);
   border: 2px solid lightblue;
  border-radius: 5px;
  width: 1148px;
  height: 100px;
  margin-right: 2px;
  color: lightblue;
}

.playerdetails:hover{
  background-color: lightblue;
  color: rgb(53, 53, 155);
}

@media only screen and (min-width: 374px) and (max-width:776px){
 
#picture{
  width: 375px;
  margin: auto;
}

#fullplayerbox{
  display: flex;
  flex-direction: column;
}

.playerdetails{
  font-size: 0.7rem;
  font-weight:bold;
}

.playerdetails:hover{
  background-color: lightblue;
  color: rgb(53, 53, 155);
}

}


</style>