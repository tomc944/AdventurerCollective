# Phase 3: Lists and Activities (2 days)

## Rails
### Models
* Lists
* AdventuresList
* Adventures


### Controllers
* Api::ListsController (create, destroy, index, show, update)

### Views
* lists/index.json.jbuilder
* lists/show.json.jbuilder

## Flux
### Views (React Components)
* ListsIndex
  - ListsIndexItem
* ListsForm
* SearchIndex

### Stores
* Lists

### Actions
* ApiActions.receiveAllLists -> triggered by ApiUtil
* ApiActions.receiveLists
* ApiActions.deleteLists
* ListsActions.fetchAllLists -> triggers ApiUtil
* ListActions.fetchSingleList
* ListActions.createList
* ListActions.editList
* ListActions.destroyList

### ApiUtil
* ApiUtil.fetchAllLists
* ApiUtil.fetchOneList
* ApiUtil.createList
* ApiUtil.editList
* ApiUtil.destroyList

## Gems/Libraries
