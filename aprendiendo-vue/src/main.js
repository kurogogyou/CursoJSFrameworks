import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import LastArticles from './components/LastArticles';
import MiComponente from './components/MiComponente.vue'
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Pagina from './components/Pagina';
import ErrorComponent from './components/ErrorComponent';
import Peliculas from './components/Peliculas.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
  {path: '/home', component: LastArticles},
  {path: '/formulario', component: Formulario},
  {path: '/blog', component: Blog},
  {path: '/pagina/:id?', name: 'pagina', component: Pagina},
  {path: '/ultimos-articulos', component: LastArticles},
  {path: '/mi-componente', component: MiComponente},
  {path: '/peliculas', name: 'peliculas', component: Peliculas},
  {path: '/', component: LastArticles},
  {path: '*', component: ErrorComponent}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
