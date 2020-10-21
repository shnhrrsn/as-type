import * as as from '../src/index'

import test from 'ava'

test('boolean', t => {
	t.true(as.boolean('true'))
	t.true(as.boolean('t'))
	t.true(as.boolean('T'))
	t.true(as.boolean('yes'))
	t.true(as.boolean('y'))
	t.true(as.boolean('Y'))
	t.true(as.boolean(1))
	t.false(as.boolean('f'))
	t.false(as.boolean('false'))
	t.false(as.boolean('no'))
	t.false(as.boolean('n'))
	t.false(as.boolean('asdf'))
	t.false(as.boolean(0))
	t.false(as.boolean(5))
})

test('integer', t => {
	t.is(as.integer('5'), 5)
	t.is(as.integer('5.5'), 5)
	t.is(as.integer('five'), 0)
})

test('float', t => {
	t.is(as.float('5'), 5)
	t.is(as.float('5.5'), 5.5)
	t.is(as.float('five'), 0)
})
