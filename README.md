# Plataforma Educativa - Comercio Electrónico (CET115-2016)

¡Bienvenido a la plataforma oficial de la materia **Comercio Electrónico (CET115-2016)**! Esta aplicación web está diseñada para servir como base de aprendizaje y simulador interactivo para la gestión, finanzas, administración y logística en el entorno del e-commerce.

El proyecto está construido bajo la categoría temática de **Gestión, Finanzas y Administración**, brindando a los estudiantes herramientas prácticas que simulan el día a día de un negocio digital.

---

## 🚀 Características Clave

La plataforma incluye:
1. **Plan de Estudios**: Detalle de las 6 Unidades de la materia, cubriendo desde fundamentos de e-commerce hasta operaciones de fulfillment y logística.
2. **Biblioteca de Recursos**: Documentación directa de todas las herramientas clave recomendadas.
3. **Simulador Financiero Integrado (`/simulador`)**: Un módulo completo que demuestra y pone en práctica las siguientes herramientas profesionales:
   - **Dashboard con Recharts**: Visualización de KPIs financieros clave (CAC, LTV, ROI, ingresos y egresos diarios) mediante gráficos interactivos.
   - **TanStack Table (Grilla de Datos)**: Gestión y visualización eficiente de transacciones con filtrado por texto, ordenamiento interactivo y paginación.
   - **Formularios Validados (React Hook Form + Zod)**: Módulo de ingreso de transacciones y estados financieros con validación automática y prevención de errores tipográficos/numéricos.
   - **Exportación a Excel (SheetJS / xlsx)**: Descarga de la lista de transacciones y resumen contable a formato `.xlsx` con un solo clic.
   - **Generación de Reportes PDF (@react-pdf/renderer)**: Descarga de informes financieros oficiales en PDF con formato profesional y diseño optimizado.

---

## 🛠️ Stack Tecnológico

- **Core**: Next.js 16 (App Router) + React 19 + TypeScript
- **Estilos y Componentes**: Tailwind CSS + Lucide React
- **Gráficos**: Recharts
- **Tablas**: @tanstack/react-table
- **Formularios & Validación**: React Hook Form + Zod
- **Excel I/O**: xlsx (SheetJS)
- **PDF I/O**: @react-pdf/renderer

---

## 📦 Configuración e Instalación Local

Requisitos previos: Tener instalado [Node.js](https://nodejs.org/) y el gestor de paquetes [pnpm](https://pnpm.io/).

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/UES-Community/cet115-2016.git
   cd cet115-2016
   ```

2. **Instalar las dependencias**:
   ```bash
   pnpm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   pnpm run dev
   ```
   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

4. **Compilar para producción (Exportación Estática)**:
   ```bash
   pnpm run build
   ```
   El compilado estático se generará en la carpeta `out/`, listo para ser desplegado.

---

## 🌐 Despliegue Continuo (CI/CD)

El proyecto está configurado con **GitHub Actions** (`.github/workflows/deploy.yml`) para realizar compilación automática y despliegue a **GitHub Pages** en cada actualización en la rama principal `main`.

---

## 📝 Licencia

Este proyecto está bajo la Licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
