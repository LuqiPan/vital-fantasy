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
};

export { Rider };
