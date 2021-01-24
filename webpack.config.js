const path = require('path');
const prodConfig = require('./webpack.config.production');

const libraryName = 'game-of-life';

const reactDOMExternal = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom',
};

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
};

const common = {
  entry: path.join(__dirname, './src/main.ts'),
  devtool: false,
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: [/\.css$/],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    react: reactExternal,
    'react-dom': reactDOMExternal,
  },
};

const developmentConfig = [
  {
    ...common,
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'main.js',
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
  },
  {
    ...common,
    target: 'node',
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'main.js',
      library: libraryName,
      libraryTarget: 'commonjs2',
    },
  },
];

module.exports = (env) => {
  if (env && env.production) {
    return [
      {
        ...developmentConfig[0],
        ...prodConfig,
      },
      {
        ...developmentConfig[1],
        ...prodConfig,
      },
    ];
  }
  return developmentConfig;
};
