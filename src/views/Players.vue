<template>
  <div id="view-all">
    <div id="Title">
      <h1>Browse through our list of available Players</h1>
    </div>
    <div class="container">
       <div class="card">
        <div id="playername"><h3>Cristiano Ronaldo</h3></div>
        <br>
        <img src="https://i.postimg.cc/8PBwf5kL/christiano.jpg">
        <br>
      <div><h4>Age: 37 </h4> </div>
      <br>
      <div><h4>Gender: Male</h4></div>
      <br>
      <div><h4>Club: Manchester United F.C.</h4> </div>
      <br>
      <div><h4>R 2275966335</h4></div>
      </div>
        <div class="card">
        <div id="playername"><h3>Frenkie de Jong</h3></div>
        <br>
        <img src="https://i.postimg.cc/q7JSH4FX/frenkie.jpg">
        <br>
      <div><h4>Age: 25 </h4> </div>
      <br>
      <div><h4>Gender: Male</h4></div>
      <br>
      <div><h4>Club: FC Barcelona</h4> </div>
      <br>
      <div><h4>R 1419979252</h4></div>
      </div>
       <div class="card">
        <div id="playername"><h3>Harry Maguire</h3></div>
        <br>
        <img src="https://i.postimg.cc/rw3jQckw/harryM.jpg">
        <br>
      <div><h4>Age: 29 </h4> </div>
      <br>
      <div><h4>Gender: Male</h4></div>
      <br>
      <div><h4>Club: Manchester United F.C.</h4> </div>
      <br>
      <div><h4>R1489311320</h4></div>
      </div>
       <div class="card">
        <div id="playername"><h3>Romelu Lukaku</h3></div>
        <br>
        <img src="https://i.postimg.cc/vTTxJg7F/lukaku2.jpg">
        <br>
      <div><h4>Age: 29</h4> </div>
      <br>
      <div><h4>Gender: Male</h4></div>
      <br>
      <div><h4>Club: Belgium national football team</h4> </div>
      <br>
      <div><h4>R1971642075</h4></div>
      </div>
       <div class="card">
        <div id="playername"><h3>Timo Werner</h3></div>
        <br>
        <img src="https://i.postimg.cc/901570sM/timo.jpg">
        <br>
      <div><h4>Age: 26</h4> </div>
      <br>
      <div><h4>Gender: Male</h4></div>
      <br>
      <div><h4>Club: Chelsea F.C.</h4> </div>
      <br>
      <div><h4>R959029283</h4></div>
      </div>
       <div class="card">
        <div id="playername"><h3>Vivianne Miedema</h3></div>
        <br>
        <img src="https://i.postimg.cc/m2rKnb0Y/vivianne.jpg">
        <br>
      <div><h4>Age: 25</h4> </div>
      <br>
      <div><h4>Gender: Female</h4></div>
      <br>
      <div><h4>Club: Arsenal W.F.C.</h4> </div>
      <br>
      <div><h4>R6866315</h4></div>
      </div>
       <div class="card">
        <div id="playername"><h3>Marta Vieira da Silva</h3></div>
        <br>
        <img src="https://i.postimg.cc/nM8V3C01/marta.jpg">
        <br>
      <div><h4>Age: 36</h4> </div>
      <br>
      <div><h4>Gender: Female</h4></div>
      <br>
      <div><h4>Club: Brazil women's national football team</h4> </div>
      <br>
      <div><h4>R6728538</h4></div>
      </div>
       <div class="card">
        <div id="playername"><h3>Sam Kerr</h3></div>
        <br>
        <img src="https://i.postimg.cc/BQgQTQ22/sam.jpg">
        <br>
      <div><h4>Age: 28</h4> </div>
      <br>
      <div><h4>Gender: Female</h4></div>
      <br>
      <div><h4>Club: Chelsea F.C. Women</h4> </div>
      <br>
      <div><h4>R10162188</h4></div>
      </div>
       <div class="card">
        <div id="playername"><h3>Mapi Leon</h3></div>
        <br>
        <img src="https://i.postimg.cc/SsTJfSBZ/maria.jpg">
        <br>
      <div><h4>Age: 27</h4> </div>
      <br>
      <div><h4>Gender: Female</h4></div>
      <br>
      <div><h4>Club: FC Barcelona Femení</h4> </div>
      <br>
      <div><h4>R16894014</h4></div>
      </div>
       <div class="card">
        <div id="playername"><h3>Sakina Karchaoui</h3></div>
        <br>
        <img src="https://i.postimg.cc/rFLKGP32/sakina.jpg">
        <br>
      <div><h4>Age: 26</h4> </div>
      <br>
      <div><h4>Gender: Female</h4></div>
      <br>
      <div><h4>Club: Paris Saint-Germain Féminine</h4> </div>
      <br>
      <div><h4>R50610207</h4></div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return{}

 
}};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  
}

img{
  margin-top: 20px;
  width: 282px;
height: 300px;
border-top: 2px solid brown;
border-bottom: 2px solid brown;
  border-radius: 5px;

}

a{
  text-decoration: none;
  color: brown;
}

a:hover{
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

.container
{
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
}

#playername{
  text-align: center;
}

.card {
  text-align: start;
  margin: auto;
background-color: burlywood;
width: 280px;
height: 515px;
margin-top: 20px;
margin-bottom: 20px;
border: 2px solid brown;
  border-radius: 5px;
}

</style>