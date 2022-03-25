const redis = require('redis');
const config = require('./lib/config');

const main = async () => {

  const connStr = `redis://${config.username}:${config.password}@${config.host}:${config.port}`;
  const client = redis.createClient({url : connStr});

  const subscriber = client.duplicate();

  await subscriber.connect();
  await subscriber.subscribe('notification', (message) => {
    console.log(message); // 'message'
  });

};

main();