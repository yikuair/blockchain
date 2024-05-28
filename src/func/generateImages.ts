import axios from "axios";
import fs from "fs";
import path from "path";
import Logger from "../utils/logger";

// OpenAI API的URL
const API_URL = "https://api.openai.com/v1/images/generations";
const NUM_IMAGES = 2;
const OUTPUT_DIR = "./generated_images";
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}
async function callApi(param: any, index: number): Promise<any> {
  const API_KEY = process.env.API_KEY;
  Logger.info(`param.... ${JSON.stringify(param)}`);
  try {
    const response = await axios.post(
      API_URL,
      param,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const imageUrl: string = response.data.data[0].url;
    Logger.info(`${JSON.stringify(response.data.data)}`);

    const imageResponse = await axios.get(imageUrl, {
      responseType: "arraybuffer",
    });

    const outputPath = path.join(OUTPUT_DIR, `bird_${Date.now()}_${index}.png`);
    fs.writeFileSync(outputPath, imageResponse.data);

    return response.data; // 返回处理成功的数据
  } catch (error) {
    Logger.error(`Error calling API: ${error}`);
    throw error; // 抛出异常以便调用者处理
  }
}
const generateImages = async (aiParams: any): Promise<any[]> => {
  const promises = aiParams.map((param: any, index: number) => callApi(param, index));
  try {
    const results = await Promise.all(promises);
    Logger.info(`All results: , ${JSON.stringify(results)}`);
    return results;
  } catch (error) {
    console.error('Error occurred while generating images:', error);
    throw error;
  }
}
export { generateImages };
