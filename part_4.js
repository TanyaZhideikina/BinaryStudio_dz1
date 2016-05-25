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
    alert( this.name + " go away to " + this.region );
};
var dog = new Dog("Sharik");
///this method has only object Dog
Dog.prototype.protect = function(region){
    this.region = region;
    alert( this.name + " protect " + this.region );
};


////create child Cat element
function Cat(name){
    Animal.apply(this,arguments);
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.goAway = function(region){
    this.region = region;
    alert( this.name + " go away to " + this.region );
};
var cat = new Cat("Myrca");
///this method has only object Cat
Cat.prototype.drinkMilk = function(){
    alert( this.name + " drink milk.");
};


////create child Woodpecker element
function Woodpecker(name){
    Animal.apply(this,arguments);
}
Woodpecker.prototype = Object.create(Animal.prototype);
Woodpecker.prototype.constructor = Woodpecker;
Woodpecker.prototype.goAway = function(region){
    this.region = region;
    alert( this.name + " go away to " + this.region );
};
var woodpecker = new Woodpecker("Woody");
///this method has only object Woodpecker
Woodpecker.prototype.fly = function(){
    alert( this.name + " fly.");
};

////modifired function
////function that check the existed of methods
function getType() {
if ("name" in this &&
    "age" in this &&
    "sound" in this &&
    "region" in this &&
    "say" in this ){
        if("goAway" in this){
            if("protect" in this){
                return  "Dog";
                }else{
                    if("drinkMilk" in this){
                        return  "Cat"; 
                    }else{
                        if("fly" in this){
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
  
alert(getType.call(dog));
alert(getType.apply(cat));
alert(getType.bind(woodpecker)());