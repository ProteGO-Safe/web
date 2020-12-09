![STOP COVID - ProteGO Safe](./doc/img/baner.jpg "STOP COVID - ProteGO Safe")

## General info
In STOP COVID - ProteGO Safe you will find reliable, official and current information on the current situation related to the coronavirus pandemic. You will learn how to use actions and what to do if you suspect you or your loved ones have an infection. All published information is confirmed by the Ministry of Health or the Chief Sanitary Inspectorate, prepared on the basis of data on the Center for Disease Prevention and Control (ECDC) and the World Health Organization (WHO).

## Screenshots 
![STOP COVID - ProteGO Safe](./doc/img/protego-safe.png "STOP COVID - ProteGO Safe")

## Application installation and configuration

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
git update-index --skip-worktree src/locales/resources.j (once)
yarn prepare-translations
yarn install
yarn start
```

## Technologies
* React / Redux

## Debug
When application is running as WebView you can debug in chrome at chrome://inspect/#devices
