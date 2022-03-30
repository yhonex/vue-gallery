<template>
  <section>
    
    <div  class="nav_home" v-if="articles && articles.length >= 1">
      <article class="" v-for="article in articles" :key="article._id">
        <div class="nav_home_div">
          <router-link :to="{ name: 'article', params: { id: article._id } }"
            ><img
              :src="url + 'get-image/' + article.image"
              :alt="article.title"
              v-if="article.image"
            />
            <img
              src="../assets/img/logo-null.jpg"
              :alt="article.title"
              v-if="!article.image"
            />
            </router-link
          >
        </div>

        <router-link class="title-article"
          :to="{ name: 'article', params: { id: article._id } }"
        >{{article.title}} </router-link>

        <div class="clearfix"></div>
      </article>
    </div>
    <div v-else-if="articles && articles.length < 1">
      No hay articulos para Mostrar
    </div>
    <div v-else>Cargando...!</div>
    
  </section>
</template>

<script>
import Global from "../Global";

export default {
  name: "Articles",
  props: ["articles"],

  data() {
    return {
      url: Global.url,
    };
  },
};
</script>
