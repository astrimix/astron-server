import { app } from "../main.js";
import passport from "passport";
import userRouter from "../routes/user.routes.js";
import authRouter from "../routes/auth.routes.js";

const opts = {
    api_version: "v1"
}

export default {
    create() {
        app.use(`/api/${opts.api_version}/users`, passport.authenticate("jwt", { session: false }), userRouter());
        app.use(`/api/${opts.api_version}/auth`, authRouter());

        return console.log(`[${new Date().toISOString()}] express: Router initalized`)
    }
}