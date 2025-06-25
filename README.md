# QA-DOJO-PRACTICE

A test automation framework using Playwright and TypeScript for e-commerce websites testing.

## Project Structure

- `/app` - Page Object Models and components
    - `/saucedemo` - Test components for the Sauce Demo website
    - `/conduit` - Test components for the Conduit website
- `/tests` - Test suites and scenarios
- `/tests-examples` - Example test scenarios

## Technologies Used

- TypeScript 5.5.3
- Playwright Test 1.52.0
- Node.js
- npm for package management
- Faker.js for test data generation
- Prettier for code formatting

## Components Architecture

The framework follows the Page Object Model pattern with a component-based approach:

- `BaseComponent` - Parent class for all UI components
- Specialized components like `CartItem` for handling specific UI elements
- Locator classes to separate element selectors from component logic

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm

### Installation

```shell script
# Clone the repository
git clone [repository-url]

# Navigate to the project directory
cd QA-DOJO-PRACTICE

# Install dependencies
npm install
```


### Running Tests

```shell script
# Run all tests
npx playwright test

# Run tests with UI mode
npx playwright test --ui

# Run specific test file
npx playwright test tests/example.spec.ts
```


## Code Style

This project uses Prettier for code formatting. Configuration is defined in `.prettierrc`.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run the tests to ensure functionality
4. Format your code with Prettier
5. Submit a pull request

## License

[Add license information here]
