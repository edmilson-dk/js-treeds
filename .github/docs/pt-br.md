# Domentação em PT-BR

## Tópicos

- [Algoritmos de busca](#search-algorithms)

<a id="search-algorithms"></a>

## Algoritmos de busca

- [Linear search](#linear-search)
- [Binary search](#binary-search)
- [Interpolation search](#interpolation-search)

<a id="linear-search"></a>

### Linear search

> O algoritmo de busca linear é o menos indicado para grandes arrays de valores, por possuir uma complexidade assintótica de O(n).

- A implementação suporta arrays com valores de tipos distintos
- Suporta arrays de números negativos e de ponto flutuante
- Complexidade O(n) linear
- A implementação funciona em arrays ordenados e não ordenados
- O índice retornado caso o elemento seja encontrado é sempre da primeira ocorrência do valor procurado, em casos de arrays com valores duplicados

**Com Typescript**

```ts
import { linearSearch } from "js-treeds";

const array: number[] = [1, 2, 3, 20, 33, 10];
const wanted: number = 3;

// a função deve receber um objeto com a propriedade "array" e a propriedade "wanted"

const index: number = linearSearch<number>({ array, wanted });

// index = 2
```

**Com Javascript**

```js
// EsModules
import { linearSearch } from "js-treeds";
// CommonJS
// const { linearSearch } = require("js-treeds");

const array = [1, 2, 3, 20, 33, 10];
const wanted = 3;

// a função deve receber um objeto com a propriedade "array" e a propriedade "wanted"

const index = linearSearch({ array, wanted });

// index = 2
```

<a id="binary-search"></a>

### Binary search

> O algoritmo de busca binária é recomendável em grandes arrays com valos ordenados de alguma forma previsível tendo como complexidade assintótica O(log N), por exemplo um array com valores ordenados da seguinte forma [1, 2, 4, 5, 6, 8, 9, 10, 12, 14...]
> o array não está completamente ordenado, pórem você consegue prever os próximos valores da sequência, é nestes casos que a busca binária se dá bem, em casos de arrays grandes e completamente ordenados, o indicado é a utilização do algoritmo de [busca por interpolação](#interpolation-search) pela possibilidade detse outro algoritmo conseguir determinar através do valor procurado, o intervalo correto para começar a buscar o elemento, diminuindo as operações de busca em relação a busca binária.

- Implementações separadas para arrays de strings e arrays de números
- Complexidade O(Log n) log de N
- Não suporta arrays com números negativos
- A implementação funciona em arrays ordenados e préviamente ordenados
- O índice retornado caso o elemento seja encontrado é sempre da primeira ocorrência do valor procurado, em casos de arrays com valores duplicados

**Com Typescript**

```ts
import { binarySearchInt, binarySearchStr } from "js-treeds";

const array: number[] = [1, 2, 3, 20, 33, 10];
const arrayStr: string[] = ["a", "john", "erick", "patrick", "melão"];

const wanted: number = 3;
const wantedStr: string = "melão";

// a função deve receber um objeto com as propriedades "array","wanted", "left" e "right"
// a propriedade "left" deve receber o valor 0 referente ao ínicio do array e a propriedade "right" deve receber o valor referente ao tamanho do array por completo

const index: number = binarySearchInt({
  array,
  wanted,
  left: 0,
  right: array.length,
});

const indexStr: number = binarySearchStr({
  array: arrayStr,
  wanted: wantedStr,
  left: 0,
  right: arrayStr.length,
});

// index = 2
// indexStr = 4
```

**Com Javascript**

```js
// EsModules
import { binarySearchInt, binarySearchStr } from "js-treeds";
// CommonJS
// const { binarySearchInt, binarySearchStr } = require("js-treeds");

const arra = [1, 2, 3, 20, 33, 10];
const arrayStr = ["a", "john", "erick", "patrick", "melão"];

const wanted = 3;
const wantedStr = "melão";

// a função deve receber um objeto com as propriedades "array","wanted", "left" e "right"
// a propriedade "left" deve receber o valor 0 referente ao ínicio do array e a propriedade "right" deve receber o valor referente ao tamanho do array por completo

const index = binarySearchInt({
  array,
  wanted,
  left: 0,
  right: array.length,
});

const indexStr = binarySearchStr({
  array: arrayStr,
  wanted: wantedStr,
  left: 0,
  right: arrayStr.length,
});

// index = 2
// indexStr = 4
```

<a id="interpolation-search"></a>

### Interpolation search
