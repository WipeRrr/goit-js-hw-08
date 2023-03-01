import throttled from 'lodash.throttle';

const FEEDBACK_FORM_STATE = 'feedback-form-state';
const formInputRef = document.querySelector('.feedback-form');
const throttledChange = throttled(onImputChange, 500);

formInputRef.addEventListener('input', throttledChange);
formInputRef.addEventListener(`submit`, onSubmit);

populateData();

const formData = {
  email: '',
  message: '',
};

function onImputChange(evt) {
  if (evt.target.nodeName == 'INPUT') {
    formData.email = evt.target.value;
  } else if (evt.target.nodeName == 'TEXTAREA') {
    formData.message = evt.target.value;
  }

  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE)));
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
}

function populateData() {
  const savedData = localStorage.getItem(FEEDBACK_FORM_STATE);
  const parsedSavedData = JSON.parse(savedData);
  console.log(parsedSavedData);
  console.log(savedData);
  if (savedData) {
    console.log(parsedSavedData.email);
    console.log(parsedSavedData.message);
    formInputRef.email.value = parsedSavedData.email;
    formInputRef.message.value = parsedSavedData.message;
  }
}
