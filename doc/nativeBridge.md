### Description
Web application uses native bridge contract to send or receive data from native device.
It uses following functions:
* setBridgeData
* getBridgeData
* onBridgeData

### Contract:
#### save timestamp of filled diagnosis test
##### web -> native
 * function setBridgeData(dataType: Int, data: String)
 * dataType = 1
 * data
```
{
    "timestamp": 1589669050
}
```
#### get notification
##### web -> native
* function getBridgeData(dataType: Int, data: String, requestId: String)
* dataType = 2
* data = null
##### native -> web
* function bridgeDataResponse(body: String, dataType: Int, requestId: String) 
* dataType = 2
* body
```
{ DATA_FROM_NOTIFICATION }
```
#### clear all data
##### web -> native
 * function setBridgeData(dataType: Int, data: String)
 * dataType = 37
 * data
 ```
{
    "clearBtData": true/false
}
```
#### upload exposure data 
##### web -> native
 * function setBridgeData(dataType: Int, data: String)
 * dataType = 43
 * data
 ```
{
    "pin": "123ABC
}
```
#### upload exposure data response
##### native -> web
 * function onBridgeData(dataType: Int, data: String)
 * dataType = 43
 * data
 ```
{
    "result": 1 - ok, 2 - error, 3 - other problem
}
```
#### enable/disable native services
##### web -> native
 * function setBridgeData(dataType: Int, data: String)
 * dataType = 52
 * data
```
{
    "enableExposureNotificationService": true/false, //optional
    "enableBt": true/false, //optional
    "enableLocation": true/false, //optional
    "enableNotification": true/false //optional
}
```
#### get native services status
##### web -> native
 * function getBridgeData(dataType: Int, data: String, requestId: String)
 * dataType = 51
 * data = null
##### native -> web
 * function bridgeDataResponse(body: String, dataType: Int, requestId: String) 
 * function onBridgeData(dataType: Int, data: String)
* dataType = 51
* data
```
{
    "servicesStatus": {
        "exposureNotificationStatus": 1 - ON, 2 - OFF, 3 - NOT SUPPORTED
        "isLocationOn": true/false, //only Android
        "isBtOn": true/false,
        "isNotificationEnabled": true/false
    }
}
```
#### get risk level
##### web -> native
* function getBridgeData(dataType: Int, data: String, requestId: String)
* dataType = 61
* data = null
##### native -> web
* function bridgeDataResponse(body: String, dataType: Int, requestId: String) 
* function onBridgeData(dataType: Int, data: String)
* dataType = 61
* data
```
{
 "riskLevel": 1 //1- no risk, 2-middle risk, 3-high risk
}
```
