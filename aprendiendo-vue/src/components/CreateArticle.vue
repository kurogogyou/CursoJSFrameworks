<template>
  <div class="general">
    <Slider texto="Blog"></Slider>
    <div class="center">
      <section id="content">
        <h1 class="subheader">Crear artículo</h1>

        <!-- Formulario -->
      </section>
      <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
//import axios from "axios";
//import Global from "../Global.js";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
//import { required, minLenth } from 'vuelidate/lib/validators'

export default {
  name: "CreateArticle",
  components: {
    Slider,
    Sidebar,
  },
};
</script>