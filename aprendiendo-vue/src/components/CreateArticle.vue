<template>
  <div class="general">
    <!--    <Slider texto="Blog"></Slider> -->
    <div class="center">
      <section id="content">
        <h1 class="subheader">Crear artículo</h1>

        <!-- Formulario -->
        <form class="mid-form" v-on:submit.prevent="save()">
          <div class="form-group">
            <label for="title">Título</label>
            <input
              type="text"
              name="title"
              v-model="article.title"
              id=""
            />
            <div v-if="submitted && !$v.article.title.required">
              El titulo debe tener algo!!
            </div>
          </div>

          <div class="form-group">
            <label for="content">Contenido</label>
            <textarea name="content" v-model="article.content"  />
            <div v-if="submitted && !$v.article.content.required">
              El Contenido debe tener algo!!
            </div>
          </div>

          <div class="form-group">
            <label for="image">Imagen</label>
            <input type="file" name="image" id="" />
          </div>
          <!--
          <div class="form-group">
            <label for="title"></label>
            <input type="text" name="title" id="">
          </div>
-->
          <div class="clearfix"></div>

          <input type="submit" value="Guardar" class="btn btn-success" />
        </form>
      </section>
      <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "../Global.js";
//import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Article from "../models/Article";
import { required } from "vuelidate/lib/validators";

export default {
  name: "CreateArticle",
  components: {
    //    Slider,
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      article: new Article("", "", null, ""),
      submitted: false,
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
    //console.log(this.article);
  },
  methods: {
    save() {
      //console.log(this.article);
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .post(this.url + "save", this.article)
          .then((response) => {
            if (response.data.status == "success") {
              this.$router.push("/blog");
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