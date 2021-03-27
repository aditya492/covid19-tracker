
const htmlEl = document.getElementsByTagName('html')[ 0 ];
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : localStorage.setItem('theme', 'light');


if (currentTheme) {
  htmlEl.dataset.theme = currentTheme;
}

export const toggleTheme = (theme) => {
	console.log("utils",theme)
  htmlEl.dataset.theme = theme;
  localStorage.setItem('theme', theme);
}