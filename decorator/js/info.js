(() => {


    class ClientComponent {

        constructor(url) {
            this.url = url;
        }

        async getData() {
            const res = await fetch(this.url);
            return await res.json();
        }

    }


    class ClientDecorator {
        constructor(clientComponent) {
            this.clientComponent = clientComponent;
        }

        async getData() {
            return await this.clientComponent.getData();
        }
    }


    // decorator 1
    class UpperCaseClientDecorator extends ClientDecorator { 

        async getData() {
            const data = await super.getData();
            return data.map(record => ({
                    ...record,
                    title: record.title.toUpperCase(),
                }));
        }
    }


    class HTMLClientDecorator extends ClientDecorator {
        async getData() {
            const data = await super.getData();
            return data.map(record => ({
                ...record,
                title: `<h1>${record.title}</h1>`,
                thumbnailUrl: `<img src="${record.thumbnailUrl}" />`
            }));
        }
    }


    (async () => {

        const url =  "https://jsonplaceholder.typicode.com/photos";
        const client = new ClientComponent(url);
        // const data = await client.getData();
        
        const upperClient = new UpperCaseClientDecorator(client);
        // const data2 = await upperClient.getData();
        // console.log(data2);

        const htmlClient = new HTMLClientDecorator(upperClient);
        const data3 = await htmlClient.getData();

        const div1 = document.querySelector('#divContent1');
        const div2 = document.querySelector('#divContent2');

        div1.innerHTML = data3.reduce((ac, {title, thumbnailUrl}) => {
            return `${ac} ${title} ${thumbnailUrl}`;
            // return ac + title + thumbnailUrl;
        }, '');
        
        const htmlClient2 = new HTMLClientDecorator(client);
        const data4 = await htmlClient2.getData();

        div2.innerHTML = data4.reduce((ac, {title, thumbnailUrl}) => {
            return `${ac} ${title} ${thumbnailUrl}`;
            // return ac + title + thumbnailUrl;
        }, '');

    })();





})()