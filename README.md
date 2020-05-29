![ProteGo Safe](./doc/img/baner.jpg "ProtegoSafe")

## General info
In ProteGO Safe you will find reliable, official and current information on the current situation related to the coronavirus pandemic. You will learn how to use actions and what to do if you suspect you or your loved ones have an infection. All published information is confirmed by the Ministry of Health or the Chief Sanitary Inspectorate, prepared on the basis of data on the Center for Disease Prevention and Control (ECDC) and the World Health Organization (WHO).

## Screenshots 
![ProteGo Safe](./doc/img/protego-safe.png "ProtegoSafe")

## Application installation and configuration
### Copy .env.dist file
```shell script
cp .env.dist .env
``` 
###### Set values

- **REACT_APP_EXTERNAL_DATA_API_DOMAIN** - url to the CDN with static files 

### Build application
```shell script
yarn build
```

### Run application tests
```shell script
yarn test a
```

### Run application locally
```shell script
yarn install
yarn start
```

## Technologies
* React / Redux

## Debug
When application is running as WebView you can debug in chrome at chrome://inspect/#devices
