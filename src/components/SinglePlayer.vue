<template>
  <div v-if="player">
    <router-link to="/players">
      <div class="backbutton">
        <h1>Back</h1>
      </div>
    </router-link>
      <img :src="player.img_URL" :alt="player.name"/>
      <h1>{{ player.name }}</h1>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed:{
    player(){
      return this.$store.state.player
    }
  },
  mounted(){
    this.$store.dispatch('fetchPlayer', this.id)
  },

};
</script>

<style>
.backbutton{
  margin: auto;
  background-color: burlywood;
  width: 100px;
  height: 35px;
    border: 2px solid brown;
  border-radius: 5px;
}

</style>