import StudentService from "../services/student.service.js"

class StudentController {
    async registration(req, res, next) {
        try{
            res.json({
                status: await StudentService.registration({
                    email: req.body?.email,
                    password: req.body?.password,
                    name: req.body?.name,
                    last_name: req.body?.last_name
                })
            })
        }catch (e) {
            next(e)
        }
    }

    async login(req, res, next){
        try{
            res.json(await StudentService.login({
                email: req.body?.email,
                password: req.body?.password
            }))
        }catch (e) {
            next(e)
        }
    }
}

export default new StudentController()
