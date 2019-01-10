const kafka = require('kafka-node');
var Consumer = kafka.Consumer;
const topicDetail = [
    { topic: 'jitendraTopic', partition: 0 }
];
const client = new kafka.Client();
var socket;

class KafkaService{
    //socket;

    createConsumer(){
        var me = this;
        var consumer = new Consumer(client, topicDetail, {autoCommit: true});

        consumer.on('message', me.processKafkaFeed);

        consumer.on('error', function (err) {
            console.log(err);
        });
    }

    processKafkaFeed(message){
        console.log(message);
        if(socket !== null && socket !== undefined){
            console.log("Emitted message on websocket is = "+message.value);
            socket.emit("realTimeFeed", message.value);
        }    
        else{
            console.log("Socket is null1");
        }
    }

    setSocket(socketVal){
        socket = socketVal;
    }
}

module.exports = new KafkaService;