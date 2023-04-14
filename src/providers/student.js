import DBClient from "../../lib/postgresql.js"

class Student {

    _dbClient = DBClient.postgres

    async registration(mail, password, name, last_name) {
        return this._dbClient.query(`
            insert into "Students"(mail, password, name, last_name) values ($1, $2, $3, $4) returning id, name, last_name
        `, [mail, password, name, last_name])
    }

    async findByMail(mail){
        return this._dbClient.query(`
            select * from "Students" where mail = $1
        `, [mail])
    }
}

export default new Student()
