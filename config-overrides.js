// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//     console.log(config)
//     return config;
// };

const { override, fixBabelImports, addWebpackAlias, addLessLoader ,addBabelPlugins} = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addWebpackAlias({
        ["@"]: require('path').resolve(__dirname, "src"),
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@default-color':"#ccc"
        }
    }),
    //配置支持高阶组件装饰器写法
    addBabelPlugins( // 支持装饰器
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true
            }
        ]
    ),
);