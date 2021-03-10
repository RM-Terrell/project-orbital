# Orbital Changelog

## March 07 2021
### Removed
- Removed enzyme from the project

### Added
- Added jest / RTL tests around the SEM SD conversion

### Changed
- Dev env switched to Windows Subsystem Linux 2 / Ubuntu to match Linux based Docker build. No more windows line endings.
- Fixed many outdated NPM packages
- Refactored stats conversion fetch calls into class, added tests for it

## June 1st 2020
### Changed
- Started rebuild of app around CRA


## May 27th 2020
### Changed
- Re
organized app to have specific frontend / backend directories with the intent of dockerizing them

## April 27th 2020
### Changed
- Reduced and refined the scope of the project by removing the unfinished calculator, pom, and note taker


## May 30th 2019
### Added
- So m
any tests

## May 10th 2019
### Fixed
- Lots of styling and spacing on the stats page
### Added
- Auto cleanup of ./dist folder when building app
### Changed
- Package updates


## May 8th 2019
### Added
- Color scheme and a lot of styling


## April 13 2019
### Added
- Stats components
- Lots of stats tests
- More eslint rules

### Fixed
- Function imports in components work now. `{}` are a thing.


## April 7 2019
### Added
- Calculator app scaffold

### Changed
- eslint rules


## March 28 2019
### Added
- Selenium
- Jest
### Changed
- eslint rules
### Fixed


## March 17 2019
### Fixed
- Full app now functional. CSS and JSS is fully compiling and loading.
