/* eslint-disable */
const jsonServer = require("json-server");
const path = require("path");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));

const SERVER_DELAY = 800

server.use(async (req, res, next) => {
    await new Promise(res => {
        setTimeout(res, SERVER_DELAY)
    })

    next(); 
})

server.use((req, res, next) => {
    if(!req.headers.authorization){
        return res.status(403).json({message: "AUTH ERROR"});
    }
    next();
})


server.use(jsonServer.defaults());
server.use(router);

server.post("/login", (req, res) => {
    const {username, password} = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, "db.json"), "utf-8"));

    const {users} = db;

    const userFromBd = users.find((user) => user.password === password && user.username === username);

    if(userFromBd){
        return res.json(userFromBd)
    };

    return res.status(403).json({message: "AUTH ERROR"})
})

server.listen(8000, () => {
    console.log("SERVER IS RUNNING ON 8000 PORT");
})