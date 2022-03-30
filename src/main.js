import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/es';
import Lastarticles from './components/Lastarticles.vue';
import Errorcomponent from './components/Errorcomponent.vue';
import Search from './components/Search.vue';
import Redirect from './components/Redirect.vue';
import Article from './components/Article.vue';
import CreateArticle from './components/CreateArticle.vue';
import Editarticle from './components/Editarticle.vue';
import Galeria from './components/Galeria.vue';
import Articlelist from './components/Articlelist.vue';
import Contact from './components/Contact.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);

Vue.use(VueMoment,{moment});

const routes = [

  { path: '/home', component : Lastarticles },
  { path: '/ultimos-articulos', component : Lastarticles },
  { path: '/buscador/:searchtString', component : Search },
  { path: '/redirect/:searchtString', component : Redirect },
  { path: '/contacto', component : Contact },
  { path: '/galeria', component : Galeria },
  { path: '/lista-de-articulos', component : Articlelist },
  { path: '/articulo/:id', name:'article', component : Article },
  { path: '/editar/:id', name:'edit', component : Editarticle },
  { path: '/crear-articulo', name:'Crearte', component : CreateArticle },
   { path: '/', component : Lastarticles },
  { path: '*', component :Errorcomponent  },

];

const router = new VueRouter ({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
