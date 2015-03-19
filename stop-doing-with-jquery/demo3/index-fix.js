(function($) {

  var sbtb = {
    log: function(message) {
      $("#log").append("").append(message);
    },
    cast: [{
      firstName: "Zack",
      lastName: "Morris",
      isExcited: false
    }, {
      firstName: "Kelly",
      lastName: "Kapowski",
      isExcited: true
    }, {
      firstName: "Lisa",
      lastName: "Turtle",
      isExcited: true
    }, {
      firstName: "Screech",
      lastName: "Powers",
      isExcited: false
    }, {
      firstName: "A.C.",
      lastName: "Slater",
      isExcited: false
    }, {
      firstName: "Jessie",
      lastName: "Spano",
      isExcited: true
    }, {
      firstName: "Richard",
      lastName: "Belding",
      isExcited: false
    }],
    soExcited: function() {

      // store this in that so we don't get confused later on when
      // our the context of "this" changes out from underneath us
      var that = this;

      // use "that" to get a reference to the cast on this object
      $.each(that.cast, function(idx, actor) {
        // call the log function
        if (actor.isExcited) {
          that.log(actor.firstName + " " + actor.lastName);
          // the value of "that" doesn't change - it's still the object
        }
      });
    }
  };

  sbtb.soExcited();

}(jQuery));
