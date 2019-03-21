import { environment } from './../../../../environments/environment';

export const AUTH_CONFIG = {
    clientID: environment.core.auth0.clientID,
    domain: environment.core.auth0.domain,
    responseType: environment.core.auth0.responseType,
    audience: environment.core.auth0.audience,
    redirectUri: environment.core.auth0.redirectUri,
    scope: environment.core.auth0.scope,
};