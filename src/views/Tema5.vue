<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1  Formulación del plan de acción

    .bg_grad-06
      .bg_grad-01.mb-5(data-aos="fade-right")
        .row.justify-content-center.align-items-center
          .col-md-4
            figure.mb-4
              img(src='@/assets/curso/tema5/img1.svg', alt='AvatarTop')

          .col-md-7
            p Para que una organización progrese adecuada y sólidamente, es necesario contar con los mecanismos de planificación adecuados. En algunos casos, la tarea de operar y gestionar dichas herramientas y <i>software</i> puede recaer en el equipo de <i>marketing</i>, en el área administrativa o directamente en los miembros fundadores.
            span Sin embargo, para evitar vacíos de información o situaciones que se puedan pasar por alto a la hora de gestionar una empresa, es primordial saber cómo elaborar un plan de acción que se relacione directamente con la actividad de la empresa, para poder proponer acciones que conlleven a una mejora continua.
      
      
      p.mb-3(data-aos="fade-right") Existen tres elementos a tener en cuenta para el éxito de un plan de acción, los cuales se describen a continuación:

      .row.justify-content-center.p-5.correr-izq.correr-der
        .col-md-4.mb-4(data-aos="zoom-in")
          .crd.crd--gray.crd--hoverBlue.crd--brad.crd--shadow
            h4.text-center.pa Perfil de la empresa 
            p.text-center.p-3 El plan de acción debe tener la información básica de la empresa, objetivos, alcance, misión, visión, metas a corto y largo plazo, esquema organizacional y los reconocimientos a lo largo del tiempo por su gestión.
            figure
              img.alinear-nemero(src='@/assets/curso/tema5/01.png', alt='AvatarTop')

        .col-md-4.mb-4(data-aos="zoom-in")
          .crd.crd--gray.crd--hoverBlue.crd--brad.crd--shadow
            h4.text-center.pa Alcance comunitario 
            p.text-center.p-3 Está relacionado con la creación de mano de obra de la zona de operación y apoyos a procesos comunitarios. Básicamente es el aporte que la empresa brinda a la mejora de las condiciones comunales. 
            figure
              img.alinear-nemero(src='@/assets/curso/tema5/02.png', alt='AvatarTop')

        .col-md-4.mb-4(data-aos="zoom-in")
          .crd.crd--gray.crd--hoverBlue.crd--brad.crd--shadow
            h4.text-center.pa Resultados
            p.text-center.p-3 Son los alcances y logros que se planifican para la mejora continua de la empresa, así como los reconocimientos en el sector que permiten la consolidación de la misma. 
            figure
              img.alinear-nemero(src='@/assets/curso/tema5/03.png', alt='AvatarTop')

      .row.mb-5(data-aos="fade-right")
        p.mb-4 Con el fin de ampliar los conceptos relacionados con el plan de acción se puede consultar el siguiente video, el cual consolida el concepto. 

      figure.mb-5(data-aos="fade-right")
        .video
          iframe(width="942" height="530" src="https://www.youtube.com/embed/7r6382WebDQ" title="Plan Acción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
