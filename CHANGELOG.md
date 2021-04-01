# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## 4.10.0

### Added
- vaccination statistics
- more COVID-19 statistics in Poland

### Fixed
- source of isTriageEnLow and isTriageTorLow

## 4.9.1

### Added
- vaccination statistics for Poland

### Changed
- tab "How does the application work?"

## Fixed
- error of double notification entry in notification history

## 4.9.0

### Added
- Information on COVID-19 statistics in Poland
- History of application activity (information about performed checks, indicated threats, system notifications)
- Possibility of redirecting to a specific application screen by system notification
- Possibility to evaluate applications in the Google Play / Apple App Store
- New translations of the application into Russian, German and Turki
- Information about the checks carried out by the application on meetings with people who reported to have got sick with COVID-19

### Changed
- New design of the main screen: Shortcuts have been added to make it easier to send the PIN and complete the risk assessment test, the design of the main screen has been refreshed,

## 4.8.0

### Added
- Integration with EFGS

## 4.7.1

### Added
- Possibility to enter the result of the laboratory test after being signed up for it in the application.
- Redirection to chatbot which enables making comments and reporting bugs in the Polish language version.

## 4.7.0

### Added
- allowing to perform a COVID-19 laboratory test for people with COVID-19 symptoms after the application notified about a high risk of contact with a person tested positive for COVID-19
- instruction for the feature of following the zones on the screen with a list of poviats

### Changed
- subpage "How does the application work?"
- Terms & Conditions and Privacy Policy

### Fixed
- save Health Metric

## 4.6.0

### Added
- list of current colour zones for poviats
- subscription to change color zones

### Changed
- screen for social translators

### Fixed
- minor bugs

## 4.5.0

### Changed
- easier access to key functions of the application
- improve translations into English and Ukrainian

### Fixed
- minor bugs

## 4.4.0

### Added
- language switcher on the startup screen
- language switcher in settings
- Ukrainian translation
- English translation
- hints for answers in the Risk Assessment Test

### Changed
- date format of the last triage result

## 4.3.1

### Fixed
- displaying dates in the health diary 

## 4.3.0

### Added
- multi language support
- possibility to edit the entry of the health diary
- possibility to set and edit the date of entry in the health diary
- temperature unit in the health diary
- clickable application logotype

### Changed
- date format of the last triage result 
- nick validation
- text of the privacy policy for iOS EN funcionality
- copies in few screens
- faq view logic
- refactor of buttons components
- refactor of the on boarding logic

### Fixed
- FAQ search with special characters
- problem with triage view on small screens
- UI bugs

## 4.2.4

### Changed
- contact email
- contact phone number
- regulations screen

## 4.2.3

### Added
- information about mobile app version in the menu
 
### Changed
- copy in the triage summary

### Fixed
- triage paths

## 4.2.2
 
### Changed
- github action build

### Fixed
- erase data

## 4.2.1
 
### Added
- information about the need to update the application

## 4.2.0
 
Preparation of the application to work in offline mode.
 
### Changed
- adjusted application to work in the offline

### Fixed
- fixed call the hotline button

## 4.1.0
 
Here we write creating new onboarding and upload trace history.
 
### Added
- new triage level - no data
- new triage level - green analysis module
- new onboarding screens
- uploading trace history
- cookie information
- new module diagnosis from infermedica
 
### Changed
- simpler application on boarding
- optional risk assessment test
- optional Health Metric
- dashboard
- logotype
- add search in faq view
- using source of faq, hospitals and advices from CDN
- removed badge

### Fixed
- move some svg to the base code
- fix clickable phone number
- fix clickable links
- fix copy

## 3.0.0
  
Here we write creating new onboarding and opentrace module
 
### Added
- new onboarding screens
- splashscreen
- settings menu

### Changed
- synchronize faq screen with gov site
- all codiv-19 texts redirect to gov site
- support infermedica v4
 
### Fixed
- fix onboarding slider
 
## 2.0.0
 
Here we write notification module, redesign application
 
### Added
- notification from firebase message module
- new dashboard
- new onboarding slider
- the new screen "what I have to do"
- badges
- clear data feature 

### Changed
- improved daily health
- redesign "manage data"
- redesign bottom menu

### Fixed
- fix saving daily health
