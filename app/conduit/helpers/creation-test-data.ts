import { faker } from '@faker-js/faker';

export type User = {
  name?: string;
  email?: string;
  password?: string;
};

export class Article {
  readonly title: string;
  readonly description: string;
  readonly text: string;
  readonly tag: string;

  constructor(title: string, description: string, text: string, tag: string) {
    this.title = title;
    this.description = description;
    this.text = text;
    this.tag = tag;
  }
}

export function generateRegistrationUserData() {
  const user: User = {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: 'JHgFD&kl',
  };
  return user;
}

export function generateArticles(count: number = 1) {
  let articles = [];
  const text = faker.lorem.text();
  const tag = 'test-tag';

  for (let i = 0; i < count; i++) {
    articles.push(new Article(`New Article - Test (${i + 1})`, `Description for article (${i + 1})`, text, tag));
  }
  return articles;
}
