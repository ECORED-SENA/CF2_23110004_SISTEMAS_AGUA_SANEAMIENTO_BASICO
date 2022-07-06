<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1  Entidades reguladoras 

    .bloque-texto-g.color-1.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para la prestación de los servicios públicos de agua o de alcantarillado, la normativa ambiental colombiana fija unos entes de control que tienen como fin realizar seguimientos y controles a las empresas prestadoras de dichos servicios; de esta manera, se garantiza el cumplimiento de los requisitos mínimos para el uso del recurso hídrico. 

    .row.text-center.mb-4
      h5 Estas entidades reguladoras son:

    .row.mx-0.mb-5(data-aos="zoom-in")
      .col-sm-6.col-xl-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bgr_2.align-items-center.p-4.p-xl-5
              figure
                h5.text-center Comisión de Regulación de Agua Potable y Saneamiento Básico
                img.img250.p-2.center(src='@/assets/curso/tema1/vec2.svg', alt='imagen 1-2')
            .tarjeta-flip__contenido.bgr_3.p-4.p-xl-5
              h3.text-center Comisión de Regulación de Agua Potable y Saneamiento Básico
              p.text-center.mt-3 Esta entidad fue creada en la Ley 142 de 1994 como una entidad de orden nacional, quien tiene autonomía administrativa, técnica y patrimonial, y tiene como fin la administración y la vigilancia de los servicios públicos domiciliarios. Su objetivo principal es apoyar la mejora del bienestar de las comunidades a través de la mejora de los servicios públicos de agua, alcantarillado y aseo.


      .col-sm-6.col-xl-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bgr_4.align-items-center.p-4.p-xl-5
              figure
                h3.text-center Corporaciones Autónomas Regionales  - CAR
                img.img250.p-2.center(src='@/assets/curso/tema1/vec3.svg', alt='imagen 1-2')
            .tarjeta-flip__contenido.bgr_3.p-4.p-xl-5
              h3.text-center ACorporaciones Autónomas Regionales  - CAR
              p.text-center.mt-3 El objetivo principal de las CAR es velar por la protección del medio ambiente a través del respeto de la normatividad ambiental vigente expedida por el Ministerio de Medio Ambiente. Estas son las encargadas de viabilizar los permisos de usos de agua y los permisos de vertimientos. Las funciones de las CAR están establecidas en la Ley 99 de 1993. 
    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1.	Requisitos para los sistemas de aguas 

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2.	Requisitos para vertimientos 
   
   

</template>

<script>
export default {
  name: 'Tema2',
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
