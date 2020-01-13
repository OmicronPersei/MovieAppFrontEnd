export class Location {
  longitude: number;
  latitude: number;

  constructor(props?: Location) {
    Object.assign(this, props);
  }
}
