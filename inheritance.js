function CoffeeMachine() {
    this.coffeeBeans = 100;
  
    this.grindBeans = function () {
      console.log("Grinding beans...");
      this.coffeeBeans -= 10;
    };
  
    this.makeCoffee = function () {
      this.grindBeans();
      console.log("Making coffee...");
    };
  
    this.showBeans = function () {
      console.log(`Beans remaining: ${this.coffeeBeans}`);
    };
  }
  
  // Using the CoffeeMachine
//   let myMachine = new CoffeeMachine();
//   myMachine.makeCoffee(); // Grinding beans... Making coffee... 
//   myMachine.showBeans(); // Beans remaining: 90 

  function SpecialCoffeeMachine(){
    CoffeeMachine.call(this)
    this.makeCappuccino = function() {
        this.makeCoffee(); // Using inherited method
        console.log("Adding milk foam for cappuccino...");
    };

    this.makeEspresso = function() {
        this.makeCoffee(); // Using inherited method
        console.log("Making a strong espresso...");
    };
  }

  let mySpecialMachine = new SpecialCoffeeMachine();
mySpecialMachine.makeCappuccino(); // Uses both inherited and new methods
mySpecialMachine.showBeans(); // Inherited method