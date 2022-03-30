<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    
    <!-- <lastarticles/> -->
    <router-view/>
    
    <FooterComponent/>
  </div>
  
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';



import HeaderComponent from './components/HeaderComponent.vue';
/*import Lastarticles from './components/Lastarticles.vue';*/

export default {
  name: 'App',
  components: {

    HeaderComponent,
    
   /* Lastarticles,*/
    FooterComponent,
   


     }
}
</script>

<style>
 

@import './assets/css/style.css';
</style>
