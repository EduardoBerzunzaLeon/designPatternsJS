(() => {

    class Singleton {

        name  = 'hi';
        static getInstance() {
            return Singleton.instance;
        }

        static getRandom() {
            return Math.random();
        }

        constructor() {
        // Cuando creamos Singleton.instance es un metodo de la clase (metodo estatico)
            this.random = Math.random();
            if(Singleton.instance) {
                return Singleton.instance;
            }
            
            Singleton.instance = this;
        }

    }

    console.log({instance: Singleton});

    const singleton = new Singleton();
    const singleton2 = new Singleton();
    const singleton3 = Singleton.getInstance();

    console.log(singleton.random);
    console.log(singleton2.random);
    console.log(singleton === singleton2);
    console.log(singleton === singleton3);


    console.log(Singleton.getRandom());
    console.log(Singleton.getRandom());  


    class WeekDays {
        daysEs = [
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado",
            "Domingo"
        ];

        daysEn = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ];

        constructor(lang) {
            this.lang = lang;

            if(WeekDays.instance) {
                return WeekDays.instance;
            }

            WeekDays.instance = this;
        }

        getDays() {
            return this.lang === 'es' ? this.daysEs : this.daysEn;
        }

    }

    const weekDays = new WeekDays('en');
    const weekDays2 = new WeekDays('es');

    console.log({
        week2: weekDays2.getDays(), 
        week: weekDays.getDays()
    })


})()