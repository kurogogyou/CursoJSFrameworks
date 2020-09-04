<template>
  <section id="content">
    <h2 class="subheader">{{ titulo }}</h2>
    <hr />
    <h1>Este es MI COMPONENTE</h1>
    <h2>{{ subtitulo }}</h2>
    <hr />

    <h2>Reactividad</h2>
    <input type="text" v-model="nombre" />
    Mi nombre es: <strong>{{ nombre }}</strong>

    <h2>Directivas Condicionales</h2>
    <input type="number" v-model="edad" />
    Mi edad es: <strong>{{ edad }}</strong>

    <p class="alert-success-provisional" v-if="edad && edad >= 18 && edad < 65">
      ¡¡ SOY MAYOR DE EDAD !!
    </p>

    <p class="alert-purple-provisional" v-else-if="edad && edad >= 65">
      Que viejo...
    </p>

    <p class="alert-danger-provisional" v-else>
      El Menol
    </p>

    <h2>Directiva iterativa</h2>
    <ol>
      <li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>
    </ol>


  </section>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      titulo: "Mi Componente",
      subtitulo: "Subtitulo de mi componente",
      nombre: '',
      edad: 18,
      peliculas: ['LOTR', 'Dr. Strange', 'In the tall grass', 'Arrival', 'Avengers: Endgame', 'Interstellar']
    };
  }
};
</script>