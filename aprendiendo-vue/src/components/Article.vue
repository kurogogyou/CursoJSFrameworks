<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>

        <article class="article-item article-detail" v-if="article">
          <div class="image-wrap">
            <img
              :src="url + 'get-image/' + article.image"
              :alt="article.title"
              v-if="article.image"
            />
            <img src="../assets/images/ArticleDefault.jpg" :alt="article.title" v-else />
          </div>
          <h1 class="subheader">{{ article.title }}</h1>

          <span class="date">{{ article.date | moment("from", "now") }}</span>

          <p>{{ article.content }}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend egestas felis commodo efficitur. Mauris quis fringilla elit, sed efficitur enim. Duis ac iaculis elit. Praesent euismod eros at vestibulum ultricies. Vestibulum vitae urna ut libero ullamcorper vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis pellentesque ex et dui malesuada, at varius turpis dignissim. Etiam nec gravida justo. In cursus ac arcu ut varius. Proin eu ligula tortor. Praesent dolor ante, congue in dapibus id, maximus ac sem. Maecenas et felis justo. Aenean mollis, lectus ut consequat vulputate, dolor diam fermentum ante, cursus faucibus urna nisl a tortor. Praesent orci nisi, pulvinar molestie ipsum sit amet, porttitor sagittis lectus.</p>
          <p>Ut quis lorem id nunc cursus aliquam. Nunc magna arcu, fermentum consequat vestibulum eget, egestas id metus. Ut condimentum quis lorem quis suscipit. Fusce ornare leo in ipsum scelerisque venenatis. Etiam volutpat odio vitae massa pretium lobortis. Fusce venenatis, neque fringilla faucibus sollicitudin, lectus turpis varius sapien, sed tempor risus lectus eu lorem. Proin non eleifend est. Fusce bibendum, dolor non mollis tincidunt, ipsum orci fermentum metus, sit amet tempor orci felis quis nisi. Aliquam vestibulum vitae magna at faucibus. Donec feugiat est aliquet eros vulputate, ut condimentum felis molestie. Sed ac turpis eget mi mollis varius. Nunc in urna dui. Proin eleifend, justo nec accumsan placerat, dolor augue sollicitudin libero, eu pharetra tortor ipsum volutpat leo.</p>
          <p>Phasellus sit amet ligula ligula. Ut placerat sagittis lorem, ut convallis nibh dictum at. Suspendisse ultrices mattis neque, a iaculis turpis ornare congue. Maecenas sapien tortor, fermentum ut lobortis id, scelerisque nec magna. Phasellus nec interdum enim. Curabitur condimentum rhoncus nulla nec gravida. Phasellus in consectetur leo, sit amet tincidunt justo. Vivamus vel sollicitudin erat. Aliquam vitae metus sed ipsum mollis pellentesque. Proin tempus ex volutpat nisl pellentesque lacinia. Sed a tortor dolor. Nulla tincidunt elementum lacus id feugiat.</p>
          <p>Aliquam pulvinar ac metus eu mattis. Fusce facilisis ante bibendum ipsum semper, a ultrices mi gravida. Integer at metus in diam pellentesque condimentum ac at risus. Sed pulvinar elementum varius. Nullam pellentesque scelerisque ligula sit amet pretium. Donec rutrum placerat hendrerit. Morbi imperdiet, velit eu pretium aliquam, lectus nisl suscipit diam, et finibus mauris nulla vitae nibh. Praesent non enim non urna condimentum consequat eu euismod magna. Praesent pharetra metus diam, et euismod quam eleifend eu. Etiam accumsan nunc quis turpis luctus, a pharetra ex ullamcorper. Vestibulum imperdiet justo nisl, et porta odio posuere eget.</p>
          <p>Ut ut quam risus. Praesent odio dui, volutpat sed felis sit amet, ultricies porttitor ipsum. Fusce luctus tristique vulputate. Ut vitae arcu nisi. Cras et orci eget elit commodo commodo at vel nisl. Nunc vitae finibus arcu. Suspendisse semper lectus quis nunc gravida pellentesque. Curabitur tortor mi, tempor a vehicula non, viverra non dolor. Mauris pellentesque, sapien ut placerat tincidunt, felis turpis mattis augue, tincidunt dapibus tellus odio eget nisi. Pellentesque in dui ligula. Vestibulum suscipit dolor ut sem aliquam, sit amet consectetur nisi scelerisque. Praesent in ante ex. Etiam lacinia euismod lacus vel ultrices. In in lobortis nunc, vitae rhoncus felis.</p>
          <div class="clearfix"></div>
        </article>
      </section>
      <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "../Global.js";
import Sidebar from "./Sidebar";

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
  },
};
</script>