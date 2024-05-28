const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs-extra");
const path = require("path");

const app = express();
const PORT = 3000;
const folderPath = path.join(__dirname, "DAY1");

if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
};
function getFormattedFileName() {
    return new Date().toISOString().replace(/:/g, "-");
}
app.post('/createFile', async (req, res) => {
    try {
        await fs.ensureDir(folderPath)
        const time = getFormattedFileName
        const fileName = `${time}.txt`;
        const filePath = path.join(folderPath, fileName);
        fs.writeFile(filePath, time);
        res.send("File Created Successfully..!")
    } catch (error) {
        res.status(500).send("Error Writing a file", error);
    }
});
app.get("/getFiles", async (req, res) => {
    try {
        await fs.ensureDir(folderPath);
        const files = await fs.readdir(folderPath);
        const textFiles = files.filter((file) => file.endsWith(".txt"));
        res.json(textFiles);
    } catch (error) {
        res.status(500).send("Error reading a folder-", error);
    }
})
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});