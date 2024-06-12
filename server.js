import express from 'express';
import 'dotenv/config';
import zamer from './routes/route.js';
import { MongoClient, ServerApiVersion } from  'mongodb';
import mongoose, {Model} from 'mongoose';
import cors from './middlewares/cors.js'
import logger from './middlewares/logger.js'


const port = process.env.PORT ?? 4000;

const app = express();
app.use(express.json());
app.use(logger)
app.use(cors)
app.use("/api/zamer", zamer)

app.get('/', (req, res) => {
    res.json("text") 
})

mongoose.connect(
    process.env.MONGO_URI,
    {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }
    }
).then(()=>console.log('connected')).catch(e=>console.log(e));


app.listen(port)