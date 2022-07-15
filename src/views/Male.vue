<template>
  <div class="male">
    <h1>Male Players</h1>
    <h3>PASSES</h3>
    <h5>Player Administration</h5>
    <button @click="$router.push('Players')">All Players</button>
    <button @click="$router.push('Top')">Top Prospects</button>
    <button @click="$router.push('Male')">Male Players</button>
    <button @click="$router.push('Female')">Female Players</button>
  </div>
  <div class="container">
    <div v-for="player in players" class="flip-card" :key="player">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h2 class="name">{{ player.name }}</h2>
          <img :src="player.img_URL" alt="" width="200" class="custom-img" />
        </div>

        <div class="flip-card-back">
          <p class="age">Age: {{ player.age }}</p>
          <p class="gender">Gender: {{ player.gender }}</p>
          <p class="currentClub">Current Club:{{ player.currentClub }}</p>
          <p class="nationalTeam">National Team{{ player.nationalTeam }}</p>
          <p class="price">Price: {{ player.price }}</p>
          <!-- <p>{{ genderArray }}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

