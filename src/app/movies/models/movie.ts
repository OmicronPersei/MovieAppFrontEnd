export class Movie {
  id: number;
  name: string;

  constructor(props?: Movie) {
    Object.assign(this, props);
  }
}
