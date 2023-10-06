Realizar un sistema que nos permita gestionar una simulación de base de datos en donde guardemos peliculas.

Necesitaremos dos archivos.

PELICULAS.TS

    - En peliculas.ts tendremos toda la lógica de nuestro sistema. Es decir, los módulos.
    - Los módulos serán funciones especificas que modifican la base de datos.
    - TODOS los módulos (funciones) retornan algo.
    - No debe existir NINGUN console.log() en peliculas.ts
    - Los módulos se deberán exportar.

INDEX.TS

    - Va a inportar los módulos que se encuentran en peliculas.ts
    - Va a invocar a los módulos. Y GUARDAR lo que retornan en variables.
    - Finalmente, deberemos mostrar en consola estas últimas variables.