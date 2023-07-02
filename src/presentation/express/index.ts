import Express from 'express';
import Helmet from 'helmet';

import * as PresentationResourcesManager from '../resources';

export function createApp(): Express.Express {
  const app = Express();

  app.use(Helmet());
  app.use(Express.json());
  app.use(Express.urlencoded({ extended: true }));
  app.use(PresentationResourcesManager.configureRouter(Express.Router()));

  return app;
}
