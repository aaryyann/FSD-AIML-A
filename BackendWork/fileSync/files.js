const fs = require('fs')

const writeFile = () => {
    try{
        console.log("Before Writting Data")
        fs.writeFileSync("a.txt" , "Hi there this is the file from a.txt")
        console.log("Data written successfully")
    }catch(e){
        console.log("error in writing" , e)
    }
}


const readFile = () => {
    try{
        const content = fs.readFileSync("a.txt" , "utf-8")
        console.log(content)
    }catch(e){
        console.log("error in writing" , e)
    }
}



const appendFile = () => {
    try{
        console.log("Before Appending")
        fs.appendFileSync("a.txt" , " Appended KEywords")
        console.log("Data appended successfully")
    }catch(e){
        console.log("error in writing" , e)
    }
}

const deleteFile = () => {
    try{
        fs.unlinkSync("a.txt")
    }catch(e){
        console.log("error in writing" , e)
    }
}


module.exports = {writeFile,
    readFile,
    appendFile,
    deleteFile
}