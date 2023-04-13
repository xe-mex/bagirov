import * as dotenv from "dotenv"
dotenv.config()

import Express from "express"
import Morgan from "morgan"
import Cors from "cors"
import ApiError from "../lib/Api.exceptions.js"
import {resolve} from "path"

const server = new Express()

import studentRouter from "./routers/student.router.js"
import companyRouter from "./routers/company.router.js"

server.use(Cors())
server.use(Express.static("build"))
server.use(Morgan("dev"))
server.use(Express.json())
server.use("/student", studentRouter)
server.use("/company", companyRouter)

server.get("*", (req,res,next)=>{
    res.sendFile(resolve("build", "index.html"))
})

server.use((err, req, res, next) => {
    console.error(err)
    if (err instanceof ApiError) {
        res.status(err.status).send(err.error)
    } else {
        res.status(500).send("unknown error")
    }
})

export default server
