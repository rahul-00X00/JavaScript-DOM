
// Adding Event Listener to all the buttons
const drumButtons = document.querySelectorAll('.drum');

// function handleClick() {
//     console.log("I got clicked!");
// }

// for (var i=0; i<document.drumButtons.length; i++) {
//     drumButtons[i].addEventListener('click', handleClick);
// }

// Anonymous function used in addEventListener
for (var i=0; i<drumButtons.length; i++) {
    drumButtons[i].addEventListener('click', function() {
        alert('I got clicked');
    })
}