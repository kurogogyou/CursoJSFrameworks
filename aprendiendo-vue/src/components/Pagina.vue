<template>
  <section id="content">
    <h2 class="subheader">Pagina de pruebas</h2>
    <h3>{{ id_desde_url }}</h3>
    <button @click="actualizarNombre()">Actualizar Nombre</button>
    <button @click="redirigirAlBlog()">Redirigir al Blog</button>
    <h4>{{ nombre }}</h4>
  </section>
</template>

<script>
export default {
  name: "Pagina",
  // Hooks in Vue
  created(){
    // Aqui el componente se ha creado, pero no se ha cargado todavia.
    console.log('Componente creado!!!');
  },
  mounted(){
    // Aqui el componente ya fue creado y cargado.
    this.id_desde_url = this.$route.params.id;
    console.log('Componente montado!!!');
    console.log(this.nombre);
  },
  updated(){
    //Se ejecuta cada vez que hay cambios o interaccion con el componente.
    console.log('Componente actualizado!!!');
  },
  destroyed(){
    //Se ejecuta al momento de eliminar este componente (cambiar de ruta)
    console.log('Componente destruido!!!');
  },
  data(){
    return {
      id_desde_url: null,
      nombre: 'Victor Robles'
    };
  },
  methods: {
    actualizarNombre(){
      this.nombre = 'VICTOR ROBLES WEB';
      console.log(this.nombre);
    },
    redirigirAlBlog(){
      this.$router.push('/blog');
    }
  }
};
</script>