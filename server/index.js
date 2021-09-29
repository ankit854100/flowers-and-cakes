import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import flowerRoutes from './routes/flower.js'
import cakesRoutes from './routes/cakes.js'
import usersRoutes from './routes/users.js'
import transactionsRoutes from './routes/transactions.js'

const app = express();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

app.use('/flower', flowerRoutes);
app.use('/cake', cakesRoutes);
app.use('/user', usersRoutes);
app.use('/tran', transactionsRoutes);

const CONNECTION_URL = 'mongodb+srv://demo_user:demo123123@cluster0.sfrsy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));