# Redux-Thunk-Sopping-Cart

* This is a React Redux Thunk cart. In this project, the immer library was implemented. The purpose of    utilizing the library was that we didn't want to have to return a new state and always avoid mutation.   Because basically, with the useReducer, we always need to return the new state. However, with the immer  library behind the scenes, it does all the heavy lifting for us. 
* Therefore, we can modify the state directly. 
* I personally find it much cleaner code, and we don't have to return any state like we do using useReducer.

* In this mini project, the user will be able to add products to the cart and delete them with the       options: either using the arrows, removing them, or clearing the cart completely. Additionally, the user will be have a modal window.

![Screenshot 2023-12-08 at 10 32 50 PM](https://github.com/americanoame/Redux-Thunk-Sopping-Cart/assets/77306236/ea8025ac-7f0a-46d7-8dfa-dbc3c0cb2bab)
![Screenshot 2023-12-08 at 10 34 16 PM](https://github.com/americanoame/Redux-Thunk-Sopping-Cart/assets/77306236/a48b7591-60a4-47ae-a425-160e1d2ec6c2)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following dependencies and software is required to be installed on your system:

* Node v16.19.0
* React.js
* Redux
* React-redux
* Redux-thunk
* Axios
* immer
* @reduxjs/toolkit

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

### Starting front-end servers

* Build application

  ```bash
  npm run dev
  ```