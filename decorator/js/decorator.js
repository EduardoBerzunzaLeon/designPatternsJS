(() => {

    // component
    class ProductComponent {

        constructor(name) {
            this.name = name;
        }

        getDetail() {
            return `${this.name}`;
        }

    }

    // Decorator
    class ProductDecorator {

        constructor(productComponent) {
            this.productComponent = productComponent;
        }

        getDetail() {
            return this.productComponent.getDetail();
        }

    }


    class CommercialInfoProductDecorator extends ProductDecorator {

        constructor(productComponent, tradename, brand) {
            super(productComponent);

            this.tradename = tradename;
            this.brand = brand;
        }


        getDetail() {
            return `${this.tradename} ${this.brand} ${super.getDetail()}`;
        }

    }


    class StoreProductDecorator extends ProductDecorator {

        constructor(productComponent, price) {
            super(productComponent);

            this.price = price;
        }

        getDetail() {
            return `${super.getDetail()} $ ${this.price}`
        }

    }

    class HTMLProductDecorator extends ProductDecorator {

        // Si es el mismo constructor que el padre no es necesario ponerlo
        getDetail(){
            return `<h1>Información del producto</h1>
                <p>
                    ${super.getDetail()}
                </p>
            `
        }

    }



    const productComponent = new ProductComponent('Beer');
    console.log(productComponent.getDetail());

    const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, 'London Porter', "Fuller's");
    console.log(commercialInfoProduct.getDetail())

    const storeProduct = new StoreProductDecorator(productComponent, 10);
    console.log(storeProduct.getDetail());

    const div = document.querySelector('#my-div');
    const product = new StoreProductDecorator(commercialInfoProduct, 10);
    console.log(product.getDetail());

    const htmlProduct = new HTMLProductDecorator(product);
    div.innerHTML = htmlProduct.getDetail();

})()