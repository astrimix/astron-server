import { strings } from "../constants/consoleStrings.js";
import mongoose from 'mongoose';
import chalk from "chalk";

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
        }).catch((error) => {
            console.log(`[${strings.date}] ${strings.mongoose_error} ${chalk.gray(error.stack)}`);
            process.exit();
        })

        mongoose.set("useFindAndModify", false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log(`[${strings.date}] ${strings.mongoose_accept}`)
        });
        
        mongoose.connection.on('error', error => {
            console.log(`[${strings.date}] ${strings.error} ${chalk.gray(error.stack)}`)
            process.exit();
        });
        
        mongoose.connection.on('disconnected', () => {
            console.log(`[${strings.date}] ${strings.mongoose_close}`)
        });
    }
}