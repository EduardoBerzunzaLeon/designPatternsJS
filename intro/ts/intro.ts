class Drink{
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    info(): string {
        return this.name;
    }
}

const drink = new Drink('water');
console.log(drink.info());

// Interfaz - Categorizar un objetos (verlo como un contrato)
interface Product {
    price: number,
    getPrice: () => number
}

// herencia
class Beer extends Drink implements Product{
    private alcohol: number;
    price: number;

    constructor(name: string, alcohol: number, price: number) {
        super(name);
        this.alcohol = alcohol;
        this.price = price;
    }
    
    getPrice(): number{
        return this.price;
    };

     // override
     info(): string {
        return `${super.info()} ${this.alcohol}`;
    }
}

class Snack implements Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }
}

const beer = new Beer('xx Lighter', 4.8, 100);
console.log(beer.info());

const products: Product[] = [
    new Beer('corona', 4.5, 1),
    new Snack('papas', 0.5),
    new Beer('heineken', 4.5, 1.2),
];

function getPrices(items: Product[]) {
    for(const item of items) {
        console.log(item.getPrice());
    }
}

getPrices(products);