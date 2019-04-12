# Running Jest Tests in Project Orbital

To run all Jest tests, making use of Jest's auto test discoverer and the script command in the package.json file, run the command:

> npm run test

executed inside the root directory.

To run one test, Jest must be run from its `node_modules` directory via the following command:

> ./node_modules/.bin/jest -t 'name of the test'

where the 'name of the test' string is the string that sits inside the `test()` call like so:

```js
test('name of the test', () => {
  const truth = True;
  expect(truth).toBeTruthy();
});
```

The command to run just one test can also be ran inside the root directory, no need to provide the path to the test.