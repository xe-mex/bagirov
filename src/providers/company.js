import DBClient from "../../lib/postgresql.js"

class Company {

    _dbClient = DBClient.postgres

    async registration(mail, password, full_name, name) {
        return this._dbClient.query(`
            insert into "Companies"(mail, password, full_name, name) values ($1, $2, $3, $4) returning id, name, full_name
        `, [mail, password, full_name, name])
    }

    async findByMail(mail){
        return this._dbClient.query(`
            select * from "Companies" where mail = $1
        `, [mail])
    }

    async addNewContract(tasks, skills, company){
        return this._dbClient.query(`
            insert into "Contracts"(tasks, skills, company) values ($1, $2, $3) returning id
        `, [tasks, skills, company])
    }

    async getAvailableContracts(){
        return this._dbClient.query(`
            select t.id, t.tasks, t.skills, y.name from "Contracts" t inner join "Companies" y on t.company = y.id and t.is_open = true
        `)
    }
}

export default new Company()
