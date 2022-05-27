(() => {

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

    class Observer {

        constructor(fn) {
            this.fn = fn;
        }

        refresh(data) {
            this.fn(data);
        }

    }


    const subject = new Subject();
    const observer1 = new Observer((data) => {console.log(`observador 1 ${data}`)});
    const observer2 = new Observer((data) => {
        document.querySelector('#div1').innerHTML = data.split('').reverse().join('');
    });
    const observer3 = new Observer((data) => {
        document.querySelector('#div2').innerHTML = data;
    });

    subject.subscribe(observer1);
    subject.subscribe(observer2);
    subject.subscribe(observer3);
    
    const input = document.querySelector('#myText');

    const change = ({ target }) => {
        subject.notify(target.value);
    }

    input.addEventListener('input', change)
})()