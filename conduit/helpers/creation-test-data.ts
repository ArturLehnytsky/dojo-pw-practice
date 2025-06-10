import { faker } from '@faker-js/faker';

export function generateRegistrationUserData() {
  return {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: 'JHgFD&kl',
  };
}

export function generateArticles(count: number = 1) {
  let articles = [];
  const textForArticle = faker.lorem.text();
  for (let i = 0; i < count; i++) {
    articles.push({
      title: `New Article - Test (${i + 1})`,
      description: `Description for article (${i + 1})`,
      text: textForArticle,
      tag: 'test-tag',
    });
  }
  return articles;
}
