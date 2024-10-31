const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "huUiQQKZ#_XRye_XndY1CEe_0Xo57mrodv1nrSBw-Vk6qo4xgEf8",
MONGODB: process.env.MONGODB || "",

};
