import mongoose from "mongoose";
import config from '../config/index.js';

const dbConnection = async () => {
    try {
        mongoose.set('strictQuery', false);
        let conn = await mongoose.connect(config.mongoURI)
        console.log(`Database connection to Mongoose host: ${conn.connection.host}`)
    }catch(e) {
        console.log("Error connecting to Mongoose")
    }
} 

export default dbConnection;
