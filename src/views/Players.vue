<template>
  <div class="players">
    <h1>Players</h1>
    <h3>PASSES</h3>
    <h5>Player Administration</h5>
    <button @click="$router.push('Players')">All Players</button>
    <button @click="$router.push('Top')">Top Prospects</button>
    <button @click="$router.push('Male')">Male Players</button>
    <button @click="$router.push('Female')">Female Players</button>
    <div class="container">
      <div v-for="player in players" :key="player" class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h2 class="name">{{ player.name }}</h2>
            <img :src="player.img_URL" alt="" width="200" class="custom-img"/>
          </div>

          <div class="flip-card-back">
            <p class="age">Age: {{ player.age }}</p>
            <p class="gender">Gender: {{ player.gender }}</p>
            <p class="currentClub">Current Club:{{ player.currentClub }}</p>
            <p class="nationalTeam">National Team{{ player.nationalTeam }}</p>
            <p class="price">Price: {{ player.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    players() {
      return this.$store.state.players;
    },
  },
};
</script>

<style>
body{
    overflow: scroll;
}
.container {
display:grid;
grid-template-columns:repeat(3 ,1fr);
gap: 3em;
align-items: start; 
justify-items: center;
grid-template-areas: 
"all all all"
"left middle right";
margin-top: 50px;
position: relative;
}

.custom-img {
    width: 100%;
    height: 15vw;
    object-fit: cover;
    object-position: 0 0;

}
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: rgb(7, 7, 7);
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
}
</style>
