// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  core: {
    auth0: {
      clientID: "X38a0dXMy2xZ4cVaX5HqUeZ4YeqFvAAg",
      domain: "i-tech.auth0.com",
      responseType: "token id_token",
      audience: "https://prontuario.security.com.br",
      redirectUri: "http://localhost:4200/",
      scope: "openid profile email user_metadata",
      tokenInfo: "https://i-tech.auth0.com/tokeninfo"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
