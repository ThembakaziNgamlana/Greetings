function createGreetingApp() {
  const userName = document.querySelector(".textString");
  const languageType = document.querySelectorAll(".lang");
  const greetBtn = document.querySelector(".radiolanguage");
  const myReset = document.querySelector(".refreshBtn");
  const message = document.querySelector(".message");
  const peopleNamesCounter = document.querySelector(".peopleNamesCounter");
  const counterEl =  document.querySelector(".counter")
  let peopleNamesCount = getNameCount(); 
  let greetCount = 0;

  function incrementPeopleNamesCount() {
    greetCount++;
    localStorage.setItem('namesCount', greetCount);
    const greetCountDisplay = document.querySelector('.greetCount');
    const displayBox = document.querySelector('.numberString');
    greetCountDisplay.textContent = greetCount;
    displayBox.value = greetCount
  }

  function resetPeopleNamesCount() {
    greetCount = 0;
    localStorage.removeItem('namesCount');
    const greetCountDisplay = document.querySelector('.greetCount')
    const displayBox = document.querySelector('.numberString');
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
    if (!selectedName) {
      message.textContent = 'Please enter a name.';
      return;
    }
    if (!selectedLanguage) {
      message.textContent = 'Please select a language.';
      return;
    }
    const greetingMessage = getGreetingMessage(selectedLanguage.value, selectedName);
    const greetingDisplay = document.querySelector('.greetingMessage');
    const validationMessage = document.querySelector('.validationMessage');
    
    if (!selectedName) {
      validationMessage.textContent = 'Please enter a name.';
      greetingDisplay.textContent = '';
      return;
    }
    if (!selectedLanguage) {
      validationMessage.textContent = 'Please select a language.';
      greetingDisplay.textContent = '';
      return;
    }
    
    greetingDisplay.textContent = greetingMessage;
    validationMessage.textContent = '';
    incrementPeopleNamesCount();
    greetCount = getNameCount();
    greetCountDisplay.textContent = greetCount;
    displayBox.value = greetCount;
  }

  function handleMyResetClick() {
    resetPeopleNamesCount();
    userName.value = "";
    languageType.forEach(function (language) {
      language.checked = false;
    });
    message.textContent = "";
  }

  return {
    handleGreetBtnClick,
    handleMyResetClick,
  };
}

const myGreetingApp = createGreetingApp();

const greetBtn = document.querySelector('.radiolanguage');
greetBtn.addEventListener('click', myGreetingApp.handleGreetBtnClick);

const resetBtn = document.querySelector('.refreshBtn');
resetBtn.addEventListener('click', myGreetingApp.handleMyResetClick);



































