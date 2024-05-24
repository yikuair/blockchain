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

// 生成并保存图片的函数
const generateAndSaveImage = async (index: number): Promise<void> => {
  const API_KEY = process.env.API_KEY;
  Logger.info(`API_URL:${API_URL} ,API_KEY:[${API_KEY}]`);
  try {
    // 发送请求到OpenAI API
    const response = await axios.post(
      API_URL,
      {
        "prompt": "A purple crow standing on a tombstone, occupying one-third of the image height, with a starry night background.",
        n: 2, // The amount generated each time
        size: "1024x1024",
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    Logger.info(`Received response for image ${index}.`);
    const imageUrl: string = response.data.data[0].url;
    Logger.info(`${JSON.stringify(response.data.data)}`);
    const imageResponse = await axios.get(imageUrl, {
      responseType: "arraybuffer",
    });
    const outputPath = path.join(OUTPUT_DIR, `image_${index}.png`);
    fs.writeFileSync(outputPath, imageResponse.data);
    Logger.info(`Image ${index} saved to ${outputPath}`);
  } catch (error) {
    Logger.error(`Error generating image ${index}:${error}`);
  }
};
const generateImages = async (): Promise<void> => {
  for (let i = 0; i < NUM_IMAGES; i++) {
    await generateAndSaveImage(i);
  }
  Logger.info("All images generated.");
};
export { generateImages };
