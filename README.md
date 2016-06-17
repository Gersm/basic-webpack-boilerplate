# Basic Webpack Boilerplate
   * ES6 to transform ES5
   * Include CSS
   * Structure folders:
```json
   {
       "dist": "Distribution for files",
       "src": "Source files",
       "static": "Files that are not compiled",
       "config": "configuration files for example: webpack.config.js"
   }
```
   * Branch:
```json
   {
       "html": "jade",
       "master": ["stylus", "sass", "jade"],
       "none": "not including loaders",
       "style": ["stylus", "sass"],
   }
```

## Installation

```bash
git clone https://github.com/Gersom/basic-webpack-boilerplate.git
cd basic-webpack-boilerplate
npm install
npm run dev # compiled files
npm run watch # compiled watch files
```

## License
basic-webpack-boilerplate is licensed under [The MIT License](LICENSE).
