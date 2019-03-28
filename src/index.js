import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux' ;
import { Provider } from 'react-redux';
import store from "./Reducers"
// import {todoAction} from "./Actions/actions"

// const initState = []
// const myReducer = (state = initState,action) =>{
//     if(action.type === 'ADD_TODO'){
//         return[...state, {
//             todos:action.todo
//         }]
//     }
//     if(action.type === 'DEL_TODO'){
//         state.splice(2, 1);
//         return{
//            state
//         }
//     }
// }

// const store = createStore(myReducer);

// // const todoAction = {type: 'ADD_TODO', todo: 'Learn Redux'}

// store.subscribe(()=>{
//     console.log('state updated');
//     console.log(store.getState());
// })

// store.dispatch(todoAction());
// // store.dispatch(todoAction);
// store.dispatch({type:'ADD_TODO', todo: 'Learn React'});
// store.dispatch({type:'DEL_TODO'});


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
