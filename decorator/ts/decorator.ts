(() => {

    interface Component {
        getDetail(): string
    }

    // Concrete Component
    class ProductComponent implements Component {

        protected name: string;

        constructor(name: string) {
            this.name = name;
        }

        public getDetail(): string {
            return this.name;
        }

    }


    // Component Decorator
    abstract class ProductDecorator implements Component {

        protected component: Component;

        constructor(component: Component) {
            this.component = component;
        }

        public getDetail(): string {
            return this.component.getDetail();
        }

    }

    // Concrete Decorator
    class CommercialInfoProductDecorator extends ProductDecorator {

        private tradename: string;
        private brand: string;

        constructor(component: Component, brand: string, tradename: string) {
            super(component);
            this.tradename = tradename;
            this.brand = brand;
        }

        public getDetail(): string {
            return `${this.tradename} ${this.brand} ${super.getDetail()}`;
        }

    }

    const productComponent = new ProductComponent('Beer');
    console.log(productComponent.getDetail());

    const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, 'London Porter', 'Fullers');

    console.log(commercialInfoProduct.getDetail());

})()