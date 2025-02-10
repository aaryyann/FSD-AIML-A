const fs =  require("fs")


const dataWrite = () => {
    fs.writeFile("data.pdf" , "Hello writting file pdf" , (err) => {
        if(err){
            console.log("Error while handing data")
        }
    
        console.log("Data addeed successfully")
    })
}

console.log("Resources closed")

const dataRead = () => {
    fs.readFile("data.pdf" , "utf-8" , (err , data) => {
        if(err){
            console.log("Error while handing data")
        }
    
        console.log(data)
    })
}

console.log("REsources closed 2")

module.exports = {
    dataWrite,
    dataRead
}