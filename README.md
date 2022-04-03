[![view on npm](http://img.shields.io/npm/v/fnv1a.svg?style=flat-square)](https://www.npmjs.com/package/fnv1a)
[![npm module downloads per month](http://img.shields.io/npm/dm/fnv1a.svg?style=flat-square)](https://www.npmjs.com/package/fnv1a)

# fnv1a

Simple and fast 32 bit FNV-1a hash for [node.js](http://nodejs.org) based on [this](http://isthe.com/chongo/tech/comp/fnv/).

## Usage

```js
import { equal } from 'assert'
import hash from 'fnv1a'

const value = hash('node.js')

// decimal
equal(value, 3096844302)

// hexadecimal
equal(value.toString(16), 'b896180e')

// string
equal(value.toString(36), '1f7s4cu')
```

_Note:_ importing via `require()` is also supported.

## Installation

    npm install fnv1a

## License

[MIT license](https://github.com/schwarzkopfb/fnv1a/blob/master/LICENSE).
