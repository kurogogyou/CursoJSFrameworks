# aprendiendo-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### To compile and hot-reload on DigitalOcean droplet
### create a file called vue.config.js beside package.json and add the following:
```
module.exports = {
    //...
    configureWebpack: {
      devServer: {
        host: '64.225.121.254'
    //    host: '0.0.0.0'
      }
    }
  };
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
