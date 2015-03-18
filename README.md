## Router 

The Router component is a simple javascript class who provide an elegant routing system based on strings.

```coffeescript
route.match '/zombie/edit/:id', (params) ->
  console.log "You are trying to edit the zombie " + params.id
```

```javascript
route.match('/zombie/edit/:id', function(params) {
  console.log "You are trying to edit the zombie " + params.id
});
```

## Installation 

```
bower install --save gotham-router
```

## Example

## Api

## How to compile source files 

In the root of the project, execute that : 

```
coffee --compile --watch --output dist/ src/
```

## Tests 
