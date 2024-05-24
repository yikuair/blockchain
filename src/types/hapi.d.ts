import '@hapi/hapi';

declare module '@hapi/hapi' {
  interface RouteOptions {
    plugins?: {
      tags?: any;
    };
  }
}
