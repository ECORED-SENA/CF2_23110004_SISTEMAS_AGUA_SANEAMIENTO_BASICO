<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1  Formulación del plan de acción

    .bg_grad-01.mb-5
      .row.justify-content-center.align-items-center
        .col-md-4
          figure
            img(src='@/assets/curso/tema5/img1.svg', alt='AvatarTop')

        .col-md-7
          p Para que una organización progrese adecuada y sólidamente, es necesario contar con los mecanismos de planificación adecuados. En algunos casos, la tarea de operar y gestionar dichas herramientas y software puede recaer en el equipo de marketing, en el área administrativa o directamente en los miembros fundadores.
          span Sin embargo, para evitar vacíos de información o situaciones que se puedan pasar por alto a la hora de gestionar una empresa, es primordial saber cómo elaborar un plan de acción que se relacione directamente con la actividad de la empresa, para poder proponer acciones que conlleven a una mejora continua.
    
    p.mb-4 Existen tres elementos a tener en cuenta para el éxito de un plan de acción, los cuales se describen a continuación:


</template>

<script>
export default {
  name: 'Tema5',
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
