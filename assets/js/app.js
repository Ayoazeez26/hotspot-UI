const textSection = document.querySelector(".text-desc");
const textToBeAnim = document.querySelectorAll(".text-anim");

let counter = 0;
const lenght = textToBeAnim.length;

setInterval(() => {
  textToBeAnim.forEach((text, key) => {
    if (key === counter) {
      textToBeAnim[key].classList.add("auto-anim");
    } else {
      textToBeAnim[key].classList.remove("auto-anim");
    }
  });
  counter++;

  if (counter === lenght) {
    counter = 0;
  }
}, 3000);

const loginBtn = document.querySelector('.login');
if (loginBtn) {
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const loginSuccess = document.querySelector('.login-success');
    loginSuccess.classList.replace("hidden", "flex");
  })
}

const mobileLogin = document.querySelector('.login-mob');
if (mobileLogin) {
  const yellowBg = document.querySelector('.yellow-bg');
  const loginContent = document.querySelector('.login-content');
  mobileLogin.addEventListener('click', (e) => {
    e.preventDefault();
    yellowBg.classList.replace('flex','hidden-login');
    loginContent.classList.replace('hidden-login','flex');
  })
}