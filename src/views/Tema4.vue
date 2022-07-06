<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1  Administración estratégica 

    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1.	Características 

    separador

    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2.	Tipos de estrategias 

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
