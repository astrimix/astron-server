import crypto from "crypto";
import JwtDecode from "jwt-decode";

function createPassword(request) {
    let salt = crypto.randomBytes(16).toString("base64");
    let hash = crypto.createHmac("sha512", salt)
        .update(request.body.password)
        .digest("base64");
    
    request.body.password = salt + "$" + hash;
}

function getMe(request) {
    return JwtDecode(request.headers.authorization.split(' ')[1]).id;
}

export { createPassword, getMe }