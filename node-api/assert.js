const assert = require('assert');

// // 生成一个 AssertionError，用于比较错误信息：
// const { message } = new assert.AssertionError({
// 	actual: 1,
// 	expected: 2,
// 	operator: 'strictEqual'
// });

// // 验证输出的错误：
// try {
// 	assert.strictEqual(1, 2);
// } catch (err) {
// 	assert(err instanceof assert.AssertionError);
//   assert.strictEqual(err.name, 'AssertionError [ERR_ASSERTION]');
//   assert.strictEqual(err.actual, 1);
//   assert.strictEqual(err.expected, 2);
// 	assert.strictEqual(err.operator, 'strictEqual');
//   assert.strictEqual(err.generatedMessage, true);
// }


// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
// assert.deepStrictEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);

// assert.doesNotThrow(
//   () => {
//     throw new TypeError('Wrong value');
//   },
//   SyntaxError
// );

// assert.doesNotThrow(
//   () => {
//     throw new TypeError('Wrong value');
//   },
//   TypeError
// );

// assert.doesNotThrow(
//   () => {
//     throw new TypeError('Wrong value');
//   },
//   TypeError,
//   'Whoops'
// );

// assert.equal({ a: 1 }, { a: 1 });

// assert.fail(1, 2);
// assert.fail(1, 2, undefined, '>'); // actual, expected, and operator have no influence on the error message.

// assert.ok(true);
// assert.ok(1);
// assert(false);

// const a = 0;
// const b = -a;
// assert.notStrictEqual(a, b);
// Strict Equality Comparison doesn't distinguish between -0 and +0...
// assert(!Object.is(a, b));
// but Object.is() does!

// const str1 = 'foo';
// const str2 = 'foo';

// assert.strictEqual(str1 / 1, str2 / 1);
// Strict Equality Comparison can't be used to check NaN...
// assert(Object.is(str1 / 1, str2 / 1));