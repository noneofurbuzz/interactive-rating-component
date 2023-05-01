# Interactive rating component

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](/screenshots/interative%20rating%20component.png)

![](/screenshots/interative%20rating%20component-1.png)

### Links

- Live Site URL: [Live site](https://noneofurbuzz.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### What I learned

This was my first project involving javascript so it was a struggle but I feel like i've learnt a lot of things from this projects.

```js
function number(value){
    const values = ["1","2","3","4","5"];
    localStorage.setItem("Value",value);
    document.getElementById(value).style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById(value).style.color = "hsl(0, 0%, 100%)";
    for(let i =0;i < values.length;i = i + 1){
        if (value !== values[i]){
            document.getElementById(values[i]).style.backgroundColor = "hsla(213, 19%, 21%,0.9)";
            document.getElementById(values[i]).style.color = "hsl(217, 12%, 63%)";
        }
    }
}
```
I think i'm most proud of this code because at this point I was about to give up and then voila, It worked.

### Continued development

I feel like the way I tackled this project could have been better and easier so i'm looking forward to that in the future.
I'm also going to start interf=grating javascript in all my projects from now on to get a proper understand of it.

### Useful resources

- [Transferring data from one HTML file to another](https://stackoverflow.com/questions/17502071/transfer-data-from-one-html-file-to-another)

## Author

- Github - [Ugochi Ike](https://github.com/noneofurbuzz)
- Linkedin - [My Linkedin](https://www.linkedin.com/in/ugochi-ike-0647aa244/)

