# Writing Clean JavaScript Tests

A set of code examples for my talk: _Writing Clean JavaScript Tests: Avoiding 10 Common Mistakes That Make Our Test Code Messy_.

The common mistakes (and their solutions) illustrated here are:

1. Duplicating test setup code
2. Not properly grouping tests
3. Unclear test descriptions
4. Repeating complicated setup steps
5. Hiding test data
6. Not using dynamic tests
7. Leaking state between tests
8. Writing confusing (or broken) async tests
9. Neglecting tests
10. Not writing tests

Slides for the talk can be found [here](https://docs.google.com/presentation/d/1Q56x1xWtTXyTP8-Zsm6IpBP-oGzJyP5Uye4omdJhRbU/edit?usp=sharing)

## Project organization

The `src/` folder contains all of the modules/functions/classes that will be used in the tests.

The `test-messy/` folder contains versions of the tests containing the common mistakes. These are numbered `01` through `10` corresponding with the list above.

The `test-clean/` folder contains versions of the tests with the mistakes fixed. These are named with the same corresponding numbers.

## Project scripts

`npm test` will run the tests with the Jest test runner

`npm run lint` will run the ESLint task.

This project will also run both tasks on pre-commit, and prevent committing if one or both fail. NOTE: Since one of the 'messy' tests contains intentional ESLint errors, `--no-verify` must be used when committing (unless the errors get fixed!).
