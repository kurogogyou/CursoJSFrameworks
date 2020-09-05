<template>
  <div class="general">
    <Slider 
    texto="Bienvenido al Curso de Vue con Víctor Robles de victorroblesweb.es"
    home = "true"
    ></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>

        <!--Listado articulos-->
        <div id="articles">
          <article class="article-item" id="article-template">
            <div class="image-wrap">
              <img
                src="https://travelandleisure.mx/wp-content/uploads/2018/10/shutterstock_330772199.jpg"
                alt="Paisaje"
              />
            </div>

            <h2>Articulo de prueba</h2>
            <span class="date">Hace 5 minutos</span>
            <a href="#">Leer más</a>

            <div class="clearfix"></div>
          </article>

          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
      </section>

      <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Slider from './Slider';
import Sidebar from './Sidebar';

export default {
  name: "LastArticles",
  components: {
    Slider,
    Sidebar,
  }
};
</script>