// 更明确地定义 PromptAttribute 类型，以便更好地控制输入类型
type PromptAttribute = Record<string, string | number | boolean>;

type BaseFormat = {
  model?: string;
  quality?: string;
  response_format?: string;
  size?: string;
  n?: number;
  style?: string;
};

// 优化函数参数类型和内部处理逻辑
const generateAiParams = (prompts: PromptAttribute[], baseFormat: BaseFormat = {}): BaseFormat[] => {
  return prompts.map((prompt: PromptAttribute) => {
    // 创建 prompt 字符串，保证属性值的正确表达，特别是对字符串的处理
    const promptParts = Object.entries(prompt).map(([key, value]) =>
      typeof value === 'string' ? `${key}:"${value}"` : `${key}:${value}`
    );

    // 返回完整的参数对象，结合 baseFormat 中的覆盖设置
    return {
      prompt: `{${promptParts.join(", ")}}`,
      // model: 'dall-e-2', // 默认使用 DALL-E 2，可通过 baseFormat 覆盖
      // quality: 'standard', // 默认质量，适用于 DALL-E 3
      response_format: 'url', // 默认响应格式
      size: '1024x1024', // 默认图像大小
      n: 1, // 默认生成一张图片
      // style: 'Natural', // 默认风格，适用于 DALL-E 3
      ...baseFormat // 允许调用者覆盖默认值
    };
  });
};

export { generateAiParams };
