// 1. Створи обʼєкт book з властивостями title, author, pages. Виведи значення кожної з них.
const book = {
  title: 'JavaScript: The Definitive Guide',
  author: 'David Flanagan',
  pages: 500,
};

console.log(book.title);
console.log(book.author);
console.log(book.pages);

// 2. Додай у book нову властивість isAvailable, встанови значення true.
book.isAvailable = true;

// 3. Напиши функцію, яка приймає обʼєкт і виводить усі ключі та значення. (гугліть як)
function showKeysAndValues(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

showKeysAndValues(book);

//4. Створи вкладений обʼєкт user.profile, де profile має поле email.
const user = {
  name: 'John',
  lastName: 'Doe',
  age: 20,
  profile: { email: 'someemail@email.com' },
};

console.log(user.profile.email);
console.log('role' in user);

//6. Використай Object.keys() для підрахунку кількості властивостей. (погугліть про Object.keys())
console.log(Object.keys(user).length);

//7. Скопіюй обʼєкт settings у нову змінну settingsCopy. (перед цим створіть обʼєкт settings)
const settings = {
  languages: 'english',
  themeColor: 'white',
};

const settingsCopy1 = Object.assign({}, settings);
const settingsCopy2 = structuredClone(settings);
const settingsCopy3 = () => {
  const obj = {};
  for (let key in settings) {
    obj[key] = settings[key];
  }
  return obj;
};

console.log(settingsCopy1.languages);
console.log(settingsCopy2.languages);
console.log(settingsCopy3().languages);

//8. Напиши функцію, яка приймає обʼєкт і повертає масив значень. (тобто масив зі значеннями обʼєкта)

function returnValuesFromObject(obj) {
  return Object.values(obj);
}

console.log(returnValuesFromObject(book));
