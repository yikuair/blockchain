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
  other: string; // 其他
};

export const baseBirdAttributes = {
  backgroundColor: [''],//['light blue', 'grey', 'sunset orange', 'midnight blue', 'forest green'],
  birdBodyColor: [''],//['green', 'blue', 'red', 'black', 'white'],
  birdTailColor: [''],//['red-orange', 'yellow', 'blue', 'purple', 'white'],
  birdHeadColor: [''],//['yellow with red top', 'black with white stripes', 'blue', 'green', 'red'],
  birdWingColor: [''],//['green with red accents', 'blue with silver streaks', 'black with gold tips', 'white with grey spots', 'multicolor'],
  eyeSize: [EyeSize.Small, EyeSize.Medium, EyeSize.Large],
  wearsGlasses: [true, false],
  wearsHat: [true, false],
  smokes: [true, false],
  environment: [Environment.TropicalForest, Environment.ConiferousForest, Environment.Lakeside, Environment.River, Environment.Seaside],
  timeOfDay: [TimeOfDay.Sunrise, TimeOfDay.Noon, TimeOfDay.Sunset],
  weather: [Weather.Sunny, Weather.Rainy, Weather.Snowy],
  birdActivity: [BirdActivity.Flying, BirdActivity.Standing, BirdActivity.Foraging],
  birdMood: [Mood.Happy, Mood.Sad, Mood.Neutral, Mood.Curious, Mood.Alert],
  birdCount: [1, 2],
  companions: [Companions.Alone, Companions.WithOthers],
  hasLandmarks: ['天安门', '故宫', '迪斯尼', '长城', '兵马俑', '黄山', '布达拉宫', '颐和园'],
  artStyle: [ArtStyle.Realistic, ArtStyle.Impressionistic, ArtStyle.Surrealistic],
  // other: ['图片展示了一只黄色头部、绿色身体的鹦鹉。占据了画面约三分之二的高度，象征着深刻的意义。画面传递了对信仰的坚持。整个森林景象郁郁葱葱、充满生机。图中不要显示任何文字包括字母！不要有空白的地方，图片整体焕然一起，也不要出现任何的边框。'],
  // other: ['背景是个大森林，帮我生成一张可爱的鸟logo，（黄色头部、绿色身体，真实的鸟）'],
  // other: ['在一个茂密的大森林背景下，生成一张可爱的卡通的鹦鹉logo。这只鸟有黄色的头部和绿色的身体，真实而详细。画面整体充满生机和丰富的细节。'],
  // other: ['鸟王 （ 黄色头、绿色身体 ） 带着皇冠的 ， 然后接受 鸟，柴犬，青蛙，老鼠，猩猩，猪作为大臣在跪拜'],
  other: ['A majestic bird king with a yellow head and green body, wearing a crown, is surrounded by various animals in a forest clearing. The scene is bathed in natural sunlight, creating a serene and reverent atmosphere. The animals, including a Shiba Inu dog, frogs, mice, gorillas, and pigs, are all kneeling or standing in admiration and respect towards the bird king. The setting is lush and vibrant, with a sense of harmony and unity among the animals as they pay homage to their ruler.'],
};