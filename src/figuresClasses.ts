type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Function;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a >= b + c
        || b >= a + c
        || c >= a + b
        || a <= 0
        || b <= 0
        || c <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.floor(Math
      .sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public a: number,
  ) {
    if (a <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.a ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
