export class Genre {
  id: number;
  name: string;

  constructor(props?: Genre) {
    Object.assign(this, props);
  }
}
