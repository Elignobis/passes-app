import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

createApp(App).use(store).use(router).mount('#app')

Vue.component('app-nav',{
    props: ['navbar'],
    template: "<div class='header'>{{ navbar }}</div> "
});

Vue.component('app-footer', {
    props: ['footer'],
    template: "<div class='footer'>{{ footer }}</div> "
});

Vue.component('app-view', {
    props:['sidebar', 'content'],
    template: "<div><div class='sidebar'> {{ sidebar }}</div><div class='content'>{{ content }}</div></div> "
});

new Vue({
  el: "#app",
  data: {
      header: "Header Section",
      sidebar: "Sidebar Section",
      content: "Content Section",
      footer: "Footer Section"
  }
})
