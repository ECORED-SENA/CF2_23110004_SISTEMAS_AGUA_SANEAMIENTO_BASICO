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
    
    p.mb-3 Existen tres elementos a tener en cuenta para el éxito de un plan de acción, los cuales se describen a continuación:

    .row.justify-content-center.p-5.correr-izq.correr-der
      .col-md-4(data-aos="zoom-in")
        .crd.crd--gray.crd--hoverBlue.crd--brad.crd--shadow
          h4.text-center Individuos:
          p.text-center.p-2 Son organismos unitarios que presentan una estructura independiente, la cual puede ser unicelular o pluricelular y además no tiene la necesidad de otro ser vivo para poder sobrevivir en algún ecosistema.
          figure
            img.p-4(src='@/assets/curso/tema5/01.png', alt='AvatarTop' style="width: 190px")

      .col-md-4(data-aos="zoom-in")
        .crd.crd--gray.crd--hoverBlue.crd--brad.crd--shadow
          h4.text-center Población:
          p.text-center.p-2 Esto hace referencia a un grupo de individuos de una misma especie que comparten el mismo espacio y en el mismo tiempo, por lo tanto, presentan diversas relaciones entre ellos, bien sea de alimentación o de reproducción.
          figure
            img.p-4(src='@/assets/curso/tema5/02.png', alt='AvatarTop' style="width: 190px")

      .col-md-4(data-aos="zoom-in")
        .crd.crd--gray.crd--hoverBlue.crd--brad.crd--shadow
          h4.text-center Comunidad:
          p.text-center.p-2 Se conoce como el conjunto de varias poblaciones que pueden ser a su vez de diferentes especies pero que habitan en un mismo ecosistema o territorio determinado.
          figure
            img.p-4(src='@/assets/curso/tema5/03.png', alt='AvatarTop' style="width: 190px")

    .row 
      p.mb-4 Con el fin de ampliar los conceptos relacionados con el plan de acción se puede consultar el siguiente video, el cual consolida el concepto. 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

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
