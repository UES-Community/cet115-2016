# Guía de Contribución — CET115-2016

¡Gracias por tu interés en contribuir a este proyecto! Este repositorio está diseñado como una plataforma educativa para la materia **Comercio Electrónico** (código de materia: CET115-2016).

Para mantener un código limpio, estructurado y profesional, te pedimos que sigas las siguientes directrices.

## Commits Convencionales (Conventional Commits)

Este proyecto requiere el uso de commits convencionales para asegurar un historial de cambios legible y automatizable. Los mensajes deben escribirse en **inglés** y seguir el siguiente formato:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Tipos de Commit Permitidos:
- **feat**: Una nueva característica o funcionalidad.
- **fix**: Corrección de un error o bug.
- **docs**: Cambios únicamente en la documentación.
- **style**: Cambios en formato y estilos visuales que no afectan la lógica (espacios en blanco, formateo, punto y coma omitidos, etc.).
- **refactor**: Cambios en el código que no corrigen errores ni añaden funcionalidad, pero mejoran la estructura interna.
- **perf**: Cambios de código que mejoran el rendimiento.
- **test**: Añadir o corregir pruebas unitarias/de integración.
- **chore**: Actualizaciones de tareas de compilación, configuraciones de herramientas de desarrollo o dependencias externas.

### Ejemplos:
- `feat: add interactive finance simulator dashboard`
- `fix: resolve hydration issue on recharts server-side rendering`
- `docs: update contributing guide and license`
- `chore: configure github pages deployment workflow`

---

## Flujo de Trabajo (Workflow)

1. **Crear una rama de trabajo**:
   Usa nombres descriptivos para tus ramas de trabajo a partir de `main`:
   ```bash
   git checkout -b feat/nueva-funcionalidad
   # o
   git checkout -b fix/correccion-error
   ```

2. **Desarrollar y Probar Localmente**:
   Asegúrate de instalar las dependencias con `pnpm install` y verificar la compilación del proyecto antes de realizar un commit:
   ```bash
   pnpm run build
   ```

3. **Subir Cambios y Crear Pull Request**:
   Sube tus cambios y abre una Pull Request apuntando a la rama `main`. Describe de manera concisa qué cambios introduce tu propuesta.

## Estilo de Código y Tecnologías

- **Framework**: Next.js (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Iconografía**: Lucide React
- **Librerías Clave**:
  - `recharts` (Visualización)
  - `@tanstack/react-table` (Tablas dinámicas)
  - `react-hook-form` + `zod` (Formularios validados)
  - `xlsx` (SheetJS para Excel I/O)
  - `@react-pdf/renderer` (Generación de PDF)

Si tienes dudas o consultas sobre la materia o el desarrollo del proyecto, contacta al docente o administrador del repositorio.
