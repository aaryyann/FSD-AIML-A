const fs = require("fs")

const promise = fs.promises.writeFile("data.pdf" , "Writting successflly")

promise.then(()=> {
    console.log("msg added successfully")
}).catch((e) => {
    console.log(`error ${e}`)
}).finally(()=> {
    console.log("Done")
})

const readFilePromise = fs.promises.readFile("data.pdf" , "utf-8")

readFilePromise.then((resolve , reject)=> {
    if(reject){
        console.log(reject)
    }
    console.log(resolve)
}).finally(()=> {
    console.log("Done2")
})