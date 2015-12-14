# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
* Lists
* AdventuresList
* Tagging

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
* ApiActions.receiveAllNotebooks -> triggered by ApiUtil
* ApiActions.receiveSingleNotebook
* ApiActions.deleteNotebook
* NotebookActions.fetchAllNotebooks -> triggers ApiUtil
* NotebookActions.fetchSingleNotebook
* NotebookActions.createNotebook
* NotebookActions.editNotebook
* NotebookActions.destroyNotebook

### ApiUtil
* ApiUtil.fetchAllNotebooks
* ApiUtil.fetchSingleNotebook
* ApiUtil.createNotebook
* ApiUtil.editNotebook
* ApiUtil.destroyNotebook

## Gems/Libraries
