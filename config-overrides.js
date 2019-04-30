const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');


module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@Components': path.resolve(__dirname, `${paths.appSrc}/Components/`),
    '@actions': path.resolve(__dirname, `${paths.appSrc}/actions/`),
    '@Constants': path.resolve(__dirname, `${paths.appSrc}/Constants/`),
    '@Containers': path.resolve(__dirname, `${paths.appSrc}/Containers/`),
    '@reducers': path.resolve(__dirname, `${paths.appSrc}/reducers/`),
  })(config, env);
  return config;
};
