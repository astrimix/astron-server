import userModel from "../models/user.model.js";

export default {
    insert(req, res) {
        let salt = crypto.randomBytes(16).toString("base64");
        let hash = crypto.createHmac("sha512", salt)
            .update(req.body.password)
            .digest("base64");
        
        req.body.password = salt + "$" + hash;
        userModel.createUser(req.body).then((result) => {
            res.status(201).send({ result });
        });
    }
}