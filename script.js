// variables
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector('.toggle-icon');
const nav = document.querySelector('#nav');
const textBox = document.querySelector('#text-box');
const img1 = document.querySelector('#image1');
const img2 = document.querySelector('#image2');
const img3 = document.querySelector('#image3');

// img mode function
const imgMode = (color) => {
  img1.src = `img/undraw_proud_coder_${color}.svg`;
  img2.src = `img/undraw_feeling_proud_${color}.svg`;
  img3.src = `img/undraw_conceptual_idea_${color}.svg`;
}
// darkMode function
const darkMode = () => {
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  imgMode('dark');
}

//lightMode function
const lightMode = () => {
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  imgMode('light');
}
// switchTheme function
const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
  }
}
toggleSwitch.addEventListener('change', switchTheme);