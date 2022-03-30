<template>
  <header id="header">
    <div class="center">
      <!-- LOGO -->
      <div id="logo">
        <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
        <span id="brand"> <strong>Vue</strong>Gallery </span>
      </div>

      <!-- MENU -->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/home" active-class="active">Inicio</router-link>
          </li>
          <li>
            <router-link to="/galeria" active-class="active"
              >Galeria</router-link
            >
          </li>
          <li>
            <router-link to="/lista-de-articulos" active-class="active">Lista de articulos</router-link>
          </li>
          <li>
            <router-link to="/contacto" active-class="active"
              >Contacto</router-link
            >
          </li>
                  
        </ul>
      </nav>

      <!--LIMPIAR FLOTADOS-->
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
