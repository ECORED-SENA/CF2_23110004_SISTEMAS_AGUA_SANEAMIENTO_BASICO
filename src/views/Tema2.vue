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
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.jpg')})`}"
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
                h4.text-center Comisión de Regulación de Agua Potable y Saneamiento Básico
                img.img250.p-2.center(src='@/assets/curso/tema2/vec2.svg', alt='imagen 1-2')
            .tarjeta-flip__contenido.bgr_3.p-4.p-xl-5
              h4.text-center Comisión de Regulación de Agua Potable y Saneamiento Básico
              p.text-center.mt-3 Esta entidad fue creada en la Ley 142 de 1994 como una entidad de orden nacional, quien tiene autonomía administrativa, técnica y patrimonial, y tiene como fin la administración y la vigilancia de los servicios públicos domiciliarios. Su objetivo principal es apoyar la mejora del bienestar de las comunidades a través de la mejora de los servicios públicos de agua, alcantarillado y aseo.


      .col-sm-6.col-xl-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bgr_4.align-items-center.p-4.p-xl-5
              figure
                h4.text-center Corporaciones Autónomas Regionales  - CAR
                img.img250.p-2.center(src='@/assets/curso/tema2/vec3.svg', alt='imagen 1-2')
            .tarjeta-flip__contenido.bgr_5.p-4.p-xl-5
              h4.text-center Corporaciones Autónomas Regionales  - CAR
              p.text-center.mt-3 El objetivo principal de las CAR es velar por la protección del medio ambiente a través del respeto de la normatividad ambiental vigente expedida por el Ministerio de Medio Ambiente. Estas son las encargadas de viabilizar los permisos de usos de agua y los permisos de vertimientos. Las funciones de las CAR están establecidas en la Ley 99 de 1993. 
    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1	Requisitos para los sistemas de aguas 

    .bg_grad-05
      .row.align-items-center
        .col-md-4
          figure.mb-4
            img(src='@/assets/curso/tema2/img2.jpg', alt='AvatarTop')
        .col-md-8.mb-2
          p Para realizar un sistema de acueducto, el primer requisito que se debe tramitar es el permiso de concesión de aguas que consiste en solicitar el derecho de aprovechamiento del agua, ya sea superficial o subterránea para uso doméstico. 
          .row.mb-4
            .col-md-2.col-3
              figure
                img(src='@/assets/curso/tema2/vec1.svg', alt='AvatarTop')
            .col-md-10.col-8
              p.text-primary Este permiso lo otorga la Corporación Autónoma Regional - CAR a la cual pertenezca el territorio en el que se tiene el proyecto de abastecimiento de agua, después de la evaluación de la solicitud presentada. 
          p Los requerimientos para la solicitud varían de acuerdo a la corporación territorial a la que se dirija, pero generalmente se tiene en cuenta lo siguiente:
          
          .row.mb-4
            .col-lg-12
              TabsA.color-secundario(data-aos="fade")
                .tarjeta.back-tab.px-5.py-4(titulo="Fuente")
                  .row.px-2.py-2.justify-content-center.align-items-center
                    .col-lg-12.col-12
                      h4 Fuente
                      p La fuente de captación debe tener un caudal continuo y mayor al caudal solicitado.

                    
                .tarjeta.back-tab.px-5.py-4(titulo="Propiedad")
                  .row.px-2.py-2.justify-content-center.align-items-center
                    .col-lg-12.col-12
                      h4 Propiedad
                      p La propiedad del sitio de captación debe contar con los permisos de intervención.

                .tarjeta.back-tab.px-5.py-4(titulo="Descripción del proyecto")
                  .row.px-2.py-2.justify-content-center.align-items-center
                    .col-lg-12.col-12
                      h4 Descripción del proyecto 
                      p Se debe presentar el proyecto completo y la finalidad de su construcción.

                .tarjeta.back-tab.px-5.py-4(titulo="Costos del proyecto")
                  .row.px-2.py-2.justify-content-center.align-items-center
                    .col-lg-12.col-12
                      h4 Costos del proyecto 
                      p Este valor es la base del pago de los servicios de valoración de la solicitud.

                .tarjeta.back-tab.px-5.py-4(titulo="Programa de uso eficiente y ahorro de agua ")
                  .row.px-2.py-2.justify-content-center.align-items-center
                    .col-lg-12.col-12
                      h4 Programa de uso eficiente y ahorro de agua 
                      p Se debe presentar el programa a implementar para la protección del recurso hídrico y de su uso responsable.

                .tarjeta.back-tab.px-5.py-4(titulo="Trámite")
                  .row.px-2.py-2.justify-content-center.align-items-center
                    .col-lg-12.col-12
                      h4 Trámite
                      p Solicitud de acuerdo al formato de la entidad. 
        br
        p El formato único nacional de concesión de aguas superficiales es la guía para la presentación de la solicitud, debido a que contiene la guía de diligenciamiento y los documentos anexos de la solicitud. Este formato se puede consultar en el material complementario.       
      separador

      
      #t_2_2.titulo-segundo.color-acento-contenido
        h2 2.2	Requisitos para vertimientos 

      p.mb-5 Al igual que la solicitud de concesión de aguas, el permiso de vertimientos líquidos también es competencia de la Corporación Autónoma Regional - CAR y el gestor deberá realizar la solicitud de acuerdo con los lineamientos que la territorial exija dentro de su jurisdicción.    
    
      .row.mb-5
        .col-md-12 
          figure
            img(src='@/assets/curso/tema2/vec4.svg', alt='AvatarTop')

      .row.justify-content-center.align-items-center.mb-5
        .col-md-4
          h5.text-primary Teniendo en cuenta la solicitud, se debe presentar una serie de anexos que varían según la territorial a la que se dirige, pero básicamente son los siguientes:        
        .col-md-8
          SlyderF(columnas="col-lg-8 col-xl-4")
            .tarjeta.color-adicional-5.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/1.svg' alt='AvatarTop')
              p.text-center Usos de suelos.

            .tarjeta.color-adicional-5.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/2.svg' alt='AvatarTop')
              p.text-center Permisos de propietarios. 

            .tarjeta.color-adicional-5.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/3.svg' alt='AvatarTop')
              p.text-center Costos del proyecto.  

            .tarjeta.color-adicional-5.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/4.svg' alt='AvatarTop')
              p.text-center Planos y memorias del proyecto. 

            .tarjeta.color-adicional-5.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/5.svg' alt='AvatarTop')
              p.text-center Nombre de la fuente de abastecimiento y de descarga.

            .tarjeta.color-adicional-5.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/6.svg' alt='AvatarTop')
              p.text-center Caracterización del vertimiento.

            .tarjeta.color-adicional-5.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/7.svg' alt='AvatarTop')
              p.text-center Caudal, frecuencia y tiempo de descarga. 

            .tarjeta.color-adicional-5.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/8.svg' alt='AvatarTop')
              p.text-center Ubicación del proyecto.

            .tarjeta.color-adicional-5.p-3
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/tema2/9.svg' alt='AvatarTop')
              p.text-center Evaluación ambiental del vertimiento.

      p.mb-4 El Formato Único Nacional de Permiso de Vertimientos a Cuerpos de Agua es la guía para la presentación de la solicitud, porque contiene la guía de diligenciamiento y los documentos anexos de la solicitud. Este formato se puede consultar en el material complementario. 
      
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
