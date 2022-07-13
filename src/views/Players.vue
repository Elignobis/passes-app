<template>
  <div id="view-all">
    <div id="Title">
      <h1>Browse through our list of available Contracts</h1>
    </div>
    <div class="container">
      <div v-for="player in players" :key="player" class="card">
        <router-link :to="{name: 'SinglePlayer', params:{id: player.id}}">
          <div id="playername" class="name">
            <h3>{{ player.name }}</h3>
          </div>
          <br />
            <img :src="player.img_URL" />
          <br />
          <div>
            <h4>Age: {{ player.age }}</h4>
          </div>
          <br />
          <div>
            <h4>Gender: {{ player.gender }}</h4>
          </div>
          <br />
          <div>
            <h4>Club: {{ player.currrentClub }}</h4>
          </div>
          <br />
          <div>
            <h4>Contract Price: R{{ player.price }}</h4>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  mounted(){
    this.$store.dispatch('getPlayers')
  },
  computed: {
    players() {
      return this.$store.state.players;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

img {
  margin-top: 20px;
  width: 240px;
  height: 300px;
  border-top: 2px solid brown;
  border-bottom: 2px solid brown;
  border-radius: 5px;
  object-fit: cover;
}

a {
  text-decoration: none;
  color: brown;
}

a:hover {
  color: rgb(255, 70, 70);
}

#view-all {
  text-align: center;
}

#Title {
  background-color: burlywood;
  border: 2px solid brown;
  border-radius: 5px;
  color: brown;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#playername {
  text-align: center;
}

.card {
  text-align: start;
  margin: auto;
  background-color: burlywood;
  width: 240px;
  height: 515px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid brown;
  border-radius: 5px;
}

</style>