// module.exports = {
//     entry: './src/index.js',
//     output: './dist/main.js'
// }
var path = require('path');


// webpack 3.x
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist')
//   }
// };

// webpack 4.x
module.exports = {
  mode: 'none', // 추가됨 'production'... 등 
  entry: './src/index.js',
  output: {
    // filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};


// path => node.js 를 깔면 기본적으로 가져오는 라이브러리 => main
// dist/main.js => main.js 로