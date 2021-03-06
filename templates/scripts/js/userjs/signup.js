const passwordCompare = (form) => {
  if (form.password.value !== form.password2.value) {
    document.getElementById('password-compare').style.display = 'inline';
  } else {
    document.getElementById('password-compare').style.display = 'none';
  }
};

const signUp = () => {
  const myForm = document.getElementById('sign-up');
  const formData = new FormData(myForm);

  const url = 'https://sam-politico.herokuapp.com/api/v1/auth/signup';

  fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then(res => res.json())
    .then((response) => {
      if (response.status === 400) {
        document.getElementById('error-message').style.display = 'block';
        setTimeout(() => {
          document.getElementById('error-message').style.display = 'none';
        }, 3000);
      } else {
        document.getElementById('success-message').style.display = 'block';
        setTimeout(() => {
          document.getElementById('success-message').style.display = 'none';
        }, 4000);

        window.location = `${document.location.href.replace(/[^/]*$/, '')}viewparties.html`;
      }
    })
    .catch(error => console.error('Error: ', error));
};
