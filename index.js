const input = document.getElementById('input');
function addingEventListener() {
  function clickAlert() {
    alert('I was clicked!');
  }
  input.addEventListener('click', clickAlert); 
}
