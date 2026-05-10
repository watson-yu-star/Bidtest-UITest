
# Bidtest-UITest

The API test is based on playwright API testing.

## 1. Prerequisites

You need the following installed locally. Exact versions are suggestions – anything in the same major line should be fine.


| Tool     | Recommended version | Check command        |
|----------|---------------------|----------------------|
| Node.js  | 18.x or 20.x LTS    | `node --version`     |
| npm      | 9.x or 10.x         | `npm --version`      |
| Git      | any modern version  | `git --version`      |

## 2. Getting the code

```bash
# Clone or unzip the repo, then:
cd Bidtest-UITest

# Install the dependencies for the api test project
npm install
# Install the browsers
npx playwright install

```

## 3. Running the test

```bash
npm run test
```

You should see:

> uitest@1.0.0 test
> npx bddgen && npx playwright test

## 4. Checking the test report

```bash
npm run test:report
```

