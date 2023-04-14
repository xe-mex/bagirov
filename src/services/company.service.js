import ApiError from "../../lib/Api.exceptions.js"
import {hash as  Hash, compare} from "bcrypt"
import Company from "../providers/company.js"
import {validate} from "email-validator"

class CompanyService {
    async registration({email, password, full_name, name}) {
        if (!email || !password || !full_name || !name || !validate(email)){
            throw ApiError.badRequest("invalid data")
        }
        const hash = await Hash(password.toString(), 10)
        const answer = await Company.registration(email, hash, full_name, name)
        if (!answer.rowCount){
            throw ApiError.conflict("Company already exists")
        }
        return answer.rows[0]
    }

    async login({email, password}){
        if (!email || !password || !validate(email)){
            throw ApiError.badRequest("invalid data")
        }
        const company = (await Company.findByMail(email)).rows[0]
        if (!company){
            throw ApiError.notFound("Company")
        }
        if (!await compare(password.toString(), company.password)){
            throw ApiError.notFound("Company")
        }
        return {name: company.name, full_name: company.full_name, id: company.id}
    }

    async addNewContract({tasks, skills, company}){
        if (!tasks || !skills){
            throw ApiError.badRequest("invalid data")
        }
        return (await Company.addNewContract(tasks, skills, company || 1)).rows[0]?.id
    }

    async getAvailableContracts(){
        return (await Company.getAvailableContracts()).rows
    }
}

export default new CompanyService()
