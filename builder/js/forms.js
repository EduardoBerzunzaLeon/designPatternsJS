(() => {

    class Form {
        constructor(controls, action) {
            this.controls = controls;
            this.action = action;
        }

        getContent() {
            return `<form method="post" action="${this.action}">
                ${
                    this.controls.reduce((acc, control) => {
                        return acc + `<div> 
                            ${this.getLabel(control)}
                            ${this.getInput(control)}
                        </div>`;
                    }, '')
                }
                <button type="submit">Enviar</button>
            </form>`

        }

        getLabel(control) {
            return `<label>${control.text}</label>`;
        }

        getInput(control) {
            return `<input type="${control.type}"
                id="${control.name}"
                name="${control.name}"
            />`;
        }

    }

    class FormBuilder {
        constructor() {
            this.reset();
        }


        reset() {
            this.action = '';
            this.controls = [];
        }


        setAction(action) {
            this.action = action;
            return this;
        }

        
        addText(name, text) {
            this.controls.push({
                name,
                text,
                type: 'text',
            });
            return this;
        }

        addEmail(name, text) {
            this.controls.push({
                name,
                text,
                type: 'email',
            });
            return this;
        }

        addCheckBox(name, text) {
            this.controls.push({
                name,
                text,
                type: 'checkbox',
            });
            return this;
        }

        addColor(name, text) {
            this.controls.push({
                name,
                text,
                type: 'color',
            });
            return this;
        }

        build() {
            const form = new Form(this.controls, this.action);
            this.reset();
            return form;
        }

    }


    class FormDirector{
        constructor(formBuilder) {
            this.setBuilder(formBuilder);
        }

        setBuilder(formBuilder) {
            this.formBuilder = formBuilder;
        }

        createPeopleForm() {
            this.formBuilder.reset();
            this.formBuilder.addText('firstName', 'Nombre')
                .addText('lastName', 'Apellidos');
        }

        createContactForm() {
            this.formBuilder.reset();
            this.formBuilder.addText('name', 'Nombre del interesado')
                .addEmail('email', 'Correo Electrónico')
                .addText('message', 'Mensaje');
        }

    }


    const formBuilder = new FormBuilder();
    const formPeople = formBuilder.setAction('add.php')
                                .addText('firstName', 'Nombre')
                                .addText('lastName', 'Apellidos')
                                .addCheckBox('drinker', 'Es bebedor?')
                                .addColor('favoriteColor', 'Color Favorito')
                                .build();



    
    form1.innerHTML = formPeople.getContent();
    
    const formMail = formBuilder.setAction('send.php')
                            .addText('name', 'Nombre')
                            .addEmail('email', 'Correo electrónico')
                            .build();
    
    form2.innerHTML = formMail.getContent();

    const director = new FormDirector(formBuilder);
    director.createPeopleForm();
    
    form3.innerHTML = formBuilder.build().getContent();
    director.createPeopleForm();
    form4.innerHTML = formBuilder.build().getContent();
    director.createContactForm();
    form5.innerHTML = formBuilder.build().getContent();




})()