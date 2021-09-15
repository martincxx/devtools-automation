describe(
  "Verify whether user is able to navigate to " +
    "all links from WebdriverIO Home Page ",
  () => {
    it("User should be able to launch WebdriverIO " + "Home Page", () => {
      browser.url("https://webdriver.io/");
      const title = browser.getTitle();
      browser.pause(1000);
      assert.equal(
        title,
        "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
      );
    });

    it(
      "User should be able to navigate to Get Started " +
        "Page of " +
        "WebdriverIO website",
      () => {
        browser.url("https://webdriver.io/");
        const element = $(
          "#__docusaurus > div.main-wrapper > header > div > div.buttons_1r9m > a:nth-child(1)"
        );
        element.click();
        browser.pause(1000);
        const title = browser.getTitle();
        expect(title).to.be.equal(
          "Getting Started | WebdriverIO",
          "title is not 'Getting Started | WebdriverIO'"
        );
      }
    );
  }
);
