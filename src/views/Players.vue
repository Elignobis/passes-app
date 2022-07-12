<template>
  <div id="view-all">
    <div id="Title">
      <h1>Browse through our list of available Players</h1>
    </div>
    <div class="container">
      <div class="card" v-for="player in Players" :key="player" >
      <a href="">
        <img :src="player.img_URL">
     <div>Name: {{player.Fullname}}</div>
      <div>Age: {{player.Age}}</div>
      <div>Gender: {{player.Gender}}</div>
      <div>Current Club: {{player.Club}}</div>
      <div>R{{player.Price}}</div>
      </a>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  
}

img{
  width: 20px;
height: 30px;
}

a{
  text-decoration: none;
  color: brown;
}

a:hover{
  color: rgb(255, 70, 70);
}

a::after
{
  color: rgb(172, 157, 157);
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

.container
{
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
}

.card {
  margin: auto;
background-color: burlywood;
width: 290px;
height: 110px;
margin-top: 20px;
margin-bottom: 20px;
border: 2px solid brown;
  border-radius: 5px;
}

</style>

<script>
export default {
  data(){
    return{ 
 Players: [
    {
      Fullname: "Cristiano Ronaldo",
      Age: 37,
      img_URL: 'https://i.postimg.cc/8PBwf5kL/christiano.jpg',
      Gender: "Male",
      Club: "Manchester United F.C.",
      Price: 2275966335,
    },
    {
      Fullname: "Frenkie de Jong",
      Age: 25,
      img_URL:'https://i.postimg.cc/q7JSH4FX/frenkie.jpg',
      Gender: "Male",
      Club: "FC Barcelona",
      Price: 1419979252,
    },
    {
      Fullname: "Harry Maguire",
      Age: 29,
      img_URL:'https://i.postimg.cc/rw3jQckw/harryM.jpg',
      Gender: "Male",
      Club: "Manchester United F.C.",
      Price: 1489311320,
    },
    {
      Fullname: "Romelu Lukaku",
      Age: 29,
    img_URL:'https://i.postimg.cc/vTTxJg7F/lukaku2.jpg',
      Gender: "Male",
      Club: "Belgium national football team",
      Price: 1971642075,
    },
    {
      Fullname: "Timo Werner",
      Age: 26,
      img_URL:'https://i.postimg.cc/901570sM/timo.jpg',
      Gender: "Male",
      Club: "Chelsea F.C.",
      Price: 959029283,
    },
    {
      Fullname: "Vivianne Miedema",
      Age: 25,
      img_URL:'https://i.postimg.cc/m2rKnb0Y/vivianne.jpg', 
      Gender: "Female",
      Club: "Arsenal W.F.C.",
      Price: 6866315,
    },
    {
      Fullname: "Marta Vieira da Silva",
      Age: 36,
      img_URL:'https://i.postimg.cc/nM8V3C01/marta.jpg',
      Gender: "Female",
      Club: "Brazil women's national football team",
      Price: 6728538,
    },
    {
      Fullname: "Sam Kerr",
      Age: 28,
      img_URL:'https://i.postimg.cc/BQgQTQ22/sam.jpg', 
      Gender: "Female",
      Club: "Chelsea F.C. Women",
      Price: 10162188,
    },
    {
      Fullname: "Mapi Leon",
      Age: 27,
      img_URL:'https://i.postimg.cc/SsTJfSBZ/maria.jpg',
      Gender: "Female",
      Club: "FC Barcelona Femení",
      Price: 16894014,
    },
    {
      Fullname: "Sakina Karchaoui",
      Age: 26,
      img_URL:'https://i.postimg.cc/rFLKGP32/sakina.jpg',
      Gender: "Female",
      Club: "Paris Saint-Germain Féminine",
      Price: 50610207,
    },
  ]
    }
  }
 
};
</script>