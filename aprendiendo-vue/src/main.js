import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LastArticles from './components/LastArticles';
import MiComponente from './components/MiComponente.vue'
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Pagina from './components/Pagina';
import ErrorComponent from './components/ErrorComponent';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/home', component: LastArticles},
  {path: '/formulario', component: Formulario},
  {path: '/blog', component: Blog},
  {path: '/pagina/:id?', name: 'pagina', component: Pagina},
  {path: '/ultimos-articulos', component: LastArticles},
  {path: '/mi-componente', component: MiComponente},
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
