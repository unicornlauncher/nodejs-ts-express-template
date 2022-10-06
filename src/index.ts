import http from 'http';
import Express from 'express';
import Helmet from 'helmet';

const PORT = process.env.PORT || 3000;
const app = Express();

app.use(Helmet());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

http.createServer(app).listen(() => console.log(`server listening at ${PORT} 🚀`));
