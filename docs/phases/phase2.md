# Phase 2: Flux Architecture and Note CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* AdventuresIndex
  - AdventuresIndexItem
* AdventureForm

### Stores
* Adventures

### Actions
* ApiActions.receiveAllAdventures -> triggered by ApiUtil
* ApiActions.receiveSingleAdventure
* ApiActions.deleteAdventure
* AdventureActions.fetchAllAdentures -> triggers ApiUtil
* AdventureActions.fetchSingleAdventure
* AdventureActions.createAdventure
* AdventureActions.editAdventure 
* AdventureActions.destroyAdventure

### ApiUtil
* ApiUtil.fetchAllAdventures
* ApiUtil.fetchOneAdventure
* ApiUtil.createAdventure
* ApiUtil.editAdventure
* ApiUtil.destroyAdventure

## Gems/Libraries
* Flux Dispatcher (npm)
