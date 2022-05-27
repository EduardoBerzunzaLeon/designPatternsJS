(() => {

    class SaleContext {
        
        constructor(strategy) {
            this.strategy = strategy;
        }

        setStrategy(strategy) {
            this.strategy = strategy;
        }

        calculate(amount) {
            return this.strategy.calculate(amount);
        }

    }

    class RegularSaleStrategy {

        constructor(tax) {
            this.tax = tax;
        }

        calculate(amount) {
            return amount + (amount * this.tax);
        }

    }

    class DiscountSaleStrategy {

        constructor(tax, discount) {
            this.tax = tax;
            this.discount = discount;
        }

        calculate(amount) {
            return (amount - this.discount) + (amount * this.tax);
        }

    }


    class ForeignSaleStrategy {

        
        calculate(amount) {
            return amount * this.getDollarPrice();
        }

        getDollarPrice() {
            return 20;
        }



    }

    const regularSate = new RegularSaleStrategy(0.16);
    const discountSale = new DiscountSaleStrategy(0.16, 3);
    const foreignSale = new ForeignSaleStrategy();

    const sale = new SaleContext(regularSate);

    sale.setStrategy(discountSale);
    // console.log(sale.calculate(10));

    sale.setStrategy(foreignSale);
    // console.log(sale.calculate(10));


    // ?  ================= Explicación Práctica =================

    const data = [
        {
            name: 'Erdinger Pikantus',
            country: "Alemania",
            info: 'info erdinger'
        },
        {
            name: 'Corona',
            country: "Mexico",
            info: 'info Corona'
        },
        {
            name: 'Delirium Tremes',
            country: "Belgica",
            info: 'info Delirium'
        },
    ];


    class InfoContext {

        constructor(strategy, data, element) {
            this.setStrategy(strategy);
            this.data = data;
            this.element = element;
        }

       setStrategy(strategy) {
           this.strategy = strategy;
       }

       show() {
           this.strategy.show(this.data, this.element);
       }

    }

    class ListStrategy {

        show(data, element) {

            element.innerHTML = data.reduce((ac, beer) => {
                return ac + `
                <div>
                    <h2>${beer.name}</h2>
                    <p>${beer.country}</p>
                </div>
                <hr>`;
            }, '');

        }

    }
    
    class ListDetailStrategy {

        show(data, element) {

            element.innerHTML = data.reduce((ac, beer) => {
                return ac + `
                <div>
                    <h2>${beer.name}</h2>
                    <p>${beer.country}</p>
                    <p>${beer.info}</p>
                </div>
                <hr>`;
            }, '');

        }

    }

    const content = document.querySelector('#content');
    const select = document.querySelector('#slcOptions');

    const info = new InfoContext(new ListStrategy(), data, content);
    info.show();


    const strategyOptions  = {
        'list': new ListStrategy(),
        'detailedList': new ListDetailStrategy()
    }

    select.addEventListener('change', (e) => {
        const { value } = e.currentTarget;
        info.setStrategy(strategyOptions[value]);
        info.show();
    })


})()