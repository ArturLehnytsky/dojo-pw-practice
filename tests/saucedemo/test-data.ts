import { faker } from '@faker-js/faker';

export type SauceUserData = {
  username: string;
  password: string;
  zip: string;
  firstName: string;
  lastName: string;
};

export function getStandardUser() {
  const user: SauceUserData = {
    username: 'standard_user',
    password: 'secret_sauce',
    zip: faker.location.zipCode(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  };
  return user;
}
