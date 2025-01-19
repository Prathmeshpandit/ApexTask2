function addToCart(productName) {
    alert(`${productName} has been added to your cart!`);
  }
  // Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  alert('Thank you for contacting us! We will get back to you soon.');
  this.reset();
});

// Initialize To-Do List
function initializeToDoList() {
  const addTaskButton = document.getElementById('addTaskButton');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  // Function to add a task
  function addTask() {
      const taskText = taskInput.value.trim();
      if (!taskText) {
          alert("Please enter a task.");
          return;
      }

      const li = document.createElement('li');
      li.textContent = taskText;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener('click', () => li.remove());

      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      taskInput.value = ""; // Clear the input field
  }

  // Add event listener to the "Add Task" button
  addTaskButton.addEventListener('click', addTask);

  // Optional: Handle "Enter" key for adding a task
  taskInput.addEventListener('keypress', function (e) {
      if (e.key === "Enter") {
          addTask();
      }
  });
}

// Initialize features after DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeToDoList();
});