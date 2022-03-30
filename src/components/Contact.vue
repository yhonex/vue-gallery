<template>
  <div class="general">
    <slider texto="Contacto" />
    <div class="center">
      <section id="content">
        <h1 class="subheader">Mi informacion :</h1>
            <div class="contact">            
                    
                    <img src="../assets/img/imagen-fromal.jpg" />

           
               <h2> <strong> Nombre :</strong> Diego Ludwing yhonex </h2>
               <h2> <strong> Apellido :</strong> Urbina Ovalles</h2>
               <h2><strong> Email :</strong>  yhonex4@gmail.com</h2>
               <h2><strong>  N° de telefono:</strong> +54 0 11 2731 7219</h2>
                
            </div>
          
                
      </section>
      <Sidebar/>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';

import Slider from "./Slider.vue";





export default {
  components: {
    Slider,
    Sidebar,



  },
 

  name: "Contact",


};
</script>