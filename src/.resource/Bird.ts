// 枚举定义
export enum EyeSize { Small = "small", Medium = "medium", Large = "large" }
export enum Mood { Happy = "happy", Sad = "sad", Neutral = "neutral", Curious = "curious", Alert = "alert" }
export enum Companions { Alone = "alone", WithOthers = "with others" }
export enum Environment { TropicalForest = "tropical forest", ConiferousForest = "coniferous forest", Lakeside = "lakeside", River = "river", Seaside = "seaside" }
export enum TimeOfDay { Sunrise = "sunrise", Noon = "noon", Sunset = "sunset" }
export enum Weather { Sunny = "sunny", Rainy = "rainy", Snowy = "snowy" }
export enum BirdActivity { Flying = "flying", Standing = "standing", Foraging = "foraging" }
export enum ArtStyle { Realistic = "realistic", Impressionistic = "impressionistic", Surrealistic = "surrealistic" }

type BirdAttributes = {
  backgroundColor: string; // 背景颜色
  birdBodyColor: string; // 鸟身颜色
  birdTailColor: string; // 鸟尾颜色
  birdHeadColor: string; // 鸟头颜色
  birdWingColor: string; // 鸟翅颜色
  eyeSize: EyeSize; // 眼睛大小
  wearsGlasses: boolean; // 是否戴眼镜
  wearsHat: boolean; // 是否戴帽子
  smokes: boolean; // 是否抽烟
  environment: Environment[]; // 环境详情
  timeOfDay: TimeOfDay; // 一天中的时间
  weather: Weather; // 天气条件
  birdActivity: BirdActivity; // 鸟的活动姿态
  birdMood: Mood; // 鸟的心情
  birdCount: number; // 鸟的数量
  companions: Companions; // 鸟的伴侣情况
  hasLandmarks: string; // 视野中的名胜古迹
  artStyle: ArtStyle; // 图像的艺术风格
};

export const baseBirdAttributes = {
  backgroundColor: ['light blue', 'grey', 'sunset orange', 'midnight blue', 'forest green'],
  birdBodyColor: ['green', 'blue', 'red', 'black', 'white'],
  birdTailColor: ['red-orange', 'yellow', 'blue', 'purple', 'white'],
  birdHeadColor: ['yellow with red top', 'black with white stripes', 'blue', 'green', 'red'],
  birdWingColor: ['green with red accents', 'blue with silver streaks', 'black with gold tips', 'white with grey spots', 'multicolor'],
  eyeSize: [EyeSize.Small, EyeSize.Medium, EyeSize.Large],
  wearsGlasses: [true, false],
  wearsHat: [true, false],
  smokes: [true, false],
  environment: [Environment.TropicalForest, Environment.ConiferousForest, Environment.Lakeside, Environment.River, Environment.Seaside],
  timeOfDay: [TimeOfDay.Sunrise, TimeOfDay.Noon, TimeOfDay.Sunset],
  weather: [Weather.Sunny, Weather.Rainy, Weather.Snowy],
  birdActivity: [BirdActivity.Flying, BirdActivity.Standing, BirdActivity.Foraging],
  birdMood: [Mood.Happy, Mood.Sad, Mood.Neutral, Mood.Curious, Mood.Alert],
  birdCount: [1, 2, 3, 4, 5],
  companions: [Companions.Alone, Companions.WithOthers],
  hasLandmarks: ['天安门', '故宫', '迪斯尼', '长城', '兵马俑', '黄山', '布达拉宫', '颐和园'],
  artStyle: [ArtStyle.Realistic, ArtStyle.Impressionistic, ArtStyle.Surrealistic],
};