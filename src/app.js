const express = require('express');

const app = express();
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('MentoApi is running ✅');
});

const apiRouter = express.Router();

apiRouter.use('/users', userRoutes);
apiRouter.use('/roles', roleRoutes);

app.use('/mento/api', apiRouter);

module.exports = app;
