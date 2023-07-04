describe(" Testing the Greeting App", function () {
  it("should return a greeting message in English", function () {
    let greetingApp = createGreetingApp();
    const selectedLanguage = {value: "english"};
    const userName = "Akhona";
    let msgTest = greetingApp.message(selectedLanguage, userName);
    assert.equal(msgTest.greetingMessage, "Hello, Akhona");
  });

  it("should return a greeting message in IsiXhosa", function () {
    let greetingApp = createGreetingApp();
    const selectedLanguage = {value: "isixhosa"};
    const userName = "Ebby";

    const msgTest = greetingApp.message(selectedLanguage, userName);

    assert.equal(msgTest.greetingMessage, "Molo, Ebby");
  });

  it("should return a greeting message in French", function () {
    let greetingApp = createGreetingApp();
    const selectedLanguage = {value: "french"};
    const userName = "Saffah";

    const msgTest = greetingApp.message(selectedLanguage, userName);

    assert.equal(msgTest.greetingMessage, "Bonjour, Saffah");
  });

  it("should return a validation message when name is not entered", function () {
    let greetingApp = createGreetingApp();
    const selectedLanguage = { value: "english" };
    const userName = "";

    const msgTest = greetingApp.message(selectedLanguage, userName);

    assert.equal(msgTest.validationMessage, "Please enter a name.");
  });

  it("should return a validation message when language is not selected", function () {
    let greetingApp = createGreetingApp();
    const selectedLanguage = null;
    const userName = "lolo";

    const msgTest = greetingApp.message(selectedLanguage, userName);

    assert.equal(msgTest.validationMessage, "Please select a language.");
  });

  it("should return a validation message when name and language are not entered", function () {
    let greetingApp = createGreetingApp();
    const selectedLanguage = null;
    const userName = "";

    const msgTest = greetingApp.message(selectedLanguage, userName);

    assert.equal(
      msgTest.validationMessage,
      "Please enter your name and select a language."
    );
  });
  it("should reset the greeted names and greet count", function () {
    let greetingApp = createGreetingApp();
    greetingApp.handleGreetBtnClick({ value: "english" }, "Soso");
    greetingApp.handleMyResetClick();

    assert.deepStrictEqual(greetingApp.getGreetedNames(), []);
    assert.strictEqual(greetingApp.getGreetCount(), 0);
  });

  it("should not increment greetCount if the user has already been greeted", function () {
    let greetingApp = createGreetingApp();
    greetingApp.handleGreetBtnClick({ value: "english" }, "Azola");
    greetingApp.handleGreetBtnClick({ value: "english" }, "Azola");
    greetingApp.handleGreetBtnClick({ value: "english" }, "Azola");

    assert.strictEqual(greetingApp.getGreetCount(), 1);
  });
});

