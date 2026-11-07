# Simulador NOM-004 (Ficha de Identificación)

Herramienta interactiva y educativa diseñada para que profesionales de la salud mental experimenten y comprendan la estructura de datos requerida por la **NOM-004-SSA3-2012** (Expediente Clínico) y la **NOM-024-SSA3-2012** (Registro Electrónico para la Salud) desde la perspectiva del paciente.

## 1. Preparación y Optimización de la Aplicación

El proyecto fue desarrollado utilizando **React, TypeScript y Vite**. Vite funciona como nuestra herramienta de construcción (build tool) y se encarga de automatizar los requisitos de optimización:

- **Organización de directorios:** Al ejecutar el comando de construcción, Vite genera una carpeta `dist/` que contiene el `index.html` y agrupa automáticamente los estilos y scripts en el subdirectorio `dist/assets/` (organizando los archivos JS y CSS correspondientes).
- **Minificación y Optimización:** El proceso de _build_ de Vite utiliza _Rollup_ por debajo, el cual minifica automáticamente el código JavaScript y CSS, eliminando espacios, comentarios y ofuscando variables para reducir al máximo el peso de los archivos. Los _assets_ (como imágenes, si se incluyen) también son optimizados.

**Comando utilizado para generar los archivos optimizados:**

```bash
npm run build
```
