import crypto from "crypto";

function createPassword(request) {
    let salt = crypto.randomBytes(16).toString("base64");
    let hash = crypto.createHmac("sha512", salt)
        .update(request.body.password)
        .digest("base64");
    
    request.body.password = salt + "$" + hash;
}

export { createPassword }