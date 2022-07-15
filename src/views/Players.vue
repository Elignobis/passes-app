<template>
  <div id="view-all">
    <div id="Title">
      <h1>Browse through our list of available Contracts</h1>
    </div>
    <div class="container">
      <div v-for="player in players" :key="player" class="card">
        <router-link :to="{name: 'SinglePlayer', params:{id: player.id}}">
          <div id="playersname" class="name">
            <h2>{{ player.name }}</h2>
          </div>
          <br />
            <img :src="player.img_URL" />
          <br />
          <div id="Price">
            <h3>Contract Price:<br>R{{ player.price }}</h3>
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

#playersname {
  text-align: center;
}

.card {
  text-align: start;
  margin: auto;
  background-color: burlywood;
  width: 240px;
  height: 410px;
  margin-top: 10px;
  margin-left: 2.5px;
  border: 2px solid brown;
  border-radius: 5px;
}

#Price{
  text-align: center;
}

</style>