const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');


module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
    '@actions': path.resolve(__dirname, `${paths.appSrc}/actions/`),
    '@constants': path.resolve(__dirname, `${paths.appSrc}/constants/`),
    '@Containers': path.resolve(__dirname, `${paths.appSrc}/Containers/`),
    '@reducers': path.resolve(__dirname, `${paths.appSrc}/reducers/`),
  })(config, env);
  return config;
};
