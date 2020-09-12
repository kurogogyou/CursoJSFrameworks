<template>
  <div class="general">
    <Slider texto="Blog"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>

        <div id="articles" v-if="articles">
          <Articles :articles="articles"></Articles>
          <!--Anadir articulos via JS-->
        </div>
      </section>
      <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import axios from "axios";
import Global from '../Global.js';
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

export default {
  name: "Blog",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  mounted() {
    this.getArticles();
  },
  data() {
    return {
      url: Global.url,
      articles: [],
    };
  },
  methods: {
    getArticles() {
      axios.get(this.url + "articles/last").then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    },
  },
};
</script>