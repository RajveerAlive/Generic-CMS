import express from 'express';
import Connection from './database/db.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import Routes from './routes/route.js';
import cors from 'cors';

const app = express();

const PORT = 8000;

dotenv.config();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use('/',Routes);

mongoose.set('strictQuery', false);

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);

app.listen(PORT, () => console.log(`server is running successfully on PORT ${PORT}`));
