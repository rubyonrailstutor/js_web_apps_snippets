var Place = function (description) {
  this.desc = description;
};

var home = new Place("home")
console.log(home.desc)

// the work around for class implementation

var Class = function () {
  var klass = function () {
    this.init.apply(this, arguments);
  };
  klass.prototype.init = function () {};
  return klass;
};

var Person = new Class;

Person.prototype.init = function () {
  console.log("New person object created");
};

var person = new Person

//  Adding class function, ie, add a property to the object that points to a function

Person.find = function (id) {
  console.log("Person.find called")
  console.log("Person # " + id + " found");
};

var person = Person.find(1)

// to add an instance method, use the constructor's prototype

Person.prototype.show = function (face)  {
  console.log("This is the " + face)
}

john = new Person
john.show("face")

// the above can be messy for understanding the difference between instance and class methods
// extend and include can be used to better organize these


