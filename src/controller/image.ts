import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';
import { generateImages } from '../func/generateImages';
import { generateBirdPrompts } from '../utils/BirdAttributesGenerator';
import { generateAiParams } from '../utils/AiParams';
import Logger from '../utils/logger';

export const list = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
  try {
    // 1.生成描述文件
    const attrs = generateBirdPrompts(100);
    // 2.生成ai params
    const aiParams = generateAiParams(attrs);
    Logger.info(`aiParams:${JSON.stringify(aiParams)}`);
    const data = await generateImages(aiParams);
    return h.response({ status: 200, data }).code(200);
  } catch (err) {
    return h.response({ status: 500, error: 'Failed to generate images' }).code(500);
  }
};
