import faker from "faker";

export default class User {
  name: string;
  loaction: {
    lat: number;
    lng: number;
  };
  constructor() {}
}
