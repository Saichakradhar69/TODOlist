// Select the form, input, and list elements
const form = document.querySelector('#form');
const input = document.querySelector('#inputfield');
const list = document.querySelector('#taskdisp');

// Add a submit event listener to the form
form.addEventListener('click', function(event){
  event.preventDefault(); // Prevent the form from submitting and refreshing the page
  const task = input.value.trim(); // Get the trimmed value of the input
  if (task) {
    addTask(task); // If the task is not empty, add it to the list
    input.value = ''; // Clear the input
  }
});

// Add a new task to the list
function addTask(task) {
  const li = document.createElement('li'); // Create a new list item element
  li.textContent = task; // Set the text content of the list item to the task
  const deleteButton = document.createElement('button'); // Create a new button element
  deleteButton.classList.add('delete'); // Add the "delete" class to the button
  deleteButton.innerHTML = '&times;'; // Set the inner HTML of the button to an "x" symbol
  deleteButton.addEventListener('click', () => { // Add a click event listener to the button
    li.remove(); // Remove the list item when the button is clicked
  });
  // li.appendChild(checkbox); // Add the checkbox to the list item
  li.appendChild(deleteButton); // Add the delete button to the list item
  list.appendChild(li); // Add the list item to the list
}
