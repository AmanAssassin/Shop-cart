const loginBtn = document.getElementById('login');
const signBtn = document.getElementById('signup');

loginBtn.addEventListener('click', () => {
  location.href = './login/index.html';
});

signBtn.addEventListener('click', () => {
  location.href = './signup/index.html';
});

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const nextTheme = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', nextTheme);
  localStorage.setItem('theme', nextTheme);
}

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
