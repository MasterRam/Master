(function () {
    function Car(model) {
        this.model = model;
        this.color = "silver";
        this.year = "2012";

        this.getInfo = function () {
            return this.model + " " + this.year;
        };
    }
    var myCar = new Car("ford");
    myCar.year = "2010";
    console.log(myCar.getInfo());
})();
var testModule = (function () {
     var counter = 0;
     return {
          incrementCounter: function () {
          return counter++;
    },
    resetCounter: function () {
          console.log( "counter value prior to reset: " + counter );
          counter = 0;
   }
 };
 
})();
 
// Usage:
 
// Increment our counter
testModule.incrementCounter();
 
// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();