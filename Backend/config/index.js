import dotenv from 'dotenv';

dotenv.config();

const config = {
    mongoURI: process.env.MONGODB_CONNECTION_STRING,
    port: process.env.PORT || 5000, 
};

export default config;
