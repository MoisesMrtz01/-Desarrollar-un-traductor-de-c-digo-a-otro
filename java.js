function calculo() {
  var cantidad, numero, i, es_primo, mostrados;
  var contador, divisor, divisor2;

  numero = 1;
  es_primo = 1;
  contador = 0;
  mostrados = 0;
  presentar("---GENERADOR DE NÚMEROS PRIMOS---");

  cantidad = prompt("Ingrese la cantidad de números primos que desea mostrar:");

  if (cantidad <= 0) {
    presentar("La cantidad debe ser un número positivo y mayor que cero.");
  }

  if (cantidad > 0) {
    presentar("Los primeros " + cantidad + " números primos son:");

    while (mostrados < cantidad) {
      i = 2;
      es_primo = 1;
      divisor = numero / 2;

      while (i <= divisor) {
        divisor2 = numero % i;

        if (divisor2 == 0) {
          es_primo = 0;
        }
        i = i + 1;
      }

      if (es_primo == 1) {
        presentar(numero);
        mostrados = mostrados + 1;
      }
      numero = numero + 1;
    }
  }
}

calculo();
