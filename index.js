const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
app.use(express.static(path.join(__dirname, '/')))
// localhost:8080/index.html

app.get('/datetime', (_, resp) => 
{
    resp.writeHead(200);
    let currentdate = new Date(); 
    let datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    resp.end(`Date Time = ${datetime}`)
})

app.get('/bigger', (req, resp) => {

    if (isNaN(Number(req.query.a))) {
        resp.writeHead(400);
        resp.end(`${req.query.a} is not a number!`);
        return;
    }
    if (isNaN(Number(req.query.b))) {
        resp.writeHead(400);
        resp.end(`${req.query.b} is not a number!`);
        return;
    } 

    const a = Number(req.query.a);
    const b = Number(req.query.b) ;

    if (a > b){
        resp.writeHead(200);
        resp.end(`${a} > ${b}`);
    }
    if (a < b){
        resp.writeHead(200);
        resp.end(`${a} < ${b}`);
    }
    if(a == b){
        resp.writeHead(200);
        resp.end(`${a} = ${b}`);
    }
  
})

app.get('/targil', (req, resp) => {

    if (isNaN(Number(req.query.a))) {
        resp.writeHead(400);
        resp.end(`${req.query.a} is not a number!`);
        return;
    }
    if (isNaN(Number(req.query.b))) {
        resp.writeHead(400);
        resp.end(`${req.query.b} is not a number!`);
        return;
    } 
    if (isNaN(Number(req.query.sum))) {
        resp.writeHead(400);
        resp.end(`${req.query.sum} is not a number!`);
        return;
    } 
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    const sum = Number(req.query.sum);

    if ((a + b) == sum){

        resp.sendFile(path.join(__dirname + '/correct.html'));
 
    }
    else{
   
        resp.sendFile(path.join(__dirname + '/wrong.html'));
   
    }
})
app.listen(port, () => console.log(`Listening to port ${port}`))