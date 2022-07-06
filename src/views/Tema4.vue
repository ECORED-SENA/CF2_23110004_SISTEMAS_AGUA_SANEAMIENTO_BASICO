<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1  Administración estratégica 

    .bg_grad-02.mb-5
      .row.justify-content-center.align-items-center
        .col-md-7
          p La administración estratégica es un proceso de evaluación sistemática de una empresa por la cual se estipulan metas a mediano y corto plazo de acuerdo a los recursos disponibles y la capacidad de ejecución de la corporación. 
          span De acuerdo con su capacidad asertiva, la administración estratégica se convierte en una eficaz herramienta para diagnosticar, evaluar, analizar y tomar decisiones para contrarrestar las situaciones de no conformidad y adaptación a los cambios, propendiendo la mejora continua de sus procesos
        .col-md-4
          figure
            img(src='@/assets/curso/tema4/img1.svg', alt='AvatarTop')
    separador

    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1.	Características 

    p.mb-4 Una administración estratégica debe estar orientada en el desarrollo de cuatro componentes que garantizan que la administración mantenga una efectividad muy elevada.

    .row.text-center.mb-4
      h5 Estos componentes son:

    .row.justify-content-center.align-items-center.mb-4
      .col-md-4
        figure
          img(src='@/assets/curso/tema4/img1.jpg', alt='AvatarTop')
      .col-md-8
        LineaTiempoD.linea-tiempo-1
          .row(numero="1" titulo="Análisis ambiental ") 
            p Recolección de información inicial. 
            span Reconocimiento de las fortalezas y debilidades.
            span El análisis debe ser autocrítico para garantizar la objetividad.

              
          .row(numero="2" titulo="Formulación de la estrategia ") 
            p Contiene las razones, los objetivos, las estrategias y las políticas con las que trabajará la empresa.
            span Se definen los resultados requeridos y cuál es el plan para lograrlo.

          .row(numero="3" titulo="Evaluación y control ") 
            p Considera el uso de las diferentes herramientas de supervisión del desempeño.
            span Se establece si la empresa va por el camino trazado o si es necesario realizar correcciones.
             
          .row(numero="4" titulo="Implementación de la estrategia") 
            p Es donde se inicia la implementación del plan elaborado en la formulación.
            span La base son los programas que contiene  las actividades a implementar, el presupuesto y los procedimientos a seguir.

    separador

    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2.	Tipos de estrategias 

    .row.mb-4.justify-content-center.align-items-center
      .col-md-8
        .row.mb-4
          .col-md-2
            figure
              img(src='@/assets/curso/tema2/vec1.svg', alt='AvatarTop')
          .col-md-10
            p En las actividades empresariales se usa el término estrategia para hacer alusión a cuál es el camino a seguir para el logro de unos objetivos propuestos, de acuerdo con las herramientas que se tengan a mano para el desarrollo de las actividades.
        p Las estrategias pueden clasificarse según los distintos criterios, como puede ser su área de aplicación (estrategias militares, empresariales, publicitarias, deportivas, etc.), su posicionamiento frente al adversario (estrategias ofensivas, defensivas, mixtas) o bien su área de aplicación en un proceso determinado (estrategias generales y específicas).
        h5 A continuación, se especificarán las estrategias más comunes que se emplean en el ámbito empresarial.

      .col-md-4
        figure
          img(src='@/assets/curso/tema4/img2.jpg', alt='AvatarTop')

    .row 
      .col-md-12
        .tarjeta.fondo-slyder
          SlyderA
            .row
              .col-lg-5
                h5.p-3 Estrategias de funcionalidad  
                  p.mt-3 Están enfocadas en el objetivo específico de un negocio o de un departamento dentro de una organización, determinan los enfoques específicos y las tareas que deben emprenderse para lograr las metas establecidas en la planeación.
              .col-lg-7.center
                figure
                  img.p-4(src='@/assets/curso/tema4/1.png', alt='AvatarTop').m-auto

            .row
              .col-lg-5
                h5.p-3 Estrategias de operación
                  p.mt-3 Estas van encaminadas a la operatividad de la empresa, por ejemplo, a sus actividades cotidianas y continuas, es decir, a su protocolo y sus procedimientos. 
              .col-lg-7.center
                figure
                  img.p-4(src='@/assets/curso/tema4/2.png', alt='AvatarTop').m-auto

            .row
              .col-lg-5
                h5.p-3 Estrategias para la organización  
                  p.mt-3 Estas están enfocadas en la parte organizacional de la empresa, jerarquía, subdivisiones, distribución interna, etc.
              .col-lg-7.center
                figure
                  img.p-4(src='@/assets/curso/tema4/3.png', alt='AvatarTop').m-auto

            .row
              .col-lg-5
                h5.p-3 Estrategias de marketing o de publicidad 
                  p.mt-2 Son aquellas relacionadas con la publicidad y al mundo del marketing y a todo lo relacionado con la proyección pública de la organización.
              .col-lg-7.center
                figure
                  img.p-4(src='@/assets/curso/tema4/4.png', alt='AvatarTop').m-auto

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
