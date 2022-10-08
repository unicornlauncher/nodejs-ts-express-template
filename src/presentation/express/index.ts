import Express from 'express';
import Helmet from 'helmet';

export default class ExpressAppFactory {
  static createApp() {
    const app = Express();

    app.use(Helmet());
    app.use(Express.json());
    app.use(Express.urlencoded({ extended: true }));

    return app;
  }
}
