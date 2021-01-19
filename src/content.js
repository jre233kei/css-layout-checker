window.onload = function() {
  const bodies = document.getElementsByTagName('*');
  for (const body of bodies){
    body.style.border = "2px solid red";
    body.style.boxSizing = "border-box";
  }
};