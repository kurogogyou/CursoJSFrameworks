import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/es'
import LastArticles from './components/LastArticles';
import MiComponente from './components/MiComponente.vue'
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Pagina from './components/Pagina';
import ErrorComponent from './components/ErrorComponent';
import Peliculas from './components/Peliculas.vue';
import Search from './components/Search';
import Redirect from './components/Redirect';
import Article from './components/Article';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueMoment, {
  moment
});

const routes = [
  {path: '/home', component: LastArticles},
  {path: '/formulario', component: Formulario},
  {path: '/blog', component: Blog},
  {path: '/articulo/:id', name: 'article', component: Article},
  {path: '/pagina/:id?', name: 'pagina', component: Pagina},
  {path: '/ultimos-articulos', component: LastArticles},
  {path: '/buscador/:searchString', component: Search},
  {path: '/redirect/:searchString', component: Redirect},
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
