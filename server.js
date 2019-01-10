const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io');
const app = express();

//API for Kafka consumer
const kafkaService = require('./server/kafkaService/kafka-service');

//Api file for interacting with mongo db
const api = require('./server/routes/api');
app.use('/api', api);

//parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Angular Dist output folder
app.use(express.static(path.join(__dirname, 'dist')));

//send all other request to angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//set port
const port = process.env.port || '3000';
app.set('port', port);

//create and start server
const server = http.createServer(app);

const io = socketIO(server);
io.on('connection', (socket) => {
    console.log("New user connected to websocket");
    /*for(let i=1; i<10000; i++){
        if(i%1000 === 0){
            let stop = new Date().getTime();
            while(new Date().getTime() < stop + 10000) {
                ;
            }
            socket.emit('realTimeFeed',"Current actual value = "+i);
        }
    }*/
    
    kafkaService.setSocket(socket);
    
    socket.on('event', function(data){
        console.log("data received from user");
    });

    socket.on('disconnect', () => {
        console.log("User is disconnected");
    });
});

kafkaService.createConsumer();

server.listen(port, () => console.log('Running on localhost: '+port));