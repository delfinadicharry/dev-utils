# dev-utils

Librería de utilidades JavaScript para trabajar con textos y validar datos.

## Instalación

```bash
npm install @delfinadicharry/dev-utils
```

## Ejemplo de uso

```js
import { capitalize, isValidEmail } from "@delfinadicharry/dev-utils";

console.log(capitalize("hola")); // "Hola"
console.log(isValidEmail("usuario@email.com")); // true
```

## Funciones disponibles

- `capitalize(texto)`: convierte la primera letra en mayúscula.
- `truncate(texto, cantidad)`: limita un texto a cierta cantidad de caracteres y agrega `...`.
- `reverseText(texto)`: da vuelta un texto.
- `isValidEmail(email)`: valida si un email tiene formato correcto.
- `isEmpty(valor)`: verifica si un valor está vacío.