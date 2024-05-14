const sampleCsv = `Rider,Number,Bike,"Fort William - 2024 Class","Fort William - 2024 Cost","Fort William - 2024 Status","Mont-Sainte-Anne - 2023 Class","Mont-Sainte-Anne - 2023 Position","Mont-Sainte-Anne - 2023 Points","Snowshoe - 2023 Class","Snowshoe - 2023 Position","Snowshoe - 2023 Points","Les Gets - 2023 Class","Les Gets - 2023 Position","Les Gets - 2023 Points","Loudenvielle - 2023 Class","Loudenvielle - 2023 Position","Loudenvielle - 2023 Points","Andorra - 2023 Class","Andorra - 2023 Position","Andorra - 2023 Points","Val di Sole - 2023 Class","Val di Sole - 2023 Position","Val di Sole - 2023 Points","Leogang - 2023 Class","Leogang - 2023 Position","Leogang - 2023 Points","Lenzerheide - 2023 Class","Lenzerheide - 2023 Position","Lenzerheide - 2023 Points"
"Abigail Hogie",,"Beyond Racing","Elite Women",14000,,,,,,,,,,,,,,,,,,,,,,,,,`;

class Rider {
  private name: string;
  private class: string;

  constructor(name: string, classs: string) {
    this.name = name;
    this.class = classs;
  }

  public toString(): string {
    return `${this.name}|${this.class}`;
  }
}

export { sampleCsv, Rider };
