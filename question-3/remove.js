const fs = require("fs");
const path = require("path");

const logsDirectory = "Logs";

function removeDirectory(dirPath) {
    if (fs.existsSync(dirPath)) {
        fs.readdirSync(dirPath).forEach((file) => {
            const filePath = path.join(dirPath, file);
            if (fs.statSync(filePath).isFile()) {
                fs.unlinkSync(filePath);
                console.log("Deleted file:", filePath);
            } else {
                removeDirectory(filePath);
            }
        });
        fs.rmdirSync(dirPath);
        console.log("Deleted directory:", dirPath);
    }
}

removeDirectory(logsDirectory);