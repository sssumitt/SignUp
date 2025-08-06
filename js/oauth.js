// oauth.js

document.getElementById('googleBtn').addEventListener('click', () => {
  window.location.href = '${process.env.url}/auth/google';
});
