/*
  Simple routing
  @description Check if the routing system works for a simple route
 */
test("Simple routing", function() {

  router = new Router("/");

  router.match("/", function() {
    return "Hello World";
  });

  router.run();

  deepEqual(router.passes(), true);
  deepEqual(router.fails(), false);

});


/*
  Routing with multiple routes
  @description Check if all routes are handled
 */
test("Routing with multiple routes", function() {

  router = new Router("/");

  router.match("/test", "route 1");
  router.match("/superman", "route 2");
  router.match("/", "route 3");

  router.run();

  deepEqual(router.passes(), true);
  deepEqual(router.fails(), false);
  deepEqual(router.response().result, "route 3");

});

/*
  Routing fails
  @description Check if the routing fails correctly if no routes routed
 */
test("Routing fails", function() {

  router = new Router("/");

  router.match("/hello", "hello");

  router.run();

  deepEqual(router.passes(), false);
  deepEqual(router.fails(), true);

  deepEqual(router.response(), {});

});

/*
  Routing without routes
  @description Check if everything is right when we didn't add routes
 */
test("Routing without routes", function() {

  router = new Router("/superman");

  router.run();

  deepEqual(router.passes(), false);
  deepEqual(router.fails(), true);

  deepEqual(router.response(), {});

});

/*
  Routing route with variables
 */
test("Routing route with variables", function() {

  router = new Router("/zombie/edit/22");

  router.match("/zombie/edit/:id", function(params) {
    return "We will edit the zombie " + params.id;
  });

  router.run();

  deepEqual(router.passes(), true);
  deepEqual(router.fails(), false);

  deepEqual(router.response().result(router.response().params), "We will edit the zombie 22");

}); 

/*
  Routing route with a bunch of variables
*/
test("Routing route with a bunch of variables", function() {

  router = new Router("/hello/my/name/is/jeremie");

  router.match("/:hello/:my/:name/:is/:jeremie", function() {
    return "it was a fat pattern dude";
  });

  router.run();

  deepEqual(router.response().params.hello, "hello");
  deepEqual(router.response().params.my, "my");
  deepEqual(router.response().params.name, "name");
  deepEqual(router.response().params.is, "is");
  deepEqual(router.response().params.jeremie, "jeremie");

});
