<template src="./CreateArticle.html"></template>

<script>
import Sidebar from "./Sidebar.vue";
import Article from "../Models/Article.js";
import Global from "../Global";
import axios from "axios";
import { required,maxLength } from "vuelidate/lib/validators";
import swal from "sweetalert";
export default {
  name: "CreateArticle",
  components: {
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      article: new Article("", "", null, ""),
      submitted: false,
      file: "",
      isEdit: false,
    };
  },
  validations: {
    article: {
      title: {
        required,
         maxLength: maxLength(20),
      },
      content: {
        required,
        maxLength: maxLength(300),
      },
    },
  },
  mounted() {

  },
  methods: {
    filechange() {
      this.file = this.$refs.file.files[0];
      
    },
    save() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .post(this.url + "save", this.article)
          .then((response) => {
            console.log(response.data);
            if (response.data.status == "Success") {
              swal(
                "Articulo creado",
                "El articulo creado correctamente!",
                "success"
              );
              this.$router.push("/galeria") ;
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
                      this.$router.replace("/galeria");
                    } else {
                      //mostrar error
                      swal(
                        "Error al crear articulo",
                        "El articulo no se creado correctamente!",
                        "error"
                      );
                    }
                  })
                  .catch((error) => console.log(error));
              } else {
                this.article = response.data.article;
                this.$router.push("/galeria") ;
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

