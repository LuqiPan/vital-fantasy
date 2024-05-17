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

export { pointsBreakdown };
