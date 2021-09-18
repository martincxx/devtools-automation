# Devtools Automation

A simple repository with code that creates todo entries on [https://todomvc.com/examples/vanillajs/](https://todomvc.com/examples/vanillajs/)

This project was created in order to practice upgrading a wdio test suite ([https://webdriver.io/docs/v6-migration](https://webdriver.io/docs/v6-migration))

---

## IMPORTANT!

If you clone this repository these steps are no longer needed, and this section of the README.md file is just a scratchpad of the steps followed for this particular project.

_Note:_

After installing `jscodeshift` and `@wdio/codemod` it is necessary to upgrade wdio dependencies (You can check them in your package.json file):

```npm i --save-dev @wdio/spec-reporter@6 @wdio/cli@6 @wdio/mocha-framework@6 @wdio/local-runner@6 @wdio/sync@6 wdio-chromedriver-service@6 webdriverio@6
npm i --save-dev @wdio/spec-reporter@6 @wdio/cli@6 @wdio/mocha-framework@6 @wdio/local-runner@6 @wdio/sync@6 wdio-chromedriver-service@6 webdriverio@6
```

Next, we have to `npm audit fix`

With all dependencies updates, let's focus on our config file:

```npx jscodeshift -t ./node_modules/@wdio/codemod/v6 ./wdio.conf.js
npx jscodeshift -t ./node_modules/@wdio/codemod/v6 ./wdio.conf.js
```

And with that, we can update Spec Files and Page Objects:

```npx jscodeshift -t ./node_modules/@wdio/codemod/v6 ./test/specs/*
npx jscodeshift -t ./node_modules/@wdio/codemod/v6 ./test/specs/*
```

Run `npm ci` and the project has been migrated to v6 successfully.

## Migration to V7

After migrating from *v5 to v6*, we can proceed to upgrade to *wdio v7*. The process is pretty much the same procedure. With the required migration packages already installed: first upgrade dependencies

```npm i --save-dev @wdio/cli@7 @wdio/mocha-framework@7 @wdio/local-runner@7 @wdio/spec-reporter@7 @wdio/sync@7 wdio-chromedriver-service@7 webdriverio@7
npm i --save-dev @wdio/cli@7 @wdio/mocha-framework@7 @wdio/local-runner@7 @wdio/spec-reporter@7 @wdio/sync@7 wdio-chromedriver-service@7 webdriverio@7
```

and then continue with the __Transform Config File__

```npx jscodeshift -t ./node_modules/@wdio/codemod/v7 ./wdio.conf.js
npx jscodeshift -t ./node_modules/@wdio/codemod/v7 ./wdio.conf.js
```

and __Update Step definitions__ steps:

```npx jscodeshift -t ./node_modules/@wdio/codemod/v7 ./test/specs/*
npx jscodeshift -t ./node_modules/@wdio/codemod/v7 ./test/specs/*
```

And voilá, you can continue adding new Specs using wdio v7.

PS: Don't forget that webdriverio is deprecating the [sync API](https://webdriver.io/blog/2021/07/28/sync-api-deprecation).
