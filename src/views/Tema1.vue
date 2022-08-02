<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  Normativa nacional 

    .bg_grad-01.mb-5
      .row.justify-content-center.align-items-center
        .col-md-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img1.svg', alt='AvatarTop')

        .col-md-7
          p En Colombia existe una gran cantidad de leyes relacionadas con los usos del agua y su relación con los ecosistemas. Esta normatividad tiene como objetivo proteger, regular y castigar las acciones que se realicen con relación al recurso hídrico dentro del territorio nacional.
          span En el siguiente PDF se puede consultar la normatividad relacionada con el recurso hídrico en Colombia.
    br
    .row.justify-content-center.align-items-center
      .col-md-8
        .tarjeta.color-a.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/tema1/vec1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Normatividad
                  p.text-small Normatividad relacionada con el recurso hídrico en Colombia 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Normatividad.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download




  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
