const fs = require("fs");
const http = require("http");

let server = http.createServer((req, res)=>{
    if(req.url=="/"){
        let data = fs.readFileSync("home.html", "utf8")
        res.end(data)
    }
    else if(req.url=="/about"){
        let data = fs.readFileSync("about.html", "utf8")
        res.end(data)
    }
    else if(req.url=="/contact"){
        let data = fs.readFileSync("contact.html", "utf8")
        res.end(data)
    }
    else if(req.url=="/file-write"){
        fs.writeFile("demo.txt", "hello world", (error)=>{
            if(error){
                res.writeHead(200, {"Content-Type": "text/html"})
                res.write("File Write Error")
                res.end()
            } else{
                res.writeHead(200, {"Content-Type": "text/html"})
                res.write("File Write Success")
                res.end()
            }
        })
    }
});
server.listen(3000, ()=>{
    console.log("Server running...")
})


