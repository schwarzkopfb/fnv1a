"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * FNV-1a hash generation init value.
 * It's exposed, because this allows user to override it.
 * More info: https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function#FNV_hash_parameters
 *
 * @type {number}
 */
hash.BASE = 0x811c9dc5;
/**
 * Generates 32 bit FNV-1a hash from the given string.
 * As explained here: http://isthe.com/chongo/tech/comp/fnv/
 *
 * @param s {string} String to generate hash from.
 * @param [h] {number} FNV-1a hash generation init value.
 * @returns {number} The result integer hash.
 */
function hash(s, h = hash.BASE) {
    const l = s.length;
    for (let i = 0; i < l; i++) {
        h ^= s.charCodeAt(i);
        h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
    }
    return h >>> 0;
}
exports.default = hash;
module.exports = hash;
