const path = require('path');

let pathName = path.basename('C:\\temp\\myfile.html');
let pathName2 = path.win32.basename('C:\\temp\\myfile.html');
let pathName3 = path.posix.basename('/temp/myfile.html');
let pathName4 = path.basename('/foo/bar/baz/asdf/quux.html');
let pathName5 = path.basename('/foo/bar/baz/asdf/quux.html', '.html');

let pathName6 = path.dirname('/foo/bar/baz/asdf/quux.html');
let pathName7 = path.extname('/foo/bar/baz/asdf/quux.html');

let pathName8 = path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt'
});
let pathName9 = path.format({
  root: '/',
  base: 'file.txt',
  ext: 'ignored'
});
let pathName10 = path.format({
  root: '/',
  name: 'file',
  ext: '.txt'
});

let pathName11 = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
let pathName12 = path.normalize('/foo/bar//baz/asdf/quux/..');
let pathName13 = path.parse('/home/user/dir/file.txt');

let pathName14 = path.resolve('/foo/bar', './baz');
let pathName15 = path.resolve('/foo/bar', '/tmp/file/');
let pathName16 = path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
let pathName18 = path.resolve('wwwroot', 'static_files/png/');
let pathName19 = path.resolve();


