# Frontend Mentor - Product feedback app solution

This is a solution to the [Product feedback app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-feedback-app-wbvUYqjR6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

Product feedback app is a full-stack project built in ReactJS, Styled-components, Redux-toolkit and Firebase.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete product feedback requests
- Receive form validations when trying to create/edit feedback requests
- Sort suggestions by most/least upvotes and most/least comments
- Filter suggestions by category
- Add comments and replies to a product feedback request
- Upvote product feedback requests
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![](https://raw.githubusercontent.com/agrajy10/product-feedback-app/master/screenshots/1.png)
![](https://raw.githubusercontent.com/agrajy10/product-feedback-app/master/screenshots/2.png)
![](https://raw.githubusercontent.com/agrajy10/product-feedback-app/master/screenshots/3.png)
![](https://raw.githubusercontent.com/agrajy10/product-feedback-app/master/screenshots/4.png)
![](https://raw.githubusercontent.com/agrajy10/product-feedback-app/master/screenshots/5.png)
![](https://raw.githubusercontent.com/agrajy10/product-feedback-app/master/screenshots/6.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/product-feedback-app-using-reactjs-styledcomponents-and-redux-toolki-ZHWRTyi5v](https://www.frontendmentor.io/solutions/product-feedback-app-using-reactjs-styledcomponents-and-redux-toolki-ZHWRTyi5v)
- Live Site URL: [https://product-feedback-board.netlify.app/](https://product-feedback-board.netlify.app/)

## My process

Just like any other project process of this project was same.

- Outlined all the components of the web-app.
- Created static version of the web-app in React.
- After completion of static version, moved on to state management.
  - First of all, completed user reigstration/login because data in the web-app would be entered by the registered users.
  - Completed Add/edit/delete feedback functionality of the web-app.
  - Then plotted data on various sections of the web-app.
  - In the end tried to implement comment and replies functionality but wasn't able to the replies part.

### Built with

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [Firebase](https://firebase.google.com/) - For database and authentication
- [Redux-toolkit](https://redux-toolkit.js.org/) - For state management
- [Framer motion](https://www.framer.com/motion/) - For animation
- [Formik](https://formik.org/) - For forms
- [Yup](https://github.com/jquense/yup) - For form validation
- [Headless ui](https://headlessui.dev/) - For accessible components

### What I learned

- This was my first project in which I used Redux-toolkit. With all the basic stuff also learned how to handle asynchronous actions with createAsyncThunk
- Used framer motion for the first time to animate routes.
- Even if I didn't not use them, learned about sub-collections (wanted to use them for comment and replies but I wasn't able to figure how to query all the sub-collections).
- I realized when I was trying to implement comment that I should have gone with relational database instead of NoSQL database because of the relationship among components.
- Transient props in styled-components.

### Continued development

I will recreate this web-app with relational database and for that I'll learn about Supabase which is similar to firebase.
