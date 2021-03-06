import { strings } from "../constants/consoleStrings.js";
import { app } from "../main.js";
import userRouter from "../routes/user.routes.js";
import guildRouter from "../routes/guild.routes.js";
import authRouter from "../routes/auth.routes.js";
import passport from "passport";

const api_version = "v1";

export default {
    create() {
        app.use(`/api/${api_version}/auth`, authRouter());
        app.use(`/api/${api_version}/users`, passport.authenticate("jwt", { session: false }), userRouter());
        //app.use(`/api/${api_version}/guilds`, passport.authenticate("jwt", { session: false }), guildRouter());
        app.use(`/api/${api_version}/guilds`, guildRouter());

        return console.log(`[${strings.date}] ${strings.express_router}`)
    }
}