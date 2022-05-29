(() => {

    interface Observer<T> {
        refresh(value: T): void;
    }

    interface Subject<T>{
        observers: Observer<T>[];
        notify(value: T): void;
        subscribe(observer: Observer<T>): void;
        unsubscribe(observer: Observer<T>): void;
    }

    class Subject<T> implements Subject<T> {
        observers: Observer<T>[];

        constructor() {
            this.observers = [];
        }

        notify(value: T): void {
            this.observers.forEach(observer => {
                observer.refresh(value);
            })
        }

        subscribe(observer: Observer<T>): void {
            this.observers.push(observer);
        }

        unsubscribe(observer: Observer<T>): void {
            this.observers.splice(this.observers.indexOf(observer));
        }
    }


    class Observer<T> implements Observer<T> {

        constructor(private fn: (value: T) => void) {}

        refresh(value: T): void {
            this.fn(value);
        }

    }


    const subject = new Subject<number>();
    const obs1 = new Observer<number>((n) => {
        console.log(`Hello ${n}`)
    });

    subject.subscribe(obs1);
    subject.notify(1.2);
    subject.notify(30);

    const subjectString = new Subject<string>();
    const obs1String = new Observer<string>((s) => {
        console.log(s.toUpperCase());
    });
    
    const obs2String = new Observer<string>((s) => {
        console.log(s.toLowerCase());
    });

    subjectString.subscribe(obs1String);
    subjectString.subscribe(obs2String);

    subjectString.notify('Eduardo');
    subjectString.notify('Berzunza');


})();