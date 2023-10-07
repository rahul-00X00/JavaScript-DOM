# JavaScript-DOM

## Everything about javascript and DOM

### Adding Event Listeners

> We have button and we want to execute a function when the button got clicked, so how we do that?

We add `event listeners` to the button and tell it what type of event we want to use and what to do when event got triggered basically executing a function.

And we something like below,

`element(obj).addEventListener('click', name_of_function)`

Eg:

```
handleClick() {
    console.log('I got clicked');
} // this will be the function that will be triggered when the click event has been identified
button_obj = document.querySelector('button');
button_obj.addEventListener('click', handleClick);
```

> Note: we don't add parenthesis when we use function name in addEventListener method, instead of straight forward call we are using this function

Out in the wild, people use anonymous function

```
button_obj.addEventListener('click', function() {
    console.log('I got clicked');
});
```

### Higher Order Functions: Passing Functions as Input

We have passed function name without parenthesis inside the addEventListener Function and that is what is exactly known as higher order function.

> Higher Order functions are the functions that take other functions as input

Example;

```
function add(num1, num2) {
   return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function calculator(num1,  num2, operator) {
    return operator(num1, num2);
}

//Function call
calculator(2, 3, add); --> 5
calculator(4, 2, subtract); --> 2
```

### Adding Sound and dealing with JavaScript this keyword

To add a sound we use Audio() class and then we create a object from it

```
var audio = new Audio('/path to audio file');
audio.play();
```

:index pointing up: Here we have created a audio object and then we used one of it's method name play()

<<<<<<< HEAD
**JavaScript +this**
=======
**JavaScript $${\color{yellow}this}$$**
>>>>>>> 4b5d562 (Added backgroung images and audio)

On adding eventListener to the button and then we console.log `this` we get whole element as output

```
<button>Click me</button>

document.querySelector('button').addEventListener('click', function() {
    console.log(this); // will print the button element
    this.style.color = 'red'; // we can also manipulate the element using this
})
```
