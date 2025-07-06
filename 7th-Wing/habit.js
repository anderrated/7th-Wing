const addBtn = document.getElementById('add-habit');
const form = document.getElementById('habit-form');
const closeBtn = document.getElementById('close-popup');
const saveBtn = document.getElementById('save-habit');
const habitTitleInput = document.getElementById('habit-title');
const nameError = document.getElementById('name-error');

addBtn.addEventListener("click", () => {
    form.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
    form.classList.add("hidden");
});
