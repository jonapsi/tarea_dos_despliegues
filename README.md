# Simulador NOM-004 (Ficha de Identificación)

Herramienta interactiva y educativa diseñada para que profesionales de la salud mental experimenten y comprendan la estructura de datos requerida por la **NOM-004-SSA3-2012** (Expediente Clínico) y la **NOM-024-SSA3-2012** (Registro Electrónico para la Salud) desde la perspectiva del paciente.

## 1. Preparación y Optimización de la Aplicación

El proyecto fue desarrollado utilizando **React, TypeScript y Vite**. Vite funciona como nuestra herramienta de construcción (build tool) y se encarga de automatizar los requisitos de optimización:

- **Organización de directorios:** Al ejecutar el comando de construcción, Vite genera una carpeta `dist/` que contiene el `index.html` y agrupa automáticamente los estilos y scripts en el subdirectorio `dist/assets/`.
- **Minificación y Optimización:** El proceso de _build_ de Vite utiliza _Rollup_ por debajo, el cual minifica automáticamente el código JavaScript y CSS, eliminando espacios, comentarios y ofuscando variables para reducir al máximo el peso de los archivos.
- **Configuración de ruta simulada:** Se modificó el archivo `vite.config.ts` agregando la directiva `base: '/simulador/'` para preparar la aplicación para su despliegue en un subdirectorio.

**Comando utilizado para generar los archivos optimizados:**

```bash
npm run build
```

## Empaquetado

Una vez generada la carpeta dist con los archivos estáticos listos para producción, se procedió a crear un paquete comprimido para facilitar su traslado y despliegue en el servidor web.

Comando utilizado para empaquetar:

# Se comprime el contenido de la carpeta 'dist'

tar -czvf simulador-nom004.tar.gz -C dist/ .

## Versionamiento del Proyecto

El proyecto está bajo control de versiones con Git. Se siguieron buenas prácticas utilizando commits descriptivos para registrar el historial de cambios.

Secuencia de comandos utilizada:

Bash
git init
git add .
git commit -m "feat: inicializa proyecto con react, vite y tailwind"
git commit -m "feat: agrega componentes Header, PatientForm y JsonModal"
git commit -m "docs: agrega README con documentacion de despliegue"
git branch -M main
git remote add origin <https://github.com/jonapsi/tarea_dos_despliegues>
git push -u origin main

## Configuración del servidor web (Nginx)

server { # Configuración de puertos
listen 80;
listen [::]:80;

    # Coincide con la petición a localhost
    server_name localhost;

    # Mapeo de directorios en una ruta simulada
    location /simulador {
        alias /var/www/simulador-nom004;
        index index.html;

        # Redirección para Single Page Application (React) en subruta
        try_files $uri$uri/ /simulador/index.html;
    }

    # Optimización de caché para archivos estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

}
