import chalk from "chalk";

const strings = {
    date: chalk.gray(new Date().toLocaleString("pl-PL", {
        //day: "2-digit", 
        //month: "2-digit", 
        //year: "numeric", 
        // hour: "2-digit", 
        // minute: "2-digit", 
        // second: "2-digit",
        timeStyle: "long"
    })),
    mongoose_error: chalk.red("mongoose: Connection error on stack: \n\n"),
    mongoose_accept: chalk.green("mongoose: Connection accepted!"),
    mongoose_close: chalk.gray("mongoose: Connection closed"),
    express_middlewares: chalk.green("express: Middlewares initialized"),
    express_router: chalk.green("express: Router initalized"),
    socket_new: chalk.blue("socket.io: A new connection has been established"),
    jwt_start: chalk.green("passport: JWT initalized"),
    server_start: chalk.blue("node: Server running on port *:3000!"),
    error: chalk.red("An error has occured on stack: \n\n")
}

export { strings };