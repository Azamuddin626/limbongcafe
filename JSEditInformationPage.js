// Save Button to store
var saveButton = document.querySelector('.edit-info-box .save-button');

saveButton.addEventListener('click', function() {
  // Get the values of all of the inputs
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var firstName = document.querySelector('#first-name').value;
  var lastName = document.querySelector('#last-name').value;
  var password = document.querySelector('#password').value;
  var contactInfo = document.querySelector('#contact-info').value;
  var email = document.querySelector('#email').value;

  // Store the values in an object
  var userInfo = {
    gender: gender,
    firstName: firstName,
    lastName: lastName,
    password: password,
    contactInfo: contactInfo,
    email: email
  };

  // Save the object to local storage
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
});

saveButton.addEventListener('click', function() {
  saveButton.classList.add('clicked');
});