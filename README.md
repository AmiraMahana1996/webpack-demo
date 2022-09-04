<h2 align="center"><u>Webpack Demo</u></h2>

<h4 align="center"> simple demo to shre with people and know how to work wwith webpack  </h4>

<p align="center">
<br>
    <img src="https://img.shields.io/badge/Author-Amira Mahana-magenta?style=flat-square">
    <img src="https://img.shields.io/badge/Open%20Source-yes-orange?style=flat-square">
    <img src="https://img.shields.io/badge/Maintained-yes-cyan?style=flat-square">
    <img src="https://img.shields.io/badge/Written%20In-Javascript-blue?style=flat-square">
</p>

### [+] Description
Webpack demo to explain how to Webpack work and steps to install and add configration

### [+] Installation
`npm i webpack webpack-cli style-loader css-loader --save-dev`

### [+] Usage
`npm run build`

### [+] how it works
first thing you should 
install webpack
[create webpack.config.js]
to add all configration which webpack need 
like :
-all thing webpack need to know is webpack will read from where
add module and rules
to make webpack how to deal with files in your project like css

### [+] To avoid caching because after build bundle.js didn't change
` you should add this in filename in webpack.config.js 'bundle[contenthash].js'`

### [+] To clean dist folder
`npm i --save-dev clean-webpack-plugin'`
edit webpack config
```sh
const {CleanWebpackPlugin} =require('clean-webpack-plugin');
and add plugns with instance with this plugin
   plugins:[
      new CleanWebpackPlugin()  
    ]

    //now every change in bundle will browser detect it and avoid caching
```