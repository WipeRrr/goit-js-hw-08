import throttle from 'lodash.throttle';

const FEEDBACK_FORM_STATE = 'feedback-form-state';
const inputRef = document.querySelector('.feedback-form');

inputRef.addEventListener(`input`, onImputChange);
inputRef.addEventListener(`submit`, onSubmit);

populateData();
function onImputChange(evt) {
  const email = evt.currentTarget.elements.email.value;

  const message = evt.currentTarget.elements.message.value;
  const formData = {
    email,
    message,
  };

  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();
  console.log(inputRef.email.value, inputRef.message.value);
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
}

function populateData() {
  const savedData = localStorage.getItem(FEEDBACK_FORM_STATE);
  const parsedSavedData = JSON.parse(savedData);
  if (savedData) {
    console.log(parsedSavedData.email);
    console.log(parsedSavedData.message);
    inputRef.email.value = parsedSavedData.email;
    inputRef.message.value = parsedSavedData.message;
  }
}
