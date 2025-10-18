const amqp = require('amqplib');

async function start() {
    try {
        const connection = await amqp.connect('amqp://rabbitmq');
        const channel = await connection.createChannel();
        await channel.assertQueue('task_queue');
        
        console.log('Notification Service is listening to Message Queue');

        channel.consume('task_queue', (msg) => {
            const message = JSON.parse(msg.content.toString());
            console.log('Received notification for Task:', message);
            channel.ack(msg);
        });
    } catch (error) {
        console.error('Error connecting to RabbitMQ:', error);
    }
}

start();
