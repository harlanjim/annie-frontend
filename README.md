# annie-frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run on a specific port
```
npm run serve -- --port 9000
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


### Docker 
```
docker build -t annie-frontend/annie-frontend-app .
```

```
docker run -it -p 8080:8080 --rm --name annie-frontend-app-1 annie-frontend/annie-frontend-app:latest
```

docker tag annie-frontend/annie-frontend-app:latest fahenterprises.xyz:5000/annie-frontend/annie-frontend-app:latest


docker push fahenterprises.xyz:5000/annie-frontend/annie-frontend-app:latest

docker login -u user -p password fahenterprises.xyz:5000
