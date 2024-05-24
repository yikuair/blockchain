import { ServerRoute } from '@hapi/hapi';
import { list as getImageList } from './controller/image';
import Logger from './utils/logger';

const routes: ServerRoute[] = [
  {
    method: '*',
    path: '/*',
    handler: (request, h) => { 
      return 'not found api';
    },
    options: {
      plugins: {
        tags: ['session', ['a','b']]
      }
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      Logger.info(`api_key:${process.env.API_KEY}`);
      return `Hello,cc, Hapi with TypeScript! cc ${process.env.API_KEY}`;
    }
  },
  {
    method: 'GET',
    path: '/list',
    handler: getImageList,
    options: {
      plugins: {
        tags: ['session', ['c','d']]
      }
    },
  },
];

export default routes;
