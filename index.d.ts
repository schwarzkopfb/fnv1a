/**
 * Generates 32 bit FNV-1a hash from the given string.
 * As explained here: http://isthe.com/chongo/tech/comp/fnv/
 *
 * @param s {string} String to generate hash from.
 * @returns {number} The result integer hash.
 */
declare function hash(input: string): number;
export = hash;
