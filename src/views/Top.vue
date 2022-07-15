<template>
  <div class="top">
    <h1>Top Prospects</h1>
    <h3>PASSES</h3>
    <h5>Player Administration</h5>
    <button @click="$router.push('Players')">All Players</button>
    <button @click="$router.push('Top')">Top Prospects</button>
    <button @click="$router.push('Male')">Male Players</button>
    <button @click="$router.push('Female')">Female Players</button>
  </div>
</template>

<script>
export default {
};
</script>
