(() => {

    class Person{

        private name: string;
        private lastName: string;
        private age: number;
        private country: string;
        private city: string;
        private hobbies: string[];

        constructor(
            name: string,
            lastName: string,
            age: number,
            country: string,
            city: string,
            hobbies: string[]
        ) {
            this.name = name;
            this.lastName = lastName;
            this.age = age;
            this.country = country;
            this.city = city;
            this.hobbies = hobbies;
        }

        getFullName(): string {
            return `${this.name} ${this.lastName}`; 
        }
    }

    interface PersonBuilder{
        age: number;
        city: string;
        country: string;
        hobbies: string[];
        lastName: string;
        name: string;

        addHobby(hobby: string): PersonBuilder;
        setAge(age: number): PersonBuilder;
        setCity(city: string): PersonBuilder;
        setCountry(country: string): PersonBuilder;
        setLastName(lastName: string): PersonBuilder;
        setName(name: string): PersonBuilder;
        build(): Person;
    }

    class NormalPersonBuilder implements PersonBuilder {
        
        public name: string;
        public lastName: string;
        public age: number;
        public country: string;
        public city: string;
        public hobbies: string[];
        

        constructor() {
            // Se pone esto y no reset por que ocurre une rror de que los valores no han sido inicializados
            this.name = '';
            this.lastName = '';
            this.age = 0;
            this.country = '';
            this.city = '';
            this.hobbies = [];
        }

        reset(): void {
            this.name = '';
            this.lastName = '';
            this.age = 0;
            this.country = '';
            this.city = '';
            this.hobbies = [];
        }
    

        setName(name:string): PersonBuilder {
            this.name = name;
            return this;
        }

        setLastName(lastName:string): PersonBuilder {
            this.lastName = lastName;
            return this;
        }

        setAge(age: number): PersonBuilder {
            this.age = age;
            return this;
        }

        setCountry(country: string): PersonBuilder {
            this.country = country;
            return this;
        }

        setCity(city: string): PersonBuilder {
            this.city = city;
            return this;
        }

        addHobby(hobby: string): PersonBuilder {
            this.hobbies.push(hobby);
            return this;
        }

        build(): Person {
            const person = new Person(
                this.name,
                this.lastName,
                this.age,
                this.country,
                this.city,
                this.hobbies
            );
            this.reset();
            return person;
        }
    }

    class PersonDirector {

        private personBuilder: PersonBuilder;

        constructor(personBuilder: PersonBuilder) {
            this.personBuilder = personBuilder;
        }

        setPersonBuilder(personBuilder: PersonBuilder) {
            this.personBuilder = personBuilder;
        }

        createSimplePerson(name: string, lastName: string) {
            this.personBuilder.setName(name)
                .setLastName(lastName);
        }

    }

    const personalBuilder = new NormalPersonBuilder();
    const hector = personalBuilder.setName('Eduardo')
        .setLastName('Berzunza')
        .addHobby('Comer')
        .addHobby('Dormir')
        .build();
    
    console.log(hector);

    // Creación con director
    const director = new PersonDirector(personalBuilder);
    director.createSimplePerson('John', 'Cena');
    const john = personalBuilder.build();
    console.log(john);
    
})()