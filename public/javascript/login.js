async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
      const response = await fetch('/api/users/login', {
          method: 'post',
          body: JSON.stringify({
              email,
              password
          }),
          headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
          alert('You are now logged in!');
          document.location.replace('/selection');
      } else {
          alert(response.statusText);
      }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const first_name = document.querySelector('#firstname-signup').value.trim();
  const last_name = document.querySelector('#lastname-signup').value.trim();
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (first_name && last_name && username && email && password) {
      const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
              first_name,
              last_name,
              username,
              email,
              password
          }),
          headers: { 'Content-type': 'application/json' }
      });

      if (response.ok) {
          document.location.replace('/selection');
      } else {
          alert(response.statusText);
      }
  }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('#login-form').addEventListener('submit', loginFormHandler);