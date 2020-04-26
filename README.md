# ProteGO Safe - web

## run application at local environment
- yarn install
- yarn start

## build application
- yarn build

Application can be start in environments:
 - browser
 - web view in Android or IOS

When application is running as WebView in Android or IOS device, it uses NativeBridge to exchange data with native. [Documentation](https://docs.google.com/document/d/1WLMfbxlOxuY8By32iK_ILvmVjiq24kQARDNWBNy9TV4)

Native API contract:

function getBridgeData

|Data type|Description|JSON format|
| ------ | --- | --- |
| 31     | get statuses of services           |`"servicesStatus": {`|
|        |                                    |`"isBtSupported": true/false,` |
|        |                                    |`"isLocationEnabled": true/false, //only Android`|
|        |                                    |`"isBtOn": true/false,`|
|        |                                    |`"isBatteryOptimizationOn": true/false, //only Android`|
|        |                                    |`"isNotificationEnabled": true/false, //only IOS`|
|        |                                    |`"isBtServiceOn": true/false, //OpenTrace status`|
|        |                                    |`}`|

function setBridgeData

|Data type|Description|JSON format|
| ------ | --- | --- |
| 32     | show location permission - only Android             |            |
| 33     | show bt permission                                  |            |
| 34     | show battery optimization permission - only Android |            |
| 35     | show notification permission - only IOS             |            |
| 36     | toggle bt module                                    |`"enableBtService": true/false`            |


Application uses API https://api.safesafe.app as proxy to send and retrieve data from infermedica.com [Documentation](https://developer.infermedica.com/docs/covid-19)

## debug
When When application is running as WebView you can debug in chrome at chrome://inspect/#devices
