import ChatRoute from './routes/ChatRoute.js';

export default function(app) {
  app.use('/chat', ChatRoute);

  //errors route
  app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    error.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });
}
