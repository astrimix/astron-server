import userRouter from "../routes/user.routes.js";

export default {
    create(app) {
        app.use("/api/v1/users", userRouter());
    }
}