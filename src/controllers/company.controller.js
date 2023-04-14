import CompanyService from "../services/company.service.js"

class CompanyController {
    async registration(req, res, next) {
        try{
            res.json(await CompanyService.registration({
                email: req.body?.email,
                password: req.body?.password,
                name: req.body?.name,
                full_name: req.body?.full_name
            }))
        }catch (e) {
            next(e)
        }
    }

    async login(req, res, next){
        try{
            res.json(await CompanyService.login({
                email: req.body?.email,
                password: req.body?.password
            }))
        }catch (e) {
            next(e)
        }
    }

    async addNewContract(req, res, next){
        try{
            res.json({
                id: await CompanyService.addNewContract({
                    tasks: req.body?.tasks,
                    skills: req.body?.skills,
                    company: req.body?.company
                })
            })
        }catch (e) {
            next(e)
        }
    }

    async getAvailableContracts(req, res, next){
        try{
            res.send(await CompanyService.getAvailableContracts())
        }catch (e) {
            next(e)
        }
    }
}

export default new CompanyController()
