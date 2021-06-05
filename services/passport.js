import { strings } from "../constants/consoleStrings.js";
import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import userModel from "../models/user.model.js";

var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "ZvhD#+bmbu#>7j8L%jZuzaW4DW7yG969",
    algorithms: ["HS256"]
}

function verifyPayload(jwt_payload, done) {
    userModel.findOne({ _id: jwt_payload.id }, (err, user) => {
        if (err) {
            return done(err, false);
        }

        if (user) {
            return done(null, user);
        } 
        
        else {
            return done(null, false);
        }
    });
};

export default () => {
    passport.use(new JwtStrategy(opts, verifyPayload));

    return console.log(`[${strings.date}] ${strings.jwt_start}`)
}

export { opts };