// Save references to DOM elements
const itemInput = document.getElementById('item-input');
const addButton = document.getElementById('add-button');
const groceryList = document.getElementById('grocery-list');
const feedback = document.querySelector('.feedback');

// Function to add a grocery item to the list
function addItem() {
    // Create a new list item
    const newItem = document.createElement('li');
    
    // Check if user entered a value
    if (itemInput.value.trim() !== '') {
        // Set the text content of the list item
        newItem.textContent = itemInput.value;
        
        // Append the item to the grocery list
        groceryList.appendChild(newItem);
        
        // Clear any feedback message
        feedback.textContent = '';
        
        // Clear the input field
        itemInput.value = '';
        
        // Put the cursor back in the input field
        itemInput.focus();
    } else {
        // Show feedback message if nothing was entered
        feedback.textContent = 'Nothing entered!';
    }
}

// Register the addItem function for click event on the button
addButton.addEventListener('click', addItem);

// Also trigger addItem function when the Enter key is pressed in the input field
itemInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});