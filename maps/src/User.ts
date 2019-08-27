import faker from "faker";

export class User {
  name: string;
  loaction: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.loaction = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}
