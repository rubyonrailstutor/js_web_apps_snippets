var Class = function () {
  var klass = function () {
    this.init.apply(this, arguments);
  };
  
  klass.prototype.init = function () {};

  // shortcut to access prototype
  klass.fn = klass.prototype;

  // shortcut to access class
  klass.fn.parent = klass;
  
  // adding class properties
  klass.extend = function (obj) {
    var extended = obj.extended;
    for(var i in obj) {
      klass[i] = obj[i];
    }
    if (extended) extended(klass)
  };

  // adding instance properties
  klass.include = function(obj) {
    var included = obj.included;
    for (var i in obj) {
      klass.fn[i] = obj[i];
    }
    if (included) included(klass)
  };
  return klass
}

var Building = new Class;
// extend iterates through the object and copies methods directly to class, ie, parent object
Building.extend({
  build: function (name, size) { console.log("New building: " + name + " size " + size )}
})

Building.extend({
  extended: function(klass) {
    console.log(klass, "was extended");
  }
})

Building.include({
  show: function () { console.log("this is what a building looks like")}
})
var building = Building.build("john's home", "very big")
home = new Building
home.show()

// the above generates the ability to use modules 

var ORMModule = {
  save: function () { console.log("ORM Save called")}
}

var Person = new Class;
Person.include(ORMModule)
var john = new Person
john.save()
