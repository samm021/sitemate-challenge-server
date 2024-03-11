const { createApp } = require('./app');
const { shutdown } = require('./shutdown');

(async () => {
  try {
    const app = await createApp();

    const server = app.listen(app.get('port'), () => {
      console.info(
        {
          port_number: app.get('port'),

        },
        'started express server'
      )
    });
    
    shutdown(server);
  } catch (err) {
    console.error(err, 'error caught in server');
  }
})();