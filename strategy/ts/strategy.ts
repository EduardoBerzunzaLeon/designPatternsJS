(() => {

    interface Strategy {
        login(user: string, password: string) : boolean;
    }

    class LoginContext {

        private strategy: Strategy;

        constructor(strategy: Strategy) {
            this.setStrategy(strategy);
        }

        setStrategy(strategy: Strategy) {
            this.strategy = strategy;
        }

        login(user: string, password: string): boolean {
            return this.strategy.login(user, password);
        }

    }


    class LoginDBStrategy implements Strategy {

        login(user: string, password: string): boolean {
            console.log('nos dirigimos a la base de datos');
            return (user === 'admin' && password === 'entra');
        }

    }

    class LoginServiceStrategy implements Strategy {

        login(user: string, password: string): boolean {
            console.log('nos dirigimos a un servicio de autenticación');
            return (user === 'admin' && password === 'entra');
        }

    }

    const auth = new LoginContext(new LoginDBStrategy());
    auth.login('admin', 'entra');
    auth.setStrategy(new LoginServiceStrategy());
    auth.login('admin', 'entra');

})()