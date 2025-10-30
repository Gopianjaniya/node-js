const fs = require('fs')

fs.readFile('./text.txt','utf-8',(err,data)=>{
    if(err) {
        return console.log('not found');
    }else{
        console.log("File written successfully!--> ",data);
    }
})