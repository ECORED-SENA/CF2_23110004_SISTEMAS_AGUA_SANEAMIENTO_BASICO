<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/arrastrar.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Unir por medio de flechas los conceptos relacionados 
        p.mb-4 Afianzar los conceptos reseñados en el presente contenido para identificarlos en los contextos relacionados. 
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Relacionar palabras.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/CF2AD1/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/falso-verdadero.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Falso y verdadero 
        p.mb-4 Responder de forma correcta de acuerdo con los conocimientos adquiridos en el desarrollo del contenido. 
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Responda falso o verdadero, según corresponda. 
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/CF2AD2/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
