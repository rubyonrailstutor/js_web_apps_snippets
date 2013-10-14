var Sergeant = function(){};
Sergeant.prototype.command = function () {
  console.log("do something")
}
var Corporal = function(){};
Corporal.prototype = new Sergeant;
john = new Corporal
john.command()

to create a prototypal class relationship on contruction of new class

var Class = function(parent){
  var klass = function () {
    this.init.apply(this, arguments);
  };

  //change klass' prototype
  if (parent) {
    var subclass = function (){}; 
    subclass.prototype = parent.prototype;
    klass.prototype = new subclass;
  };

  klass.prototype.init = function (){};
  klass.fn = klass.prototype;
  klass.fun.parent = klass;
  klass._super = klass.__proto__;

  // use the below to give extend/include behavior to the prototype
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
};

// to check if it all worked...
var Shark = new Class;
