<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Películas</h2>

        <div class="mis-datos" v-if="misDatos">
          <p v-html="misDatos"></p>
          <br/>
          {{ web | mayusculas | concatenaYear('Este es el mejor año, carajo!') }}
        </div>

        <div class="favorita" v-if="favorita">
          La pelicual marcada es:
          <h2>{{favorita.title}}</h2>
        </div>

        <!--Listado articulos-->
        <div id="articles">
          <!--   v-for="pelicula in peliculas" :key="pelicula.title" -->
          <div v-for="pelicula in peliculasMayuscula" :key="pelicula.title">
            <Pelicula 
              :pelicula="pelicula"
              @favorita="haLlegadoLaPeliculaFavorita"
              ></Pelicula>
          </div>

          <!--AÑADIR ARTICULOS VIA JS-->
        </div>
      </section>
      <Sidebar></Sidebar>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Pelicula from "./Pelicula.vue";
import Sidebar from './Sidebar';

export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar
  },
  methods: {
    haLlegadoLaPeliculaFavorita(favorita){
      this.favorita = favorita;
    }
  },
  filters: {
    mayusculas(value){
      return value.toUpperCase();
    },
    concatenaYear(value, message){
      var date = new Date();

      return value + ' ' + date.getFullYear() + ' ' + message;
    }
  },
  computed: {
    peliculasMayuscula(){
      var peliculasMod =this.peliculas; 
      for(var i=0; i < this.peliculas.length; i++){
        peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
      }
      return peliculasMod;
    },
    misDatos(){
      return this.nombre + ' ' + this.apellidos + '<br/>' + '<strong>Sitio web:</strong> '
      + this.web;
    }
  },
  data() {
    return {
      nombre: 'Víctor',
      apellidos: 'Robles',
      web: 'victorroblesweb.es/academy',
      favorita: null,
      peliculas: [
        {
          title: "LOTR",
          year: "2001",
          image:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9J7XACn3tlD6v4UXRMvT2wJN8FGCCPeh8U3RkZ6__tR4wGhSo",
        },
        {
          title: "Dr. Strange",
          year: "2016",
          image:
            "https://contentserver.com.au/assets/491602_p11214341_p_v8_ap.jpg",
        },
        {
          title: "In the tall grass",
          year: "2019",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRI84c1bKqDdEmchYRrf-lC7GwlG41LQ7Xs65-V27H9cyD_RR6",
        },
        {
          title: "Arrival",
          year: "2016",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmn4A0eiVOH4KoM8xqCxxNQM0NAY7lZQZ0glVIUIUOJYb9cryW",
        },
        {
          title: "Avengers: Endgame",
          year: "2019",
          image:
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9",
        },
        {
          title: "Interstellar",
          year: "2014",
          image:
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB",
        },
      ],
    };
  },
};
</script>