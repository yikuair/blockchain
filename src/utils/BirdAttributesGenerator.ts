import { randomChoice } from './index'; // 确保路径正确
import { baseBirdAttributes, EyeSize, Environment, TimeOfDay, Weather, BirdActivity, Mood, Companions, ArtStyle } from '../.resource/Bird';

type PromptBirdItem = {
  // backgroundColor: string;
  // birdBodyColor: string;
  // birdTailColor: string;
  // birdHeadColor: string;
  // birdWingColor: string;
  // eyeSize: EyeSize;
  // wearsGlasses: boolean;
  // wearsHat: boolean;
  // smokes: boolean;
  // environment: Environment;
  // timeOfDay: TimeOfDay;
  // weather: Weather;
  // birdActivity: BirdActivity;
  // birdMood: Mood;
  // birdCount: number;
  // companions: Companions;
  // landmarks: string;
  // artStyle: ArtStyle;
  other: string;
};

// 生成 n 个独特的鸟图属性
const generateBirdPrompts = (total: number = 200): PromptBirdItem[] => {
  return Array.from({ length: total }, () => ({
    // backgroundColor: randomChoice(baseBirdAttributes.backgroundColor),
    // birdBodyColor: randomChoice(baseBirdAttributes.birdBodyColor),
    // birdTailColor: randomChoice(baseBirdAttributes.birdTailColor),
    // birdHeadColor: randomChoice(baseBirdAttributes.birdHeadColor),
    // birdWingColor: randomChoice(baseBirdAttributes.birdWingColor),
    // eyeSize: randomChoice(baseBirdAttributes.eyeSize),
    // wearsGlasses: randomChoice(baseBirdAttributes.wearsGlasses),
    // wearsHat: randomChoice(baseBirdAttributes.wearsHat),
    // smokes: randomChoice(baseBirdAttributes.smokes),
    // environment: randomChoice(baseBirdAttributes.environment),
    // timeOfDay: randomChoice(baseBirdAttributes.timeOfDay),
    // weather: randomChoice(baseBirdAttributes.weather),
    // birdActivity: randomChoice(baseBirdAttributes.birdActivity),
    // birdMood: randomChoice(baseBirdAttributes.birdMood),
    // birdCount: randomChoice(baseBirdAttributes.birdCount),
    // companions: randomChoice(baseBirdAttributes.companions),
    // landmarks: randomChoice(baseBirdAttributes.hasLandmarks),
    // artStyle: randomChoice(baseBirdAttributes.artStyle),
    other: randomChoice(baseBirdAttributes.other),
  }));
};



export { generateBirdPrompts };
