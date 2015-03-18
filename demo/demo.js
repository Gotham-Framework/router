router = new Router();

router.match('/whatever', {object: 'lol'});

router.match('/:super', function(params) {
  console.log(params)
});

router.run();

console.log(router.response());