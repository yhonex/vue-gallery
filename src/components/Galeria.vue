<template>
  <div class="general">
    <slider texto="Galeria" />
    <div class="center">
      <section id="content">
        <h1 class="subheader">Imagenes</h1>
            
           <div id="articles" v-if="articles">
           <!--  <Articles :articles="articles"></Articles> -->
            <GaleriaHost :articles="articles"></GaleriaHost>
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
  components: {
    Slider,
    Sidebar,
    //Articles,
    GaleriaHost
  },
  data(){
    return{
      url : Global.url,
    articles: null
      }
  },

  name: "Galeria",

  mounted(){
   
    this.getArticles();
  },

  methods: {
    getArticles(){
      axios.get(this.url +'articles')
      .then(res => {
          if(res.data.status == 'success'){
        this.articles = res.data.articles;

          
       }
          
      });
    }
  }

};
</script>