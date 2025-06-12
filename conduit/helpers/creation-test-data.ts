import { faker } from '@faker-js/faker';

export class User {
  readonly name: string;
  readonly email: string;
  readonly password: string;

  constructor(username: string, email: string, password: string) {
    this.name = username;
    this.email = email;
    this.password = password;
  }
}

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
  const username = faker.person.firstName();
  const email = faker.internet.email();
  const password = 'JHgFD&kl';
  return new User(username, email, password);
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
