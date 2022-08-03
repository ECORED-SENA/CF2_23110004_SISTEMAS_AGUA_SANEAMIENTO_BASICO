<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1  Evaluación y acciones de mejora 

    p.mb-4(data-aos="fade-right") Efectuar procesos de mejora continua no es tan simple. Sin embargo, existen varias estrategias muy efectivas, así como herramientas digitales, para calcular el rendimiento de la actividad empresarial y descubrir qué aspectos se deben corregir.
    
    .row.mb-5.justify-content-center.align-items-center(data-aos="zoom-in")
      .col-md-4
        h5.mb-4 Como primera medida a realizar, se deben tener en cuenta las siguientes acciones:
      .col-md-8
        .row.mb-3 
          .col-md-4.mb-4
            .tarjeta.color-4.p-4
              .row.justify-content-center.mb-3
                .col-md-6.col-6
                  img(src='@/assets/curso/tema6/vec1.svg' alt='AvatarTop')
              p.text-center Realizar un análisis interno de cada una de las áreas y procesos de la empresa.

          .col-md-4.mb-4
            .tarjeta.color-4.p-4
              .row.justify-content-center.mb-3
                .col-md-6.col-6
                  img(src='@/assets/curso/tema6/vec2.svg' alt='AvatarTop')
              p.text-center Idear Las estrategias de optimización y la elección de herramientas disponibles.

          .col-md-4.mb-4
            .tarjeta.color-4.p-4
              .row.justify-content-center.mb-3
                .col-md-6.col-6
                  img(src='@/assets/curso/tema6/vec3.svg' alt='AvatarTop')
              p.text-center Revisar El rendimiento para ir canalizando las acciones que están dando resultados positivos y descartar las que no.
    
      .row.mb-4.justify-content-center.align-items-center(data-aos="fade-up-left")
        .col-md-7
          p.mb-4 Además, también será necesario invertir en la digitalización de procesos, mediante herramientas tecnológicas y <i>software</i>, que ayudan a reducir tiempos y esfuerzos, a la vez que aumentan la productividad gracias a la automatización.
          .row
            .col-md-12
              .row.align-items-center.mb-4
                .col-md-2.col-4
                  figure
                    img(src='@/assets/curso/tema2/vec1.svg', alt='AvatarTop')
                .col-md-10.col-8
                  .cajon.paleYellow.p-2
                    p.mb-0 Existe gran variedad de formas para realizar acciones de mejora, pero en el ámbito empresarial existen tres que se destacan debido a su eficacia. A continuación, se identifican:

        .col-md-5
          figure
            img(src='@/assets/curso/tema6/img1.jpg', alt='AvatarTop')

      .row.mb-4(data-aos="fade-down")   
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-azul")
          .row(titulo="Establecer los indicadores de cada proceso de la empresa ")
            .col-md-6.mb-4.mb-md-0
              p El conocimiento de cada uno de los sectores de la empresa es vital para el establecimiento de los indicadores o instrumentos de medición, estos son los encargados de informar si las metas propuestas están siendo cumplidas o en qué porcentaje de cumplimiento se encuentran.
              span Para ello, es importante investigar en acciones anteriores y evaluar su eficacia para poder implementarlas nuevamente o si, por el contrario, es necesario establecer nuevos procesos para la actividad.

            .col-md-6
              figure
                img(src='@/assets/curso/tema6/img2.jpg', alt='Texto que describa la imagen')

          .row(titulo="Planificar las estrategias, establecer las metas y objetivos e identificar qué herramientas digitales serán útiles")
            .col-md-6.mb-4.mb-md-0
              p La identificación de las áreas y de los procesos a mejorar es el punto de partida para la fijación de los objetivos y las metas, de esta manera se establecen el horizonte y la ruta a seguir.
              span Este es un paso importante con el que también se establecen los medios, ya sean digitales u otros que aportarán a la empresa con la medición de los resultados para digitalizar procesos administrativos, reducir recursos y tiempos, eliminar procesos manuales, mejorar los servicios de ventas y cualquier otra necesidad de la empresa.

            .col-md-6
              figure
                img(src='@/assets/curso/tema6/img3.jpg', alt='Texto que describa la imagen')

          .row(titulo="Analizar los resultados obtenidos y cuantificarlos")
            .col-md-6.mb-4.mb-md-0
              p Por último, el análisis de los resultados nos brinda la información necesaria para conocer si los objetivos fueron cumplidos o se deben hacer ajustes para lograrlos.
              span El seguimiento continuo de todos los procesos nos ayuda a identificar un cambio y establecer nuevamente una estrategia que ayude a cumplir los objetivos de la empresa.

            .col-md-6
              figure
                img(src='@/assets/curso/tema6/img4.jpg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema6',
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
