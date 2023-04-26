const http = require("http");   // для обработки входящих запросов
const fs = require("fs");       // для чтения с жесткого диска файла index.html
    
http.createServer(function(request, response){
      
    if(request.url == "/hello"){
        response.end("Fetch на METANIT.COM");
    }
    else{
        fs.readFile("index.html", (error, data) => response.end(data));
    }
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));