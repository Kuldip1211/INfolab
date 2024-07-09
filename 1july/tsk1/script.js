document.getElementById('numberForm').addEventListener('submit', (event) => {
 event.preventDefault(); // Prevent form from submitting the traditional way

 const numberInput = document.getElementById('numberInput').value;
 const number = parseInt(numberInput, 10); // Convert the input to an integer

 const checkEvenOrOdd = (num) => {
     if (isNaN(num)) {
         alert('Please enter a valid number.');
         return;
     }
     if (num % 2 === 0) {
         alert(`${num} is even.`);
     } else {
         alert(`${num} is odd.`);
     }
 };

 checkEvenOrOdd(number);
});
