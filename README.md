## Router 

The Router component is a simple javascript class who provide an elegant routing system based on strings.

```javascript
router.match('/zombie/edit/:id', function(params) {
  console.log "You are trying to edit the zombie " + params.id
});
```

## Installation 

```
bower install --save gotham-router
```

## Examples

### Simple example
```html
<!DOCTYPE html>
<html>
<head>
    <title>Demo Router</title>
    
    <!-- Include library -->
    <script src="bower_components/router/dist/router.js"></script>
</head>
<body>
    <script>
        // We set the request, for example "/hello"
        router = new Router("/hello");

        router.match("/hello", function() {
            console.log("hello world");
        });

        router.run();

        if (router.passes()) {

            // Display result of the routing
            console.log(router.response());

        }
    </script>
</body>
</html>
```

### Example in the real world
```html
<!DOCTYPE html>
<html>
<head>
    <title>Demo Router</title>
    
    <!-- Include library -->
    <script src="bower_components/router/dist/router.js"></script>
</head>
<body>
    <script>
        // Set current browser request
        router = new Router(window.location.pathname);

        // Ex: http://gesjeremie.fr/
        router.match("/", function() {
            console.log("Index page");
        });

        // Ex: http://gesjeremie.fr/zombie/show/22
        router.match("/zombie/show/22", function() {
          console.log("Zombie #22")
        });

        router.run();

        if (router.passes()) {

          // Execute the callback
          router.response().result();

        }
    </script>
</body>
</html>
```

## Variables 

Of course you can add variables into your routes to be more flexible.

```javascript
router.match("/zombie/show/:id", function(params) {
    console.log("Edit zombie #" + params.id);
});
```

> In this example, an url like ```http://localhost:3000/zombie/show/22``` or ```http://localhost:3000/zombie/show/smith``` will execute the file controllers/zombie/edit.coffee

## Constraints 

Sometimes you need to attach a constraint to a route. You can do that easily :

```javascript
router.match("/search/zombie/:town", function() { ... }, function (params) {
  
  if (params.town === 'new-york') {
    return true;
  }

  return false;

});
```

> In this case, the route will match only if the town passed is ```new-york```, it's a little bit useless here, but we can imagine everything. The only thing to keep in mind the constraint function must return ```true``` or ```false```.



## How to compile source files 

In the root of the project, execute that : 

```
coffee --compile --watch --output dist/ src/
```

## Tests 
