<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1  Estructura de las AAA (Empresas Prestadoras de Servicios Públicos de Acueducto, Alcantarillado y Aseo)

    p.mb-5 Las estructuras de las empresas prestadoras de los servicios públicos de acueducto, alcantarillado y aseo se definen desde su planeación y varían de acuerdo a su tamaño y función. Generalmente la estructura está basada en las áreas y en los departamentos encargados de cada proceso, por ejemplo:

    .row.mb-4
      .col-md-6
        .tarjeta-avatar
          img.p-2(src='@/assets/curso/tema3/gota1.svg' alt='AvatarTop')
          .tarjeta.tarjeta-numerada.align-items-center
            .text-black.p-5
              p En una empresa pequeña que presta el servicio de suministro de agua a una comunidad, como mínimo, deberá tener un componente directivo y otro operacional.
            .tarjeta-numerada__contenido
              
      .col-md-6
        .tarjeta-avatar
          img.p-2(src='@/assets/curso/tema3/gota2.svg' alt='AvatarTop')
          .tarjeta.tarjeta-numerada.align-items-center
            .text-black.p-5
              p En caso de una empresa más grande, además del componente directivo y operacional, deberá tener los componentes de servicio al cliente, financiero, gestión humana, entre otros.
            .tarjeta-numerada__contenido
  
</template>

<script>
export default {
  name: 'Tema3',
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
