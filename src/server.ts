import Hapi from '@hapi/hapi';
import Logger from './utils/logger';
import routes from './routes';
require('dotenv').config();
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });
  routes.forEach((route) => {
    if (!route.method) route["method"] = 'GET';
    const routeOptions = route.options as any;
    if (route.handler && routeOptions?.plugins?.tags?.includes('session')) {
      Logger.info(`handler is ok, tags: ${routeOptions.plugins.tags}`);
    }
    // return route;
  });
  Logger.info(`warpperRoutes:${JSON.stringify(routes)}`);
  server.route(routes);
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
