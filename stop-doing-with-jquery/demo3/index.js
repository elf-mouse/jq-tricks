(function($) {

  var sbtb = {
    log: function(message) {
      $("#log").append("").html(message);
    },
    cast: [{
      firstName: "Zack",
      lastName: "Morris",
      soExcited: false
    }, {
      firstName: "Kelly",
      lastName: "Kapowski",
      soExcited: true
    }, {
      firstName: "Lisa",
      lastName: "Turtle",
      soExcited: true
    }, {
      firstName: "Screech",
      lastName: "Powers",
      soExcited: false
    }, {
      firstName: "A.C.",
      lastName: "Slater",
      soExcited: false
    }, {
      firstName: "Jessie",
      lastName: "Spano",
      soExcited: true
    }, {
      firstName: "Richard",
      lastName: "Belding",
      soExcited: false
    }],
    soExcited: function() {

      // use "this" to get a reference to the cast on this object
      $.each(this.cast, function(idx, actor) {

        // call the log function
        this.log(actor.firstName + " " + actor.lastName); // BOOM! Splosions.
        // "this" is now a cheesy actor, not the sbtb object anymore

      });

    }
  };

  sbtb.soExcited();

}(jQuery));
