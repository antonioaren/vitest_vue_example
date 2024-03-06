# Symple calculator with some BDD and TDD sauce.

This is a normal calculator as you have seen in any excessive, but with some sauce.
this project is not about the calculator itself, but the way that use different tools to be able to create a simple
project.

>[!info]
>This project is educational, and the main goal is to show how to use different tools to make a project testable and secure.

The most important point are:

- Cucumber as BDD tool, to be able to write the test in a human-readable way.
- Vitest as TDD tool, to be able to write the test first and then the code.
- GitHub Actions (GHA) as CI (Soon CD) tool, to be able to run the test in a pipeline (Soon deploy also).

## Quick start

Run dependencies installation:

```bash
$ npm i
$ npm run dev
```

If you want to try test, you can run:

```bash
# for unit test
$ npm run test:unit
```

```bash
# for e2e test
$ npm run test:bdd
```

## GitHub Actions

either if you do a pull request or you fork and push your branch, the GHA will run the test for you.
You can check this in file [workflow](.github/workflows/node.js.yml) or either in
the [Actions tab](https://github.com/antonioaren/vitest_vue_example/actions)

## License
WTFPL
