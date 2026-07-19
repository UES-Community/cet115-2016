export type Topic = {
  title: string
  description: string
}

export type QuizQuestion = {
  id: string
  question: string
  options: string[]
  correctOptionIndex: number
  explanation: string
}

export type TheorySection = {
  id: string
  title: string
  subtitle?: string
  content: string
  keyTakeaways: string[]
}

export type InteractiveExercise = {
  title: string
  description: string
  type: 'classifier' | 'calculator' | 'case-study'
  data: any
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
  theory?: TheorySection[]
  quiz?: QuizQuestion[]
  exercise?: InteractiveExercise
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
    theory: [
      {
        id: 'u1-t1',
        title: 'Evolución Histórica del Comercio Electrónico',
        subtitle: 'De las transferencias EDI al Social Commerce masivo',
        content: `El Comercio Electrónico (E-commerce) abarca cualquier transacción comercial realizada a través de redes de telecomunicación digitales.

1. **Década de 1970 - EDI (Electronic Data Interchange):** Intercambio de documentos estandarizados entre empresas sobre redes privadas.
2. **Década de 1990 - Nacimiento de la Web Comercial:** Aparición del protocolo SSL por Netscape (1994) y lanzamiento de Amazon y eBay (1995).
3. **Década de 2000 - Expansión y Web 2.0:** Surgimiento de pasarelas como PayPal, redes sociales y plataformas SaaS.
4. **Década de 2010 en adelante - M-Commerce y Social Commerce:** Dominio de smartphones, compras en un clic y ventas en TikTok/Instagram.`,
        keyTakeaways: [
          'El protocolo SSL (1994) fue el catalizador clave para la confianza en transacciones en línea.',
          'El e-commerce evolucionó de modelos de intercambio B2B rígidos a experiencias omnichannel personalizadas.',
        ],
      },
      {
        id: 'u1-t2',
        title: 'Taxonomía y Modelos de Negocio Electrónico',
        subtitle: 'Clasificación según los participantes del mercado',
        content: `Los modelos de e-commerce se clasifican según quién vende y quién compra:

- **B2C (Business to Consumer):** Venta directa al consumidor final (ej. Amazon, Tiendanube).
- **B2B (Business to Business):** Transacciones entre empresas, caracterizadas por mayor volumen y negociación (ej. Alibaba).
- **C2C (Consumer to Consumer):** Plataformas donde particulares comercian entre sí (ej. Mercado Libre C2C, Wallapop).
- **G2C / C2G (Government to Citizen):** Trámites y pagos tributarios en portales gubernamentales.`,
        keyTakeaways: [
          'El modelo B2B mueve mayor volumen monetario global que el B2C.',
          'Las plataformas C2C dependen críticamente de sistemas de reputación y fideicomiso (escrow).',
        ],
      },
    ],
    exercise: {
      title: 'Clasificador de Modelos de E-Commerce',
      description: 'Identifica la categoría correcta (B2B, B2C, C2C o G2C) para cada caso práctico.',
      type: 'classifier',
      data: {
        options: ['B2C', 'B2B', 'C2C', 'G2C'],
        items: [
          {
            scenario: 'Un usuario vende su bicicleta usada a otro particular en Mercado Libre.',
            description: 'Transacción entre dos personas físicas.',
            correctCategory: 'C2C',
            explanation: 'Es Consumer-to-Consumer porque involucra dos particulares.',
          },
          {
            scenario: 'Una fábrica textil vende 5,000 metros de tela a una marca de ropa deportiva.',
            description: 'Venta al por mayor entre dos empresas.',
            correctCategory: 'B2B',
            explanation: 'Es Business-to-Business al tratarse de transacciones corporativas.',
          },
          {
            scenario: 'Un estudiante compra un libro de texto directamente en la tienda en línea de la editorial.',
            description: 'Venta de una empresa al consumidor final.',
            correctCategory: 'B2C',
            explanation: 'Es Business-to-Consumer.',
          },
          {
            scenario: 'Un ciudadano paga la renovación de su licencia de conducir en el portal del gobierno.',
            description: 'Pago de tasas del ciudadano al estado.',
            correctCategory: 'G2C',
            explanation: 'Es Government-to-Citizen.',
          },
        ],
      },
    },
    quiz: [
      {
        id: 'q1-1',
        question: '¿Qué tecnología desarrollada en 1994 hizo posible el comercio electrónico seguro en la web?',
        options: ['HTML5', 'SSL (Secure Sockets Layer)', 'Blockchain', 'JavaScript'],
        correctOptionIndex: 1,
        explanation: 'Netscape desarrolló SSL en 1994, permitiendo el cifrado de datos financieros sensibles.',
      },
      {
        id: 'q1-2',
        question: '¿Cuál es la principal característica del comercio B2B frente al B2C?',
        options: [
          'Mayor cantidad de compras por impulso',
          'Tiempos de decisión más rápidos',
          'Mayor volumen transaccional y procesos de venta más largos',
          'Ausencia de contratos o facturación formal',
        ],
        correctOptionIndex: 2,
        explanation: 'En B2B los volúmenes son más elevados y las decisiones requieren múltiples aprobaciones corporativas.',
      },
      {
        id: 'q1-3',
        question: '¿Qué modelo describe a una persona que vende un producto usado a otra a través de una plataforma?',
        options: ['B2B', 'B2C', 'C2C', 'G2B'],
        correctOptionIndex: 2,
        explanation: 'C2C (Consumer to Consumer) representa transacciones entre consumidores finales.',
      },
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
    theory: [
      {
        id: 'u2-t1',
        title: 'Modelos Freemium y Suscripción (SaaS)',
        subtitle: 'Retención y Recurring Revenue (MRR/ARR)',
        content: `El modelo SaaS se basa en ingresos recurrentes (Monthly Recurring Revenue - MRR).
- **Freemium:** Acceso gratuito a funcionalidades básicas con cobro por funciones avanzadas (ej. Spotify, Dropbox).
- **Efectos de Red:** Ocurren cuando el valor de la plataforma aumenta a medida que más usuarios la utilizan (ej. Uber, Airbnb).`,
        keyTakeaways: [
          'La tasa de conversión típica de free a paid en Freemium ronda el 2% al 5%.',
          'Los efectos de red directos crean barreras defensivas de mercado muy fuertes.',
        ],
      },
      {
        id: 'u2-t2',
        title: 'Adaptación del Business Model Canvas para Empresas Digitales',
        subtitle: 'Estructuración de propuestas de valor y canales digitales',
        content: `El Canvas Digital adapta el modelo tradicional de Alexander Osterwalder priorizando métricas de adquisición, economías de escala de software y bucles de virabilidad.

1. **Propuesta de Valor Digital:** Resolución de fricciones mediante velocidad, conveniencia o costo cero marginal.
2. **Estructura de Costos:** Desplazamiento de costos fijos físicos hacia costos de infraestructura cloud, APIs y adquisición de usuarios (CAC).
3. **Flujos de Ingresos:** Diversificación entre suscripción, comisión transaccional, venta cruzada (cross-selling) y monetización publicitaria.`,
        keyTakeaways: [
          'En negocios digitales el costo marginal de atender a un usuario adicional tiende a cero.',
          'La adquisición y retención de usuarios son los pilares fundamentales del Canvas Digital.',
        ],
      },
    ],
    exercise: {
      title: 'Identificador de Monetización Digital',
      description: 'Clasifica la fuente de ingresos principal de cada plataforma.',
      type: 'classifier',
      data: {
        options: ['Suscripción/SaaS', 'Marketplace Commission', 'Freemium', 'Publicidad'],
        items: [
          {
            scenario: 'Netflix cobra una tarifa mensual por acceso ilimitado a su catálogo.',
            description: 'Cobro periódico por acceso a servicios.',
            correctCategory: 'Suscripción/SaaS',
            explanation: 'Es un modelo de suscripción recurrente pura.',
          },
          {
            scenario: 'Spotify ofrece música gratis con anuncios y cobra por eliminar la publicidad.',
            description: 'Nivel gratuito con opción de upgrade premium.',
            correctCategory: 'Freemium',
            explanation: 'Es el clásico modelo Freemium.',
          },
          {
            scenario: 'Airbnb cobra una comisión del 3% al anfitrión y del 14% al huésped.',
            description: 'Comisión por intermediación de plataforma multilateral.',
            correctCategory: 'Marketplace Commission',
            explanation: 'Monetiza mediante comisión por transacción facilitada.',
          },
          {
            scenario: 'Google ofrece su motor de búsqueda gratis y cobra a empresas por aparecer patrocinadas.',
            description: 'Monetización mediante subasta de palabras clave.',
            correctCategory: 'Publicidad',
            explanation: 'Monetiza a través del modelo publicitario (PPC / Ads).',
          },
        ],
      },
    },
    quiz: [
      {
        id: 'q2-1',
        question: '¿Qué es el MRR en un modelo de suscripción?',
        options: ['Margen Real de Rendimiento', 'Monthly Recurring Revenue', 'Maximum Retail Rate', 'Market Ratio Research'],
        correctOptionIndex: 1,
        explanation: 'MRR significa Monthly Recurring Revenue (Ingreso Recurrente Mensual).',
      },
      {
        id: 'q2-2',
        question: '¿Qué son los efectos de red directos?',
        options: [
          'El costo de la infraestructura de red del servidor',
          'El aumento de valor de un servicio a medida que se suman más usuarios',
          'Los descuentos por volumen de compras corporativas',
          'El rendimiento de velocidad de fibra óptica',
        ],
        correctOptionIndex: 1,
        explanation: 'Los efectos de red hacen que el servicio sea más valioso para cada usuario cuantos más usuarios participen.',
      },
      {
        id: 'q2-3',
        question: '¿Cuál es una característica clave del costo marginal en productos de software pura?',
        options: [
          'Crece exponencialmente con cada usuario',
          'Es cercano a cero para distribuir una unidad adicional',
          'Es igual al costo de adquisición del cliente (CAC)',
          'Es regulado por organismos gubernamentales',
        ],
        correctOptionIndex: 1,
        explanation: 'En software e información digital, duplicar la distribución tiene costo marginal prácticamente nulo.',
      },
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
    theory: [
      {
        id: 'u3-t1',
        title: 'Arquitectura Headless vs. Monolítica',
        subtitle: 'Desacoplamiento del frontend y backend en e-commerce',
        content: `Las plataformas e-commerce modernas han evolucionado de sistemas monolíticos a arquitecturas desacopladas (Headless Commerce).

- **Monolítico:** Frontend y Backend están fuertemente unidos (ej. WooCommerce tradicional).
- **Headless:** El frontend (Next.js/React) consume la lógica de negocio del backend mediante APIs REST/GraphQL.`,
        keyTakeaways: [
          'Headless permite mayor velocidad de carga, flexibilidad UX y omnicanalidad.',
        ],
      },
      {
        id: 'u3-t2',
        title: 'Integración de ERP (Enterprise Resource Planning) y CRM',
        subtitle: 'Sincronización de inventario, pedidos y datos de clientes',
        content: `La integración tecnológica conecta la tienda web con el núcleo operacional de la empresa:

1. **ERP (SAP, Odoo, Oracle):** Mantiene el stock centralizado en tiempo real, evitando ventas sin inventario (overselling).
2. **CRM (Salesforce, HubSpot):** Almacena el historial de interacciones, hábitos de compra y tickets de soporte.
3. **Middleware / Webhooks:** Garantizan la comunicación síncrona/asíncrona entre plataformas ante cada evento de compra.`,
        keyTakeaways: [
          'Sin integración ERP en tiempo real, el riesgo de quiebre de stock en picos de demanda aumenta radicalmente.',
          'Las APIs REST/GraphQL son el estándar de oro para conectar microservicios e-commerce.',
        ],
      },
    ],
    exercise: {
      title: 'Selección de Arquitectura E-commerce',
      description: 'Elige el tipo de arquitectura ideal (Monolítica o Headless) según los requerimientos del cliente.',
      type: 'classifier',
      data: {
        options: ['Monolítica SaaS', 'Headless Commerce', 'ERP Integration'],
        items: [
          {
            scenario: 'Una pequeña boutique local desea abrir su tienda en 24 horas con plantilla estándar.',
            description: 'Presupuesto bajo y rapidez de implementación.',
            correctCategory: 'Monolítica SaaS',
            explanation: 'Plataformas como Shopify o WooCommerce monolítico son ideales para este perfil.',
          },
          {
            scenario: 'Una marca global requiere una app iOS, sitio web ultra veloz en Next.js y kioscos interactivos sincronizados.',
            description: 'Omnicanalidad y diseño totalmente personalizado.',
            correctCategory: 'Headless Commerce',
            explanation: 'Headless desacopla la lógica y permite alimentar múltiples interfaces vía API.',
          },
          {
            scenario: 'Empresa distribuidora necesita actualizar automáticamente los precios y stock de 50,000 productos desde su almacén central.',
            description: 'Sincronización masiva de inventario.',
            correctCategory: 'ERP Integration',
            explanation: 'Requiere integración directa con el sistema ERP corporativo.',
          },
        ],
      },
    },
    quiz: [
      {
        id: 'q3-1',
        question: '¿Qué caracteriza a una solución de Headless Commerce?',
        options: [
          'No tiene base de datos',
          'La capa de presentación (frontend) está desacoplada del motor comercial (backend) vía APIs',
          'No requiere servidores ni dominio web',
          'Solo funciona para transacciones físicas',
        ],
        correctOptionIndex: 1,
        explanation: 'Headless separa el frontend de la lógica de backend mediante APIs.',
      },
      {
        id: 'q3-2',
        question: '¿Cuál es la función principal de un sistema ERP en una operación e-commerce?',
        options: [
          'Enviar correos masivos promocionales',
          'Gestionar el inventario, compras, finanzas y operaciones centralizadas',
          'Diseñar el banner principal de la página de inicio',
          'Medir los clics en redes sociales',
        ],
        correctOptionIndex: 1,
        explanation: 'El ERP (Enterprise Resource Planning) centraliza la gestión operativa e inventarios.',
      },
      {
        id: 'q3-3',
        question: '¿Qué tecnología permite enviar notificaciones instantáneas entre sistemas cuando ocurre una compra?',
        options: ['Webhooks', 'Cookies de sesión', 'FTP pasivo', 'Archivos CSV manuales'],
        correctOptionIndex: 0,
        explanation: 'Los Webhooks envían notificaciones HTTP en tiempo real ante eventos específicos.',
      },
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
    theory: [
      {
        id: 'u4-t1',
        title: 'Optimización de la Tasa de Conversión (CRO)',
        subtitle: 'Maximizando el retorno de la audiencia de e-commerce',
        content: `CRO es el conjunto de prácticas orientadas a incrementar el porcentaje de visitantes que completan una compra.
- **Tasa de conversión promedio global:** 2% a 3%.
- **Estrategias clave:** Pruebas A/B, simplificación del checkout, prueba social (reseñas) y remarketing de carrito abandonado.`,
        keyTakeaways: [
          'Reducir los pasos del checkout incrementa significativamente la conversión.',
        ],
      },
      {
        id: 'u4-t2',
        title: 'Estrategias de SEO y SEM para E-commerce',
        subtitle: 'Captación orgánica y pauta de alta intencionalidad comercial',
        content: `El tráfico en e-commerce se divide entre la visibilidad orgánica (SEO) y la pauta de pago por clic (SEM/PPC).

1. **SEO On-Page & Fichas de Producto:** Estructura de datos Schema.org (Product, Offer, AggregateRating), URLs amigables e imágenes optimizadas en WebP/AVIF.
2. **Google Shopping & Performance Max:** Campañas orientadas a producto con feed XML de inventario sincronizado.
3. **Email Remarketing y Automation:** Secuencias automatizadas de bienvenida, recuperación de carritos (abandoned cart) y campañas de re-engagement.`,
        keyTakeaways: [
          'Los datos estructurados Schema.org son esenciales para que los productos aparezcan en Rich Snippets de Google.',
          'La recuperación de carritos abandonados mediante email recupera en promedio entre un 10% y 15% de ventas perdidas.',
        ],
      },
    ],
    exercise: {
      title: 'Estrategia de Embudo de Conversión',
      description: 'Asigna la táctica correcta a cada etapa del funnel (TOFU, MOFU, BOFU).',
      type: 'classifier',
      data: {
        options: ['TOFU (Atracción)', 'MOFU (Consideración)', 'BOFU (Conversión/Fidelización)'],
        items: [
          {
            scenario: 'Publicar artículos de blog optimizados para SEO de alto volumen de búsqueda.',
            description: 'Generación de tráfico inicial.',
            correctCategory: 'TOFU (Atracción)',
            explanation: 'Atrae usuarios en la fase inicial de conocimiento del problema.',
          },
          {
            scenario: 'Crear una guía comparativa en PDF descargable entre diferentes modelos de productos.',
            description: 'Nutrición de prospectos interesados.',
            correctCategory: 'MOFU (Consideración)',
            explanation: 'Ayuda a evaluar opciones durante la fase de consideración.',
          },
          {
            scenario: 'Enviar un correo de descuento exclusivo por carrito abandonado dentro de las 2 horas posteriores.',
            description: 'Cierre inmediato de venta pendiente.',
            correctCategory: 'BOFU (Conversión/Fidelización)',
            explanation: 'Acción de alta intención para concretar la compra.',
          },
        ],
      },
    },
    quiz: [
      {
        id: 'q4-1',
        question: '¿Qué significa la sigla CRO en Marketing Digital?',
        options: ['Customer Relationship Officer', 'Conversion Rate Optimization', 'Cost Reduction Option', 'Content Retention Organization'],
        correctOptionIndex: 1,
        explanation: 'CRO significa Conversion Rate Optimization (Optimización de la Tasa de Conversión).',
      },
      {
        id: 'q4-2',
        question: '¿Qué formato de datos estructurados es recomendado por Google para indexar productos con precios y stock?',
        options: ['Schema.org Product JSON-LD', 'XML Sitemap clásico', 'Archivo TXT de robots', 'Etiquetas meta genericas'],
        correctOptionIndex: 0,
        explanation: 'Schema.org con formato JSON-LD permite a los motores de búsqueda renderizar Rich Snippets de producto.',
      },
      {
        id: 'q4-3',
        question: '¿Cuál es el porcentaje promedio típico de conversión en tiendas en línea estándar?',
        options: ['25% a 30%', '2% a 3%', '50%', '0.1%'],
        correctOptionIndex: 1,
        explanation: 'El promedio de la industria del comercio electrónico oscila entre el 2% y el 3%.',
      },
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
    theory: [
      {
        id: 'u5-t1',
        title: 'Métricas Financieras Fundamentales: CAC vs. LTV',
        subtitle: 'La ecuación de rentabilidad unitaria en e-commerce',
        content: `La salud financiera de un e-commerce depende de la relación entre:
- **CAC (Cost of Customer Acquisition):** Costo total de adquisición de clientes dividido por los nuevos clientes.
- **LTV (Lifetime Value):** Valor total estimado que generará un cliente durante toda su relación comercial.

**Regla de oro:** El LTV debe ser al menos 3 veces superior al CAC (LTV:CAC ≥ 3:1).`,
        keyTakeaways: [
          'Un LTV:CAC < 1 indica que el negocio pierde dinero con cada cliente nuevo.',
        ],
      },
    ],
    exercise: {
      title: 'Diagnóstico de Salud Financiera',
      description: 'Evalúa la viabilidad según el indicador LTV/CAC.',
      type: 'classifier',
      data: {
        options: ['Saludable (LTV:CAC >= 3)', 'Insostenible (LTV <= CAC)'],
        items: [
          {
            scenario: 'Un e-commerce gasta $50 en adquirir un cliente cuyo gasto total histórico es $200.',
            description: 'Ratio LTV:CAC de 4:1.',
            correctCategory: 'Saludable (LTV:CAC >= 3)',
            explanation: 'El LTV supera por 4 veces el CAC, asegurando rentabilidad unitaria.',
          },
          {
            scenario: 'Una tienda gasta $80 en anuncios por cada compra promedio de $60 de cliente único.',
            description: 'CAC superior al LTV.',
            correctCategory: 'Insostenible (LTV <= CAC)',
            explanation: 'Adquirir el cliente cuesta más que el retorno esperado.',
          },
        ],
      },
    },
    quiz: [
      {
        id: 'q5-1',
        question: '¿Cuál es la relación recomendada mínima deseable entre LTV y CAC en e-commerce?',
        options: ['1:1', '2:1', '3:1', '10:1'],
        correctOptionIndex: 2,
        explanation: 'La relación LTV:CAC ideal en negocios sostenibles debe ser al menos 3 a 1.',
      },
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
    theory: [
      {
        id: 'u6-t1',
        title: 'Operaciones de Fulfillment y Logística Inversa',
        subtitle: 'El ciclo de vida completo del pedido e-commerce',
        content: `El Fulfillment comprende la recepción, almacenamiento, empaque y despacho de pedidos.
- **Logística de Última Milla:** Etapa final del envío hacia el cliente final; suele representar hasta el 50% del costo total logístico.
- **Logística Inversa:** Proceso eficiente para recibir, auditar y reincorporar devoluciones de productos.`,
        keyTakeaways: [
          'La velocidad y transparencia en el rastreo de envíos son factores clave en el CSAT (Customer Satisfaction).',
        ],
      },
    ],
    exercise: {
      title: 'Clasificador de Modelos Logísticos',
      description: 'Identifica la solución operativa (3PL, In-House, Dropshipping) según el caso.',
      type: 'classifier',
      data: {
        options: ['Dropshipping', '3PL (Tercerizado)', 'In-House Fulfillment'],
        items: [
          {
            scenario: 'La tienda no posee inventario físico; el proveedor despacha directamente al cliente.',
            description: 'Modelo sin inventario propio.',
            correctCategory: 'Dropshipping',
            explanation: 'Corresponde a Dropshipping.',
          },
          {
            scenario: 'Una empresa contrata a DHL para gestionar su almacén, empaque y entregas.',
            description: 'Tercerización logística completa.',
            correctCategory: '3PL (Tercerizado)',
            explanation: 'Es un operador logístico de tercera parte (3PL).',
          },
        ],
      },
    },
    quiz: [
      {
        id: 'q6-1',
        question: '¿Qué representa la etapa de "Última Milla" en la cadena de suministro?',
        options: [
          'El tramo inicial del fabricante al almacén',
          'El paso final del paquete hasta el domicilio del cliente',
          'El proceso de reciclaje del empaque',
          'El cobro final de la tarjeta de crédito',
        ],
        correctOptionIndex: 1,
        explanation: 'La Última Milla es el trayecto final de entrega al cliente.',
      },
    ],
  },
  '7': {
    number: 7,
    romanNumeral: 'VII',
    title: 'Cuestiones Éticas, Sociales y Políticas',
    subtitle: 'Privacidad, propiedad intelectual, gobernanza y responsabilidad en el e-commerce',
    description:
      'Análisis de los dilemas éticos, marcos de privacidad de datos (GDPR/Habeas Data), propiedad intelectual y gobernanza regulatoria en el comercio electrónico.',
    accent: '#dc5f05',
    bg: '#fff7ed',
    topics: [
      {
        title: 'Derecho a la privacidad y protección de datos',
        description: 'GDPR, normativas locales de habeas data, consentimiento y gobernanza de información.',
      },
      {
        title: 'Propiedad intelectual en entornos digitales',
        description: 'Derechos de autor, marcas registradas, patentes de software y protección anti-piratería.',
      },
      {
        title: 'Gobierno y regulación del e-commerce',
        description: 'Impuestos digitales, jurisdicción transfronteriza y neutralidad de la red.',
      },
      {
        title: 'Ética y responsabilidad social corporativa',
        description: 'Algoritmos sesgados, patrones oscuros (dark patterns) y sostenibilidad ambiental.',
      },
    ],
    tools: ['React Hook Form (consentimiento de privacidad)', '@react-pdf/renderer (políticas)'],
    outcomes: [
      'Garantizar el cumplimiento de normativas de protección de datos (GDPR)',
      'Proteger la propiedad intelectual de marcas y productos digitales',
      'Auditar interfaces para erradicar patrones oscuros (dark patterns)',
      'Diseñar políticas de privacidad y términos transparentes',
    ],
    theory: [
      {
        id: 'u7-t1',
        title: 'Privacidad y Protección de Datos Personales',
        subtitle: 'El impacto del GDPR y las leyes de Habeas Data',
        content: `La recolección masiva de datos por plataformas de e-commerce impone estrictos deberes legales e éticos.

- **Principios del GDPR:** Consentimiento explícito, minimización de datos, derecho al olvido y portabilidad de información.
- **Patrones Oscuros (Dark Patterns):** Interfaces diseñadas deliberadamente para engañar o manipular al usuario (ej. suscripciones ocultas).`,
        keyTakeaways: [
          'El consentimiento implícito o casillas pre-marcadas está prohibido en normativas de privacidad avanzadas.',
        ],
      },
    ],
    exercise: {
      title: 'Auditoría de Ética y Privacidad UX',
      description: 'Identifica si el diseño cumple con principios éticos o incurre en un "Dark Pattern".',
      type: 'classifier',
      data: {
        options: ['Diseño Ético Transparent', 'Dark Pattern (Patrón Oscuro)'],
        items: [
          {
            scenario: 'Un sitio agrega automáticamente un seguro de envío de $5 al carrito sin consultar al usuario.',
            description: 'Modificación no transparente del total.',
            correctCategory: 'Dark Pattern (Patrón Oscuro)',
            explanation: 'Añadir productos o cobros por defecto sin consentimiento es un Dark Pattern (Sneak into Basket).',
          },
          {
            scenario: 'Un botón claro y de un solo clic permite a los usuarios darse de baja de la lista de correo.',
            description: 'Proceso de baja accesible.',
            correctCategory: 'Diseño Ético Transparent',
            explanation: 'Cumple con los principios de respeto a la autonomía del usuario.',
          },
        ],
      },
    },
    quiz: [
      {
        id: 'q7-1',
        question: '¿Qué es un "Dark Pattern" en el diseño de interfaces e-commerce?',
        options: [
          'Un modo oscuro para ahorrar batería',
          'Un diseño de interfaz engañoso que manipula al usuario a tomar acciones no deseadas',
          'Un código CSS mal optimizado',
          'Una política de privacidad extensa',
        ],
        correctOptionIndex: 1,
        explanation: 'Los Dark Patterns son trucos de diseño visual para inducir compras o suscripciones no deseadas.',
      },
    ],
  },
}
