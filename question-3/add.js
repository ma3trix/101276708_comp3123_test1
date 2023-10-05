const fs = require("fs");
const path = require("path");

const logsDirectory = "Logs";

function createLogFiles() {
    if (!fs.existsSync(logsDirectory)) {
        fs.mkdirSync(logsDirectory);
    }

    process.chdir(logsDirectory);

    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        const fileContent = `This is log file ${i}`;
        fs.writeFileSync(fileName, fileContent);
        console.log("Created file:", fileName);
    }
}

createLogFiles();