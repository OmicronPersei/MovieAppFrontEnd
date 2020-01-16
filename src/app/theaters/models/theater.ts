export class Theater {
  id: number;
  name: string;
  latitude: number;
  longitude: number;

  constructor(props?: Theater) {
    Object.assign(this, props);
  }
}
