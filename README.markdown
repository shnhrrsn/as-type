<p align="center">
<a href="https://github.com/shnhrrsn/as-type/actions"><img src="https://github.com/shnhrrsn/as-type/workflows/test/badge.svg" alt="Build Status"></a>
<a href="https://www.npmjs.com/package/as-type"><img src="https://img.shields.io/npm/dt/as-type.svg" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/as-type"><img src="https://img.shields.io/npm/v/as-type.svg" alt="Latest Version"></a>
<a href="./LICENSE"><img src="https://img.shields.io/npm/l/as-type.svg" alt="License"></a>
</p>

# as-type

Convert undetermined data types to the type you want.

### Installation

```sh
npm install --save as-type
```

## Usage

```js
const as = require('as-type')

console.log(as.boolean('true')) // true
console.log(as.boolean('t')) // true
console.log(as.boolean('T')) // true
console.log(as.boolean('yes')) // true
console.log(as.boolean('y')) // true
console.log(as.boolean('Y')) // true
console.log(as.boolean(1)) // true
console.log(as.boolean('asdf')) // false
console.log(as.boolean(5)) // false

console.log(as.integer('5')) // 5
console.log(as.integer('5.5')) // 5
console.log(as.integer('five')) // 0

console.log(as.float('5')) // 5
console.log(as.float('5.5')) // 5.5
console.log(as.float('five')) // 0
```
