const container = document.querySelector('.container');

for(let i = 0; i<16*16;i++){
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);}

// Select all squares
const squares = document.querySelectorAll('.square');

// Add hover effect using event listeners
squares.forEach(square => {
  square.addEventListener("mouseenter", (event) => {
    // Highlight the background on hover
    event.target.style.backgroundColor = "purple";

    // Reset the background after a short delay
    setTimeout(() => {
      event.target.style.backgroundColor = "";
    }, 500);
  });

  square.addEventListener("mouseover", (event) => {
    // Change background color on hover
    event.target.style.backgroundColor = "orange";

    // Reset the background after a short delay
    setTimeout(() => {
      event.target.style.backgroundColor = "";
    }, 500);
  });
});