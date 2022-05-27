// Funciones de primera clase o primer orden cuando las funciones en ese lenguaje son tratadas como cualquier otra variable. Por ejemplo, en ese lenguaje, una función puede ser pasada como argumento a otras funciones, puede ser retornada por otra función y puede ser asignada a una variable.
(() => {
    function sum(a,b) {
        return a+b;
    }
    
    let res = sum(1,2);
    console.log(res);
    
    const fSum = sum;
    
    res = fSum(5,6);
    
    console.log(res);
    
    // ? function de orden superior
    function operation(fn, a, b) {
        console.log('se hace algo');
        console.log(fn(a,b));
    }
    
    operation(sum, 10, 20);
    
    // arrow function
    operation((a, b) => a * b, 5,5);
     
    // foreach
    const names = ['eduardo', 'fatima', 'chiquikitris', 'Ana'];
    // metodo inmutable
    names.forEach((name) => {
        console.log(name.toUpperCase());
    });
    
    console.log([...names].sort());
    console.log(names);
    
    // map
    const namesUpper = names.map((name) => name.toUpperCase());
    console.log(namesUpper);
    
    // reduce
    const numbers = [5,4,7,1,10];
    const total = numbers.reduce((ac, number) => {
        return ac + number;
    }, 0);
    
    console.log(total);
    
    // Programación ORIENTADA A OBJECTOS
    // clase
    class Drink {
    
        constructor(name) {
            this.name = name;
        }
    
        info() {
            return `La bebida es: ${this.name}`;
        }
    }
    
    // funcional
    function Drink2(name) {
        this.name = name;
        this.info = function() {
            return `La bebida es: ${this.name}`;
        }
    }
    
    const drink = new Drink('beer');
    console.log(drink.info());
    
    const drink2 = new Drink('wine');
    console.log(drink2.info());
    
    // herencia
    class Beer extends Drink  {
        constructor(name, alcohol) {
            super(name);
            this.alcohol = alcohol;
        }
    
        // override
        info() {
            return `${super.info()} ${this.alcohol}`;
        }
    }
    
    const beer = new Beer('XX Lighter', 5);
    console.log(beer.info());
})()













