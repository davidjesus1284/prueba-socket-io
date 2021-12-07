
## Explicación del servicio

Esta aplicación esta realizada para la creación y actualización de productos registrados en mongoDB implementando sockets para su comunicacion en tiempo real.

## Framework y paquetes utilizado

- express
- cors
- cross-env
- dotenv
- mongoose
- socket.io

## Instrucciones para su configuración

Despues de clonar el proyecto haga los siguientes paso:
``````````
$ npm install
``````````
Debera crar el archivo .env.development y colocara la siguiente informacion:

- PORT=3000 o el que usted desee utilizar.
- DB=XXXXXXX Nombre de la base de datos por ejemplo: mongodb://127.0.0.1:27017/tienda de manera local si lo tiene instalado.

## Explicación de uso:

- Para poder iniciar el servicio debe instalar el paquete nodemon (npm install -g nodemon) de manera global y ejecutar este comando: npm run dev
- Cuando el servicio este levantado colocar en el navegador localhost:(El puerto que configuro)