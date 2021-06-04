import mongoose from 'mongoose';

export default {
    start () {
        const opts = {
            //server_ip: "mongodb",
            admin_username: "admin",
            admin_password: "admin",
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
            family: 4,
            authSource: "admin",
            auth: { 
                user: "admin",
                password: "admin"
            },
        });

        mongoose.set("useFindAndModify", false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log(`[${new Date().toISOString()}] mongoose: Connection accepted!`);
        });
        
        mongoose.connection.on('err', err => {
            console.log(`[${new Date().toISOString()}] mongoose: Connection error on stack: \n ${err.stack}`);
            process.exit();
        });
        
        mongoose.connection.on('disconnected', () => {
            console.log(`[${new Date().toISOString()}] mongoose: Connection closed`);
        });
    }
}