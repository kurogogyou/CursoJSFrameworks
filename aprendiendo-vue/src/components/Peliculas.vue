<template>
  <section id="content">
    <h2 class="subheader">Películas</h2>

    <!--Listado articulos-->
    <div id="articles">
      <article class="article-item" v-for="pelicula in peliculas" :key="pelicula.title">
        <div class="image-wrap">
          <img
            :src="pelicula.image"
            :alt="pelicula.title"
            :title="pelicula.title"
          />
        </div>

        <h2>{{ pelicula.title }}</h2>
        <span class="date" :class="{
          'yeargreen' : pelicula.year >= 2016,
          'yearred' : pelicula.year < 2015
        }">{{ pelicula.year }}</span>
        <a href="#">Leer más</a>

        <div class="clearfix"></div>
      </article>

      <!--AÑADIR ARTICULOS VIA JS-->
    </div>
  </section>
</template>

<script>
export default {
  name: "Peliculas",
  data(){
      return {
          peliculas: [
              {title: 'LOTR', year: '2001', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9J7XACn3tlD6v4UXRMvT2wJN8FGCCPeh8U3RkZ6__tR4wGhSo'},
              {title: 'Dr. Strange', year: '2016', image: 'https://contentserver.com.au/assets/491602_p11214341_p_v8_ap.jpg'},
              {title: 'In the tall grass', year: '2019', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRI84c1bKqDdEmchYRrf-lC7GwlG41LQ7Xs65-V27H9cyD_RR6'},
              {title: 'Arrival', year: '2016', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmn4A0eiVOH4KoM8xqCxxNQM0NAY7lZQZ0glVIUIUOJYb9cryW'},
              {title: 'Avengers: Endgame', year: '2019', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9'},
              {title: 'Interstellar', year: '2014', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB'}
          ]
      }
  }
};
</script>