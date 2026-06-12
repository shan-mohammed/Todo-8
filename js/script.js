const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskBtn = document.getElementById("taskBtn");
const taskList = document.getElementById("taskList");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task === "") {
    alert("Enter a task");
    return;
  }

  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center ";
  const span = document.createElement("span");
  span.textContent = task;
  const btnGroup = document.createElement("div");
  btnGroup.className = "d-flex gap-2";

  //  Done buttton
  const doneBtn = document.createElement("button");
  doneBtn.className = "btn btn-success btn-sm me-2";
  doneBtn.textContent = "Done";

  doneBtn.addEventListener("click", () => {
    span.classList.toggle("text-decoration-line-through");
    span.classList.toggle("text-muted");
  });

  // edit Button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "btn btn-warning btn-sm me2";

  editBtn.addEventListener("click", () => {
    taskInput.value = span.textContent;
    li.remove();
  });
  // DeleteButton
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn btn-danger btn-sm ";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  btnGroup.appendChild(doneBtn);
  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnGroup);

  taskList.appendChild(li);

  taskInput.value = "";
});
