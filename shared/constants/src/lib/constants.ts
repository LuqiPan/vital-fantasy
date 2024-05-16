const sampleCsv = `Rider,Number,Bike,"Fort William - 2024 Class","Fort William - 2024 Cost","Fort William - 2024 Status","Mont-Sainte-Anne - 2023 Class","Mont-Sainte-Anne - 2023 Position","Mont-Sainte-Anne - 2023 Points","Snowshoe - 2023 Class","Snowshoe - 2023 Position","Snowshoe - 2023 Points","Les Gets - 2023 Class","Les Gets - 2023 Position","Les Gets - 2023 Points","Loudenvielle - 2023 Class","Loudenvielle - 2023 Position","Loudenvielle - 2023 Points","Andorra - 2023 Class","Andorra - 2023 Position","Andorra - 2023 Points","Val di Sole - 2023 Class","Val di Sole - 2023 Position","Val di Sole - 2023 Points","Leogang - 2023 Class","Leogang - 2023 Position","Leogang - 2023 Points","Lenzerheide - 2023 Class","Lenzerheide - 2023 Position","Lenzerheide - 2023 Points"
"Abigail Hogie",,"Beyond Racing","Elite Women",14000,,,,,,,,,,,,,,,,,,,,,,,,,`;

type PointsBreakdown = {
  [key: string]: number[];
};

const pointsBreakdown: PointsBreakdown = {
  'Elite Men': [
    0, 250, 210, 180, 160, 140, 125, 110, 95, 80, 75, 71, 68, 65, 63, 60, 58,
    56, 54, 52, 50, 48, 46, 44, 42, 40, 38, 36, 34, 32, 30,
  ],
  'Elite Women': [0, 250, 210, 180, 150, 120, 90, 80, 70, 60, 50],
  'Junior Men': [
    0, 60, 50, 45, 40, 35, 30, 28, 26, 24, 22, 20, 18, 16, 14, 12, 10, 9, 8, 7,
    6, 5, 4, 3, 2, 1,
  ],
  'Junior Women': [0, 60, 50, 45, 40, 35, 30, 25, 15, 10, 5],
};

class Rider {
  Name: string;
  Class: string;

  constructor(name: string, class_: string) {
    this.Name = name;
    this.Class = class_;
  }

  public toString(): string {
    return `${this.Name}|${this.Class}`;
  }
}

export { pointsBreakdown, sampleCsv, Rider };
