const express = require('express');

const app = express();
const userRoutesV1 = require('./routes/v1/userRoutes');
const roleRoutesV1 = require('./routes/v1/roleRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('MentoApi is running ✅');
});

const apiV1Router = express.Router();

apiV1Router.use('/users', userRoutesV1);
apiV1Router.use('/roles', roleRoutesV1);

app.use('/mento/api/v1', apiV1Router);

module.exports = app;
