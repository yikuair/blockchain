import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';
import { generateImages } from '../func/generateImages';
import Logger from '../utils/logger';

export const list = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
  try {
    const data = await generateImages();
    Logger.info(`data: ${JSON.stringify(data)}`);
    return h.response({ status: 200, data }).code(200);
  } catch (error) {
    Logger.error(`Error generating images: ${error}`);
    return h.response({ status: 500, error: 'Failed to generate images' }).code(500);
  }
};
