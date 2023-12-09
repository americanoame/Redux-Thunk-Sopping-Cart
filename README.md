# Redux-Thunk-Sopping-Cart

* This is a React Redux Thunk cart. In this project, the immer library was implemented. The purpose of    * utilizing the library was that we didn't want to have to return a new state and always avoid mutation. * Because basically, with the useReducer, we always need to return the new state. However, with the immer * library behind the scenes, it does all the heavy lifting for us. Therefore, we can modify the state * * * directly. I personally find it much cleaner code, and we don't have to return any state like we do * * * using useReducer.

* In this mini project, the user will be able to add products to the cart and delete them with three * 8 * options: either using the arrows, removing them, or clearing the cart completely. Additionally, the * * * user will be able to see the quantity of each product."