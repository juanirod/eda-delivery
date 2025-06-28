<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Plataforma de Delivery con Arquitectura Orientada a Eventos (EDA)

Este es un backend para una plataforma de delivery, construido con [NestJS](https://nestjs.com/), y es un ejemplo práctico de cómo las diferentes partes de un sistema pueden comunicarse de manera desacoplada 

## ¿De qué se trata este proyecto?

Imagina una app como Rappi o Pedidos Ya. Por detrás, hay muchas cosas pasando: un cliente crea una orden, un restaurante la acepta, un repartidor la recoge y finalmente se entrega. Con este proyecto busqué simular esa lógica de negocio a una menor escala.

La parte interesante es *cómo* se comunican estas distintas entidades (clientes, restaurantes, repartidores). En lugar de que un servicio llame directamente a otro (lo que crea un acoplamiento fuerte), usamos eventos. Por ejemplo, cuando se crea una orden, el sistema simplemente "grita": "¡Hey, se creó una nueva orden!". Otros módulos que estén interesados en ese evento (como el de restaurantes o el de clientes) reaccionarán y harán lo que necesiten hacer.

Eso, en esencia, es la **Arquitectura Orientada a Eventos (EDA)**.

## ¿Cómo está organizado?

La estructura del código está pensada para ser bastante intuitiva:

-   `src/`: Aquí vive toda la lógica de la aplicación.
    -   `main.ts`: El punto de entrada de nuestra app.
    -   `app.module.ts`: El módulo raíz que une todo.
    -   **Módulos de Dominio (`customers`, `orders`, `riders`, `sellers`):** Cada una de estas carpetas representa una parte clave de nuestro negocio. Tienen sus propios controladores (para manejar las peticiones HTTP), servicios (donde está la lógica) y entidades (la forma de los datos).
    -   **El corazón de la EDA (`events`):** Esta carpeta es fundamental para entender la arquitectura. Aquí es donde definimos los "listeners" (oyentes). Cada vez que un servicio emite un evento (por ejemplo, `OrderCreatedEvent`), los listeners correspondientes en esta carpeta se activan para realizar acciones. Verás que los listeners están organizados por el actor que reacciona (cliente, repartidor, etc.).

## ¡Manos a la obra!

Para poner a correr el proyecto en tu máquina, solo necesitas seguir estos pasos.

1.  **Instalar dependencias:**
    Asegúrate de tener [pnpm](https://pnpm.io/) instalado. Luego, desde la raíz del proyecto, ejecuta:
    ```bash
    pnpm install
    ```

2.  **Ejecutar la aplicación en modo de desarrollo:**
    Este comando iniciará el servidor y se reiniciará automáticamente cada vez que hagas un cambio en el código.
    ```bash
    pnpm run start:dev
    ```

¡Y listo! El servidor estará corriendo en `http://localhost:3000`.

## Probando que todo funcione

La calidad del software es importante, por eso tenemos tests. Puedes ejecutarlos con los siguientes comandos:

-   **Tests unitarios:**
    ```bash
    pnpm run test
    ```

-   **Tests End-to-End (E2E):**
    Estos tests simulan peticiones HTTP reales a nuestros endpoints.
    ```bash
    pnpm run test:e2e
    ```

-   **Cobertura de tests:**
    Para ver qué porcentaje de nuestro código está cubierto por los tests.
    ```bash
    pnpm run test:cov
    ```

Espero que disfrutes explorando el código y que te sea de gran ayuda para entender los conceptos de EDA. ¡Siéntete libre de experimentar y romper cosas! Es la mejor manera de aprender.