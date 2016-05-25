////parent object Animal
function Animal(name){
    this.name = name;
    this.age = 0;
    this.sound = "";
    this.region = "";
}

Animal.prototype.say = function(sound){
    this.sound = sound;
    alert(this.name + " say " + this.sound);
};



////create child Dog element
///call the parent constructor
function Dog(name){
    Animal.apply(this,arguments);
}
////prototype inheritance through the constructor function
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
//// add method goAway to Dog
Dog.prototype.goAway = function(region){
    this.region = region;
    alert( this.name + "go away to " + this.region );
};
var dog = new Dog("Sharik");
dog.say("gav");



////create child Cat element
function Cat(name){
    Animal.apply(this,arguments);
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.goAway = function(region){
    this.region = region;
    alert( this.name + "go away to " + this.region );
};
var cat = new Cat("Myrca");
cat.say("may");



////create child Woodpecker element
function Woodpecker(name){
    Animal.apply(this,arguments);
}
Woodpecker.prototype = Object.create(Animal.prototype);
Woodpecker.prototype.constructor = Woodpecker;
Woodpecker.prototype.goAway = function(region){
    this.region = region;
    alert( this.name + "go away to " + this.region );
};
var woodpecker = new Woodpecker("Woody");
woodpecker.say("tyc");
