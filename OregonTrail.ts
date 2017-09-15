(function(){
    
        /*
        * Interfaces
        */
    
        //interface describing what attributes and methods a traveler should have
        interface ITraveler {
            food: number;
            name: string;
            isHealthy: boolean;
    
            //when implemented, There should be 50% chance to increase the traveler's food by 100.
            //return the travelers new food value
            hunt(): number;
    
            //when implemented, we should check to see if the traveler has a food supply of 20
            //If they do then we should consume 20 of the available food supply
            //If they don't have 20 food then we should change isHealthy to false
            //return the travelers health after attempting to eat
            eat(): boolean;
    
    
        }
    
        //interface describing attributes and methods a wagon should have
        interface IWagon{
            capacity: number;
            passengerArray: Traveler[];
    
            //when implemented, we should add the traveler to the wagon if the capacity permits
            //this function should return the string "added" on success and "sorry" on failure
            addPassenger(traveler: Traveler): string;
    
            //this should return true if there is at least one unhealthy person in the wagon
            //if everyone is healthy false should be returned
            isQuarantined(): boolean;
    
            //Return the total amount of food among all passengers of the wagon.
            getFood(): number;
    
        }
    
        /*
        * Classes
        */
    
        //The traveler class that implements the ITraveler interface
        //This is currently in violation of its contract with the interface. 
        //Create the code required to satisfy the contract with the interface
        class Traveler implements ITraveler {

            food: number;
            name: string;
            isHealthy: boolean;
 

            constructor(food: number, name: string, isHealthy: boolean){
                this.food = food;
                this.name = name;
                this.isHealthy = isHealthy;
            }

            hunt(){
                let huntedFood = Math.random() * 100;
                if (huntedFood > 50){
                  this.food = this.food + 100;
                  return this.food;
                }
                else {
                    this.food = this.food;
                    return this.food;
                }
            }
            eat(){
                if (this.food <= 20){
                    this.food = 0;
                    this.isHealthy = false;
                    return this.isHealthy;
                  }
                  if (this.food > 20){
                    this.food = this.food - 20;
                    return this.isHealthy;
                  }
            }
            
    
        }
    
        //The wagon class that implements the IWagon interface
        //This is currently in violation of its contract with the interface.
        //Create the code required to satisfy the contract with the interface 
        class Wagon implements IWagon {
            capacity: number;
            passengerArray: Traveler[] = [];
            
            constructor(capacity: number){
                this.capacity = capacity;
                
            }

            addPassenger(traveler: Traveler){
                if (this.capacity > this.passengerArray.length){
                    this.passengerArray.push(traveler);
                    return "success";
                  } else{
                    return "failure";
                  }
            }
            isQuarantined(){
                for (let i=0; i < this.passengerArray.length; i++){
                    if (this.passengerArray[i].isHealthy === false){
                      return true;
                    }
                  }
                  return false;
            }
            getFood(){
                let ofTheMack = 0;

                  for (let i=0; i < this.passengerArray.length; i++){
                  ofTheMack =  ofTheMack + this.passengerArray[i].food;
                  }
                  return ofTheMack;
                  //oh my God
            }
        }
    
        /*
        * Play the game
        *
        * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
        */

        let coolGuy1 = new Traveler(Math.random() * 100, "Cartman", true);
        let coolGuy2 = new Traveler(Math.random() * 100, "Stan", true);
        let coolGuy3 = new Traveler(Math.random() * 100, "Kyle", true);
        let coolGuy4 = new Traveler(Math.random() * 100, "Kenny", true);
        let coolGuy5 = new Traveler(Math.random() * 100, "Randy", true);

        console.log("The following travelers have been added: " + coolGuy1.name + ", " + coolGuy2.name + ", " + coolGuy3.name + ", " + coolGuy4.name + ", " + coolGuy5.name + ".")
        console.log("------------------------------------");
        /*
        * Create wagon with an empty passenger list and a capacity of 4.
        */

        let coolWagon = new Wagon(4);
        
        console.log("A new wagon has been created with the capacity of " + coolWagon.capacity)
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
        
        let coolArray = [coolGuy1, coolGuy2, coolGuy3, coolGuy4, coolGuy5];

            for(let i = 0; i < coolArray.length; i++){

                let chance = Math.random() * 100;
                if (chance >= 50){
                    coolWagon.addPassenger(coolArray[i]);   
                }

                else{
                    console.log (coolArray[i].name + " was not added to the wagon.")
                }
            }

            
            for(let i=0; i < coolWagon.passengerArray.length; i++){
                console.log(coolWagon.passengerArray[i].name + " is in the wagon.")
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
    