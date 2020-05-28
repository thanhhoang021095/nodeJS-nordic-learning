const http = require("http");
const port = 3000;
const requestHandler = (req, res) => {
    const buff = [];
    req.on("data", (data) => {
        console.log("data", data);
        buff.push(data)
    })
    req.on("end", () => {
        const data = Buffer.concat(buff);
        console.log(data.toString("utf8"))
    })

    // res.statusCode = 200;
    // res.send("hello word")
}

const server = http.createServer(requestHandler);
server.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})