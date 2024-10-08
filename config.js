const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "9qFB1D7Z#OqL_XARayh9-VGFyF-1iq6-OXRrNhA1p3k3c1utpaVY",
MONGODB: process.env.MONGODB || "",//enter mongo db url
};
