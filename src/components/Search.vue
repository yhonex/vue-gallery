<template>
  <div class="general">
    <slider :texto="'Busqueda: '+ searchtString "  />
    <div class="center">
      <section id="content">
        <h1 class="subheader" v-if="articles">Articulos Encontrados:</h1>
        <h1 class="subheader" v-else>Sin resultados</h1>
           
           <div id="articles" v-if="articles">
             <Articles :articles="articles"></Articles>
                </div>

                <div v-else> <h2> No hay articulos que coincidan con tu busqueda!</h2></div>
                
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
import Articles from './Articles.vue';

export default {
  components: {
    Slider,
    Sidebar,
    Articles,
  },
  data(){
    return{
      url : Global.url,
      articles:null,
      searchtString: null
      }
  },

  name: "Search",

  mounted(){
    this.searchtString = this.$route.params.searchtString;
    this.getArticlesbysearch(this.searchtString);
  },

  methods: {
    getArticlesbysearch(searchtString){
      axios.get(this.url +'search/'+ searchtString)
      .then(res => {
          if(res.data.status == 'success'){
        this.articles = res.data.articles;


       }
          
      });
    }
  }

};
</script>