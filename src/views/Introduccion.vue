<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 La creación de empresa en el ámbito nacional debe tener como base los lineamientos exigidos por los órganos de control de la actividad a realizar, por lo tanto, es importante conocer la normatividad vigente al respecto y los planes administrativos propios de estos procesos. 
    
    figure.mb-5
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/dmA_dzrZ49U" title="Actividades administrativas del sistema: introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
