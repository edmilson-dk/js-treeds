# Domentação em PT-BR

## Tópicos

- [Algoritmos de busca](#search-algorithms)

<a id="search-algorithms"></a>

## Algoritmos de busca

### Linear search

> O algoritmo de busca linear é o menos indicado para grandes arrays de valores, por possuir uma complexidade assintótica de O(n).

- A implementação suporta arrays com valores de tipos distintos
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
