function createGreetingApp(storageCount) {
  var greetCount = storageCount || 0;
  var greetedNames = [];
  var result = {
    greetingMessage: "",
    validationMessage: "",
  };
  // create the greet function
  function handleGreetBtnClick(selectedLanguage, userName) {
    // INCREMENT COUNTER
    if (userName && selectedLanguage) {
      if (!greetedNames.includes(userName)) {
        greetedNames.push(userName);
        greetCount++;
      }
    }
  }
  function handleMyResetClick() {
    greetedNames = [];
    greetCount = 0;
  }

  function getGreetedNames() {
    return greetedNames;
  }

  function getGreetCount() {
    return greetCount;
  }
  function message(selectedLanguage, userName) {
    // SHOW ERROR MESSAGES
    if (userName === "" && selectedLanguage === null) {
      result.validationMessage =
        "Please enter your name and select a language.";
    } else if (userName === "") {
      result.validationMessage = "Please enter a name.";
    } else if (selectedLanguage === null) {
      result.validationMessage = "Please select a language.";
    }
    // SHOW GREETING MESSAGES
    if (userName !== "" && selectedLanguage !== null) {
      if (selectedLanguage.value === "english") {
        result.greetingMessage = "Hello, " + userName;
      } else if (selectedLanguage.value === "isixhosa") {
        result.greetingMessage = "Molo, " + userName;
      } else if (selectedLanguage.value === "french") {
        result.greetingMessage = "Bonjour, " + userName;
      }
    }
    return result;
  }
  return {
    handleGreetBtnClick,
    handleMyResetClick,
    getGreetedNames,
    getGreetCount,
    message,
  };
}
