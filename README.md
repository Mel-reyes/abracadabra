# Desafío - Abracadabra
## Descripción

Este desafio consiste en crear un servidor utilizando Express para ofrecer un sitio web estático con un tema de magia. El sitio web presenta cuatro sombreros misteriosos, cada uno de los cuales oculta un secreto. Al hacer clic en uno de estos sombreros,se revela el misterio oculto dentro, ¡un conejo mágico!
## Tecnologías Utilizadas
- NODE
## Requerimientos
1. Crear un servidor con Express en el puerto 3000. (2 Puntos)
2. Definir la carpeta “assets” como carpeta pública del servidor. (1 Punto)
3. Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de
la ruta /abracadabra/usuarios. (2 Puntos)
4. Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el
usuario recibido como parámetro “usuario” existe en el arreglo de nombres creado en
el servidor.En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario
devolver la imagen “who.jpeg”. (2 Puntos)
5. Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el
número generado de forma aleatoria.
En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la
imagen de Voldemort. (2 Puntos)
6. Crear una ruta genérica que devuelva un mensaje diciendo “Esta página no existe...” al
consultar una ruta que no esté definida en el servidor. (1 Punto)

