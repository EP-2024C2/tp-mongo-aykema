# TP-Mongo - Grupo Aykema

Repositorio del trabajo práctico 2, creado por el **Grupo Aykema**.

## Descripción

Este proyecto implementa una API REST utilizando Node.js y Express, con dos tipos de asociaciones:
- Documentos embebidos para la relación Productos-Componentes
- Referencias para la relación Productos-Fabricantes

Se utiliza **MongoDB** como base de datos principal y **Redis** como sistema de caché, ambos containerizados con **Docker**.

## Estructura del Proyecto

- **src/app.js**: Punto de entrada de la aplicación.
- **/models**: Modelos Mongoose que definen la estructura de los documentos MongoDB.
- **/routes**: Rutas para interactuar con los recursos.
- **/controllers**: Lógica para manejar las solicitudes y respuestas de las rutas.
- **/db**: Contiene la configuración de conexión a MongoDB y Redis.
- **/middlewares**: Contiene los middlewares personalizados y manejo de caché con Redis.
- **/schemas**: Define los esquemas de validación de datos utilizando Joi.

## Dependencias

### Principales:

- **express**: Framework para crear la API REST.
- **mongoose**: ODM para MongoDB que maneja el modelado y consultas a la base de datos.
- **joi**: Biblioteca para validación de datos y esquemas.
- **redis**: Cliente de Redis para manejo de caché.
- **dotenv**: Carga variables de entorno desde un archivo `.env`.

### Desarrollo:

- **nodemon**: Herramienta para reiniciar el servidor automáticamente durante el desarrollo.

## Instalación

1. **Clonar el repositorio**:

   ```bash
    git clone https://github.com/EP-2024C2/tp-mongo-aykema.git
    cd tp-mongo-aykema
    ```

2. **Instalar las dependencias**:

   ```bash
   npm i
    ```

3. **Configurar y ejecutar con Docker**:

- Asegúrate de tener Docker y Docker Compose instalados en tu sistema.

- Construir y levantar los contenedores:

   ```bash
   docker compose up -d
   ```
    Esto iniciará:

    - MongoDB en el puerto 27017
    - Mongo Express (interfaz web) en el puerto 8081
    - Redis en el puerto 6379
    - RedisInsight (interfaz web) en el puerto 5540

4. **Verificar que los contenedores estén corriendo**:

   ```bash
    docker ps
   ```

    Acceder a las interfaces web:

    - Mongo Express: http://localhost:8081
    - RedisInsight: http://localhost:5540

    Para detener los contenedores:

    ```bash
    docker compose down
    ```

Nota: Las credenciales y configuraciones se encuentran en el archivo `.env` y `docker-compose.yml`.

## Uso

### Desarrollo

Para iniciar la aplicación en modo desarrollo con **Nodemon**, ejecuta:

```bash
npm run dev
```

### Producción

Para iniciar la aplicación en producción, ejecuta:

```bash
npm start
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Rutas

Las rutas definidas en la aplicación son:

### Componentes
- `GET /componentes`: Obtiene todos los componentes.
- `GET /componentes/:id`: Obtiene un componente por su ID.
- `POST /componentes`: Crea un nuevo componente.
- `DELETE /componentes/:id`: Elimina un componente por su ID.
- `PUT /componentes/:id`: Actualiza un componente por su ID.
- `GET /componentes/:id/productos`: Obtiene los productos asociados a un componente por su ID.

### Fabricantes
- `GET /fabricantes`: Obtiene todos los fabricantes.
- `GET /fabricantes/:id`: Obtiene un fabricante por su ID.
- `POST /fabricantes`: Crea un nuevo fabricante.
- `DELETE /fabricantes/:id`: Elimina un fabricante por su ID.
- `PUT /fabricantes/:id`: Actualiza un fabricante por su ID.
- `GET /fabricantes/:id/productos`: Obtiene los productos asociados a un fabricante por su ID.

### Productos
- `GET /productos`: Obtiene todos los productos.
- `GET /productos/:id`: Obtiene un producto por su ID.
- `POST /productos`: Crea un nuevo producto.
- `DELETE /productos/:id`: Elimina un producto por su ID.
- `PUT /productos/:id`: Actualiza un producto por su ID.

#### Componentes de Productos
- `GET /productos/:id/componentes`: Obtiene los componentes de un producto.
- `GET /productos/:id/componentes/:componenteId`: Obtiene un componente específico de un producto.
- `POST /productos/:id/componentes`: Agrega un componente a un producto.
- `PUT /productos/:id/componentes/:componenteId`: Actualiza un componente de un producto.
- `DELETE /productos/:id/componentes/:componenteId`: Elimina un componente de un producto.

#### Fabricantes de Productos
- `GET /productos/:id/fabricantes`: Obtiene los fabricantes de un producto.
- `POST /productos/:id/fabricantes`: Asocia un fabricante a un producto.

## Autores

- **Kevin Caria**
- **Martin Bruno**
- **Aymara Dileo**