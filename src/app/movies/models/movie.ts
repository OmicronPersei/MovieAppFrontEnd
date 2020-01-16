export class Movie {
  id: number;
  name: string;
  rating: number;

  constructor(props?: Movie) {
    Object.assign(this, props);
  }
}
