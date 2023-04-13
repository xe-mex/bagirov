import {Router} from "express"
import CompanyController from "../controllers/company.controller.js"

const companyRouter = new Router()

companyRouter.post("/registration", CompanyController.registration)
companyRouter.post("/login", CompanyController.login)
companyRouter.post("/contract/new", CompanyController.addNewContract)
companyRouter.get("/contract/all", CompanyController.getAvailableContracts)

export default companyRouter
