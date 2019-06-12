/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding. This is more of a "global" binding and is basically just like a raw function. Nothing special
* 2. Implicit is much more common, where you have an object and that object has the ability to call other functions. The variables are global to the function and you dont even need to use "this" because it's implied already
* 3. New Binding. This one is where people might be getting confused.. basically "this" refers to the object instance that you just created with "new"
* 4. Explicit binding is where you force "this" to point to the object you specify instead of the one you're calling from using .call or .apply
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function doStuff(thisStuff){
    console.log(thisStuff);
    return thisStuff;
}
doStuff("Hello, im in a console");

// Principle 2
// code example for Implicit Binding
const doSomeStuff = {
    speak: function(){
        console.log("Good boy!");
    },
    sit: function(){
        console.log("You sit.");
    },
    getWater: function(){
        console.log("You get some water");
    }
}
doSomeStuff.sit();

// Principle 3
// code example for New Binding
function Humanoid(data){
    this.name = data.name;
    this.level = data.level;
    this.class = data.class;
    this.announceSelf = function(){
        console.log(this.name + " is a level " + this.level + " " + this.class + ".");
    };
}

const AnthonyCarbajal = new Humanoid({
    "name": "Anthony",
    "level": 80,
    "class": "Druid"
});
AnthonyCarbajal.announceSelf();

// Principle 4
// code example for Explicit Binding
const AndiCarbajal = new Humanoid({
    "name": "Andi",
    "level": 70,
    "class": "Rogue"
});

AnthonyCarbajal.announceSelf.call(AndiCarbajal);