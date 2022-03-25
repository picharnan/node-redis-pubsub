const redis = require('redis');
const config = require('./lib/config');


const main = async () => {

    const connStr = `redis://${config.username}:${config.password}@${config.host}:${config.port}`;
    const publisher = redis.createClient({url : connStr});
    await publisher.connect();

    const notification = {
      id: '4c1c2ea3-a8ec-48cb-93f0-5d4be7d6f24d',
      message : 'You got new message',
      code : 'NEW_MESSAGE'
    };
    await publisher.publish('notification', JSON.stringify(notification));

    process.exit(1);
  };

  main();