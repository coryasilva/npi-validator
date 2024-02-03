/* eslint-disable unicorn/numeric-separators-style */
import test from 'ava';
import npiValid from './index.js';

test('NPI validation with default United States prefix', t => {
	t.is(npiValid(1234567893), true);
	t.is(npiValid('1234567893'), true);
	t.is(npiValid(1234567890), false);

	// Bad inputs
	t.is(npiValid(''), false);
	t.is(npiValid(' '), false);
	t.is(npiValid(undefined), false);
	t.is(npiValid(null), false);
	t.is(npiValid({}), false);
	t.is(npiValid([]), false);
	t.is(npiValid(true), false);
	t.is(npiValid(false), false);
	t.is(npiValid(), false);
});

test('NPI validation with custom prefix', t => {
	t.is(npiValid(1234567894, 80123), true);
	t.is(npiValid(1234567894, '80123'), true);
	t.is(npiValid(1234567894, 8012), false);
	t.is(npiValid(1234567894, 81840), false);

	// Bad inputs
	t.is(npiValid(1234567893, ''), false);
	t.is(npiValid(1234567893, '     '), false);
	t.is(npiValid(1234567893, '80   '), false);
	t.is(npiValid(1234567893, undefined), true);
	t.is(npiValid(1234567893, null), false);
	t.is(npiValid(1234567893, {}), false);
	t.is(npiValid(1234567893, []), false);
	t.is(npiValid(1234567893, true), false);
	t.is(npiValid(1234567893, false), false);
});
