import mongoose from 'mongoose';

export default {
    start () {
        const opts = {
            //server_ip: "mongodb",
            server_ip: "192.168.1.32",
            server_port: "27017",
            database: "astron"
        }

        mongoose.connect(`mongodb://${opts.server_ip}:${opts.server_port}/${opts.database}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        });

        mongoose.set("useFindAndModify", false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('Mongoose connection successfully opened!');
        });
        
        mongoose.connection.on('err', err => {
            console.error(`Mongoose connection error: \n ${err.stack}`);
            process.exit();
        });
        
        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose connection disconnected');
        });
    }
}