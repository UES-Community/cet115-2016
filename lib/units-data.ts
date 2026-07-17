export type Topic = {
  title: string
  description: string
}

export type UnitData = {
  number: number
  romanNumeral: string
  title: string
  subtitle: string
  description: string
  accent: string
  bg: string
  topics: Topic[]
  tools: string[]
  outcomes: string[]
}

export const unitsData: Record<string, UnitData> = {
  '1': {
    number: 1,
    romanNumeral: 'I',
    title: 'Fundamentos del Comercio Electrónico',
    subtitle: 'Introducción al ecosistema digital comercial',
    description:
      'Explora los conceptos fundamentales del comercio electrónico, su evolución histórica y el impacto transformador en la economía global moderna.',
    accent: '#862fe7',
    bg: '#ebdafd',
    topics: [
      {
        title: 'Definición y evolución del e-commerce',
        description: 'Historia desde EDI hasta el comercio conversacional y social commerce.',
      },
      {
        title: 'Tipos de comercio electrónico',
        description: 'B2B, B2C, C2C, G2B, G2C y sus características diferenciales.',
      },
      {
        title: 'Marco legal y regulatorio',
        description: 'Legislación vigente, contratos electrónicos y protección del consumidor.',
      },
      {
        title: 'Seguridad y confianza digital',
        description: 'SSL, autenticación, certificados digitales y gestión de riesgos.',
      },
    ],
    tools: ['Recharts (métricas de adopción)', 'TanStack Table (comparativas)'],
    outcomes: [
      'Identificar los distintos modelos de e-commerce',
      'Comprender el marco legal aplicable',
      'Evaluar oportunidades de negocio digital',
      'Analizar casos de éxito y fracaso',
    ],
  },
  '2': {
    number: 2,
    romanNumeral: 'II',
    title: 'Modelos de Negocio Digital',
    subtitle: 'Estrategias de creación de valor en entornos digitales',
    description:
      'Análisis profundo de los modelos de negocio más exitosos del ecosistema digital, sus fuentes de ingresos y estrategias de escalabilidad.',
    accent: '#5f259e',
    bg: '#f3e8ff',
    topics: [
      {
        title: 'Canvas de modelo de negocio digital',
        description: 'Adaptación del Business Model Canvas para empresas digitales nativas.',
      },
      {
        title: 'Plataformas y efectos de red',
        description: 'Marketplaces, plataformas multilateral y crecimiento exponencial.',
      },
      {
        title: 'Modelos de suscripción y freemium',
        description: 'SaaS, PaaS, IaaS y modelos híbridos de monetización.',
      },
      {
        title: 'Economía de los datos',
        description: 'Monetización de datos, publicidad programática y personalización.',
      },
    ],
    tools: ['Recharts (análisis de modelos)', 'React Hook Form (evaluaciones)'],
    outcomes: [
      'Diseñar un modelo de negocio digital viable',
      'Identificar fuentes de ingresos sostenibles',
      'Evaluar la escalabilidad de un modelo',
      'Comprender los efectos de red',
    ],
  },
  '3': {
    number: 3,
    romanNumeral: 'III',
    title: 'Plataformas y Tecnología',
    subtitle: 'Infraestructura tecnológica para el comercio digital',
    description:
      'Herramientas, plataformas y arquitecturas tecnológicas que sustentan las operaciones de comercio electrónico moderno.',
    accent: '#ad6df4',
    bg: '#faf5ff',
    topics: [
      {
        title: 'CMS y plataformas e-commerce',
        description: 'Shopify, WooCommerce, Magento y soluciones headless commerce.',
      },
      {
        title: 'ERP y CRM en e-commerce',
        description: 'Integración de sistemas empresariales con la tienda en línea.',
      },
      {
        title: 'APIs y microservicios',
        description: 'Arquitecturas REST, GraphQL y composable commerce.',
      },
      {
        title: 'Automatización de procesos',
        description: 'RPA, workflows automatizados y herramientas no-code/low-code.',
      },
    ],
    tools: ['TanStack Table (inventarios)', '@react-pdf/renderer (reportes técnicos)'],
    outcomes: [
      'Seleccionar la plataforma adecuada según el negocio',
      'Integrar sistemas ERP/CRM con e-commerce',
      'Implementar flujos de automatización',
      'Evaluar soluciones headless vs monolíticas',
    ],
  },
  '4': {
    number: 4,
    romanNumeral: 'IV',
    title: 'Marketing y Ventas Online',
    subtitle: 'Estrategias de atracción, conversión y retención',
    description:
      'Técnicas y herramientas de marketing digital aplicadas al comercio electrónico, desde SEO hasta analítica avanzada de conversiones.',
    accent: '#dc5f05',
    bg: '#fff7ed',
    topics: [
      {
        title: 'SEO y SEM para e-commerce',
        description: 'Optimización orgánica, Google Shopping y estrategias de PPC.',
      },
      {
        title: 'Email marketing y automatización',
        description: 'Segmentación, nurturing, recuperación de carritos abandonados.',
      },
      {
        title: 'Redes sociales y social commerce',
        description: 'TikTok Shop, Instagram Shopping, influencer marketing y UGC.',
      },
      {
        title: 'Analítica y optimización de conversión',
        description: 'Funnel de conversión, A/B testing, heat maps y customer journey.',
      },
    ],
    tools: ['Recharts (dashboards de marketing)', 'Zod (formularios de campañas)'],
    outcomes: [
      'Diseñar una estrategia SEO/SEM para e-commerce',
      'Crear embudos de conversión efectivos',
      'Interpretar métricas de marketing digital',
      'Optimizar la tasa de conversión (CRO)',
    ],
  },
  '5': {
    number: 5,
    romanNumeral: 'V',
    title: 'Finanzas y Pagos Digitales',
    subtitle: 'Gestión financiera y ecosistema de pagos en e-commerce',
    description:
      'Análisis financiero, indicadores clave de rendimiento y gestión completa de medios de pago digitales para operaciones de comercio electrónico.',
    accent: '#862fe7',
    bg: '#ebdafd',
    topics: [
      {
        title: 'Pasarelas de pago y PSPs',
        description: 'Stripe, PayPal, CONEKTA, Mercado Pago y billeteras digitales.',
      },
      {
        title: 'KPIs financieros del e-commerce',
        description: 'CAC, LTV, ARPU, margen bruto, tasa de chargebacks y ROI.',
      },
      {
        title: 'Estados financieros digitales',
        description: 'Estado de resultados, flujo de caja y balance en e-commerce.',
      },
      {
        title: 'Criptomonedas y DeFi en comercio',
        description: 'Bitcoin, stablecoins, smart contracts y pagos descentralizados.',
      },
    ],
    tools: [
      'Recharts (dashboards KPIs)',
      'xlsx (exportar reportes)',
      '@react-pdf/renderer (estados financieros PDF)',
    ],
    outcomes: [
      'Configurar e integrar pasarelas de pago',
      'Calcular e interpretar KPIs financieros',
      'Elaborar estados financieros para e-commerce',
      'Evaluar el uso de criptomonedas en comercio',
    ],
  },
  '6': {
    number: 6,
    romanNumeral: 'VI',
    title: 'Logística y Operaciones',
    subtitle: 'Cadena de suministro y experiencia post-compra',
    description:
      'Gestión eficiente de la cadena logística, desde el almacenamiento hasta la entrega, incluyendo gestión de devoluciones y atención al cliente.',
    accent: '#5f259e',
    bg: '#f3e8ff',
    topics: [
      {
        title: 'Fulfillment y gestión de almacenes',
        description: 'WMS, picking & packing, 3PL y fulfillment por Amazon (FBA).',
      },
      {
        title: 'Última milla y carriers',
        description: 'Optimización de rutas, entregas same-day y click & collect.',
      },
      {
        title: 'Gestión de devoluciones (reverse logistics)',
        description: 'Políticas de devolución, procesamiento y reintegración al inventario.',
      },
      {
        title: 'Servicio al cliente y CX',
        description: 'Chatbots, helpdesks, NPS, CSAT y gestión omnicanal.',
      },
    ],
    tools: [
      'TanStack Table (gestión inventario)',
      'xlsx (reportes operativos)',
      'React Hook Form (formularios logísticos)',
    ],
    outcomes: [
      'Diseñar un flujo logístico eficiente',
      'Seleccionar operadores logísticos adecuados',
      'Implementar sistemas de seguimiento',
      'Optimizar la experiencia post-compra',
    ],
  },
}
