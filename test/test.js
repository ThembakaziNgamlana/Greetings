// Import the createGreetingApp function
// const { createGreetingApp } = ('./');

describe('createGreetingApp', function() {
  let greetingApp = createGreetingApp();

    describe('getGreetingMessage', function() {
      it('should return the correct greeting message for English', function() {
        const selectedLanguage = 'english';
        const selectedName = 'John';
  
        const greetingMessage = greetingApp(selectedLanguage, selectedName);
        assert.equal(greetingMessage, 'Hello, John');
      });
  
      it('should return the correct greeting message for IsiXhosa', function() {
        let greetingApp = createGreetingApp();
        const selectedLanguage = 'isixhosa';
        const selectedName = 'Sipho';
  
        const greetingMessage = greetingApp.getGreetingMessage(selectedLanguage, selectedName);
  
        assert.equal(greetingMessage, 'Molo, Sipho');
      });
  
      it('should return the correct greeting message for French', function() {
        let greetingApp = createGreetingApp();
        const selectedLanguage = 'french';
        const selectedName = 'Marie';
  
        const greetingMessage = greetingApp.getGreetingMessage(selectedLanguage, selectedName);
  
        assert.equal(greetingMessage, 'Bonjour, Marie');
      });
  
      // Add more tests to cover different scenarios and edge cases
    });


  });



//   describe('handleGreetBtnClick', function() {
//     it('should display the greeting message and increment greetCount', function() {
//       // Mock the necessary DOM elements
//       const selectedLanguage = { value: 'english' };
//       const selectedName = { value: 'John' };
//       const greetingDisplay = { textContent: '' };
//       const validationMessage = { textContent: '' };

//       // Set the mock DOM elements
//       greetingApp.selectedLanguage = selectedLanguage;
//       greetingApp.userName = selectedName;
//       greetingApp.greetingDisplay = greetingDisplay;
//       greetingApp.validationMessage = validationMessage;

//       // Call the function to be tested
//       greetingApp.handleGreetBtnClick();

//       // Assert the expected results
//       assert.equal(greetingDisplay.textContent, 'Hello, John');
//       assert.equal(validationMessage.textContent, '');
//       assert.equal(greetingApp.greetCount, 1);
//     });

//     // Add more tests to cover different scenarios and edge cases
//   });



//   // Add more describe blocks and tests to cover the other functions and methods
// describe('handleGreetBtnClick', function() {
//   it('should display the greeting message and increment greetCount when all inputs are provided', function() {
//     // Mock the necessary DOM elements
//     const selectedLanguage = { value: 'english' };
//     const selectedName = { value: 'John' };
//     const greetingDisplay = { textContent: '' };
//     const validationMessage = { textContent: '' };

//     // Set the mock DOM elements
//     greetingApp.userName = selectedName;
//     document.querySelector = () => selectedLanguage; // Mock document.querySelector
//     greetingApp.greetingDisplay = greetingDisplay;
//     greetingApp.validationMessage = validationMessage;

//     // Call the function to be tested
//     greetingApp.handleGreetBtnClick();

//     // Assert the expected results
//     assert.equal(greetingDisplay.textContent, 'Hello, John');
//     assert.equal(validationMessage.textContent, '');
//     assert.equal(greetingApp.greetCount, 1);
//   });

//   it('should display the validation message when name is missing', function() {
//     // Mock the necessary DOM elements
//     const selectedLanguage = { value: 'english' };
//     const selectedName = { value: '' };
//     const greetingDisplay = { textContent: '' };
//     const validationMessage = { textContent: '' };

//     // Set the mock DOM elements
//     greetingApp.userName = selectedName;
//     document.querySelector = () => selectedLanguage; // Mock document.querySelector
//     greetingApp.greetingDisplay = greetingDisplay;
//     greetingApp.validationMessage = validationMessage;

//     // Call the function to be tested
//     greetingApp.handleGreetBtnClick();

//     // Assert the expected results
//     assert.equal(greetingDisplay.textContent, '');
//     assert.equal(validationMessage.textContent, 'Please enter a name.');
//     assert.equal(greetingApp.greetCount, 0);
//   });

//   it('should display the validation message when language is missing', function() {
//     // Mock the necessary DOM elements
//     const selectedLanguage = null;
//     const selectedName = { value: 'John' };
//     const greetingDisplay = { textContent: '' };
//     const validationMessage = { textContent: '' };

//     // Set the mock DOM elements
//     greetingApp.userName = selectedName;
//     document.querySelector = () => selectedLanguage; // Mock document.querySelector
//     greetingApp.greetingDisplay = greetingDisplay;
//     greetingApp.validationMessage = validationMessage;

//     // Call the function to be tested
//     greetingApp.handleGreetBtnClick();

//     // Assert the expected results
//     assert.equal(greetingDisplay.textContent, '');
//     assert.equal(validationMessage.textContent, 'Please select a language.');
//     assert.equal(greetingApp.greetCount, 0);
//   });

//   it('should display the validation message when name and language are missing', function() {
//     // Mock the necessary DOM elements
//     const selectedLanguage = null;
//     const selectedName = { value: '' };
//     const greetingDisplay = { textContent: '' };
//     const validationMessage = { textContent: '' };

//     // Set the mock DOM elements
//     greetingApp.userName = selectedName;
//     document.querySelector = () => selectedLanguage; // Mock document.querySelector
//     greetingApp.greetingDisplay = greetingDisplay;
//     greetingApp.validationMessage = validationMessage;

//     // Call the function to be tested
//     greetingApp.handleGreetBtnClick();

//     // Assert the expected results
//     assert.equal(greetingDisplay.textContent, '');
//     assert.equal(validationMessage.textContent, 'Please enter a name and select a language.');
//     assert.equal(greetingApp.greetCount, 0);
//   });

//   // Add more tests to cover additional scenarios if needed
// });