// Name: Jorrel Tigbayan
// ID: 101329925

const fs = require('fs');
const path = require("path");

const logsFolder = "Logs";

const logPromise = new Promise((resolve, reject) => {
    if (!fs.existsSync(logsFolder)) {
        reject("Logs folder does not exist");
    } else {
        resolve("Logs directory exists");
    }
});

logPromise.then((resolve) => {
    
    const filePromise = new Promise((resolve, reject) => {
        fs.readdirSync(logsFolder).forEach(file => {
            console.log("delete files..." + file)
            fs.unlink(path.join(logsFolder, file), (err) => {
                if (err) throw err;
            });
        })
        resolve("Files finished deleting.");
    });
    
    filePromise.then((resolve) => {
        fs.rmdirSync(logsFolder);
        console.log(resolve + " Logs folder deleted")
    })
}).catch((reject) => {
    console.log(reject);
    fs.mkdirSync(logsFolder);
    for (let i = 0; i < 10; i++) {
        let fileName = "log" + i + ".txt";
        let body = "This is file #" + i;
        fs.writeFile(logsFolder + "/" + fileName, body, err => {
            if (err) {
              console.error(err);
            } else {
              console.log(fileName);
            }
          });
    }
});