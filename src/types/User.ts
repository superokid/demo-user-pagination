// api v1.3
export default interface User {
  gender?: string;
  name: Name;
  location?: Location;
  email: string;
  login?: Login;
  dob: Dob;
  registered?: Dob;
  phone: string;
  cell?: string;
  id?: ID;
  picture?: Picture;
  nat?: string;
}

export interface UserApi {
  results: User[];
  info: Info;
}

export interface Info {
  page: number;
  results: number;
  seed: string;
  version: string;
}

export interface Dob {
  date: string;
  age: number;
}

export interface ID {
  name: string;
  value: string | null;
}

export interface Location {
  street: { number: number; name: string };
  city: string;
  state: string;
  country: string;
  postcode: string | number;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
