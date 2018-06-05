// const url = require('url');
// const myURL = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

const { URL } = require('url');
// const myURL = new URL('/foo', 'https://example.org/');
// const myURL = new URL({ toString: () => 'https://example.org/' });
// const myURL = new URL('https://你好你好');
// const myURL = new URL('https://example.org/foo#bar');
// myURL.hash = 'baz';

const myURL = new URL('https://example.org/foo');
console.log(myURL.href);

myURL.href = 'https://example.com/bar';
console.log(myURL.href);