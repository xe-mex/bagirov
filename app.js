import server from "./src/server.js"

const port = process.env.PORT || 5000

server.listen(port, (err)=>{
    if (err){
        throw err
    }
    console.log(`Сервер запущен на порту ${port}`)
})
