const http = require('http')

const server = http.createServer((req , res) => {
    res.end("Hi there from node js")
})

const PORT = 3000
server.listen(PORT , ()=> {
    console.log(`Server is running on  Port no ${PORT}`)
})

