<template>
  <div id="back">
    <div class="backLeft">
      <h1 id="heading">
        welcome to,
        <br />
        <div id="landing">
          <span id="landingletters">P</span>
          <span id="landingletters">A</span>
          <span id="landingletters">S</span>
          <span id="landingletters">S</span>
          <span id="landingletters">E</span>
          <span id="landingletters">S</span>
        </div>
      </h1>
    </div>
  </div>

  <div id="slideBox">
    <div class="topLayer">
      <div class="right">
        <div class="content">
          <h2>Top Prospects:</h2>
          <div class="container">
            <a href="">
              <div class="card" id="ronaldo"></div>
            </a>
            <a href=""></a>
            <div class="card" id="vivianne"></div>
            <a href="">
              <div class="card" id="frenkie"></div>
            </a>
            <a href="">
              <div class="card" id="sam"></div>
            </a>
          </div>
          <a href="/about">
            <button id="login" type="submit">About Us</button>
          </a>
          <a href="/contact">
            <button id="login" type="submit">Contact Us</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  height: 100%;
  overflow: hidden;
  width: 100% !important;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  background: #2c3e50;
}
.backLeft {
  position: absolute;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 255, 0.296), rgba(128, 0, 128, 0.464)),
    url(http://www.whoateallthepies.tv/wp-content/uploads/2013/08/isco-pass.gif);
  background-size: cover;
  background-position: 50% 50%;
}

#heading {
  font-size: 5vw;
  color: white;
}

#landing {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  height: 100vh;
  text-align: center;
  color: white;
}

#landingletters {
  font-size: 14vw;
  font-weight: 800;
  text-shadow: -0.08em 0.03em 0.12em rgba(0, 0, 0, 0.9);
}

#landingletters:not(:first-child) {
  margin-left: -0.23em;
}

#back {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -999;
}

#slideBox {
  width: 50%;
  max-height: 100%;
  height: 100%;
  overflow: hidden;
  margin-left: 50%;
  position: absolute;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.topLayer {
  width: 200%;
  height: 100%;
  position: relative;
  left: 0;
  left: -100%;
}
.right {
  width: 50%;
  height: 100%;
  background: #2c3e50;
  right: 0;
  position: absolute;
}
.content {
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 10%;
  left: 50%;
  margin-left: -35%;
}
.content h2 {
  color: #03a9f4;
  font-weight: 300;
  font-size: 35px;
}

button {
  background: #03a9f4;
  padding: 10px 16px;
  width: 150px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  line-height: 16px;
  letter-spacing: 0.5px;
  border-radius: 2px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  margin: 15px 15px 15px 0;
  transition: all 0.25s;
}

button:hover {
  background: #0288d1;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}

input {
  background: transparent;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #45494c;
  font-size: 14px;
  color: #959595;
  padding: 8px 0;
  margin-top: 20px;
}

.container {
  width: 100%;
  display: flex;
}
.card {
  display: flex;
  height: 280px;
  width: 130px;
  background-color: #2f363e;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  cursor: pointer;
}
#ronaldo {
  background-image: linear-gradient(
      rgba(0, 0, 255, 0.296),
      rgba(128, 0, 128, 0.464)
    ),
    url(https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-04/cristiano-ronaldo-04092022-ftr-getty.jpg?itok=J_zpPbPd);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
#frenkie {
  background-image: linear-gradient(
      rgba(0, 0, 255, 0.296),
      rgba(128, 0, 128, 0.464)
    ),
    url(https://reddevilarmada.com/wp-content/uploads/getty-images/2017/07/1395983569-1.jpeg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
#vivianne {
  background-image: linear-gradient(
      rgba(0, 0, 255, 0.296),
      rgba(128, 0, 128, 0.464)
    ),
    url(https://cdn.givemesport.com/wp-content/uploads/2022/05/vivianne-miedema-arsenal-scaled.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
#sam {
  background-image: linear-gradient(
      rgba(0, 0, 255, 0.296),
      rgba(128, 0, 128, 0.464)
    ),
    url(https://i.guim.co.uk/img/media/5fc890e929bfb00e913be053581723cace103cc6/0_155_2333_1400/master/2333.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e8d28cea15a2e0ecfc9cb655c2e17d3d);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}
.card:hover ~ .card {
  position: relative;
  left: 60px;
  transition: 0.4s ease-out;
}
.title {
  color: white;
  font-weight: 400;
  position: absolute;
  font-size: 36px;
  left: 20%;
  top: 30%;
}
</style>

<script></script>
