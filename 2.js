function validateInput(input) {
    if (input && input.length > 50) {
      alert("The input string cannot exceed 50 characters.");
    } else {
      alert("Valid String.");
    }
  }
  
  let userInput = prompt("Enter string:");
  validateInput(userInput);