/*Otro método fundamental de array es slice (“rebanar”),
 que toma índices de inicio y fin
  y retorna un array que solo tiene los elementos entre ellos.
   El índice de inicio es inclusivo, el índice final es exclusivo.*/

   console.log([0, 1, 2, 3, 4].slice(2, 4));
   // → [2, 3]
   console.log([0, 1, 2, 3, 4].slice(2));
   // → [2, 3, 4] 

   /*Cuando no se proporcione el índice final, slice tomará todos los elementos después del índice de inicio. 
   También puedes omitir el índice de inicio para copiar todo el array.*/

