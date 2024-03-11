const { createApp } = require('./app');

(async () => {
  try {
    const app = await createApp();

    app.listen(app.get('port'), () => {
      console.info(
        {
          port_number: app.get('port'),

        },
        'started express server'
      )
    });
  } catch (err) {
    console.error(err, 'error caught in server');
  }
})();