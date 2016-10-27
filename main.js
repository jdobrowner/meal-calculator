var Diner = function(name, dishes){
  this.name = name;
  this.dishes = dishes;
  this.total = function() {
    var total = 0;
    this.dishes.forEach( function(dish) {
      total += menu.get(dish);
    });
    return total;
  };
  this.tax = function() {
    var tax = this.total() * 0.1;
    return tax;
  };
  this.tip = function() {
    var tip = Math.ceil((this.total() + this.tax()) * 0.18);
    return tip;
  };
};

var Bill = function(diners) {
  this.diners = diners;
  this.total = function() {
    var total = 0;
    diners.forEach( function(diner) {
      total += diner.total();
    });
    console.log('total: $' + total.toFixed(2));
  };
  this.tips = function() {
    var tips = 0;
    diners.forEach( function(diner) {
      tips += diner.tip();
    });
    console.log('tips: $' + tips.toFixed(2));
  };
  this.breakdown = function() {
    this.diners.forEach( function(diner) {
      var breakdown = 'name: ' + diner.name + ', total: $' + diner.total().toFixed(2);
      breakdown += ', tax: $' + diner.tax().toFixed(2) + ', tip: $' + diner.tip().toFixed(2);
      console.log(breakdown);
    });
  };
};

let menu = new Map([
  [ 'paneer masala', 11 ],
  [ 'tandori chicken', 14 ],
  [ 'gulab jamon', 4 ],
  [ 'samosas', 4 ],
  [ 'garlic naan', 3 ],
  [ 'rice', 2 ]
]);

(function() {
  var jason = new Diner('Jason', ['samosas', 'gulab jamon']);
  var monika = new Diner('Monika', ['paneer masala', 'garlic naan']);
  var jimi = new Diner('Jimi', ['tandori chicken', 'rice']);
  var bill = new Bill([jason, monika, jimi]);
  bill.total();
  bill.tips();
  bill.breakdown();
})();




//var Jason = new Diner('Jason', )
