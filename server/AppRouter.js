import ChatRoute from './routes/ChatRoute.js';

export default function(app) {
  app.use('/chat', ChatRoute);
}
