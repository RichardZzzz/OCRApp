// start a new ocr web app

const fs = require("fs"); // iterate imgs in the folder 
const okrabyte = require("okrabyte");

(async() => {    

async function getFiles() {
    const files = await new Promise((resolve, reject) => {
        fs.readdir('imgs/', (err, files) => {
            if(err){
                reject(err);
            }else{
                resolve(files);
            }
        })
    });
    const filteredfiles = files.filter(file => file !== ".DS_Store");
    // console.log(filteredfiles);
    // return filteredfiles;

    const mapped = await Promise.all(filteredfiles.map((file) => {
        return new Promise((resolve, reject) => {
            okrabyte.decodeBuffer(fs.readFileSync("imgs/" + file), (err, data) => {
                if(err){
                    return reject(err);
                }else{
                    let splitWords = data.split("\n");
                    let word = splitWords;
                    resolve(word);
                }
            })
        })
    }))
    return mapped;
}
    // await for promise to resolve
    const test = await getFiles();
    console.log(test);

})()