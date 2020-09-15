<template>
  <div class="general">
    <Slider :texto="'Búsqueda: ' + searchString"></Slider>
    <div class="center">
      <section id="content">
        <div id="articles" v-if="articles">
          <h1 class="subheader">Artículos encontrados</h1>
          <Articles :articles="articles"></Articles>
        </div>
        <div v-else>
          <h1 class="subheader">Sin resultados</h1>
          <h2>No hay artículos que coincidan con tu búsqueda</h2>
        </div>
      </section>
      <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "../Global.js";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

export default {
  name: "Search",
  components: {
    Slider,
    Sidebar,
    Articles,
  },
  mounted() {
    this.searchString = this.$route.params.searchString;
    this.getArticlesBySearch(this.searchString);
  },
  data() {
    return {
      url: Global.url,
      articles: null,
      searchString: null
    };
  },
  methods: {
    getArticlesBySearch(searchString) {
      axios.get(this.url + "search/" + searchString).then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    },
  },
};
</script>