import express from "express";
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const routes = express.Router()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// http://expressjs.com/en/starter/basic-routing.html
routes.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// your first API endpoint...
routes.get('/api/hello', function (req, res) {
    res.json({ greeting: 'hello API' });
});


routes.get("/whoami", (req, res) => {
    /*  {
        "ipaddress":req.ip,

        "language":req.headers["accept-language"],

        "software":req.headers["user-agent"]
    } */
    res.json(
        {
            "ipaddress": req.ip,

            "language": req.headers["accept-language"],

            "software": req.headers["user-agent"]
        }
    )

})
export default routes
