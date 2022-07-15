<template>
  <div id="view-all">
    <div id="Title">
      <h1>Browse through our list of available Contracts</h1>
    </div>
    <input type="text" v-model="search" placeholder="search">
    <div class="container">
      <div v-for="player in players" :key="player" class="card">
        <router-link :to="{ name: 'SinglePlayer', params: { id: player.id } }">
            <h2>{{ player.name }}</h2>
          <br />
          <img :src="player.img_URL" />
          <br />
            <h3>Contract Price:<br>R{{ player.price }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return{
      search: ""
    }
  },
  methods: {
    sortPrice() {
      $this.$store.commit("sortPlayersByPrice");
    }
  },
  mounted() {
    this.$store.dispatch('getPlayers')
  },
  computed: {
    players() {
      return this.$store.state.players?.filter(player => {
        let isMatch = true;
        if (!player.name.toLowerCase().includes(this.search.toLowerCase())) { isMatch = false } 
      return isMatch
      
    });
    },

  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

input{
  margin-top: 10px;
background-color: blue;
color: lightblue;
text-align: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
width: 200px;
height: 20px;
}

img {
  width: 240px;
  height: 300px;
  border-top: 2px solid lightblue;
  border-bottom: 2px solid lightblue;
  border-radius: 5px;
  object-fit: cover;
}

a {
  text-decoration: none;
  color: lightblue;
}

a:hover{
  color: rgb(59, 59, 223);
}

#view-all {
  text-align: center;
  background-color:rgb(8, 8, 101) ;
}

#Title {
  background-color: rgb(59, 59, 223);
  border: 2px solid lightblue;
  border-radius: 5px;
  color: lightblue;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}


.card {
  text-align: center;
  margin: auto;
  background-color: rgb(59, 59, 223);
  color: lightblue !important;
  width: 240px;
  height: 410px;
  margin-top: 10px;
  margin-left: 2.5px;
  border: 2px solid lightblue;
  border-radius: 5px;
}

.card:hover {
  background-color: lightblue;
}

@media only screen and (min-width: 375px) {
input{
margin-bottom: 10px;

} 

 .card{
  margin: auto;
  margin-bottom: 10px;
 }

 .card:hover {
  background-color: lightblue;
}

a:hover{
  color: rgb(59, 59, 223);
}


}


</style>