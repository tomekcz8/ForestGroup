













document.addEventListener("DOMContentLoaded", function() { 
  const yrSpan = document.querySelector('.footer__year');
  const footerYear = new Date().getFullYear();
  yrSpan.textContent = footerYear;
});