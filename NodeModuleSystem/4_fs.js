//files
const fs = require('fs')


// // reading a file
// let fileContent = fs.readFileSync('f1.txt')
// console.log('data of file 1 -> ', fileContent)
// console.log('data of file 1 -> '+ fileContent)

// //writing

// fs.writeFileSync('f1.txt','this is file 2')
// console.log('File has been written')

//  //append a file
//  fs.appendFileSync('f1.txt','This is updated')

//  //delete a file
//  fs.unlinkSync('f1.txt')

//directories
// //create a directory
// fs.mkdirSync('myDirectory')

// //check the content inside of a directory
// let folderPath = 'C:\\Users\\visma\\OneDrive\\Desktop\\The ultimate Node\\NodeModuleSystem\\myDirectory'


// let folderContent = fs.readdirSync(folderPath)


// console.log('Folder Content '+ folderContent)

// // check whether a directory exists or not 
// let doesExist = fs.existsSync('1_cp.js')
// console.log(doesExist)


//remove directory

fs.rmdirSync('myDirectory')
console.log("FIle deleted")