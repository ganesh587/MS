const amqp = require('amqplib');

let channel, connection;

async function connectRabbitMQWithRetry(retries = 5, delay = 3000) {
  while (retries) {
    try {
      connection = await amqp.connect('amqp://rabbitmq');
      channel = await connection.createChannel();
      await channel.assertQueue('task_queue');
      console.log('Connected to RabbitMQ');
      return;
    } catch (error) {
      console.error('Error connecting to RabbitMQ:', error);
      retries--;
      console.log(`Retrying in ${delay / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  console.error('Failed to connect to RabbitMQ');
}
module.exports = {
  connectRabbitMQWithRetry,
  getChannel: () => channel,
};