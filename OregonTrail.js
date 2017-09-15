(function () {
    /*
    * Interfaces
    */
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = /** @class */ (function () {
        function Traveler(food, name, isHealthy) {
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }
        Traveler.prototype.hunt = function () {
            var huntedFood = Math.random() * 100;
            if (huntedFood > 50) {
                this.food = this.food + 100;
                return this.food;
            }
            else {
                this.food = this.food;
                return this.food;
            }
        };
        Traveler.prototype.eat = function () {
            if (this.food <= 20) {
                this.food = 0;
                this.isHealthy = false;
                return this.isHealthy;
            }
            if (this.food > 20) {
                this.food = this.food - 20;
                return this.isHealthy;
            }
        };
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(capacity) {
            this.passengerArray = [];
            this.capacity = capacity;
        }
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.capacity > this.passengerArray.length) {
                this.passengerArray.push(traveler);
                return "success";
            }
            else {
                return "failure";
            }
        };
        Wagon.prototype.isQuarantined = function () {
            for (var i = 0; i < this.passengerArray.length; i++) {
                if (this.passengerArray[i].isHealthy === false) {
                    return true;
                }
            }
            return false;
        };
        Wagon.prototype.getFood = function () {
            var ofTheMack = 0;
            for (var i = 0; i < this.passengerArray.length; i++) {
                ofTheMack = ofTheMack + this.passengerArray[i].food;
            }
            return ofTheMack;
            //oh my God
        };
        return Wagon;
    }());
    /*
    * Play the game
    *
    * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    */
    var coolGuy1 = new Traveler(Math.random() * 100, "Cartman", true);
    var coolGuy2 = new Traveler(Math.random() * 100, "Stan", true);
    var coolGuy3 = new Traveler(Math.random() * 100, "Kyle", true);
    var coolGuy4 = new Traveler(Math.random() * 100, "Kenny", true);
    var coolGuy5 = new Traveler(Math.random() * 100, "Randy", true);
    console.log("The following travelers have been added: " + coolGuy1.name + ", " + coolGuy2.name + ", " + coolGuy3.name + ", " + coolGuy4.name + ", " + coolGuy5.name + ".");
    console.log("------------------------------------");
    /*
    * Create wagon with an empty passenger list and a capacity of 4.
    */
    var coolWagon = new Wagon(4);
    console.log("A new wagon has been created with the capacity of " + coolWagon.capacity);
    console.log("------------------------------------");
    /*
    * Make 3 of 5 the travelers eat by calling their eat methods
    */
    console.log(coolGuy1.name + " ate. Are they healthy? " + coolGuy1.eat());
    console.log(coolGuy2.name + " ate. Are they healthy? " + coolGuy2.eat());
    console.log(coolGuy3.name + " ate. Are they healthy? " + coolGuy3.eat());
    console.log("------------------------------------");
    /*
    * Make the remaining 2 travelers hunt
    */
    console.log(coolGuy4.name + " went hunting. They now have " + coolGuy4.hunt() + " food.");
    console.log(coolGuy5.name + " went hunting. They now have " + coolGuy5.hunt() + " food.");
    console.log("------------------------------------");
    /*
    * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    * of attempting to be being added to the wagon using the wagons addPassenger method.
    */
    var coolArray = [coolGuy1, coolGuy2, coolGuy3, coolGuy4, coolGuy5];
    for (var i = 0; i < coolArray.length; i++) {
        var chance = Math.random() * 100;
        if (chance >= 50) {
            coolWagon.addPassenger(coolArray[i]);
        }
        else {
            console.log(coolArray[i].name + " was not added to the wagon.");
        }
    }
    for (var i = 0; i < coolWagon.passengerArray.length; i++) {
        console.log(coolWagon.passengerArray[i].name + " is in the wagon.");
    }
    console.log("------------------------------------");
    /*
    * Run the isQuarantined method for the wagon
    */
    console.log("Is the wagon quarentined? " + coolWagon.isQuarantined());
    console.log("------------------------------------");
    /*
    * Run the getFood method for the wagon
    */
    console.log("Between all the passengers in the wagon, the wagon has " + coolWagon.getFood() + " food.");
    console.log("------------------------------------");
    /*
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects
    */
})();
