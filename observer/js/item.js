(() => {


    const input = document.querySelector('#txtName');
    const div1 = document.querySelector('#div1');
    const div2 = document.querySelector('#div2');
    const div3 = document.querySelector('#div3');
    const btnAdd = document.querySelector('#btnAdd');

    class Subject {

        constructor() {
            this.observers = [];
        }

        subscribe(observer) {
            this.observers.push(observer);
        }

        unsubscribe(observer) {
            this.observers = this.observers.filter((obs) => obs !== observer);
        }

        notify(data) {
            this.observers.forEach((observer) => {
                observer.refresh(data)
            });
        }

    }

    class ItemsSubject extends Subject {

        constructor() {
            super();
            this.data = [];
        }

        add(item){
            this.data.push(item);
            this.notify(this.data);
        }
    }

    class HtmlElementObserver {

        constructor(element) {
            this.element = element;
        }

        refresh(data) {
            this.element.innerHTML = data.reduce((acc, item) => {
                return ` ${acc} <p>${item}</p>`;
            }, '');
        }

    }

    const item = new ItemsSubject();
    const div1Observer = new HtmlElementObserver(div1);
    const div2Observer = new HtmlElementObserver(div2);
    const div3Observer = new HtmlElementObserver(div3);

    item.subscribe(div1Observer);
    item.subscribe(div2Observer);
    item.subscribe(div3Observer);

    btnAdd.addEventListener('click', () => {
        const { value } = input;
        item.add(value);
    })

    


})()