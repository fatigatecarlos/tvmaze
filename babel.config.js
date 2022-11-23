module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-env',
    ['@babel/preset-react', {runtime: 'automatic'}],
  ],
  plugins: [['@babel/plugin-proposal-decorators', {legacy: true}]],
};
