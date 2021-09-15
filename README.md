# Devtools Automation

A simple repository with code that creates todo entries on [https://todomvc.com/examples/vanillajs/](https://todomvc.com/examples/vanillajs/)

This project was created in order to practice upgrading a wdio test suite ([https://webdriver.io/docs/v6-migration](https://https://webdriver.io/docs/v6-migration))

---

## IMPORTANT!

If you clone this repository these steps are no longer needed, and this section of the README.md file is just a scratchpad of the steps followed for this particular project.

_Note:_

After installing `jscodeshift` and `@wdio/codemod` it is necessary to upgrade wdio dependencies (You can check them in your package.json file):

```npm i --save-dev @wdio/spec-reporter@6 @wdio/cli@6 @wdio/mocha-framework@6 @wdio/local-runner@6 @wdio/sync@6 wdio-chromedriver-service@6 webdriverio@6

```

Next, we have to `npm audit fix`

With all dependencies updates, let's focus on our config file:

```npx jscodeshift -t ./node_modules/@wdio/codemod/v6 ./wdio.conf.js

```

And with that, we can update Spec Files and Page Objects:

```npx jscodeshift -t ./node_modules/@wdio/codemod/v6 ./test/specs/*

```
