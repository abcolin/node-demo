const fs = require('fs');

// fs.unlink('/tmp/hello', (err) => {
//   if (err) throw err;
//   console.log('成功删除 /tmp/hello');
// });

// try {
//   fs.unlinkSync('/tmp/hello');
//   console.log('successfully deleted /tmp/hello');
// } catch (err) {
//   console.log(err);
// }

// fs.rename('./tmp/hello.js', './tmp/world.js', (err) => {
//   if (err) throw err;
//   fs.stat('./tmp/world.js', (err, stats) => {
//     if (err) throw err;
//     console.log(`文件属性: ${JSON.stringify(stats)}`);
//   });
// });

// fs.open('/open/some/file.txt', 'r', (err, fd) => {
//   if (err) throw err;
//   fs.close(fd, (err) => {
//     if (err) throw err;
//   });
// });

// fs.open('./global.js', 'r', (err, fd) => {
//   if (err) throw err;
//   fs.close(fd, (err) => {
//     if (err) throw err;
//   });
// });

// const { URL } = require('url');
// const fileUrl = new URL('file:///tmp/hello');
// fs.readFileSync(fileUrl);

// fs.open('./global.js', 'r', (err, fd) => {
//   if (err) throw err;
//   fs.fstat(fd, (err, stat) => {
//     if (err) throw err;
//     // 各种操作

//     // 必须关闭文件描述符！
//     fs.close(fd, (err) => {
//       if (err) throw err;
//     });
//   });
// });

// 例子，处理 fs.watch() 监听器。
// fs.watch('./global.js', { encoding: 'buffer' }, (eventType, filename) => {
//   if (filename) {
//     console.log(filename);
//     // 打印: <Buffer ...>
//   }
// });