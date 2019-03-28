import React, { Component } from "react";
import store from "../Reducers";
import { deleteTodo, checkTodo, editTodo } from "../Actions/actions";

class Todos extends Component {
  // componentDidMount(){
  //   store.subscribe(() => {console.log(store.getState())})
  // }
  render() {

    const todos = store.getState();

    //console.log(todos.length);
    const TodoList = todos.length? (
      todos.map((todo, i) => {
        return (
          <div className="todolist" key={i}>
            <span>
                {todo.iscompleted ? <input className="status" onClick={()=>{store.dispatch(checkTodo(i))}} checked={true} type="checkbox"/>
                 :
                 <input className="status" type="checkbox" onClick={()=>{store.dispatch(checkTodo(i))}}/>}
            </span>
            {todo.iscompleted ?( <input className="listitem strike" value={todo.todocaption} disabled/>) : (<input className="listitem"  value={todo.todocaption} onChange={(e)=>{store.dispatch(editTodo(i,e.target.value))}}/>)}
            <span className="cross" onClick={() => {store.dispatch(deleteTodo(i))}}>X</span>
          </div>
        );})):
        (<p className="listitem">NO Left TODO</p>)
          return <div>{TodoList}</div>
    
    
  }
}





export default Todos;
