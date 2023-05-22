function createGreetingApp() {
  const userName = document.querySelector("#userName");
  const languageType = document.querySelectorAll(".lang");
  const greetCountDisplay = document.querySelector('.greetCount');
  const displayBox = document.querySelector('.numberString');
  let greetCount = 0;

  function incrementPeopleNamesCount() {
    const lastGreetedName = localStorage.getItem('lastGreetedName');
    const selectedName = userName.value.trim();

    if (selectedName !== lastGreetedName) {
      greetCount++;
      localStorage.setItem('namesCount', greetCount);
      localStorage.setItem('lastGreetedName', selectedName);
      greetCountDisplay.textContent = greetCount;
      displayBox.value = greetCount;
    }
  }

  function resetPeopleNamesCount() {
    greetCount = 0;
    localStorage.removeItem('namesCount');
    greetCountDisplay.textContent = greetCount;
    displayBox.value = '';
  }

  function getNameCount() {
    const namesCount = localStorage.getItem('namesCount');
    return namesCount;
  }

  function getGreetingMessage(selectedLanguage, selectedName) {
    let greeting = '';
    if (selectedLanguage === 'english') {
      greeting = `Hello, ${selectedName}`;
    } else if (selectedLanguage === 'isixhosa') {
      greeting = `Molo, ${selectedName}`;
    } else if (selectedLanguage === 'french') {
      greeting = `Bonjour, ${selectedName}`;
    }
    return greeting;
  }

  function handleGreetBtnClick() {
    const selectedLanguage = document.querySelector('input[name="language"]:checked');
    const selectedName = userName.value.trim();

    if (!selectedName && !selectedLanguage) {
      displayMessage('Please enter a name and select a language.');
      return;
    }

    if (!selectedName) {
      displayMessage('Please enter a name.');
      return;
    }

    if (!selectedLanguage) {
      displayMessage('Please select a language.');
      return;
    }

    const greetingMessage = getGreetingMessage(selectedLanguage.value, selectedName);
    const greetingDisplay = document.querySelector('.greetingMessage');
    const validationMessage = document.querySelector('.validationMessage');

    greetingDisplay.textContent = greetingMessage;
    validationMessage.textContent = '';
    incrementPeopleNamesCount();
  }

  function handleMyResetClick() {
    resetPeopleNamesCount();
    userName.value = "";
    languageType.forEach(function (language) {
      language.checked = false;
    });
    displayMessage('');
  }

  function displayMessage(message) {
    const messageElement = document.querySelector('.message');
    messageElement.textContent = message;
    setTimeout(() => {
      messageElement.textContent = '';
    }, 2000); // Set the timeout to 2 seconds (2000 milliseconds)
  }

  return {
    handleGreetBtnClick,
    handleMyResetClick
  };
}











































