# ProteGO Safe - web

## Configure application

##### Copy .env.dist file

```shell script
cp .env.dist .env
``` 

##### Set values

- **REACT_APP_EXTERNAL_DATA_API_DOMAIN** - url to the CDN with static files 

## Build application

```shell script
yarn build
```

## Run application tests

```shell script
yarn test a
```

## Run application locally
```shell script
yarn install
yarn start
```

Application can be started in following environments:
 - browser
 - web view in Android or iOS

## Debug
When application is running as WebView you can debug in chrome at chrome://inspect/#devices
