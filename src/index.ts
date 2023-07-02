import http from 'http';
import * as ExpressAppFactory from './presentation/express';

const port = Number(process.env.PORT);
const PORT = [NaN, undefined, null].includes(port) ? 3000 : port;

const app = ExpressAppFactory.createApp();

http.createServer(app).listen(PORT, () => {
  console.log(`server listening at ${PORT} 🚀`);
});
