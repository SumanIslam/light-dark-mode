// variables
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector('.toggle-icon');
const nav = document.querySelector('#nav');
const textBox = document.querySelector('#text-box');
const img1 = document.querySelector('#image1');
const img2 = document.querySelector('#image2');
const img3 = document.querySelector('#image3');

const darkTheme = 'dark';
const lightThem = 'light';

// img mode function
const imgMode = (color) => {
  img1.src = `img/undraw_proud_coder_${color}.svg`;
  img2.src = `img/undraw_feeling_proud_${color}.svg`;
  img3.src = `img/undraw_conceptual_idea_${color}.svg`;
}
// toggle dark light mode
const toggleLightDarkMode = (isDark) => {
  toggleIcon.children[0].textContent = isDark === darkTheme ? 'Dark Mode' : 'Light Mode';
  nav.style.backgroundColor = isDark === darkTheme ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  isDark === darkTheme ? toggleIcon.children[1].classList.replace('fa-sun','fa-moon') : toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
  isDark === darkTheme ? imgMode(darkTheme) : imgMode(lightThem);
}

// switchTheme function
const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', darkTheme);
    toggleLightDarkMode(darkTheme);
    // set theme in local storage
    localStorage.setItem('theme', darkTheme);
  } else {
    document.documentElement.setAttribute('data-theme', lightThem);
    toggleLightDarkMode(lightThem);
     // set theme in local storage
    localStorage.setItem('theme', lightThem);
  }
}
toggleSwitch.addEventListener('change', switchTheme);

//get theme from local storage
const currentTheme = localStorage.getItem('theme');
// console.log(currentTheme);
if(currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
}
if(currentTheme === darkTheme) {
  toggleSwitch.checked = true;
  toggleLightDarkMode(darkTheme);
}