
window.addEventListener('load', () => {

  const generatePasswordButton = document.querySelector("#generate-password");
  generatePasswordButton.addEventListener('click', generatePassword);

  function generatePassword() {
    const value = "acbdefghijklmnopqrstuvwxyzABCDEGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    const len = 16;
    let password = "";
    for (let i = 0; i < len; i++) {
      const randomNumber = Math.floor(Math.random() * value.length);
      password += value.charAt(randomNumber);
    }
    document.querySelector("#password").value = password;
  }

 
});
