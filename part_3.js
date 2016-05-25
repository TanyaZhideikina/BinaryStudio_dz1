////parent object Animal
function Animal(name){
    this.name = name;
    this.age = 0;
    this.sound = "";
    this.region = "";
    this.type = "Animal";
}

Animal.prototype.say = function(sound){
    this.sound = sound;
    alert(this.name + " say " + this.sound);
};

var animal = new Animal("newAnimal");

////create child Dog element
///call the parent constructor
function Dog(name){
    Animal.apply(this,arguments);
    this.__proto__=animal;
    //// add method goAway to Dog
    this.goAway = function(region){
        this.region = region;
        alert( this.name + " go away to " + this.region );};
     ///this method has only object Dog
    this.protect = function(region){
    this.region = region;
    alert( this.name + " protect " + this.region );};
}
////prototype inheritance through the constructor function


var dog = new Dog("Sharik");

////create child Cat element
function Cat(name){
    Animal.apply(this,arguments);
    this.__proto__=animal;
    this.goAway = function(region){
        this.region = region;
        alert( this.name + " go away to " + this.region );};
    ///this method has only object Cat
    this.drinkMilk = function(){
    alert( this.name + " drink milk.");};
}

var cat = new Cat("Myrca");

////create child Woodpecker element
function Woodpecker(name){
    Animal.apply(this,arguments);
    this.__proto__=animal;
    this.goAway = function(region){
        this.region = region;
        alert( this.name + " go away to " + this.region );};
    ///this method has only object Woodpecker
    this.fly = function(){
    alert( this.name + " fly.");};
}
var woodpecker = new Woodpecker("Woody");

////function that check the existed of methods
function getType(object) {
if ("name" in object &&
    "age" in object &&
    "sound" in object &&
    "region" in object &&
    "say" in object ){
        if("goAway" in object){
            if("protect" in object){
                return  "Dog";
                }else{
                    if("drinkMilk" in object){
                        return  "Cat"; 
                    }else{
                        if("fly" in object){
                         return  "Woodpecker"; 
                    }else{
                        return undefined;
                        }
                    }
                }    
            }
        else{
            return "Animal"; 
        }
}else{
        return undefined;   
    }
};
  
alert(getType(animal));
alert(getType(dog));
alert(getType(cat));
alert(getType(woodpecker));
