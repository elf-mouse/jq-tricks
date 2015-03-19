var allStarCast = [{
  firstName: "Zack",
  lastName: "Morris"
}, {
  firstName: "Kelly",
  lastName: "Kapowski"
}, {
  firstName: "Lisa",
  lastName: "Turtle"
}, {
  firstName: "Screech",
  lastName: "Powers"
}, {
  firstName: "A.C.",
  lastName: "Slater"
}, {
  firstName: "Jessie",
  lastName: "Spano"
}, {
  firstName: "Richard",
  lastName: "Belding"
}];

// 1. each
(function($) {

  var worldsCutestCouple = [];
  $.each(allStarCast, function(idx, actor) {
    if (actor.firstName === "Zack" || actor.firstName === "Kelly") {
      worldsCutestCouple.push(actor);
    }
  });

  console.info('each');
  console.log(worldsCutestCouple);

}(jQuery));

// 2. map
(function($) {

  var worldsCutestCouple = $.map(allStarCast, function(actor, idx) {
    if (actor.firstName === "Zack" || actor.firstName === "Kelly") {
      return actor;
    }
  });

  console.info('map');
  console.log(worldsCutestCouple);

}(jQuery));

// 3. grep
(function($) {

  var invert = true; // default: false
  var worldsCutestCouple = $.grep(allStarCast, function(actor, idx) {
    return (actor.firstName === "Zack" || actor.firstName === "Kelly");
  }, invert);

  console.info('grep');
  console.log(worldsCutestCouple);

}(jQuery));
