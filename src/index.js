import { app } from "./app.js";
import http from 'http';
import connectToDb from "./db/db.js";

const port = process.env.PORT||3000

const server = http.createServer(app);

server.listen(port , ()=>{
    console.log(`server running at ${port}`);
})
connectToDb();
