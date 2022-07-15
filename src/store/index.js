import { createStore } from 'vuex'
export default createStore({
  state: {
    asc: true,
    player: null,

    players: [

      {
        "id": 1,
        "img_URL": "https://i.postimg.cc/8PBwf5kL/christiano.jpg",
        "name": "Cristiano Ronaldo",
        "age": 37,
        "gender": "Male",
        "currrentClub": "Manchester United F.C.",
        "nationalTeam": "Portugal",
        "price": 2275966335
      },
      {
        "id": 2,
        "img_URL": "https://i.postimg.cc/q7JSH4FX/frenkie.jpg",
        "name": "Frenkie de Jong",
        "age": 25,
        "gender": "Male",
        "currrentClub": "Barcelona",
        "nationalTeam": "Netherlands",
        "price": 1419979252
      },
      {
        "id": 3,
        "img_URL": "https://i.postimg.cc/rw3jQckw/harryM.jpg",
        "name": "Harry Maguire",
        "age": 29,
        "gender": "Male",
        "currrentClub": "Manchester United F.C.",
        "nationalTeam": "England",
        "price": 1489311320
      },
      {
        "id": 4,
        "img_URL": "https://i.postimg.cc/vTTxJg7F/lukaku2.jpg",
        "name": "Romelu Lukaku",
        "age": 29,
        "gender": "Male",
        "currrentClub": "Inter Milan",
        "nationalTeam": "Belgium",
        "price": 1971642075
      },
      {
        "id": 5,
        "img_URL": "https://i.postimg.cc/901570sM/timo.jpg",
        "name": "Timo Werner",
        "age": 26,
        "gender": "Male",
        "currrentClub": "Chelsea F.C.",
        "nationalTeam": "Germany",
        "price": 959029283
      },
      {
        "id": 6,
        "img_URL": "https://i.postimg.cc/dQrbCHGC/harryK.jpg",
        "name": "Harry Kane",
        "age": 28,
        "gender": "Male",
        "currrentClub": "Tottenham Hotspur F.C.",
        "nationalTeam": "England",
        "price": 2020227000
      },
      {
        "id": 7,
        "img_URL": "https://i.postimg.cc/RhZwvbBY/kevin.jpg",
        "name": "Kevin De Bruyne",
        "age": 31,
        "gender": "Male",
        "currrentClub": "Manchester City F.C.",
        "nationalTeam": "Belgium",
        "price": 1111124850
      },
      {
        "id": 8,
        "img_URL": "https://i.postimg.cc/m2rKnb0Y/vivianne.jpg",
        "name": "Vivianne Miedema",
        "age": 25,
        "gender": "Female",
        "currrentClub": "Arsenal W.F.C.",
        "nationalTeam": "Netherlands",
        "price": 6866315
      },
      {
        "id": 9,
        "img_URL": "https://i.postimg.cc/nM8V3C01/marta.jpg",
        "name": "Marta Vieira da Silva",
        "age": 36,
        "gender": "Female",
        "currrentClub": "Orlando Pride",
        "nationalTeam": "Brazil",
        "price": 6728538
      },
      {
        "id": 10,
        "img_URL": "https://i.postimg.cc/BQgQTQ22/sam.jpg",
        "name": "Sam Kerr",
        "age": 28,
        "gender": "Female",
        "currrentClub": "Chelsea W.F.C",
        "nationalTeam": "Australia",
        "price": 10162188
      },
      {
        "id": 11,
        "img_URL": "https://i.postimg.cc/SsTJfSBZ/maria.jpg",
        "name": "Maria Leon",
        "age": 27,
        "gender": "Female",
        "currrentClub": "F.C. Barcelona Femeni",
        "nationalTeam": "Spain",
        "price": 16894014
      },
      {
        "id": 12,
        "img_URL": "https://i.postimg.cc/rFLKGP32/sakina.jpg",
        "name": "Sakina Karchaoui",
        "age": 26,
        "gender": "Female",
        "currrentClub": "Paris Saint-Germain Féminine",
        "nationalTeam": "France",
        "price": 50610207
      }
    ]

  },
  getters: {
    getPlayer: state => state.player,
  },
  mutations: {
    setPlayers(state, players) {
      state.players = players
    },
    setPlayer(state, player) {
      state.player = player
    },
  },
  actions: {
    getPlayers: async (context) => {
      let res = await fetch("http://localhost:3000/players")
      let data = await res.json();
      context.commit('setPlayers', data);
    },
    fetchPlayer: async (context, id) => {
      let res = await fetch("http://localhost:3000/players/" + id);
      let data = await res.json();
      console.log(data);
      context.commit('setPlayer', data);
    }
  },
  modules: {
  }
})


