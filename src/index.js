document.addEventListener("DOMContentLoaded", () => {
  const toDos = [];
  // created an array to store the inputed data as a list.

  const input = document.querySelector("#new-task-description"); // selected the input element with the id "#new-task-description"

  const submitButton = document.querySelector("#submit-button"); // selected the input element with the id "#submit-button"

  const taskList = document.querySelector("#tasks");

  submitButton.addEventListener("click", function () {
    // adds the input to the array(toDos) when the submit button is clicked.
    toDos.push(input.value);
    const li = document.createElement("li");
    li.innerText = input.value;
    taskList.appendChild(li);
  });
});