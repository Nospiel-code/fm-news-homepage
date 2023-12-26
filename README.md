# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot



### Links

- [Solution URL](https://github.com/Nospiel-code/fm-news-homepage)
- [Live Site URL](https://nospiel-code.github.io/fm-news-homepage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- TailwindCSS


### What I learned

How to make a mobile hamburger menu

```html
      <!-- Hamburger Icon -->
      <button id="menu-btn" class="block hamburger md:hidden focus:outline-none z-20">
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </button>
    </div>
    <!-- Mobile Menu -->
    <div class="md:hidden">
      <div id="shadow" class="fixed hidden min-h-full z-10 w-[30%] bg-secondary900 opacity-40 left-0 top-0"></div>
      <div id="menu" class="fixed hidden min-h-full z-10 w-[70%] flex-col pt-32 pl-8 space-y-6 right-0 top-0 bg-white">
        <a href="#">Home</a>
        <a href="#">New</a>
        <a href="#">Popular</a>
        <a href="#">Trending</a>
        <a href="#">Categories</a>
      </div>
```
```css
.hamburger {
    cursor: pointer;
    width: 40px;
    height: 28px;
    transition: all 0.25;
    position: relative;
    margin-top: 8px;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: black;
    transform: rotate(0);
    transition: all 0.5s;
}

.hamburger-middle {
    transform: translateY(8px);
}

.hamburger-bottom {
    transform: translateY(16px);
}

.open {
    transform: rotate(90deg);
    transform: translateY(0px);
}

.open .hamburger-top {
    transform: rotate(45deg) translateY(6px) translate(6px);
}

.open .hamburger-middle {
    display: none;
}

.open .hamburger-bottom {
    transform: rotate(-45deg) translateY(6px) translate(-6px);
}
```
```js
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const shadow = document.getElementById("shadow");

btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    shadow.classList.toggle("flex");
    shadow.classList.toggle("hidden");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
})
```

### Useful resources

- [Traversy Media Walkthrough](https://www.youtube.com/watch?app=desktop&v=dFgzHOX84xQ&ab_channel=TraversyMedia) - I built the hamburger menu the way it was built in this video



## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)



