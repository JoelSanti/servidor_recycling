### Servidor EcoHuánuco

Este es un proyecto que utiliza Payload, un CMS basado en Node.js, Express y MongoDB.

Descripción
Este proyecto es el servidor de la app EcoHuánuco

Configuración del entorno
Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

```
DATABASE_URI=<tu cadena de conexión a MongoDB>
PAYLOAD_SECRET=<tu secreto de Payload>
```

Para compilar el build el proyecto puedes hacerlo con:

```
npm run build
```

Para correr el proyecto en local puedes hacerlo con:

```
npm run serve
```
