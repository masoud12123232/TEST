const express = require('express');
const api = require('./router/api');

const app = express();

class App {
    
    constructor() {
        this.setServer();
        this.setMiddleware();
        this.setRoute();
    }

    setRoute() {
        app.use('/api', api);
    }

    setMiddleware() {
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
    }

    setServer() {
        let PORT = 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`);
        })
    }
}

module.exports = App;