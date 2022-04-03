import { equal } from 'assert'
import hash from '../index.js'

equal(hash('node.js'), 3096844302, 'value should be hashed correctly')
equal(hash('node.js', 0xcbf29ce484222325), 3836725205, 'should be able to override init value')
equal(hash('node.js'), 3096844302, 'should not override default init value')
hash.BASE = 0xcbf29ce484222325
equal(hash('node.js'), 3836725205, 'default init value should be overridden')
