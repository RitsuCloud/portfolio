document.querySelector('contact-button').addEventListener('click', jump)

function jump(anchor){
  window.location.href = "#"+anchor;
  window.scrollBy(0,-30) 
}
