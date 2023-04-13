import {Router} from "express"
import StudentController from "../controllers/student.controller.js"

const studentRouter = new Router()

studentRouter.post("/registration", StudentController.registration)
studentRouter.post("/login", StudentController.login)

export default studentRouter
