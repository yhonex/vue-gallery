<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <article class="article-item article-detail" v-if="article">
          <div class="image-wrap">
            <img
              :src="url + 'get-image/' + article.image"
              :alt="article.title"
              v-if="article.image"
            />
            <img
              src="../assets/img/logo-null.jpg"
              :alt="article.title"
              v-else
            />
          </div>

          <h1 class="subheader">{{ article.title }}</h1>
          <span class="date"> {{ article.date | moment("from", "now") }} </span>
          <p>
            {{ article.content }}
          </p>

          <div class="clearfix"></div>
          
          <router-link :to="'/editar/' + article._id" class="btn btn-warning "
            >Editar</router-link
          ><a @click="deleteArticle(article._id)" class="btn btn-danger"
            >Eliminar</a
          ><router-link to="/galeria" class="btn btn-home">ir a Galeria</router-link>
        
        </article>
      </section>
      <sidebar />
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Global from "../Global";
import axios from "axios";
import swal from "sweetalert";
export default {
  name: "Article",
  components: {
    Sidebar,
  },

  data() {
    return {
      url: Global.url,
      article: null,
    };
  },
  mounted() {
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    getArticle(articleId) {
      axios.get(this.url + "article/" + articleId).then((res) => {
        if (res.data.status == "success") {
          this.article = res.data.article;
        }
      });
    },

    deleteArticle(articleId) {
      swal({
        title: "¿Estas Seguro?",
        text: "una vez borrado el archivo no sera posible recuperarlo",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(this.url + "article/" + articleId).then(() => {
            swal(
              "Articulo Borrado",
              "El articulo se a borrado correctamente!",
              "success"
            );


            this.$router.replace("/galeria"); 
          });
        } else {
          swal("El articulo esta a salvo, no se a borrado!");
        }
      });
    },
  },
};
</script>

