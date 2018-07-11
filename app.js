var express = require("express");
var fs = require("fs")
var app = express();

app.use("/", function (request, response) {
    //if(!request.body) return response.sendStatus(400);
    //console.log(request.headers);
    var command = request.query.command;
    var txn_id = request.query.txn_id;
    var account = request.query.account;
    var sum = request.query.sum;
    var result = "result = 0";
    var rqForlog = {};
    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} \n`;
    fs.appendFileSync("ppcs.log", data);
    if (request.query.command == "check"){

    }
    if (request.query.command == "pay") {
        
    }
    var data = '<?xml version = "1.0" encoding="UTF-8"?>\n<response>\n';
    data = data + "    <osmp_txn_id>" + txn_id + "</osmp_txn_id>\n";
    data = data + "    <result>" + result + "</result>\n";
    data = data + "    <filds>\n";
    data = data + '        <fild1 name="name1" type="disp">value1</fild1>\n';
    data = data + '        <fild2 name="name2" type="disp">value2</fild2>\n';
    data = data + '        <fildN name="nameN" type="prt-data">valueN</fildN>\n';
    data = data + "    </filds>\n"
    response.send(data);
});

app.listen(1337);
