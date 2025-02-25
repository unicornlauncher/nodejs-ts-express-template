import { type Request, type Response } from 'express';
import type ApplicationState from '../../presentation/application-state';

export interface ApplicationEnv {
  NODE_ENV: string;
  NODE_VERSION: string;
  COMMIT_SHA: string;
}
export interface HealthCheckControllerProps {
  env: ApplicationEnv;
  applicationState: ApplicationState;
}

export default class HealthCheckController {
  private readonly appState: ApplicationState;
  private readonly env: ApplicationEnv;

  constructor({ env, applicationState }: HealthCheckControllerProps) {
    this.env = env;
    this.appState = applicationState;

    this.getHealthState = this.getHealthState.bind(this);
  }

  getHealthState(_: Request, res: Response): Response {
    if (!this.appState.isReady()) {
      return res.status(503).json({ msg: 'Service temporarily unavailable' });
    }

    return res.json({
      ready: true,
      environment: this.env.NODE_ENV,
      nodeVersion: this.env.NODE_VERSION,
      commitSHA: this.env.COMMIT_SHA,
    });
  }
}
