import ApiError from "../../lib/Api.exceptions.js"
import {hash as  Hash, compare} from "bcrypt"
import Student from "../providers/student.js"
import {validate} from "email-validator"

class StudentService {
    async registration({mail: email, password, name, last_name}) {
        if (!email || !password || !name || !validate(email)){
            throw ApiError.badRequest("invalid data")
        }
        const hash = await Hash(password.toString(), 10)
        const answer = await Student.registration(email, hash, name, last_name)
        if (!answer.rowCount){
            throw ApiError.conflict("user already exists")
        }
        return true
    }

    async login({email, password}){
        if (!email || !password || !validate(email)){
            throw ApiError.badRequest("invalid data")
        }
        const student = (await Student.findByMail(email)).rows[0]
        if (!student){
            throw ApiError.notFound("User")
        }
        if (!await compare(password.toString(), student.password)){
            throw ApiError.notFound("User")
        }
        return {name: student.name, last_name: student.last_name, id: student.id}
    }
}

export default new StudentService()
