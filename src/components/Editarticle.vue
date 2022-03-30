<template src="./CreateArticle.html"></template>

<script>
import Sidebar from "./Sidebar.vue";
import Article from "../Models/Article.js";
import Global from "../Global";
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";
export default {
  name: "Editarticle",
  components: {
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      article: new Article("", "", null, ""),
      submitted: false,
      file: "",
      isEdit: true,
    };
  },
  validations: {
    article: {
      title: {
        required,
      },
      content: {
        required,
      },
    },
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

    filechange() {
      this.file = this.$refs.file.files[0];
      
    },
    save() {
      this.submitted = true;

      var articleId = this.$route.params.id;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .put(this.url + "article/" + articleId, this.article)
          .then((response) => {
            
            if (response.data.status == "success") {
              swal(
                "Articulo Editado",
                "El articulo editado correctamente!",
                "success"
              );
              //subida de archivo
              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                const formData = new FormData();
                formData.append("file0", this.file, this.file.name);
                var articleId = response.data.article._id;

                axios
                  .post(this.url + "upload-image/" + articleId, formData)
                  .then((response) => {
                    if (response.data.article) {
                      this.article = response.data.article;
                      this.$router.push("/articulo/" + this.article._id);
                    } else {
                      //mostrar error
                      swal(
                        "Error al editar articulo",
                        "El articulo no se editado correctamente!",
                        "error"
                      );
                    }
                  })
                  .catch((error) => console.log(error));
              } else {
                swal(
                  "Articulo Editado",
                  "El articulo editado correctamente!",
                  "success"
                );

                this.article = response.data.article;
                this.$router.push("/articulo/" + this.article._id);
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

