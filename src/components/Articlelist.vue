<template>
  <div class="general">
    <slider texto="Lista de articulos" />
    <div class="center">
      <section id="content">
        <h1 class="subheader">todos los articulos</h1>

           <div id="articles" v-if="articles">
             <Articles :articles="articles"></Articles>

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
    articles: null
      }
  },

  name: "Articlelist",

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