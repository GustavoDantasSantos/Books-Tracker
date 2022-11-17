require('dotenv').config();
const db = require('../configs/database');
const Express = require('express');
const appRoutes = require('./routes/appRoutes');

const App = Express();
db.mongoose
    .connect(db.url)
    .then(() => {
        console.log('Successfully connected!');
    }).catch (err => {
        console.log(`Not connect error: ${err}`);
    });

App.use(Express.json());
App.use(Express.urlencoded({extended: true}));
App.use('/', appRoutes);

App.listen(process.env.SERVER_PORT, (req, res) => {
    console.log(`Server UP on port: ${process.env.SERVER_PORT}`);
});
