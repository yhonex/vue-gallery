<template>
  <div class="general">

    <slider texto="Bienvenido a la pagina de Vue de Diego!" home="true"/>

    <div class="center">
      <section id="content">
        <h2 class="subheader" >Ultimos articulos!</h2>

        <div id="articles">
          <GaleriaHost v-bind:articles="articles"></GaleriaHost>
        </div>
      </section>
      <sidebar />
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Slider from "./Slider.vue";
import axios from 'axios';
import Global  from '../Global';
//import Articles from './Articles.vue';
import GaleriaHost from './GaleriaHost.vue'
export default {
  name: "LastArticles",
  components: {
    Slider,
    Sidebar,
   // Articles,
    GaleriaHost
  },
  data(){
    return{
      url : Global.url,
    articles:[] 
      }
  },

  

  mounted(){
   
    this.getLastArticles();
  },

  methods: {
    getLastArticles(){
      axios.get(this.url +'articles/true')
      .then(res => {
          if(res.data.status == 'success'){
        this.articles = res.data.articles;

          
       }
          
      });
    }
  }
};
</script>