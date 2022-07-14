export default {
  global: {
    componenteFormativo: 'Actividades administrativas del sistema',
    descripcionCurso:
      'En el presente componente formativo se aprenderá que el reconocimiento de los conceptos administrativos y la identificación de las características básicas de plantas de tratamiento de aguas residuales se deben complementar con el reconocimiento de la normativa legal ajustada a esta temática, y esta, a su vez, con estrategias administrativas que aporten para potencializar esta gestión de la mejor forma.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normativa nacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Entidades reguladoras',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Requisitos para los sistemas de aguas ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Requisitos para vertimientos ',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Estructura de las AAA(Empresas Prestadoras de Servicios Públicos de Acueducto, Alcantarillado y Aseo)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Administración estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Características',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos de estrategias',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Formulación del plan de acción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Evaluación y acciones de mejora',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Comisión de Regulación de Agua Potable y Saneamiento Básico. (2022). Resoluciones CRA.',
      link:
        'https://normas.cra.gov.co/gestor/m0_resoluciones_caracter_general_por_servicio.html',
    },
    {
      referencia:
        'Corporación Autónoma Regional del Tolima - Cortolima. (s.f.). Trámites y servicios.',
      link: 'https://www.cortolima.gov.co/tramites-cortolima?start=12',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (s. f.). Normatividad del agua. ',
      link:
        'https://www.dnp.gov.co/programas/vivienda-agua-y-desarrollo-urbano/Paginas/Agua-Normatividad--.aspx',
    },
    {
      referencia:
        'Triple A (s. f.). Organigrama de la Triple A S.A. E.S.P. Empresa de servicios públicos. Barranquilla.',
      link: 'https://www.aaa.com.co/organigrama/',
    },
  ],
  glosario: [
    {
      termino: 'AAA',
      significado:
        'empresas que tienen como actividad prestar los servicios públicos de agua, aseo y alcantarillado.',
    },
    {
      termino: 'Administración estratégica',
      significado:
        'proceso de evaluación sistemática de un negocio y define los objetivos a largo plazo, identifica metas y objetivos, desarrolla estrategias para alcanzar estos y localiza recursos para realizarlos.',
    },
    {
      termino: 'DOFA',
      significado:
        'análisis que permite elaborar una matriz que identifica unos factores internos externos que intervienen en el desempeño de una empresa. Las variables internas son Fortalezas y Debilidades, las externas son Oportunidades y Amenazas.',
    },
    {
      termino: 'Indicadores',
      significado:
        'instrumento que provee información de una determinada condición o el logro de una cierta situación, actividad o resultado.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'hoja de ruta que puede ayudar a lograr metas y objetivos. Un programa puede tomar muchos caminos para alcanzar las metas, cumplir los objetivos y lograr resultados.',
    },
    {
      termino: 'Vertimiento',
      significado:
        'Es la descarga final de elementos, sustancias o compuestos contenidos en un medio líquido a un cuerpo de agua, alcantarillado o al suelo.',
    },
  ],
  complementario: [
    {
      tema: 'Requisitos para los sistemas de aguas',
      referencia:
        'Ministerio de Medio Ambiente. (2015). Formato único nacional de solicitud de concesión de aguas superficiales.',
      tipo: 'Documento',
      link: 'http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=18982',
    },
    {
      tema: 'Requisitos para vertimientos',
      referencia:
        'Ministerio de Medio Ambiente. (2015). Formato único nacional de solicitud de permiso de vertimientos.',
      tipo: 'Documento',
      link: 'http://visor.suit.gov.co/VisorSUIT/index.jsf?FI=18902',
    },
    {
      tema: 'Formulación del plan de acción',
      referencia:
        'Arroyo, A. (2016). 5 pasos para hacer un plan de acción con éxito. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-JlBcqUr--A',
    },
    {
      tema: 'Formulación del plan de acción',
      referencia:
        'González, F. (2016). ¿Cómo hacer un plan de acción? [4 claves prácticas]. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ZgSZnLxyNnY',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
