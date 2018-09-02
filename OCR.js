// start a new ocr web app

const fs = require("fs"); // iterate imgs in the folder 
const okrabyte = require("okrabyte");

(async() => {
    const files = await new Promise((resolve, reject) => {
        fs.readdir('imgs/', (err, files) => {
            if(err){
                reject(err);
            }else{
                resolve(files);
            }
        });
    });
    console.log(files);




})()