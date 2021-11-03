export class RoverPosition {
  x: number;
  y: number;
  direction: string;

  constructor(x: number, y: number, direction: string) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  toString(): string {
    return `${this.x} ${this.y} ${this.direction}`;
  }
}
